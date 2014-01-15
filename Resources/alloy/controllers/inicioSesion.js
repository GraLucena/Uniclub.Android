function Controller() {
    function inicie() {
        var win = Alloy.createController("menu").getView();
        win.open();
        $.container2.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inicioSesion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container2 = Ti.UI.createView({
        backgroundColor: "#9C213F",
        id: "container2"
    });
    $.__views.container2 && $.addTopLevelView($.__views.container2);
    $.__views.uniclubImg = Ti.UI.createImageView({
        top: "20%",
        image: "/uniclubIcon.png",
        id: "uniclubImg"
    });
    $.__views.container2.add($.__views.uniclubImg);
    inicie ? $.__views.uniclubImg.addEventListener("click", inicie) : __defers["$.__views.uniclubImg!click!inicie"] = true;
    $.__views.__alloyId15 = Ti.UI.createTextArea({
        backgroundColor: "white",
        width: "70%",
        height: "8%",
        borderRadius: "7",
        top: "50%",
        hintText: "Cédula",
        id: "__alloyId15"
    });
    $.__views.container2.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createTextArea({
        backgroundColor: "white",
        width: "70%",
        height: "8%",
        borderRadius: "7",
        top: "58.1%",
        hintText: "Contraseña",
        id: "__alloyId16"
    });
    $.__views.container2.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: "Helvetica",
        top: "80%",
        text: "Olvidó Su Contraseña?",
        id: "__alloyId17"
    });
    $.__views.container2.add($.__views.__alloyId17);
    $.__views.inicioSesionImg = Ti.UI.createImageView({
        top: "70%",
        image: "/inicioSesionIcon.png",
        id: "inicioSesionImg"
    });
    $.__views.container2.add($.__views.inicioSesionImg);
    inicie ? $.__views.inicioSesionImg.addEventListener("click", inicie) : __defers["$.__views.inicioSesionImg!click!inicie"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.uniclubImg!click!inicie"] && $.__views.uniclubImg.addEventListener("click", inicie);
    __defers["$.__views.inicioSesionImg!click!inicie"] && $.__views.inicioSesionImg.addEventListener("click", inicie);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;