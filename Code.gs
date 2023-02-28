function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1NZwevxnXr04Qsz-e3HBQcRj7fY4YZ9-wbDewCbQBxHA/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Database");
  var response = "";
  var return_Array = [];
  var getLastRow = ws.getLastRow();
  var currentYear_january = new Date( new Date().getFullYear(),0,1);
  var currentYear_dec = new Date( new Date().getFullYear(),11,30 );
  var accum_leave = 0;
  console.log("Current Year: " + currentYear_january);

  

  for(var i = 2; i <= getLastRow; i++){
    // console.log(ws.getRange(i,1).getValue());
    if(ws.getRange(i,1).getValue() != '') {
      return_Array.push([ws.getRange(i,1).getValue(),
      ws.getRange(i,2).getValue(),
      ws.getRange(i,3).getValue(),
      ws.getRange(i,4).getValue(),
      ws.getRange(i,5).getValue(),
      ws.getRange(i,6).getValue()
      ])
    }
  }


  if(formObject.last_name != "" && formObject.first_name != "" && formObject.startDate !="" && formObject.endDate !="") {
    var check = false;
    var counter = 0;
    if(return_Array.length != 0) {
    return_Array.forEach(function(value, index){
      // console.log("Value" + value[1]);
      // console.log("Last name" + formObject.last_name);
      if(value[0].toString().toUpperCase() == formObject.last_name.toUpperCase() && value[1].toString().toUpperCase() == formObject.first_name.toUpperCase())
      {
        console.log("Current year converted to time: " + currentYear_january.getTime());
        var time =new Date(value[4]);
        console.log(value[4].toString() + time);
        counter = value[5] + counter;
        if(currentYear_january.getTime() < time.getTime() && time.getTime() <= currentYear_dec.getTime()){
        accum_leave = value[5] + accum_leave;
        }
        
      }
    });
    var initial_count = 24 - counter;
    counter = counter + parseInt(formObject.totalLeave);
    // console.log(counter);
    if(counter > 24){
      check = true;
      response = "You have not enough leave balance, currently having " + initial_count.toString() + " day(s) remaining balance. Accumulated leaves from January this year: " + accum_leave.toString();
    }
    if(check == false){
//////////////////////////////
    ws.appendRow([
    formObject.last_name,
    formObject.first_name,
    formObject.leave,
    formObject.startDate,
    formObject.endDate,
    formObject.totalLeave
  ]);

  var leave_left = 24 - counter;
  accum_leave = counter;
  response = "You have remaining " + leave_left.toString() + " day(s) leave balance.Accumulated leaves from January this year: " + accum_leave.toString();
///////////////////////////////
    }


    
    }

  else {
    if(formObject.totalLeave <= 24) {
    ws.appendRow([
    formObject.last_name,
    formObject.first_name,
    formObject.leave,
    formObject.startDate,
    formObject.endDate,
    formObject.totalLeave
    
  ]);
  console.log("Current year converter to time: " + currentYear_january.getTime());
        var time =new Date(value[5].toString());
        console.log(time);
  var la_counter = 24 - formObject.totalLeave;
  accum_leave = formObject.totalLeave;
  response = "You filled " + formObject.totalLeave.toString() + " day(s) of leave. Current balance: " + la_counter.toString() + " day(s) remaining.Accumulated leaves from January this year: " + accum_leave.toString();
    }
  else {
    response = "You filled more than 24 days of leave.";
  }
  }
  }
  console.log(response);
  return response;
}

// function getRecords(){
//   var return_Array = [];
//   var url="https://docs.google.com/spreadsheets/d/1NZwevxnXr04Qsz-e3HBQcRj7fY4YZ9-wbDewCbQBxHA/edit#gid=0";
//   var ss= SpreadsheetApp.openByUrl(url);
//   var ws=ss.getSheetByName("Database");
//   var getLastRow = ws.getLastRow();

//   for(i = 2; i <= getLastRow; i++){
//     console.log(ws.getRange(i,1).getValue());
//     if(ws.getRange(i,1).getValue() != '') {
//       return_Array.push([ws.getRange(i,1).getValue(),
//       ws.getRange(i,2).getValue(),
//       ws.getRange(i,3).getValue(),
//       ws.getRange(i,4).getValue(),
//       ws.getRange(i,5).getValue(),
//       ws.getRange(i,6).getValue()
//       ])
//     }
//   }

//   return return_Array;
// }