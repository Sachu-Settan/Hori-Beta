/* 
* NOTE 
* You Can Multiply Owner Number By Seperating It With Comma [ , ] And Single Quotes [ ' ]
* Eg : global.owner = ['[Country Code]**********','[Country Code]**********']
* 
*/

const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', 
}

global.owner = ['919744933034'] /* Owner Number */
global.owner2 = ['919744933034'] /* Owner Number */
global.premium = ['919744933034','918547978854','919778193762'] /* Premium Number */
global.botuser = 'Sachu-Settan' /* Bot Username */
global.botname = 'Hori-Bot-MD' /* Bot Name */
global.ownername = 'Sachu-Settan & Saran' /* Owner Name */
global.packname = '💞 ʜᴏʀɪ-ʙᴏᴛ-ᴍᴅ 🍭\n\n🤖 ʙɪᴛ.ʟy/Bᴏᴛ-Zᴏɴᴇ 🤖' /* Sticker Package Name */
global.author = '💞 ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️\n\n🤖 ʙy ꜱᴀᴄʜᴜ ꜱᴇᴛᴛᴀɴ 👻' /* Sticker Pack Author Name */
global.sessionName = 'session' /* Session File Name */
global.prefix = ['.'] /* Prefix */
global.sp = '⭔' /* Design */
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'Prossesing....',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", /* Premium User Limit */
    free: 100 /* Free User Limit */
}
global.thumb = fs.readFileSync('./Media/Hori.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
