
// Global Variables
var NumCrystals = 64;
var CrystalDistance = 0;
var CloverLocation = ['Downstream Lampshade', 'Corona', 'Corona', 'Upstream Lampshade']; 
var CrystalTheta = []; 
var CrystalPhi = [];
var RadToDeg = DegToRad = (Math.PI / 180.000);
var AngularBinsAngle = [];
var AngularBinsWeight = [];
var ExcludedCrystalsList = [];
var selectedAngle = 0;

document.onload = initialSetup();

function initialSetup() {
    
    // Populate the exlucded crystals list
    for(i=1; i<65; i++){
	ExcludedCrystalsList[i]=0;
    }
    
    // Draw the Crystal Map
    // 16 columns
    // 6 rows
    // 64 crystals arranged in 16 clovers
    var cell = [];
    document.getElementById("MapTable").innerHTML = '';
    var row = document.getElementById("MapTable").insertRow(0); 
    for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
    }
    cell[2].innerHTML = '4';    cell[2].id = 'CellCrystal4';
    cell[3].innerHTML = '1';    cell[3].id = 'CellCrystal1'; 
    cell[6].innerHTML = '8';    cell[6].id = 'CellCrystal8'; 
    cell[7].innerHTML = '5';    cell[7].id = 'CellCrystal5'; 
    cell[10].innerHTML = '12';   cell[10].id = 'CellCrystal12';
    cell[11].innerHTML = '9';  cell[11].id = 'CellCrystal9';
    cell[14].innerHTML = '16';  cell[14].id = 'CellCrystal16';
    cell[15].innerHTML = '13';  cell[15].id = 'CellCrystal13';
    
    var row = document.getElementById("MapTable").insertRow(1); 
    for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
    }
    cell[2].innerHTML = '3';    cell[2].id = 'CellCrystal3'; 
    cell[3].innerHTML = '2';    cell[3].id = 'CellCrystal2'; 
    cell[6].innerHTML = '7';    cell[6].id = 'CellCrystal7'; 
    cell[7].innerHTML = '6';    cell[7].id = 'CellCrystal6'; 
    cell[10].innerHTML = '11';  cell[10].id = 'CellCrystal11';
    cell[11].innerHTML = '10';  cell[11].id = 'CellCrystal10';
    cell[14].innerHTML = '15';  cell[14].id = 'CellCrystal15';
    cell[15].innerHTML = '14';  cell[15].id = 'CellCrystal14';
    
    var row = document.getElementById("MapTable").insertRow(2); 
    for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
    }
    cell[0].innerHTML = '20';   cell[0].id = 'CellCrystal20';
    cell[1].innerHTML = '17';   cell[1].id = 'CellCrystal17';
    cell[2].innerHTML = '24';   cell[2].id = 'CellCrystal24';
    cell[3].innerHTML = '21';   cell[3].id = 'CellCrystal21';
    cell[4].innerHTML = '28';   cell[4].id = 'CellCrystal28';
    cell[5].innerHTML = '25';   cell[5].id = 'CellCrystal25';
    cell[6].innerHTML = '32';   cell[6].id = 'CellCrystal32';
    cell[7].innerHTML = '29';   cell[7].id = 'CellCrystal29';
    cell[8].innerHTML = '36';   cell[8].id = 'CellCrystal36';
    cell[9].innerHTML = '33';   cell[9].id = 'CellCrystal33';
    cell[10].innerHTML = '40';  cell[10].id = 'CellCrystal40';
    cell[11].innerHTML = '37';  cell[11].id = 'CellCrystal37'; 
    cell[12].innerHTML = '44';  cell[12].id = 'CellCrystal44';
    cell[13].innerHTML = '41';  cell[13].id = 'CellCrystal41';
    cell[14].innerHTML = '48';  cell[14].id = 'CellCrystal48';
    cell[15].innerHTML = '45';  cell[15].id = 'CellCrystal45';
    
    var row = document.getElementById("MapTable").insertRow(3); 
      for(var i=0; i<16; i++){
          cell[i] = row.insertCell(i);
      }
    cell[0].innerHTML = '19';   cell[0].id = 'CellCrystal19';
    cell[1].innerHTML = '18';   cell[1].id = 'CellCrystal18';
    cell[2].innerHTML = '23';   cell[2].id = 'CellCrystal23';
    cell[3].innerHTML = '22';   cell[3].id = 'CellCrystal22';
    cell[4].innerHTML = '27';   cell[4].id = 'CellCrystal27';
    cell[5].innerHTML = '26';   cell[5].id = 'CellCrystal26';
    cell[6].innerHTML = '31';   cell[6].id = 'CellCrystal31';
    cell[7].innerHTML = '30';   cell[7].id = 'CellCrystal30';
    cell[8].innerHTML = '35';   cell[8].id = 'CellCrystal35';
    cell[9].innerHTML = '34';   cell[9].id = 'CellCrystal34';
    cell[10].innerHTML = '39';  cell[10].id = 'CellCrystal39';
    cell[11].innerHTML = '38';  cell[11].id = 'CellCrystal38';
    cell[12].innerHTML = '43';  cell[12].id = 'CellCrystal43';
    cell[13].innerHTML = '42';  cell[13].id = 'CellCrystal42';
    cell[14].innerHTML = '47';  cell[14].id = 'CellCrystal47';
    cell[15].innerHTML = '46';  cell[15].id = 'CellCrystal46';
    
    var row = document.getElementById("MapTable").insertRow(4); 
    for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
    }
    cell[2].innerHTML = '52';   cell[2].id = 'CellCrystal52'; 
    cell[3].innerHTML = '49';   cell[3].id = 'CellCrystal49'; 
    cell[6].innerHTML = '56';   cell[6].id = 'CellCrystal56'; 
    cell[7].innerHTML = '53';   cell[7].id = 'CellCrystal53'; 
    cell[10].innerHTML = '60';  cell[10].id = 'CellCrystal60';
    cell[11].innerHTML = '57';  cell[11].id = 'CellCrystal57';
    cell[14].innerHTML = '64';  cell[14].id = 'CellCrystal64';
    cell[15].innerHTML = '61';  cell[15].id = 'CellCrystal61';
      
    var row = document.getElementById("MapTable").insertRow(5); 
    for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
    }
    cell[2].innerHTML = '51';    cell[2].id = 'CellCrystal51'; 
    cell[3].innerHTML = '50';    cell[3].id = 'CellCrystal50'; 
    cell[6].innerHTML = '55';    cell[6].id = 'CellCrystal55'; 
    cell[7].innerHTML = '54';    cell[7].id = 'CellCrystal54'; 
    cell[10].innerHTML = '59';   cell[10].id = 'CellCrystal59'; 
    cell[11].innerHTML = '58';   cell[11].id = 'CellCrystal58'; 
    cell[14].innerHTML = '63';   cell[14].id = 'CellCrystal63'; 
    cell[15].innerHTML = '62';   cell[15].id = 'CellCrystal62'; 
    
    // Add the onclick functions to the Crystal Map
    for(i=0; i<document.getElementById("MapTable").rows.length; i++){
	for(j=0; j<document.getElementById("MapTable").rows[i].cells.length; j++){
	    if(document.getElementById("MapTable").rows[i].cells[j].innerHTML.length>0){
		document.getElementById("MapTable").rows[i].cells[j].className = "crystal";
		document.getElementById("MapTable").rows[i].cells[j].onclick = function(e){
		    ToggleExcludeCrystal(this.innerHTML);
		};
	    }
	}
    }
    
    // Set up the crystal selection drop-down select
    sel = document.getElementById("crystalSelector"); 
    for(i=0; i<NumCrystals; i++){
	var opt = document.createElement("option");
	opt.value = i;
	opt.text = 'Crystal '+(i+1)+', Clover '+(Math.floor(i/4)+1)+', '+CloverLocation[Math.floor(i/16)]; 
	sel.appendChild(opt);
    }
    // Set up the Angular bins drop-down select
    CalculateAngularBins();
    document.getElementById("angleSelector").innerHTML = "";
    sel = document.getElementById("angleSelector"); 
    for(i=0; i<AngularBinsAngle.length; i++){
	var opt = document.createElement("option");
	opt.value = i;
	opt.text = 'Index '+(i+1)+', Angle '+AngularBinsAngle[i]+', Weight '+AngularBinsWeight[i]; 
	sel.appendChild(opt);
    }
    sel.value = selectedAngle;
    sel.onchange = function(){ selectedAngle=sel.value; PlotTables();};
    
    //Draw initial Tables
    PlotTables();
    
}// End of initialSetup()

function PlotTables() {
    
    //Decide which table is selected
    var whichTable = document.getElementById("tableSelector").value;
    
    // Set the angles for this distance
    SetupAngles();
    
    switch(whichTable)
    {
	case "crystals" : PlotCrystalsTable(); break; 
	case "combinations" : PlotCombinationsTable(); break;
	case "angles" : PlotAnglesTable(); break; 
	case "angle-combinations" : PlotAngleCombinationsTable(); break;
    }
    
}

function SetupAngles() {

    var CrystalDistance = document.getElementById("distanceSelector").value;
    
    if(CrystalDistance == "145"){
	
	CrystalTheta = [// 145mm distance
	    37.8867847	,
	    53.1854474	,
	    53.1854474	,
	    37.8867847	,
	    37.8867847	,
	    53.1854474	,
	    53.1854474	,
	    37.8867847	,
	    37.8867847	,
	    53.1854474	,
	    53.1854474	,
	    37.8867847	,
	    37.8867847	,
	    53.1854474	,
	    53.1854474	,
	    37.8867847	,
	    82.27899751	,
	    97.72100249	,
	    97.72100249	,
	    82.27899751	,
	    82.27899751	,
	    97.72100249	,
	    97.72100249	,
	    82.27899751	,
	    82.27899751	,
	    97.72100249	,
	    97.72100249	,
	    82.27899751	,
	    82.27899751	,
	    97.72100249	,
	    97.72100249	,
	    82.27899751	,
	    82.27899751	,
	    97.72100249	,
	    97.72100249	,
	    82.27899751	,
	    82.27899751	,
	    97.72100249	,
	    97.72100249	,
	    82.27899751	,
	    82.27899751	,
	    97.72100249	,
	    97.72100249	,
	    82.27899751	,
	    82.27899751	,
	    97.72100249	,
	    97.72100249	,
	    82.27899751	,
	    126.8145526	,
	    142.1132153	,
	    142.1132153	,
	    126.8145526	,
	    126.8145526	,
	    142.1132153	,
	    142.1132153	,
	    126.8145526	,
	    126.8145526	,
	    142.1132153	,
	    142.1132153	,
	    126.8145526	,
	    126.8145526	,
	    142.1132153	,
	    142.1132153	,
	    126.8145526	
	];
	CrystalPhi = [// 145mm distance
	    80.13699842	,
	    77.16081987	,
	    57.83918013	,
	    54.86300158	,
	    170.1369984	,
	    167.1608199	,
	    147.8391801	,
	    144.8630016	,
	    260.1369984	,
	    257.1608199	,
	    237.8391801	,
	    234.8630016	,
	    350.1369984	,
	    347.1608199	,
	    327.8391801	,
	    324.8630016	,
	    30.29207808	,
	    30.29207808	,
	    14.70792192	,
	    14.70792192	,
	    75.29207808	,
	    75.29207808	,
	    59.70792192	,
	    59.70792192	,
	    120.2920781	,
	    120.2920781	,
	    104.7079219	,
	    104.7079219	,
	    165.2920781	,
	    165.2920781	,
	    149.7079219	,
	    149.7079219	,
	    210.2920781	,
	    210.2920781	,
	    194.7079219	,
	    194.7079219	,
	    255.2920781	,
	    255.2920781	,
	    239.7079219	,
	    239.7079219	,
	    300.2920781	,
	    300.2920781	,
	    284.7079219	,
	    284.7079219	,
	    345.2920781	,
	    345.2920781	,
	    329.7079219	,
	    329.7079219	,
	    77.16081987	,
	    80.13699842	,
	    54.86300158	,
	    57.83918013	,
	    167.1608199	,
	    170.1369984	,
	    144.8630016	,
	    147.8391801	,
	    257.1608199	,
	    260.1369984	,
	    234.8630016	,
	    237.8391801	,
	    347.1608199	,
	    350.1369984	,
	    324.8630016	,
	    327.8391801	
	];
    }
    else{
	// 110mm distance
	  CrystalTheta = [// 110mm distance
	      36.5419172	,
	      55.06797108	,
	      55.06797108	,
	      36.5419172	,
	      36.5419172	,
	      55.06797108	,
	      55.06797108	,
	      36.5419172	,
	      36.5419172	,
	      55.06797108	,
	      55.06797108	,
	      36.5419172	,
	      36.5419172	,
	      55.06797108	,
	      55.06797108	,
	      36.5419172	,
	      80.60659389	,
	      99.39340611	,
	      99.39340611	,
	      80.60659389	,
	      80.60659389	,
	      99.39340611	,
	      99.39340611	,
	      80.60659389	,
	      80.60659389	,
	      99.39340611	,
	      99.39340611	,
	      80.60659389	,
	      80.60659389	,
	      99.39340611	,
	      99.39340611	,
	      80.60659389	,
	      80.60659389	,
	      99.39340611	,
	      99.39340611	,
	      80.60659389	,
	      80.60659389	,
	      99.39340611	,
	      99.39340611	,
	      80.60659389	,
	      80.60659389	,
	      99.39340611	,
	      99.39340611	,
	      80.60659389	,
	      80.60659389	,
	      99.39340611	,
	      99.39340611	,
	      80.60659389	,
	      124.9320289	,
	      143.4580828	,
	      143.4580828	,
	      124.9320289	,
	      124.9320289	,
	      143.4580828	,
	      143.4580828	,
	      124.9320289	,
	      124.9320289	,
	      143.4580828	,
	      143.4580828	,
	      124.9320289	,
	      124.9320289	,
	      143.4580828	,
	      143.4580828	,
	      124.9320289
	  ];
	CrystalPhi = [// 110mm distance
	    83.40942207	,
	    78.98318538	,
	    56.01681462	,
	    51.59057793	,
	    173.4094221	,
	    168.9831854	,
	    146.0168146	,
	    141.5905779	,
	    263.4094221	,
	    258.9831854	,
	    236.0168146	,
	    231.5905779	,
	    353.4094221	,
	    348.9831854	,
	    326.0168146	,
	    321.5905779	,
	    32.02225501	,
	    32.02225501	,
	    12.97774499	,
	    12.97774499	,
	    77.02225501	,
	    77.02225501	,
	    57.97774499	,
	    57.97774499	,
	    122.022255	,
	    122.022255	,
	    102.977745	,
	    102.977745	,
	    167.022255	,
	    167.022255	,
	    147.977745	,
	    147.977745	,
	    212.022255	,
	    212.022255	,
	    192.977745	,
	    192.977745	,
	    257.022255	,
	    257.022255	,
	    237.977745	,
	    237.977745	,
	    302.022255	,
	    302.022255	,
	    282.977745	,
	    282.977745	,
	    347.022255	,
	    347.022255	,
	    327.977745	,
	    327.977745	,
	    78.98318538	,
	    83.40942207	,
	    51.59057793	,
	    56.01681462	,
	    168.9831854	,
	    173.4094221	,
	    141.5905779	,
	    146.0168146	,
	    258.9831854	,
	    263.4094221	,
	    231.5905779	,
	    236.0168146	,
	    348.9831854	,
	    353.4094221	,
	    321.5905779	,
	    326.0168146
	];
    }

    // Set up the Angular bins drop-down select
    CalculateAngularBins();
    document.getElementById("angleSelector").innerHTML = "";
    sel = document.getElementById("angleSelector"); 
    for(i=0; i<AngularBinsAngle.length; i++){
	var opt = document.createElement("option");
	opt.value = i;
	opt.text = 'Index '+(i+1)+', Angle '+AngularBinsAngle[i]+', Weight '+AngularBinsWeight[i]; 
	sel.appendChild(opt);
    }
    sel.value = selectedAngle;
    sel.onchange = function(){ selectedAngle=sel.value; PlotTables(); };
    
}//End of SetupAngles()


function PlotCrystalsTable() {
    
    document.getElementById("TableTitle").innerHTML = 'Crystal Angles:';
    
    // Crystal Angles Table
    document.getElementById("MultiTable").innerHTML = '';
    var row = document.getElementById("MultiTable").insertRow(0); 
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1); 
    var cell3 = row.insertCell(2); 
    var cell4 = row.insertCell(3); 
    cell1.innerHTML = 'Crystal'; 
    cell2.innerHTML = 'Clover'; 
    cell3.innerHTML = 'Theta'; 
    cell4.innerHTML = 'Phi';
    
    for(var num=0; num<NumCrystals; num++){
	var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length); 
	row.id = (num+1);
	var cell1 = row.insertCell(0); 
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2); 
	var cell4 = row.insertCell(3); 
	cell1.innerHTML = (num+1); 
	cell2.innerHTML = (Math.floor(num/4)+1)+', '+CloverLocation[Math.floor(num/16)];
	cell3.innerHTML = CrystalTheta[num].toFixed(1); 
	cell4.innerHTML = CrystalPhi[num].toFixed(1);
	
	row.addEventListener('mouseover', function(e){
	    if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="yellow"; }
	    this.style.backgroundColor = color; 
	    document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
	});
	row.addEventListener('mouseout', function(e){
	    if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="white"; }
	    this.style.backgroundColor = "white"; 
	    document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
	});
    }
    
}

function PlotCombinationsTable() {
    
    document.getElementById("TableTitle").innerHTML = 'Crystal Combinations:';
    
    // Crystal Combinations Table
    document.getElementById("MultiTable").innerHTML = '';
    var row = document.getElementById("MultiTable").insertRow(0); 
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1); 
    var cell3 = row.insertCell(2); 
    var cell4 = row.insertCell(3); 
    var cell5 = row.insertCell(4); 
    var cell6 = row.insertCell(5);  
    var cell7 = row.insertCell(6);  
    var cell8 = row.insertCell(7);  
    var cell9 = row.insertCell(8); 
    var cell10 = row.insertCell(9);  
    var cell11 = row.insertCell(10); 
    cell1.innerHTML = 'Crystal'; 
    cell2.innerHTML = 'Clover'; 
    cell3.innerHTML = 'Theta'; 
    cell4.innerHTML = 'Phi'; 
    cell5.innerHTML = 'PSC'; 
    cell6.innerHTML = 'Crystal'; 
    cell7.innerHTML = 'Clover'; 
    cell8.innerHTML = 'Theta'; 
    cell9.innerHTML = 'Phi'; 
    cell10.innerHTML = 'PSC'; 
    cell11.innerHTML = 'Angular Difference'; 
    
    selectedCrystal = parseInt(document.getElementById("crystalSelector").value);
    for(var num=0; num<NumCrystals; num++){
	var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length);
	row.id = (num+1);
	var cell1 = row.insertCell(0); 
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2); 
	var cell4 = row.insertCell(3);  
	var cell5 = row.insertCell(4); 
	var cell6 = row.insertCell(5);  
	var cell7 = row.insertCell(6);  
	var cell8 = row.insertCell(7);  
	var cell9 = row.insertCell(8); 
	var cell10 = row.insertCell(9);  
	var cell11 = row.insertCell(10); 
	cell1.innerHTML = (selectedCrystal+1); 
	cell2.innerHTML = (Math.floor((selectedCrystal)/4)+1)+', '+CloverLocation[Math.floor((selectedCrystal)/16)];
	cell3.innerHTML = CrystalTheta[selectedCrystal].toFixed(1); 
	cell4.innerHTML = CrystalPhi[selectedCrystal].toFixed(1);
	var P=Math.floor(selectedCrystal/32);
	var S=Math.floor(((selectedCrystal%32)/4))*2;
	cell5.innerHTML = P+'-'+S; 
	cell6.innerHTML = (num+1);
	row.addEventListener('mouseover', function(e){
	    if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="yellow"; }
	    this.style.backgroundColor = color; 
	    this.cells[0].style.backgroundColor = "green"; 
	    document.getElementById('CellCrystal'+(selectedCrystal+1)).style.backgroundColor = "green"; 
	    document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
	});
	row.addEventListener('mouseout', function(e){
	    if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="white"; }
	    this.style.backgroundColor = "white"; 
	    this.cells[0].style.backgroundColor = "white"; 
	    document.getElementById('CellCrystal'+(selectedCrystal+1)).style.backgroundColor = "white"; 
	    document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
	});
	cell7.innerHTML = (Math.floor(num/4)+1)+', '+CloverLocation[Math.floor(num/16)];
	cell8.innerHTML = CrystalTheta[num].toFixed(1); 
	cell9.innerHTML = CrystalPhi[num].toFixed(1);
	var P=Math.floor(num/32);
	var S=Math.floor(((num%32)/4))*2;
	cell10.innerHTML = P+'-'+S; 
	cell11.innerHTML = CalculateAngularDifference(selectedCrystal,num);
	
    }
}
function PlotAnglesTable() {
    
    document.getElementById("TableTitle").innerHTML = 'Angular bins:';
    
    CalculateAngularBins();
    
    // Plot the Angular Bins table
    document.getElementById("MultiTable").innerHTML = '';
    var row = document.getElementById("MultiTable").insertRow(0); 
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1); 
    var cell3 = row.insertCell(2); 
    cell1.innerHTML = 'Index'; 
    cell2.innerHTML = 'Angular Difference'; 
    cell3.innerHTML = 'Number of Pairs';
    
    for(var num=0; num<AngularBinsAngle.length; num++){
	var thisRowNum = document.getElementById("MultiTable").rows.length;
	var row = document.getElementById("MultiTable").insertRow(thisRowNum);
	var cell1 = row.insertCell(0); 
	var cell2 = row.insertCell(1); 
	var cell3 = row.insertCell(2); 
	cell1.innerHTML = thisRowNum; 
	cell2.innerHTML = AngularBinsAngle[num]; 
	cell3.innerHTML = AngularBinsWeight[num];
    }
    
}//End of PlotTables


function PlotAngleCombinationsTable() {
    
    document.getElementById("TableTitle").innerHTML = 'Crystal Combinations for anglular bin of '+AngularBinsAngle[parseInt(document.getElementById("angleSelector").value)]+', with '+AngularBinsWeight[parseInt(document.getElementById("angleSelector").value)]+' pairs';
    
    // Crystal Combinations Table
    document.getElementById("MultiTable").innerHTML = '';
    var row = document.getElementById("MultiTable").insertRow(0); 
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1); 
    var cell3 = row.insertCell(2); 
    var cell4 = row.insertCell(3); 
    var cell5 = row.insertCell(4); 
    var cell6 = row.insertCell(5);  
    var cell7 = row.insertCell(6);  
    var cell8 = row.insertCell(7);  
    var cell9 = row.insertCell(8);  
    var cell10 = row.insertCell(9);  
    var cell11 = row.insertCell(10); 
    cell1.innerHTML = 'Crystal'; 
    cell2.innerHTML = 'Clover'; 
    cell3.innerHTML = 'Theta'; 
    cell4.innerHTML = 'Phi'; 
    cell5.innerHTML = 'PSC'; 
    cell6.innerHTML = 'Crystal'; 
    cell7.innerHTML = 'Clover'; 
    cell8.innerHTML = 'Theta'; 
    cell9.innerHTML = 'Phi'; 
    cell10.innerHTML = 'PSC'; 
    cell11.innerHTML = 'Angular Difference'; 
    
    
    for(i=0; i<NumCrystals; i++){
	if(ExcludedCrystalsList[i+1]==1){ continue; }
	for(j=0; j<NumCrystals; j++){
	    if(ExcludedCrystalsList[j+1]==1){ continue; }
	    
	    // Calculate the angular difference for this pair of crystals.
	    // The function returns 3 decimal place precision
	    thisAngle = CalculateAngularDifference(i,j);
	    if(isNaN(thisAngle)){
		if(i==j){ thisAngle = 0.0; }
		else{ thisAngle = 180.0; }
	    }
	    if(thisAngle == AngularBinsAngle[parseInt(document.getElementById("angleSelector").value)]){
		
		var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length);
		row.id = (i+1);
		var cell1 = row.insertCell(0); 
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2); 
		var cell4 = row.insertCell(3);  
		var cell5 = row.insertCell(4); 
		var cell6 = row.insertCell(5);  
		var cell7 = row.insertCell(6);  
		var cell8 = row.insertCell(7);  
		var cell9 = row.insertCell(8);   
		var cell10 = row.insertCell(9);   
		var cell11 = row.insertCell(10); 
		cell1.innerHTML = (i+1); 
		cell2.innerHTML = (Math.floor((i)/4)+1)+', '+CloverLocation[Math.floor((i)/16)];
		cell3.innerHTML = CrystalTheta[i].toFixed(1); 
		cell4.innerHTML = CrystalPhi[i].toFixed(1); 
		var P=Math.floor(i/32);
		var S=Math.floor(((i%32)/4))*2;
		cell5.innerHTML = P+'-'+S;
		cell6.innerHTML = (j+1);
		row.addEventListener('mouseover', function(e){
		    crystalA = parseInt(this.cells[0].innerHTML);
		    crystalB = parseInt(this.cells[5].innerHTML);
		    if(ExcludedCrystalsList[crystalA]==1 || ExcludedCrystalsList[crystalB]==1){ color="red"; }else{ color="yellow"; }
		    this.style.backgroundColor = color; 
		    document.getElementById('CellCrystal'+crystalA).style.backgroundColor = color; 
		    document.getElementById('CellCrystal'+crystalB).style.backgroundColor = color;
		});
		row.addEventListener('mouseout', function(e){
		    crystalA = parseInt(this.cells[0].innerHTML);
		    crystalB = parseInt(this.cells[5].innerHTML);
		    if(ExcludedCrystalsList[crystalA]==1 || ExcludedCrystalsList[crystalB]==1){ color="red"; }else{ color="white"; }
		    this.style.backgroundColor = "white"; 
		    document.getElementById('CellCrystal'+crystalA).style.backgroundColor = "white"; 
		    document.getElementById('CellCrystal'+crystalB).style.backgroundColor = "white";
		});
		cell7.innerHTML = (Math.floor(j/4)+1)+', '+CloverLocation[Math.floor(j/16)];
		cell8.innerHTML = CrystalTheta[j].toFixed(1); 
		cell9.innerHTML = CrystalPhi[j].toFixed(1);
		var P=Math.floor(j/32);
		var S=Math.floor(((j%32)/4))*2;
		cell10.innerHTML = P+'-'+S;
		cell11.innerHTML = CalculateAngularDifference(i,j);
	    }
	}
    }
}

function ToggleExcludeCrystal(ThisCrystalID) {
    
    crystalID = parseInt(ThisCrystalID);
    
    if(ExcludedCrystalsList[crystalID]==0){
	document.getElementById('CellCrystal'+(crystalID)).style.backgroundColor = "red";
	ExcludedCrystalsList[crystalID]=1;
    }else{
	document.getElementById('CellCrystal'+(crystalID)).style.backgroundColor = "white"; 
	ExcludedCrystalsList[crystalID]=0;
    }
    
    // Redraw whichever table is displayed
    PlotTables()
    
}


function CalculateAngularBins(){
    // Zero the angular bins JSON object
    AngularBinsAngle = []; AngularBinsWeight = [];
    // Fill the angular bins JSON object
    for(i=0; i<NumCrystals; i++){
	if(ExcludedCrystalsList[i+1]==1){ continue; }
	for(j=0; j<NumCrystals; j++){
	    if(ExcludedCrystalsList[j+1]==1){ continue; }
	    
	    // Calculate the angular difference for this pair of crystals.
	    // The function returns 3 decimal place precision
	    thisAngle = CalculateAngularDifference(i,j);
	    if(isNaN(thisAngle)){
		if(i==j){ thisAngle = 0.0; }
		else{ thisAngle = 180.0; }
	    }
	    
	    // found is zero until the angular bin is found, if it is still zero then a new entry is created.
	    var found=0;
	    
	    // If no angular bins have yet been created, crate the first one.
	    if(AngularBinsAngle.length<1){
		AngularBinsAngle[0] = thisAngle;
		AngularBinsWeight[0] = 1;
		continue;
	    }
	    
	    // Search through the angular bins already identified to see if there is a match for the current one.
	    for(k=0; k<AngularBinsAngle.length; k++){
		if((thisAngle >= parseFloat(AngularBinsAngle[k] - 0.001)) && (thisAngle <= parseFloat(AngularBinsAngle[k] + 0.001))){
		    AngularBinsWeight[k]++;
		    found=1;
		    break;
		}
	    }
	    
	    // If found is still zero at this point then an angular bin matching the
	    // current value was not found and we need to create a new one.
	    if(!found){
		AngularBinsAngle[AngularBinsAngle.length] = thisAngle;
		AngularBinsWeight[AngularBinsWeight.length] = 1;
	    }
	}
    }
    
    // Manually sort the angular bin and weight arrays to maintain the same order.
    // One by one move boundary of unsorted subarray
    for(i = 0; i < AngularBinsAngle.length - 1; i++) {
	
        // Find the minimum element in unsorted array
        var min_idx = i;
        for(j = i + 1; j < AngularBinsAngle.length; j++){
	    if(parseFloat(AngularBinsAngle[j]) < parseFloat(AngularBinsAngle[min_idx])){
                min_idx = j;
	    }
	}
        // Swap the found minimum element with the first element for both angles and weights arrays
	var temp = AngularBinsAngle[min_idx];
	AngularBinsAngle[min_idx] = AngularBinsAngle[i];
	AngularBinsAngle[i] = parseFloat(temp);
        temp = AngularBinsWeight[min_idx];
	AngularBinsWeight[min_idx] = AngularBinsWeight[i];
	AngularBinsWeight[i] = parseFloat(temp);
    }
}

function CalculateAngularDifference(crystal1,crystal2) {
    // Function to calculate the angular difference between two crystals
    // ACOS(SIN($F$3)*SIN(F3)*COS($G$3-G3)+COS($F$3)*COS(F3)) /(PI()/180)
    return parseFloat(Math.acos(Math.sin(CrystalTheta[crystal1]*DegToRad) * Math.sin(CrystalTheta[crystal2]*DegToRad) * Math.cos( (CrystalPhi[crystal1]*DegToRad) - (CrystalPhi[crystal2]*DegToRad) ) + (Math.cos(CrystalTheta[crystal1]*DegToRad) * Math.cos(CrystalTheta[crystal2]*DegToRad)))/ RadToDeg).toFixed(3);
}


