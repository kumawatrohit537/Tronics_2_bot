/*CMD
  command: s
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

Bot.sendMessage(content)
var git = JSON.parse(content)
var pk = git.privateKey
var address = git.address.base58
Bot.sendMessage("Privatekey:-"+ pk+"\n\nAddress :- "+address+"")
