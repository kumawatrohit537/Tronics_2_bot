/*CMD
  command: /adminlogin
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

let ms= User.getProperty("adminmsgid")
let g = Bot.getProperty("admin01")
if(chat.chatid==g){
var b =[
[{title:" β Main Settings",command:"/adminmainsettings01"},{ title:"π€ User Settings",command:"/adminusersettings01"}],
[{title:"π‘ Mass Message",command:"/adminmassmessage01"},{title:"π User History",command:"/adminuserhistory01"}],
[{title:"π§ Withdrawal Settings",command:"/adminwdsett01"},{title:"πΆText Settings",command:"/setuptexts01"}],
[{title:"π Keyboard Button",command:"/onsetkeyboardbutton91"},{title:" π Log Out",command:"/adminlogoutpan01"}]]

var b5 =[
[{text:" β Main Settings",callback_data:"/adminmainsettings01"},{ text:"π€ User Settings",callback_data:"/adminusersettings01"}],
[{text:"π‘ Mass Message",callback_data:"/adminmassmessage01"},{text:"π User History",callback_data:"/adminuserhistory01"}],
[{text:"π§ Withdrawal Settings",callback_data:"/adminwdsett01"},{text:"πΆText Settings",callback_data:"/setuptexts01"}],
[{text:"π Keyboard Button",callback_data:"/onsetkeyboardbutton91"},{text:" π Log Out",callback_data:"/adminlogoutpan01"}]]

if(params=="r"){
let yu='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+' '+"<b>Select And Option that  you want to manage your bot</b>"
Api.editMessageText({chat_id:chat.chatid,text:yu,message_id:ms,parse_mode:"html",reply_markup: {inline_keyboard:b5 }
})
}else{
Api.deleteMessage({chat_id: user.telegramid,message_id:ms})
Bot.sendInlineKeyboard(b,"Select And Option that  you want to manage your bot",{on_result:"/settatt"})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
}else{
Bot.runCommand("/start")}
