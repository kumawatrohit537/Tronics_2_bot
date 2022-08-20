/*CMD
  command: Goo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var x = Date().toLocaleString("en-US", {
  timeZone: "America/NewYork"
})
Bot.sendMessage(x)
