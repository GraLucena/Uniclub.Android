function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inicioScreen";
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
    var __alloyId15 = [];
    __alloyId15.push($.__views.list);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        width: Ti.UI.FILL,
        height: "70",
        top: "30",
        hintText: "Palabra Clave"
    });
    $.__views.list.add($.__views.search);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.__alloyId16 = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: "300px",
        top: 0,
        id: "__alloyId16"
    });
    $.__views.list.add($.__views.__alloyId16);
    var __alloyId17 = [];
    $.__views.img1 = Ti.UI.createImageView({
        image: "/slideImg1.png",
        id: "img1"
    });
    __alloyId17.push($.__views.img1);
    $.__views.img2 = Ti.UI.createImageView({
        id: "img2",
        backgroundColor: "#246"
    });
    __alloyId17.push($.__views.img2);
    $.__views.img3 = Ti.UI.createImageView({
        id: "img3",
        backgroundColor: "#48b"
    });
    __alloyId17.push($.__views.img3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId17,
        id: "scrollableView",
        pagingControlHeight: "10",
        pagingControlColor: "white",
        showPagingControl: "true"
    });
    $.__views.__alloyId16.add($.__views.scrollableView);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.__alloyId18 = Ti.UI.createView({
        backgroundColor: "#dddddd",
        width: Ti.UI.FILL,
        height: "200px",
        id: "__alloyId18"
    });
    $.__views.list.add($.__views.__alloyId18);
    $.__views.recetaImg = Ti.UI.createImageView({
        width: "215px",
        height: "156px",
        top: "22px",
        left: "15px",
        image: "/recetasImg.png",
        id: "recetaImg"
    });
    $.__views.__alloyId18.add($.__views.recetaImg);
    $.__views.carreraImg = Ti.UI.createImageView({
        width: "215px",
        height: "156px",
        top: "22px",
        right: "15px",
        image: "/carreraImg.png",
        id: "carreraImg"
    });
    $.__views.__alloyId18.add($.__views.carreraImg);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.preciosUnicos = Ti.UI.createView({
        backgroundColor: "#f79323",
        width: Ti.UI.FILL,
        height: "70",
        id: "preciosUnicos"
    });
    $.__views.list.add($.__views.preciosUnicos);
    $.__views.preciosUnicosLabel = Ti.UI.createLabel({
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "10pt"
        },
        left: "15",
        text: "Precios Únicos",
        id: "preciosUnicosLabel"
    });
    $.__views.preciosUnicos.add($.__views.preciosUnicosLabel);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.rowContainer2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "200px",
        backgroundColor: "white",
        id: "rowContainer2"
    });
    $.__views.list.add($.__views.rowContainer2);
    $.__views.productoImg = Ti.UI.createImageView({
        image: "/productoImg1.png",
        left: "40",
        id: "productoImg"
    });
    $.__views.rowContainer2.add($.__views.productoImg);
    $.__views.infoProducto = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "8pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "20",
        top: "6",
        text: "Galleta Mantequilla \nCosta 810555 (140gr)",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "#ff5400",
        borderRadius: "4",
        width: "270",
        height: "80",
        top: "90",
        right: "20",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "13",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "white",
        top: "4",
        right: "4",
        text: "Bs.F 18,70",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "40",
        left: "8",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "white",
        left: "40",
        top: "40",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.rowContainer2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "200px",
        backgroundColor: "white",
        id: "rowContainer2"
    });
    $.__views.list.add($.__views.rowContainer2);
    $.__views.productoImg2 = Ti.UI.createImageView({
        image: "/productoImg2.png",
        left: "40",
        id: "productoImg2"
    });
    $.__views.rowContainer2.add($.__views.productoImg2);
    $.__views.infoProducto = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "8pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "20",
        top: "6",
        text: "Galleta Chocolate \nCosta 810555 (140gr)",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "#ff5400",
        borderRadius: "4",
        width: "270",
        height: "80",
        top: "90",
        right: "20",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "13",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "white",
        top: "4",
        right: "4",
        text: "Bs.F 18,70",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "40",
        left: "8",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "white",
        left: "40",
        top: "40",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.rowContainer2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "200px",
        backgroundColor: "white",
        id: "rowContainer2"
    });
    $.__views.list.add($.__views.rowContainer2);
    $.__views.productoImg3 = Ti.UI.createImageView({
        image: "/productoImg3.png",
        left: "40",
        id: "productoImg3"
    });
    $.__views.rowContainer2.add($.__views.productoImg3);
    $.__views.infoProducto = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "8pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "20",
        top: "6",
        text: "Galleta Coco              \nCosta (125gr)",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "#ff5400",
        borderRadius: "4",
        width: "270",
        height: "80",
        top: "90",
        right: "20",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "13",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "white",
        top: "4",
        right: "4",
        text: "Bs.F 18,90",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "40",
        left: "8",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "white",
        left: "40",
        top: "40",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.rowContainer2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "200px",
        backgroundColor: "white",
        id: "rowContainer2"
    });
    $.__views.list.add($.__views.rowContainer2);
    $.__views.productoImg4 = Ti.UI.createImageView({
        image: "/productoImg4.png",
        left: "40",
        id: "productoImg4"
    });
    $.__views.rowContainer2.add($.__views.productoImg4);
    $.__views.infoProducto = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "8pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "20",
        top: "6",
        text: "Galleta Limón \nCosta 810557 (125gr)",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "#ff5400",
        borderRadius: "4",
        width: "270",
        height: "80",
        top: "90",
        right: "20",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "13",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "white",
        top: "4",
        right: "4",
        text: "Bs.F 18,90",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "40",
        left: "8",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "white",
        left: "40",
        top: "40",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.rowContainer2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "200px",
        backgroundColor: "white",
        id: "rowContainer2"
    });
    $.__views.list.add($.__views.rowContainer2);
    $.__views.productoImg5 = Ti.UI.createImageView({
        image: "/productoNoImg.png",
        left: "40",
        id: "productoImg5"
    });
    $.__views.rowContainer2.add($.__views.productoImg5);
    $.__views.infoProducto = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "8pt",
            fontWeight: "Bold"
        },
        color: "black",
        right: "20",
        top: "6",
        text: "Galleta rellena choco \nGretel Costa (85gr)",
        id: "infoProducto"
    });
    $.__views.rowContainer2.add($.__views.infoProducto);
    $.__views.precioUnico = Ti.UI.createView({
        backgroundColor: "#ff5400",
        borderRadius: "4",
        width: "270",
        height: "80",
        top: "90",
        right: "20",
        id: "precioUnico"
    });
    $.__views.rowContainer2.add($.__views.precioUnico);
    $.__views.precioUnicoLabel = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "black",
        text: "Precio Único",
        top: "4",
        left: "13",
        id: "precioUnicoLabel"
    });
    $.__views.precioUnico.add($.__views.precioUnicoLabel);
    $.__views.precio = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt",
            fontWeight: "Bold"
        },
        color: "white",
        top: "4",
        right: "4",
        text: "Bs.F 21,90",
        id: "precio"
    });
    $.__views.precioUnico.add($.__views.precio);
    $.__views.agregarBtn = Ti.UI.createImageView({
        image: "/agregarBtn.png",
        top: "40",
        left: "8",
        id: "agregarBtn"
    });
    $.__views.precioUnico.add($.__views.agregarBtn);
    $.__views.agregarLista = Ti.UI.createLabel({
        font: {
            font: "Helvetica",
            fontSize: "7pt"
        },
        color: "white",
        left: "40",
        top: "40",
        text: "Agregar a lista",
        id: "agregarLista"
    });
    $.__views.precioUnico.add($.__views.agregarLista);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorStyle: "NONE",
        id: "list"
    });
    __alloyId15.push($.__views.list);
    $.__views.rowContainerSocial = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "151px",
        backgroundColor: "white",
        top: "25px",
        id: "rowContainerSocial"
    });
    $.__views.list.add($.__views.rowContainerSocial);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "Síguenos en",
        font: "Helvetica",
        fontWeight: "bold",
        size: "6pt",
        top: "10",
        left: "10",
        color: "#f79323",
        id: "__alloyId19"
    });
    $.__views.rowContainerSocial.add($.__views.__alloyId19);
    $.__views.facebookImg = Ti.UI.createImageView({
        width: "52px",
        height: "52px",
        top: "40",
        left: "10",
        image: "/facebook.png",
        id: "facebookImg"
    });
    $.__views.rowContainerSocial.add($.__views.facebookImg);
    $.__views.twitterImg = Ti.UI.createImageView({
        width: "52px",
        height: "52px",
        top: "40",
        left: "50",
        image: "/twitter.png",
        id: "twitterImg"
    });
    $.__views.rowContainerSocial.add($.__views.twitterImg);
    $.__views.youTubeImg = Ti.UI.createImageView({
        width: "52px",
        height: "52px",
        top: "40",
        left: "90",
        image: "/youTube.png",
        id: "youTubeImg"
    });
    $.__views.rowContainerSocial.add($.__views.youTubeImg);
    $.__views.__alloyId14 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "#dddddd",
        top: "90",
        separatorStyle: "NONE",
        data: __alloyId15,
        id: "__alloyId14"
    });
    $.__views.inicioScreen.add($.__views.__alloyId14);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;