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
    var __alloyId4 = [];
    __alloyId4.push($.__views.list);
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
    __alloyId4.push($.__views.list);
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
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Charallave",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        left: "110px",
        id: "__alloyId5"
    });
    $.__views.categoria.add($.__views.__alloyId5);
    $.__views.socialBtn = Ti.UI.createImageView({
        image: "/socialWhite.png",
        right: "50",
        top: "15",
        width: "49px",
        height: "39px",
        id: "socialBtn"
    });
    $.__views.categoria.add($.__views.socialBtn);
    $.__views.mailBtn = Ti.UI.createImageView({
        image: "/mailWhite.png",
        right: "20",
        top: "15",
        width: "49px",
        height: "39px",
        id: "mailBtn"
    });
    $.__views.categoria.add($.__views.mailBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId4.push($.__views.list);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        id: "__alloyId6"
    });
    $.__views.list.add($.__views.__alloyId6);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId4.push($.__views.list);
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
            fontSize: "13pt",
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
            fontSize: "12pt"
        },
        top: "30",
        left: "60px",
        text: "Dirección: Av. Bolívar cerca del \nBanco Provincial. Charallave",
        id: "info"
    });
    $.__views.supermercados.add($.__views.info);
    $.__views.tittle1 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        top: "80",
        left: "60px",
        text: "Teléfono:",
        id: "tittle1"
    });
    $.__views.supermercados.add($.__views.tittle1);
    $.__views.info1 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "100",
        left: "60px",
        text: "0239-248.03.83 \n0239-248.44.79",
        id: "info1"
    });
    $.__views.supermercados.add($.__views.info1);
    $.__views.tittle2 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        top: "140",
        left: "60px",
        text: "Gerente:",
        id: "tittle2"
    });
    $.__views.supermercados.add($.__views.tittle2);
    $.__views.info2 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "160",
        left: "60px",
        text: "Jairo Valbuena",
        id: "info2"
    });
    $.__views.supermercados.add($.__views.info2);
    $.__views.tittle3 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "13pt",
            fontWeight: "Bold"
        },
        top: "180",
        left: "60px",
        text: "Horario:",
        id: "tittle3"
    });
    $.__views.supermercados.add($.__views.tittle3);
    $.__views.info3 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "200",
        left: "60px",
        text: "Lunes a Viernes: 8:00 am a 8:00 pm \nSábado: 8:00 am a 8:00 pm \nDomingo: 8:00 am a 4:30 pm",
        id: "info3"
    });
    $.__views.supermercados.add($.__views.info3);
    $.__views.__alloyId3 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId4,
        id: "__alloyId3"
    });
    $.__views.inicioScreen.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;