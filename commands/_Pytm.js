/*CMD
  command: /Pytm
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: tye

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var Or_beta = Libs.ResourcesLib.userRes("Or_beta")
Or_beta = message
var random = Libs.ResourcesLib.userRes("random")
random = Libs.Random.randomInt(10050, 88888);
var msgg = Libs.ResourcesLib.userRes("msgg")
msgg = message
if(message >0) {
let Or_beta = Libs.ResourcesLib.userRes("Or_beta")
Or_beta = ""+message+""
var p = "https://full2sms.in/gateway/processPpayment?token=tjvHe4frEkUG2qs93BJLMoI&amount="+msgg+"&order_id=Win"+random+"&cpin=57991019851005649545"
Bot.sendInlineKeyboard(
[ [{ title: "Paid ☑️", command: "/onSuc" }], [{ title: "Pay Now", url: p }]],
 "🏳️New Deposit\n\\n\🚀Amount: ₹ "+message+"\n\\n\🌿Order ID: "+random+"\n\n💠 After Paying Click On 'Paid ☑️'")
 Api.sendMessage({
        chat_id: "@Easywin_tg",
        text:
          "🌺 New Deposit Request\n\n▪️ Status : Processing\n▪️ Name : "+user.first_name+"\n▪️ UserName : @"+ user.username +
          "\n▪️ User ID : " +
          user.telegramid +
          "\n▪️ Amount : " +
          message +"\n▪️Order ID: "+random+"\n▪️Checker : https://full2sms.in/status_order.php?order_id=Win"+random+""})
}else{
Bot.sendMessage("Min. Deposit Is ₹1")
}
