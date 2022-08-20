/*CMD
  command: /setwallletedit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Qwe

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💾 wallet, 🔐set wallet, 💳 set doge wallet, 🖥 change walle, 💾 wallet, 🔐set wallet, 💳 set doge wallet, 🖥 change wallet, 💳 set ltc wallett, 💳 set ltc wallet, 💼 wallet, 💼 wallet 💼, 🛸 wallet 🛸, 📨 wallet
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}

var b=[
[{title:"💼 Set/ Change Wallet",command:"/sewa"}]]
let wall=Bot.getProperty("wallet"+user.telegramid)

if(!wall){
User.setProperty("walletuserid","not set","string")}else{
User.setProperty("walletuserid",wall,"string")}
var wagas=User.getProperty("walletuserid")
let cur=Bot.getProperty("cur")
Bot.sendInlineKeyboard(b,"💡* Your currently set "+cur+" wallet is: *"+" `"+wagas+"`\n\n💹 *It will be used for all future withdrawals.*",{on_result:"/setxms"})
