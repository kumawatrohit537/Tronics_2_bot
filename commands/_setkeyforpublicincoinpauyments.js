/*CMD
  command: /setkeyforpublicincoinpauyments
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

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let k=message
if(!message){
Bot.sendMessage("!*Invaild Private key. Try again*")
return
}
Bot.setProperty("cp_publickey01", message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.sendMessage("_Now send me your _*Tron withdraw account address from account withdraw held whose account tron address*",{on_result:"/settatt"})
Bot.runCommand("/rohitltcset r")
}else{
Bot.runCommand("/start")
}
