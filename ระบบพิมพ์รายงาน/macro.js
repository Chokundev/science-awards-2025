var url = "https://docs.google.com/spreadsheets/d/1nS-8uX5-PTF2y7GZ5h5WWA4xXPkhTdK20mltOC5lmPU/edit?gid=0#gid=0"

var namasheet = "Data";
var barisawal = 2;
var kolomawal = 1;
var headerbaris = 1;

// kolom ARRAY
var kolomID = 0;

function CariData(kriteria){
var sheet = SpreadsheetApp.openByUrl(url);
var datasheet = sheet.getSheetByName(namasheet); 
var data = datasheet.getRange(barisawal, kolomawal, datasheet.getLastRow()-headerbaris,40).getValues(); 
for(var baris = 0; baris<data.length; baris++){         
     if(data[baris][kolomID].toString().toLowerCase() == kriteria.toString().toLowerCase() || data[baris][1].toString().toLowerCase() == kriteria.toString().toLowerCase()){           
       
       var Muat={};        
        Muat.Jnc1 =data[baris][kolomID]
        Muat.Jnc2 = data[baris][1];
        Muat.Jnc3 = data[baris][2];      
        Muat.Jnc4 = data[baris][3];         
        Muat.Jnc5 = data[baris][4]; 
        Muat.Jnc6 = data[baris][5];
        Muat.Jnc7 = data[baris][6]; 
        Muat.Jnc8 = data[baris][7]; 
        Muat.Jnc9 = data[baris][8];
        Muat.Jnc10 = data[baris][9];      
        Muat.Jnc11 = data[baris][10];         
        Muat.Jnc12 = data[baris][11]; 
        Muat.Jnc13 = data[baris][12];
        Muat.Jnc14 = data[baris][13]; 
        Muat.Jnc15 = data[baris][14];
        Muat.Jnc16 = data[baris][15];      
        Muat.Jnc17 = data[baris][16];      

        Muat.Jnc18 = data[baris][17]; 
        Muat.Jnc19 = data[baris][18];
        Muat.Jnc20 = data[baris][19]; 
        Muat.Jnc21 = data[baris][20];
        Muat.Jnc22 = data[baris][21];
        Muat.Jnc23 = data[baris][22];
        Muat.Jnc24 = data[baris][23];
        Muat.Jnc25 = data[baris][24];
        Muat.Jnc26 = data[baris][25];
        Muat.Jnc27 = data[baris][26];
        Muat.Jnc28 = data[baris][27];


        data.length = 0
        Logger.log("Muat: " + JSON.stringify(Muat));
         return ([Muat.Jnc1,Muat.Jnc2, Muat.Jnc3, Muat.Jnc4, Muat.Jnc5, Muat.Jnc6, Muat.Jnc7, Muat.Jnc8, Muat.Jnc9,Muat.Jnc10, Muat.Jnc11, Muat.Jnc12, Muat.Jnc13, Muat.Jnc14, Muat.Jnc15, Muat.Jnc16, Muat.Jnc17])                    
}
}
data.length = 0
return "Data Not Found!";
}
function HapusData(kriteria){

var sheet = SpreadsheetApp.openByUrl(url);
var datasheet = sheet.getSheetByName(namasheet); 
var data = datasheet.getRange(barisawal, kolomawal, datasheet.getLastRow()-headerbaris,40).getValues();  
for(var baris = 0; baris<data.length; baris++){        
     if(data[baris][kolomID].toString().toLowerCase() == kriteria.toString().toLowerCase()){           
      var baris = baris + barisawal;
          datasheet.deleteRow(baris);           
          data.length = 0
         return "Data telah dihapus!"         
     }
}

data.length = 0
return "Data Not Found!";
}

function SimpanData(Data){

var sheet = SpreadsheetApp.openByUrl(url);
var datasheet = sheet.getSheetByName(namasheet); 

var novoid = Math.max.apply(null, datasheet.getRange("A2:A").getValues()); 
var novoid = novoid + 1

var baris = datasheet.getLastRow() + 1;
datasheet.getRange(baris, 1).setValue(novoid);
datasheet.getRange(baris, 2).setValue([Data.Jnc2]);
datasheet.getRange(baris, 3).setValue([Data.Jnc3]);
datasheet.getRange(baris, 4).setValue([Data.Jnc4]);
datasheet.getRange(baris, 5).setValue([Data.Jnc5]);
datasheet.getRange(baris, 6).setValue([Data.Jnc6]);
datasheet.getRange(baris, 7).setValue([Data.Jnc7]);
datasheet.getRange(baris, 8).setValue([Data.Jnc8]);
datasheet.getRange(baris, 9).setValue([Data.Jnc9]);
datasheet.getRange(baris, 10).setValue([Data.Jnc10]);
datasheet.getRange(baris, 11).setValue([Data.Jnc11]);
datasheet.getRange(baris, 12).setValue([Data.Jnc12]);
datasheet.getRange(baris, 13).setValue([Data.Jnc13]);
datasheet.getRange(baris, 14).setValue([Data.Jnc14]);
datasheet.getRange(baris, 15).setValue([Data.Jnc15]);
datasheet.getRange(baris, 16).setValue([Data.Jnc16]);
datasheet.getRange(baris, 17).setValue([Data.Jnc17]);
datasheet.getRange(baris, 18).setValue([Data.Jnc18]);
datasheet.getRange(baris, 19).setValue([Data.Jnc19]);
datasheet.getRange(baris, 20).setValue([Data.Jnc20]);
datasheet.getRange(baris, 21).setValue([Data.Jnc21]);
datasheet.getRange(baris, 22).setValue([Data.Jnc22]);
datasheet.getRange(baris, 23).setValue([Data.Jnc23]);
datasheet.getRange(baris, 24).setValue([Data.Jnc24]);
datasheet.getRange(baris, 25).setValue([Data.Jnc25]);
datasheet.getRange(baris, 26).setValue([Data.Jnc26]);
datasheet.getRange(baris, 27).setValue([Data.Jnc27]);
datasheet.getRange(baris, 28).setValue([Data.Jnc28]);


return "Simpan data berhasil!";

}

function UbahData(Data){

var sheet = SpreadsheetApp.openByUrl(url);
var datasheet = sheet.getSheetByName(namasheet); 
var kriteria = Data.Jnc1

var data = datasheet.getRange(barisawal, kolomawal, datasheet.getLastRow()-headerbaris,40).getValues(); 
for(var baris = 0; baris<data.length; baris++){
          
      if(data[baris][kolomID].toString().toLowerCase() == kriteria.toString().toLowerCase()){   
     
      var baris = baris + barisawal;

      datasheet.getRange(baris, 2).setValue([Data.Jnc2]);
      datasheet.getRange(baris, 3).setValue([Data.Jnc3]);
      datasheet.getRange(baris, 4).setValue([Data.Jnc4]);
      datasheet.getRange(baris, 5).setValue([Data.Jnc5]);
      datasheet.getRange(baris, 6).setValue([Data.Jnc6]);
      datasheet.getRange(baris, 7).setValue([Data.Jnc7]);
      datasheet.getRange(baris, 8).setValue([Data.Jnc8]);
      datasheet.getRange(baris, 9).setValue([Data.Jnc9]);
      datasheet.getRange(baris, 10).setValue([Data.Jnc10]);
      datasheet.getRange(baris, 11).setValue([Data.Jnc11]);
      datasheet.getRange(baris, 12).setValue([Data.Jnc12]);
      datasheet.getRange(baris, 13).setValue([Data.Jnc13]);
      datasheet.getRange(baris, 14).setValue([Data.Jnc14]);
      datasheet.getRange(baris, 15).setValue([Data.Jnc15]);
      datasheet.getRange(baris, 16).setValue([Data.Jnc16]);
      datasheet.getRange(baris, 17).setValue([Data.Jnc17]);
      datasheet.getRange(baris, 18).setValue([Data.Jnc18]);
      datasheet.getRange(baris, 19).setValue([Data.Jnc19]);
      datasheet.getRange(baris, 20).setValue([Data.Jnc20]);
      datasheet.getRange(baris, 21).setValue([Data.Jnc21]);
      datasheet.getRange(baris, 22).setValue([Data.Jnc22]);
      datasheet.getRange(baris, 23).setValue([Data.Jnc23]);
      datasheet.getRange(baris, 24).setValue([Data.Jnc24]);
      datasheet.getRange(baris, 25).setValue([Data.Jnc25]);
      datasheet.getRange(baris, 26).setValue([Data.Jnc26]);
      datasheet.getRange(baris, 27).setValue([Data.Jnc27]);
      datasheet.getRange(baris, 28).setValue([Data.Jnc28]);


          data.length = 0
          return "Edit data berhasil!";
    }
}

data.length = 0
return "ID tidak ditemukan!";

}