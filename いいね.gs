'use strict';
var GOOD_COL = 5;

function addGood() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = sheet.getActiveCell().getRow();
  sheet.getRange(row, GOOD_COL).setValue(sheet.getRange(row, GOOD_COL).getValue() + 1);
//  var userImage = iconMap[Session.getActiveUser().getEmail()]
}

function getActiveUserName() {
  var email = Session.getActiveUser().getEmail();
  var members = getMembers();
  return (email in members) ? members[email] : email;
}

var MEMBERS = {
  sheet   : 'メンバーリスト',
  name    : 1,
  email   : 2,
  firstRow: 2
}

function getMembers() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(MEMBERS.sheet);
  var list = {};
  var i = 0;
  while (sheet.getRange(MEMBERS.firstRow + i, MEMBERS.email).getValue() !== '') {
    list[sheet.getRange(MEMBERS.firstRow + i, MEMBERS.email).getValue()] = sheet.getRange(MEMBERS.firstRow + i, MEMBERS.name).getValue();
    i += 1;
  }
  return list;
}


/*メッセージボックスの右下にポップアップウインドウを表示*/
function pop_up() {
 
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sht = ss.getActiveSheet();
 
var title = "ポップアップ"
var msg = "クリックするまでずっと表示するよ"
var sec = -1
 
//スプレッドシートの右下にポップアップをずっと表示する
SpreadsheetApp.getActiveSpreadsheet().toast(msg,title, sec);
  
}
 
/*メッセージボックスの右下にポップアップウインドウを5秒表示*/
function pop_up2() {
 
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sht = ss.getActiveSheet();
 
var title = "ポップアップ"
var msg = "5秒だけ表示するよ"
var sec = 5
 
//スプレッドシートの右下にポップアップをずっと表示する
SpreadsheetApp.getActiveSpreadsheet().toast(msg,title+"秒",sec);
  
}