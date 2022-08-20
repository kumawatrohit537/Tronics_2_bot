/*CMD
  command: /settat
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

let msg_id = options.result.message_id;
User.setProperty("adminmsgid" , msg_id,  "integer");
