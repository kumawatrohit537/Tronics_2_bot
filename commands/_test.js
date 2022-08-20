/*CMD
  command: /test
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

var key = "06S9JAK4-XOY1BW9N-L06Z9QUL-GL5MBRHU"
var key2 =  "ec523c0fee591d68b2f47d3a9dd56ef5fbcdea5f851c3c9b7f6b810d223b1b1b99b4febc326247584889b316d76f110205dec667db123f1dad14f001e87c8b7c" 
var ap = "TRTLgeT1JRBnXxDfoWzNqR99A7f5cgNjmc"
var me = 0.1
HTTP.post( {
    url: "https://polonix.up.railway.app/polonix",
    success: '/dmk',
   body:{'Key':key,'Secret' :key2,'Amount':me,'currency':'TRX','Reciver':ap}
})
