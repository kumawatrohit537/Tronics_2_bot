/*CMD
  command: /reinvestmanually
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

let id=User.getProperty("msgid89")
 function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*Invaild amount!. Kindly enter correct amount and try again*")
return
}
  let r=message
  let cur= Bot.getProperty("cur")

let bal = Libs.ResourcesLib.userRes("balance");
let y=r*1
let mnz=Bot.getProperty("minimuminvestmentstatus")
let mnt=Bot.getProperty("minimuminvestment")
let mnm=mnt*1

if(mnz=="en"){
if(y<mnm){
Bot.sendMessage("*The amount is less than minimum amount*")
return
}}
if(y>bal.value()){
Bot.sendMessage("*The amount is bigger than your balance*")
return
}
if(bal.value()<mnm){
Bot.sendMessage("*You dont have enough balance for reinvest*")
return
}
let r1=Bot.getProperty("daily_hour1")
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
    run_after: 60*60*r1,  // 5 days delay
    chat_id: chat.id,  // or use another chat_id
    user_id: user.id  // or use another user.id
} )
let resp21= Libs.ResourcesLib.anotherUserRes("active_investor_amount", "452080432");
resp21.add(y)
var binva = Libs.ResourcesLib.userRes("investment");
binva.add(y)
bal.remove(y)
let re = Libs.ResourcesLib.anotherUserRes("stre", 452080432) 
re.add(y)
let daily_hour1=Bot.getProperty("daily_hour1")
let d_amount=Bot.getProperty("daily_amount1")
let d_expired=Bot.getProperty("daily_expired")
Bot.sendMessage("*๐งพ New Investment Started*\n๐จ We received your Investment, and immediately started your personal profit plan.\n\n๐ณ *Daily Plan Production: *"+d_amount+"%\n๐ Daily production will be issued for a total plan duration of *"+d_expired+" days*\n๐ You will get profits on Every Day\n*๐งท Profits will be credited into your bot balance* "+d_amount+"% every "+daily_hour1+" hours.\n\n๐ด Amount Invested: *"+y.toFixed(8)+" "+cur+"*")

let dd=new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa'
})
let txt="<b>๐ New Re-invest ๐</b>\n\n๐ค <b>User:</b> โชโฌ"+user.first_name+"\n\n๐ฐ <b>Amount: "+y+" "+cur+"\n\n</b>โฐ <b>Update Time: "+dd+"</b>\n\n๐พ <b>Bot Link:</b> @"+bot.name

let apst=Bot.getProperty("autopoststatus")
if(apst=="en"){
let chann=Bot.getProperty("autopost")
Api.sendMessage({ chat_id : chann , text :txt, parse_mode:"HTML", disable_web_page_preview: true });}

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
if(!rt){
Bot.setProperty("reinvestmentshistory"+user.telegramid,reket,"string")
}else{
Bot.setProperty("reinvestmentshistory"+user.telegramid,rt+"\n\n"+reket,"string")
}
