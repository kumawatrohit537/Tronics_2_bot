/*CMD
  command: /cutbal0101
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

let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(chat.chatid==ad){
Bot.editMessage("Send Me user telegram id that you want to add balance",id)
Bot.runCommand("/admincutbal01")} else{
Bot.runCommand("/start")}
