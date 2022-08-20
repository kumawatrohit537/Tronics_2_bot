/*CMD
  command: /rohitbchset
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
Bot.setProperty("BCH_ADDRESS", message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.sendMessage("_Now send me your _*BITCOINCASH (BCH) Address from any crypto exchange or trust wallet .\n Note :- All user deposited bch transferred to this address*",{on_result:"/settatt"})
Bot.runCommand("/rohitsetdgb r")
}else{
Bot.runCommand("/start")
}
