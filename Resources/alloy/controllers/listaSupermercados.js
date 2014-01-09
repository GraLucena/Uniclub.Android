function Controller() {
    function infoSupermercado() {
        var win = Alloy.createController("detalleSupermercado").getView();
        var slide_it_left = Titanium.UI.createAnimation();
        slide_it_left.left = 0;
        slide_it_left.duration = 500;
        var slide_it_right = Titanium.UI.createAnimation();
        slide_it_right.left = "-90%";
        slide_it_right.curve = Titanium.UI.ANIMATION_CURVE_EASE_OUT;
        slide_it_right.duration = 1e3;
        $.inicioScreen.add(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listaSupermercados";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.inicioScreen = Ti.UI.createView({
        backgroundColor: "#9C213F",
        height: "100%",
        width: "100%",
        id: "inicioScreen"
    });
    $.__views.inicioScreen && $.addTopLevelView($.__views.inicioScreen);
    $.__views.main = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundColor: "#9C213F",
        height: "130px",
        top: "0",
        id: "main"
    });
    $.__views.inicioScreen.add($.__views.main);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: 7,
        top: 25,
        width: "65px",
        height: "65px",
        image: "/menuIcon.png",
        id: "menuBtn"
    });
    $.__views.main.add($.__views.menuBtn);
    $.__views.logoImg = Ti.UI.createImageView({
        top: 17,
        right: 130,
        image: "/unicasaIcon.png",
        id: "logoImg"
    });
    $.__views.main.add($.__views.logoImg);
    $.__views.carritoBtn = Ti.UI.createImageView({
        top: 25,
        right: 7,
        width: "65px",
        height: "65px",
        image: "/carritoIcon.png",
        id: "carritoBtn"
    });
    $.__views.main.add($.__views.carritoBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    var __alloyId29 = [];
    __alloyId29.push($.__views.list);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        width: Ti.UI.FILL,
        height: "43",
        top: "0",
        hintText: "Palabra Clave"
    });
    $.__views.list.add($.__views.search);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId29.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.atrasBtn = Ti.UI.createImageView({
        left: "10px",
        image: "/atras.png",
        id: "atrasBtn"
    });
    $.__views.categoria.add($.__views.atrasBtn);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        text: "Charallave",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        left: "110px",
        id: "__alloyId30"
    });
    $.__views.categoria.add($.__views.__alloyId30);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId29.push($.__views.list);
    $.__views.supermercados = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "160px",
        id: "supermercados"
    });
    $.__views.list.add($.__views.supermercados);
    $.__views.tittle = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        top: "10",
        left: "60px",
        text: "Centro Comercial Los Samanes.",
        id: "tittle"
    });
    $.__views.supermercados.add($.__views.tittle);
    $.__views.info = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "30",
        left: "60px",
        text: "Dirección: Av. Bolívar cerca del \nBanco Provincial. Charallave",
        id: "info"
    });
    $.__views.supermercados.add($.__views.info);
    $.__views.verMasBtn = Ti.UI.createImageView({
        image: "/verMasBtn.png",
        right: "5",
        top: "30",
        id: "verMasBtn"
    });
    $.__views.supermercados.add($.__views.verMasBtn);
    infoSupermercado ? $.__views.verMasBtn.addEventListener("click", infoSupermercado) : __defers["$.__views.verMasBtn!click!infoSupermercado"] = true;
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId29.push($.__views.list);
    $.__views.supermercados = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "160px",
        id: "supermercados"
    });
    $.__views.list.add($.__views.supermercados);
    $.__views.tittle = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        top: "10",
        left: "60px",
        text: "Centro Comercial Residencias Charallave.",
        id: "tittle"
    });
    $.__views.supermercados.add($.__views.tittle);
    $.__views.info = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "30",
        left: "60px",
        text: "Dirección: Av. Bolívar",
        id: "info"
    });
    $.__views.supermercados.add($.__views.info);
    $.__views.verMasBtn = Ti.UI.createImageView({
        image: "/verMasBtn.png",
        right: "5",
        top: "30",
        id: "verMasBtn"
    });
    $.__views.supermercados.add($.__views.verMasBtn);
    $.__views.__alloyId28 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId29,
        id: "__alloyId28"
    });
    $.__views.inicioScreen.add($.__views.__alloyId28);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    __defers["$.__views.verMasBtn!click!infoSupermercado"] && $.__views.verMasBtn.addEventListener("click", infoSupermercado);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;