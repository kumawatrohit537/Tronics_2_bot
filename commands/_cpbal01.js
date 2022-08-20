/*CMD
  command: /cpbal01
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

var add = Bot.getProperty("bb_apikey01")
var pk = Bot.getProperty("cp_privatekey")
var ad = add
HTTP.post( {
    url: "https://tronb.herokuapp.com/balance",
    success: '/ooad r',
    body: {'address' : ad,  'private_key' : pk }
})
