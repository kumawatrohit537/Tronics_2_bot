/*CMD
  command: /rohitsetdoge
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
Bot.sendMessage("!*Invaild address. Try again*")
return
}
Bot.setProperty("DOGE_ADDRESS", message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.sendMessage("_Now send me your _*DOGE address from crypto exchange or from trust wallet*",{on_result:"/settatt"})
Bot.runCommand("/setkeyforpublicincoinpauymentslib r")
}else{
Bot.runCommand("/start")
}
