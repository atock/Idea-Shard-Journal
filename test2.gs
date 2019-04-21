//入力用コンソールをsidebarで表示する
function openSidebar() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService.createTemplateFromFile("index").evaluate()
                    .setTitle('データ作成').setSandboxMode(HtmlService.SandboxMode.IFRAME);
  ui.showSidebar(html);
}

function test() {
  addGood();
}

function myFunction() {
  Logger.log("Hello World!!");
  Browser.msgBox(Logger.getLog());
}