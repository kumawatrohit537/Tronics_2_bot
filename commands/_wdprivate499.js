/*CMD
  command: /wdprivate499
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: π³ withdraw, β withdraw, π΅ withdraw, πΈ withdraw, π€ withdraw, withdraw π», π€withdraw
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
//cant access
return
}
let go1=Bot.getProperty("wddismessage")
let go2=Bot.getProperty("wdendisstats01")
if(go2=="en"){
Bot.sendMessage(go1)
return
}
let bal = Libs.ResourcesLib.userRes("balance")

let wall=Bot.getProperty("wallet"+user.telegramid)
let cur=Bot.getProperty("cur")
let zero=Bot.getProperty("zero")
let ds=Bot.getProperty("wdendisstats01")
let min=Bot.getProperty("adminminwd01")
var mini=min*1
if(!wall){
var b=[
[{title:"πΌ Set/ Change Wallet",command:"/sewa"}]]
let walle=Bot.getProperty("wallet"+user.telegramid)
let cur=Bot.getProperty("cur")
if(!walle){
User.setProperty("walletuserid","not set","string")}else{
User.setProperty("walletuserid",walle,"string")}

var wagas=User.getProperty("walletuserid")
var textal="π‘* Your "+cur+" wallet is: *"+"`"+wagas+"`"
Bot.sendInlineKeyboard(b, textal,{on_result:"/setxms"})
}else{
if(bal.value()>=mini){
var p="π€ *How many "+cur+" you want to withdraw?*\n\n    *Minimum:* "+mini+" "+cur+"\n    *Maximum:* "+bal.value()+" "+cur+"\n    _Maximum amount corresponds to your balance_\n\n    β‘* Send now the amount of  you want to withdraw*"
Bot.sendKeyboard("π Back", p)
Bot.runCommand("/wdprivate500")
}else{
Bot.sendMessage("β *You have to own at least "+mini+" "+cur+" in your wallet to withdraw!*")
}}
