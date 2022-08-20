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
  aliases: 🆘, 👷‍♂ support, 📞help, 📞 support, 🤝support🤝, 🏗support, ⛳ support, 🆘 support, 🆘, 👷‍♂ support, 📞help, 📞 support, 📞 contact support, ☎️ support
CMD*/

var tx="*📞 You are now in direct contact with our Administrator*\nSend here any message you want to submit, you will receive the answer directly here in chat!"

User.setProperty("is_support_admin",true,"boolean")
//Bot.runCommand("/setchatsup")
Bot.sendKeyboard("⬅️ Return",tx)
