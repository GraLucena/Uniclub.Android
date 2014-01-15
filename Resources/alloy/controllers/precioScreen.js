function Controller() {
    function openCamera() {
        Titanium.Media.showCamera({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        width: win.width,
                        height: win.height,
                        image: event.media
                    });
                    win.add(imageView);
                } else alert("got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "precioScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.inicioScreen = Ti.UI.createView({
        backgroundColor: "#9C213F",
        id: "inicioScreen"
    });
    $.__views.inicioScreen && $.addTopLevelView($.__views.inicioScreen);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: "3%",
        top: "3%",
        image: "/menuIcon.png",
        id: "menuBtn"
    });
    $.__views.inicioScreen.add($.__views.menuBtn);
    $.__views.logoImg = Ti.UI.createImageView({
        top: "3%",
        right: "44%",
        image: "/unicasaIcon.png",
        id: "logoImg"
    });
    $.__views.inicioScreen.add($.__views.logoImg);
    $.__views.carritoBtn = Ti.UI.createImageView({
        top: "3%",
        right: "3%",
        image: "/carritoIcon.png",
        id: "carritoBtn"
    });
    $.__views.inicioScreen.add($.__views.carritoBtn);
    $.__views.view = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundColor: "#bebcbc",
        top: "90",
        id: "view"
    });
    $.__views.inicioScreen.add($.__views.view);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        top: "5%",
        hintText: "Palabra Clave"
    });
    $.__views.view.add($.__views.search);
    $.__views.palabraClave = Ti.UI.createImageView({
        image: "/palabraClaveBtn.png",
        top: "230",
        width: "410px",
        height: "104px",
        id: "palabraClave"
    });
    $.__views.view.add($.__views.palabraClave);
    $.__views.codigoBarra = Ti.UI.createImageView({
        image: "/codigoBarraBtn.png",
        width: "410px",
        height: "104px",
        top: "360",
        id: "codigoBarra"
    });
    $.__views.view.add($.__views.codigoBarra);
    openCamera ? $.__views.codigoBarra.addEventListener("click", openCamera) : __defers["$.__views.codigoBarra!click!openCamera"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    __defers["$.__views.codigoBarra!click!openCamera"] && $.__views.codigoBarra.addEventListener("click", openCamera);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;