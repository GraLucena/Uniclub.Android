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
    var __alloyId46 = [];
    __alloyId46.push($.__views.list);
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
    __alloyId46.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "73",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.label2 = Ti.UI.createLabel({
        left: "40px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "9pt"
        },
        text: "Promociones",
        id: "label2"
    });
    $.__views.categoria.add($.__views.label2);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.promocionImg1 = Ti.UI.createImageView({
        image: "/promocionImg.png",
        top: "10",
        id: "promocionImg1"
    });
    $.__views.list.add($.__views.promocionImg1);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.masPromociones = Ti.UI.createView({
        backgroundColor: "white",
        top: "15",
        id: "masPromociones"
    });
    $.__views.list.add($.__views.masPromociones);
    $.__views.label = Ti.UI.createLabel({
        color: "black",
        left: "50px",
        font: {
            font: "Helvetica",
            fontSize: "10pt"
        },
        text: "Mas Promociones",
        id: "label"
    });
    $.__views.masPromociones.add($.__views.label);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.otrasPromociones = Ti.UI.createView({
        backgroundColor: "white",
        id: "otrasPromociones"
    });
    $.__views.list.add($.__views.otrasPromociones);
    $.__views.promoImg1 = Ti.UI.createImageView({
        image: "/promocionImg2.png",
        left: "50px",
        top: "10",
        id: "promoImg1"
    });
    $.__views.otrasPromociones.add($.__views.promoImg1);
    $.__views.tittleImg = Ti.UI.createLabel({
        color: "#9f273d",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        top: "10",
        left: "200px",
        text: "31 Aniversario",
        id: "tittleImg"
    });
    $.__views.otrasPromociones.add($.__views.tittleImg);
    $.__views.infoImg = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        top: "30",
        left: "200px",
        text: "Por cada BsF. 1000,00 \nen tu compra recibe un \ncupón, llénalo...",
        id: "infoImg"
    });
    $.__views.otrasPromociones.add($.__views.infoImg);
    $.__views.verMasBtn = Ti.UI.createImageView({
        image: "/verMasBtn.png",
        right: "5",
        top: "30",
        id: "verMasBtn"
    });
    $.__views.otrasPromociones.add($.__views.verMasBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.otrasPromociones = Ti.UI.createView({
        backgroundColor: "white",
        id: "otrasPromociones"
    });
    $.__views.list.add($.__views.otrasPromociones);
    $.__views.promoImg1 = Ti.UI.createImageView({
        image: "/promocionImg2.png",
        left: "50px",
        top: "10",
        id: "promoImg1"
    });
    $.__views.otrasPromociones.add($.__views.promoImg1);
    $.__views.tittleImg = Ti.UI.createLabel({
        color: "#9f273d",
        font: {
            font: "Helvetica",
            fontSize: "5pt",
            fontWeight: "Bold"
        },
        top: "10",
        left: "200px",
        text: "31 Aniversario",
        id: "tittleImg"
    });
    $.__views.otrasPromociones.add($.__views.tittleImg);
    $.__views.infoImg = Ti.UI.createLabel({
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "5pt"
        },
        top: "30",
        left: "200px",
        text: "Por cada BsF. 1000,00 \nen tu compra recibe un \ncupón, llénalo...",
        id: "infoImg"
    });
    $.__views.otrasPromociones.add($.__views.infoImg);
    $.__views.verMasBtn = Ti.UI.createImageView({
        image: "/verMasBtn.png",
        right: "5",
        top: "30",
        id: "verMasBtn"
    });
    $.__views.otrasPromociones.add($.__views.verMasBtn);
    $.__views.__alloyId45 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorStyle: "NONE",
        separatorColor: "#e4e4e4",
        data: __alloyId46,
        id: "__alloyId45"
    });
    $.__views.inicioScreen.add($.__views.__alloyId45);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;