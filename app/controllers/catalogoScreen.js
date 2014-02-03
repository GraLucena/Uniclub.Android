$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});

function infoProducto() {
	var win = Alloy.createController('infoProducto').getView();
	$.inicioScreen.add(win);
};

function agregarALista(){
	
	var listaDeComprasScreen4 = Alloy.createController('listaDeComprasScreen4').getView();
	$.inicioScreen.add(listaDeComprasScreen4);
};
