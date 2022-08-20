/*CMD
  command: /clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: enter your email

  <<KEYBOARD

  KEYBOARD
  aliases: /send, /get
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "Bot Send Successfully : " +
    message +"")

