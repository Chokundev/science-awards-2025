function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle("ระบบพิมพ์รายงานผลการประกวด SCIENCE-AWARDS 2025")
    .addMetaTag('viewport', 'width=device-width, initial-scale-1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }
  
  function setAutomatically(){
  
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('setting');
  
    let logo = sheet.getRange('B3:F3').getValue();
    let title = sheet.getRange('B5:F5').getValue();
    let name = sheet.getRange('B7:F7').getValue();
    let footer = sheet.getRange('B9:F9').getValue();
    let copyright = sheet.getRange('B11:F11').getValue();
    
  
    
  
    return[logo,title,name,footer,copyright];
  }
  
  
  
  
  
  