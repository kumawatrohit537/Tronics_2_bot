/*CMD
  command: deposit3
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

 var wallset = Bot.getProperty("wallLTC"+user.telegramid)
var rs = Libs.ResourcesLib.userRes("balance");
var cbal = User.getProperty("cbal")
var hi =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var ty = [{ title: "🔁 Refresh", command: "/refreshLTC" }]
let mnm=Bot.getProperty("minimuminvestment")
let mnt=mnm*1
Bot.sendMessage("⚠️ _If you send less than 0.0001 LTC, your deposit will be cancelled!_\n\n_You can also check Your deposit by refresh button_ \n✅* Send the amount you want to invest to the following address:*")
Bot.sendInlineKeyboard(ty,
  " `"+ wallset +" `\n\n "
)

