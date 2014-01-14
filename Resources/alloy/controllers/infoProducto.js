function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "infoProducto";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.inicioScreen = Ti.UI.createView({
        backgroundColor: "#9C213F",
        id: "inicioScreen"
    });
    $.__views.inicioScreen && $.addTopLevelView($.__views.inicioScreen);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: 7,
        top: 25,
        image: "/menuIcon.png",
        id: "menuBtn"
    });
    $.__views.inicioScreen.add($.__views.menuBtn);
    $.__views.logoImg = Ti.UI.createImageView({
        top: 17,
        right: "45%",
        image: "/unicasaIcon.png",
        id: "logoImg"
    });
    $.__views.inicioScreen.add($.__views.logoImg);
    $.__views.carritoBtn = Ti.UI.createImageView({
        top: 25,
        right: 7,
        image: "/carritoIcon.png",
        id: "carritoBtn"
    });
    $.__views.inicioScreen.add($.__views.carritoBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    var __alloyId7 = [];
    __alloyId7.push($.__views.list);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        width: Ti.UI.FILL,
        height: "70",
        top: "20",
        hintText: "Palabra Clave"
    });
    $.__views.list.add($.__views.search);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId7.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "73",
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
    $.__views.label = Ti.UI.createLabel({
        left: "60px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Carnicería",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.filtrarBtn = Ti.UI.createImageView({
        id: "filtrarBtn"
    });
    $.__views.categoria.add($.__views.filtrarBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId7.push($.__views.list);
    $.__views.producto = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "350px",
        id: "producto"
    });
    $.__views.list.add($.__views.producto);
    $.__views.productoImg = Ti.UI.createImageView({
        width: "133px",
        height: "206px",
        top: "10",
        image: "/productoImg.png",
        id: "productoImg"
    });
    $.__views.producto.add($.__views.productoImg);
    $.__views.productoLabel1 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "10pt"
        },
        left: "20",
        top: "220",
        color: "#555454",
        text: "Chuleta Caramelizada \nPlumrose (Kg)",
        id: "productoLabel1"
    });
    $.__views.producto.add($.__views.productoLabel1);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId7.push($.__views.list);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "200px",
        top: "10",
        id: "precioUnico"
    });
    $.__views.list.add($.__views.precioUnico);
    $.__views.precioUnicoLabel1 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "9pt",
            fontWeight: "Bold"
        },
        left: "20",
        top: "10",
        color: "black",
        text: "Precio Único \nBs. 205,00",
        id: "precioUnicoLabel1"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel1);
    $.__views.agregarListaBtn = Ti.UI.createImageView({
        image: "/agregarListaBtn.png",
        top: "100",
        id: "agregarListaBtn"
    });
    $.__views.precioUnico.add($.__views.agregarListaBtn);
    $.__views.__alloyId6 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorStyle: "NONE",
        separatorColor: "transparent",
        data: __alloyId7,
        id: "__alloyId6"
    });
    $.__views.inicioScreen.add($.__views.__alloyId6);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;