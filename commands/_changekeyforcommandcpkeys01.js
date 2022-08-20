/*CMD
  command: /changekeyforcommandcpkeys01
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
let k="_Now enter your_ [Tronlink App ](https://play.google.com/store/apps/details?id=com.tronlinkpro.wallet) *Private Key*\n->Find your private key by the help of this [Click here](https://telegra.ph/Follow-the-video-05-27) \n\n*Enter your PRIVATE KEY from Tronlink App*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:k,disable_web_page_preview:true,parse_mode:"markdown"})
Bot.runCommand("/commandforsetkeyinprivcoinpayments017")
}else{
Bot.runCommand("/start")
}
