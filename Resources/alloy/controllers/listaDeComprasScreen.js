function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listaDeComprasScreen";
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
    var __alloyId25 = [];
    __alloyId25.push($.__views.list);
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
    __alloyId25.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        text: "Descripción",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        left: "50px",
        id: "__alloyId26"
    });
    $.__views.categoria.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        text: "Precio",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        right: "30px",
        id: "__alloyId27"
    });
    $.__views.categoria.add($.__views.__alloyId27);
    $.__views.label = Ti.UI.createLabel({
        left: "50px",
        top: "70px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "10pt"
        },
        text: "El monto total de esta lista es un precio estimado",
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
    __alloyId25.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "180px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.productoImg1 = Ti.UI.createImageView({
        image: "/productoImg7.png",
        left: "0px",
        id: "productoImg1"
    });
    $.__views.productos.add($.__views.productoImg1);
    $.__views.productoInfo1 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "180px",
        top: "30",
        color: "#555454",
        text: "Chuleta Caramelizada \nPlumrose (Kg)",
        id: "productoInfo1"
    });
    $.__views.productos.add($.__views.productoInfo1);
    $.__views.productoPrecio1 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        right: "30px",
        top: "30",
        color: "black",
        text: "BsF. 205,00",
        id: "productoPrecio1"
    });
    $.__views.productos.add($.__views.productoPrecio1);
    $.__views.eliminarBtn = Ti.UI.createImageView({
        image: "/eliminarBtn.png",
        top: "50",
        right: "30px",
        id: "eliminarBtn"
    });
    $.__views.productos.add($.__views.eliminarBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "180px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.productoImg2 = Ti.UI.createImageView({
        image: "/brownieImg.png",
        left: "0px",
        id: "productoImg2"
    });
    $.__views.productos.add($.__views.productoImg2);
    $.__views.productoInfo2 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "180px",
        top: "30",
        color: "#555454",
        text: "Brownies Dany's \n480 (gr)",
        id: "productoInfo2"
    });
    $.__views.productos.add($.__views.productoInfo2);
    $.__views.productoPrecio2 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        right: "30px",
        top: "30",
        color: "black",
        text: "BsF. 96,90",
        id: "productoPrecio2"
    });
    $.__views.productos.add($.__views.productoPrecio2);
    $.__views.eliminarBtn = Ti.UI.createImageView({
        image: "/eliminarBtn.png",
        top: "50",
        right: "30px",
        id: "eliminarBtn"
    });
    $.__views.productos.add($.__views.eliminarBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "180px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.productoImg3 = Ti.UI.createImageView({
        image: "/productoImg2.png",
        left: "0px",
        id: "productoImg3"
    });
    $.__views.productos.add($.__views.productoImg3);
    $.__views.productoInfo3 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "180px",
        top: "30",
        color: "#555454",
        text: "Galleta Chocolate \nCosta 140 (gr)",
        id: "productoInfo3"
    });
    $.__views.productos.add($.__views.productoInfo3);
    $.__views.productoPrecio3 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        right: "30px",
        top: "30",
        color: "black",
        text: "BsF. 18,70",
        id: "productoPrecio3"
    });
    $.__views.productos.add($.__views.productoPrecio3);
    $.__views.eliminarBtn = Ti.UI.createImageView({
        image: "/eliminarBtn.png",
        top: "50",
        right: "30px",
        id: "eliminarBtn"
    });
    $.__views.productos.add($.__views.eliminarBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.resumenLista = Ti.UI.createView({
        backgroundColor: "white",
        top: "10",
        height: "170px",
        id: "resumenLista"
    });
    $.__views.list.add($.__views.resumenLista);
    $.__views.checkImg = Ti.UI.createImageView({
        image: "/checkImg.png",
        left: "5",
        top: "25",
        width: "26",
        height: "25",
        id: "checkImg"
    });
    $.__views.resumenLista.add($.__views.checkImg);
    $.__views.selecionadoLabel = Ti.UI.createLabel({
        color: "9c213f",
        left: "36",
        font: {
            font: "Helvetica",
            fontSize: "15pt"
        },
        text: "Seleccionado (0)",
        id: "selecionadoLabel"
    });
    $.__views.resumenLista.add($.__views.selecionadoLabel);
    $.__views.estimadoLabel = Ti.UI.createLabel({
        color: "9c213f",
        right: "10",
        font: {
            font: "Helvetica",
            fontSize: "15pt"
        },
        text: "Est. Total: Bs.F 320,60",
        id: "estimadoLabel"
    });
    $.__views.resumenLista.add($.__views.estimadoLabel);
    $.__views.__alloyId24 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        separatorStyle: "NONE",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId25,
        id: "__alloyId24"
    });
    $.__views.inicioScreen.add($.__views.__alloyId24);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;