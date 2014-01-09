function Controller() {
    function infoProducto() {
        var win = Alloy.createController("infoProducto").getView();
        $.inicioScreen.add(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "catalogoScreen";
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
    var __alloyId1 = [];
    __alloyId1.push($.__views.list);
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
    __alloyId1.push($.__views.list);
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
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "Carnicería",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        left: "110px",
        id: "__alloyId2"
    });
    $.__views.categoria.add($.__views.__alloyId2);
    $.__views.label = Ti.UI.createLabel({
        left: "110px",
        top: "70px",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "10pt"
        },
        text: "Estos precios estan sujetos a cambio",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
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
    __alloyId1.push($.__views.list);
    $.__views.rowContainer2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "210px",
        backgroundColor: "white",
        id: "rowContainer2"
    });
    $.__views.list.add($.__views.rowContainer2);
    $.__views.productoImg = Ti.UI.createImageView({
        image: "/productoImg7.png",
        width: "96",
        height: "96",
        left: "20",
        id: "productoImg"
    });
    $.__views.rowContainer2.add($.__views.productoImg);
    infoProducto ? $.__views.productoImg.addEventListener("click", infoProducto) : __defers["$.__views.productoImg!click!infoProducto"] = true;
    $.__views.infoProducto = Ti.UI.createLabel({
        text: "Chuleta Caramelizada \nPlumrose (Kg)",
        font: {
            font: "Helvetica",
            fontSize: "16pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "10",
        top: "6",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "ff5400",
        borderRadius: "4",
        width: "160",
        height: "48",
        top: "50",
        right: "10",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "4",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        color: "white",
        text: "Bs.F 205,00",
        top: "4",
        right: "4",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "17",
        left: "4",
        width: "30",
        height: "30",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        color: "white",
        left: "35",
        top: "25",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId1.push($.__views.list);
    $.__views.rowContainer2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "210px",
        backgroundColor: "white",
        id: "rowContainer2"
    });
    $.__views.list.add($.__views.rowContainer2);
    $.__views.productoImg2 = Ti.UI.createImageView({
        image: "/productoImg6.png",
        width: "96",
        height: "96",
        left: "20",
        id: "productoImg2"
    });
    $.__views.rowContainer2.add($.__views.productoImg2);
    $.__views.infoProducto2 = Ti.UI.createLabel({
        text: "Costilla Salsa Bbq \nPlumrose (Kg)",
        font: {
            font: "Helvetica",
            fontSize: "15pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "10",
        top: "6",
        id: "infoProducto2"
    });
    $.__views.rowContainer2.add($.__views.infoProducto2);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "ff5400",
        borderRadius: "4",
        width: "160",
        height: "48",
        top: "50",
        right: "10",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "4",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio2 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        color: "white",
        text: "Bs.F 303,00",
        top: "4",
        right: "4",
        id: "precio2"
    });
    $.__views.precioUnico.add($.__views.precio2);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "17",
        left: "4",
        width: "30",
        height: "30",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        color: "white",
        left: "35",
        top: "25",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId1.push($.__views.list);
    $.__views.rowContainer2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "210px",
        backgroundColor: "white",
        id: "rowContainer2"
    });
    $.__views.list.add($.__views.rowContainer2);
    $.__views.productoImg3 = Ti.UI.createImageView({
        image: "/productoNoImg.png",
        width: "96",
        height: "96",
        left: "20",
        id: "productoImg3"
    });
    $.__views.rowContainer2.add($.__views.productoImg3);
    $.__views.infoProducto3 = Ti.UI.createLabel({
        text: "Costilla de Pollo \nPlumrose (Kg)",
        font: {
            font: "Helvetica",
            fontSize: "15pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "10",
        top: "6",
        id: "infoProducto3"
    });
    $.__views.rowContainer2.add($.__views.infoProducto3);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "ff5400",
        borderRadius: "4",
        width: "160",
        height: "48",
        top: "50",
        right: "10",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "4",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio3 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        color: "white",
        text: "Bs.F 303,00",
        top: "4",
        right: "4",
        id: "precio3"
    });
    $.__views.precioUnico.add($.__views.precio3);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "17",
        left: "4",
        width: "30",
        height: "30",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        color: "white",
        left: "35",
        top: "25",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId1,
        id: "__alloyId0"
    });
    $.__views.inicioScreen.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    __defers["$.__views.productoImg!click!infoProducto"] && $.__views.productoImg.addEventListener("click", infoProducto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;