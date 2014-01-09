$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});

function infoReceta() {
	var win = Alloy.createController('infoReceta').getView();
	$.inicioScreen.add(win);
}