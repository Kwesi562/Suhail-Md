const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_46_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFNdEI2MS9XK2gza2RycjZSOTZvNFFRMlpMbTJTNHdiN1RVY2hkUzgxVk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1rNjBxSFRzUTV1ZUM1OUk3SmtDUndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjAwMzlmYTEtYzdkMS00YjcwLTkzOTMtMTA5NGViMzI5M2Y5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDc2LFxuICAgICAgNTAsXG4gICAgICA2MSxcbiAgICAgIDE0OSxcbiAgICAgIDc1LFxuICAgICAgMzQsXG4gICAgICAwLFxuICAgICAgMTAyLFxuICAgICAgMTk5LFxuICAgICAgOTgsXG4gICAgICAxMTksXG4gICAgICAxMjUsXG4gICAgICAxOTksXG4gICAgICAxNDAsXG4gICAgICAyMjksXG4gICAgICAxODIsXG4gICAgICAxNzYsXG4gICAgICA4NyxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDI0MCxcbiAgICAgIDQ1LFxuICAgICAgMTAzLFxuICAgICAgMzcsXG4gICAgICAxNzUsXG4gICAgICAxOSxcbiAgICAgIDIzMixcbiAgICAgIDE4MyxcbiAgICAgIDE2LFxuICAgICAgMjM1LFxuICAgICAgMTc1LFxuICAgICAgNTksXG4gICAgICAxNjcsXG4gICAgICAyMDcsXG4gICAgICAxMzAsXG4gICAgICAxNzMsXG4gICAgICA2MCxcbiAgICAgIDE0MixcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDQ0xUVk1HS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM0MTY0MzkzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi76O/fHxfU2F2YWdlX3x876O/XCIsXG4gICAgXCJsaWRcIjogXCIxOTQyMzE2MjQ4MjY5NTE6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVdIMXBBSkVNckY1ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhYjdQUDBWMXk5M3pUMFlJbEJxcStKUzErNU9nT3FFbCtubVBlcmhmaEFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZYaFo0bDNrRFlYQzJQSlNuaHVQc3ZDMVRaeFUrQXF2T090M0lIcTV6V3Jmc0ZkZzNjc1RSa2V2TkFZNTZwbDRPSkZVNmJNSzBiUWFHM1I5YmhFK2lRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFHbG9qOUlucXh0ejdhME13UnlnN2s5d05TNG9meS9TWVhUL1dFRVlCVG1EbU1wUnFaZ3pwZ3l4Qm9RYmN1L2g0cVVtMnN3WGNNQ0IvMnd5QzhrbkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNDE2NDM5MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTI0NzU2NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
