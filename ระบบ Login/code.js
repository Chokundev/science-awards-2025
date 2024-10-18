function doGet(e) {  
    return HtmlService.createTemplateFromFile("index").evaluate()
    .setTitle("ระบบบริหารจัดการผลการประกวดดาว-เดือน คณะวิทยาศาสตร์และเทคโนโลยี ( SCIENCE-AWARDS 2025 )")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }
  
  
  /* PROCESS FORM */
  function processForm(formObject){ 
    var concat = formObject.searchtext.toString().toLowerCase() + formObject.searchtext2;
    var result = "";
    if(concat){ // Execute if form passes search text
        result = search(concat);
        logLogin(formObject.searchtext, result.length > 0); // บันทึกการเข้าสู่ระบบ
    }
    return result;
  }
  
  // LOG LOGIN ATTEMPT
  function logLogin(username, success) {
    var sheet = SpreadsheetApp.getActive().getSheetByName('LoginLogs');
    var timestamp = new Date();
    sheet.appendRow([timestamp, username, success ? 'Success' : 'Failure']);
  
    var output = {}
      var data = sheet.getDataRange().getValues()
      data = sheet.getRange(sheet.getLastRow(),1,1,sheet.getLastColumn()).getDisplayValues()[0]
      output.data = data
  
    
      return output; 
  }
  
  // SEARCH FOR MATCHED CONTENTS
  function search(searchtext) {
    var range = SpreadsheetApp.getActive().getSheetByName('Data').getDataRange();
    var data = range.getValues();
    var ar = [];
    
    data.forEach(function(f) {
      if (~[f[0].toString().toLowerCase() + f[1]].indexOf(searchtext)) {
        ar.push([ f[2], f[3] ]);
      }
    });
                                             
    return ar;
  }
  