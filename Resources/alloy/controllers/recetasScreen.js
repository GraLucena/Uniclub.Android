function Controller() {
    function infoReceta() {
        var win = Alloy.createController("infoReceta").getView();
        $.inicioScreen.add(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "recetasScreen";
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
    var __alloyId53 = [];
    __alloyId53.push($.__views.list);
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
    __alloyId53.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.label = Ti.UI.createLabel({
        left: "50px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "15pt"
        },
        text: "Recetas",
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
    __alloyId53.push($.__views.list);
    $.__views.recetas = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "215px",
        id: "recetas"
    });
    $.__views.list.add($.__views.recetas);
    $.__views.recetaImg1 = Ti.UI.createImageView({
        width: "106",
        height: "106",
        image: "/recetaImg1.png",
        left: "5",
        top: "0",
        id: "recetaImg1"
    });
    $.__views.recetas.add($.__views.recetaImg1);
    infoReceta ? $.__views.recetaImg1.addEventListener("click", infoReceta) : __defers["$.__views.recetaImg1!click!infoReceta"] = true;
    $.__views.infoReceta = Ti.UI.createLabel({
        color: "555454",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "110",
        text: "Aguacate relleno \ncon cangrejo, piña \ny mayonesa...",
        id: "infoReceta"
    });
    $.__views.recetas.add($.__views.infoReceta);
    $.__views.nvaRecetaImg = Ti.UI.createImageView({
        image: "/nuevaReceta.png",
        width: "20",
        height: "20",
        right: "60",
        top: "10",
        id: "nvaRecetaImg"
    });
    $.__views.recetas.add($.__views.nvaRecetaImg);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        width: "20",
        height: "20",
        right: "60",
        top: "45",
        id: "relojImg"
    });
    $.__views.recetas.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        width: "20",
        height: "20",
        right: "60",
        top: "80",
        id: "porcionImg"
    });
    $.__views.recetas.add($.__views.porcionImg);
    $.__views.nvaReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "20",
        top: "10",
        text: "Nueva \nReceta",
        id: "nvaReceta"
    });
    $.__views.recetas.add($.__views.nvaReceta);
    $.__views.reloj = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "20",
        top: "45",
        text: "15min",
        id: "reloj"
    });
    $.__views.recetas.add($.__views.reloj);
    $.__views.porcion = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "40",
        top: "80",
        text: "6",
        id: "porcion"
    });
    $.__views.recetas.add($.__views.porcion);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId53.push($.__views.list);
    $.__views.recetas = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "215px",
        id: "recetas"
    });
    $.__views.list.add($.__views.recetas);
    $.__views.recetaImg2 = Ti.UI.createImageView({
        width: "106",
        height: "106",
        image: "/recetaImg2.png",
        left: "5",
        top: "0",
        id: "recetaImg2"
    });
    $.__views.recetas.add($.__views.recetaImg2);
    infoReceta ? $.__views.recetaImg2.addEventListener("click", infoReceta) : __defers["$.__views.recetaImg2!click!infoReceta"] = true;
    $.__views.infoReceta = Ti.UI.createLabel({
        color: "555454",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "110",
        text: "Dips cremoso \nde ajíes dulces y \ncilantro...",
        id: "infoReceta"
    });
    $.__views.recetas.add($.__views.infoReceta);
    $.__views.nvaRecetaImg = Ti.UI.createImageView({
        image: "/nuevaReceta.png",
        width: "20",
        height: "20",
        right: "60",
        top: "10",
        id: "nvaRecetaImg"
    });
    $.__views.recetas.add($.__views.nvaRecetaImg);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        width: "20",
        height: "20",
        right: "60",
        top: "45",
        id: "relojImg"
    });
    $.__views.recetas.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        width: "20",
        height: "20",
        right: "60",
        top: "80",
        id: "porcionImg"
    });
    $.__views.recetas.add($.__views.porcionImg);
    $.__views.nvaReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "20",
        top: "10",
        text: "Nueva \nReceta",
        id: "nvaReceta"
    });
    $.__views.recetas.add($.__views.nvaReceta);
    $.__views.reloj = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "20",
        top: "45",
        text: "15min",
        id: "reloj"
    });
    $.__views.recetas.add($.__views.reloj);
    $.__views.porcion = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "40",
        top: "80",
        text: "6",
        id: "porcion"
    });
    $.__views.recetas.add($.__views.porcion);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId53.push($.__views.list);
    $.__views.recetas = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "215px",
        id: "recetas"
    });
    $.__views.list.add($.__views.recetas);
    $.__views.recetaImg3 = Ti.UI.createImageView({
        width: "106",
        height: "106",
        image: "/recetaImg3.png",
        left: "5",
        top: "0",
        id: "recetaImg3"
    });
    $.__views.recetas.add($.__views.recetaImg3);
    infoReceta ? $.__views.recetaImg3.addEventListener("click", infoReceta) : __defers["$.__views.recetaImg3!click!infoReceta"] = true;
    $.__views.infoReceta = Ti.UI.createLabel({
        color: "555454",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "110",
        text: "Ceviche de pescado\ncon mango verde \ny curry...",
        id: "infoReceta"
    });
    $.__views.recetas.add($.__views.infoReceta);
    $.__views.nvaRecetaImg = Ti.UI.createImageView({
        image: "/nuevaReceta.png",
        width: "20",
        height: "20",
        right: "60",
        top: "10",
        id: "nvaRecetaImg"
    });
    $.__views.recetas.add($.__views.nvaRecetaImg);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        width: "20",
        height: "20",
        right: "60",
        top: "45",
        id: "relojImg"
    });
    $.__views.recetas.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        width: "20",
        height: "20",
        right: "60",
        top: "80",
        id: "porcionImg"
    });
    $.__views.recetas.add($.__views.porcionImg);
    $.__views.nvaReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "20",
        top: "10",
        text: "Nueva \nReceta",
        id: "nvaReceta"
    });
    $.__views.recetas.add($.__views.nvaReceta);
    $.__views.reloj = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "20",
        top: "45",
        text: "15min",
        id: "reloj"
    });
    $.__views.recetas.add($.__views.reloj);
    $.__views.porcion = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "40",
        top: "80",
        text: "4-6",
        id: "porcion"
    });
    $.__views.recetas.add($.__views.porcion);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId53.push($.__views.list);
    $.__views.recetas = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "215px",
        id: "recetas"
    });
    $.__views.list.add($.__views.recetas);
    $.__views.recetaImg4 = Ti.UI.createImageView({
        width: "106",
        height: "106",
        image: "/recetaImg4.png",
        left: "5",
        top: "0",
        id: "recetaImg4"
    });
    $.__views.recetas.add($.__views.recetaImg4);
    infoReceta ? $.__views.recetaImg4.addEventListener("click", infoReceta) : __defers["$.__views.recetaImg4!click!infoReceta"] = true;
    $.__views.infoReceta = Ti.UI.createLabel({
        color: "555454",
        font: {
            font: "Helvetica",
            fontSize: "13pt"
        },
        left: "110",
        text: "Paté de queso \ncon hiervas frescas \ny natuchips",
        id: "infoReceta"
    });
    $.__views.recetas.add($.__views.infoReceta);
    $.__views.nvaRecetaImg = Ti.UI.createImageView({
        image: "/nuevaReceta.png",
        width: "20",
        height: "20",
        right: "60",
        top: "10",
        id: "nvaRecetaImg"
    });
    $.__views.recetas.add($.__views.nvaRecetaImg);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        width: "20",
        height: "20",
        right: "60",
        top: "45",
        id: "relojImg"
    });
    $.__views.recetas.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        width: "20",
        height: "20",
        right: "60",
        top: "80",
        id: "porcionImg"
    });
    $.__views.recetas.add($.__views.porcionImg);
    $.__views.nvaReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "20",
        top: "10",
        text: "Nueva \nReceta",
        id: "nvaReceta"
    });
    $.__views.recetas.add($.__views.nvaReceta);
    $.__views.reloj = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "20",
        top: "45",
        text: "15min",
        id: "reloj"
    });
    $.__views.recetas.add($.__views.reloj);
    $.__views.porcion = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt",
            fontWeight: "Bold"
        },
        right: "40",
        top: "80",
        text: "6",
        id: "porcion"
    });
    $.__views.recetas.add($.__views.porcion);
    $.__views.__alloyId52 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId53,
        id: "__alloyId52"
    });
    $.__views.inicioScreen.add($.__views.__alloyId52);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    __defers["$.__views.recetaImg1!click!infoReceta"] && $.__views.recetaImg1.addEventListener("click", infoReceta);
    __defers["$.__views.recetaImg2!click!infoReceta"] && $.__views.recetaImg2.addEventListener("click", infoReceta);
    __defers["$.__views.recetaImg3!click!infoReceta"] && $.__views.recetaImg3.addEventListener("click", infoReceta);
    __defers["$.__views.recetaImg4!click!infoReceta"] && $.__views.recetaImg4.addEventListener("click", infoReceta);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;