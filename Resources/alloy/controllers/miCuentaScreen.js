function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "miCuentaScreen";
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
    $.__views.main = Ti.UI.createView({
        id: "main"
    });
    $.__views.inicioScreen.add($.__views.main);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: 7,
        top: 25,
        image: "/menuIcon.png",
        id: "menuBtn"
    });
    $.__views.main.add($.__views.menuBtn);
    $.__views.logoImg = Ti.UI.createImageView({
        top: 17,
        right: "45%",
        image: "/unicasaIcon.png",
        id: "logoImg"
    });
    $.__views.main.add($.__views.logoImg);
    $.__views.carritoBtn = Ti.UI.createImageView({
        top: 25,
        right: 7,
        image: "/carritoIcon.png",
        id: "carritoBtn"
    });
    $.__views.main.add($.__views.carritoBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    var __alloyId25 = [];
    __alloyId25.push($.__views.list);
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
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "73",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.label = Ti.UI.createLabel({
        left: "30px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "9pt"
        },
        text: "Mi Cuenta",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.misPuntos = Ti.UI.createImageView({
        right: "140px",
        image: "/misPuntosImg.png",
        id: "misPuntos"
    });
    $.__views.categoria.add($.__views.misPuntos);
    $.__views.labelPuntos = Ti.UI.createLabel({
        right: "35px",
        color: "#ee5041",
        top: "19",
        font: {
            font: "Helvetica",
            fontSize: "9pt"
        },
        text: "15.000",
        id: "labelPuntos"
    });
    $.__views.categoria.add($.__views.labelPuntos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelMisDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "#999999",
        font: {
            font: "Helvetica",
            fontSize: "8pt"
        },
        text: "Mis Datos",
        id: "labelMisDatos"
    });
    $.__views.list.add($.__views.labelMisDatos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Código Tarjeta:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        id: "__alloyId26"
    });
    $.__views.list.add($.__views.__alloyId26);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Nombre y Apellido:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        id: "__alloyId27"
    });
    $.__views.list.add($.__views.__alloyId27);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Estado de Cliente:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        id: "__alloyId28"
    });
    $.__views.list.add($.__views.__alloyId28);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Tipo de Cliente:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        id: "__alloyId29"
    });
    $.__views.list.add($.__views.__alloyId29);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Cédula de Identidad:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        id: "__alloyId30"
    });
    $.__views.list.add($.__views.__alloyId30);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Fecha de Nacimiento:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        id: "__alloyId31"
    });
    $.__views.list.add($.__views.__alloyId31);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Lugar de Nacimiento:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        id: "__alloyId32"
    });
    $.__views.list.add($.__views.__alloyId32);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Sexo:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        id: "__alloyId33"
    });
    $.__views.list.add($.__views.__alloyId33);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Nacionalidad:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        id: "__alloyId34"
    });
    $.__views.list.add($.__views.__alloyId34);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Estado Civil:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        id: "__alloyId35"
    });
    $.__views.list.add($.__views.__alloyId35);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Grado de Instrucción:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        id: "__alloyId36"
    });
    $.__views.list.add($.__views.__alloyId36);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Profesión:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        id: "__alloyId37"
    });
    $.__views.list.add($.__views.__alloyId37);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId25.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "30px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "6pt"
        },
        text: "Hijos:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        id: "__alloyId38"
    });
    $.__views.list.add($.__views.__alloyId38);
    $.__views.__alloyId24 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorStyle: "NONE",
        separatorColor: "#e4e4e4",
        data: __alloyId25,
        id: "__alloyId24"
    });
    $.__views.inicioScreen.add($.__views.__alloyId24);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;