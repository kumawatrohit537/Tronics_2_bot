/*CMD
  command: šø
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: š balance
CMD*/


let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
//cant access
return
}
let fh=User.getProperty("msgid5")
let cur= Bot.getProperty("cur")
let zero = Bot.getProperty("zero")
let art=Bot.getProperty("art")
let bal = Libs.ResourcesLib.userRes("balance");
let investment = Libs.ResourcesLib.userRes("investment");
if(investment.value()<0){
investment.set(0)
}
let Reinvest = Libs.ResourcesLib.userRes("reinvest");
let bonus = Libs.ResourcesLib.userRes("bonus");
let profit = Libs.ResourcesLib.userRes("totalprofit");
let wd = Libs.ResourcesLib.userRes("withdraw");
let tp = bal*0.08
let on_info=Bot.getProperty("acount_button_text")
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
if(!on_info){
var php="š¤ *Account Balance:*\n\nā *Withdrawable Balance: *"+" \n"+bal.value().toFixed(zero)+" "+cur+"*\n\nš³ *Active Investments:*"+"\n"+investment.value().toFixed(zero)+" "+cur+" *\n\nš° *Total Profit:*"+"\n"+profit.value().toFixed(zero)+" "+cur+" *\n\nš* Total Affiliate Bonus:*"+"\n"+bonus.value().toFixed(zero)+" "+cur+"*\n\nšø* Total Withdrawn:*"+"\n"+wd.value().toFixed(zero)+" "+cur+""
}else{
var Lang={
'balance':bal.value().toFixed(zero),
'investment':investment.value().toFixed(zero),
'profit':profit.value().toFixed(zero),
'bonus':bonus.value().toFixed(zero),
'withdrawals':wd.value().toFixed(zero), 'cur':cur,
'id':user.telegramid,
'name':valid_name,
'mention':" ["+valid_name+"]"+"(tg://user?id="+user.telegramid+")",
'usd' : tp
};
var php=on_info.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}
Bot.sendKeyboard("šµ My Investments,š¤ My withdrawals\nš„ Change Wallet,\nBack š", php)
