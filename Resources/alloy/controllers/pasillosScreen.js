function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "pasillosScreen";
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
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    var __alloyId44 = [];
    __alloyId44.push($.__views.list);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        top: "5%",
        hintText: "Palabra Clave"
    });
    $.__views.list.add($.__views.search);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId44.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "73",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.label = Ti.UI.createLabel({
        left: "40px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "9pt"
        },
        text: "Pasillo 1",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId44.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "70px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        left: "60px",
        text: "Galletas",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId44.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "70px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        left: "60px",
        text: "Cereales",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId44.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "70px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        left: "60px",
        text: "Leche en Polvo",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId44.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "70px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        left: "60px",
        text: "Granola",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId44.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "70px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.listaProductos = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        left: "60px",
        text: "Almíbar",
        id: "listaProductos"
    });
    $.__views.productos.add($.__views.listaProductos);
    $.__views.__alloyId43 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorStyle: "NONE",
        separatorColor: "#e4e4e4",
        data: __alloyId44,
        id: "__alloyId43"
    });
    $.__views.inicioScreen.add($.__views.__alloyId43);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;