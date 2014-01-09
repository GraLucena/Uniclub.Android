$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});

function infoProducto() {
	var win = Alloy.createController('infoProducto').getView();
	
	

	
   	//win.animate(slide_it_right);
	$.inicioScreen.add(win);
}


