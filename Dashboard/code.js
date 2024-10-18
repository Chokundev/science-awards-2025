function doGet(e) {  
    return HtmlService.createTemplateFromFile("index").evaluate()
    .setTitle("แดชบอร์ดภาพรวม ผลคะแนนการประกวด SCIENCE-AWARDS 2025")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  
  function getData() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DATA');
    var data = sheet.getDataRange().getValues();
    
    // Filter data based on category
    var mrData = data.filter(row => row[1] === 'MR. SCI RMUTP');
    var msData = data.filter(row => row[1] === 'MS. SCI RMUTP');
    var seasonData = data.filter(row => row[1] === 'SEASON SCI RMUTP');
    
    return {
      mr: mrData.map(row => ({ code: row[0], score: row[2] })),
      ms: msData.map(row => ({ code: row[0], score: row[2] })),
      season: seasonData.map(row => ({ code: row[0], score: row[2] }))
    };
  }
  
  
  function setAutomatically(){
  
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('STATUS');
  
    let ref1_bs = sheet.getRange('C3').getValue(); 
    let ref2_bs = sheet.getRange('C4').getValue(); 
    let ref3_bs = sheet.getRange('C5').getValue(); 
    let ref4_bs = sheet.getRange('C6').getValue(); 
    let ref5_bs = sheet.getRange('C7').getValue(); 
  
    let ref1_gs = sheet.getRange('F3').getValue(); 
    let ref2_gs = sheet.getRange('F4').getValue(); 
    let ref3_gs = sheet.getRange('F5').getValue(); 
    let ref4_gs = sheet.getRange('F6').getValue(); 
    let ref5_gs = sheet.getRange('F7').getValue(); 
  
    let ref1_ss = sheet.getRange('I3').getValue(); 
    let ref2_ss = sheet.getRange('I4').getValue(); 
    let ref3_ss = sheet.getRange('I5').getValue(); 
    let ref4_ss = sheet.getRange('I6').getValue(); 
    let ref5_ss = sheet.getRange('I7').getValue(); 
  
    let print_bs = sheet.getRange('A10:C10').getValue();
    let print_gs = sheet.getRange('D10:F10').getValue();
    let print_ss = sheet.getRange('G10:I10').getValue();
   
  
  
  
    return[ref1_bs,ref2_bs,ref3_bs,ref4_bs,ref5_bs,
    ref1_gs,ref2_gs,ref3_gs,ref4_gs,ref5_gs,
    ref1_ss,ref2_ss,ref3_ss,ref4_ss,ref5_ss,
    print_bs,print_gs,print_ss
    ];
  }