function Controller() {
    function infoProducto() {
        var win = Alloy.createController("infoProducto").getView();
        $.inicioScreen.add(win);
    }
    function agregarALista() {
        var listaDeComprasScreen4 = Alloy.createController("listaDeComprasScreen4").getView();
        $.inicioScreen.add(listaDeComprasScreen4);
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
    var __alloyId1 = [];
    __alloyId1.push($.__views.list);
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
    __alloyId1.push($.__views.list);
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
        text: "Carnicería",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.label1 = Ti.UI.createLabel({
        left: "110px",
        top: "70px",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "4pt"
        },
        text: "Estos precios estan sujetos a cambio",
        id: "label1"
    });
    $.__views.categoria.add($.__views.label1);
    $.__views.filtrarBtn = Ti.UI.createImageView({
        right: "10px",
        image: "/filtrar.png",
        id: "filtrarBtn"
    });
    $.__views.categoria.add($.__views.filtrarBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
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
        left: "20",
        id: "productoImg"
    });
    $.__views.rowContainer2.add($.__views.productoImg);
    infoProducto ? $.__views.productoImg.addEventListener("click", infoProducto) : __defers["$.__views.productoImg!click!infoProducto"] = true;
    $.__views.infoProducto = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "8pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "10",
        top: "6",
        text: "Chuleta Caramelizada \nPlumrose (Kg)",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "#ff5400",
        borderRadius: "4",
        width: "270",
        height: "80",
        top: "90",
        right: "20",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "13",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "white",
        top: "4",
        right: "4",
        text: "Bs.F 205,00",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "40",
        left: "8",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    agregarALista ? $.__views.agregarBtn.addEventListener("click", agregarALista) : __defers["$.__views.agregarBtn!click!agregarALista"] = true;
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "white",
        left: "40",
        top: "40",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
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
        left: "20",
        id: "productoImg2"
    });
    $.__views.rowContainer2.add($.__views.productoImg2);
    $.__views.infoProducto = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "8pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "10",
        top: "6",
        text: "Costilla Salsa Bbq \nPlumrose (Kg)",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "#ff5400",
        borderRadius: "4",
        width: "270",
        height: "80",
        top: "90",
        right: "20",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "13",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "white",
        top: "4",
        right: "4",
        text: "Bs.F 303,00",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "40",
        left: "8",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "white",
        left: "40",
        top: "40",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
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
    $.__views.infoProducto = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "8pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "10",
        top: "6",
        text: "Costilla de Pollo \nPlumrose (Kg)",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "#ff5400",
        borderRadius: "4",
        width: "270",
        height: "80",
        top: "90",
        right: "20",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "13",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "white",
        top: "4",
        right: "4",
        text: "Bs.F 303,00",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "40",
        left: "8",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "white",
        left: "40",
        top: "40",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorColor: "#e4e4e4",
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
    __defers["$.__views.agregarBtn!click!agregarALista"] && $.__views.agregarBtn.addEventListener("click", agregarALista);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;