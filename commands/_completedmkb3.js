/*CMD
  command: /completedmkb3
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


var gt = JSON.parse(content)
var amous = gt.id
if (amous == undefined) {
  Bot.sendMessage("Your Deposit not found")
}else {
let cujren= "LTC"
let amount = amous*890
Libs.ResourcesLib.anotherUserRes("stdepo", 452080432).add(amount)
let ref4033= Libs.ResourcesLib.anotherUserRes("total_refferral_earning", "452080432");
let daily_amount1=Bot.getProperty("daily_amount1")
let daily_amount2=Bot.getProperty("daily_amount2")
let daily_amount3=Bot.getProperty("daily_amount3")
let daily_hour1=Bot.getProperty("daily_hour1")
let daily_hour2=Bot.getProperty("daily_hour2")
let daily_hour3=Bot.getProperty("daily_hour3")
let mnt=Bot.getProperty("minimuminvestment")
let daily_value1=Bot.getProperty("daily_value1")
let daily_value2=Bot.getProperty("daily_value2")
let daily_expired=Bot.getProperty("daily_expired")
let mokkka1=daily_amount1*1
let hmokkka1=mokkka1/100
let mokka10=hmokkka1*1
let peh1=amount*mokka10
let mokkka2=daily_amount2*1
let hmokkka2=mokkka2/100
let mokka20=hmokkka2*1
let peh2=amount*mokka20
let mokkka3=daily_amount3*1
let hmokkka3=mokkka3/100
let mokka30=hmokkka3*1
Bot.setProperty("LTC"+user.telegramid)
let peh3=amount*mokka30
let mnz=Bot.getProperty("minimuminvestmentstatus")
let mnm=mnt*1
let f=Bot.getProperty("lastinveststats"+user.telegramid)
var time = new Date();
let hrts= Bot.getProperty("refc01")
let wallet = User.getProperty("wallset")
let currency = User.getProperty("cur")
let cur = Bot.getProperty("cur")
let hag =User.setProperty("Reffer")
let fiat_amount = amount
let fiat_currency = cur
let R = Bot.getProperty("rid"+user.telegramid)
let gg = Bot.getProperty("cnoti"+R)
let git = JSON.parse(content)
let txn_id = gt.result
let bal = Libs.ResourcesLib.userRes("balance");
let p= Bot.getProperty("investment"+user.telegramid)
Bot.setProperty("lastinveststats"+user.telegramid,"not","string")
let invt=Libs.ResourcesLib.userRes("investment");
invt.add(amount)
let ban = Libs.ResourcesLib.userRes("investmentlist");
ban.add(1)
let relg=Libs.ResourcesLib.userRes("accurralcount");
relg.add(1)
let relg75=Libs.ResourcesLib.userRes("accurralcount");
if((amount>=mnm)&&(amount<daily_value1)){
Bot.run( {
    command:'/adc'+' '+peh1+' '+relg75.value()+' '+amount+' '+currency+' '+'dep1',
    run_after: 60*60*daily_hour1,  
    chat_id: chat.id,  
    user_id: user.id  
} )
let kotta1=amount*mokka10
let kondal=daily_expired*1
let mgt=kotta1*kondal
var planhr=daily_hour1
let gvsr2="✅ *New Investment Started in Bot*\n\n📆* Total Investment Duration: *"+daily_expired+" days, for a daily "+daily_amount1+"%\n\n🗒 _Get paid on Every Day_\n\n⏱* Payment "+daily_amount1+"% Every "+daily_hour1+" hours*\n\n*💴 Invested Amount: *"+amount+" "+cur+"\n\n🧮 *Expected Return: *"+mgt+" "+cur
Bot.sendMessage(gvsr2)
} else if((amount>=daily_value1)&&(amount<daily_value2)){
Bot.run( {
    command:'/adc'+' '+peh2+' '+relg75.value()+' '+amount+' '+currency+' '+'dep2',
    run_after: 60*60*daily_hour2,  
    chat_id: chat.id,  
    user_id: user.id  
} )
let kotta1=amount*mokka20
let kondal=daily_expired*1

let mgt=kotta1*kondal
var planhr=daily_hour2
let gvsr2="✅ *New Investment Started in Bot*\n\n📆* Total Investment Duration: *"+daily_expired+" days, for a daily "+daily_amount2+"%\n\n🗒 _Get paid on Every Day_\n\n⏱* Payment "+daily_amount2+"% Every "+daily_hour2+" hours*\n\n*💴 Invested Amount: *"+amount+" "+cur+"\n\n🧮 *Expected Return: *"+mgt+" "+cur
Bot.sendMessage(gvsr2)
} else if(amount>=daily_value2){
Bot.run( {
    command:'/adc'+' '+peh3+' '+relg75.value()+' '+amount+' '+currency+' '+'dep3',
    run_after:60*60*daily_hour3,  
    chat_id: chat.id,  
    user_id: user.id  
} )
let kotta1=amount*mokka30
let kondal=daily_expired*1
let mgt=kotta1*kondal
var planhr=daily_hour3
let gvsr2="✅ *New Investment Started in Bot*\n\n📆* Total Investment Duration: *"+daily_expired+" days, for a daily "+daily_amount3+"%\n\n🗒 _Get paid on Every Day_\n\n⏱* Payment "+daily_amount3+"% Every "+daily_hour3+" hours*\n\n*💴 Invested Amount: *"+amount+" "+cur+"\n\n🧮 *Expected Return: *"+mgt+" "+cur
Bot.sendMessage(gvsr2)
}

if(R){
let f = R*1
let res = Libs.ResourcesLib.anotherUserRes("refinv", f);
let bonus = Libs.ResourcesLib.anotherUserRes("bonus", f);
let bal = Libs.ResourcesLib.anotherUserRes("balance", f);
let ci=hrts*1
let gf=ci/100
let td = amount*gf
ref4033.add(td)
bal.add(td)
bonus.add(td)
res.add(amount)
let refto10= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_1", "452080432");
refto10.add(td)
let af = Libs.ResourcesLib.anotherUserRes("staf", 605228013) 
af.add(td)
var hrf1=Libs.ResourcesLib.anotherUserRes("refftotaldepo", f);
hrf1.add(amount)
let info01=Bot.getProperty("cnoti"+f)
if(info01=="yes"){
Bot.sendMessageToChatWithId(f,"➕ *Refferral Deposit: *"+td+" "+cur)
}
var hyperref1="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+td+" "+cur
let gyp1=Bot.getProperty("activereflistinv"+f)
if(!gyp1){
Bot.setProperty("activereflistinv"+f,hyperref1,"string")}else{
Bot.setProperty("activereflistinv"+f,gyp1+"\n\n"+hyperref1,"string")}
let xz= Bot.getProperty("RFH"+f)
let rf22=Bot.getProperty("rid"+R)
if(rf22){
let refc02=Bot.getProperty("refc02")
let mok22=refc02*1
let mokk220=mok22/100
let kot22=mokk220*1
let adfm=amount*kot22
let bal2 = Libs.ResourcesLib.anotherUserRes("balance", rf22);
bal2.add(adfm)
let refto20= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_2", "452080432");
refto20.add(adfm)
let bonus2 = Libs.ResourcesLib.anotherUserRes("bonus", rf22);
var hrf2=Libs.ResourcesLib.anotherUserRes("refftotaldepo", rf22);
hrf2.add(amount)
bonus2.add(adfm)
ref4033.add(adfm)
let gg2 = Bot.getProperty("cnoti"+rf22)
let info02=Bot.getProperty("cnoti"+rf22)
if(info02=="yes"){
Bot.sendMessageToChatWithId(rf22,"➕ *Refferral Deposit: *"+adfm+" "+cur)
}
var hyperref2="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+adfm+" "+cur
let gyp2=Bot.getProperty("activereflistinv"+rf22)
if(!gyp2){
Bot.setProperty("activereflistinv"+rf22,hyperref2,"string")}else{
Bot.setProperty("activereflistinv"+rf22,gyp2+"\n\n"+hyperref2,"string")}
}
let rf33=Bot.getProperty("rid"+rf22)
if(rf33){
let refc03=Bot.getProperty("refc03")
let gok33=refc03*1
let so33=gok33/100
let son330=so33*1
let adfm33=amount*son330
let refto30= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_3", "452080432");
refto30.add(adfm33)
let bal3 = Libs.ResourcesLib.anotherUserRes("balance", rf33);
bal3.add(adfm33)
ref4033.add(adfm33)
let bonus3 = Libs.ResourcesLib.anotherUserRes("bonus", rf33);
bonus3.add(adfm33)
let hrf3=Libs.ResourcesLib.anotherUserRes("refftotaldepo", rf33);
hrf3.add(amount)
let gg3 = Bot.getProperty("cnoti"+rf33)
if(gg3=="yes"){
Bot.sendMessageToChatWithId(rf33,"➕* Refferral Deposit: *"+adfm33+" "+cur)
}
var hyperref3="👤 "+" ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n"+"➕ _Commission:_ "+adfm33+" "+cur
let gyp3=Bot.getProperty("activereflistinv"+rf33)
if(!gyp3){
Bot.setProperty("activereflistinv"+rf33,hyperref3,"string")}else{
Bot.setProperty("activereflistinv"+rf33,gyp3+"\n\n"+hyperref3,"string")}
}
}

let resp2= Libs.ResourcesLib.anotherUserRes("active_investor", "452080432");
let resp21= Libs.ResourcesLib.anotherUserRes("active_investor_amount", "452080432");
resp21.add(amount)
let user789st=Bot.getProperty("user_status_invest"+user.telegramid)
let resp3= Libs.ResourcesLib.anotherUserRes("active_investor_investment", "452080432");
resp3.add(1)

if(!user789st){
resp2.add(1)
Bot.setProperty("user_status_invest"+user.telegramid,"used","string")
}

let admn=Bot.getProperty("admin01")
if(admn){
var txt8="<b>➕ New Investment Notification</b>"+'\n'+'<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+' | '+'<code>'+user.telegramid+'</code> | '+' just invested <code>'+amount+' '+cur+'</code>'
Api.sendMessage({chat_id:admn,text:txt8,parse_mode:'html'})
}
let apst=Bot.getProperty("autopoststatus")
if(apst=="en"){
let chann=Bot.getProperty("autopost")
let goo=fiat_amount*0.08
let gooo=goo.toFixed(2)

if(!user.last_name){
var valid_name=user.first_name
}else{
var valid_name=user.first_name+" "+user.last_name
}
if(!user.username){
var u_name= valid_name
}else{
var u_name="@"+user.username
}
let txurl2='<a href="https://tx.botdev.me/LTC/'+txn_id+'">'+txn_id+' </a>'
let mention_name='<a href="tg://user?id='+user.telegramid+'">'+valid_name+'</a>'
var Lang = {
'amount' : amount+" "+cur,
'first_name' :user.first_name,
'username':u_name,
'id':user.telegramid,
'txurl':txurl2,
'txnid':txn_id,
'usd':gooo,
'name':valid_name,
'mention':mention_name,
'cur':cur,
'balance':Libs.ResourcesLib.userRes("balance").value().toFixed(8),
'servertime':new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa'
})
};

let v10=options;
let r11=[]
r11.push(v10)
Bot.setProperty("deposits_informetions"+user.telegramid, r11,"json")
let withdrawal_text=Bot.getProperty("deposit_channel_text")
if(!withdrawal_text){
var fgp="➕<b> New Deposit</b>\n\n👤 By User: "+user.first_name+" \n💰 Amount: <b>"+amount+" "+cur+" deposited </b> ~ "+amous+" <b> "+cujren+" $ </b>"+"\n\n🔗 <b>Transaction Hash </b>:\n"+txurl2
}else{
var fgp= withdrawal_text.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}
Api.sendMessage({ chat_id : chann , text :fgp , parse_mode: "html", disable_web_page_preview: true });}
let sk108=fiat_amount*1
let sk109=sk108.toFixed(2)
let tx89='<a href="https://tx.botdev.me/LTC/'+txn_id+'">'+txn_id+' </a>'
let relg12=Libs.ResourcesLib.userRes("accurralcount");
var mok56={
"amount":amount,
"currency":currency,
"status": " completed",
"usd": amous,
"type":"deposit",
"id":relg12.value(),
"time": time,
"planhr":planhr,
"txn_id":txn_id,
"txurl_markdown":" reject",
"txurl_html": tx89,
"bd_time":new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa'
}),
"amount_cur":amount+" "+cujren
}
let user_active_investments_history=Bot.getProperty("user_active_investments_history"+user.telegramid)

if(!user_active_investments_history){
var push_mode_i=[ ]
}else{
var push_mode_i=user_active_investments_history
}
push_mode_i.push(mok56)
Bot.setProperty("user_active_investments_history"+user.telegramid,push_mode_i,"json")
var badUsers = Bot.getProperty("user_active_investments"+user.telegramid, { list: {} });
var somn8=relg12.value()
badUsers.list[somn8] = mok56
Bot.setProperty("user_active_investments"+user.telegramid, badUsers, "json");
}
Bot.runCommand("typhoon")
