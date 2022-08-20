/*CMD
  command: /admincut01
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
if(chat.chatid==ad){

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
return
}
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
let amount=message
let am=amount*1
let pro = am*1.2
let trpp = am*0.2
let te=Bot.getProperty("uinf1")
let res = Libs.ResourcesLib.anotherUserRes("investment", te);
let rep = Libs.ResourcesLib.anotherUserRes("balance", te);
let rrp = Libs.ResourcesLib.anotherUserRes("totalprofit", te);
res.add(-am)
rep.add(pro)
rrp.add(trpp)
Bot.sendMessageToChatWithId(te,"🎊 *Your investment of "+am+" TRX Just ended*")
Bot.editMessage(message+" investment has been ended to the user "+" ["+te+"]"+"("+"tg://user?id="+te+")", id)
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}
