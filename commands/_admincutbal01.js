/*CMD
  command: /admincutbal01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let id =User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
let t=message
if(chat.chatid==ad){
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Bot.setProperty("uinf1", t,"string")
Bot.sendMessage("Now send me amount of investment you want to end.",{on_result:"/settatt"})
Bot.runCommand("/admincuto01")
}
