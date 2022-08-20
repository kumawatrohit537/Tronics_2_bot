/*CMD
  command: /wdntfy
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

let af=params
if(params){
let arr=params.split(' ')
let cpid=arr[0]
let tx_x=arr[1]
var add = User.getProperty("wallet")
var pk = Bot.getProperty("trugy")
var amo = User.getProperty("trogy")
var amod = amo*1
User.setProperty("amo", amo, "string")

HTTP.post( {
    url: "https://tronb.herokuapp.com/sendtrx",
    success: '/onwithdrawntfy01',
    body: {'receiver' : add, 'amount' : amod , 'private_key' : pk }
});}
