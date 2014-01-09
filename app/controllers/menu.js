// create menu view and table view
var v1 = Ti.UI.createView({
	height : '100%',
	width : '100%',
	left : '0%',
	backgroundColor : '#9C213F'
});

$.drawermenu.drawermenuview.add(v1);

var tableView = Ti.UI.createTableView({
	height : '100%',
	width : '80%',
	left : 0,
	top :65,
	backgroundColor:"#9C213F",
	//separatorColor : 'white'
});
v1.add(tableView);

//BORDE
var sectionBorde = Ti.UI.createView({
	width : Ti.UI.FILL,
	height : "42px",
	touchEnabled : false,
	backgroundColor:"#9C213F",
	top: 0

});

v1.add(sectionBorde);


//OPCIONES MENU PRINCIPAL

								


									//INICIO//
var sectionInicio = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var inicioLabel = Ti.UI.createLabel({
	text:"Inicio",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var inicioImg = Ti.UI.createImageView({
	image: "/inicioImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionInicio.add(inicioLabel);
sectionInicio.add(inicioImg);


									//CATALOGO//
var sectionCatalogo = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var catalogoLabel = Ti.UI.createLabel({
	text:"Catálogo de Productos",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var catalogoImg = Ti.UI.createImageView({
	image: "/catalogoImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionCatalogo.add(catalogoLabel);
sectionCatalogo.add(catalogoImg);


									//LISTA//
var sectionLista = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var listaLabel = Ti.UI.createLabel({
	text:"Lista de Compras",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var listaImg = Ti.UI.createImageView({
	image: "/listaImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionLista.add(listaLabel);
sectionLista.add(listaImg);


									//RECETAS//
var sectionRecetas = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var recetasLabel = Ti.UI.createLabel({
	text:"Recetas",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var recetasImg = Ti.UI.createImageView({
	image: "/recetaImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionRecetas.add(recetasLabel);
sectionRecetas.add(recetasImg);



									//PRECIOS//
var sectionPrecios = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var preciosLabel = Ti.UI.createLabel({
	text:"Consulta de Precios",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var preciosImg = Ti.UI.createImageView({
	image: "/preciosImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionPrecios.add(preciosLabel);
sectionPrecios.add(preciosImg);



									//PROMOCIONES//
var sectionPromociones = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var promocionesLabel = Ti.UI.createLabel({
	text:"Promociones",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var promocionesImg = Ti.UI.createImageView({
	image: "/promocionesImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionPromociones.add(promocionesLabel);
sectionPromociones.add(promocionesImg);


									//MICUENTA//
var sectionMiCuenta = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var miCuentaLabel = Ti.UI.createLabel({
	text:"Mi Cuenta",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var miCuentaImg = Ti.UI.createImageView({
	image: "/miCuentaImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionMiCuenta.add(miCuentaLabel);
sectionMiCuenta.add(miCuentaImg);


									//UBIQUENOS//
var sectionUbiquenos = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var ubiquenosLabel = Ti.UI.createLabel({
	text:"Ubíquenos",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var ubiquenosImg = Ti.UI.createImageView({
	image: "/ubiquenosImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionUbiquenos.add(ubiquenosLabel);
sectionUbiquenos.add(ubiquenosImg);


									//PASILLOS//
var sectionPasillos = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var pasillosLabel = Ti.UI.createLabel({
	text:"Pasillos",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"17pt"
	}
	
});

var pasillosImg = Ti.UI.createImageView({
	image: "/pasillosImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionPasillos.add(pasillosLabel);
sectionPasillos.add(pasillosImg);


//OPCIONES SUBMENU CATALOGO//

var sectionMenu = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"f6923a"
});

var menuLabel = Ti.UI.createLabel({
	text:"Menú",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

var atrasBtn = Ti.UI.createImageView({
	image: "/atras.png",
	left: "0"
});

sectionMenu.add(atrasBtn);
sectionMenu.add(menuLabel);

var sectionCatalogo1 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var catalogoLabel1 = Ti.UI.createLabel({
	text:"Catálogo de Productos",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

var catalogoImg = Ti.UI.createImageView({
	image: "/catalogoImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionCatalogo1.add(catalogoImg);
sectionCatalogo1.add(catalogoLabel1);


var sectionCarniceria = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var carniceriaLabel = Ti.UI.createLabel({
	text:"Carnicería",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionCarniceria.add(carniceriaLabel);

var sectionCharcuteria = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var charcuteriaLabel = Ti.UI.createLabel({
	text:"Charcutería",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionCharcuteria.add(charcuteriaLabel);

var sectionFruteria = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var fruteriaLabel = Ti.UI.createLabel({
	text:"Frutería",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionFruteria.add(fruteriaLabel);

var sectionLimpieza = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var limpiezaLabel = Ti.UI.createLabel({
	text:"Limpieza",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionLimpieza.add(limpiezaLabel);

var sectionPerfumeria = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var perfumeriaLabel = Ti.UI.createLabel({
	text:"Perfumería",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPerfumeria.add(perfumeriaLabel);

var sectionPescaderia = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pescaderiaLabel = Ti.UI.createLabel({
	text:"Pescadería",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPescaderia.add(pescaderiaLabel);

var sectionQuincalla = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var quincallaLabel = Ti.UI.createLabel({
	text:"Quincalla",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionQuincalla.add(quincallaLabel);

var sectionViveres = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var viveresLabel = Ti.UI.createLabel({
	text:"Víveres",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionViveres.add(viveresLabel);

//OPCIONES SUBMENU PASILLOS//

var sectionMenu = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"f6923a"
});

var menuLabel = Ti.UI.createLabel({
	text:"Menú",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

var atrasBtn = Ti.UI.createImageView({
	image: "/atras.png",
	left: "0"
});

sectionMenu.add(atrasBtn);
sectionMenu.add(menuLabel);

var sectionPasillos1 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var pasillosLabel1 = Ti.UI.createLabel({
	text:"Pasillos",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

var pasillosImg = Ti.UI.createImageView({
	image: "/pasillosImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionPasillos1.add(pasillosImg);
sectionPasillos1.add(pasillosLabel1);


var sectionPasillo1 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pasillo1Label = Ti.UI.createLabel({
	text:"Pasillo 1",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPasillo1.add(pasillo1Label);

var sectionPasillo2 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pasillo2Label = Ti.UI.createLabel({
	text:"Pasillo 2",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPasillo2.add(pasillo2Label);

var sectionPasillo3 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pasillo3Label = Ti.UI.createLabel({
	text:"Pasillo 3",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPasillo3.add(pasillo3Label);

var sectionPasillo4 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pasillo4Label = Ti.UI.createLabel({
	text:"Pasillo 4",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPasillo4.add(pasillo4Label);

var sectionPasillo5 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pasillo5Label = Ti.UI.createLabel({
	text:"Pasillo 5",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPasillo5.add(pasillo5Label);

var sectionPasillo6 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pasillo6Label = Ti.UI.createLabel({
	text:"Pasillo 6",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPasillo6.add(pasillo6Label);

var sectionPasillo7 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pasillo7Label = Ti.UI.createLabel({
	text:"Pasillo 7",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPasillo7.add(pasillo7Label);

var sectionPasillo8 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var pasillo8Label = Ti.UI.createLabel({
	text:"Pasillo8",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionPasillo8.add(pasillo8Label);

//OPCIONES SUBMENU MI CUENTA//

var sectionMenu = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"f6923a"
});

var menuLabel = Ti.UI.createLabel({
	text:"Menú",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

var atrasBtn = Ti.UI.createImageView({
	image: "/atras.png",
	left: "0"
});

sectionMenu.add(atrasBtn);
sectionMenu.add(menuLabel);

var sectionMiCuenta1 = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	touchEnabled : false,
	backgroundColor:"9c213f"
});

var miCuentaLabel1 = Ti.UI.createLabel({
	text:"Mi Cuenta",
	color:"white",
	touchEnabled : false,
	left:"90px",
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

var miCuentaImg = Ti.UI.createImageView({
	image: "/miCuentaImg.png",
	left: "10px",
	width:"75px",
	height:"65px"
});

sectionMiCuenta1.add(miCuentaImg);
sectionMiCuenta1.add(miCuentaLabel1);


var sectionMisDatos = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var misDatosLabel = Ti.UI.createLabel({
	text:"Mis Datos",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionMisDatos.add(misDatosLabel);

var sectionTransacciones = Ti.UI.createTableViewRow({
	width : Ti.UI.FILL,
	height : "43",
	left:"4px",
	touchEnabled : false,
	backgroundColor:"e4e4e4"
});

var transaccionesLabel = Ti.UI.createLabel({
	text:"Mis Transacciones",
	color:"6d6969",
	left:"40px",
	touchEnabled : false,
	font:{
		font:"Helvetica",
		fontSize:"16pt"
	}
	
});

sectionTransacciones.add(transaccionesLabel);



//EVENT FOR MENUBTN
Ti.App.addEventListener('menuBtn', function(data) {
	
	var data = [];
	data.push(sectionInicio);
	data.push(sectionCatalogo);
	data.push(sectionLista);
	data.push(sectionRecetas);
	data.push(sectionPrecios);
	data.push(sectionPromociones);
	data.push(sectionMiCuenta);
	data.push(sectionUbiquenos);
	data.push(sectionPasillos);

	tableView.setData(data);

	$.drawermenu.showhidemenu();
});

//EVENTS FOR CATALOGO
Ti.App.addEventListener('submenuCarniceria', function(dataCatalogo){
	
	var dataCatalogo = [];
	dataCatalogo.push(sectionMenu);
	dataCatalogo.push(sectionCatalogo1);
	dataCatalogo.push(sectionCarniceria);
	dataCatalogo.push(sectionCharcuteria);
	dataCatalogo.push(sectionFruteria);
	dataCatalogo.push(sectionLimpieza);
	dataCatalogo.push(sectionPerfumeria);
	dataCatalogo.push(sectionPescaderia);
	dataCatalogo.push(sectionQuincalla);
	dataCatalogo.push(sectionViveres);
		
	tableView.setData(dataCatalogo);
	
	
});

//EVENTS FOR PASILLOS
Ti.App.addEventListener('submenuPasillos', function(dataPasillos){
	var dataPasillos = [];
	dataPasillos.push(sectionMenu);
	dataPasillos.push(sectionPasillos1);
	dataPasillos.push(sectionPasillo1);
	dataPasillos.push(sectionPasillo2);
	dataPasillos.push(sectionPasillo3);
	dataPasillos.push(sectionPasillo4);
	dataPasillos.push(sectionPasillo5);
	dataPasillos.push(sectionPasillo6);
	dataPasillos.push(sectionPasillo7);
	dataPasillos.push(sectionPasillo8);
		
	tableView.setData(dataPasillos);
	
});

//EVENTS FOR MI CUENTA
Ti.App.addEventListener('submenuMiCuenta', function(dataMiCuenta){
	var dataMiCuenta = [];
	dataMiCuenta.push(sectionMenu);
	dataMiCuenta.push(sectionMiCuenta1);
	dataMiCuenta.push(sectionMisDatos);
	dataMiCuenta.push(sectionTransacciones);
	
	tableView.setData(dataMiCuenta);
	
});

//EVENTS FOR MENU1
tableView.addEventListener('click', function(e) {
	if (e.row.children[0].text == 'Inicio') {
		var inicioScreen = Alloy.createController('inicioScreen').getView();
		$.drawermenu.drawermainview.add(inicioScreen);
		$.drawermenu.showhidemenu();
		
	} else if (e.row.children[0].text == 'Catálogo de Productos') {
			Ti.App.fireEvent('submenuCarniceria');
			
			tableView.addEventListener('click', function(e){
				if (e.row.children[0].text == 'Carnicería') {
					var catalogoScreen = Alloy.createController('catalogoScreen').getView();
					$.drawermenu.drawermainview.add(catalogoScreen);
					
				}
			});
			
		
	} else if (e.row.children[0].text == 'Lista de Compras') {
		var listaDeComprasScreen = Alloy.createController('listaDeComprasScreen').getView();
		$.drawermenu.drawermainview.add(listaDeComprasScreen);
		$.drawermenu.showhidemenu();
		
	} else if (e.row.children[0].text == 'Nothing') {
		$.drawermenu.showhidemenu();
		
	} else if (e.row.children[0].text == 'Recetas') {
		var recetasScreen = Alloy.createController('recetasScreen').getView();
		$.drawermenu.drawermainview.add(recetasScreen);
		$.drawermenu.showhidemenu();
		
	} else if (e.row.children[0].text == 'Consulta de Precios') {
		var precioScreen = Alloy.createController('precioScreen').getView();
		$.drawermenu.drawermainview.add(precioScreen);
		$.drawermenu.showhidemenu();
		
	} else if (e.row.children[0].text == 'Promociones') {
		var promocionesScreen = Alloy.createController('promocionesScreen').getView();
		$.drawermenu.drawermainview.add(promocionesScreen);
		$.drawermenu.showhidemenu();
		
	} else if (e.row.children[0].text == 'Mi Cuenta') {
		Ti.App.fireEvent('submenuMiCuenta');
		
		tableView.addEventListener('click', function(e){
		if (e.row.children[0].text == 'Mis Datos') {
		var miCuentaScreen = Alloy.createController('miCuentaScreen').getView();
		$.drawermenu.drawermainview.add(miCuentaScreen);		
		}else if (e.row.children[0].text == 'Mis Transacciones') {
		var transaccionesScreen = Alloy.createController('transaccionesScreen').getView();
		$.drawermenu.drawermainview.add(transaccionesScreen);		
		}
	});
	
	} else if (e.row.children[0].text == 'Ubíquenos') {
		var listaSupermercados = Alloy.createController('listaSupermercados').getView();
		$.drawermenu.drawermainview.add(listaSupermercados);
		$.drawermenu.showhidemenu(); 
		
	} else if (e.row.children[0].text == 'Pasillos') {
		Ti.App.fireEvent('submenuPasillos');
		
		tableView.addEventListener('click', function(e){
				if (e.row.children[0].text == 'Pasillo 1') {
					var pasillosScreen = Alloy.createController('pasillosScreen').getView();
					$.drawermenu.drawermainview.add(pasillosScreen);
					
				}
			});
		
	}else {
		$.drawermenu.showhidemenu();
	}
});


atrasBtn.addEventListener('click', function(e){
	Ti.App.fireEvent('menuBtn');

});

var inicioScreen = Alloy.createController('inicioScreen').getView();
$.drawermenu.drawermainview.add(inicioScreen);






