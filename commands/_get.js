/*CMD
  command: /get
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

HTTP.get({
url:
    "https://tronu-production.up.railway.app",
  success: "s"})
