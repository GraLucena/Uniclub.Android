function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.drawermenu.widget/" + s : s.substring(0, index) + "/com.drawermenu.widget/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0002,
    key: "drawermenuview",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "mainview",
    style: {
        backgroundColor: "red",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "mainviewheader",
    style: {
        top: "0",
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#cacaca"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "menubutton",
    style: {
        left: "0",
        borderWidth: 1,
        borderColor: "#000",
        width: "40dp",
        height: "40dp",
        visible: true
    }
} ];