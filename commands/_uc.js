/*CMD
  command: /uc
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

var id = User.getProperty("id")
var gpin = "you gpin"
HTTP.get( {
        url: "https://full2sms.in/gateway/paymentStatus?order_id=Win"+id+"&gpin=98101994953535110256504",
success: "/onSuc1"
      } )
