$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});

function eliminarProducto(){
	alert("se eliminara este producto de su lista?");
	var listaDeComprasScreen1 = Alloy.createController('listaDeComprasScreen1').getView();
	$.inicioScreen.add(listaDeComprasScreen1);
}