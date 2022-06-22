/* 
* NOTE 
* You Can Multiply Owner Number By Seperating It With Comma [ , ] And Single Quotes [ ' ]
* Eg : global.owner = ['[Country Code]**********','[Country Code]**********']
* 
*/

const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01',
}

global.owner = ['919744933034'] /* Owner Number */
global.ownernumber = ['919744933034'] /* Owner Number */
global.premium = ['919744933034','918547978854','919778193762'] /* Premium Number */
global.botuser = 'Sachu-Settan' /* Bot Username */
global.botname = 'Hori-Beta' /* Bot Name */
global.ownername = 'Sachu-Settan' /* Owner Name */
global.packname = '💞 ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️' /* Sticker Package Name */
global.author = '🤖 ʀᴏꜱᴇ-ᴍᴡᴏʟ-ᴍᴅ 👻' /* Sticker Pack Author Name */
global.audiofilename= '🤖 ʀᴏꜱᴇ-ᴍᴡᴏʟ-ᴍᴅ 👻'
global.sessionName = 'session' /* Session File Name */
global.prefix = ['.'] /* Prefix */
global.design = '🎈' /* Design */
global.footer = '© Sachu-Settan'/* Footer */
global.ig = 'https://github.com/Sachu-Settan'
global.region = 'India, Kerala'
global.gruplink = 'https://bit.ly/Bot-Zone'
global.sc = 'https://github.com/Sachu-Settan/Hori-Beta'
global.myweb = 'https://github.com/Sachu-Settan/Hori-Beta'
global.botweb = 'https://github.com/Sachu-Settan/Hori-Beta'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin !',
    botAdmin: 'Bot Must Be Admin First !',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups !',
    private: 'Features Used Only For Private Chat !',
    bot: 'This Feature In Only for the Bot Number',
    wait: 'Prossesing....',
    error: 'Error !!',
    servererror: '⚠ Server Error ⚠',
    errorlink: 'Link Invalid !!',
    downerror: 'Download Failed !!',
    igdownloaded: '⚠ Downloaded From Instagram ⚠',
    downfilename: `💞 ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️`,
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}

global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}

global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.thumb = fs.readFileSync('./Bot Pic/Hori-Beta.jpg')

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})