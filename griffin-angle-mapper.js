
      // Global Variables
      var NumCrystals = 64;
      var CrystalDistance = 0;
      var CloverLocation = ['Downstream Lampshade', 'Corona', 'Corona', 'Upstream Lampshade']; 
      var CrystalTheta = []; 
      var CrystalPhi = [];
      var RadToDeg = DegToRad = (Math.PI / 180.0);
      var NPairsAngularBins = [];
      var ExcludedCrystalsList = [];
      
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

      // Set up the drop-down select
sel = document.getElementById("crystalSelector"); 
for(i=0; i<NumCrystals; i++){
       var opt = document.createElement("option");
       opt.value = i;
       opt.text = 'Crystal '+(i+1)+', Clover '+(Math.floor(i/4)+1)+', '+CloverLocation[Math.floor(i/16)]; 
       sel.appendChild(opt);
    }

      // Zero the NPairsAngularBins array
      for(i=0; i<=180; i++){ NPairsAngularBins[i]=0; }
      
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
      case "angles" : PlotAnglesTable(); break; 
      case "combinations" : PlotCombinationsTable(); break;
      }
      
      }
      
function SetupAngles() {

      var CrystalDistance = document.getElementById("distanceSelector").value;
      
      if(CrystalDistance == "145"){
      
      CrystalTheta = [
      // Downstream Lampshade
 37.9,  53.2,  53.2,  37.9, 
 37.9,  53.2,  53.2,  37.9, 
 37.9,  53.2,  53.2,  37.9, 
 37.9,  53.2,  53.2,  37.9, 
      //Corona
 82.3,  97.7,  97.7,  82.3,
 82.3,  97.7,  97.7,  82.3,
 82.3,  97.7,  97.7,  82.3,
 82.3,  97.7,  97.7,  82.3,
 82.3,  97.7,  97.7,  82.3,
 82.3,  97.7,  97.7,  82.3,
 82.3,  97.7,  97.7,  82.3,
 82.3,  97.7,  97.7,  82.3,
// Upstream Lampshade
126.8, 142.1, 142.1, 126.8, 
126.8, 142.1, 142.1, 126.8, 
126.8, 142.1, 142.1, 126.8, 
126.8, 142.1, 142.1, 126.8
];
      CrystalPhi = [
      // Downstream Lampshade
 80.1,  77.2,  57.8,  54.9, 
170.1, 167.2, 147.8, 144.9, 
260.1, 257.2, 237.8, 234.9, 
350.1, 347.2, 327.8, 324.9, 
      //Corona
 30.3,  30.3,  14.7,  14.7,
 75.3,  75.3,  59.7,  59.7,
120.3, 120.3, 104.7, 104.7,
165.3, 165.3, 149.7, 149.7,
210.3, 210.3, 194.7, 194.7,
255.3, 255.3, 239.7, 239.7,
300.3, 300.3, 284.7, 284.7,
345.3, 345.3, 329.7, 329.7,
// Upstream Lampshade
 77.2,  80.1,  54.9,  57.8, 
167.2, 170.1, 144.9, 147.8, 
257.2, 260.1, 234.9, 237.8, 
347.2, 350.1, 324.9, 327.8
];
      }
      else{
      // 110mm distance
      CrystalTheta = [
      // Downstream Lampshade 
 36.5,  55.1,  55.1,  36.5, 
 36.5,  55.1,  55.1,  36.5, 
 36.5,  55.1,  55.1,  36.5, 
 36.5,  55.1,  55.1,  36.5,
      //Corona
 80.6,  99.4,  99.4,  80.6,
 80.6,  99.4,  99.4,  80.6,
 80.6,  99.4,  99.4,  80.6,
 80.6,  99.4,  99.4,  80.6,
 80.6,  99.4,  99.4,  80.6,
 80.6,  99.4,  99.4,  80.6,
 80.6,  99.4,  99.4,  80.6,
 80.6,  99.4,  99.4,  80.6,
// Upstream Lampshade
124.9, 143.5, 143.5, 124.9, 
124.9, 143.5, 143.5, 124.9, 
124.9, 143.5, 143.5, 124.9, 
124.9, 143.5, 143.5, 124.9
      
];
      CrystalPhi = [
      // Downstream Lampshade
 83.4,  79.0,  56.0,  51.6, 
173.4, 169.0, 146.0, 141.6, 
263.4, 259.0, 236.0, 231.6, 
353.4, 349.0, 326.0, 321.6, 
      //Corona
 32.0,  32.0,  13.0,  13.0,
 77.0,  77.0,  58.0,  58.0,
122.0, 122.0, 103.0, 103.0,
167.0, 167.0, 148.0, 148.0,
212.0, 212.0, 193.0, 193.0,
257.0, 257.0, 238.0, 238.0,
302.0, 302.0, 283.0, 283.0,
347.0, 347.0, 347.0, 347.0,
// Upstream Lampshade
 79.0,  83.4,  51.6,  56.0, 
169.0, 173.4, 141.6, 146.0, 
259.0, 263.4, 231.6, 236.0, 
349.0, 353.4, 321.6, 326.0
];
      }
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
cell1.innerHTML = 'Crystal'; 
cell2.innerHTML = 'Clover'; 
cell3.innerHTML = 'Theta'; 
cell4.innerHTML = 'Phi'; 
cell5.innerHTML = 'Crystal'; 
cell6.innerHTML = 'Clover'; 
cell7.innerHTML = 'Theta'; 
cell8.innerHTML = 'Phi'; 
cell9.innerHTML = 'Angular Difference'; 

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
cell1.innerHTML = (selectedCrystal+1); 
cell2.innerHTML = (Math.floor((selectedCrystal)/4)+1)+', '+CloverLocation[Math.floor((selectedCrystal)/16)];
cell3.innerHTML = CrystalTheta[selectedCrystal].toFixed(1); 
cell4.innerHTML = CrystalPhi[selectedCrystal].toFixed(1); 
cell5.innerHTML = (num+1);
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
cell6.innerHTML = (Math.floor(num/4)+1)+', '+CloverLocation[Math.floor(num/16)];
cell7.innerHTML = CrystalTheta[num].toFixed(1); 
cell8.innerHTML = CrystalPhi[num].toFixed(1);
cell9.innerHTML = CalculateAngularDifference(selectedCrystal,num);

}
}
      function PlotAnglesTable() {

  document.getElementById("TableTitle").innerHTML = 'Angular bins:';

      // Zero the NPairsAngularBins array
      for(i=0; i<=180; i++){ NPairsAngularBins[i]=0; }
// Fill the NPairsAngularBins array
for(i=0; i<NumCrystals; i++){
  if(ExcludedCrystalsList[i]==1){ continue; }
   for(j=0; j<NumCrystals; j++){
      if(ExcludedCrystalsList[j]==1){ continue; }
      thisAngle = CalculateAngularDifference(i,j);
      NPairsAngularBins[Math.floor(thisAngle)]++;
   }
}

// Plot the Angular Bins table
document.getElementById("MultiTable").innerHTML = '';
var row = document.getElementById("MultiTable").insertRow(0); 
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1); 
var cell3 = row.insertCell(2); 
cell1.innerHTML = 'Index'; 
cell2.innerHTML = 'Angular Difference'; 
cell3.innerHTML = 'Number of Pairs';

for(var num=0; num<NPairsAngularBins.length; num++){
if(NPairsAngularBins[num]>0){
  var thisRowNum = document.getElementById("MultiTable").rows.length;
  var row = document.getElementById("MultiTable").insertRow(thisRowNum);
  var cell1 = row.insertCell(0); 
  var cell2 = row.insertCell(1); 
  var cell3 = row.insertCell(2); 
  cell1.innerHTML = thisRowNum; 
  cell2.innerHTML = num; 
  cell3.innerHTML = NPairsAngularBins[num];
 }
}


}//End of PlotTables

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


function CalculateAngularDifference(crystal1,crystal2) {
// Function to calculate the angular difference between two crystals
// ACOS(SIN($F$3)*SIN(F3)*COS($G$3-G3)+COS($F$3)*COS(F3)) /(PI()/180)
 return (Math.acos(Math.sin(CrystalTheta[crystal1]*DegToRad) * Math.sin(CrystalTheta[crystal2]*DegToRad) * Math.cos( (CrystalPhi[crystal1]*DegToRad) - (CrystalPhi[crystal2]*DegToRad) ) + (Math.cos(CrystalTheta[crystal1]*DegToRad) * Math.cos(CrystalTheta[crystal2]*DegToRad)))/ RadToDeg).toFixed(1);
}
 
