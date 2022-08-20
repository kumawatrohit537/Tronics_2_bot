/*CMD
  command: /dept
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💵 deposit, ➕ invest ➕, 💵 invest, ✝ deposit, 💴 deposit, ➕ invest, ➕ deposit, ➕deposit, ➕ invest, 🔻 invest, 📥 deposit
CMD*/

var ty = [[{ title: " TRON (TRX)", command: "/Deposit" },{ title: "USDT-TRC20", command: "/Deposit2" }],[{ title: "DIGIBYTE (DGB)", command: "/Deposit1" },{ title: "BITCOIN (BTC)", command: "/Deposit4" },{ title: "DOGE", command: "/Deposit6" }],[{ title: "LITECOIN (LTC)", command: "/Deposit3" },{ title: "BITCOINCASH (BCH)", command: "/Deposit5" }]]
Bot.sendInlineKeyboard(ty,"♻️ Please  Select The Currency To Make A Deposit! \n\n*🚫 Note: Your Invest will be automatically be converted To TRX*")
