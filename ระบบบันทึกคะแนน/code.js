function doGet(e) {  
    return HtmlService.createTemplateFromFile("index").evaluate()
    .setTitle("ระบบบันทึกคะแนน SCI-AWARDS")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }
  
  var ss = SpreadsheetApp.getActive().getSheetByName('DATA');
  var data = ss.getDataRange().getValues();
  var id = data.map(r => r[0]);
  
  
  //**ค้นหาข้อมูล */
  function findRecord(record){
    var index = id.indexOf(record); 
    var output = {};
    if(index > -1){
      data = ss.getRange(index + 1, 1, 1, ss.getLastColumn()).getValues()[0];
      output.result = true;
      output.data = data;
    } else {
      output.result = false;
    }
    return output;
  }
  
  //**แก้ไขข้อมูล */
  function updateRecord(obj) {
    var index = id.indexOf(obj.contestantID); // Using contestantID for index lookup
    if (index > -1) {
      // Update columns 5-9
      var range = ss.getRange(index + 1, 5, 1, 6); // Selects from the 5th column (point2) to the 9th column (point5)
      range.setValues([[obj.grade1, obj.grade2, obj.grade3, obj.grade4, obj.grade5, obj.status]]); // Remove single quotes
    }
    
    // Fetch the updated record from the sheet
    var data = ss.getRange(index + 1, 1, 1, ss.getLastColumn()).getValues()[0];
    return data;
  }
  
  