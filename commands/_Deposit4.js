/*CMD
  command: /Deposit4
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

var depr = Bot.getProperty("BTC"+user.telegramid)
if (depr == undefined) {
  Bot.sendMessage("✊Generating a address for you")
  HTTP.get({
url:
    "https://crypto-btc.up.railway.app/BTC",
  success: "sucsBTC"})
} else {
 var wallset = Bot.getProperty("wallBTC"+user.telegramid)
let gomoj=Bot.getProperty("chat_created"+user.telegramid)
let user_position=Bot.getProperty("user_position"+user.telegramid)

if(!user.last_name){
var valid_name=user.first_name
}else{
var valid_name=user.first_name+" "+user.last_name
}
if(!user.username){
var u_name= valid_name
}else{
var u_name=user.username
}
let hokomat={
user_info:{
first_name:user.first_name,
last_name:user.last_name,
full_name:valid_name,
username:user.username,
is_bot:false,
chat_created:gomoj,
mention_id:" ["+user.telegramid+"]"+"("+"tg://user?id="+user.telegramid+")",
mention_name:"["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")",
mention_username:"["+user.username+"]("+"tg://user?id="+user.telegramid+")",
position:user_position,
id:user.telegramid,
men_html:'<a href="tg://user?id="'+user.telegramid+'">'+valid_name+'</a>'
}
}
Bot.setProperty("user_info"+user.telegramid,hokomat,"json")

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
let cur=Bot.getProperty("cur")
let res100 = Libs.ResourcesLib.anotherUserRes("cp_key_count", 452080432);
let res200=res100.value()
let pt=Bot.getProperty("deposit_address1"+user.telegramid+cur+res200)
let exp=Bot.getProperty("daily_expired")
let pln1=Bot.getProperty("daily_amount1")
let pln2=Bot.getProperty("daily_amount2")
let pln3=Bot.getProperty("daily_amount3")
let pln4=Bot.getProperty("daily_amount4")
let pln5=Bot.getProperty("daily_amount5")
let hr1=Bot.getProperty("daily_hour1")
let hr2=Bot.getProperty("daily_hour2")
let hr3=Bot.getProperty("daily_hour3")
let hr4=Bot.getProperty("daily_hour4")
let hr5=Bot.getProperty("daily_hour5")
let mnm=Bot.getProperty("minimuminvestment")
let mnt=mnm*1
let daily1=Bot.getProperty("daily_value1")
let dy1=daily1-0.1
let daily2=Bot.getProperty("daily_value2")
let dy2=daily2-0.1
let daily3=Bot.getProperty("daily_value3")
let dy3=daily3-0.1
let daily4=Bot.getProperty("daily_value4")
let dy4=daily4-0.1

var depo="➕* Welcome! Here you can start a new investment!*\n\n💵 We offer up to 3 different Investment Plans, choose the best for you!\n\n1⃣ *From "+mnm+" "+cur+" to "+dy1+ " "+cur+"*\n"+pln1+" % Daily for "+exp+ " Days\n"+pln1+" % every 24 hours\n\n2⃣ *From "+daily1+" "+cur+" to "+dy2+ " "+cur+"*\n"+pln2+" % Daily for "+exp+ " Days\n"+pln2+" % every 24 hour\n\n3⃣ *More than "+daily2+" "+cur+"*\n"+pln3+" % Daily for "+exp+" Days\n"+pln3+" % every 24 hour\n\n📆* Paid on Every Day*"
let hman=Bot.getProperty("lastinveststats"+user.telegramid)
Bot.sendMessage(depo)
 var wallset = Bot.getProperty("wallBTC"+user.telegramid)
var rs = Libs.ResourcesLib.userRes("balance");
var cbal = User.getProperty("cbal")
var hi =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var ty = [{ title: "🔁 Refresh", command: "/refreshBTC" }]
Bot.sendMessage("⚠️ _If you send less than 0.00005 BTC, your deposit will be cancelled!_\n\n_You can also check Your deposit by refresh button_ \n✅* Send the amount you want to invest to the following address:*")
Bot.sendInlineKeyboard(ty,
  " `"+ wallset +" `\n\n "
)
}
