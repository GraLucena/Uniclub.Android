$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});


function infoSupermercado() {
	var win = Alloy.createController('detalleSupermercado').getView();
	
	var slide_it_left = Titanium.UI.createAnimation();
    slide_it_left.left = 0; // to put it back to the left side of the window
    //slide_it_left.curve = Titanium.UI.ANIMATION_CURVE_LINEAR;
    slide_it_left.duration = 500;

    var slide_it_right = Titanium.UI.createAnimation();
    slide_it_right.left = "-90%";
    slide_it_right.curve = Titanium.UI.ANIMATION_CURVE_EASE_OUT;
    slide_it_right.duration = 1000;    

	
   	//win.animate(slide_it_right);
	$.inicioScreen.add(win);
}