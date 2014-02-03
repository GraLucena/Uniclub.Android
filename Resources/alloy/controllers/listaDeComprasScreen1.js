function Controller() {
<<<<<<< HEAD
    function eliminarProducto() {
        alert("se eliminara este producto de su lista?");
        var listaDeComprasScreen = Alloy.createController("listaDeComprasScreen").getView();
        $.inicioScreen.add(listaDeComprasScreen);
    }
=======
>>>>>>> 2b62bd2ebcc83bfeb508162959a860f2386f08ff
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listaDeComprasScreen1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
<<<<<<< HEAD
    var __defers = {};
=======
>>>>>>> 2b62bd2ebcc83bfeb508162959a860f2386f08ff
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
    var __alloyId21 = [];
    __alloyId21.push($.__views.list);
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
    __alloyId21.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "73",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.label1 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "9pt"
        },
        color: "white",
        left: "50px",
        text: "Descripción",
        id: "label1"
    });
    $.__views.categoria.add($.__views.label1);
    $.__views.label2 = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "4pt"
        },
        color: "white",
        right: "30px",
        text: "Precio",
        id: "label2"
    });
    $.__views.categoria.add($.__views.label2);
    $.__views.label = Ti.UI.createLabel({
        left: "50px",
        top: "70px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        text: "El monto total de esta lista es un precio estimado",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId21.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "150px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.productoImg2 = Ti.UI.createImageView({
        image: "/brownieImg.png",
        left: "10px",
        id: "productoImg2"
    });
    $.__views.productos.add($.__views.productoImg2);
    $.__views.productoInfo = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        left: "100px",
        top: "30",
        color: "#555454",
        text: "Brownies Dany's \n480 (gr)",
        id: "productoInfo"
    });
    $.__views.productos.add($.__views.productoInfo);
    $.__views.productoPrecio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        right: "20px",
        top: "30",
        color: "black",
        text: "BsF. 96,90",
        id: "productoPrecio"
    });
    $.__views.productos.add($.__views.productoPrecio);
    $.__views.eliminarBtn = Ti.UI.createImageView({
        image: "/eliminarBtn.png",
        top: "70",
        right: "30px",
        id: "eliminarBtn"
    });
    $.__views.productos.add($.__views.eliminarBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId21.push($.__views.list);
    $.__views.productos = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "150px",
        id: "productos"
    });
    $.__views.list.add($.__views.productos);
    $.__views.productoImg3 = Ti.UI.createImageView({
        image: "/productoImg2.png",
        left: "10px",
        id: "productoImg3"
    });
    $.__views.productos.add($.__views.productoImg3);
    $.__views.productoInfo = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        left: "100px",
        top: "30",
        color: "#555454",
        text: "Galleta Chocolate \nCosta 140 (gr)",
        id: "productoInfo"
    });
    $.__views.productos.add($.__views.productoInfo);
    $.__views.productoPrecio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        right: "20px",
        top: "30",
        color: "black",
        text: "BsF. 18,70",
        id: "productoPrecio"
    });
    $.__views.productos.add($.__views.productoPrecio);
    $.__views.eliminarBtn = Ti.UI.createImageView({
        image: "/eliminarBtn.png",
        top: "70",
        right: "30px",
        id: "eliminarBtn"
    });
    $.__views.productos.add($.__views.eliminarBtn);
<<<<<<< HEAD
    eliminarProducto ? $.__views.eliminarBtn.addEventListener("click", eliminarProducto) : __defers["$.__views.eliminarBtn!click!eliminarProducto"] = true;
=======
>>>>>>> 2b62bd2ebcc83bfeb508162959a860f2386f08ff
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId21.push($.__views.list);
    $.__views.resumenLista = Ti.UI.createView({
        backgroundColor: "white",
        top: "10",
        height: "140px",
        id: "resumenLista"
    });
    $.__views.list.add($.__views.resumenLista);
    $.__views.checkImg = Ti.UI.createImageView({
        image: "/checkImg.png",
        left: "5",
        top: "50",
        id: "checkImg"
    });
    $.__views.resumenLista.add($.__views.checkImg);
    $.__views.selecionadoLabel = Ti.UI.createLabel({
        color: "#9c213f",
        left: "36",
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        text: "Seleccionado (0)",
        id: "selecionadoLabel"
    });
    $.__views.resumenLista.add($.__views.selecionadoLabel);
    $.__views.estimadoLabel = Ti.UI.createLabel({
        color: "#9c213f",
        right: "10",
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        text: "Est. Total: Bs.F 320,60",
        id: "estimadoLabel"
    });
    $.__views.resumenLista.add($.__views.estimadoLabel);
    $.__views.__alloyId20 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorStyle: "NONE",
        separatorColor: "#e4e4e4",
        data: __alloyId21,
        id: "__alloyId20"
    });
    $.__views.inicioScreen.add($.__views.__alloyId20);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
<<<<<<< HEAD
    __defers["$.__views.eliminarBtn!click!eliminarProducto"] && $.__views.eliminarBtn.addEventListener("click", eliminarProducto);
=======
>>>>>>> 2b62bd2ebcc83bfeb508162959a860f2386f08ff
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;