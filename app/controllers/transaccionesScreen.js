$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});

// Function To Generate Table Row
function createRow(sucursal, fecha, puntosG, puntosR, saldo)
{
    // Create Table Row
    var tableRow = Ti.UI.createTableViewRow({ height: 50 });
 
    // Create Table Row Columns
    var sucursalView   = Ti.UI.createView({ left : 0,     width : "20%", height: Ti.UI.Size, backgroundColor : "white"   });
    var fechaView  = Ti.UI.createView({ left : "20%", width : "24%", height: Ti.UI.Size, backgroundColor : "white"    });
    var puntosGView   = Ti.UI.createView({ left : "44%", width : "18%", height: Ti.UI.Size, backgroundColor : "white"  });
    var puntosRView = Ti.UI.createView({ left : "64%", width : "18%", height: Ti.UI.Size, backgroundColor : "white" });
  	var saldoView = Ti.UI.createView({ left : "83%", width : "18%", height: Ti.UI.Size, backgroundColor : "white" });
    
    // Create Table Row Column Labels
    sucursalView.add(Ti.UI.createLabel({   top: 5, right: 5, bottom: 5, left: 5, text: sucursal, color:"4d4d4d", font:{ font:"Helvetica", fontSize:"12pt"}   }));
    fechaView.add(Ti.UI.createLabel({  top: 5, right: 5, bottom: 5, left: 5, text: fecha, color:"4d4d4d", font:{ font:"Helvetica", fontSize:"12pt"}   }));
    puntosGView.add(Ti.UI.createLabel({   top: 5, right: 5, bottom: 5, left: 5, text: puntosG, color:"4d4d4d", font:{ font:"Helvetica", fontSize:"12pt"}  }));
    puntosRView.add(Ti.UI.createLabel({ top: 5, right: 5, bottom: 5, left: 5, text: puntosR, color:"4d4d4d", font:{ font:"Helvetica", fontSize:"12pt"} }));
    saldoView.add(Ti.UI.createLabel({ top: 5, right: 5, bottom: 5, left: 5, text: saldo, color:"4d4d4d", font:{ font:"Helvetica", fontSize:"12pt"} }));
 
    // Add Columns To Table Row
    tableRow.add(sucursalView);
    tableRow.add(fechaView);
    tableRow.add(puntosGView);
    tableRow.add(puntosRView);
    tableRow.add(saldoView);
 
    // Resource Clean-Up
    sucursalView = fechaView = puntosGView = puntosRView = saldoView = null;
 
    // Finished
    return tableRow;
}
 
// Create Table Data
var tableData = [];
tableData.push(createRow('Lomas', 'dd/mm/aa', 650, 220, 5000));
tableData.push(createRow('Lomas', 'dd/mm/aa', 650, 220, 5000));
tableData.push(createRow('Lomas', 'dd/mm/aa', 650, 220, 5000));
tableData.push(createRow('Lomas', 'dd/mm/aa', 650, 220, 5000));
 
// Set Table Data
$.myTable.setData(tableData);
 
// Resource Clean-Up
tableData = null;