//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349126044222";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lVVW53NVYxSWQ5U01ucmpIK0doa1R5UHZRcy91S0RseWduUEI3ZDlVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzlFc0ZlNXRUdUIwbk1VQXViVFZjSFNQYWRsNSt3UGxTVkJoOFpYRHMzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSTVmbDMxdWd6KzFJNzNvMXRldnJLN29lVlgyZHNMbEJzT1V1NXpLOFVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlc2pkU0gwaU0rcDY3VmRZQTdsWk9zWmVILzRyeGxYQnNRRmJKUmRpUHhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLOVpZMmJrOEp2bnB5V09QWkRFQlhxR1FiS0lSREY1RU50VzZZVkI3RWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM2RUEwZktTVlRtMXlxSHFRSmtsRTQxbTA5dkZsNkJQOGlRYTM0clozekk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BFMHpVZnpPQVVZZGZKVVh0cExjV0FxWnoyZVVYRlBwdzdlTWkwekZuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWYxWmRUczRpOTJaT1U4Q0RPTFFzbHFoUGhUQi9ONmRPL2JjT0NIaXlrWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNLNjlRV2pYNzNSOUJEaU12NHpWczZsZSt4T2pLc0VUc2JROFR0L1FFeG5Zemw3SDNWRWxCSVJ6VEhLRTdQNGxXWjlEaWZ1WjNJbFJKRm9oanNBcmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJ4VUt5cUpsa0hsQ1hoOW1xNTl5OHVUSHdFVEdRenhpeWR3ZElCS2xNd1QwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoY1N3OTlhN1NaaUhHb243VEFFbWxRIiwicGhvbmVJZCI6IjcxYTBiYWVmLWU1NGEtNDNjMy04MDE0LTI3MGUxZWVlYjNkNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKVThINlBMVDBBVUthZnFqdTlWNjc1TkNxUGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjZUY2FVaGFDL3hybk1vRk9CVUZyekVLNUswPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJFNExIU1k2IiwibWUiOnsiaWQiOiIyMzQ5MTI2MDQ0MjIyOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXlzdGlxdWUgKEJlc3R5IEZvb2RzKSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2lCaExFRUVLWGlnYllHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaWZQVGF6L2VvK2J0UW9oWW9INFlxbFN2NzFKZFBjL09FOGMvUzRLdVB3RT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaVkxNk95aEFlaHBoZ2pHTFgrVnFiWWRlU0I4VGpXR0JMZ3J5cDZSaStmS0ZGeEMwUjRJRXgxejBTdWIwNWN4ZXROemg2WmZBVjNPK3g5NE10VzhnQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlBwWHU5OUNWM2Vvc2JCMU9kcUovVDNyU0ZtaTVGL0wzdzIva2VyNk1hb0dyOVNkd1ozSTNJdmdGbE9PdGhVdndLZmhKWjNpNmd1QlhoNGU2cncyMGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyNjA0NDIyMjo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlluejAycy8zcVBtN1VLSVdLQitHS3BVcis5U1hUM1B6aFBIUDB1Q3JqOEIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4ODc5MjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSld2In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
