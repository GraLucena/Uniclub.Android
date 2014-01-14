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
        separatorStyle: "NONE",
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
        separatorStyle: "NONE",
        id: "list"
    });
    var __alloyId10 = [];
    __alloyId10.push($.__views.list);
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
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId10.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "73",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.label = Ti.UI.createLabel({
        left: "60px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "10pt"
        },
        text: "Recetas / Varias",
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
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId10.push($.__views.list);
    $.__views.imgReceta = Ti.UI.createImageView({
        image: "/imgReceta.png",
        top: "10",
        id: "imgReceta"
    });
    $.__views.list.add($.__views.imgReceta);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId10.push($.__views.list);
    $.__views.nombreReceta = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
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
        id: "socialBtn"
    });
    $.__views.list.add($.__views.socialBtn);
    $.__views.mailBtn = Ti.UI.createImageView({
        image: "/mailImg.png",
        right: "25",
        top: "5",
        id: "mailBtn"
    });
    $.__views.list.add($.__views.mailBtn);
    $.__views.relojImg = Ti.UI.createImageView({
        image: "/tiempoImg.png",
        top: "60",
        left: "35",
        id: "relojImg"
    });
    $.__views.list.add($.__views.relojImg);
    $.__views.porcionImg = Ti.UI.createImageView({
        image: "/porcionesImg.png",
        top: "60",
        right: "130",
        id: "porcionImg"
    });
    $.__views.list.add($.__views.porcionImg);
    $.__views.preparacion = Ti.UI.createLabel({
        color: "#838282",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        top: "60",
        text: "Preparación: 15min",
        left: "75",
        id: "preparacion"
    });
    $.__views.list.add($.__views.preparacion);
    $.__views.porciones = Ti.UI.createLabel({
        color: "#838282",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        top: "60",
        text: "Porciones: 6",
        right: "25",
        id: "porciones"
    });
    $.__views.list.add($.__views.porciones);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId10.push($.__views.list);
    $.__views.infoReceta = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "500px",
        backgroundColor: "white",
        top: "40",
        id: "infoReceta"
    });
    $.__views.list.add($.__views.infoReceta);
    $.__views.datosReceta = Ti.UI.createLabel({
        left: "35",
        top: "5",
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "black",
        text: "Ingredientes: \n•   3 aguacates \n•   250gr de cangrejo (surimi) \n•   1 Célery \n•   1 paquete de cebollines \n•   1 lata de piña picadita \n\n\nMayonesa de cilantro: \n•   1 taza de mayonesa \n•   3cdas. de mostaza con miel \n•   1 taza de cilantro fresco \n•   1 bolsa de Natuchips \n•   Jugo de Limón",
        id: "datosReceta"
    });
    $.__views.infoReceta.add($.__views.datosReceta);
    $.__views.__alloyId9 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorColor: "transparent",
        data: __alloyId10,
        id: "__alloyId9"
    });
    $.__views.inicioScreen.add($.__views.__alloyId9);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;