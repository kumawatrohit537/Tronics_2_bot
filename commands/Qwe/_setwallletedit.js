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
  aliases: ð¾ wallet, ðset wallet, ð³ set doge wallet, ð¥ change walle, ð¾ wallet, ðset wallet, ð³ set doge wallet, ð¥ change wallet, ð³ set ltc wallett, ð³ set ltc wallet, ð¼ wallet, ð¼ wallet ð¼, ð¸ wallet ð¸, ð¨ wallet
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}

var b=[
[{title:"ð¼ Set/ Change Wallet",command:"/sewa"}]]
let wall=Bot.getProperty("wallet"+user.telegramid)

if(!wall){
User.setProperty("walletuserid","not set","string")}else{
User.setProperty("walletuserid",wall,"string")}
var wagas=User.getProperty("walletuserid")
let cur=Bot.getProperty("cur")
Bot.sendInlineKeyboard(b,"ð¡* Your currently set "+cur+" wallet is: *"+" `"+wagas+"`\n\nð¹ *It will be used for all future withdrawals.*",{on_result:"/setxms"})
