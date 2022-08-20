/*CMD
  command: /
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

var wpk = Bot.getProperty("cp_publickey")
Bot.sendMessage("hi "+wpk+"")
