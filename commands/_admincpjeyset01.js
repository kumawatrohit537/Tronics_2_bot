/*CMD
  command: /admincpjeyset01
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

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let rt="⚠️ *Warning:* _Tron and other addresses are the address where all user deposited tron,ltc, btc etc goes and from private key tron deduct for withdraw_\n *How to get Our Tronlink account Private key* [click here](https://telegra.ph/Follow-the-video-05-27)"
let cp_privatekey=Bot.getProperty("cp_privatekey01","🛑 Not Set")
let cp_publickey=Bot.getProperty("cp_publickey01","🛑 Not Set")
let LTC=Bot.getProperty("LTC_ADDRESS","🛑 Not Set")
let BTC=Bot.getProperty("BTC_ADDRESS","🛑 Not Set")
let BCH=Bot.getProperty("BCH_ADDRESS","🛑 Not Set")
let DGB=Bot.getProperty("DGB_ADDRESS","🛑 Not Set")
let DOGE=Bot.getProperty("DOGE_ADDRESS","🛑 Not Set")
let line="*------------------------------------------------*"
let r="*Here is your currently setupped* Deposit *address and Private Key*\n"+line+"\n"+"\n*Tron Address:* `"+cp_publickey+"` \n\n*Tron Private Key:* `"+cp_privatekey+" `"+"\n\n*LTC address:* `"+LTC+"`\n\n*BTC address:* `"+BTC+"`\n\n*BCH address:* `"+BCH+"`\n\n*DOGE address:* `"+DOGE+"`\n\n*DGB address:* `"+DGB+"`\n\n"+rt
var b=[
[{text:"🔀 Change deposit address and private key", callback_data:"/changekeyforcommandcpkeys01"}],
[{text:"💵 My tron Balance", callback_data:"/cpbal01 r"}],
[{text:"Return ↩️", callback_data:"/adminmainsettings01 r"}, {text:"⬅️ Back To Settings", callback_data:"/adminlogin r"}]]

Api.editMessageText({chat_id:chat.chatid,message_id:id,text:r,parse_mode:"markdown",reply_markup:{inline_keyboard:b},disable_web_page_preview:true})
}else{
Bot.runCommand("/start")
}
