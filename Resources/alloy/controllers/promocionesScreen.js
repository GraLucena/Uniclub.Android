function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "promocionesScreen";
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
    var __alloyId43 = [];
    __alloyId43.push($.__views.list);
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
    __alloyId43.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        text: "Promociones",
        font: "Helvetica",
        size: "5pt",
        color: "white",
        left: "50px",
        id: "__alloyId44"
    });
    $.__views.categoria.add($.__views.__alloyId44);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId43.push($.__views.list);
    $.__views.promocionImg1 = Ti.UI.createImageView({
        image: "/promocionImg.png",
        width: "600px",
        height: "300px",
        top: "10",
        id: "promocionImg1"
    });
    $.__views.list.add($.__views.promocionImg1);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId43.push($.__views.list);
    $.__views.masPromociones = Ti.UI.createView({
        backgroundColor: "white",
        width: "600px",
        height: "100px",
        top: "15",
        id: "masPromociones"
    });
    $.__views.list.add($.__views.masPromociones);
    $.__views.label = Ti.UI.createLabel({
        color: "black",
        left: "50px",
        font: {
            font: "Helvetica",
            fontSize: "16pt"
        },
        text: "Mas Promociones",
        id: "label"
    });
    $.__views.masPromociones.add($.__views.label);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId43.push($.__views.list);
    $.__views.otrasPromociones = Ti.UI.createView({
        backgroundColor: "white",
        width: "600px",
        height: "200px",
        id: "otrasPromociones"
    });
    $.__views.list.add($.__views.otrasPromociones);
    $.__views.promoImg1 = Ti.UI.createImageView({
        image: "/promocionImg2.png",
        left: "50px",
        top: "10",
        width: "194px",
        height: "159px",
        id: "promoImg1"
    });
    $.__views.otrasPromociones.add($.__views.promoImg1);
    $.__views.tittleImg1 = Ti.UI.createLabel({
        color: "9f273d",
        font: {
            font: "Helvetica",
            fontSize: "15pt",
            fontWeight: "Bold"
        },
        top: "10",
        left: "280px",
        text: "31 Aniversario",
        id: "tittleImg1"
    });
    $.__views.otrasPromociones.add($.__views.tittleImg1);
    $.__views.infoImg1 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "30",
        left: "280px",
        text: "Por cada BsF. 1000,00 \nen tu compra recibe un \ncupón, llénalo...",
        id: "infoImg1"
    });
    $.__views.otrasPromociones.add($.__views.infoImg1);
    $.__views.verMasBtn = Ti.UI.createImageView({
        image: "/verMasBtn.png",
        right: "5",
        top: "30",
        id: "verMasBtn"
    });
    $.__views.otrasPromociones.add($.__views.verMasBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        id: "list"
    });
    __alloyId43.push($.__views.list);
    $.__views.otrasPromociones = Ti.UI.createView({
        backgroundColor: "white",
        width: "600px",
        height: "200px",
        id: "otrasPromociones"
    });
    $.__views.list.add($.__views.otrasPromociones);
    $.__views.promoImg1 = Ti.UI.createImageView({
        image: "/promocionImg2.png",
        left: "50px",
        top: "10",
        width: "194px",
        height: "159px",
        id: "promoImg1"
    });
    $.__views.otrasPromociones.add($.__views.promoImg1);
    $.__views.tittleImg1 = Ti.UI.createLabel({
        color: "9f273d",
        font: {
            font: "Helvetica",
            fontSize: "15pt",
            fontWeight: "Bold"
        },
        top: "10",
        left: "280px",
        text: "31 Aniversario",
        id: "tittleImg1"
    });
    $.__views.otrasPromociones.add($.__views.tittleImg1);
    $.__views.infoImg1 = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        top: "30",
        left: "280px",
        text: "Por cada BsF. 1000,00 \nen tu compra recibe un \ncupón, llénalo...",
        id: "infoImg1"
    });
    $.__views.otrasPromociones.add($.__views.infoImg1);
    $.__views.verMasBtn = Ti.UI.createImageView({
        image: "/verMasBtn.png",
        right: "5",
        top: "30",
        id: "verMasBtn"
    });
    $.__views.otrasPromociones.add($.__views.verMasBtn);
    $.__views.__alloyId42 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId43,
        id: "__alloyId42"
    });
    $.__views.inicioScreen.add($.__views.__alloyId42);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;