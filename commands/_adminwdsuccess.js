/*CMD
  command: /adminwdsuccess
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

let cpid= Libs.Random.randomInt(838383873, 9999999990); 
let cps=options.body.error
let adm=Bot.getProperty("admin01")
let cur=Bot.getProperty("cur")
let amount=User.getProperty("trogy")
let wall=Bot.getProperty("wallet"+user.telegramid)
if(cps=="ok"){
Bot.run( {
    command: "/wdntfy"+" "+cpid+" "+params,
    run_after: 1*1,  // 5 days delay
    label: "myLabel"
} )
let profile_mention='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'
let trx="ā <b>Withdrawal Notification</b>"+" \n"+profile_mention+" Just made a withdrawal of "+amount+" "+cur+" to the wallet \n"+"<code>"+wall+"</code>"
if(adm){
Api.sendMessage({chat_id:adm,text:trx,parse_mode:"html"})}
Bot.setProperty("wdstatus"+user.telegramid+params,"ā² Processing....","string")

let typ="ā* Withdrawal Requested*\nYour payment is being processed automatically right now!\n\n*Secured Payment ID:* \n"+cpid+"\n_You will receive TXID soon_"+"\n\nš³ *Transaction Details:* "+amount+" "+cur+" to the wallet\n"+"`"+wall+"`"
Bot.sendKeyboard("š Back",typ)
}else{
Bot.sendMessage(" Auto Withdrawal Failed\n\nReason: ")
Bot.sendMessageToChatWithId(adm," Cant pay autometically to the user "+"["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n\nReason: ")
}
