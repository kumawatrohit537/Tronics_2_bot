/*CMD
  command: /reio
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

if(params){
let id=User.getProperty("msgid89")
  let r=params
  let cur= Bot.getProperty("cur")
  let daily_hour1=Bot.getProperty("daily_hour1")
let bal = Libs.ResourcesLib.userRes("balance");
let y=r*1
let mnz=Bot.getProperty("minimuminvestmentstatus")
let mnt=Bot.getProperty("minimuminvestment")
let mnm=mnt*1
if(mnz=="en"){
if(y<mnm){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "The amount is less than minimum amount",
  show_alert: (params!="Top")
})
return
}}
if(y>bal.value()){
Api.answerCallbackQuery({callback_query_id:request.id,text:" The amount is bigger than your balance",
show_alert:(params!="Top")
})
return
}
if(bal.value()<mnm){
Api.answerCallbackQuery({callback_query_id:request.id,text:" You dont have enough balance for reinvest",
show_alert:(params!="Top")
})
return
}
let relg=Libs.ResourcesLib.userRes("accurralcount");
relg.add(1)
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
let hok=Bot.getProperty("daily_amount1")
var hok11=hok*1
var hok22=hok11/100
var hok33=hok22*1
let am=y*hok33
Bot.run( {
    command: "/adc"+" "+am+" "+relg.value()+" "+y+" "+cur,
    run_after: 60*60*daily_hour1,  // 5 days delay
    chat_id: chat.id,  // or use another chat_id
    user_id: user.id  // or use another user.id
} )
let d_amount=Bot.getProperty("daily_amount1")
let d_expired=Bot.getProperty("daily_expired")
var binva = Libs.ResourcesLib.userRes("investment");
binva.add(y)
bal.remove(y)
let re = Libs.ResourcesLib.anotherUserRes("stre", 452080432) 
re.add(y)
Bot.sendMessage("*๐งพ New Investment Started*\n๐จ We received your Investment, and immediately started your personal profit plan.\n\n๐ณ * Plan Production: *"+d_amount+"%\n๐ Daily production will be issued for a total plan duration of *"+d_expired+" days*\n๐ You will get profits on Time\n*๐งท Profits will be credited into your bot balance* "+d_amount+"% every "+daily_hour1+" hours.\n\n๐ด Amount Invested: *"+y.toFixed(8)+" "+cur+"*")
let resp21= Libs.ResourcesLib.anotherUserRes("active_investor_amount", "452080432");
resp21.add(y)
var now = new Date();
let month= Libs.DateTimeFormat.format(now, "mmmm");
let date= Libs.DateTimeFormat.format(now, "dd");
let d1=date*1
let d2=d1+1
let year= Libs.DateTimeFormat.format(now, "yyyy");
var tarikh=d2+"th "+month+" "+year
let rt=Bot.getProperty("reinvestmentshistory"+user.telegramid)
var brecount = Libs.ResourcesLib.userRes("reinvestmenttimeto");
brecount.add(1)
let reket="โRe-invest Nยฐ *"+brecount.value()+"*"+"\n"+"๐ Date: *"+tarikh+"*"+" \nโป๏ธ Amount: *"+y+" "+cur+"*"

let dd=new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa'
})
let txt="<b>๐ New Re-invest ๐</b>\n\n๐ค <b>User:</b> โชโฌ"+user.first_name+"\n\n๐ฐ <b>Amount: "+y+" "+cur+"\n\n</b>โฐ <b>Update Time: "+dd+"</b>\n\n๐พ <b>Bot Link:</b> @"+bot.name

let apst=Bot.getProperty("autopoststatus")
if(apst=="en"){
let chann=Bot.getProperty("autopost")
Api.sendMessage({ chat_id : chann , text :txt, parse_mode:"HTML", disable_web_page_preview: true });}
if(!rt){
Bot.setProperty("reinvestmentshistory"+user.telegramid,reket,"string")
}else{
Bot.setProperty("reinvestmentshistory"+user.telegramid,rt+"\n\n"+reket,"string")
}
}
