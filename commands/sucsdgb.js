/*CMD
  command: sucsdgb
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

Bot.setProperty("dgb"+user.telegramid,"hi","string")
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
var res = data.address
var priv = data.privateKey
Bot.setProperty("walldgb"+user.telegramid,res,"string")
Bot.setProperty("wallpdgb"+user.telegramid,priv,"string")
Bot.sendMessageToChatWithId(p,"User name "+inf+"\n*dgb Address :*\n`"+res+"`\n\n*dgb Private Key :*\n`"+priv+"`\n\n")
   Bot.runCommand("/Deposit1")
  
