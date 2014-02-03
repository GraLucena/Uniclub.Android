$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});

function agregarALista(){
	
	var listaDeComprasScreen3 = Alloy.createController('listaDeComprasScreen3').getView();
	$.inicioScreen.add(listaDeComprasScreen3);
};
