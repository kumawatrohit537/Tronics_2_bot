/*CMD
  command: /ooad
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


var j = JSON.parse(content)
var json = j.balance
let cur=Bot.getProperty("cur")
let rate = json/1000000
let id=User.getProperty("adminmsgid")
let txt ="💵 *Account Balance:* \n\nYour  Balance is :\n*"+rate+"* "+cur
if(params){
Bot.editMessage(txt,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.sendMessage(txt)
}
