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
    var __alloyId9 = [];
    __alloyId9.push($.__views.list);
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
    __alloyId9.push($.__views.list);
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
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "Carnicería",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        left: "110px",
        id: "__alloyId10"
    });
    $.__views.categoria.add($.__views.__alloyId10);
    $.__views.filtrarBtn = Ti.UI.createImageView({
        width: "125px",
        height: "68px",
        right: "10px",
        image: "/filtrar.png",
        id: "filtrarBtn"
    });
    $.__views.categoria.add($.__views.filtrarBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId9.push($.__views.list);
    $.__views.producto = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "460px",
        id: "producto"
    });
    $.__views.list.add($.__views.producto);
    $.__views.productoImg = Ti.UI.createImageView({
        width: "193px",
        height: "316px",
        top: "10",
        image: "/productoImg.png",
        id: "productoImg"
    });
    $.__views.producto.add($.__views.productoImg);
    $.__views.productoLabel1 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "18pt"
        },
        left: "20",
        top: "180",
        color: "#555454",
        text: "Chuleta Caramelizada",
        id: "productoLabel1"
    });
    $.__views.producto.add($.__views.productoLabel1);
    $.__views.productoLabel2 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "18pt"
        },
        left: "20",
        top: "200",
        color: "#555454",
        text: "Plumrose (Kg)",
        id: "productoLabel2"
    });
    $.__views.producto.add($.__views.productoLabel2);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId9.push($.__views.list);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "260px",
        top: "10",
        id: "precioUnico"
    });
    $.__views.list.add($.__views.precioUnico);
    $.__views.precioUnicoLabel1 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "20pt"
        },
        left: "20",
        top: "10",
        color: "#black",
        text: "Precio Único",
        id: "precioUnicoLabel1"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel1);
    $.__views.precioUnicoLabel2 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "20pt"
        },
        left: "20",
        top: "30",
        color: "#black",
        text: "Bs. 205,00",
        id: "precioUnicoLabel2"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel2);
    $.__views.agregarListaBtn = Ti.UI.createImageView({
        image: "/agregarListaBtn.png",
        top: "60",
        width: "450px",
        height: "96px",
        id: "agregarListaBtn"
    });
    $.__views.precioUnico.add($.__views.agregarListaBtn);
    $.__views.__alloyId8 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        separatorStyle: "NONE",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId9,
        id: "__alloyId8"
    });
    $.__views.inicioScreen.add($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;