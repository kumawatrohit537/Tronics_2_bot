/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ✅ joined, 🔙 back, return, back 🔙
CMD*/

var adm01 = Bot.getProperty("admin01")
if (adm01 ==undefined){
Bot.setProperty("admin01",user.telegramid,"string")
Bot.sendMessage("*You had started the bot first so now u became bot admin and the bot admin now can't be Change*\n You can login in panel by /adminlogin")
}else{
var bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}

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
var bal = Libs.ResourcesLib.userRes("balance");
var zero=Bot.getProperty("zero")
var cur=Bot.getProperty("cur")
var x =User.setProperty("hi",bal.value().toFixed(8),"String")
var hi =User.getProperty("hi")
var time110 = new Date();
var daily_amount=Bot.getProperty("daily_amount1")
var daily_expired=Bot.getProperty("daily_expired")
Bot.setProperty("uinfo"+"@"+user.username,"`"+user.telegramid+"`","string")
var used = User.getProperty('used')
var art=Bot.getProperty("art")
if (!used){
Bot.setProperty("zero", 8,"string")
var total_count = Libs.ResourcesLib.anotherUserRes("user_position", 452080432);
var sttotal = Libs.ResourcesLib.anotherUserRes("sttotal", 452080432);
sttotal.add(1)
total_count.add(1)
var kobasam=total_count.value()
Bot.setProperty("user_position"+user.telegramid,kobasam,"string")
Bot.setProperty("lastinveststats"+user.telegramid,"yes","string")
Bot.setProperty("gnoti"+user.telegramid,"yes","string")
Bot.setProperty("cnoti"+user.telegramid,"yes","string")
Bot.setProperty("anoti"+user.telegramid,"yes","string")
Bot.setProperty("enoti"+user.telegramid,"yes","string")
 Bot.setProperty("upinfo"+user.telegramid,user.first_name," string")
Bot.setProperty("chat_created"+user.telegramid,time110,"string")
var tgID = user.telegramid
var badUsers = Bot.getProperty("bot_total_users", { list: {} });
 badUsers.list[tgID] = user.telegramid
Bot.setProperty("bot_total_users", badUsers, "json");
Bot.setProperty("banned_users_list",[],"json")
var topm1 = request.from
var badUsers2 = Bot.getProperty("bot_user_info", { list: {} });
badUsers2.list[user.telegramid] =topm1
Bot.setProperty("bot_user_info", badUsers2, "json");
var v67=request.from
Bot.setProperty("tgid_info"+user.telegramid,v67,"json")
var adm=Bot.getProperty("admin01")
if(adm){
Api.sendMessage({chat_id:adm,text:"S.From --> "+'<a href="tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+"\n🆔 --> <code>"+user.telegramid+"</code>",parse_mode:"html"})
}
var h67=Bot.getProperty("bot_users")
var from108=request.from
var position_in=total_count.value()
var from9033={
first_name:user.first_name,
last_name:user.last_name,
username:user.username,
id:user.telegramid,
position:position_in
}
if(!h67){
var pujs=[ ]
pujs.push(from9033)
Bot.setProperty("bot_users",pujs,"json")
}else{
h67.push(from9033)
Bot.setProperty("bot_users",h67,"json")
}
if(params&&params!=user.telegramid){
var u=params
User.setProperty("Reffer",u,"string")
var inl=Bot.getProperty("gnoti"+u)
if(inl=="yes"){
Api.sendMessage({chat_id:u,text:"➕<b> New Refferral:</b> "+user.first_name+" on level 1",parse_mode:"html"})
}
Bot.setProperty("rid"+user.telegramid,u,"string")
Bot.setProperty("hshxh",u,"string")
var up =Bot.getProperty("upinfo"+u)
User.setProperty("up",up,"string")
var res = (Libs.ResourcesLib.userRes("ref"),u)
var refUserBonus = Libs.ResourcesLib.anotherUserRes("ref", u);
  refUserBonus.add(1);
var d =User.getProperty("Reffer")
var ge =Bot.getProperty("rid"+d)
var rf1=Bot.getProperty("rid"+u)
if(rf1){
Bot.setProperty("rid2"+rf1,user.telegramid,"string")
var in2=Bot.getProperty("gnoti"+rf1)
if(in2=="yes"){
Api.sendMessage({chat_id:rf1,text:"➕ <b>New Refferral:</b> "+user.first_name+" on level 2",parse_mode:"html"})}
var refUserBonus2 = Libs.ResourcesLib.anotherUserRes("ref2", rf1);
  refUserBonus2.add(1);
}
var rf3=Bot.getProperty("rid"+rf1)
if(rf3){
Bot.setProperty("rid3"+rf3,user.telegramid,"string")
var in3=Bot.getProperty("gnoti"+rf3)
if(in3=="yes"){
Api.sendMessage({chat_id:rf3,text:"➕ <b>New Refferral :</b> "+user.first_name+" on level 3",parse_mode:"html"})}
var refUserBonus3 = Libs.ResourcesLib.anotherUserRes("ref3", rf3);
  refUserBonus3.add(1);
}}
Bot.setProperty("chat_created"+user.tegramid,time110,"string")
User.setProperty('used',true,'boolean');
}
var gomoj=Bot.getProperty("chat_created"+user.telegramid)
var user_position=Bot.getProperty("user_position"+user.telegramid)
var hokomat={
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
id:user.telegramid
}
}
Bot.setProperty("user_info"+user.telegramid,hokomat,'JSON')

if(params){
var spl=params.split('_')
var tag_param=spl[0]
var info_id=spl[1]
var tyui6=spl[2]
var amount87=spl[3]
if(tag_param=="userinfo"){
Bot.runCommand("/infid"+" "+info_id)
return
}
if(tag_param=="wdinformetion") {
Bot.runCommand("/wdinfobywid01"+" "+info_id+" "+tyui6+" "+amount87)
return
}
}

var dep_info=Bot.getProperty("minimuminvestment")
var pl2=Bot.getProperty("daily_amount2")
var pl3=Bot.getProperty("daily_amount3")
var lv2=Bot.getProperty("daily_value1")
var lv3=Bot.getProperty("daily_value2")
var cur_info=Bot.getProperty("cur")
var minwd_info=Bot.getProperty("adminminwd01")
var refc01=Bot.getProperty("refc01")
var refc02=Bot.getProperty("refc02")
var refc03=Bot.getProperty("refc03")
var hr1=Bot.getProperty("daily_hour1")
var hr2=Bot.getProperty("daily_hour2")
var hr3=Bot.getProperty("daily_hour3")

if((!lv3)||(!lv2)||(!dep_info)){
Bot.sendMessage("⛔️* Investment plan* not set. First set it from adminpanel. Type /adminlogin")
return
}
var cp_privatekey8=Bot.getProperty("cp_privatekey01")
var cp_publickey8=Bot.getProperty("cp_publickey01")
if((!cp_privatekey8)||(!cp_publickey8)){
Bot.sendMessage("⛔️ *Tron address and Private key* not set.  Set it on adminpanel /adminlogin")
return
}
if(!cur_info){
Bot.sendMessage("⛔️* Bot currency* not set. Set it on adminpanel. /adminlogin")
return
}
if(!minwd_info){
Bot.sendMessage("⛔️* Minimum withdrawal* amount not set. Set it on adminpanel /adminlogin")
return
}
if((!hr3)||(!hr2)||(!hr1)){
Bot.sendMessage("⛔️* Investment Accural Hour* not set. First set it from adminpanel. Type /adminlogin")
return
}
if((!daily_amount)||(!daily_expired)||(!pl2)||(!pl3)){
Bot.sendMessage("⛔️*Investment Plan* not set. Set it on adminpanel.  /adminlogin")
return
}
if((!refc01)||(!refc02)||(!refc03)){
Bot.sendMessage("⛔️ *Refferral commission* percentange not set. Set it on adminpanel. /adminlogin")
return
}
if(!art){
Bot.sendMessage("⛔️* BOT BUTTON* not set. Set it on adminpanel. /adminlogin")
return
}
Bot.setProperty("bot_status_run","ok","string")
var ar_t1=Bot.getProperty("welcome_text")
var ttt=" ["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

var Lang = {
 'mention' :ttt,
 'first_name' :user.first_name,
'username':u_name,
'id':user.telegramid,
'balance':bal.value().toFixed(8),
'name':valid_name,
'cur':cur,
'servertime':new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa' 
})
};
if(!ar_t1){
var ho_t=ttt+" "+"*Welcome To The Bot*"
}else{
var ho_t=ar_t1.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}

var so11=art.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});

if(params){
var arrr = params.split("_");
  var al = arrr[0];
var aler2=arrr[1];
if(al=="wdinfo"){
Bot.runCommand("/wdcheck "+aler2)
return
}
}
var mustj=Bot.getProperty("mustjoinstatus")
if(mustj=="en"){ 
var mschan=Bot.getProperty("mustjoin")
var ptp =User.getProperty('usedby')

if(!ptp){
Bot.runCommand("/cpzjz")
}else{
var bal = Libs.ResourcesLib.userRes("balance");
Bot.sendKeyboard(so11,ho_t)
}}else{
var bal = Libs.ResourcesLib.userRes("balance");
Bot.sendKeyboard(so11,ho_t)
}
}
