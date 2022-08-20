/*CMD
  command: /ty
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: enter email

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "Bot Send Successfully : " +
    message +
    "")

