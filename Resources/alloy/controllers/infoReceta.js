function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "infoReceta";
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
    var __alloyId12 = [];
    __alloyId12.push($.__views.list);
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
    __alloyId12.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        text: "Recetas / Varias",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        left: "50px",
        id: "__alloyId13"
    });
    $.__views.categoria.add($.__views.__alloyId13);
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
    __alloyId12.push($.__views.list);
    $.__views.imgReceta = Ti.UI.createImageView({
        image: "/imgReceta.png",
        width: "251",
        height: "138",
        top: "10",
        id: "imgReceta"
    });
    $.__views.list.add($.__views.imgReceta);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId12.push($.__views.list);
    $.__views.nombreReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "5",
        text: "Aguacate relleno con cangrejo, \npiña y mayonesa de cilantro",
        left: "35",
        id: "nombreReceta"
    });
    $.__views.list.add($.__views.nombreReceta);
    $.__views.socialBtn = Ti.UI.createImageView({
        image: "/socialImg.png",
        right: "70",
        top: "5",
        width: "49px",
        height: "39px",
        id: "socialBtn"
    });
    $.__views.list.add($.__views.socialBtn);
    $.__views.mailBtn = Ti.UI.createImageView({
        image: "/mailImg.png",
        right: "35",
        top: "5",
        width: "49px",
        height: "39px",
        id: "mailBtn"
    });
    $.__views.list.add($.__views.mailBtn);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        top: "40",
        left: "35",
        width: "30px",
        height: "29px",
        id: "relojImg"
    });
    $.__views.list.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        top: "40",
        right: "110",
        width: "30px",
        height: "29px",
        id: "porcionImg"
    });
    $.__views.list.add($.__views.porcionImg);
    $.__views.preparacion = Ti.UI.createLabel({
        color: "838282",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "40",
        text: "Preparación: 15min",
        left: "55",
        id: "preparacion"
    });
    $.__views.list.add($.__views.preparacion);
    $.__views.porciones = Ti.UI.createLabel({
        color: "838282",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "40",
        text: "Porciones: 6",
        right: "35",
        id: "porciones"
    });
    $.__views.list.add($.__views.porciones);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId12.push($.__views.list);
    $.__views.infoReceta = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "500px",
        backgroundColor: "white",
        top: "10",
        id: "infoReceta"
    });
    $.__views.list.add($.__views.infoReceta);
    $.__views.datosReceta = Ti.UI.createLabel({
        left: "35",
        top: "5",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        color: "black",
        text: "Ingredientes: \n•   3 aguacates \n•   250gr de cangrejo (surimi) \n•   1 Célery \n•   1 paquete de cebollines \n•   1 lata de piña picadita \n\n\nMayonesa de cilantro: \n•   1 taza de mayonesa \n•   3cdas. de mostaza con miel \n•   1 taza de cilantro fresco \n•   1 bolsa de Natuchips \n•   Jugo de Limón",
        id: "datosReceta"
    });
    $.__views.infoReceta.add($.__views.datosReceta);
    $.__views.__alloyId11 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        separatorStyle: "NONE",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId12,
        id: "__alloyId11"
    });
    $.__views.inicioScreen.add($.__views.__alloyId11);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;