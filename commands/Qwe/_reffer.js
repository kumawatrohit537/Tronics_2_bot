/*CMD
  command: /reffer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Qwe

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: π₯ refferral, π₯ invite, π¨βπ¨βπ¦βπ¦ referrals, π invite, π referrals, πinvite, π referral, π invite π, π₯ refferral, π₯ invite, π¨βπ¨βπ¦βπ¦ referrals, π invite, π referrals, π invite, π± refferrals, βοΈ referral
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let ref1= Bot.getProperty("refc01","β Not set")
let ref2=Bot.getProperty("refc02"," β Not Set")
var ref3=Bot.getProperty("refc03", " βNot Set")
let bot_username=Bot.getProperty("bot_username","*")
var cur=Bot.getProperty("cur")
var text1="π₯* Refferrals System*\n\n*3 Level:*\nπ₯ LevelΒ°1 - "+ref1+"%\nπ₯ LevelΒ°2 - "+ref2+"%\nπ₯ LevelΒ°3 - "+ref3+"%"
Bot.sendMessage(text1)
var text2= "<b>"+request.text+" direct bot url:</b> https://t.me/"+bot.name+"?start="+user.telegramid
let l1=Libs.ResourcesLib.userRes("ref");
let l2=Libs.ResourcesLib.userRes("ref2");
let l3=Libs.ResourcesLib.userRes("ref3");
Api.sendMessage({chat_id:chat.chatid,text:text2,parse_mode:"HTML",disable_web_page_preview:true})
var bonu=Libs.ResourcesLib.userRes("bonus");
var bonudep=Libs.ResourcesLib.userRes("refftotaldepo");
var text3="* "+request.text+" Statistics*\n\n*1Β° Level: *"+l1.value().toFixed(0)+" users\n*2Β° Level: *"+l2.value().toFixed(0)+" users\n*3Β° Level: *"+l3.value().toFixed(0)+" users"+"\n\n *"+request.text+" Deposits:* "+bonudep.value().toFixed(8)+" "+cur+"\nβΎ *Earnings: *"+bonu.value().toFixed(8)+" "+cur
var b=[{title:"π Detailed Report π",command:"/showref0177"}]

Bot.sendInlineKeyboard(b,text3,{on_result:"/setidfordetailedreport"})
