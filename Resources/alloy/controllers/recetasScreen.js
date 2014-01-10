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
    var __alloyId52 = [];
    __alloyId52.push($.__views.list);
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
    __alloyId52.push($.__views.list);
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
            fontSize: "10pt"
        },
        text: "Recetas",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.filtrarBtn = Ti.UI.createImageView({
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
    __alloyId52.push($.__views.list);
    $.__views.recetas = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "170px",
        id: "recetas"
    });
    $.__views.list.add($.__views.recetas);
    $.__views.recetaImg1 = Ti.UI.createImageView({
        image: "/recetaImg1.png",
        left: "5",
        top: "10",
        id: "recetaImg1"
    });
    $.__views.recetas.add($.__views.recetaImg1);
    infoReceta ? $.__views.recetaImg1.addEventListener("click", infoReceta) : __defers["$.__views.recetaImg1!click!infoReceta"] = true;
    $.__views.infoReceta = Ti.UI.createLabel({
        color: "#555454",
        font: {
            font: "Helvetica",
            fontSize: "8pt"
        },
        left: "140",
        top: "30",
        text: "Aguacate relleno \ncon cangrejo, piña \ny mayonesa...",
        id: "infoReceta"
    });
    $.__views.recetas.add($.__views.infoReceta);
    $.__views.nvaRecetaImg = Ti.UI.createImageView({
        image: "/nuevaReceta.png",
        right: "60",
        top: "15",
        id: "nvaRecetaImg"
    });
    $.__views.recetas.add($.__views.nvaRecetaImg);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        right: "70",
        top: "70",
        id: "relojImg"
    });
    $.__views.recetas.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        right: "60",
        top: "120",
        id: "porcionImg"
    });
    $.__views.recetas.add($.__views.porcionImg);
    $.__views.nvaReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "7",
        top: "15",
        text: "Nueva \nReceta",
        id: "nvaReceta"
    });
    $.__views.recetas.add($.__views.nvaReceta);
    $.__views.reloj = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "16",
        top: "75",
        text: "15min",
        id: "reloj"
    });
    $.__views.recetas.add($.__views.reloj);
    $.__views.porcion = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "40",
        top: "120",
        text: "6",
        id: "porcion"
    });
    $.__views.recetas.add($.__views.porcion);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId52.push($.__views.list);
    $.__views.recetas = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "170px",
        id: "recetas"
    });
    $.__views.list.add($.__views.recetas);
    $.__views.recetaImg2 = Ti.UI.createImageView({
        image: "/recetaImg2.png",
        left: "5",
        top: "10",
        id: "recetaImg2"
    });
    $.__views.recetas.add($.__views.recetaImg2);
    infoReceta ? $.__views.recetaImg2.addEventListener("click", infoReceta) : __defers["$.__views.recetaImg2!click!infoReceta"] = true;
    $.__views.infoReceta = Ti.UI.createLabel({
        color: "#555454",
        font: {
            font: "Helvetica",
            fontSize: "8pt"
        },
        left: "140",
        top: "30",
        text: "Dips cremoso \nde ajíes dulces y \ncilantro...",
        id: "infoReceta"
    });
    $.__views.recetas.add($.__views.infoReceta);
    $.__views.nvaRecetaImg = Ti.UI.createImageView({
        image: "/nuevaReceta.png",
        right: "60",
        top: "15",
        id: "nvaRecetaImg"
    });
    $.__views.recetas.add($.__views.nvaRecetaImg);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        right: "70",
        top: "70",
        id: "relojImg"
    });
    $.__views.recetas.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        right: "60",
        top: "120",
        id: "porcionImg"
    });
    $.__views.recetas.add($.__views.porcionImg);
    $.__views.nvaReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "7",
        top: "15",
        text: "Nueva \nReceta",
        id: "nvaReceta"
    });
    $.__views.recetas.add($.__views.nvaReceta);
    $.__views.reloj = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "16",
        top: "75",
        text: "15min",
        id: "reloj"
    });
    $.__views.recetas.add($.__views.reloj);
    $.__views.porcion = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "40",
        top: "120",
        text: "6",
        id: "porcion"
    });
    $.__views.recetas.add($.__views.porcion);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId52.push($.__views.list);
    $.__views.recetas = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "170px",
        id: "recetas"
    });
    $.__views.list.add($.__views.recetas);
    $.__views.recetaImg3 = Ti.UI.createImageView({
        image: "/recetaImg3.png",
        left: "5",
        top: "10",
        id: "recetaImg3"
    });
    $.__views.recetas.add($.__views.recetaImg3);
    infoReceta ? $.__views.recetaImg3.addEventListener("click", infoReceta) : __defers["$.__views.recetaImg3!click!infoReceta"] = true;
    $.__views.infoReceta = Ti.UI.createLabel({
        color: "#555454",
        font: {
            font: "Helvetica",
            fontSize: "8pt"
        },
        left: "140",
        top: "30",
        text: "Ceviche de pescado\ncon mango verde \ny curry...",
        id: "infoReceta"
    });
    $.__views.recetas.add($.__views.infoReceta);
    $.__views.nvaRecetaImg = Ti.UI.createImageView({
        image: "/nuevaReceta.png",
        right: "60",
        top: "15",
        id: "nvaRecetaImg"
    });
    $.__views.recetas.add($.__views.nvaRecetaImg);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        right: "70",
        top: "70",
        id: "relojImg"
    });
    $.__views.recetas.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        right: "60",
        top: "120",
        id: "porcionImg"
    });
    $.__views.recetas.add($.__views.porcionImg);
    $.__views.nvaReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "7",
        top: "15",
        text: "Nueva \nReceta",
        id: "nvaReceta"
    });
    $.__views.recetas.add($.__views.nvaReceta);
    $.__views.reloj = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "16",
        top: "75",
        text: "15min",
        id: "reloj"
    });
    $.__views.recetas.add($.__views.reloj);
    $.__views.porcion = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "40",
        top: "120",
        text: "4-6",
        id: "porcion"
    });
    $.__views.recetas.add($.__views.porcion);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId52.push($.__views.list);
    $.__views.recetas = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "170px",
        id: "recetas"
    });
    $.__views.list.add($.__views.recetas);
    $.__views.recetaImg4 = Ti.UI.createImageView({
        image: "/recetaImg4.png",
        left: "5",
        top: "10",
        id: "recetaImg4"
    });
    $.__views.recetas.add($.__views.recetaImg4);
    infoReceta ? $.__views.recetaImg4.addEventListener("click", infoReceta) : __defers["$.__views.recetaImg4!click!infoReceta"] = true;
    $.__views.infoReceta = Ti.UI.createLabel({
        color: "#555454",
        font: {
            font: "Helvetica",
            fontSize: "8pt"
        },
        left: "140",
        top: "30",
        text: "Paté de queso \ncon hiervas frescas \ny natuchips",
        id: "infoReceta"
    });
    $.__views.recetas.add($.__views.infoReceta);
    $.__views.nvaRecetaImg = Ti.UI.createImageView({
        image: "/nuevaReceta.png",
        right: "60",
        top: "15",
        id: "nvaRecetaImg"
    });
    $.__views.recetas.add($.__views.nvaRecetaImg);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        right: "70",
        top: "70",
        id: "relojImg"
    });
    $.__views.recetas.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        right: "60",
        top: "120",
        id: "porcionImg"
    });
    $.__views.recetas.add($.__views.porcionImg);
    $.__views.nvaReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "7",
        top: "15",
        text: "Nueva \nReceta",
        id: "nvaReceta"
    });
    $.__views.recetas.add($.__views.nvaReceta);
    $.__views.reloj = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "16",
        top: "75",
        text: "15min",
        id: "reloj"
    });
    $.__views.recetas.add($.__views.reloj);
    $.__views.porcion = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        right: "40",
        top: "120",
        text: "6",
        id: "porcion"
    });
    $.__views.recetas.add($.__views.porcion);
    $.__views.__alloyId51 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorStyle: "NONE",
        data: __alloyId52,
        id: "__alloyId51"
    });
    $.__views.inicioScreen.add($.__views.__alloyId51);
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