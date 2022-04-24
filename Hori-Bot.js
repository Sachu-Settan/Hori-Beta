//[modules]
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")

//[thumb]
let xeon = fs.readFileSync('./Media/Hori.jpg')

//[database]
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

//[database reader]
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
	
module.exports = Hori = async (Hori, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefix ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefix ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Hori.decodeJid(Hori.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
//[gc]
        const groupMetadata = m.isGroup ? await Hori.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//[runtime]
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
	
//[target]
	const reply = (teks) => {
            Hori.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/Hori.jpg`),"sourceUrl": "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Hori.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Subscribe Bot's Official YT Channel`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/Hori.jpg`),"sourceUrl": "https://youtu.be/imFIX-Wrt3s"}}}, { quoted: m})
        }
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

//[public/self]
        if (!Hori.public) {
            if (!m.key.fromMe) return
        }

//[push msg to console & autoread]\\
        if (m.message) {
            Hori.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
//[level(incomplete, still in devment)]
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
	  }
	
//[Antilink]
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               reply('*LINK DETECTED*\nWow, how naughty, this group has been installed with Antilink, OK?..,\nGood Bye To You..👋🏻')
               let sianj = m.sender
               await Hori.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
          if (!isBotAdmins) return m.reply(`Bot must be admin first`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
        if (isAdmins) return m.reply(`Ehh sorry you admin`)
        if (isCreator) return m.reply(`Ehh sorry you are the owner of me`)
        Hori.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
//[mute chat]
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//[write database every 1min]
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//[reset limit every 12hrs]
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	    
//[respond cmd with media]
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Hori.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Hori.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Hori.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Hori.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Hori.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, Hori.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Hori.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Hori.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Hori.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Hori.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Hori.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, Hori.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Hori.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Hori.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Hori.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Hori.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Hori.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Hori.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
//[tictactoe]
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Hori.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Hori.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//[suit]
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    Hori.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Hori.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Hori.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Hori.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Hori.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Hori.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Hori.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) Hori.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Hori.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
    switch(command) {
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await Hori.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Hori.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Hori.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await Hori.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Hori.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                Hori.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6ba2aed566865a068e91f.jpg' }, caption: `*Hi bro ${m.pushName}*\n\n Bot Rental Price\n⭔ 250 INR Per Group via Gpay 1 Month\n\nFor more details, you can chat with the owner\nhttps://wa.me/919744933034 (Owner)\n\nDonate Me : \n\n⭔ GPay :919744933034` }, { quoted: m })
            }
            break
            case 'sc': case 'script': {
                reply('Script : https://github.com/Sachu-Settan/Hori-Beta\n Dont Forget To Give Star\n\nYoutube : https://youtu.be/imFIX-Wrt3s\n Dont Forget To Subscribe')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    Hori.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Hori.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Hori.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Hori.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Hori.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Hori.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Hori.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Hori.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, jawab, Hori.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, jawab, Hori.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Hori.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await Hori.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Hori.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Hori.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Hori.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Hori.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Hori.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Hori.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Hori.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Hori.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await Hori.downloadAndSaveMediaMessage(quoted)
                await Hori.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await Hori.downloadAndSaveMediaMessage(quoted)
                await Hori.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case 'grupinfo': case 'groupinfo':
try{
 var pic = await Hori.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://telegra.ph/file/80df372f31f86cdf19daf.jpg'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Hori.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case 'tagall': case 'tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                Hori.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            Hori.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Hori.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Hori.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Hori.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Hori.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Hori.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Hori.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes


©${Hori.user.id}
`
Hori.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await Hori.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Hori.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `Group Mode`, Hori.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await Hori.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Hori.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `Mode Edit Info`, Hori.user.name, m)

            }
            }
            break
case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully activated the antilink feature')
						Hori.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully disabled antilink feature')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					case 'antiwame': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Activated!`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, Hori.user.name, m)
                }
             }
             break
					   case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${Hori.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${Hori.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `Mute Bot`, Hori.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await Hori.groupInviteCode(m.chat)
                Hori.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await Hori.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await Hori.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                Hori.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await Hori.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://github.com/Sachu-Settan/Hori-Beta'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: '+91 690-9137-213'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📶Bot Status📶',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./Media/Hori.jpg')
                      let txt = `「 Hori Bot Broadcast 」\n\n${text}`
                      Hori.send5ButImg(i, txt, Hori.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} Hori bot here`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nIn ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: 'https://github.com/Sachu-Settan/Hori-Beta'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./Media/Hori.jpg')
                      let txt = `「 Hori Bot Broadcast 」\n\n${text}`
                      Hori.send5ButImg(yoi, txt, `Broadcast By ${global.botuser}`, fatihgans, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': {
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                Hori.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await Hori.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Hori.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Hori.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Hori.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Hori.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Hori.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await Hori.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Hori.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
                let media = await Hori.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Hori.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Hori.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Hori.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Hori.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Hori.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${Hori.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Hori.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Hori.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Hori.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                replay(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Hori.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Hori.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replay(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Hori.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Hori.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': case 'googleimage': {
        if (!text) throw `Example : ${prefix + command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: Hori.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} bts boy with luv`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Uploaded : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   Hori.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '🥬Video Source Link🥬',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                Hori.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                Hori.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                Hori.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resololution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Message')
                if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                Hori.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                Hori.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply To A Message That Has Been Already Sent')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe the message you replied does not contain the ytsearch result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                Hori.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Hori.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                replay(mess.wait)
                Hori.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/anime/'+command, 'apikey') }, caption: `Download From ${text}` }, { quoted: m})
            }
            break
	    case 'couplepp': case 'ppcouple': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Hori.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Hori.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: Hori.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: Hori.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: Hori.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanimekdksksksksk': case 'quoteanimexllzlzkl': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                replay(mess.wait)
                Hori.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'where is the text?'
                replay(mess.wait)
                Hori.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                replay(mess.wait)
                Hori.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            case 'keberuntungan11111': case 'luck211111': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Hori.sendText(m.chat, `⭔ *Name :* ${anu.message.nama}\n⭔ *Born :* ${anu.message.tgl_lahir}\n⭔ *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing1111': case 'fishing1111': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Hori.sendText(m.chat, `⭔ *Date :* ${anu.message.tgl_memancing}\n⭔ *Results :* ${anu.message.result}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur111111': case 'fertiletimekekskdk': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} first day of menstruation, cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                Hori.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiakjfjdkkd': case 'zodiackckdkdk': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                Hori.sendText(m.chat, `⭔ *Zodiac :* ${anu.message.zodiak}\n⭔ *Number :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Flower :* ${anu.message.bunga_keberuntungan}\n⭔ *Color :* ${anu.message.warna_keberuntungan}\n⭔ *Rock :* ${anu.message.batu_keberuntungan}\n⭔ *Element :* ${anu.message.elemen_keberuntungan}\n⭔ *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n⭔ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shiondkskskso': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                Hori.sendText(m.chat, `⭔ *Results :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '💁🏻‍♂️With Watermark🤔'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '💁🏻‍♂️No Watermark💁🏻‍♂️'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '👀With Watermark👀'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.nowatermark)
		let cnvrt = await toAudio(nganu, 'mp4')
                Hori.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'Enter Query Url!'
                replay(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) Hori.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    Hori.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await Hori.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lyrics :\n${anu.result.lirik.result}`, m)
                Hori.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Hori.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                Hori.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
                Hori.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdlkxkxkx': case 'fbkckxkxk': case 'facebookjfkddkk': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                Hori.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindlkxkdksk': case 'pinterestdlksksks': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                Hori.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break

            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
`,
			footer: Hori.user.name,
			buttons,
			headerType: 4
		    }
		    Hori.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Hori.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Hori.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		Hori.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		replay(mess.wait)
		Hori.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replay(mess.wait)
		Hori.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replay(mess.wait)
		Hori.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replay(mess.wait)
		Hori.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What format do you want? ? Example : ${prefix + command} pdf

Available formats : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadith': case 'hadist': {
		if (!args[0]) throw `Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		Hori.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
/*case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await Hori.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Hori.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Hori.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} message name`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                Hori.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report Bug🐛',
                                    url: 'https://wa.me/919744933034?text=hello+Bro+I+Found+A+Bug+in+your+Hori+Bot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👻Start Anonymous👻',
                                    id: 'start'
                                }
                            }]
                Hori.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Hori.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, Hori.user.name, m)
            }
			break
            case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await Hori.profilePictureUrl(room.b)
                let status = await Hori.fetchStatus(room.b)
                let msg = await Hori.sendImage(room.a, profile, `Name : ${await Hori.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                Hori.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await Hori.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, Hori.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Hori.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Hori.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Hori.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Hori.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, Hori.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Hori.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Hori.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Hori.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Hori.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Hori.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await Hori.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, Hori.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                Hori.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                Hori.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'owner': case 'creator': {
            Hori.sendContact(m.chat, global.owner2, m)
           const devsound = fs.readFileSync('./Media/Dev.mp3') //u can change the music in XeonMedia folder
           Hori.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp3', ptt: true, quoted: m })
            }
            break
                    case 'bug': case 'report': {
                    	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                    	Hori.sendMessage(`919744933034@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'Hori': case 'doge':{
                anu = `Hi ${pushname}
Hori Bot With You Forever!! 🐶🤚`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                            	urlButton: {
                                displayText: 'Script🔖',
                                    url: 'https://github.com/Sachu-Settan/Hori-Beta'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break

            case 'list': case 'menu': case 'help': case '?': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hi 🤚 ${pushname}
How Are You? 😊


❏「 BOT INFO 」

𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}


Please Select Button Below
`,
                            hydratedButtons: [{
                                urlButton: {
                                displayText: 'Bot Script',
                                    url: 'https://github.com/Sachu-Settan/Hori-Beta'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu\n\n`,
                    buttonText: "Menu",
                    footerText: "_Hori-Bot-MD_",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Group Features",
								"rows": [
									{
										"title": "Group Menu",
										"description": "Displays The List Of Group Features",
										"rowId": `${prefix}grupmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "Image Menu",
										"description": "Displays The List Of Image Features",
										"rowId": `${prefix}imagemenu`
										},
										{
											"title": "Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "Miscellaneous Menu",
										"description": "Displays The List Of Miscellaneous Features",
										"rowId": `${prefix}nocategorymenu`
										},
										{
											"title": "Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicemenu`
										}
								]
							},
							{
								"title": "Chat with fellow users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Group System",
								"rows": [
									{
										"title": "System Menu",
										"description": "Displays The List Of Group System Features",
										"rowId": `${prefix}sistemmenu`
									}
								]
							},
							{
								"title": "Owner",
								"rows": [
									{
										"title": "Owner Menu",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'grupmenu': {
	            anu = `
  *Group Menu*
  
  ➙ ${prefix}grouplink
  ➙ ${prefix}ephemeral [option]
  ➙ ${prefix}setgrouppp
  ➙ ${prefix}setname [text]
  ➙ ${prefix}group [option]
  ➙ ${prefix}editinfo [option]
  ➙ ${prefix}grupinfo
  ➙ ${prefix}add @user
  ➙ ${prefix}kick @user
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
	okemenu = `
	*Downloader Menu*
  
  ➙ ${prefix}tiktoknowm [url]
  ➙ ${prefix}tiktokwm [url]
  ➙ ${prefix}tiktokmp3 [url]
  ➙ ${prefix}instagram [url]
  ➙ ${prefix}ig2 [url]
  ➙ ${prefix}igreels [url]
  ➙ ${prefix}igtv [url]
  ➙ ${prefix}twitter [url]
  ➙ ${prefix}twittermp3 [url]
  ➙ ${prefix}ytmp3 [url]
  ➙ ${prefix}ytmp4 [url]
  ➙ ${prefix}getmusic [query]
  ➙ ${prefix}getvideo [query
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: okemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            case 'searchmenu': {
            	anu = `
              *Search Menu*
  
  ➙ ${prefix}play [query]
  ➙ ${prefix}yts [query]
  ➙ ${prefix}google [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}ytsearch [query]
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
	anu = `
	*Random Menu*
  
  ➙ ${prefix}coffee
  ➙ ${prefix}couplepp
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'funmenu': {
	anu = `
	*Fun Menu*
  
  ➙ ${prefix}couple
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}math [mode] 
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'voicemenu': {
	anu = `
	*Voice Changer Menu*
	
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'religionmenukdksoejdjj': {
	anu = `
	*Religion Menu*
	
     (Islamic)
  ➙ ${prefix}iqra
  ➙ ${prefix}hadith
  ➙ ${prefix}alquran
  ➙ ${prefix}juzamma
  ➙ ${prefix}tafsirsurah`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'horoscopemenukcodk': {
	anu = `
	*Horoscope Menu*
  
  ➙ ${prefix}hockeynumber
  ➙ ${prefix}dreammeaning
  ➙ ${prefix}namemeaning
  ➙ ${prefix}fortunetelling
  ➙ ${prefix}marriageprediction
  ➙ ${prefix}wife&husband
  ➙ ${prefix}fortunetelling2
  ➙ ${prefix}matchname
  ➙ ${prefix}couplematch
  ➙ ${prefix}married
  ➙ ${prefix}businessnature
  ➙ ${prefix}sustenance
  ➙ ${prefix}profession
  ➙ ${prefix}fate
  ➙ ${prefix}potentialdisease
  ➙ ${prefix}tarot
  ➙ ${prefix}fengshui
  ➙ ${prefix}goodday
  ➙ ${prefix}badday
  ➙ ${prefix}unluckyday
  ➙ ${prefix}dragonday
  ➙ ${prefix}sustenance2
  ➙ ${prefix}luck
  ➙ ${prefix}weton
  ➙ ${prefix}character
  ➙ ${prefix}luck2
  ➙ ${prefix}fishing
  ➙ ${prefix}fertiletime
  ➙ ${prefix}zodiac
  ➙ ${prefix}shio`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'convertmenu': {
	anu = `
	*Convert Menu*
  
  ➙ ${prefix}toimage
  ➙ ${prefix}removebg
  ➙ ${prefix}sticker
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}tourl
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'nocategorymenu': {
	anu = `
	*Misc Menu*
  
  ➙ ${prefix}ping
  ➙ ${prefix}owner
  ➙ ${prefix}donate
  ➙ ${prefix}menu / ${prefix}help / ${prefix}?
  ➙ ${prefix}delete
  ➙ ${prefix}chatinfo
  ➙ ${prefix}quoted
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}listonline
  ➙ ${prefix}report (report bug to owner)
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
	anu = `
	*Database Menu*
  
  ➙ ${prefix}setcmd
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd
  ➙ ${prefix}lockcmd
  ➙ ${prefix}addmsg
  ➙ ${prefix}listmsg
  ➙ ${prefix}getmsg
  ➙ ${prefix}delmsg
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'anonymouschatmenu': {
	anu = `
	*Anonymous Menu*
	
  ➙ ${prefix}start ( Start Chat )
  ➙ ${prefix}next ( Next user )
  ➙ ${prefix}stop ( stop Anonymous chat )
	`
	  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'sistemmenu': {
	anu = `
	*System Menu*
	
  ➙ ${prefix}antilink On/Off
  ➙ ${prefix}mute On/Off
  ➙ ${prefix}antiwame On/Off
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'ownermenu': {
  	anu = `
  *Owner Menu*
  
  ➙ ${prefix}chat [option]
  ➙ ${prefix}join [link]
  ➙ ${prefix}leave
  ➙ ${prefix}setbotpp
  ➙ ${prefix}block @user
  ➙ ${prefix}unblock @user
  ➙ ${prefix}bcgroup
  ➙ ${prefix}bcall
  `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'allmenu': {
  	anu = `
  *All Menu*
  
  ꪶ🐕Group Menu🐕ꫂ
  ➙ ${prefix}grouplink
  ➙ ${prefix}ephemeral [option]
  ➙ ${prefix}setgrouppp
  ➙ ${prefix}setname [text]
  ➙ ${prefix}group [option]
  ➙ ${prefix}editinfo [option]
  ➙ ${prefix}grupinfo
  ➙ ${prefix}add @user
  ➙ ${prefix}kick @user
  ➙ ${prefix}promote @user
  ➙ ${prefix}demote @user
  
  ꪶ🐕Download Menu🐕ꫂ
  ➙ ${prefix}tiktoknowm [url]
  ➙ ${prefix}tiktokwm [url]
  ➙ ${prefix}tiktokmp3 [url]
  ➙ ${prefix}instagram [url]
  ➙ ${prefix}ig2 [url]
  ➙ ${prefix}igreels [url]
  ➙ ${prefix}igtv [url]
  ➙ ${prefix}twitter [url]
  ➙ ${prefix}twittermp3 [url]
  ➙ ${prefix}ytmp3 [url]
  ➙ ${prefix}ytmp4 [url]
  ➙ ${prefix}getmusic [query]
  ➙ ${prefix}getvideo [query
  
  ꪶ🐕Search Menu🐕ꫂ
  ➙ ${prefix}play [query]
  ➙ ${prefix}yts [query]
  ➙ ${prefix}google [query]
  ➙ ${prefix}gimage [query]
  ➙ ${prefix}pinterest [query]
  ➙ ${prefix}wallpaper [query]
  ➙ ${prefix}wikimedia [query]
  ➙ ${prefix}ytsearch [query]
  
  ꪶ🐕Random Menu🐕ꫂ
  ➙ ${prefix}coffee
  ➙ ${prefix}couplepp
  
  ꪶ🐕Fun Menu🐕ꫂ
  ➙ ${prefix}couple
  ➙ ${prefix}mysoulmate
  ➙ ${prefix}math [mode]  
  
  ꪶ🐕Voice Changer Menu🐕ꫂ
  ➙ ${prefix}bass
  ➙ ${prefix}blown
  ➙ ${prefix}deep
  ➙ ${prefix}earrape
  ➙ ${prefix}fast
  ➙ ${prefix}fat
  ➙ ${prefix}nightcore
  ➙ ${prefix}reverse
  ➙ ${prefix}robot
  ➙ ${prefix}slow
  ➙ ${prefix}squirrel
   
  ꪶ🐕Convert Menu🐕ꫂ
  ➙ ${prefix}toimage
  ➙ ${prefix}removebg
  ➙ ${prefix}sticker
  ➙ ${prefix}emojimix
  ➙ ${prefix}tovideo
  ➙ ${prefix}togif
  ➙ ${prefix}tourl
  ➙ ${prefix}ebinary
  ➙ ${prefix}dbinary
  
  ꪶ🐕Misc Menu🐕ꫂ
  ➙ ${prefix}ping
  ➙ ${prefix}owner
  ➙ ${prefix}donate
  ➙ ${prefix}menu / ${prefix}help / ${prefix}?
  ➙ ${prefix}delete
  ➙ ${prefix}chatinfo
  ➙ ${prefix}quoted
  ➙ ${prefix}listpc
  ➙ ${prefix}listgc
  ➙ ${prefix}listonline
  ➙ ${prefix}report (report bug to owner)
  
  ꪶ🐕Database Menu🐕ꫂ
  ➙ ${prefix}setcmd
  ➙ ${prefix}listcmd
  ➙ ${prefix}delcmd
  ➙ ${prefix}lockcmd
  ➙ ${prefix}addmsg
  ➙ ${prefix}listmsg
  ➙ ${prefix}getmsg
  ➙ ${prefix}delmsg
  
  ꪶ🐕Anonymous Menu🐕ꫂ
  ➙ ${prefix}start ( Start Chat )
  ➙ ${prefix}next ( Next user )
  ➙ ${prefix}stop ( stop Anonymous chat )
  
  ꪶ🐕System Menu🐕ꫂ
  ➙ ${prefix}antilink On/Off
  ➙ ${prefix}mute On/Off
  ➙ ${prefix}antiwame On/Off
  
  ꪶ🐕Owner Menu🐕ꫂ
  ➙ ${prefix}chat [option]
  ➙ ${prefix}join [link]
  ➙ ${prefix}leave
  ➙ ${prefix}setbotpp
  ➙ ${prefix}block @user
  ➙ ${prefix}unblock @user
  ➙ ${prefix}bcgroup
  ➙ ${prefix}bcall`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Media/Hori.jpg')},
                            hydratedFooterText: `Hori-Bot-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                Hori.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tqtt': 
reply(`Thanks to
LORD BUDDHA
Xeon (Me)
My family
And all friends who helped assemble this sexy script !!!`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Hori.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
