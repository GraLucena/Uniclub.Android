function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detalleSupermercado";
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
    var __alloyId3 = [];
    __alloyId3.push($.__views.list);
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
    __alloyId3.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "73",
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
    $.__views.label = Ti.UI.createLabel({
        left: "60px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "9pt"
        },
        text: "Charallave",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.socialBtn = Ti.UI.createImageView({
        image: "/socialWhite.png",
        right: "80",
        top: "15",
        id: "socialBtn"
    });
    $.__views.categoria.add($.__views.socialBtn);
    $.__views.mailBtn = Ti.UI.createImageView({
        image: "/mailWhite.png",
        right: "20",
        top: "15",
        id: "mailBtn"
    });
    $.__views.categoria.add($.__views.mailBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId3.push($.__views.list);
    $.__views.__alloyId4 = Ti.UI.createImageView({
        id: "__alloyId4"
    });
    $.__views.list.add($.__views.__alloyId4);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId3.push($.__views.list);
    $.__views.supermercados = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "600px",
        id: "supermercados"
    });
    $.__views.list.add($.__views.supermercados);
    $.__views.tittle = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        top: "10",
        left: "60px",
        text: "Centro Comercial Los Samanes.",
        id: "tittle"
    });
    $.__views.supermercados.add($.__views.tittle);
    $.__views.info = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        top: "40",
        left: "60px",
        text: "Dirección: Av. Bolívar cerca del \nBanco Provincial. Charallave",
        id: "info"
    });
    $.__views.supermercados.add($.__views.info);
    $.__views.tittle1 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        top: "100",
        left: "60px",
        text: "Teléfono:",
        id: "tittle1"
    });
    $.__views.supermercados.add($.__views.tittle1);
    $.__views.info1 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        top: "130",
        left: "60px",
        text: "0239-248.03.83 \n0239-248.44.79",
        id: "info1"
    });
    $.__views.supermercados.add($.__views.info1);
    $.__views.tittle2 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        top: "180",
        left: "60px",
        text: "Gerente:",
        id: "tittle2"
    });
    $.__views.supermercados.add($.__views.tittle2);
    $.__views.info2 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        top: "200",
        left: "60px",
        text: "Jairo Valbuena",
        id: "info2"
    });
    $.__views.supermercados.add($.__views.info2);
    $.__views.tittle3 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        top: "230",
        left: "60px",
        text: "Horario:",
        id: "tittle3"
    });
    $.__views.supermercados.add($.__views.tittle3);
    $.__views.info3 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        top: "260",
        left: "60px",
        text: "Lunes a Viernes: 8:00 am a 8:00 pm \nSábado: 8:00 am a 8:00 pm \nDomingo: 8:00 am a 4:30 pm",
        id: "info3"
    });
    $.__views.supermercados.add($.__views.info3);
    $.__views.__alloyId2 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorStyle: "NONE",
        separatorColor: "#e4e4e4",
        data: __alloyId3,
        id: "__alloyId2"
    });
    $.__views.inicioScreen.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;