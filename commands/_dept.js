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
  aliases: π΅ deposit, β invest β, π΅ invest, β deposit, π΄ deposit, β invest, β deposit, βdeposit, β invest, π» invest, π₯ deposit
CMD*/

var ty = [[{ title: " TRON (TRX)", command: "/Deposit" },{ title: "USDT-TRC20", command: "/Deposit2" }],[{ title: "DIGIBYTE (DGB)", command: "/Deposit1" },{ title: "BITCOIN (BTC)", command: "/Deposit4" },{ title: "DOGE", command: "/Deposit6" }],[{ title: "LITECOIN (LTC)", command: "/Deposit3" },{ title: "BITCOINCASH (BCH)", command: "/Deposit5" }]]
Bot.sendInlineKeyboard(ty,"β»οΈ Please  Select The Currency To Make A Deposit! \n\n*π« Note: Your Invest will be automatically be converted To TRX*")
