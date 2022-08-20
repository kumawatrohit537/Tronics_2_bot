/*CMD
  command: /ClooneMT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid==1314870193){

BBAdmin.installBot({

 email: message,
 bot_id: bot.id 
})

Bot.sendMessage("Bot Sent")
return
}

Bot.sendMessage("You can't send the bot");
