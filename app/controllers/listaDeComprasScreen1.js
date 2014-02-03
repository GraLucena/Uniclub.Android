$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});

function eliminarProducto(){
	alert("se eliminara este producto de su lista?");
	var listaDeComprasScreen = Alloy.createController('listaDeComprasScreen').getView();
	$.inicioScreen.add(listaDeComprasScreen);
}