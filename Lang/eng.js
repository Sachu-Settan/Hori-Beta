/*
* You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
* Licenced Under MIT License
* Copyright © 2022 Sachu. Hori Mwol-MD
*/

require ('../config')
require ('../Hori-Beta-MD')
const fs = require('fs');
const chalk = require('chalk');
const os = require('os');
const {
	runtime
} = require('../lib/myfunc')
const speed = require('performance-now');
const moment = require('moment')
const time2 = moment().tz('Asia/Calcutta').format('HH:mm:ss');
if(time2 < "23:59:00"){
var greeting= `Good Night 🌒`
}
if(time2 < "19:00:00"){
var greeting = `Good Night 🌙`
}
if(time2 < "18:00:00"){
var greeting = `Good Afternoon 🌅`
}
if(time2 < "15:00:00"){
var greeting = `Good Afternoon 🌞`
}
if(time2 < "10:00:00"){
var greeting = `Good Morning 🌄`
}
if(time2 < "05:00:00"){
var greeting = `Good Morning 🌅`
}

timestampe = speed();
latensie = speed() - timestampe

exports.Git = (pushname ,prefix) => {
	return `
┌─❖
│「 Git Link 」
└┬❖ 「 𝗥𝗲𝗾𝗲𝘀𝘁𝗲𝗱 𝗕𝘆, ${pushname} ! 」
┌┤✑  ${global.botname} Script Link 
││✑  ${greeting}
│└───────────────┈ ⳹
│
${themeline} 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
${themeline} 𝗥𝘂𝗻 𝗧𝗶𝗺𝗲 : ${runtime(process.uptime())}
${themeline} 𝗧𝗶𝗺𝗲 𝗡𝗼𝘄 : ${time2}
${themeline} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
${themeline} 𝗢𝗻𝘄𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
${themeline} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
${themeline} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
${themeline} 𝗥𝗲𝗽𝗹𝘆 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
${themeline} 𝗟𝗶𝗯 : 𝗕𝗮𝗶𝗹𝗲𝘆𝘀 ^𝟰.𝟭.𝟬
${themeline} 𝗣𝗿𝗲𝗳𝗶𝘅 :「 ${global.prefix} 」 
${themeline} 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : 𝗦𝗮𝗰𝗵𝘂 𝗦𝗲𝘁𝘁𝗮𝗻
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀 : 𝟮𝟬𝟬+
│
└┬────────────────┈ ⳹
 │✑  Please Select The Button Below
 └───────────────────┈ ⳹\n`
}

exports.Alive = (pushname ,prefix) => {
	return `
┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
┌┤✑  ${global.botname} With You Forever 
││✑  ${greeting}
││✑  🖐️!!
│└───────────────┈ ⳹
│ 「 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 」
│
${themeline} 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
${themeline} 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
${themeline} 𝗧𝗶𝗺𝗲 𝗡𝗼𝘄 : ${time2}
${themeline} 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
${themeline} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
${themeline} 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
${themeline} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
${themeline} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.jumlahcmd}
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${global.jumlahharian}
${themeline} 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : 𝗦𝗮𝗰𝗵𝘂 𝗦𝗲𝘁𝘁𝗮𝗻
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀 : 𝟮𝟬𝟬+
│
└┬────────────────┈ ⳹
│✑  Please Select The Button Below
└───────────────────┈ ⳹
`} 

exports.Menu = (pushname ,prefix) => {
	return `
┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
┌┤✑  How Are You? 😄
││✑  ${greeting}
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│
${themeline} 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
${themeline} 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
${themeline} 𝗧𝗶𝗺𝗲 𝗡𝗼𝘄 : ${time2}
${themeline} 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
${themeline} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
${themeline} 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
${themeline} 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : 𝗦𝗮𝗰𝗵𝘂 𝗦𝗲𝘁𝘁𝗮𝗻
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀 : 𝟮𝟬𝟬+
${themeline} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
${themeline} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.jumlahcmd}
${themeline} 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${global.jumlahharian}
│
└┬──────────────┈ ⳹
 │✑  Please Select The Button Below 
 └───────────────┈ ⳹`
}

exports.AllMenu = (prefix) => {
	return `
╔═══════✪「 OWNER 」	
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}antitag
╠ ${prefix}rentbot [add/del]
╠ ${prefix}rentlist
╠ ${prefix}ban [add/del]
╠ ${prefix}banchat [on/off]
╠ ${prefix}join [link]
╠ ${prefix}leavegc
╠ ${prefix}setbio
╠ ${prefix}bcgroup [text]
╠ ${prefix}bcall [text]
╠ ${prefix}bcimage [image]
╠ ${prefix}bcvideo [video]
╠ ${prefix}bcaudio [audio]
╠ ${prefix}bcloc [text]
╠ ${prefix}setppbot [image]
╠ ${prefix}setexif
╠ ${prefix}block [tag/number]
╠ ${prefix}unblock [tag/number]
╠ ${prefix}coowner [add/del]
╠═══════✪「 GROUP 」	        
╠ ${prefix}grousetting
╠ ${prefix}grouplink
╠ ${prefix}ephemeral [option]
╠ ${prefix}setgcpp [image]
╠ ${prefix}setname [text]
╠ ${prefix}setdesc [text]
╠ ${prefix}group 
╠ ${prefix}resetgrouplink
╠ ${prefix}editinfo [option]
╠ ${prefix}add [user]
╠ ${prefix}kick [reply/tag]
╠ ${prefix}hidetag [text]
╠ ${prefix}tagall [text]
╠ ${prefix}antilinkgc [on/off]
╠ ${prefix}antilinktg [on/off]
╠ ${prefix}antilinktt [on/off]
╠ ${prefix}antilinkytch [on/off]
╠ ${prefix}antilinkytvid [on/off]
╠ ${prefix}antilinkig [on/off]
╠ ${prefix}antilinkfb [on/off]
╠ ${prefix}antilinktwit [on/off]
╠ ${prefix}antilinkall [on/off]
╠ ${prefix}antivirus [on/off]
╠ ${prefix}antitoxic [on/off]
╠ ${prefix}antiwame [on/off]
╠ ${prefix}autoreply [on/off]
╠ ${prefix}nsfw [on/off]
╠ ${prefix}promote [reply/tag]
╠ ${prefix}demote [reply/tag]
╠ ${prefix}react [reply emoji]
╠ ${prefix}vote
╠ ${prefix}devote
╠ ${prefix}upvote
╠ ${prefix}checkvote
╠ ${prefix}delvote
╠═══════✪「 MAKER 」
╠ ${prefix}candy
╠ ${prefix}blackpinkneon
╠ ${prefix}deepsea
╠ ${prefix}scifi
╠ ${prefix}fiction
╠ ${prefix}berry
╠ ${prefix}fruitjuice
╠ ${prefix}biscuit
╠ ${prefix}wood
╠ ${prefix}chocolate
╠ ${prefix}matrix
╠ ${prefix}blood
╠ ${prefix}halloween
╠ ${prefix}wicker
╠ ${prefix}darkgold
╠ ${prefix}firework
╠ ${prefix}skeleton
╠ ${prefix}sand
╠ ${prefix}glue
╠ ${prefix}leaves
╠ ${prefix}magma
╠ ${prefix}lava
╠ ${prefix}rock
╠ ${prefix}bloodglas
╠ ${prefix}underwater
╠ ${prefix}textmaker
╠ ${prefix}honey
╠ ${prefix}ice
╠ ${prefix}watercolor
╠ ${prefix}multicolor
╠ ${prefix}snow
╠ ${prefix}harrypot
╠ ${prefix}harrypotter
╠ ${prefix}brokenglass
╠ ${prefix}waterpipe
╠ ${prefix}spooky
╠ ${prefix}circuit
╠ ${prefix}metallic
╠ ${prefix}demon
╠ ${prefix}sparklechristmas
╠ ${prefix}christmas
╠ ${prefix}3dchristmas
╠ ${prefix}3dbox
╠ ${prefix}waterdrop
╠ ${prefix}lion2
╠ ${prefix}papercut
╠ ${prefix}transformer
╠ ${prefix}neondevil
╠ ${prefix}3davengers
╠ ${prefix}3dstone
╠ ${prefix}3dstone2
╠ ${prefix}summertime
╠ ${prefix}thunder
╠ ${prefix}window
╠ ${prefix}graffiti
╠ ${prefix}graffitibike
╠ ${prefix}pornhub
╠ ${prefix}glitch
╠ ${prefix}blackpink
╠ ${prefix}glitch2
╠ ${prefix}glitch3
╠ ${prefix}3dspace
╠ ${prefix}lion
╠ ${prefix}3dneon
╠ ${prefix}greenneon
╠ ${prefix}bokeh
╠ ${prefix}holographic
╠ ${prefix}bear
╠ ${prefix}wolf
╠ ${prefix}joker
╠ ${prefix}dropwater
╠ ${prefix}dropwater2
╠ ${prefix}thewall
╠ ${prefix}neonlight
╠ ${prefix}natural
╠ ${prefix}carbon
╠ ${prefix}pencil
╠ ${prefix}blackpink2
╠ ${prefix}neon
╠ ${prefix}neonlight2
╠ ${prefix}toxic
╠ ${prefix}strawberry
╠ ${prefix}discovery
╠ ${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}collwall
╠ ${prefix}wonderful
╠ ${prefix}cool
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╠═════✪「 DOWNLOAD 」	
╠ ${prefix}instagram [url]
╠ ${prefix}igtv [url]
╠ ${prefix}igstory [username]
╠ ${prefix}facebook [url]
╠ ${prefix}fbmp3 [url]
╠ ${prefix}twitter [url]
╠ ${prefix}twittermp3 [url]
╠ ${prefix}tiktok [url]
╠ ${prefix}tiktokaudio[url]
╠ ${prefix}tiktoknowm [url]
╠ ${prefix}mediafire [url]
╠ ${prefix}ytmp3 [url|quality]
╠ ${prefix}ytmp4 [url|quality]
╠ ${prefix}getmusic [yt link]
╠ ${prefix}getvideo [yt link]
╠ ${prefix}gitclone [repo link]
╠ ${prefix}soundcloud [url]
╠ ${prefix}zippyshare [url]
╠═══════✪「 SEARCH 」	
╠ ${prefix}play [query]
╠ ${prefix}song [query]
╠ ${prefix}yts [query]
╠ ${prefix}lyrics [query]
╠ ${prefix}google [query]
╠ ${prefix}playstore [query]
╠ ${prefix}gimage [query]
╠ ${prefix}pinterest [query]
╠ ${prefix}image [query]
╠ ${prefix}film [query]
╠ ${prefix}wallpaper [query]
╠ ${prefix}searchgc [query]
╠ ${prefix}happymod [query]
╠ ${prefix}servermc
╠ ${prefix}mcpedl [query]
╠ ${prefix}tvsearch [query]
╠ ${prefix}wikimedia [query]
╠ ${prefix}ytsearch [query]
╠ ${prefix}ringtone [query]
╠ ${prefix}webtoon [query]
╠ ${prefix}anime [query]
╠ ${prefix}animestory [query]
╠ ${prefix}manga [query]
╠ ${prefix}wattpad [query]
╠ ${prefix}mcserver [ip|port]
╠ ${prefix}drakor [query]
╠═══════✪「 CONVERT 」
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tourl [reply img]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠ ${prefix}volume [reply aud]
╠ ${prefix}tempo [reply aud]
╠ ${prefix}bass [reply aud]
╠ ${prefix}blown [reply aud]
╠ ${prefix}deep [reply aud]
╠ ${prefix}earrape [reply aud]
╠ ${prefix}fast [reply aud]
╠ ${prefix}fat [reply aud]
╠ ${prefix}nightcore [reply aud]
╠ ${prefix}reverse [reply aud]
╠ ${prefix}robot [reply aud]
╠ ${prefix}slow [reply aud]
╠ ${prefix}squirrel [reply aud]
╠═══════✪「 IMG EFFECT 」
╠ ${prefix}wanted
╠ ${prefix}blur
╠ ${prefix}framed
╠ ${prefix}gayeffect
╠ ${prefix}imagesketch
╠ ${prefix}invert
╠ ${prefix}burn
╠ ${prefix}triggeredwebp
╠ ${prefix}shit
╠ ${prefix}rip
╠ ${prefix}jail
╠ ${prefix}beautifuleffect
╠ ${prefix}deleteeffect
╠ ${prefix}pixelate
╠═══════✪「 RANDOM IMG 」
╠ ${prefix}coffee
╠ ${prefix}bts
╠ ${prefix}woof
╠ ${prefix}meow
╠ ${prefix}lizard
╠ ${prefix}wallneon
╠ ${prefix}wallpubg
╠ ${prefix}wallml
╠ ${prefix}wallrandom
╠ ${prefix}wallcode
╠ ${prefix}animewall [query]
╠ ${prefix}animewall2 [query]
╠═══════✪「 EMOTE 」
╠ ${prefix}instagramemoji
╠ ${prefix}facebookemoji
╠ ${prefix}iphoneemoji
╠ ${prefix}samsungemoji
╠ ${prefix}joyemoji
╠ ${prefix}skypeemoji
╠ ${prefix}twitteremoji
╠ ${prefix}whatsappemoji
╠ ${prefix}microsoftemoji
╠ ${prefix}googleemoji
╠ ${prefix}pediaemoji
╠ ${prefix}microsoftemoji
╠═══════✪「 ANIME 」
╠ ${prefix}naruto
╠ ${prefix}yaoi
╠ ${prefix}neko2
╠ ${prefix}waifu
╠ ${prefix}waifu2
╠ ${prefix}awoo2
╠ ${prefix}shinobu
╠ ${prefix}waifu3
╠ ${prefix}foxgirl
╠ ${prefix}megumin2
╠ ${prefix}loli
╠ ${prefix}8ball
╠ ${prefix}animenom
╠ ${prefix}goose
╠ ${prefix}avatar
╠ ${prefix}tickle
╠ ${prefix}gecg
╠ ${prefix}feed
╠ ${prefix}animeslap
╠ ${prefix}animespank
╠ ${prefix}animepat
╠ ${prefix}animeneko
╠ ${prefix}animekiss
╠ ${prefix}animewlp
╠ ${prefix}animecuddle
╠ ${prefix}animecry
╠ ${prefix}animekill
╠ ${prefix}animelick
╠ ${prefix}animebite
╠ ${prefix}animeyeet
╠ ${prefix}animebully
╠ ${prefix}animebonk
╠ ${prefix}animewink
╠ ${prefix}animepoke
╠ ${prefix}animesmile
╠ ${prefix}animewave
╠ ${prefix}animeawoo
╠ ${prefix}animeblush
╠ ${prefix}animesmug
╠ ${prefix}animeglomp
╠ ${prefix}animehappy
╠ ${prefix}animedance
╠ ${prefix}animecringe
╠ ${prefix}animehighfive
╠ ${prefix}animehandhold
╠ ${prefix}animemegumin
╠ ${prefix}smug2
╠ ${prefix}couplepp
╠══════✪「 STICKER 」
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}attp
╠ ${prefix}ttp
╠ ${prefix}doge
╠ ${prefix}lovesticker
╠════✪「 ANIME STICKER 」
╠ ${prefix}loli
╠ ${prefix}bully
╠ ${prefix}cuddle
╠ ${prefix}cry
╠ ${prefix}hug
╠ ${prefix}awoo
╠ ${prefix}kiss
╠ ${prefix}lick
╠ ${prefix}pat
╠ ${prefix}smug
╠ ${prefix}bonk
╠ ${prefix}yeet
╠ ${prefix}blush
╠ ${prefix}smile
╠ ${prefix}wave
╠ ${prefix}highfive
╠ ${prefix}handhold
╠ ${prefix}nom
╠ ${prefix}glomp
╠ ${prefix}bite
╠ ${prefix}slap
╠ ${prefix}kill
╠ ${prefix}happy
╠ ${prefix}wink
╠ ${prefix}poke
╠ ${prefix}dance
╠ ${prefix}cringe
╠ ${prefix}neko
╠ ${prefix}gura
╠═══════✪「 NSFW 」
╠ ${prefix}hentaivideo
╠ ${prefix}yuri
╠ ${prefix}masturbation
╠ ${prefix}thighs
╠ ${prefix}pussy
╠ ${prefix}panties
╠ ${prefix}orgy
╠ ${prefix}ahegao
╠ ${prefix}ass
╠ ${prefix}bdsm
╠ ${prefix}blowjob
╠ ${prefix}cuckold
╠ ${prefix}ero
╠ ${prefix}gasm
╠ ${prefix}cum
╠ ${prefix}femdom
╠ ${prefix}foot
╠ ${prefix}gangbang
╠ ${prefix}glasses
╠ ${prefix}jahy
╠ ${prefix}trap
╠ ${prefix}blowjobgif
╠ ${prefix}spank
╠ ${prefix}hneko
╠ ${prefix}nwaifu
╠═══════✪「 FUN 」
╠ ${prefix}how [text
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}wangy [text]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}mysoulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╠══════✪「 SOUND 」
╠ ${prefix}sound1
╠ ${prefix}sound2
╠ ${prefix}sound3
╠ ${prefix}sound4
╠ ${prefix}sound5
╠ ${prefix}sound6
╠ ${prefix}sound7
╠ ${prefix}sound8
╠ ${prefix}sound9
╠ ${prefix}sound10
╠ ${prefix}sound11
╠ ${prefix}sound12
╠ ${prefix}sound13
╠ ${prefix}sound14
╠ ${prefix}sound15
╠ ${prefix}sound16
╠ ${prefix}sound17
╠ ${prefix}sound18
╠ ${prefix}sound19
╠ ${prefix}sound20
╠ ${prefix}sound21
╠ ${prefix}sound22
╠ ${prefix}sound23
╠ ${prefix}sound24
╠ ${prefix}sound25
╠ ${prefix}sound26
╠ ${prefix}sound27
╠ ${prefix}sound28
╠ ${prefix}sound29
╠ ${prefix}sound30
╠ ${prefix}sound31
╠ ${prefix}sound32
╠ ${prefix}sound33
╠ ${prefix}sound34
╠ ${prefix}sound35
╠ ${prefix}sound36
╠ ${prefix}sound37
╠ ${prefix}sound38
╠ ${prefix}sound39
╠ ${prefix}sound40
╠ ${prefix}sound41
╠ ${prefix}sound42
╠ ${prefix}sound43
╠ ${prefix}sound44
╠ ${prefix}sound45
╠ ${prefix}sound46
╠ ${prefix}sound47
╠ ${prefix}sound48
╠ ${prefix}sound49
╠ ${prefix}sound50
╠ ${prefix}sound51
╠ ${prefix}sound52
╠ ${prefix}sound53
╠ ${prefix}sound54
╠ ${prefix}sound55
╠ ${prefix}sound56
╠ ${prefix}sound57
╠ ${prefix}sound58
╠ ${prefix}sound59
╠ ${prefix}sound60
╠ ${prefix}sound61
╠ ${prefix}sound62
╠ ${prefix}sound63
╠ ${prefix}sound64
╠ ${prefix}sound65
╠ ${prefix}sound66
╠ ${prefix}sound67
╠ ${prefix}sound68
╠ ${prefix}sound69
╠ ${prefix}sound70
╠ ${prefix}sound71
╠ ${prefix}sound72
╠ ${prefix}sound73
╠ ${prefix}sound74
╠ ${prefix}sound75
╠ ${prefix}sound76
╠ ${prefix}sound77
╠ ${prefix}sound78
╠ ${prefix}sound79
╠ ${prefix}sound80
╠ ${prefix}sound81
╠ ${prefix}sound82
╠ ${prefix}sound83
╠ ${prefix}sound84
╠ ${prefix}sound85
╠ ${prefix}sound86
╠ ${prefix}sound87
╠ ${prefix}sound88
╠ ${prefix}sound89
╠ ${prefix}sound90
╠ ${prefix}sound91
╠ ${prefix}sound92
╠ ${prefix}sound93
╠ ${prefix}sound94
╠ ${prefix}sound95
╠ ${prefix}sound96
╠ ${prefix}sound97
╠ ${prefix}sound98
╠ ${prefix}sound99
╠ ${prefix}sound100
╠ ${prefix}sound101
╠ ${prefix}sound102
╠ ${prefix}sound103
╠ ${prefix}sound104
╠ ${prefix}sound105
╠ ${prefix}sound106
╠ ${prefix}sound107
╠ ${prefix}sound108
╠ ${prefix}sound109
╠ ${prefix}sound110
╠ ${prefix}sound111
╠ ${prefix}sound112
╠ ${prefix}sound113
╠ ${prefix}sound114
╠ ${prefix}sound115
╠ ${prefix}sound116
╠ ${prefix}sound117
╠ ${prefix}sound118
╠ ${prefix}sound119
╠ ${prefix}sound120
╠ ${prefix}sound121
╠ ${prefix}sound122
╠ ${prefix}sound123
╠ ${prefix}sound124
╠ ${prefix}sound125
╠ ${prefix}sound126
╠ ${prefix}sound127
╠ ${prefix}sound128
╠ ${prefix}sound129
╠ ${prefix}sound130
╠ ${prefix}sound131
╠ ${prefix}sound132
╠ ${prefix}sound133
╠ ${prefix}sound134
╠ ${prefix}sound135
╠ ${prefix}sound136
╠ ${prefix}sound137
╠ ${prefix}sound138
╠ ${prefix}sound139
╠ ${prefix}sound140
╠ ${prefix}sound141
╠ ${prefix}sound142
╠ ${prefix}sound143
╠ ${prefix}sound144
╠ ${prefix}sound145
╠ ${prefix}sound146
╠ ${prefix}sound147
╠ ${prefix}sound148
╠ ${prefix}sound149
╠ ${prefix}sound150
╠ ${prefix}sound151
╠ ${prefix}sound152
╠ ${prefix}sound153
╠ ${prefix}sound154
╠ ${prefix}sound155
╠ ${prefix}sound156
╠ ${prefix}sound157
╠ ${prefix}sound158
╠ ${prefix}sound159
╠ ${prefix}sound160
╠ ${prefix}sound161
╠══════✪「 GAME 」
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╠══✪「 ANONYMOUS CHAT 」
╠ ${prefix}anonymous
╠ ${prefix}start
╠ ${prefix}next
╠ ${prefix}leave
╠══════✪「 TOOL 」
╠ ${prefix}translate [text]
╠ ${prefix}fliptext [text]
╠ ${prefix}toletter [number]
╠══════✪「 DATABASE 」
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╠══════✪「 lNDO 」
╠ ${prefix}darkjoke
╠ ${prefix}quotes
╠ ${prefix}animequotes
╠ ${prefix}jalantikus-meme
╠ ${prefix}merdeka-news 
╠ ${prefix}kontan-news 
╠ ${prefix}cnbc-news 
╠ ${prefix}tribun-news 
╠ ${prefix}indozone-news 
╠ ${prefix}kompas-news 
╠ ${prefix}detik-news 
╠ ${prefix}daily-news 
╠ ${prefix}inews-news 
╠ ${prefix}okezone-news 
╠ ${prefix}sindo-news 
╠ ${prefix}tempo-news 
╠ ${prefix}antara-news 
╠ ${prefix}cnn-news 
╠ ${prefix}fajar-news 
╠ ${prefix}cinemaschedule
╠ ${prefix}wiki
╠ ${prefix}covidindo
╠ ${prefix}earthquake
╠ ${prefix}tvschedule
╠══════✪「 INDO HSCOPE 」
╠ ${prefix}nomorhoki
╠ ${prefix}artimimpi 
╠ ${prefix}artinama 
╠ ${prefix}ramaljodoh 
╠ ${prefix}ramaljodohbali 
╠ ${prefix}suamiistri 
╠ ${prefix}ramalcinta 
╠ ${prefix}cocoknama 
╠ ${prefix}pasangan 
╠ ${prefix}jadiannikah 
╠ ${prefix}sifatusaha 
╠ ${prefix}rezeki 
╠ ${prefix}pekerjaan 
╠ ${prefix}nasib 
╠ ${prefix}penyakit 
╠ ${prefix}tarot 
╠ ${prefix}fengshui 
╠ ${prefix}haribaik 
╠ ${prefix}harisangar 
╠ ${prefix}harisial
╠ ${prefix}nagahari
╠ ${prefix}arahrezeki
╠ ${prefix}peruntungan 
╠ ${prefix}weton 
╠ ${prefix}karakter
╠ ${prefix}keberuntungan
╠ ${prefix}memancing
╠ ${prefix}masasubur
╠ ${prefix}zodiak
╠ ${prefix}shio
╠══════✪「 OTHER 」
╠ ${prefix}afk
╠ ${prefix}readmore [text]
╠ ${prefix}toviewonce
╠ ${prefix}chatinfo
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}speedtest
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}chatinfo
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╚═════════════✪
`
}

exports.MainMenu = (pushname ,prefix) => {
	return `
┏━「 ${global.botname} 」━━⭓ 
┃╔═══════✪「 MAIN 」
┃╠ ${prefix}alive
┃╠ ${prefix}script
┃╠ ${prefix}speedtest
┃╠ ${prefix}ping
┃╠ ${prefix}owner
┃╠ ${prefix}menu
┃╠ ${prefix}delete
┃╠ ${prefix}chatinfo
┃╠ ${prefix}quoted
┃╠ ${prefix}listpc
┃╠ ${prefix}listgc
┃╠ ${prefix}donate
┃╠ ${prefix}report [bug]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`
}

exports.GroupMenu = (pushname ,prefix) => {
	return ` 
╔═══════✪「 GROUP 」	
╠ ${prefix}groupsetting
╠ ${prefix}grouplink
╠ ${prefix}ephemeral [option]
╠ ${prefix}setgcpp [image]
╠ ${prefix}setname [text]
╠ ${prefix}setdesc [text]
╠ ${prefix}group
╠ ${prefix}botgroups
╠ ${prefix}resetgrouplink
╠ ${prefix}editinfo [option]
╠ ${prefix}add [user]
╠ ${prefix}kick [reply/tag]
╠ ${prefix}hidetag [text]
╠ ${prefix}tagall [text]
╠ ${prefix}autosticker [on/off]
╠ ${prefix}autostickerpc [on/off]
╠ ${prefix}leveling [on/off]
╠ ${prefix}antilinkgc [on/off]
╠ ${prefix}antilinktg [on/off]
╠ ${prefix}antilinktt [on/off]
╠ ${prefix}antilinkytch [on/off]
╠ ${prefix}antilinkytvid [on/off]
╠ ${prefix}antilinkig [on/off]
╠ ${prefix}antilinkfb [on/off]
╠ ${prefix}antilinktwit [on/off]
╠ ${prefix}antilinkall [on/off]
╠ ${prefix}antivirus [on/off]
╠ ${prefix}antitoxic [on/off]
╠ ${prefix}antiwame [on/off]
╠ ${prefix}autorevoke [on/off]
╠ ${prefix}nsfw [on/off]
╠ ${prefix}mute [on/off]
╠ ${prefix}promote [reply/tag]
╠ ${prefix}demote [reply/tag]
╠ ${prefix}react [reply emoji]
╠ ${prefix}getpp [reply user]
╠ ${prefix}vote
╠ ${prefix}devote
╠ ${prefix}upvote
╠ ${prefix}checkvote
╠ ${prefix}delvote
╠ ${prefix}checkrent
╚═════════════✪`
}

exports.RpgMenu = (pushname ,prefix) => {
	return ` 
╔═══════✪「 RPG 」	
╠ ${prefix}hunt
╠ ${prefix}mine
╠ ${prefix}fish
╠ ${prefix}heal
╠ ${prefix}blood
╠ ${prefix}stab
╠ ${prefix}buy
╠ ${prefix}sell
╠ ${prefix}profile
╠ ${prefix}inventory
╠ ${prefix}leaderboard
╚═════════════✪`
}

exports.MakerMenu = (pushname, prefix) =>{
	return `
╔═══════✪「 MAKER 」	
╠ ${prefix}candy
╠ ${prefix}8bit
╠ ${prefix}horror
╠ ${prefix}hoorror
╠ ${prefix}retro
╠ ${prefix}blackpinkneon
╠ ${prefix}deepsea
╠ ${prefix}scifi
╠ ${prefix}fiction
╠ ${prefix}berry
╠ ${prefix}fruitjuice
╠ ${prefix}biscuit
╠ ${prefix}wood
╠ ${prefix}chocolate
╠ ${prefix}matrix
╠ ${prefix}blood
╠ ${prefix}halloween
╠ ${prefix}wicker
╠ ${prefix}darkgold
╠ ${prefix}firework
╠ ${prefix}skeleton
╠ ${prefix}sand
╠ ${prefix}glue
╠ ${prefix}leaves
╠ ${prefix}magma
╠ ${prefix}lava
╠ ${prefix}rock
╠ ${prefix}bloodglas
╠ ${prefix}underwater
╠ ${prefix}textmaker
╠ ${prefix}honey
╠ ${prefix}ice
╠ ${prefix}watercolor
╠ ${prefix}multicolor
╠ ${prefix}snow
╠ ${prefix}harrypot
╠ ${prefix}harrypotter
╠ ${prefix}brokenglass
╠ ${prefix}waterpipe
╠ ${prefix}spooky
╠ ${prefix}circuit
╠ ${prefix}metallic
╠ ${prefix}demon
╠ ${prefix}sparklechristmas
╠ ${prefix}christmas
╠ ${prefix}3dchristmas
╠ ${prefix}3dbox
╠ ${prefix}waterdrop
╠ ${prefix}lion2
╠ ${prefix}papercut
╠ ${prefix}transformer
╠ ${prefix}neondevil
╠ ${prefix}3davengers
╠ ${prefix}3dstone
╠ ${prefix}3dstone2
╠ ${prefix}summertime
╠ ${prefix}thunder
╠ ${prefix}window
╠ ${prefix}graffiti
╠ ${prefix}graffitibike
╠ ${prefix}pornhub
╠ ${prefix}glitch
╠ ${prefix}blackpink
╠ ${prefix}glitch2
╠ ${prefix}glitch3
╠ ${prefix}3dspace
╠ ${prefix}lion
╠ ${prefix}3dneon
╠ ${prefix}greenneon
╠ ${prefix}bokeh
╠ ${prefix}holographic
╠ ${prefix}bear
╠ ${prefix}wolf
╠ ${prefix}joker
╠ ${prefix}dropwater
╠ ${prefix}dropwater2
╠ ${prefix}thewall
╠ ${prefix}neonlight
╠ ${prefix}natural
╠ ${prefix}carbon
╠ ${prefix}pencil
╠ ${prefix}blackpink2
╠ ${prefix}neon
╠ ${prefix}neonlight2
╠ ${prefix}toxic
╠ ${prefix}strawberry
╠ ${prefix}discovery
╠ ${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}collwall
╠ ${prefix}wonderful
╠ ${prefix}cool
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╚═════════════✪	
`
}

exports.FunMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 Fun 」	
╠ ${prefix}how [text
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}wangy [text]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}mysoulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╚═════════════✪
`
}

exports.OwnerMenu = (pushname, prefix) => {
	return `
┏━「 ${global.botname} 」━━⭓ 
┃╔═══════✪「 OWNER 」	        
┃╠ ${prefix}grouplink
┃╠ ${prefix}ephemeral [option]
┃╠ ${prefix}setgcpp [image]
┃╠ ${prefix}setname [text]
┃╠ ${prefix}setdesc [text]
┃╠ ${prefix}group [text]
┃╠ ${prefix}editinfo [option]
┃╠ ${prefix}add [user]
┃╠ ${prefix}kick [reply/tag]
┃╠ ${prefix}hidetag [text]
┃╠ ${prefix}tagall [text]
┃╠ ${prefix}antilink [on/off]
┃╠ ${prefix}mute [on/off]
┃╠ ${prefix}promote [reply/tag]
┃╠ ${prefix}demote [reply/tag]
┃╠ ${prefix}vote
┃╠ ${prefix}devote
┃╠ ${prefix}upvote
┃╠ ${prefix}checkvote
┃╠ ${prefix}delvote
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`
}

exports.DownloaderMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 DOWNLOAD 」	
╠ ${prefix}instagram [url]
╠ ${prefix}igtv [url]
╠ ${prefix}igstory [username]
╠ ${prefix}facebook [url]
╠ ${prefix}fbmp3 [url]
╠ ${prefix}twitter [url]
╠ ${prefix}twittermp3 [url]
╠ ${prefix}tiktok [url]
╠ ${prefix}tiktokaudio [url]
╠ ${prefix}tiktoknowm [url]
╠ ${prefix}instagram [url]
╠ ${prefix}igstory [url]
╠ ${prefix}mediafire [url]
╠ ${prefix}ytmp3 [url|quality]
╠ ${prefix}ytmp4 [url|quality]
╠ ${prefix}getmusic [yt link]
╠ ${prefix}getvideo [yt link]
╠ ${prefix}gitclone [repo link]
╠ ${prefix}soundcloud [url]
╠ ${prefix}zippyshare [url]
╚═════════════✪
`
}

exports.SearchMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 SEARCH 」	
╠ ${prefix}play [query]
╠ ${prefix}song [query]
╠ ${prefix}yts [query]
╠ ${prefix}lyrics [query]
╠ ${prefix}google [query]
╠ ${prefix}gimage [query]
╠ ${prefix}pinterest [query]
╠ ${prefix}image [query]
╠ ${prefix}film [query]
╠ ${prefix}playstore [query]
╠ ${prefix}wallpaper [query]
╠ ${prefix}searchgc [query]
╠ ${prefix}happymod [query]
╠ ${prefix}servermc
╠ ${prefix}mcpedl [query]
╠ ${prefix}tvsearch [query]
╠ ${prefix}wikimedia [query]
╠ ${prefix}ytsearch [query]
╠ ${prefix}ringtone [query]
╠ ${prefix}webtoon [query]
╠ ${prefix}anime [query]
╠ ${prefix}manga [query]
╠ ${prefix}wattpad [query]
╠ ${prefix}mcserver [ip|port]
╠ ${prefix}drakor [query]
╚═════════════✪`
}

exports.IndoMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 INDO 」	
╠ ${prefix}darkjoke
╠ ${prefix}quotes
╠ ${prefix}animequotes
╠ ${prefix}jalantikus-meme
╠ ${prefix}merdeka-news 
╠ ${prefix}kontan-news 
╠ ${prefix}cnbc-news 
╠ ${prefix}tribun-news 
╠ ${prefix}indozone-news 
╠ ${prefix}kompas-news 
╠ ${prefix}detik-news 
╠ ${prefix}daily-news 
╠ ${prefix}inews-news 
╠ ${prefix}okezone-news 
╠ ${prefix}sindo-news 
╠ ${prefix}tempo-news 
╠ ${prefix}antara-news 
╠ ${prefix}cnn-news 
╠ ${prefix}fajar-news 
╠ ${prefix}friendshipshortstory
╠ ${prefix}loveshortstory
╠ ${prefix}sacrificeshortstory
╠ ${prefix}disturbingshortstory
╠ ${prefix}islamicshortstory
╠ ${prefix}cinemaschedule
╠ ${prefix}nowplayingcinema
╠ ${prefix}amino
╠ ${prefix}wiki
╠ ${prefix}covidindo
╠ ${prefix}earthquake
╠ ${prefix}tvschedule
╚═════════════✪
`
}

exports.RandomPicMenu = (pushname ,prefix) =>{
	return `
╔═══════✪「 RANDOM IMG 」	
╠ ${prefix}coffee
╠ ${prefix}bts
╠ ${prefix}woof
╠ ${prefix}meow
╠ ${prefix}lizard
╠ ${prefix}wallneon
╠ ${prefix}wallpubg
╠ ${prefix}wallml
╠ ${prefix}wallrandom
╠ ${prefix}wallcode
╠ ${prefix}animewall [query]
╠ ${prefix}animewall2 [query]
╚═════════════✪
`
}

exports.RandomMenu = (pushname ,prefix) => {
	return `
┏━「 ${global.botname} 」━━⭓ 
┃╔═══════✪「 RANDOM 」	        
┃╠ ${prefix}coffee
┃╠ ${prefix}animequote (indo)
┃╠ ${prefix}couplepp
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`
}

exports.StickerMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 STICKER 」	
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}attp
╠ ${prefix}ttp
╠ ${prefix}doge
╠ ${prefix}lovesticker
╚═════════════✪
`
}

exports.AnimeStickerMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 ANIME STICKER 」	
╠ ${prefix}loli
╠ ${prefix}bully
╠ ${prefix}cuddle
╠ ${prefix}cry
╠ ${prefix}hug
╠ ${prefix}awoo
╠ ${prefix}kiss
╠ ${prefix}lick
╠ ${prefix}pat
╠ ${prefix}smug
╠ ${prefix}bonk
╠ ${prefix}yeet
╠ ${prefix}blush
╠ ${prefix}smile
╠ ${prefix}wave
╠ ${prefix}highfive
╠ ${prefix}handhold
╠ ${prefix}nom
╠ ${prefix}glomp
╠ ${prefix}bite
╠ ${prefix}slap
╠ ${prefix}kill
╠ ${prefix}happy
╠ ${prefix}wink
╠ ${prefix}poke
╠ ${prefix}dance
╠ ${prefix}cringe
╠ ${prefix}neko
╠ ${prefix}gura
╚═════════════✪	
`
}

exports.AnimeMenu = (pushname ,prefix) => {
	return `	
╔═══════✪「 ANIME 」	
╠ ${prefix}naruto
╠ ${prefix}yaoi
╠ ${prefix}neko2
╠ ${prefix}waifu
╠ ${prefix}waifu3
╠ ${prefix}shinobu
╠ ${prefix}awoo2
╠ ${prefix}waifu2
╠ ${prefix}foxgirl
╠ ${prefix}animenom
╠ ${prefix}goose
╠ ${prefix}8ball
╠ ${prefix}avatar
╠ ${prefix}tickle
╠ ${prefix}gecg
╠ ${prefix}feed
╠ ${prefix}animeslap
╠ ${prefix}animespank
╠ ${prefix}animepat
╠ ${prefix}animeneko
╠ ${prefix}animekiss
╠ ${prefix}animewlp
╠ ${prefix}animecuddle
╠ ${prefix}animecry
╠ ${prefix}animekill
╠ ${prefix}animelick
╠ ${prefix}animebite
╠ ${prefix}animeyeet
╠ ${prefix}animebully
╠ ${prefix}animebonk
╠ ${prefix}animewink
╠ ${prefix}animepoke
╠ ${prefix}animesmile
╠ ${prefix}animewave
╠ ${prefix}animeawoo
╠ ${prefix}animeblush
╠ ${prefix}animesmug
╠ ${prefix}animeglomp
╠ ${prefix}animehappy
╠ ${prefix}animedance
╠ ${prefix}animecringe
╠ ${prefix}animehighfive
╠ ${prefix}animehandhold
╠ ${prefix}animemegumin
╠ ${prefix}megumin2
╠ ${prefix}loli
╠ ${prefix}couplepp
╚═════════════✪
`
}

exports.NSFWMenu = (pushname ,prefix) =>{
	return `
╔═══════✪「 NSFW 」	
╠ ${prefix}hentaivideo
╠ ${prefix}yuri
╠ ${prefix}masturbation
╠ ${prefix}thighs
╠ ${prefix}pussy
╠ ${prefix}panties
╠ ${prefix}orgy
╠ ${prefix}ahegao
╠ ${prefix}ass
╠ ${prefix}bdsm
╠ ${prefix}blowjob
╠ ${prefix}cuckold
╠ ${prefix}ero
╠ ${prefix}gasm
╠ ${prefix}cum
╠ ${prefix}femdom
╠ ${prefix}foot
╠ ${prefix}gangbang
╠ ${prefix}glasses
╠ ${prefix}jahy
╠ ${prefix}trap
╠ ${prefix}blowjobgif
╠ ${prefix}spank
╠ ${prefix}hneko
╠ ${prefix}nwaifu
╚═════════════✪	
`
}

exports.TextProMenu = (pushname ,prefix) => {
	return `
┏━「 ${global.botname} 」━━⭓ 
┃╔═════✪「 TEXT PRO 」	        
┃╠ ${prefix}3dchristmas [txt]
┃╠ ${prefix}3ddeepsea [txt]
┃╠ ${prefix}americanflag [txt]
┃╠ ${prefix}3dscifi [txt]
┃╠ ${prefix}3drainbow [txt]
┃╠ ${prefix}3dwaterpipe [txt]
┃╠ ${prefix}halloweenskeleton [txt]
┃╠ ${prefix}sketch [txt]
┃╠ ${prefix}bluecircuit [txt]
┃╠ ${prefix}space [txt]
┃╠ ${prefix}metallic [txt]
┃╠ ${prefix}fiction [txt]
┃╠ ${prefix}greenhorror [txt]
┃╠ ${prefix}transformer [txt]
┃╠ ${prefix}berry [txt]
┃╠ ${prefix}thunder [txt]
┃╠ ${prefix}magma [txt]
┃╠ ${prefix}3dcrackedstone [txt]
┃╠ ${prefix}3dneonlight [txt]
┃╠ ${prefix}impressiveglitch [txt]
┃╠ ${prefix}naturalleaves [txt]
┃╠ ${prefix}fireworksparkle [txt]
┃╠ ${prefix}matrix [txt]
┃╠ ${prefix}dropwater [txt]
┃╠ ${prefix}harrypotter [txt]
┃╠ ${prefix}foggywindow [txt]
┃╠ ${prefix}neondevils [txt]
┃╠ ${prefix}christmasholiday [txt]
┃╠ ${prefix}3dgradient [txt]
┃╠ ${prefix}blackpink [txt]
┃╠ ${prefix}gluetext [txt]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`
}

exports.EmoteMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 EMOTE 」	
╠ ${prefix}instagramemoji
╠ ${prefix}facebookemoji
╠ ${prefix}iphoneemoji
╠ ${prefix}samsungemoji
╠ ${prefix}joyemoji
╠ ${prefix}skypeemoji
╠ ${prefix}twitteremoji
╠ ${prefix}whatsappemoji
╠ ${prefix}microsoftemoji
╠ ${prefix}googleemoji
╠ ${prefix}pediaemoji
╠ ${prefix}microsoftemoji
╚═════════════✪
`
}

exports.ImgEffectMenu = (pushname ,prefix) => {
	return `
╔═════✪「 IMG EFFECT 」	
╠ ${prefix}wanted
╠ ${prefix}blur
╠ ${prefix}framed
╠ ${prefix}gayeffect
╠ ${prefix}imagesketch
╠ ${prefix}invert
╠ ${prefix}burn
╠ ${prefix}triggeredwebp
╠ ${prefix}shit
╠ ${prefix}rip
╠ ${prefix}jail
╠ ${prefix}beautifuleffect
╠ ${prefix}deleteeffect
╠ ${prefix}pixelate
╚═════════════✪
`
}

exports.ConvertMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 CONVERT 」	
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tourl [reply img]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠ ${prefix}volume [reply aud]
╠ ${prefix}tempo [reply aud]
╠ ${prefix}bass [reply aud]
╠ ${prefix}blown [reply aud]
╠ ${prefix}deep [reply aud]
╠ ${prefix}earrape [reply aud]
╠ ${prefix}fast [reply aud]
╠ ${prefix}fat [reply aud]
╠ ${prefix}nightcore [reply aud]
╠ ${prefix}reverse [reply aud]
╠ ${prefix}robot [reply aud]
╠ ${prefix}slow [reply aud]
╠ ${prefix}squirrel [reply aud]
╚═════════════✪`
}

exports.GameMenu = (pushname ,prefix) => {
	return ` 
╔═══════✪「 GAME 」	
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╚═════════════✪`
}

exports.ToolMenu = (prefix ,pushname) => {
	return `
╔═══════✪「 TOOL 」	
╠ ${prefix}translate [text]
╠ ${prefix}fliptext [text]
╠ ${prefix}toletter [number]
╚═════════════✪
	`
}

exports.DataMenu = (pushname ,prefix) => {
	return `
╔═══✪「 DATABASE 」	
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╚═════════════✪
`
}

exports.AmogusMenu = (pushname ,prefix) => {
	return `
┏━「 ${global.botname} 」━━⭓ 
┃╔══✪「 ANONYMOUS CHAT 」	        
┃╠ ${prefix}anonymous
┃╠ ${prefix}start
┃╠ ${prefix}next
┃╠ ${prefix}leave
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`
}

exports.IndoHoroScopeMenu = (pushname ,prefix) => {
	return `
╔═✪「 INDO HOROSCOPE 」	
╠ ${prefix}nomorhoki
╠ ${prefix}artimimpi 
╠ ${prefix}artinama 
╠ ${prefix}ramaljodoh 
╠ ${prefix}ramaljodohbali 
╠ ${prefix}suamiistri 
╠ ${prefix}ramalcinta 
╠ ${prefix}cocoknama 
╠ ${prefix}pasangan 
╠ ${prefix}jadiannikah 
╠ ${prefix}sifatusaha 
╠ ${prefix}rezeki 
╠ ${prefix}pekerjaan 
╠ ${prefix}nasib 
╠ ${prefix}penyakit 
╠ ${prefix}tarot 
╠ ${prefix}fengshui 
╠ ${prefix}haribaik 
╠ ${prefix}harisangar 
╠ ${prefix}harisial
╠ ${prefix}nagahari
╠ ${prefix}arahrezeki
╠ ${prefix}peruntungan 
╠ ${prefix}weton 
╠ ${prefix}karakter
╠ ${prefix}keberuntungan
╠ ${prefix}memancing
╠ ${prefix}masasubur
╠ ${prefix}zodiak
╠ ${prefix}shio
╚═════════════✪
	`
}

exports.EFXMenu = (pushname ,prefix) => {
	return `
┏━「 ${global.botname} 」━━⭓ 
┃╔═════✪「 EFX 」	
┃╠ ${prefix}efx1
┃╠ ${prefix}efx10
┃╠ ${prefix}efx100
┃╠ ${prefix}efx101
┃╠ ${prefix}efx102
┃╠ ${prefix}efx103
┃╠ ${prefix}efx104
┃╠ ${prefix}efx105
┃╠ ${prefix}efx106
┃╠ ${prefix}efx107
┃╠ ${prefix}efx108
┃╠ ${prefix}efx109
┃╠ ${prefix}efx11
┃╠ ${prefix}efx110
┃╠ ${prefix}efx111
┃╠ ${prefix}efx112
┃╠ ${prefix}efx113
┃╠ ${prefix}efx114
┃╠ ${prefix}efx115
┃╠ ${prefix}efx116
┃╠ ${prefix}efx117
┃╠ ${prefix}efx118
┃╠ ${prefix}efx119
┃╠ ${prefix}efx12
┃╠ ${prefix}efx120
┃╠ ${prefix}efx121
┃╠ ${prefix}efx122
┃╠ ${prefix}efx123
┃╠ ${prefix}efx124
┃╠ ${prefix}efx125
┃╠ ${prefix}efx126
┃╠ ${prefix}efx127
┃╠ ${prefix}efx128
┃╠ ${prefix}efx129
┃╠ ${prefix}efx13
┃╠ ${prefix}efx130
┃╠ ${prefix}efx131
┃╠ ${prefix}efx132
┃╠ ${prefix}efx133
┃╠ ${prefix}efx134
┃╠ ${prefix}efx135
┃╠ ${prefix}efx136
┃╠ ${prefix}efx137
┃╠ ${prefix}efx138
┃╠ ${prefix}efx139
┃╠ ${prefix}efx14
┃╠ ${prefix}efx140
┃╠ ${prefix}efx141
┃╠ ${prefix}efx142
┃╠ ${prefix}efx143
┃╠ ${prefix}efx144
┃╠ ${prefix}efx145
┃╠ ${prefix}efx146
┃╠ ${prefix}efx147
┃╠ ${prefix}efx148
┃╠ ${prefix}efx149
┃╠ ${prefix}efx15
┃╠ ${prefix}efx150
┃╠ ${prefix}efx151
┃╠ ${prefix}efx152
┃╠ ${prefix}efx154
┃╠ ${prefix}efx155
┃╠ ${prefix}efx156
┃╠ ${prefix}efx157
┃╠ ${prefix}efx158
┃╠ ${prefix}efx159
┃╠ ${prefix}efx16
┃╠ ${prefix}efx160
┃╠ ${prefix}efx161
┃╠ ${prefix}efx162
┃╠ ${prefix}efx163
┃╠ ${prefix}efx164
┃╠ ${prefix}efx165
┃╠ ${prefix}efx166
┃╠ ${prefix}efx167
┃╠ ${prefix}efx168
┃╠ ${prefix}efx169
┃╠ ${prefix}efx17
┃╠ ${prefix}efx170
┃╠ ${prefix}efx171
┃╠ ${prefix}efx172
┃╠ ${prefix}efx173
┃╠ ${prefix}efx174
┃╠ ${prefix}efx175
┃╠ ${prefix}efx176
┃╠ ${prefix}efx177
┃╠ ${prefix}efx178
┃╠ ${prefix}efx179
┃╠ ${prefix}efx18
┃╠ ${prefix}efx180
┃╠ ${prefix}efx181
┃╠ ${prefix}efx182
┃╠ ${prefix}efx183
┃╠ ${prefix}efx184
┃╠ ${prefix}efx185
┃╠ ${prefix}efx186
┃╠ ${prefix}efx187
┃╠ ${prefix}efx188
┃╠ ${prefix}efx189
┃╠ ${prefix}efx19
┃╠ ${prefix}efx190
┃╠ ${prefix}efx191
┃╠ ${prefix}efx192
┃╠ ${prefix}efx193
┃╠ ${prefix}efx194
┃╠ ${prefix}efx195
┃╠ ${prefix}efx196
┃╠ ${prefix}efx197
┃╠ ${prefix}efx198
┃╠ ${prefix}efx199
┃╠ ${prefix}efx2
┃╠ ${prefix}efx20
┃╠ ${prefix}efx200
┃╠ ${prefix}efx201
┃╠ ${prefix}efx202
┃╠ ${prefix}efx203
┃╠ ${prefix}efx204
┃╠ ${prefix}efx205
┃╠ ${prefix}efx206
┃╠ ${prefix}efx207
┃╠ ${prefix}efx208
┃╠ ${prefix}efx209
┃╠ ${prefix}efx21
┃╠ ${prefix}efx210
┃╠ ${prefix}efx211
┃╠ ${prefix}efx212
┃╠ ${prefix}efx213
┃╠ ${prefix}efx214
┃╠ ${prefix}efx215
┃╠ ${prefix}efx216
┃╠ ${prefix}efx217
┃╠ ${prefix}efx218
┃╠ ${prefix}efx219
┃╠ ${prefix}efx22
┃╠ ${prefix}efx220
┃╠ ${prefix}efx221
┃╠ ${prefix}efx222
┃╠ ${prefix}efx223
┃╠ ${prefix}efx224
┃╠ ${prefix}efx225
┃╠ ${prefix}efx226
┃╠ ${prefix}efx227
┃╠ ${prefix}efx228
┃╠ ${prefix}efx229
┃╠ ${prefix}efx23
┃╠ ${prefix}efx230
┃╠ ${prefix}efx231
┃╠ ${prefix}efx232
┃╠ ${prefix}efx233
┃╠ ${prefix}efx234
┃╠ ${prefix}efx235
┃╠ ${prefix}efx236
┃╠ ${prefix}efx237
┃╠ ${prefix}efx238
┃╠ ${prefix}efx239
┃╠ ${prefix}efx24
┃╠ ${prefix}efx240
┃╠ ${prefix}efx241
┃╠ ${prefix}efx242
┃╠ ${prefix}efx243
┃╠ ${prefix}efx244
┃╠ ${prefix}efx245
┃╠ ${prefix}efx246
┃╠ ${prefix}efx247
┃╠ ${prefix}efx248
┃╠ ${prefix}efx249
┃╠ ${prefix}efx25
┃╠ ${prefix}efx250
┃╠ ${prefix}efx251
┃╠ ${prefix}efx252
┃╠ ${prefix}efx253
┃╠ ${prefix}efx254
┃╠ ${prefix}efx255
┃╠ ${prefix}efx256
┃╠ ${prefix}efx257
┃╠ ${prefix}efx258
┃╠ ${prefix}efx259
┃╠ ${prefix}efx26
┃╠ ${prefix}efx260
┃╠ ${prefix}efx261
┃╠ ${prefix}efx262
┃╠ ${prefix}efx263
┃╠ ${prefix}efx264
┃╠ ${prefix}efx265
┃╠ ${prefix}efx266
┃╠ ${prefix}efx267
┃╠ ${prefix}efx268
┃╠ ${prefix}efx269
┃╠ ${prefix}efx27
┃╠ ${prefix}efx270
┃╠ ${prefix}efx271
┃╠ ${prefix}efx272
┃╠ ${prefix}efx273
┃╠ ${prefix}efx274
┃╠ ${prefix}efx275
┃╠ ${prefix}efx276
┃╠ ${prefix}efx277
┃╠ ${prefix}efx278
┃╠ ${prefix}efx279
┃╠ ${prefix}efx28
┃╠ ${prefix}efx280
┃╠ ${prefix}efx281
┃╠ ${prefix}efx282
┃╠ ${prefix}efx283
┃╠ ${prefix}efx284
┃╠ ${prefix}efx285
┃╠ ${prefix}efx286
┃╠ ${prefix}efx287
┃╠ ${prefix}efx288
┃╠ ${prefix}efx289
┃╠ ${prefix}efx29
┃╠ ${prefix}efx290
┃╠ ${prefix}efx291
┃╠ ${prefix}efx292
┃╠ ${prefix}efx293
┃╠ ${prefix}efx294
┃╠ ${prefix}efx295
┃╠ ${prefix}efx296
┃╠ ${prefix}efx297
┃╠ ${prefix}efx298
┃╠ ${prefix}efx299
┃╠ ${prefix}efx3
┃╠ ${prefix}efx30
┃╠ ${prefix}efx300
┃╠ ${prefix}efx301
┃╠ ${prefix}efx302
┃╠ ${prefix}efx303
┃╠ ${prefix}efx304
┃╠ ${prefix}efx305
┃╠ ${prefix}efx306
┃╠ ${prefix}efx307
┃╠ ${prefix}efx308
┃╠ ${prefix}efx309
┃╠ ${prefix}efx31
┃╠ ${prefix}efx310
┃╠ ${prefix}efx311
┃╠ ${prefix}efx312
┃╠ ${prefix}efx313
┃╠ ${prefix}efx314
┃╠ ${prefix}efx316
┃╠ ${prefix}efx317
┃╠ ${prefix}efx318
┃╠ ${prefix}efx319
┃╠ ${prefix}efx32
┃╠ ${prefix}efx320
┃╠ ${prefix}efx321
┃╠ ${prefix}efx322
┃╠ ${prefix}efx323
┃╠ ${prefix}efx324
┃╠ ${prefix}efx325
┃╠ ${prefix}efx326
┃╠ ${prefix}efx327
┃╠ ${prefix}efx328
┃╠ ${prefix}efx329
┃╠ ${prefix}efx33
┃╠ ${prefix}efx330
┃╠ ${prefix}efx331
┃╠ ${prefix}efx332
┃╠ ${prefix}efx333
┃╠ ${prefix}efx334
┃╠ ${prefix}efx335
┃╠ ${prefix}efx336
┃╠ ${prefix}efx337
┃╠ ${prefix}efx338
┃╠ ${prefix}efx339
┃╠ ${prefix}efx34
┃╠ ${prefix}efx340
┃╠ ${prefix}efx341
┃╠ ${prefix}efx342
┃╠ ${prefix}efx343
┃╠ ${prefix}efx344
┃╠ ${prefix}efx345
┃╠ ${prefix}efx346
┃╠ ${prefix}efx347
┃╠ ${prefix}efx348
┃╠ ${prefix}efx349
┃╠ ${prefix}efx35
┃╠ ${prefix}efx350
┃╠ ${prefix}efx351
┃╠ ${prefix}efx352
┃╠ ${prefix}efx353
┃╠ ${prefix}efx354
┃╠ ${prefix}efx355
┃╠ ${prefix}efx356
┃╠ ${prefix}efx357
┃╠ ${prefix}efx358
┃╠ ${prefix}efx359
┃╠ ${prefix}efx36
┃╠ ${prefix}efx360
┃╠ ${prefix}efx361
┃╠ ${prefix}efx362
┃╠ ${prefix}efx363
┃╠ ${prefix}efx364
┃╠ ${prefix}efx365
┃╠ ${prefix}efx366
┃╠ ${prefix}efx367
┃╠ ${prefix}efx368
┃╠ ${prefix}efx369
┃╠ ${prefix}efx37
┃╠ ${prefix}efx370
┃╠ ${prefix}efx371
┃╠ ${prefix}efx372
┃╠ ${prefix}efx373
┃╠ ${prefix}efx374
┃╠ ${prefix}efx375
┃╠ ${prefix}efx376
┃╠ ${prefix}efx377
┃╠ ${prefix}efx378
┃╠ ${prefix}efx379
┃╠ ${prefix}efx38
┃╠ ${prefix}efx380
┃╠ ${prefix}efx381
┃╠ ${prefix}efx382
┃╠ ${prefix}efx383
┃╠ ${prefix}efx384
┃╠ ${prefix}efx385
┃╠ ${prefix}efx386
┃╠ ${prefix}efx387
┃╠ ${prefix}efx388
┃╠ ${prefix}efx389
┃╠ ${prefix}efx39
┃╠ ${prefix}efx390
┃╠ ${prefix}efx391
┃╠ ${prefix}efx392
┃╠ ${prefix}efx393
┃╠ ${prefix}efx394
┃╠ ${prefix}efx395
┃╠ ${prefix}efx396
┃╠ ${prefix}efx397
┃╠ ${prefix}efx398
┃╠ ${prefix}efx399
┃╠ ${prefix}efx4
┃╠ ${prefix}efx40
┃╠ ${prefix}efx400
┃╠ ${prefix}efx401
┃╠ ${prefix}efx402
┃╠ ${prefix}efx404
┃╠ ${prefix}efx405
┃╠ ${prefix}efx406
┃╠ ${prefix}efx407
┃╠ ${prefix}efx408
┃╠ ${prefix}efx409
┃╠ ${prefix}efx41
┃╠ ${prefix}efx410
┃╠ ${prefix}efx411
┃╠ ${prefix}efx412
┃╠ ${prefix}efx413
┃╠ ${prefix}efx414
┃╠ ${prefix}efx415
┃╠ ${prefix}efx416
┃╠ ${prefix}efx417
┃╠ ${prefix}efx42
┃╠ ${prefix}efx43
┃╠ ${prefix}efx44
┃╠ ${prefix}efx45
┃╠ ${prefix}efx46
┃╠ ${prefix}efx47
┃╠ ${prefix}efx48
┃╠ ${prefix}efx49
┃╠ ${prefix}efx5
┃╠ ${prefix}efx50
┃╠ ${prefix}efx51
┃╠ ${prefix}efx52
┃╠ ${prefix}efx53
┃╠ ${prefix}efx54
┃╠ ${prefix}efx55
┃╠ ${prefix}efx56
┃╠ ${prefix}efx57
┃╠ ${prefix}efx58
┃╠ ${prefix}efx59
┃╠ ${prefix}efx6
┃╠ ${prefix}efx60
┃╠ ${prefix}efx61
┃╠ ${prefix}efx62
┃╠ ${prefix}efx63
┃╠ ${prefix}efx64
┃╠ ${prefix}efx65
┃╠ ${prefix}efx66
┃╠ ${prefix}efx67
┃╠ ${prefix}efx68
┃╠ ${prefix}efx69
┃╠ ${prefix}efx7
┃╠ ${prefix}efx70
┃╠ ${prefix}efx71
┃╠ ${prefix}efx72
┃╠ ${prefix}efx73
┃╠ ${prefix}efx74
┃╠ ${prefix}efx75
┃╠ ${prefix}efx76
┃╠ ${prefix}efx77
┃╠ ${prefix}efx78
┃╠ ${prefix}efx79
┃╠ ${prefix}efx8
┃╠ ${prefix}efx80
┃╠ ${prefix}efx81
┃╠ ${prefix}efx82
┃╠ ${prefix}efx83
┃╠ ${prefix}efx84
┃╠ ${prefix}efx85
┃╠ ${prefix}efx86
┃╠ ${prefix}efx87
┃╠ ${prefix}efx88
┃╠ ${prefix}efx89
┃╠ ${prefix}efx9
┃╠ ${prefix}efx90
┃╠ ${prefix}efx91
┃╠ ${prefix}efx92
┃╠ ${prefix}efx93
┃╠ ${prefix}efx94
┃╠ ${prefix}efx95
┃╠ ${prefix}efx96
┃╠ ${prefix}efx97
┃╠ ${prefix}efx98
┃╠ ${prefix}efx99
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓
`
}

exports.SoundMenu = (pushname ,prefix) => {
	return `
╔═══════✪「 Sound 」	
╠ ${prefix}sound1
╠ ${prefix}sound2
╠ ${prefix}sound3
╠ ${prefix}sound4
╠ ${prefix}sound5
╠ ${prefix}sound6
╠ ${prefix}sound7
╠ ${prefix}sound8
╠ ${prefix}sound9
╠ ${prefix}sound10
╠ ${prefix}sound11
╠ ${prefix}sound12
╠ ${prefix}sound13
╠ ${prefix}sound14
╠ ${prefix}sound15
╠ ${prefix}sound16
╠ ${prefix}sound17
╠ ${prefix}sound18
╠ ${prefix}sound19
╠ ${prefix}sound20
╠ ${prefix}sound21
╠ ${prefix}sound22
╠ ${prefix}sound23
╠ ${prefix}sound24
╠ ${prefix}sound25
╠ ${prefix}sound26
╠ ${prefix}sound27
╠ ${prefix}sound28
╠ ${prefix}sound29
╠ ${prefix}sound30
╠ ${prefix}sound31
╠ ${prefix}sound32
╠ ${prefix}sound33
╠ ${prefix}sound34
╠ ${prefix}sound35
╠ ${prefix}sound36
╠ ${prefix}sound37
╠ ${prefix}sound38
╠ ${prefix}sound39
╠ ${prefix}sound40
╠ ${prefix}sound41
╠ ${prefix}sound42
╠ ${prefix}sound43
╠ ${prefix}sound44
╠ ${prefix}sound45
╠ ${prefix}sound46
╠ ${prefix}sound47
╠ ${prefix}sound48
╠ ${prefix}sound49
╠ ${prefix}sound50
╠ ${prefix}sound51
╠ ${prefix}sound52
╠ ${prefix}sound53
╠ ${prefix}sound54
╠ ${prefix}sound55
╠ ${prefix}sound56
╠ ${prefix}sound57
╠ ${prefix}sound58
╠ ${prefix}sound59
╠ ${prefix}sound60
╠ ${prefix}sound61
╠ ${prefix}sound62
╠ ${prefix}sound63
╠ ${prefix}sound64
╠ ${prefix}sound65
╠ ${prefix}sound66
╠ ${prefix}sound67
╠ ${prefix}sound68
╠ ${prefix}sound69
╠ ${prefix}sound70
╠ ${prefix}sound71
╠ ${prefix}sound72
╠ ${prefix}sound73
╠ ${prefix}sound74
╠ ${prefix}sound75
╠ ${prefix}sound76
╠ ${prefix}sound77
╠ ${prefix}sound78
╠ ${prefix}sound79
╠ ${prefix}sound80
╠ ${prefix}sound81
╠ ${prefix}sound82
╠ ${prefix}sound83
╠ ${prefix}sound84
╠ ${prefix}sound85
╠ ${prefix}sound86
╠ ${prefix}sound87
╠ ${prefix}sound88
╠ ${prefix}sound89
╠ ${prefix}sound90
╠ ${prefix}sound91
╠ ${prefix}sound92
╠ ${prefix}sound93
╠ ${prefix}sound94
╠ ${prefix}sound95
╠ ${prefix}sound96
╠ ${prefix}sound97
╠ ${prefix}sound98
╠ ${prefix}sound99
╠ ${prefix}sound100
╠ ${prefix}sound101
╠ ${prefix}sound102
╠ ${prefix}sound103
╠ ${prefix}sound104
╠ ${prefix}sound105
╠ ${prefix}sound106
╠ ${prefix}sound107
╠ ${prefix}sound108
╠ ${prefix}sound109
╠ ${prefix}sound110
╠ ${prefix}sound111
╠ ${prefix}sound112
╠ ${prefix}sound113
╠ ${prefix}sound114
╠ ${prefix}sound115
╠ ${prefix}sound116
╠ ${prefix}sound117
╠ ${prefix}sound118
╠ ${prefix}sound119
╠ ${prefix}sound120
╠ ${prefix}sound121
╠ ${prefix}sound122
╠ ${prefix}sound123
╠ ${prefix}sound124
╠ ${prefix}sound125
╠ ${prefix}sound126
╠ ${prefix}sound127
╠ ${prefix}sound128
╠ ${prefix}sound129
╠ ${prefix}sound130
╠ ${prefix}sound131
╠ ${prefix}sound132
╠ ${prefix}sound133
╠ ${prefix}sound134
╠ ${prefix}sound135
╠ ${prefix}sound136
╠ ${prefix}sound137
╠ ${prefix}sound138
╠ ${prefix}sound139
╠ ${prefix}sound140
╠ ${prefix}sound141
╠ ${prefix}sound142
╠ ${prefix}sound143
╠ ${prefix}sound144
╠ ${prefix}sound145
╠ ${prefix}sound146
╠ ${prefix}sound147
╠ ${prefix}sound148
╠ ${prefix}sound149
╠ ${prefix}sound150
╠ ${prefix}sound151
╠ ${prefix}sound152
╠ ${prefix}sound153
╠ ${prefix}sound154
╠ ${prefix}sound155
╠ ${prefix}sound156
╠ ${prefix}sound157
╠ ${prefix}sound158
╠ ${prefix}sound159
╠ ${prefix}sound160
╠ ${prefix}sound161
╚═════════════✪
`
}

exports.VoiceMenu = (pushname ,prefix) => {
	return `
┏━「 ${global.botname} 」━━⭓ 
┃╔══✪「 VOICE CHANGER 」	        
┃╠ ${prefix}bass [reply aud]
┃╠ ${prefix}blown [reply aud]
┃╠ ${prefix}deep [reply aud]
┃╠ ${prefix}earrape [reply aud]
┃╠ ${prefix}fast [reply aud]
┃╠ ${prefix}fat [reply aud]
┃╠ ${prefix}nightcore [reply aud]
┃╠ ${prefix}reverse [reply aud]
┃╠ ${prefix}robot [reply aud]
┃╠ ${prefix}slow [reply aud]
┃╠ ${prefix}squirrel [reply aud]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`
}

exports.OtherMenu = (prefix) => {
	return `
╔═══════✪「 OTHER 」	
╠ ${prefix}afk
╠ ${prefix}chatinfo
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}speedtest
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}chatinfo
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╚═════════════✪
`
}

exports.ThanksTo = () => {
	return `Thanks To Alll !!`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
