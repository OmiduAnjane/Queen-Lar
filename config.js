const fs = require('fs')
 
const { existsSync } = require('fs')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://queenlara:Dmoa0817.@queenlara.jz3uzcg.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'ominduanjana@gmail.com'
global.github = 'https://github.com/OminduAnjane/Queen-Lara-Md'
global.location = 'Monaragala LK'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94718080458'
global.website = 'https://github.com/OminduAnjane/Queen-Lara-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://github.com/OminduAnjane/Queen-Lora-Md-2.0V/blob/master/loramedia/lora.jpg'
module.exports = {
  botname: process.env.BOT_NAME || 'Queen-Lara-Md',
  ownername:process.env.OWNER_NAME || 'Omindu Anjana',
  sessionName: process.env.SESSION_ID || 'S1I1OTJ_astro_WWlY=',
  author: process.env.PACK_INFO.split(";")[0], 
  packname: process.env.PACK_INFO.split(";")[1],
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  prefix: process.env.PREFIX || ['.' , '$'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'true',
  pmpermit: process.env.PMPERMIT || "false",
  mongodb_url: process.env.MONGODB_URI || "mongodb+srv://queenlara:Dmoa0817.@queenlara.jz3uzcg.mongodb.net/?retryWrites=true&w=majority",
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'kick',
  HEROKU: {
        HEROKU: process.env.HEROKU || `true`,
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
    },
  BRANCH: 'main',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.5' : process.env.VERSION,
 LANG: process.env.THEME|| 'LARALK',
 WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
