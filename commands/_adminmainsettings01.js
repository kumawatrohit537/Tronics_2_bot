/*CMD
  command: /adminmainsettings01
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

let h= Bot.getProperty("admin01")
var b=[
[{title:" π CLICK HERE ONE Time",command:"/admincurrency01"}, {title:"π₯ Refferral % ", command:"/adminrefferral01"}],
[{title:"π Connect with My Wallet",command:"/admincpjeyset01"},{title:" πΎ Leading Zeros",command:"/adminleadze01"}],
[{title:"π Must Join",command:"/adminmastjoin01"}, {title:"π± Auto Posting",command:"/autopostadmincom01"}],
[{title:"πΉ Investment Plan",command:"/setidtoforglibalnotsorryinvestmentplan09"}/*,{title:"βοΈMinimum Invest",command:"/adminmiminvestsetta01"}*/],
[{title:"π Welcome Bonus",command:"/adminsetwelcomebonus01"},{title:"π Advanced Statisticts",command:"/showst"}],
[{text:"β Add Fake Statisticts",callback_data:"/fakeaddstsatifakestatictsadmin91"}],
[{title: "β¬οΈ Back To All Settings", command:"/adminlogin r"}]]

var b2=[[{text:" π CLICK HERE ",callback_data:"/admincurrency01"}, {text:"π₯ Refferral % ", callback_data:"/adminrefferral01"}],
[{text:"π Connect with Tronlink",callback_data:"/admincpjeyset01"},{text:" πΎ Leading Zeros",callback_data:"/adminleadze01"}],
[{text:"π Must Join",callback_data:"/adminmastjoin01"}, {text:"π± Auto Posting",callback_data:"/autopostadmincom01"}],
[{text:"πΉ Investment Plan",callback_data:"/setidtoforglibalnotsorryinvestmentplan09"}/*,{text:"βοΈMinimum Invest",callback_data:"/adminmiminvestsetta01"}*/],
[{text:"π Welcome Bonus",callback_data:"/adminsetwelcomebonus01"},{text:"π Advanced Statisticts",callback_data:"/showst"}],
[{text:"β Add Fake Statisticts",callback_data:"/fakeaddstsatifakestatictsadmin91"}],
[{text: "β¬οΈ Back To All Settings", callback_data:"/adminlogin r"}]]
var id= User.getProperty("adminmsgid")
if(chat.chatid==h){
let rxt='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+"<b> Select an option that you want to manage your bot</b>"

Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"html",text:rxt,reply_markup:{inline_keyboard:b2}
})
}else{
Bot.runCommand("/start")}
