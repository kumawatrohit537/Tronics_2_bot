/*CMD
  command: /supportchat
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: π, π·ββ support, πhelp, π support, π€supportπ€, πsupport, β³ support, π support, π, π·ββ support, πhelp, π support, π contact support, βοΈ support
CMD*/

var tx="*π You are now in direct contact with our Administrator*\nSend here any message you want to submit, you will receive the answer directly here in chat!"

User.setProperty("is_support_admin",true,"boolean")
//Bot.runCommand("/setchatsup")
Bot.sendKeyboard("β¬οΈ Return",tx)
