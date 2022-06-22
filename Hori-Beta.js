/*
* You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
* Licenced Under MIT License
* Copyright © 2022 Sachu. Rose Mwol-MD
*/
/* Load Config File */
require('./config')
/* Language File */ 
const { eng } = require('./Lang')
	let lang = eng
/* Default = eng */
const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
	exec,
	spawn,
	execSync
} = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const {
	JSDOM
} = require('jsdom')
const speed = require('performance-now')
const {
	performance
} = require('perf_hooks')
const {
	Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const {
	smsg,
	formatp,
	tanggal,
	formatDate,
	getTime,
	isUrl,
	sleep,
	clockString,
	runtime,
	fetchJson,
	getBuffer,
	jsonformat,
	format,
	parseMention,
	getRandom
} = require('./lib/myfunc')
const dgxeon = require('xfarr-api')
const {
	addInventoriDarah,
	cekDuluJoinAdaApaKagaDiJson,
	addDarah,
	kurangDarah,
	getDarah
} = require('./storage/user/darah.js')
const {
	cekInventoryAdaAtauGak,
	addInventori,
	addBesi,
	addEmas,
	addEmerald,
	addUmpan,
	addPotion,
	kurangBesi,
	kurangEmas,
	kurangEmerald,
	kurangUmpan,
	kurangPotion,
	getBesi,
	getEmas,
	getEmerald,
	getUmpan,
	getPotion
} = require('./storage/user/alat_tukar.js')
const {
	addInventoriMonay,
	cekDuluJoinAdaApaKagaMonaynyaDiJson,
	addMonay,
	kurangMonay,
	getMonay
} = require('./storage/user/monay.js')
const {
	addInventoriLimit,
	cekDuluJoinAdaApaKagaLimitnyaDiJson,
	addLimit,
	kurangLimit,
	getLimit
} = require('./storage/user/limit.js')
const {
	cekDuluHasilBuruanNya,
	addInventoriBuruan,
	addIkan,
	addAyam,
	addKelinci,
	addDomba,
	addSapi,
	addGajah,
	kurangIkan,
	kurangAyam,
	kurangKelinci,
	kurangDomba,
	kurangSapi,
	kurangGajah,
	getIkan,
	getAyam,
	getKelinci,
	getDomba,
	getSapi,
	getGajah
} = require('./storage/user/buruan.js')
const { Git } = require('./Lang/eng')
let DarahAwal = global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟', '🐠', '🐡']

let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

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
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const content = JSON.stringify(mek.message)
		const groupMetadata = m.isGroup ? await Hori.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
		let picaks = [flaming, fluming, flarun, flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!('afkReason' in user)) user.afkReason = ''
				if (!isNumber(user.limit)) user.limit = limitUser
			} else global.db.data.users[m.sender] = {
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
			}

			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('mute' in chats)) chats.mute = false
				if (!('antilink' in chats)) chats.antilink = false
			} else global.db.data.chats[m.chat] = {
				mute: false,
				antilink: false,
			}

			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
			if (setting) {
				if (!isNumber(setting.status)) setting.status = 0
				if (!('autobio' in setting)) setting.autobio = false
			} else global.db.data.settings[botNumber] = {
				status: 0,
				autobio: false,
			}

		} catch (err) {
			console.error(err)
		}

		const reply = (teks) => {
			Hori.sendMessage(m.chat, {
				text: teks,
				contextInfo: {
					"externalAdReply": {
						"title": ` ${global.botname}`,
						"body": `Join Bots Official Group`,
						"previewType": "PHOTO",
						"thumbnailUrl": ``,
						"thumbnail": fs.readFileSync(`./Bot Pic/Hori-Beta.jpg`),
						"sourceUrl": "${gruplink}"
					}
				}
			}, {
				quoted: m
			})
		}

		const replay = (teks) => {
			Hori.sendMessage(m.chat, {
				text: teks,
				contextInfo: {
					"externalAdReply": {
						"title": ` ${global.botname}`,
						"body": ` Join Bot's Official GC`,
						"previewType": "PHOTO",
						"thumbnailUrl": ``,
						"thumbnail": fs.readFileSync(`./Bot Pic/Hori-Beta.jpg`),
						"sourceUrl": "${gruplink}"
					}
				}
			}, {
				quoted: m
			})
		}
		if (!Hori.public) {
			if (!m.key.fromMe) return
		}
		if (m.message) {
			Hori.sendReadReceipt(m.chat, m.sender, [m.key.id])
			console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
		}

		let cron = require('node-cron')
		cron.schedule('00 12 * * *', () => {
			let user = Object.keys(global.db.data.users)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			for (let jid of user) global.db.data.users[jid].limit = limitUser
			console.log('Limit Reseted')
		}, {
			scheduled: true,
			timezone: "Asia/Kolkata"
		})

		if (db.data.settings[botNumber].autobio) {
			let setting = global.db.data.settings[botNumber]
			if (new Date() * 1 - setting.status > 1000) {
				let uptime = await runtime(process.uptime())
				await Hori.setStatus(`${Hori.user.name} | Runtime : ${runtime(uptime)}`)
				setting.status = new Date() * 1
			}
		}

		if (db.data.chats[m.chat].antilink) {
			if (budy.match(`chat.whatsapp.com`)) {
				reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
				if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
				let gclink = (`https://chat.whatsapp.com/` + await Hori.groupInviteCode(m.chat))
				let isLinkThisGc = new RegExp(gclink, 'i')
				let isgclink = isLinkThisGc.test(m.text)
				if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
				if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
				if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh`)
				Hori.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}

		let sticker = JSON.parse(fs.readFileSync('./Media/sticker/sticker.json'));
		let voicenote = JSON.parse(fs.readFileSync('./Media/vn/vn.json'));
		let images = JSON.parse(fs.readFileSync('./Media/image/image.json'))
		let videoss = JSON.parse(fs.readFileSync('./Media/vid/video.json'))
		let efx = JSON.parse(fs.readFileSync('./Media/efx/efx.json'))
		let igscraper = require('@bochilteam/scraper')
		for (let anji of sticker) {
			if (budy === anji) {
				result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/stickers/${anji}.webp`)
				Hori.sendMessage(m.chat, {
					sticker: result
				}, {
					quoted: m
				})
			}
		}
		for (let vn of voicenote) {
			if (budy === vn) {
				result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/vn/${vn}.mp3`)
				Hori.sendMessage(m.chat, {
					audio: result,
					mimetype: 'audio/mp4',
					ptt: true
				}, {
					quoted: m
				})
			}
		}
		for (let efxs of efx) {
			if (budy === efxs) {
				result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/efx/${efxs}.mp3`)
				Hori.sendMessage(m.chat, {
					audio: result,
					mimetype: 'audio/mp4',
					ptt: true
				}, {
					quoted: m
				})
			}
		}
		for (let imgs of images) {
			if (budy === imgs) {
				result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/image/${imgs}.jpg`)
				Hori.sendMessage(m.chat, {
					image: result
				}, {
					quoted: m
				})
			}
		}
		for (let vid of videoss) {
			if (budy === vid) {
				result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/vid/${vid}.mp4`)
				Hori.sendMessage(m.chat, {
					video: result
				}, {
					quoted: m
				})
			}
		}

		if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
			return
		}

		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
			let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
			let {
				text,
				mentionedJid
			} = hash
			let messages = await generateWAMessage(m.chat, {
				text: text,
				mentions: mentionedJid
			}, {
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

		if (('family100' + m.chat in _family100) && isCmd) {
			kuis = true
			let room = _family100['family100' + m.chat]
			let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
			let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
			if (!isSurender) {
				let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
				if (room.terjawab[index]) return !0
				room.terjawab[index] = m.sender
			}
			let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
			let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
			Hori.sendText(m.chat, caption, m, {
				contextInfo: {
					mentionedJid: parseMention(caption)
				}
			}).then(mes => {
				return _family100['family100' + m.chat].pesan = mesg
			}).catch(_ => _)
			if (isWin || isSurender) delete _family100['family100' + m.chat]
		}

		if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklagu[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await Hori.sendButtonText(m.chat, [{
					buttonId: 'guess song',
					buttonText: {
						displayText: 'Guess The Song'
					},
					type: 1
				}], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Hori.user.name, m)
				delete tebaklagu[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = kuismath[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
				delete kuismath[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakgambar[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await Hori.sendButtonText(m.chat, [{
					buttonId: 'guess picture',
					buttonText: {
						displayText: 'Guess The Picture'
					},
					type: 1
				}], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Hori.user.name, m)
				delete tebakgambar[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkata[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await Hori.sendButtonText(m.chat, [{
					buttonId: 'guess word',
					buttonText: {
						displayText: 'Guess The Word'
					},
					type: 1
				}], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Hori.user.name, m)
				delete tebakkata[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = caklontong[m.sender.split('@')[0]]
			deskripsi = caklontong_desk[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await Hori.sendButtonText(m.chat, [{
					buttonId: 'guess blank',
					buttonText: {
						displayText: 'Guess The Blank'
					},
					type: 1
				}], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, Hori.user.name, m)
				delete caklontong[m.sender.split('@')[0]]
				delete caklontong_desk[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkalimat[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await Hori.sendButtonText(m.chat, [{
					buttonId: 'guess sentence',
					buttonText: {
						displayText: 'Guess The Sentence'
					},
					type: 1
				}], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Hori.user.name, m)
				delete tebakkalimat[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklirik[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await Hori.sendButtonText(m.chat, [{
					buttonId: 'guess lyrics',
					buttonText: {
						displayText: 'Guess The Lyrics'
					},
					type: 1
				}], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Hori.user.name, m)
				delete tebaklirik[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaktebakan[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await Hori.sendButtonText(m.chat, [{
					buttonId: 'guess riddle',
					buttonText: {
						displayText: 'Guess The Riddle'
					},
					type: 1
				}], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Hori.user.name, m)
				delete tebaktebakan[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}
		this.game = this.game ? this.game : {}
		let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			//reply(`[DEBUG]\n${parseInt(m.text)}`)
			if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				reply({
					'-3': 'Game Has Ended',
					'-2': 'Invalid',
					'-1': 'Invalid Position',
					0: 'Invalid Position',
				} [ok])
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
				} [v]
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

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
				room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await Hori.sendText(room.x, str, m, {
				mentions: parseMention(str)
			})
			await Hori.sendText(room.o, str, m, {
				mentions: parseMention(str)
			})
			if (isTie || isWin) {
				delete this.game[room.id]
			}
		}

		this.suit = this.suit ? this.suit : {}
		let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
					Hori.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
					delete this.suit[roof.id]
					return !0
				}
				roof.status = 'play'
				roof.asal = m.chat
				clearTimeout(roof.waktu)
				//delete roof[roof.id].waktu
				Hori.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, {
					mentions: [roof.p, roof.p2]
				})
				if (!roof.pilih) Hori.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
				if (!roof.pilih2) Hori.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) Hori.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						Hori.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
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
				reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
				if (!roof.pilih2) Hori.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
				if (!roof.pilih) Hori.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
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
`.trim(), m, {
					mentions: [roof.p, roof.p2]
				})
				delete this.suit[roof.id]
			}
		}

		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.data.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
		}

		if (db.data.users[m.sender].afkTime > -1) {
			let user = global.db.data.users[m.sender]
			reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
			user.afkTime = -1
			user.afkReason = ''
		}
		switch (command) {
			case 'inventori':
			case 'inventory':
			case 'profile': {
				if (q.includes('--help')) return reply(examkosong)
				if (!isDarah) {
					addInventoriDarah(m.sender, DarahAwal)
				}
				if (!isInventory) {
					addInventori(m.sender)
				}
				if (!isInventoriBuruan) {
					addInventoriBuruan(m.sender)
				}

				var Hori = await getBuffer(picak + `User's Inventory`)
				let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
				teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
				teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
				teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
				teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
				teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
				teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
				teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
				teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
				teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
				teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
				teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
				teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
				teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
				teksehmazeh += `_*${pushname}*_`
				await Hori.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, Hori, [{
					"urlButton": {
						"displayText": "❣ Bot Web 🌏",
						"url": `${myweb}`
					}
				}])
			}
			break
		case 'userlimit': {
			let txt = `「 *ALL LIMIT USER* 」\n\n`
			for (let i of _limit) {
				txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
			}
			reply(txt)
		}
		break
		case 'leaderboard': {
			let txt = `「 *LEADERBOARD* 」\n\n`
			for (let i of _buruan) {
				txt += `➸ *ID :* ${i.id}\n`
				txt += `*🐟Fish* : ${i.ikan}\n`
				txt += `*🐔Chicken* : ${i.ayam}\n`
				txt += `*🐇Rabbit* : ${i.kelinci}\n`
				txt += `*🐑Sheep* : ${i.domba}\n`
				txt += `*🐄Cow* : ${i.sapi}\n`
				txt += `*🐘Elephant* : ${i.gajah}\n\n`
			}
			reply(txt)
		}
		break
		case 'mining':
		case 'mine': {
			if (q.includes('--help')) return reply(examkosong)
			if (!isInventory) {
				addInventori(m.sender)
			}
			if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`)
			let besi = [1, 2, 5, 0, 3, 0, 1, 1, 4, 1, 5, 0, 0]
			let emas = [0, 1, 2, 3, 0, 0, 0, 1, 1, 0, 0, 2]
			let emerald = [0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0, 1]
			var besinya = besi[Math.floor(Math.random() * besi.length)]
			var emasnya = emas[Math.floor(Math.random() * emas.length)]
			var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
			setTimeout(() => {
				let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
				let buttons = [{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: 'Mine Again⛏️'
					},
					type: 1
				}, ]
				let buttonMessage = {
					image: {
						url: './storage/image/tambang.jpg'
					},
					caption: caption,
					footer: pushname,
					buttons: buttons,
					headerType: 4
				}
				Hori.sendMessage(from, buttonMessage, {
					quoted: m
				})

			}, 7000)
			setTimeout(() => {
				reply(`@${m.sender.split("@")[0]} Started Mining🎣`)
			}, 1500)
			kurangDarah(m.sender, 10)
			addBesi(m.sender, besinya)
			addEmas(m.sended, emasnya)
			addEmerald(m.sender, emeraldnya)
		}
		break
		case 'beli':
		case 'buy': {
			if (q.includes('--help')) return reply(examkosong)
			if (!isInventoriBuruan) {
				addInventoriBuruan(m.sender)
			}
			if (!isInventoryMonay) {
				addInventoriMonay(m.sender)
			}
			if (!isInventory) {
				addInventori(m.sender)
			}
			if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
			var anu = args[1]
			if (args[0] === 'potion') {
				let noh = 100000 * anu
				if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
				if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
				kurangMonay(m.sender, noh)
				var apalu = anu * 1
				addPotion(m.sender, apalu)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'baitfood') {
				let noh = 5000 * anu
				if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
				if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
				kurangMonay(m.sender, noh)
				var apalu = anu * 1
				addUmpan(m.sender, apalu)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'limit') {
				let noh = 35000 * anu
				if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
				if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
				kurangMonay(m.sender, noh)
				var apalu = anu * 1
				addLimit(m.sender, apalu)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
				}, 2000)
			} else {
				reply("Incorrect Format!")
			}
		}
		break
		case 'sel':
		case 'jual': {
			if (!q) return reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
			if (!isInventoriBuruan) {
				addInventoriBuruan(m.sender)
			}
			if (!isInventoryMonay) {
				addInventoriMonay(m.sender)
			}
			if (!isInventory) {
				addInventori(m.sender)
			}
			var anu = args[1]
			if (args[0] === 'fish') {
				if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
				kurangIkan(m.sender, anu)
				let monaynya = 1500 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'chicken') {
				if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
				kurangAyam(m.sender, anu)
				let monaynya = 2500 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'rabbit') {
				if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
				kurangKelinci(m.sender, anu)
				let monaynya = 3000 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'sheep') {
				if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
				kurangDomba(m.sender, anu)
				let monaynya = 5000 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'cow') {
				if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
				kurangSapi(m.sender, anu)
				let monaynya = 10000 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'elephant') {
				if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
				kurangGajah(m.sender, anu)
				let monaynya = 15000 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'iron') {
				if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
				kurangBesi(m.sender, anu)
				let monaynya = 16000 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'gold') {
				if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
				kurangEmas(m.sender, anu)
				let monaynya = 50000 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
				}, 2000)
			} else
			if (args[0] === 'emerald') {
				if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
				if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
				kurangEmerald(m.sender, anu)
				let monaynya = 100000 * anu
				addMonay(m.sender, monaynya)
				setTimeout(() => {
					reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
				}, 2000)
			} else {
				reply("Incorrect Format!")
			}

		}
		break

		case 'heal': {
			if (q.includes('--help')) return reply(examkosong)
			if (!isCekDarah < 1) return reply('You Can Only Heal When Your Blood Is 0')
			if (isCekDarah > 100) return reply('Your Blood Is Full')
			if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`)
			addDarah(m.sender, 100)
			kurangPotion(m.sender, 1)
			reply('Success! Your Bood Is Full')
		}
		break
		case 'hunt':
		case 'hunting': {
			if (q.includes('--help')) return reply(examkosong)
			if (!isDarah) {
				addInventoriDarah(m.sender, DarahAwal)
			}
			if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions')
			if (!isInventoriBuruan) {
				addInventoriBuruan(m.sender)
			}
			let luka = ["Pierced by a thorn while hunting", "Slipped into the abyss while hunting", "Scratched by a wild animal", "Not careful", "Entangled in roots", "Fall while hunting"]
			let location = ["Jungle", "Amazon forest", "Tropical forest", "Meadow", "African forest", "Mountains"]
			var ikanmu = Math.ceil(Math.random() * 10)
			var ayam = Math.ceil(Math.random() * 8)
			var kelinci = Math.ceil(Math.random() * 7)
			var dombanya = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1]
			var sapinya = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1]
			var gajahnya = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1]
			var domba = dombanya[Math.floor(Math.random() * dombanya.length)]
			var sapi = sapinya[Math.floor(Math.random() * sapinya.length)]
			var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
			var lukanya = luka[Math.floor(Math.random() * luka.length)]
			var lokasinya = location[Math.floor(Math.random() * location.length)]
			if (lokasinya === 'Jungle') {
				var image = './storage/image/rimba.jpg'
			} else
			if (lokasinya === 'Amazon forest') {
				var image = './storage/image/amazon.jpg'
			} else
			if (lokasinya === 'Tropical forest') {
				var image = './storage/image/tropis.jpg'
			} else
			if (lokasinya === 'Meadow') {
				var image = './storage/image/padang_rumput.jpg'
			} else
			if (lokasinya === 'African forest') {
				var image = './storage/image/afrika.jpg'
			} else
			if (lokasinya === 'Mountains') {
				var image = './storage/image/pegunungan.jpg'
			}
			setTimeout(() => {
				let teksehmazeh = `_[ HUNT RESULT ]_\n`
				teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
				teksehmazeh += `*🐔Chicken* : ${ayam}\n`
				teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
				teksehmazeh += `*🐑Sheep* : ${domba}\n`
				teksehmazeh += `*🐄Cow* : ${sapi}\n`
				teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
				teksehmazeh += `_[ INFO ]_\n`
				teksehmazeh += `*Location* : ${lokasinya}\n`
				teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
				teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
				let buttons = [{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: 'Hunt Again️🏹'
					},
					type: 1
				}, ]
				let buttonMessage = {
					image: {
						url: image
					},
					caption: teksehmazeh,
					footer: pushname,
					buttons: buttons,
					headerType: 4
				}
				Hori.sendMessage(from, buttonMessage, {
					quoted: m
				})
			}, 5000)
			setTimeout(() => {
				reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)
			}, 1000)
			addIkan(m.sender, ikanmu)
			addAyam(m.sender, ayam)
			addKelinci(m.sender, kelinci)
			addDomba(m.sender, domba)
			addSapi(m.sender, sapi)
			addGajah(m.sender, gajah)
			kurangDarah(m.sender, 10)
		}
		break
		case 'afk': {
			let user = global.db.data.users[m.sender]
			user.afkTime = +new Date
			user.afkReason = text
			reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
		}
		break
		case 'ttc':
		case 'ttt':
		case 'tictactoe': {
			let TicTacToe = require("./lib/tictactoe")
			this.game = this.game ? this.game : {}
			if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
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
					} [v]
				})
				let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
				if (room.x !== room.o) await Hori.sendText(room.x, str, m, {
					mentions: parseMention(str)
				})
				await Hori.sendText(room.o, str, m, {
					mentions: parseMention(str)
				})
			} else {
				room = {
					id: 'tictactoe-' + (+new Date),
					x: m.chat,
					o: '',
					game: new TicTacToe(m.sender, 'o'),
					state: 'WAITING'
				}
				if (text) room.name = text
				reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
				this.game[room.id] = room
			}
		}
		break
		case 'delttc':
		case 'delttt': {
			this.game = this.game ? this.game : {}
			try {
				if (this.game) {
					delete this.game
					Hori.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
				} else if (!this.game) {
					reply(`TicTacToe🎮 Session Does Not Exist`)
				} else reply('?')
			} catch (e) {
				reply('Damaged')
			}
		}
		break
		case 'suitpvp':
		case 'suit': {
			this.suit = this.suit ? this.suit : {}
			let poin = 10
			let poin_lose = 10
			let timeout = 60000
			if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
			if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
			if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
				mentions: [owner[1] + '@s.whatsapp.net']
			})
			if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
			let id = 'suit_' + new Date() * 1
			let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
			this.suit[id] = {
				chat: await Hori.sendText(m.chat, caption, m, {
					mentions: parseMention(caption)
				}),
				id: id,
				p: m.sender,
				p2: m.mentionedJid[0],
				status: 'wait',
				waktu: setTimeout(() => {
					if (this.suit[id]) Hori.sendText(m.chat, `_Suit Time Out_`, m)
					delete this.suit[id]
				}, 60000),
				poin,
				poin_lose,
				timeout
			}
		}
		break
		case 'chat': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
			if (args[0] === 'mute') {
				Hori.chatModify({
					mute: 'Infinity'
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unmute') {
				Hori.chatModify({
					mute: null
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'archive') {
				Hori.chatModify({
					archive: true
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unarchive') {
				Hori.chatModify({
					archive: false
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'read') {
				Hori.chatModify({
					markRead: true
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unread') {
				Hori.chatModify({
					markRead: false
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'delete') {
				Hori.chatModify({
					clear: {
						message: {
							id: m.quoted.id,
							fromMe: true
						}
					}
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			}
		}
		break
		case 'family100': {
			if ('family100' + m.chat in _family100) {
				reply('There Are Still Unfinished Sessions!')
				reply(false)
			}
			let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
			let random = anu[Math.floor(Math.random() * anu.length)]
			let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
			_family100['family100' + m.chat] = {
				id: 'family100' + m.chat,
				pesan: await Hori.sendText(m.chat, hasil, m),
				...random,
				terjawab: Array.from(random.jawaban, () => false),
				hadiah: 6,
			}
		}
		break
		case 'halah':
		case 'hilih':
		case 'huluh':
		case 'heleh':
		case 'holoh':
			if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
			ter = command[1].toLowerCase()
			tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
			reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			break
		case 'guess': {
			if (!text) return replay(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
			if (args[0] === "song") {
				if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions`)
				let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
				let result = anu[Math.floor(Math.random() * anu.length)]
				let msg = await Hori.sendMessage(m.chat, {
					audio: {
						url: result.link_song
					},
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
				Hori.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
					tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					Hori.sendButtonText(m.chat, [{
						buttonId: 'guess song',
						buttonText: {
							displayText: 'Guess The Song'
						},
						type: 1
					}], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, Hori.user.name, m)
					delete tebaklagu[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'picture') {
				if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
				let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
				let result = anu[Math.floor(Math.random() * anu.length)]
				Hori.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
					tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					Hori.sendButtonText(m.chat, [{
						buttonId: 'guess picture',
						buttonText: {
							displayText: 'Guess The Picture'
						},
						type: 1
					}], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, Hori.user.name, m)
					delete tebakgambar[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'word') {
				if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
				let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
				let result = anu[Math.floor(Math.random() * anu.length)]
				Hori.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
					tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					Hori.sendButtonText(m.chat, [{
						buttonId: 'guess word',
						buttonText: {
							displayText: 'Guess The Word'
						},
						type: 1
					}], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, Hori.user.name, m)
					delete tebakkata[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'sentence') {
				if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
				let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
				let result = anu[Math.floor(Math.random() * anu.length)]
				Hori.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
					tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					Hori.sendButtonText(m.chat, [{
						buttonId: 'guess sentence',
						buttonText: {
							displayText: 'Guess The Sentence'
						},
						type: 1
					}], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, Hori.user.name, m)
					delete tebakkalimat[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'lyrics') {
				if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
				let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
				let result = anu[Math.floor(Math.random() * anu.length)]
				Hori.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
					tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					Hori.sendButtonText(m.chat, [{
						buttonId: 'guess lyrics',
						buttonText: {
							displayText: 'Guess The Lyrics'
						},
						type: 1
					}], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, Hori.user.name, m)
					delete tebaklirik[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'blank') {
				if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
				let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
				let result = anu[Math.floor(Math.random() * anu.length)]
				Hori.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
					caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
				})
				await sleep(60000)
				if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					Hori.sendButtonText(m.chat, [{
						buttonId: 'guess blank',
						buttonText: {
							displayText: 'Guess The Blank'
						},
						type: 1
					}], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, Hori.user.name, m)
					delete caklontong[m.sender.split('@')[0]]
					delete caklontong_desk[m.sender.split('@')[0]]
				}
			}
		}
		break
		case 'kuismath':
		case 'math': {
			if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
			let {
				genMath,
				modes
			} = require('./lib/math')
			if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
			let result = await genMath(text.toLowerCase())
			Hori.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
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
			if (!m.isGroup) return replay(`${mess.group}`)
			let member = participants.map(u => u.id)
			let me = m.sender
			let jodoh = member[Math.floor(Math.random() * member.length)]
			let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
			let ments = [me, jodoh]
			let buttons = [{
				buttonId: '❤️',
				buttonText: {
					displayText: '❤️'
				},
				type: 1
			}]
			await Hori.sendButtonText(m.chat, buttons, jawab, Hori.user.name, m, {
				mentions: ments
			})
		}
		break
		case 'couple': {
			if (!m.isGroup) return replay(`${mess.group}`)
			let member = participants.map(u => u.id)
			let orang = member[Math.floor(Math.random() * member.length)]
			let jodoh = member[Math.floor(Math.random() * member.length)]
			let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
			let menst = [orang, jodoh]
			let buttons = [{
				buttonId: '❤️',
				buttonText: {
					displayText: '❤️'
				},
				type: 1
			}]
			await Hori.sendButtonText(m.chat, buttons, jawab, Hori.user.name, m, {
				mentions: menst
			})
		}
		break
		case 'is':
			if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
			const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
			const kah = apa[Math.floor(Math.random() * apa.length)]
			Hori.sendMessage(from, {
				text: `Question : Is ${q}\nAnswer : ${kah}`
			}, {
				quoted: m
			})

			break
		case 'what':
			if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
			const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
			const kahk = lel[Math.floor(Math.random() * lel.length)]
			Hori.sendMessage(from, {
				text: `Question : What ${q}\nAnswer : ${kahk}`
			}, {
				quoted: m
			})

			break
		case 'can':
			if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
			const bisa = [`Can`, `Can't`, `Cannot`, `Of Course You Can!!!`]
			const ga = bisa[Math.floor(Math.random() * bisa.length)]
			Hori.sendMessage(from, {
				text: `Question : Can ${q}\nAnswer : ${ga}`
			}, {
				quoted: m
			})

			break
		case 'how':
			if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
			const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`, `Holy Cow! Really???`, `Dizzy Ah`, `Ohhh I See:(`, `The Patient, Boss:(`, `How Are You?`]
			const ya = gimana[Math.floor(Math.random() * gimana.length)]
			Hori.sendMessage(from, {
				text: `Question : ${q}\nAnswer : How ${ya}`
			}, {
				quoted: m
			})

			break
		case 'rate':
			if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
			const ra = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
			const te = ra[Math.floor(Math.random() * ra.length)]
			Hori.sendMessage(from, {
				text: `Rate : ${q}\nAnswer : *${te}%*`
			}, {
				quoted: m
			})

			break
		case 'handsomecheck':
			if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
			const gan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
			const teng = gan[Math.floor(Math.random() * gan.length)]
			Hori.sendMessage(from, {
				text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
			}, {
				quoted: m
			})

			break
		case 'beautifulcheck':
			if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
			const can = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
			const tik = can[Math.floor(Math.random() * can.length)]
			Hori.sendMessage(from, {
				text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*`
			}, {
				quoted: m
			})

			break
		case 'awesomecheck':
		case 'greatcheck':
		case 'gaycheck':
		case 'cutecheck':
		case 'lesbicheck':
		case 'lesbiancheck':
		case 'hornycheck':
		case 'prettycheck':
		case 'lovelycheck':
		case 'uglycheck':
			if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
			const sangeh = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
			const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
			Hori.sendMessage(from, {
				text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*`
			}, {
				quoted: m
			})
			break
		case 'charactercheck':
			//❣ Bot Web 🌏 by xeon⛔\\
			if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
			const xeony = ['Compassionate', 'Generous', 'Grumpy', 'Forgiving', 'Obedient', 'Good', 'Simp', 'Kind-Hearted', 'patient', 'UwU', 'top, anyway', 'Helpful']
			const taky = xeony[Math.floor(Math.random() * xeony.length)]
			Hori.sendMessage(from, {
				text: `Character Check : ${q}\nAnswer : *${taky}*`
			}, {
				quoted: m
			})
			break
		case 'stupid':
		case 'foolish':
		case 'smart':
		case 'idiot':
		case 'gay':
		case 'lesbi':
		case 'bastard':
		case 'stubble':
		case 'dog':
		case 'fuck':
		case 'ape':
		case 'noob':
		case 'great':
		case 'horny':
		case 'wibu':
		case 'asshole':
		case 'handsome':
		case 'beautiful':
		case 'cute':
		case 'kind':
		case 'ugly':
		case 'pretty':
		case 'lesbian':
		case 'randi':
		case 'gandu':
		case 'madarchod':
		case 'kala':
		case 'gora':
		case 'chutiya':
		case 'nibba':
		case 'nibbi':
		case 'bhosdiwala':
		case 'chutmarika':
		case 'bokachoda':
		case 'suarerbaccha':
		case 'bolochoda':
		case 'muthal':
		case 'muthbaaz':
		case 'randibaaz':
		case 'topibaaz':
		case 'cunt':
		case 'nerd':
		case 'behenchod':
		case 'behnchoda':
		case 'bhosdika':
		case 'bc':
		case 'nerd':
		case 'mc':
		case 'bsdk':
		case 'bhosdk':
		case 'nigger':
		case 'loda':
		case 'laund':
		case 'nigga':
		case 'sexy':
		case 'hot': {
			if (!m.isGroup) return replay(`${mess.group}`)
			let member = participants.map(u => u.id)
			let me = m.sender
			let jodoh = member[Math.floor(Math.random() * member.length)]
			let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
			let ments = [me, jodoh]
			let buttons = [{
				buttonId: '👀',
				buttonText: {
					displayText: '👀😂'
				},
				type: 1
			}]
			await Hori.sendButtonText(m.chat, buttons, jawab, Hori.user.name, m, {
				mentions: ments
			})
		}
		break
		case 'when':
			if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
			const kapan = ['5 More Days', '10 More Days', '15 More Days', '20 More Days', '25 More Days', '30 More Days', '35 More Days', '40 More Days', '45 More Days', '50 More Days', '55 More Days', '60 More Days', '65 More Days', '70 More Days', '75 More Days', '80 More Days', '85 More Days', '90 More Days', '100 More Days', '5 Months More', '10 Months More', '15 Months More', '20 Months More', '25 Months More', '30 Months More', '35 Months More', '40 Months More', '45 Months More', '50 Months More', '55 Months More', '60 Months More', '65 Months More', '70 Months More', '75 Months More', '80 Months More', '85 Months More', '90 Months More', '100 Months More', '1 More Year', '2 More Years', '3 More Years', '4 More Years', '5 More Years', 'Tomorrow', 'The Day After Tomorrow', `After This Command, You Too ${q}`]
			const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
			Hori.sendMessage(from, {
				text: `Question : ${q}\nAnswer : *${kapankah}*`
			}, {
				quoted: m
			})
			break
		case 'wangy':
			if (!text) return replay(`Use Text, Example : ${prefix + command} cheems`)
			qq = q.toUpperCase()
			awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
			reply(awikwok)
			break
		case 'checkdeath':
			if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Xeon`)
			predea = await axios.get(`https://api.agify.io/?name=${q}`)
			reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
			break
		case 'halah':
		case 'hilih':
		case 'huluh':
		case 'heleh':
		case 'holoh':
			if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
			ter = command[1].toLowerCase()
			tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
			reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			break
		case 'react':
		case 'reaction': {
			if (!isCreator) return replay(`${mess.owner}`)
			reactionMessage = {
				react: {
					text: args[0],
					key: {
						remoteJid: m.chat,
						fromMe: true,
						id: quoted.id
					}
				}
			}
			Hori.sendMessage(m.chat, reactionMessage)
		}
		break
		case 'join': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Enter The Group Link!`)
			if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
			reply(mess.wait)
			let result = args[0].split('https://chat.whatsapp.com/')[1]
			await Hori.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'leave': {
			if (!isCreator) return replay(`${mess.owner}`)
			await Hori.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setexif': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Example : ${prefix + command} packname|author`)
			global.packname = text.split("|")[0]
			global.author = text.split("|")[1]
			reply(`Exif Has Been Successfully Changed to\n\n${design} Packname : ${global.packname}\n${design} Author : ${global.author}`)
		}
		break
		case 'kick': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await Hori.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'add': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await Hori.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'promote': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await Hori.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'demote': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await Hori.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'block': {
			if (!isCreator) return replay(`${mess.owner}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await Hori.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'unblock': {
			if (!isCreator) return replay(`${mess.owner}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await Hori.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setname':
		case 'setgcname':
		case 'setsubject': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) replay(`${mess.admin}`)
			if (!text) replay(`Where Is The Text?`)
			await Hori.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setdesc':
		case 'setdesk': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) replay(`${mess.admin}`)
			if (!text) replay(`Where Is The Text?`)
			await Hori.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setbotpp': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			let media = await Hori.downloadAndSaveMediaMessage(quoted)
			await Hori.updateProfilePicture(botNumber, {
				url: media
			}).catch((err) => fs.unlinkSync(media))
			reply(mess.success)
		}
		break
		case 'setgrouppp':
		case 'setgruppp':
		case 'setgcpp': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			let media = await Hori.downloadAndSaveMediaMessage(quoted)
			await Hori.updateProfilePicture(m.chat, {
				url: media
			}).catch((err) => fs.unlinkSync(media))
			reply(mess.success)
		}
		break
		case 'tagall': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
			for (let mem of participants) {
				teks += `${design} @${mem.id.split('@')[0]}\n`
			}
			Hori.sendMessage(m.chat, {
				text: teks,
				mentions: participants.map(a => a.id)
			}, {
				quoted: m
			})
		}
		break
		case 'hidetag': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			Hori.sendMessage(m.chat, {
				text: q ? q : '',
				mentions: participants.map(a => a.id)
			}, {
				quoted: m
			})
		}
		break
		case 'style':
		case 'styletext': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
			db.data.users[m.sender].limit -= 1 // -1 limit
			let {
				styletext
			} = require('./lib/scraper')
			if (!text) return replay(`Enter Query Text!`)
			let anu = await styletext(text)
			let teks = `Entered Text ${text}\n\n`
			for (let i of anu) {
				teks += `${design} *${i.name}* : ${i.result}\n\n`
			}
			reply(teks)
		}
		break
		case 'vote': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
			if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
			reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
			vote[m.chat] = [q, [],
				[]
			]
			await sleep(1000)
			upvote = vote[m.chat][1]
			devote = vote[m.chat][2]
			teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
			let buttonsVote = [{
					buttonId: `${prefix}upvote`,
					buttonText: {
						displayText: 'Upvote'
					},
					type: 1
				},
				{
					buttonId: `${prefix}devote`,
					buttonText: {
						displayText: 'Devote'
					},
					type: 1
				}
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
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
			isVote = vote[m.chat][1].concat(vote[m.chat][2])
			wasVote = isVote.includes(m.sender)
			if (wasVote) replay(`You've Voted`)
			vote[m.chat][1].push(m.sender)
			menvote = vote[m.chat][1].concat(vote[m.chat][2])
			teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
			let buttonsUpvote = [{
					buttonId: `${prefix}upvote`,
					buttonText: {
						displayText: 'Upvote'
					},
					type: 1
				},
				{
					buttonId: `${prefix}devote`,
					buttonText: {
						displayText: 'Devote'
					},
					type: 1
				}
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
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
			isVote = vote[m.chat][1].concat(vote[m.chat][2])
			wasVote = isVote.includes(m.sender)
			if (wasVote) return replay(`You've Voted`)
			vote[m.chat][2].push(m.sender)
			menvote = vote[m.chat][1].concat(vote[m.chat][2])
			teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
			let buttonsDevote = [{
					buttonId: `${prefix}upvote`,
					buttonText: {
						displayText: 'Upvote'
					},
					type: 1
				},
				{
					buttonId: `${prefix}devote`,
					buttonText: {
						displayText: 'Devote'
					},
					type: 1
				}
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

		case 'checkvote':
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
			teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${Hori.user.id}
`
			Hori.sendTextWithMentions(m.chat, teks_vote, m)
			break
		case 'deletevote':
		case 'delvote':
		case 'hapusvote': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
			delete vote[m.chat]
			reply('Successfully Deleted The Vote Session In This Group')
		}
		break
		case 'group':
		case 'grup': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (args[0] === 'close') {
				await Hori.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'open') {
				await Hori.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
			} else {
				let buttons = [{
						buttonId: 'group open',
						buttonText: {
							displayText: 'Open'
						},
						type: 1
					},
					{
						buttonId: 'group close',
						buttonText: {
							displayText: 'Close'
						},
						type: 1
					}
				]
				await Hori.sendButtonText(m.chat, buttons, `Group Mode`, Hori.user.name, m)

			}
		}
		break
		case 'editinfo': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (args[0] === 'open') {
				await Hori.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'close') {
				await Hori.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
			} else {
				let buttons = [{
						buttonId: 'editinfo open',
						buttonText: {
							displayText: 'Open'
						},
						type: 1
					},
					{
						buttonId: 'editinfo close',
						buttonText: {
							displayText: 'Close'
						},
						type: 1
					}
				]
				await Hori.sendButtonText(m.chat, buttons, `Mode Edit Info`, Hori.user.name, m)

			}
		}
		break
		case 'antilink': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (args[0] === "on") {
				if (db.data.chats[m.chat].antilink) return reply(`Activated`)
				db.data.chats[m.chat].antilink = true
				reply(`Antilink Active !`)
			} else if (args[0] === "off") {
				if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
				db.data.chats[m.chat].antilink = false
				reply(`Antilink Inactive !`)
			} else {
				let buttons = [{
						buttonId: 'antilink on',
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: 'antilink off',
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await Hori.sendButtonText(m.chat, buttons, `Antilink Mode`, Hori.user.name, m)
			}
		}
		break
		case 'mute': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (args[0] === "on") {
				if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
				db.data.chats[m.chat].mute = true
				reply(`${Hori.user.name} Has Been Muted In This Group !`)
			} else if (args[0] === "off") {
				if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
				db.data.chats[m.chat].mute = false
				reply(`${Hori.user.name} Has Been Unmuted In This Group!`)
			} else {
				let buttons = [{
						buttonId: 'mute on',
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: 'mute off',
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await Hori.sendButtonText(m.chat, buttons, `Mute Bot`, Hori.user.name, m)
			}
		}
		break
		case 'linkgroup':
		case 'linkgc':
		case 'gclink':
		case 'grouplink': {
			if (!m.isGroup) return replay(`${mess.group}`)
			let response = await Hori.groupInviteCode(m.chat)
			Hori.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, {
				detectLink: true
			})
		}
		break
		case 'ephemeral': {
			if (!m.isGroup) replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (!text) return replay(`Enter The enable/disable Values`)
			if (args[0] === 'enable') {
				await Hori.sendMessage(m.chat, {
					disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL
				}).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'disable') {
				await Hori.sendMessage(m.chat, {
					disappearingMessagesInChat: false
				}).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			}
		}
		break
		case 'delete':
		case 'del': {
			if (!m.quoted) reply(false)
			let {
				chat,
				fromMe,
				id,
				isBaileys
			} = m.quoted
			if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
			Hori.sendMessage(m.chat, {
				delete: {
					remoteJid: m.chat,
					fromMe: true,
					id: m.quoted.id,
					participant: m.quoted.sender
				}
			})
		}
		break
		case 'bcgc':
		case 'bcgroup': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Xeon Handsome`)
			let getGroups = await Hori.groupFetchAllParticipating()
			let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
			let anu = groups.map(v => v.id)
			reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
			for (let i of anu) {
				await sleep(1500)
				let btn = [{
					urlButton: {
						displayText: 'Script🔖',
						url: `${sc}`
					}
				}, {
					urlButton: {
						displayText: '❣ Bot Web 🌏',
						url: `${myweb}`
					}
				}, {
					quickReplyButton: {
						displayText: '🎀Menu🎀',
						id: 'menu'
					}
				}, {
					quickReplyButton: {
						displayText: '🙋‍♂️ Owner 🐱‍💻',
						id: 'owner'
					}
				}]
				let txt = `「 Cheems Bot Broadcast 」\n\n${text}`
				Hori.send5ButImg(i, txt, Hori.user.name, global.thumb, btn)
			}
			reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
		}
		break
		case 'bc':
		case 'broadcast':
		case 'bcall': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Xeon`)
			let anu = await store.chats.all().map(v => v.id)
			reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
			for (let yoi of anu) {
				await sleep(1500)
				let btn = [{
					urlButton: {
						displayText: 'Script🔖',
						url: `${sc}`
					}
				}, {
					urlButton: {
						displayText: '❣ Bot Web 🌏',
						url: `${myweb}`
					}
				}, {
					quickReplyButton: {
						displayText: '🎀Menu🎀',
						id: 'menu'
					}
				}, {
					quickReplyButton: {
						displayText: '🙋‍♂️ Owner 🐱‍💻',
						id: 'owner'
					}
				}]
				let txt = `「 Cheems Bot Broadcast 」\n\n${text}`
				Hori.send5ButImg(yoi, txt, Hori.user.name, global.thumb, btn)
			}
			reply('Broadcast Success')
		}
		break
		case 'chatinfo':
		case 'infochat': {
			if (!m.quoted) return reply(`Reply Message`)
			let msg = await m.getQuotedObj()
			if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
			let teks = ''
			for (let i of msg.userReceipt) {
				let read = i.readTimestamp
				let unread = i.receiptTimestamp
				let waktu = read ? read : unread
				teks += `${design} @${i.userJid.split('@')[0]}\n`
				teks += ` ┗━${design} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${design} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
			}
			Hori.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'q':
		case 'quoted': {
			if (!m.quoted) return reply('Reply Message!!')
			let wokwol = await Hori.serializeM(await m.getQuotedObj())
			if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
			await wokwol.quoted.copyNForward(m.chat, true)
		}
		break
		case 'listpc':
		case 'pclist': {
			let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
			let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
			for (let i of anu) {
				let nama = store.messages[i].array[0].pushName
				teks += `🐕 *Name :* ${nama}\n🐕 *User :* @${i.split('@')[0]}\n🐕 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
			}
			Hori.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'listgc':
		case 'gclist': {
			let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
			let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
			for (let i of anu) {
				let metadata = await Hori.groupMetadata(i)
				teks += `🐕 *Name :* ${metadata.subject}\n🐕 *Owner :* @${metadata.owner.split('@')[0]}\n🐕 *ID :* ${metadata.id}\n🐕 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n🐕 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
			}
			Hori.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'listonline':
		case 'onlinelist': {
			let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
			let online = [...Object.keys(store.presences[id]), botNumber]
			Hori.sendText(m.chat, 'Online List:\n\n' + online.map(v => '${design} @' + v.replace(/@.+/, '')).join`\n`, m, {
				mentions: online
			})
		}
		break
		case 'sticker':
		case 's':
		case 'stickergif':
		case 'sgif': {
			if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
			reply(mess.wait)
			if (/image/.test(mime)) {
				let media = await quoted.download()
				let encmedia = await Hori.sendImageAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
				let media = await quoted.download()
				let encmedia = await Hori.sendVideoAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else {
				reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
			}
		}
		break
		case 'smemex':
		case 'stickermemex':
		case 'stickmemex': {
			let {
				TelegraPh
			} = require('./lib/uploader')
			if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
			if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
			reply(mess.wait)
			mee = await Hori.downloadAndSaveMediaMessage(quoted)
			mem = await TelegraPh(mee)
			meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
			memek = await Hori.sendImageAsSticker(m.chat, meme, m, {
				packname: global.packname,
				author: global.author
			})
			await fs.unlinkSync(memek)
		}
		break
		case 'ebinary': {
			if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
			let {
				eBinary
			} = require('./lib/binary')
			let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
			let eb = await eBinary(teks)
			reply(eb)
		}
		break
		case 'dbinary': {
			if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
			let {
				dBinary
			} = require('./lib/binary')
			let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
			let db = await dBinary(teks)
			reply(db)
		}
		break
		case 'emojimix': {
			if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
			let [emoji1, emoji2] = text.split`+`
			let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
			for (let res of anu.results) {
				let encmedia = await Hori.sendImageAsSticker(m.chat, res.url, m, {
					packname: global.packname,
					author: global.author,
					categories: res.tags
				})
				await fs.unlinkSync(encmedia)
			}
		}
		break
		case 'toimage':
		case 'toimg': {
			if (!quoted) return reply(`Reply Image`)
			if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
			reply(mess.wait)
			let media = await Hori.downloadAndSaveMediaMessage(quoted)
			let ran = await getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) reply(err)
				let buffer = fs.readFileSync(ran)
				Hori.sendMessage(m.chat, {
					image: buffer
				}, {
					quoted: m
				})
				fs.unlinkSync(ran)
			})
		}
		break
		case 'tomp4':
		case 'tovideo': {
			if (!quoted) reply(`Reply Image`)
			if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
			reply(mess.wait)
			let {
				webp2mp4File
			} = require('./lib/uploader')
			let media = await Hori.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await Hori.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Convert Webp To Video'
				}
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break
		case 'togif': {
			if (!quoted) return reply(`Reply Image`)
			if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
			reply(mess.wait)
			let {
				webp2mp4File
			} = require('./lib/uploader')
			let media = await Hori.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await Hori.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Convert Webp To Video'
				},
				gifPlayback: true
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break
		case 'tourl': {
			reply(mess.wait)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader')
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
		case 'imagenobg':
		case 'removebg':
		case 'remove-bg': {
			if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			let remobg = require('remove.bg')
			let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
			let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
			hmm = await './src/remobg-' + getRandom('')
			localFile = await Hori.downloadAndSaveMediaMessage(quoted, hmm)
			outputFile = await './src/hremo-' + getRandom('.png')
			reply(mess.wait)
			remobg.removeBackgroundFromImageFile({
				path: localFile,
				apiKey: apinobg,
				size: "regular",
				type: "auto",
				scale: "100%",
				outputFile
			}).then(async result => {
				Hori.sendMessage(m.chat, {
					image: fs.readFileSync(outputFile),
					caption: mess.success
				}, {
					quoted: m
				})
				await fs.unlinkSync(localFile)
				await fs.unlinkSync(outputFile)
			})
		}
		break
		case 'google': {
			if (!text) return reply(`Example : ${prefix + command} cheems shiba inu`)
			let google = require('google-it')
			google({
				'query': text
			}).then(res => {
				let teks = `Google Search Title : ${text}\n\n`
				for (let g of res) {
					teks += `${design} *Title* : ${g.title}\n`
					teks += `${design} *Description* : ${g.snippet}\n`
					teks += `${design} *Link* : ${g.link}\n\n────────────────────────\n\n`
				}
				reply(teks)
			})
		}
		break
		case 'gimage':
		case 'googleimage': {
			if (!text) return reply(`Example : ${prefix + command} cheems`)
			let gis = require('g-i-s')
			gis(text, async (error, result) => {
				n = result
				images = n[Math.floor(Math.random() * n.length)].url
				let buttons = [{
					buttonId: `gimage ${text}`,
					buttonText: {
						displayText: '➡️➡️Next Image➡️➡️'
					},
					type: 1
				}]
				let buttonMessage = {
					image: {
						url: images
					},
					caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
					footer: Hori.user.name,
					buttons: buttons,
					headerType: 4
				}
				Hori.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			})
		}
		break
		case 'ytmp3':
		case 'getmusic':
		case 'ytaudio': {
			let {
				yta
			} = require('./lib/y2mate')
			if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
			let quality = args[1] ? args[1] : '320kbps'
			let media = await yta(text, quality)
			if (media.filesize >= 999999) return reply('File Over Limit ' + util.format(media))
			Hori.sendImage(m.chat, media.thumb, `${design} Title : ${media.title}\n${design} File Size : ${media.filesizeF}\n${design} Url : ${isUrl(text)}\n${design} Ext : MP3\n${design} Resolution : ${args[1] || '320kbps'}`, m)
			Hori.sendMessage(m.chat, {
				audio: {
					url: media.dl_link
				},
				mimetype: 'audio/mpeg',
				fileName: `${media.title}.mp3`
			}, {
				quoted: m
			})
		}
		break
		case 'ytmp4':
		case 'getvideo':
		case 'ytvideo': {
			let {
				ytv
			} = require('./lib/y2mate')
			if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
			let quality = args[1] ? args[1] : '360p'
			let media = await ytv(text, quality)
			if (media.filesize >= 999999) return reply('File Over Limit ' + util.format(media))
			Hori.sendMessage(m.chat, {
				video: {
					url: media.dl_link
				},
				mimetype: 'video/mp4',
				fileName: `${media.title}.mp4`,
				caption: `${design} Title : ${media.title}\n${design} File Size : ${media.filesizeF}\n${design} Url : ${isUrl(text)}\n${design} Ext : MP3\n${design} Resolution : ${args[1] || '360p'}`
			}, {
				quoted: m
			})
		}
		break
		case 'getmusic': {
			let {
				yta
			} = require('./lib/y2mate')
			let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
			let quality = args[1] ? args[1] : '128kbps'
			let media = await yta(urls[text - 1], quality)
			if (media.filesize >= 100000) return reply('File Over Limit ' + util.format(media))
			Hori.sendImage(m.chat, media.thumb, `${design} Title : ${media.title}\n${design} File Size : ${media.filesizeF}\n${design} Url : ${urls[text - 1]}\n${design} Ext : MP3\n${design} Resolution : ${args[1] || '128kbps'}`, m)
			Hori.sendMessage(m.chat, {
				audio: {
					url: media.dl_link
				},
				mimetype: 'audio/mpeg',
				fileName: `${media.title}.mp3`
			}, {
				quoted: m
			})
		}
		break
		case 'getvideo': {
			let {
				ytv
			} = require('./lib/y2mate')
			if (!text) throw `Example : ${prefix + command} 1`
			if (!m.quoted) throw 'Reply Message'
			if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
			let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
			if (!urls) throw `Maybe The Message You Replied Does Not Contain The Video Search Result`
			let quality = args[1] ? args[1] : '360p'
			let media = await ytv(urls[text - 1], quality)
			if (media.filesize >= 100000) return reply('File Over Limit ' + util.format(media))
			Hori.sendMessage(m.chat, {
				video: {
					url: media.dl_link
				},
				mimetype: 'video/mp4',
				fileName: `${media.title}.mp4`,
				caption: `${design} Title : ${media.title}\n${design} File Size : ${media.filesizeF}\n${design} Url : ${urls[text - 1]}\n${design} Ext : MP3\n${design} Resolution : ${args[1] || '360p'}`
			}, {
				quoted: m
			})
		}
		break
		case 'pinterest': {
			reply(mess.wait)
			let {
				pinterest
			} = require('./lib/scraper')
			anu = await pinterest(text)
			result = anu[Math.floor(Math.random() * anu.length)]
			Hori.sendMessage(m.chat, {
				image: {
					url: result
				},
				caption: '${design} Media Url : ' + result
			}, {
				quoted: m
			})
		}
		break
		case 'webtonsearch':
		case 'webtoon':
			if (!text) return reply('What Are you Looking For??')
			await reply(mess.wait)
			dgxeon.Webtoons(q).then(async data => {
					let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*👍🏻 Like :* ${i.like}\n`
						txt += `*🤴🏻 Creator :* ${i.creator}\n`
						txt += `*🎥 Genre :* ${i.genre}\n`
						txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
					}
					await reply(txt)
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
		case 'drakor':
			if (!text) return reply('What Are You Looking For??')
			await reply(mess.wait)
			dgxeon.Drakor(`${text}`).then(async data => {
					let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*📆 Years :* ${i.years}\n`
						txt += `*🎥 Genre :* ${i.genre}\n`
						txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
					}
					await sendFileFromUrl(from, data[0].thumbnail, txt, m)
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
		case 'anime': {
			if (!text) return reply(`What Anime Are You Looking For??`)
			await reply(mess.wait)
			dgxeon.Anime(q).then(async data => {
					let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = [{
						"urlButton": {
							"displayText": "Watch🎥",
							"url": `${myweb}`
						}
					}]
					await Hori.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
		}
		break
		case 'character':
		case 'karakter':
			if (!text) return reply(`What Anime Character Are You Looking For??`)
			await reply(mess.wait)
			dgxeon.Character(q).then(async data => {
					let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
					for (let i of data) {
						txt += `*📫 Character :* ${i.character}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = [{
						"urlButton": {
							"displayText": "❣ Bot Web 🌏",
							"url": `${myweb}`
						}
					}]
					await Hori.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
		case 'manga':
			if (!text) return reply(`What Manga Are You Looking For??`)
			await reply(mess.wait)
			dgxeon.Manga(`${text}`).then(async data => {
					let txt = `*------「 MANGA-SEARCH 」------*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = [{
						"urlButton": {
							"displayText": "❣ Bot Web 🌏",
							"url": `${myweb}`
						}
					}]
					await Hori.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
		case 'waifu':
		case 'husbu':
		case 'neko':
		case 'shinobu':
		case 'megumin':
		case 'waifus':
		case 'nekos':
		case 'trap':
		case 'blowjob': {
			reply(mess.wait)
			Hori.sendMessage(m.chat, {
				image: {
					url: api('zenz', '/api/random/' + command, {}, 'apikey')
				},
				caption: 'Generated Random ' + command
			}, {
				quoted: m
			})
		}
		break
		case 'couplepp':
		case 'ppcouple': {
			reply(mess.wait)
			let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
			let random = anu[Math.floor(Math.random() * anu.length)]
			Hori.sendMessage(m.chat, {
				image: {
					url: random.male
				},
				caption: `Couple Male🙎🏻‍♂️`
			}, {
				quoted: m
			})
			Hori.sendMessage(m.chat, {
				image: {
					url: random.female
				},
				caption: `Couple Female🙎🏻‍♀️`
			}, {
				quoted: m
			})
		}
		break
		case 'coffee':
		case 'kopi': {
			let buttons = [{
				buttonId: `coffe`,
				buttonText: {
					displayText: '➡️Next Image➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: 'https://coffee.alexflipnote.dev/random'
				},
				caption: `☕ Random Coffee`,
				footer: Hori.user.name,
				buttons: buttons,
				headerType: 4
			}
			Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'wallpaper': {
			if (!text) return reply(`Enter Query Title`)
			let {
				wallpaper
			} = require('./lib/scraper')
			anu = await wallpaper(text)
			result = anu[Math.floor(Math.random() * anu.length)]
			let buttons = [{
				buttonId: `wallpaper ${text}`,
				buttonText: {
					displayText: '➡️Next Image➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: result.image[0]
				},
				caption: `${design} Title : ${result.title}\n${design} Category : ${result.type}\n${design} Detail : ${result.source}\n${design} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
				footer: Hori.user.name,
				buttons: buttons,
				headerType: 4
			}
			Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'wikimedia': {
			if (!text) return reply(`Enter Query Title`)
			let {
				wikimedia
			} = require('./lib/scraper')
			anu = await wikimedia(text)
			result = anu[Math.floor(Math.random() * anu.length)]
			let buttons = [{
				buttonId: `wikimedia ${text}`,
				buttonText: {
					displayText: '➡️Next Image➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: result.image
				},
				caption: `${design} Title : ${result.title}\n${design} Source : ${result.source}\n${design} Media Url : ${result.image}`,
				footer: Hori.user.name,
				buttons: buttons,
				headerType: 4
			}
			Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'quotesanime':
		case 'animequotes':
		case 'animequote':
		case 'quoteanime': {
			let {
				quotesAnime
			} = require('./lib/scraper')
			let anu = await quotesAnime()
			result = anu[Math.floor(Math.random() * anu.length)]
			let buttons = [{
				buttonId: `quotesanime`,
				buttonText: {
					displayText: '➡️Next➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 2
			}
			Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'motivasi':
		case 'motivationalquote':
		case 'bucinquote':
		case 'katasenja':
		case 'puisi': {
			let anu = await fetchJson(api('zenz', '/api/' + command, {}, 'apikey'))
			let buttons = [{
				buttonId: `motivasi`,
				buttonText: {
					displayText: '➡️Next➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				text: anu.result.message,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 2
			}
			Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case '3dchristmas':
		case '3ddeepsea':
		case 'americanflag':
		case '3dscifi':
		case '3drainbow':
		case '3dwaterpipe':
		case 'halloweenskeleton':
		case 'sketch':
		case 'bluecircuit':
		case 'space':
		case 'metallic':
		case 'fiction':
		case 'greenhorror':
		case 'transformer':
		case 'berry':
		case 'thunder':
		case 'magma':
		case '3dcrackedstone':
		case '3dneonlight':
		case 'impressiveglitch':
		case 'naturalleaves':
		case 'fireworksparkle':
		case 'matrix':
		case 'dropwater':
		case 'harrypotter':
		case 'foggywindow':
		case 'neondevils':
		case 'christmasholiday':
		case '3dgradient':
		case 'blackpink':
		case 'gluetext': {
			if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
			reply(mess.wait)
			Hori.sendMessage(m.chat, {
				image: {
					url: api('zenz', '/textpro/' + command, {
						text: text
					}, 'apikey')
				},
				caption: `Text Pro ${command}`
			}, {
				quoted: m
			})
		}
		break
		case 'nomerhoki':
		case 'nomorhoki': {
			if (!Number(text)) return reply(`Example : ${prefix + command} 919744933034`)
			let anu = await primbon.nomer_hoki(Number(text))
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Phone Number :* ${anu.message.nomer_hp}\n${design} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${design} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${design} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
		}
		break
		case 'artimimpi':
		case 'tafsirmimpi': {
			if (!text) return reply(`Example : ${prefix + command} belanja`)
			let anu = await primbon.tafsir_mimpi(text)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Dream :* ${anu.message.mimpi}\n${design} *Meaning :* ${anu.message.arti}\n${design} *Solution :* ${anu.message.solusi}`, m)
		}
		break
		case 'ramalanjodoh':
		case 'ramaljodoh': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Your Name :* ${anu.message.nama_anda.nama}\n${design} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${design} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${design} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${design} *Results :* ${anu.message.result}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalanjodohbali':
		case 'ramaljodohbali': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Your Name :* ${anu.message.nama_anda.nama}\n${design} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${design} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${design} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${design} *Results :* ${anu.message.result}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'suamiistri': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Husband's Name :* ${anu.message.suami.nama}\n${design} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${design} *Wife's Name :* ${anu.message.istri.nama}\n${design} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${design} *Results :* ${anu.message.result}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalancinta':
		case 'ramalcinta': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Your Name :* ${anu.message.nama_anda.nama}\n${design} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${design} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${design} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${design} *Positive Side :* ${anu.message.sisi_positif}\n${design} *Negative Side :* ${anu.message.sisi_negatif}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'artinama': {
			if (!text) throw `Example : ${prefix + command} Dika Ardianta`
			let anu = await primbon.arti_nama(text)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Name :* ${anu.message.nama}\n${design} *Meaning :* ${anu.message.arti}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'kecocokannama':
		case 'cocoknama': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Name :* ${anu.message.nama}\n${design} *Born :* ${anu.message.tgl_lahir}\n${design} *Life Path :* ${anu.message.life_path}\n${design} *Destiny :* ${anu.message.destiny}\n${design} *Destiny Desire :* ${anu.message.destiny_desire}\n${design} *Personality :* ${anu.message.personality}\n${design} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
		}
		break
		case 'kecocokanpasangan':
		case 'cocokpasangan':
		case 'pasangan': {
			if (!text) throw `Example : ${prefix + command} Dika|Novia`
			let [nama1, nama2] = text.split`|`
			let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
			if (anu.status == false) return reply(anu.message)
			Hori.sendImage(m.chat, anu.message.gambar, `${design} *Your Name :* ${anu.message.nama_anda}\n${design} *Couple Name :* ${anu.message.nama_pasangan}\n${design} *Positive Side :* ${anu.message.sisi_positif}\n${design} *Negative Side :* ${anu.message.sisi_negatif}`, m)
		}
		break
		case 'jadianpernikahan':
		case 'jadiannikah': {
			if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Wedding Date :* ${anu.message.tanggal}\n${design} *Characteristics :* ${anu.message.karakteristik}`, m)
		}
		break
		case 'sifatusaha': {
			if (!ext) throw `Example : ${prefix+ command} 28, 12, 2021`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Born :* ${anu.message.hari_lahir}\n${design} *Business :* ${anu.message.usaha}`, m)
		}
		break
		case 'rejeki':
		case 'rezeki': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Born :* ${anu.message.hari_lahir}\n${design} *Sustenance :* ${anu.message.rejeki}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'pekerjaan':
		case 'kerja': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Born :* ${anu.message.hari_lahir}\n${design} *Profession :* ${anu.message.pekerjaan}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalannasib':
		case 'ramalnasib':
		case 'nasib': {
			if (!text) throw `Example : 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.ramalan_nasib(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Analysis :* ${anu.message.analisa}\n${design} *Root Number :* ${anu.message.angka_akar}\n${design} *Nature :* ${anu.message.sifat}\n${design} *Element :* ${anu.message.elemen}\n${design} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
		}
		break
		case 'potensipenyakit':
		case 'penyakit': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Analysis :* ${anu.message.analisa}\n${design} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'artitarot':
		case 'tarot': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendImage(m.chat, anu.message.image, `${design} *Born :* ${anu.message.tgl_lahir}\n${design} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${design} *Meaning :* ${anu.message.arti}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'fengshui': {
			if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
			let [nama, gender, tahun] = text.split`,`
			let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Name :* ${anu.message.nama}\n${design} *Born :* ${anu.message.tahun_lahir}\n${design} *Gender :* ${anu.message.jenis_kelamin}\n${design} *Kua Number :* ${anu.message.angka_kua}\n${design} *Group :* ${anu.message.kelompok}\n${design} *Character :* ${anu.message.karakter}\n${design} *Good Sector :* ${anu.message.sektor_baik}\n${design} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
		}
		break
		case 'haribaik': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.petung_hari_baik(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Born :* ${anu.message.tgl_lahir}\n${design} *When Challenged :* ${anu.message.kala_tinantang}\n${design} *Info :* ${anu.message.info}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'harisangar':
		case 'taliwangke': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Born :* ${anu.message.tgl_lahir}\n${design} *Results :* ${anu.message.result}\n${design} *Info :* ${anu.message.info}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'harinaas':
		case 'harisial': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Day Of Birth :* ${anu.message.hari_lahir}\n${design} *Date Of Birth :* ${anu.message.tgl_lahir}\n${design} *Fateful Day :* ${anu.message.hari_naas}\n${design} *Info :* ${anu.message.catatan}\n${design} *Notes :* ${anu.message.info}`, m)
		}
		break
		case 'nagahari':
		case 'harinaga': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Day Of Birth :* ${anu.message.hari_lahir}\n${design} *Date Of Birth :* ${anu.message.tgl_lahir}\n${design} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'arahrejeki':
		case 'arahrezeki': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Day Of Birth :* ${anu.message.hari_lahir}\n${design} *Date Of Birth :* ${anu.message.tgl_lahir}\n${design} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'peruntungan': {
			if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
			let [nama, tgl, bln, thn, untuk] = text.split`,`
			let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Name :* ${anu.message.nama}\n${design} *Born :* ${anu.message.tgl_lahir}\n${design} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${design} *Results :* ${anu.message.result}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'weton':
		case 'wetonjawa': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.weton_jawa(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Date :* ${anu.message.tanggal}\n${design} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${design} *Day Character :* ${anu.message.watak_hari}\n${design} *Dragon Day :* ${anu.message.naga_hari}\n${design} *Good Hour :* ${anu.message.jam_baik}\n${design} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
		}
		break
		case 'sifat':
		case 'karakter': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Name :* ${anu.message.nama}\n${design} *Born :* ${anu.message.tgl_lahir}\n${design} *Lifeline :* ${anu.message.garis_hidup}`, m)
		}
		break
		case 'keberuntungan': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Name :* ${anu.message.nama}\n${design} *Born :* ${anu.message.tgl_lahir}\n${design} *Results :* ${anu.message.result}`, m)
		}
		break
		case 'memancing': {
			if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Date :* ${anu.message.tgl_memancing}\n${design} *Results :* ${anu.message.result}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'masasubur': {
			if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
			let [tgl, bln, thn, siklus] = text.split`,`
			let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Results :* ${anu.message.result}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'zodiak':
		case 'zodiac': {
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
				return zodiak.find(([_, _d]) => d >= _d)[0]
			}
			let date = new Date(text)
			if (date == 'Invalid Date') throw date
			let d = new Date()
			let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
			let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

			let zodiac = await getZodiac(birth[1], birth[2])

			let anu = await primbon.zodiak(zodiac)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Zodiac :* ${anu.message.zodiak}\n${design} *Number :* ${anu.message.nomor_keberuntungan}\n${design} *Aroma :* ${anu.message.aroma_keberuntungan}\n${design} *Planet :* ${anu.message.planet_yang_mengitari}\n${design} *Flower :* ${anu.message.bunga_keberuntungan}\n${design} *Color :* ${anu.message.warna_keberuntungan}\n${design} *Stone :* ${anu.message.batu_keberuntungan}\n${design} *Element :* ${anu.message.elemen_keberuntungan}\n${design} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${design} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'shio': {
			if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
			let anu = await primbon.shio(text)
			if (anu.status == false) return reply(anu.message)
			Hori.sendText(m.chat, `${design} *Results :* ${anu.message}`, m)
		}
		break
		case 'stalker':
		case 'stalk': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Your Daily Limit Has Expired')
			if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
			let [type, id, zone] = args
			if (type.toLowerCase() == 'ff') {
				if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
				let anu = await fetchJson(api('zenz', '/api/nickff', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'ml') {
				if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
				if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
				let anu = await fetchJson(api('zenz', '/api/nickml', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id,
					query2: zone
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'aov') {
				if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
				let anu = await fetchJson(api('zenz', '/api/nickaov', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'cod') {
				if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
				let anu = await fetchJson(api('zenz', '/api/nickcod', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'pb') {
				if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
				let anu = await fetchJson(api('zenz', '/api/nickpb', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'ig') {
				if (!id) return reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
				let {
					result: anu
				} = await fetchJson(api('zenz', '/api/stalker/ig', {
					username: id
				}, 'apikey'))
				if (anu.status == false) return reply(anu.result.message)
				Hori.sendMedia(m.chat, anu.caption.profile_hd, '', `${design} Full Name : ${anu.caption.full_name}\n${design} User Name : ${anu.caption.user_name}\n${design} ID ${anu.caption.user_id}\n${design} Following : ${anu.caption.followers}\n${design} Followers : ${anu.caption.following}\n${design} Bussines : ${anu.caption.bussines}\n${design} Professional : ${anu.caption.profesional}\n${design} Verified : ${anu.caption.verified}\n${design} Private : ${anu.caption.private}\n${design} Bio : ${anu.caption.biography}\n${design} Bio Url : ${anu.caption.bio_url}`, m)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'npm') {
				if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
				let {
					result: anu
				} = await fetchJson(api('zenz', '/api/stalker/npm', {
					query: id
				}, 'apikey'))
				if (anu.status == false) return reply(anu.result.message)
				reply(`${design} Name : ${anu.name}\n${design} Version : ${Object.keys(anu.versions)}\n${design} Created : ${tanggal(anu.time.created)}\n${design} Modified : ${tanggal(anu.time.modified)}\n${design} Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n${design} Description : ${anu.description}\n${design} Homepage : ${anu.homepage}\n${design} Keywords : ${anu.keywords}\n${design} Author : ${anu.author.name}\n${design} License : ${anu.license}\n${design} Readme : ${anu.readme}`)
				db.data.users[m.sender].limit -= 1
			} else {
				reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
			}
		}
		break
		case 'tiktokd':
		case 'tiktoknowmx': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/tiktok', {
				url: text
			}, 'apikey'))
			let buttons = [{
					buttonId: `tiktokwm ${text}`,
					buttonText: {
						displayText: '🥬With Watermark🥬'
					},
					type: 1
				},
				{
					buttonId: `tiktokmp3 ${text}`,
					buttonText: {
						displayText: '🎵Audio🎵'
					},
					type: 1
				}
			]
			let buttonMessage = {
				video: {
					url: anu.result.nowatermark
				},
				caption: `Download From ${text}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 5
			}
			Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'tiktokwmx':
		case 'tiktokwatermarkx': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/tiktok', {
				url: text
			}, 'apikey'))
			let buttons = [{
					buttonId: `tiktoknowm ${text}`,
					buttonText: {
						displayText: '🥬No Watermark🥬'
					},
					type: 1
				},
				{
					buttonId: `tiktokmp3 ${text}`,
					buttonText: {
						displayText: '🎵Audio🎵'
					},
					type: 1
				}
			]
			let buttonMessage = {
				video: {
					url: anu.result.watermark
				},
				caption: `Download From ${text}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 5
			}
			Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'tiktokmp3x':
		case 'tiktokaudiox': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/musically', {
				url: text
			}, 'apikey'))
			let buttons = [{
					buttonId: `tiktoknowm ${text}`,
					buttonText: {
						displayText: '🥬No Watermark🥬'
					},
					type: 1
				},
				{
					buttonId: `tiktokwm ${text}`,
					buttonText: {
						displayText: '🥬With Watermark🥬'
					},
					type: 1
				}
			]
			let buttonMessage = {
				text: `Download From ${text}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 2
			}
			let msg = await Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
			Hori.sendMessage(m.chat, {
				audio: {
					url: anu.result.audio
				},
				mimetype: 'audio/mpeg'
			}, {
				quoted: m
			})
		}
		break
		case 'igvid':
		case 'instavid':
		case 'instagramvid': {
			if (!text) return reply(`Example : ${prefix + command} https://instagram.com/`)
			let Sachu = await igscraper.instagramdl(args[0])
				reply(mess.wait)
				for (let i = 0; i < Sachu.length; i++) {
					Hori.sendMessage(m.chat, {
						video: {
							url: Sachu[i].url
						},
						caption: `${design} Downloaded from Instagram ${design}`
					}, {
						quoted: m
					})
				}
			}
		break
		case 'igpic':
		case 'instapic':
		case 'instagrampic': {
			if (!text) return reply(`Example : ${prefix + command} https://instagram.com/`)
			let Sachu = await igscraper.instagramdl(args[0])
				reply(mess.wait)
				for (let i = 0; i < Sachu.length; i++) {
					Hori.sendMessage(m.chat, {
						image: {
							url: Sachu[i].url
						},
						caption: `${design} Downloaded from Instagram ${design}`
					}, {
						quoted: m
					})
				}
			}
		break
		case 'ig':
		case 'insta':
		case 'instagram': {
			if (!text) return reply(`Example : ${prefix + command} https://instagram.com/`)
			let Sachu = await igscraper.instagramdl(args[0])
				reply(mess.wait)
				for (let i = 0; i < Sachu.length; i++) {
					if (i.type == 'image'){
					Hori.sendMessage(m.chat, {
						image: {
							url: Sachu[i].url
						},
						caption: `${design} Downloaded from Instagram ${design}`
					}, {
						quoted: m
					})
				} else {
					Hori.sendMessage(m.chat, {
					video: {
						url: Sachu[i].url
					},
					caption: `${design} Downloaded from Instagram ${design}`
				}, {
					quoted: m
				})
				}
			} 
		}
		break
		case 'ig2':
		case 'insta2':
		case 'instagram2': {
			if (!text) return reply(`Example : ${prefix + command} https://instagram.com/`)
			try {
			let Sachu = await igscraper.instagramdlv3(args[0])
			reply(mess.wait)
			for (let i = 0; i < Sachu.length; i++) {
				if (i.type == 'image'){
					Hori.sendMessage(m.chat, {
						image: {
							url: Sachu[i].url
						},
						caption: `${design} Downloaded from Instagram ${design}`
					}, {
						quoted: m
					})
				} else {
					Hori.sendMessage(m.chat, {
						video: {
						url: Sachu[i].url
					},
					caption: `${design} Downloaded from Instagram ${design}`
				}, {
					quoted: m
				})
				}
			}
			} catch (err) {
				reply(`${mess.servererror}`)
				}
		}
		break
		case 'downimg':{
			if (!text) return reply(`Example : ${prefix + command} *Raw Download Link*`)
			try {
				let link = text
				reply(mess.wait)
					Hori.sendMessage(m.chat, {
						image: {
							url: link
						},
					}, {
						quoted: m
					})
			} catch (err) {
				reply(`${mess.downerror}`)
				}
			}
		break
		case 'downmp4':{
			if (!text) return reply(`Example : ${prefix + command} *Raw Download Link*`)
			try {
				let link = text
				reply(mess.wait)
					Hori.sendMessage(m.chat, {
						video: {
							url: link
						},
					}, {
						quoted: m
					})
			} catch (err) {
				reply(`${mess.downerror}`)
				}
			}
		break
		case 'downmp3':{
			if (!text) return reply(`Example : ${prefix + command} *Raw Download Link*`)
			try {
				let link = text
				reply(mess.wait)
					Hori.sendMessage(m.chat, {
						audio: {
							url: link
						}, 
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
			} catch (err) {
				reply(`${mess.downerror}`)
				}
			}
		break
		case 'play':
		case 'ytplay':{
			if (!text) return reply(`No Query Title`)
			reply(mess.wait)
				let { 
					title,
					thumb,
					video,
					filesize_video,
					audio,
					filesize_audio
				} = await fetchJson (`https://tyz-api.herokuapp.com/downloader/play?query=${args[0]}`)
				let buttons = [{
					buttonId: `downmp4 ${video}`,
					buttonText: {
						displayText: `${design} Video ${design}`
					},
					type: 1
				},{
					buttonId: `downmp3 ${audio}`,
					buttonText: {
						displayText: `${design} Music ${design}`
					},
					type: 1
				}]
				let buttonMessage = {
					image: {
						url: `${thumb}`
					},
					caption: `
${global.design} Title : ${title} \n
${global.design} Audio Size : ${filesize_audio} 
${global.design} Audio Direct Url : ${audio} \n
${global.design} Video Size : ${filesize_video} 
${global.design} Video Direct Url : ${video} \n`,
					footer: `Reqested By : ` + Hori.user.name,
					buttons: buttons,
					headerType: 4
				}
				Hori.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
		}
		break
		case 'joox':
		case 'jooxdl': {
			if (!text) return reply(`No Query Title`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/joox', {
				query: text
			}, 'apikey'))
			let msg = await Hori.sendImage(m.chat, anu.result.img, `${design} Title : ${anu.result.lagu}\n${design} Album : ${anu.result.album}\n${design} Singer : ${anu.result.penyanyi}\n${design} Publish : ${anu.result.publish}\n${design} Lyrics :\n${anu.result.lirik.result}`, m)
			Hori.sendMessage(m.chat, {
				audio: {
					url: anu.result.mp4aLink
				},
				mimetype: 'audio/mpeg',
				fileName: anu.result.lagu + '.m4a'
			}, {
				quoted: m
			})
		}
		break
		case 'soundcloud':
		case 'scdl': {
			if (!text) return reply(`No Query Title`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/soundcloud', {
				url: isUrl(text)[0]
			}, 'apikey'))
			let msg = await Hori.sendImage(m.chat, anu.result.thumb, `${design} Title : ${anu.result.title}\n${design} Url : ${isUrl(text)[0]}`)
			Hori.sendMessage(m.chat, {
				audio: {
					url: anu.result.url
				},
				mimetype: 'audio/mpeg',
				fileName: anu.result.title + '.m4a'
			}, {
				quoted: m
			})
		}
		break
		case 'twitdl':
		case 'twitter': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/api/downloader/twitter', {
				url: text
			}, 'apikey'))
			let buttons = [{
				buttonId: `twittermp3 ${text}`,
				buttonText: {
					displayText: '🎵Audio🎵'
				},
				type: 1
			}]
			let buttonMessage = {
				video: {
					url: anu.result.HD || anu.result.SD
				},
				caption: util.format(anu.result),
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 5
			}
			Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'twittermp3':
		case 'twitteraudio': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/api/downloader/twitter', {
				url: text
			}, 'apikey'))
			let buttons = [{
				buttonId: `twitter ${text}`,
				buttonText: {
					displayText: '📽️Video📽️'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: anu.result.thumb
				},
				caption: util.format(anu.result),
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 4
			}
			let msg = await Hori.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
			Hori.sendMessage(m.chat, {
				audio: {
					url: anu.result.audio
				}
			}, {
				quoted: m
			})
		}
		break
		case 'fbdlx':
		case 'fbx':
		case 'facebookx': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/api/downloader/facebook', {
				url: text
			}, 'apikey'))
			Hori.sendMessage(m.chat, {
				video: {
					url: anu.result.url
				},
				caption: `${design} Title : ${anu.result.title}`
			}, {
				quoted: m
			})
		}
		break
		case 'pindl':
		case 'pinterestdl': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', {
				url: text
			}, 'apikey'))
			Hori.sendMessage(m.chat, {
				video: {
					url: anu.result
				},
				caption: `Download From ${text}`
			}, {
				quoted: m
			})
		}
		break
		case 'umma':
		case 'ummadl': {
			if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
			let {
				umma
			} = require('./lib/scraper')
			let anu = await umma(isUrl(text)[0])
			if (anu.type == 'video') {
				let buttons = [{
						buttonId: `ytmp3 ${anu.media[0]} 128kbps`,
						buttonText: {
							displayText: '🎵Audio🎵'
						},
						type: 1
					},
					{
						buttonId: `ytmp4 ${anu.media[0]} 360p`,
						buttonText: {
							displayText: '📽️Video📽️'
						},
						type: 1
					}
				]
				let buttonMessage = {
					image: {
						url: anu.author.profilePic
					},
					caption: `
${design} Title : ${anu.title}
${design} Author : ${anu.author.name}
${design} Like : ${anu.like}
${design} Caption : ${anu.caption}
${design} Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
					footer: Hori.user.name,
					buttons,
					headerType: 4
				}
				Hori.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			} else if (anu.type == 'image') {
				anu.media.map(async (url) => {
					Hori.sendMessage(m.chat, {
						image: {
							url
						},
						caption: `${design} Title : ${anu.title}\n${design} Author : ${anu.author.name}\n${design} Like : ${anu.like}\n${design} Caption : ${anu.caption}`
					}, {
						quoted: m
					})
				})
			}
		}
		break
		case 'ringtone': {
			if (!text) return reply(`Example : ${prefix + command} black rover`)
			let {
				ringtone
			} = require('./lib/scraper')
			let anu = await ringtone(text)
			let result = anu[Math.floor(Math.random() * anu.length)]
			Hori.sendMessage(m.chat, {
				audio: {
					url: result.audio
				},
				fileName: result.title + '.mp3',
				mimetype: 'audio/mpeg'
			}, {
				quoted: m
			})
		}
		break
		case 'iqra': {
			oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
			if (!text) return reply(oh)
			yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
			Hori.sendMessage(m.chat, {
				document: yy,
				mimetype: 'application/pdf',
				fileName: `iqra${text}.pdf`
			}, {
				quoted: m
			}).catch((err) => reply(oh))
		}
		break
		case 'juzamma': {
			if (args[0] === 'pdf') {
				reply(mess.wait)
				Hori.sendMessage(m.chat, {
					document: {
						url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
					},
					mimetype: 'application/pdf',
					fileName: 'juz-amma-arab-latin-indonesia.pdf'
				}, {
					quoted: m
				})
			} else if (args[0] === 'docx') {
				reply(mess.wait)
				Hori.sendMessage(m.chat, {
					document: {
						url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
					},
					mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
					fileName: 'juz-amma-arab-latin-indonesia.docx'
				}, {
					quoted: m
				})
			} else if (args[0] === 'pptx') {
				reply(mess.wait)
				Hori.sendMessage(m.chat, {
					document: {
						url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
					},
					mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
					fileName: 'juz-amma-arab-latin-indonesia.pptx'
				}, {
					quoted: m
				})
			} else if (args[0] === 'xlsx') {
				reply(mess.wait)
				Hori.sendMessage(m.chat, {
					document: {
						url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
					},
					mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
					fileName: 'juz-amma-arab-latin-indonesia.xlsx'
				}, {
					quoted: m
				})
			} else {
				reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
			}
		}
		break
		case 'hadis':
		case 'hadist': {
			if (!args[0]) return reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options Available:
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
1 - 5362`)
			if (!args[1]) return reply(`Which Hadith??\n\nExample:\n${prefix + command} muslim 1`)
			try {
				let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
				let {
					number,
					arab,
					id
				} = res.find(v => v.number == args[1])
				reply(`No. ${number}

${arab}

${id}`)
			} catch (e) {
				reply(`Hadith Not Found !`)
			}
		}
		break
		case 'alquran': {
			if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
			if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
			let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
			let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
			reply(txt)
			Hori.sendMessage(m.chat, {
				audio: {
					url: res.result.data.audio.primary
				},
				mimetype: 'audio/mpeg'
			}, {
				quoted: m
			})
		}
		break
		case 'tafsirsurah': {
			if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
			if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
			let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
			let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
			reply(txt)
		}
		break
		case "efx1":
		case "efx10":
		case "efx100":
		case "efx101":
		case "efx102":
		case "efx103":
		case "efx104":
		case "efx105":
		case "efx106":
		case "efx107":
		case "efx108":
		case "efx109":
		case "efx11":
		case "efx110":
		case "efx111":
		case "efx112":
		case "efx113":
		case "efx114":
		case "efx115":
		case "efx116":
		case "efx117":
		case "efx118":
		case "efx119":
		case "efx12":
		case "efx120":
		case "efx121":
		case "efx122":
		case "efx123":
		case "efx124":
		case "efx125":
		case "efx126":
		case "efx127":
		case "efx128":
		case "efx129":
		case "efx13":
		case "efx130":
		case "efx131":
		case "efx132":
		case "efx133":
		case "efx134":
		case "efx135":
		case "efx136":
		case "efx137":
		case "efx138":
		case "efx139":
		case "efx14":
		case "efx140":
		case "efx141":
		case "efx142":
		case "efx143":
		case "efx144":
		case "efx145":
		case "efx146":
		case "efx147":
		case "efx148":
		case "efx149":
		case "efx15":
		case "efx150":
		case "efx151":
		case "efx152":
		case "efx154":
		case "efx155":
		case "efx156":
		case "efx157":
		case "efx158":
		case "efx159":
		case "efx16":
		case "efx160":
		case "efx161":
		case "efx162":
		case "efx163":
		case "efx164":
		case "efx165":
		case "efx166":
		case "efx167":
		case "efx168":
		case "efx169":
		case "efx17":
		case "efx170":
		case "efx171":
		case "efx172":
		case "efx173":
		case "efx174":
		case "efx175":
		case "efx176":
		case "efx177":
		case "efx178":
		case "efx179":
		case "efx18":
		case "efx180":
		case "efx181":
		case "efx182":
		case "efx183":
		case "efx184":
		case "efx185":
		case "efx186":
		case "efx187":
		case "efx188":
		case "efx189":
		case "efx19":
		case "efx190":
		case "efx191":
		case "efx192":
		case "efx193":
		case "efx194":
		case "efx195":
		case "efx196":
		case "efx197":
		case "efx198":
		case "efx199":
		case "efx2":
		case "efx20":
		case "efx200":
		case "efx201":
		case "efx202":
		case "efx203":
		case "efx204":
		case "efx205":
		case "efx206":
		case "efx207":
		case "efx208":
		case "efx209":
		case "efx21":
		case "efx210":
		case "efx211":
		case "efx212":
		case "efx213":
		case "efx214":
		case "efx215":
		case "efx216":
		case "efx217":
		case "efx218":
		case "efx219":
		case "efx22":
		case "efx220":
		case "efx221":
		case "efx222":
		case "efx223":
		case "efx224":
		case "efx225":
		case "efx226":
		case "efx227":
		case "efx228":
		case "efx229":
		case "efx23":
		case "efx230":
		case "efx231":
		case "efx232":
		case "efx233":
		case "efx234":
		case "efx235":
		case "efx236":
		case "efx237":
		case "efx238":
		case "efx239":
		case "efx24":
		case "efx240":
		case "efx241":
		case "efx242":
		case "efx243":
		case "efx244":
		case "efx245":
		case "efx246":
		case "efx247":
		case "efx248":
		case "efx249":
		case "efx25":
		case "efx250":
		case "efx251":
		case "efx252":
		case "efx253":
		case "efx254":
		case "efx255":
		case "efx256":
		case "efx257":
		case "efx258":
		case "efx259":
		case "efx26":
		case "efx260":
		case "efx261":
		case "efx262":
		case "efx263":
		case "efx264":
		case "efx265":
		case "efx266":
		case "efx267":
		case "efx268":
		case "efx269":
		case "efx27":
		case "efx270":
		case "efx271":
		case "efx272":
		case "efx273":
		case "efx274":
		case "efx275":
		case "efx276":
		case "efx277":
		case "efx278":
		case "efx279":
		case "efx28":
		case "efx280":
		case "efx281":
		case "efx282":
		case "efx283":
		case "efx284":
		case "efx285":
		case "efx286":
		case "efx287":
		case "efx288":
		case "efx289":
		case "efx29":
		case "efx290":
		case "efx291":
		case "efx292":
		case "efx293":
		case "efx294":
		case "efx295":
		case "efx296":
		case "efx297":
		case "efx298":
		case "efx299":
		case "efx3":
		case "efx30":
		case "efx300":
		case "efx301":
		case "efx302":
		case "efx303":
		case "efx304":
		case "efx305":
		case "efx306":
		case "efx307":
		case "efx308":
		case "efx309":
		case "efx31":
		case "efx310":
		case "efx311":
		case "efx312":
		case "efx313":
		case "efx314":
		case "efx316":
		case "efx317":
		case "efx318":
		case "efx319":
		case "efx32":
		case "efx320":
		case "efx321":
		case "efx322":
		case "efx323":
		case "efx324":
		case "efx325":
		case "efx326":
		case "efx327":
		case "efx328":
		case "efx329":
		case "efx33":
		case "efx330":
		case "efx331":
		case "efx332":
		case "efx333":
		case "efx334":
		case "efx335":
		case "efx336":
		case "efx337":
		case "efx338":
		case "efx339":
		case "efx34":
		case "efx340":
		case "efx341":
		case "efx342":
		case "efx343":
		case "efx344":
		case "efx345":
		case "efx346":
		case "efx347":
		case "efx348":
		case "efx349":
		case "efx35":
		case "efx350":
		case "efx351":
		case "efx352":
		case "efx353":
		case "efx354":
		case "efx355":
		case "efx356":
		case "efx357":
		case "efx358":
		case "efx359":
		case "efx36":
		case "efx360":
		case "efx361":
		case "efx362":
		case "efx363":
		case "efx364":
		case "efx365":
		case "efx366":
		case "efx367":
		case "efx368":
		case "efx369":
		case "efx37":
		case "efx370":
		case "efx371":
		case "efx372":
		case "efx373":
		case "efx374":
		case "efx375":
		case "efx376":
		case "efx377":
		case "efx378":
		case "efx379":
		case "efx38":
		case "efx380":
		case "efx381":
		case "efx382":
		case "efx383":
		case "efx384":
		case "efx385":
		case "efx386":
		case "efx387":
		case "efx388":
		case "efx389":
		case "efx39":
		case "efx390":
		case "efx391":
		case "efx392":
		case "efx393":
		case "efx394":
		case "efx395":
		case "efx396":
		case "efx397":
		case "efx398":
		case "efx399":
		case "efx4":
		case "efx40":
		case "efx400":
		case "efx401":
		case "efx402":
		case "efx404":
		case "efx405":
		case "efx406":
		case "efx407":
		case "efx408":
		case "efx409":
		case "efx41":
		case "efx410":
		case "efx411":
		case "efx412":
		case "efx413":
		case "efx414":
		case "efx415":
		case "efx416":
		case "efx417":
		case "efx42":
		case "efx43":
		case "efx44":
		case "efx45":
		case "efx46":
		case "efx47":
		case "efx48":
		case "efx49":
		case "efx5":
		case "efx50":
		case "efx51":
		case "efx52":
		case "efx53":
		case "efx54":
		case "efx55":
		case "efx56":
		case "efx57":
		case "efx58":
		case "efx59":
		case "efx6":
		case "efx60":
		case "efx61":
		case "efx62":
		case "efx63":
		case "efx64":
		case "efx65":
		case "efx66":
		case "efx67":
		case "efx68":
		case "efx69":
		case "efx7":
		case "efx70":
		case "efx71":
		case "efx72":
		case "efx73":
		case "efx74":
		case "efx75":
		case "efx76":
		case "efx77":
		case "efx78":
		case "efx79":
		case "efx8":
		case "efx80":
		case "efx81":
		case "efx82":
		case "efx83":
		case "efx84":
		case "efx85":
		case "efx86":
		case "efx87":
		case "efx88":
		case "efx89":
		case "efx9":
		case "efx90":
		case "efx91":
		case "efx92":
		case "efx93":
		case "efx94":
		case "efx95":
		case "efx96":
		case "efx97":
		case "efx98":
		case "efx99": {
			result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/efx/${command}.mp3`)
			Hori.sendMessage(m.chat, {
				audio: result,
				mimetype: 'audio/mp4',
				ptt: true
			}, {
				quoted: m
			})
		}
		break

		case 'efx':
		case 'bgm':
		case 'bgmidd': {
			const randomefx = efx[Math.floor(Math.random() * efx.length)]
			result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/efx/${randomefx}.mp3`)
			Hori.sendMessage(m.chat, {
				audio: result,
				mimetype: 'audio/mp4',
				ptt: true
			}, {
				quoted: m
			})
		}
		break
		case 'tomp3': {
				if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
				if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
				if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
				reply(mess.wait)
				let media = await quoted.download()
				let {
					toAudio
				} = require('./lib/converter')
				let audio = await toAudio(media, 'mp3')
				Hori.sendMessage(m.chat, {
					document: audio,
					mimetype: 'audio/mpeg',
					fileName: `Converted By ${Hori.user.name}.mp3`
				}, {
					quoted: m
				})
			}
		break
		case 'mp3': 
		case 'tomp3': 
		case 'toaudio':
            try {
                let set
				if (/mp3/.test(command)) set = '-vn -ar 44100 -ac 2 -b:a 192k'
				if (/tomp3/.test(command)) set = '-vn -ar 44100 -ac 2 -b:a 192k'
				if (/toaudio/.test(command)) set = '-vn -ar 44100 -ac 2 -b:a 192k'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await Hori.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Hori.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg'},{ quoted : m })
                fs.unlinkSync(ran)
                })
            	}
				else if (/video/.test(mime)) {
					replay(mess.wait)
					let media = await Hori.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply(err)
					let buff = fs.readFileSync(ran)
					Hori.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg'},{ quoted : m })
					fs.unlinkSync(ran)
					})
				}
			else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
            } catch (e) {
            reply(e)
            }
        break
		case 'bass': 
		case 'blown': 
		case 'deep': 
		case 'earrape': 
		case 'fast': 
		case 'fat': 
		case 'nightcore': 
		case 'reverse': 
		case 'robot': 
		case 'slow': 
		case 'smooth': 
		case 'squirrel': 
		case 'supereq': 
		case 'integral': 
		case 'whisper': 
		case 'vib2': 
		case 'okbye': 
		case 'vibra': 
		case 'tupai':
		case 'tovn':
		case 'toptt':
                try {
                let set
				if (/tovn/.test(command)) set = '-vn -c:a libopus -b:a 128k -vbr on -compression_level 10'
				if (/toptt/.test(command)) set = '-vn -c:a libopus -b:a 128k -vbr on -compression_level 10'
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/vibra/.test(command)) set = '-filter_complex "vibrato=f=16"'
                if (/okbye/.test(command)) set = '-filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"'
                if (/vib2/.test(command)) set = '-filter_complex "vibrato=f=4"'
                if (/supereq/.test(command)) set = '-af "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14" -ar 48k'
                if (/integral/.test(command)) set = '-filter_complex "aintegral[a];[a]aeval=val(ch)/30:c=same"'
                if (/whisper/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*cos((random(0)*2-1)*2*3.14)\':imag=\'hypot(re,im)*sin((random(1)*2-1)*2*3.14)\':win_size=128:overlap=0.8"'
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
                Hori.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', ptt:true},{ quoted : m })
                fs.unlinkSync(ran)
                })
            } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
            } catch (e) {
            reply(e)
            }
        break
		case 'setcmd': {
			if (!m.quoted) return reply(`Reply Message!`)
			if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
			if (!text) return reply(`For What Command?`)
			let hash = m.quoted.fileSha256.toString('base64')
			if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
			global.db.data.sticker[hash] = {
				text,
				mentionedJid: m.mentionedJid,
				creator: m.sender,
				at: +new Date,
				locked: false,
			}
			reply(`Done!`)
		}
		break
		case 'delcmd': {
			let hash = m.quoted.fileSha256.toString('base64')
			if (!hash) return reply(`No Hashes`)
			if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
			delete global.db.data.sticker[hash]
			reply(`Done!`)
		}
		break
		case 'listcmd': {
			let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
			Hori.sendText(m.chat, teks, m, {
				mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
			})
		}
		break
		case 'lockcmd': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!m.quoted) return reply(`Reply Message!`)
			if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
			let hash = m.quoted.fileSha256.toString('base64')
			if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
			global.db.data.sticker[hash].locked = !/^un/i.test(command)
			reply('Done!')
		}
		break
		case 'addmsg': {
			if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
			if (!text) return reply(`Example : ${prefix + command} File Name`)
			let msgs = global.db.data.database
			if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
			msgs[text.toLowerCase()] = quoted.fakeObj
			reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
		}
		break
		case 'getmsg': {
			if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
			let msgs = global.db.data.database
			if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
			Hori.copyNForward(m.chat, msgs[text.toLowerCase()], true)
		}
		break
		case 'listmsg': {
			let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
			let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => {
				return {
					nama,
					...isi
				}
			})
			let teks = '「 DATABASE LIST 」\n\n'
			for (let i of seplit) {
				teks += `🐕 *Name :* ${i.nama}\n🐕 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
			}
			reply(teks)
		}
		break
		case 'delmsg':
		case 'deletemsg': {
			let msgs = global.db.data.database
			if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
			delete msgs[text.toLowerCase()]
			reply(`Delete Successfully '${text}' From The Message list`)
		}
		break
		case 'anonymous': {
			if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
			this.anonymous = this.anonymous ? this.anonymous : {}
			let buttons = [{
				buttonId: 'Start',
				buttonText: {
					displayText: '🚶Start🚶'
				},
				type: 1
			}]
			Hori.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Hori.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, Hori.user.name, m)
		}
		break
		case 'keluar':
		case 'leave': {
			if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
			this.anonymous = this.anonymous ? this.anonymous : {}
			let room = Object.values(this.anonymous).find(room => room.check(m.sender))
			if (!room) {
				let buttons = [{
					buttonId: 'start',
					buttonText: {
						displayText: '🚶Start🚶'
					},
					type: 1
				}]
				await Hori.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
				reply(false)
			}
			reply('Ok')
			let other = room.other(m.sender)
			if (other) await Hori.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
			delete this.anonymous[room.id]
			if (command === 'leave') break
		}
		case 'mulai':
		case 'start': {
			if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
			this.anonymous = this.anonymous ? this.anonymous : {}
			if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
				let buttons = [{
					buttonId: 'keluar',
					buttonText: {
						displayText: '🛑Stop🛑'
					},
					type: 1
				}]
				await Hori.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, Hori.user.name, m)
				reply(false)
			}
			let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
			if (room) {
				let buttons = [{
						buttonId: 'next',
						buttonText: {
							displayText: '⏩Skip⏩'
						},
						type: 1
					},
					{
						buttonId: 'keluar',
						buttonText: {
							displayText: '🛑Stop🛑'
						},
						type: 1
					}
				]
				await Hori.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Hori.user.name, m)
				room.b = m.sender
				room.state = 'CHATTING'
				await Hori.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Hori.user.name, m)
			} else {
				let id = +new Date
				this.anonymous[id] = {
					id,
					a: m.sender,
					b: '',
					state: 'WAITING',
					check: function(who = '') {
						return [this.a, this.b].includes(who)
					},
					other: function(who = '') {
						return who === this.a ? this.b : who === this.b ? this.a : ''
					},
				}
				let buttons = [{
					buttonId: 'keluar',
					buttonText: {
						displayText: '🛑Stop🛑'
					},
					type: 1
				}]
				await Hori.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, Hori.user.name, m)
			}
			break
		}
		case 'next':
		case 'lanjut': {
			if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
			this.anonymous = this.anonymous ? this.anonymous : {}
			let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
			if (!romeo) {
				let buttons = [{
					buttonId: 'start',
					buttonText: {
						displayText: '🚶Start🚶'
					},
					type: 1
				}]
				await Hori.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
				reply(false)
			}
			let other = romeo.other(m.sender)
			if (other) await Hori.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
			delete this.anonymous[romeo.id]
			let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
			if (room) {
				let buttons = [{
						buttonId: 'next',
						buttonText: {
							displayText: '⏩Skip⏩'
						},
						type: 1
					},
					{
						buttonId: 'keluar',
						buttonText: {
							displayText: '🛑Stop🛑'
						},
						type: 1
					}
				]
				await Hori.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Hori.user.name, m)
				room.b = m.sender
				room.state = 'CHATTING'
				await Hori.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Hori.user.name, m)
			} else {
				let id = +new Date
				this.anonymous[id] = {
					id,
					a: m.sender,
					b: '',
					state: 'WAITING',
					check: function(who = '') {
						return [this.a, this.b].includes(who)
					},
					other: function(who = '') {
						return who === this.a ? this.b : who === this.b ? this.a : ''
					},
				}
				let buttons = [{
					buttonId: 'keluar',
					buttonText: {
						displayText: '🛑Stop🛑'
					},
					type: 1
				}]
				await Hori.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, Hori.user.name, m)
			}
			break
		}
		case 'public': {
			if (!isCreator) return replay(`${mess.owner}`)
			Hori.public = true
			reply('Successful Change To Public Usage')
		}
		break
		case 'self': {
			if (!isCreator) return replay(`${mess.owner}`)
			Hori.public = false
			reply('Successful Change To Self Usage')
		}
		break
		case 'ping':
		case 'botstatus':
		case 'statusbot': {
			const used = process.memoryUsage()
			const cpus = os.cpus().map(cpu => {
				cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
				return cpu
			})
			const cpu = cpus.reduce((last, cpu, _, {
				length
			}) => {
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

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
			reply(respon)
		}
		break
		case 'owner':
		case 'creator': {
			Hori.sendContact(m.chat, global.owner, m)
		}
		break
		case 'cry':
		case 'kill':
		case 'hug':
		case 'pat':
		case 'lick':
		case 'kiss':
		case 'bite':
		case 'yeet':
		case 'neko':
		case 'bully':
		case 'bonk':
		case 'wink':
		case 'poke':
		case 'nom':
		case 'slap':
		case 'smile':
		case 'wave':
		case 'awoo':
		case 'blush':
		case 'smug':
		case 'glomp':
		case 'happy':
		case 'dance':
		case 'cringe':
		case 'cuddle':
		case 'highfive':
		case 'shinobu':
		case 'megumin':
		case 'handhold':
			reply(mess.wait)
			axios.get(`https://api.waifu.pics/sfw/${command}`)
				.then(({
					data
				}) => {
					Hori.sendImageAsSticker(m.chat, data.url, m, {
						packname: global.packname,
						author: global.author
					})
				})
			break
		case 'waifu':
		case 'loli':
			reply(mess.wait)
			axios.get(`https://api.waifu.pics/sfw/waifu`)
				.then(({
					data
				}) => {
					Hori.sendImage(m.chat, data.url, mess.success, m)
				})
			break
		case "setmenu":
			if (!text) return reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
			if (q == "image") {
				typemenu = 'image'
				reply("Success Changing Menu To " + q)
			} else if (q == "list") {
				typemenu = 'list'
				reply("Success Changing Menu To " + q)
			} else if (q == "catalog") {
				typemenu = 'catalog'
				reply("Success Changing Menu To " + q)
			}
			break
		case 'bug':
		case 'report': {
			if (!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
			Hori.sendMessage(`919744933034@s.whatsapp.net`, {
				text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}`
			})
			reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
		}
		break
		case 'tes':
		case 'test':
		case 'alive':
		case 'bot':
		case 'robot':
		case 'rose': {
			anu = ` `
			let footertext = lang.Alive(pushname)
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						hydratedContentText: anu,
						locationMessage: {
							jpegThumbnail: fs.readFileSync('./Bot Pic/Hori-Beta.jpg')
						},
						hydratedFooterText: `${footertext}`,
						hydratedButtons: [{
							urlButton: {
								displayText: '❣ Bot Web 🌏',
								url: `${myweb}`
							}
						}, {
							urlButton: {
								displayText: 'Script 🔖',
								url: `${sc}`
							}
						}, {
							quickReplyButton: {
								displayText: '⚠ All Menu ⚠',
								id: `${prefix}allmenu`
							}
						}, {
							quickReplyButton: {
								displayText: '🤖 List Menu ✨',
								id: `${prefix}command`
							}
						}, {
							quickReplyButton: {
								displayText: '🙋‍♂️ Owner 🐱‍💻',
								id: `${prefix}owner`
							}
						}]
					}
				}
			}), {
				userJid: m.chat
			})
			Hori.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'list':
		case 'menu':
		case 'help':
		case '?': {
			anu = ``
			let footertext = lang.Menu(pushname)
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						hydratedContentText: anu,
						locationMessage: {
							jpegThumbnail: fs.readFileSync('./Bot Pic/Hori-Beta.jpg')
						},
						hydratedFooterText: `${footertext}`,
						hydratedButtons: [{
							urlButton: {
								displayText: '❣ Bot Web 🌏',
								url: `${myweb}`
							}
						}, {
							urlButton: {
								displayText: 'Script🔖',
								url: `${sc}`
							}
						}, {
							quickReplyButton: {
								displayText: '⚠ All Menu ⚠',
								id: `${prefix}allmenu`
							}
						}, {
							quickReplyButton: {
								displayText: '🤖 List Menu ✨',
								id: `${prefix}command`
							}
						}, {
							quickReplyButton: {
								displayText: '🙋‍♂️ Owner 🐱‍💻',
								id: `${prefix}owner`
							}
						}]
					}
				}
			}), {
				userJid: m.chat
			})
			Hori.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'command': {
			let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				listMessage: {
					title: `Hi ${pushname}`,
					description: `Please Choose The Menu\n\n`,
					buttonText: "Menu",
					footerText: `${global.footer}`,
					listType: "SINGLE_SELECT",
					sections: [{
							"title": "Main Features",
							"rows": [{
								"title": "Main Menu",
								"description": "Displays The List Of Main Features",
								"rowId": `${prefix}mainmenu`
							}]
						},
						{
							"title": "Bot Features",
							"rows": [{
									"title": "All Menu",
									"description": "Displays The List Of All The Features!",
									"rowId": `${prefix}allmenu`
								},
								{
									"title": "Owner Menu",
									"description": "Displays The List Of Owner Features",
									"rowId": `${prefix}ownermenu`
								},
								{
									"title": "Group Menu",
									"description": "Displays The List Of Main Features",
									"rowId": `${prefix}groupmenu`
								},
								{
									"title": "Rpg Menu",
									"description": "Displays The List Of Rpg Features",
									"rowId": `${prefix}rpgmenu`
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
									"title": "Random Menu",
									"description": "Displays The List Of Random Features",
									"rowId": `${prefix}randommenu`
								},
								{
									"title": "Random Anime Menu",
									"description": "Displays The List Of Random Anime Features",
									"rowId": `${prefix}randomanimemenu`
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
									"title": "Database Menu",
									"description": "Displays The List Of Database Features",
									"rowId": `${prefix}databasemenu`
								},
								{
									"title": "Voice Changer Menu",
									"description": "Displays The List Of Voice Changing Features",
									"rowId": `${prefix}voicechangermenu`
								}
							]
						},
						{
							"title": "Chat With Fellow Users",
							"rows": [{
								"title": "Anonymous Chat Menu",
								"description": "Displays The List Of Anonymous Chat Features",
								"rowId": `${prefix}amogusmenu`
							}]
						},
						{
							"title": "Credit",
							"rows": [{
								"title": "Thanks To",
								"description": "Displays The List Of Credit Of The Bot !!",
								"rowId": `${prefix}tqtt`
							}]
						}
					],
					listType: 1
				}
			}), {})
			Hori.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'donasi':
		case 'donate':
		case 'sewabot':
		case 'sewa':
		case 'buypremium':
		case 'donate': {
			Hori.sendMessage(m.chat, {
				image: {
					url: 'https://telegra.ph/file/6a02cf1b00855ff80febb.jpg'
				},
				caption: `\n*Hi bro ${m.pushName}*\n\n *Bot Rental Price*\n*250 INR Per Group via Gpay For 1 Month*\n\n*For more details, You Can Chat With The Owner\nhttps://wa.me/919744933034 (Owner)*\n\n*Donate Me : \n\nGPay : +919744933034*`
			}, {
				quoted: m
			})
		}
		break
		case 'gitlink':
		case 'git':
		case 'script':
		case 'sc': {
			let Git = lang.Git(pushname)
			anu = ``
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						hydratedContentText: anu,
						locationMessage: {
							jpegThumbnail: fs.readFileSync('./Bot Pic/Hori-Beta.jpg')
						},
						hydratedFooterText: `${Git}`,
						hydratedButtons: [{
							urlButton: {
								displayText: '🌏 Bot Web 🌏',
								url: '${botweb}'
							},
							urlButton: {
								displayText: 'GitHub',
								url: '${sc}'
							}
						}, {
							quickReplyButton: {
								displayText: '💖',
								buttonId: '❤️'
							}
						}, {
							quickReplyButton: {
								displayText: '🙂',
								buttonId: '❤️'
							}
						}]
					}
				}
			}), {
				userJid: m.chat
			})
			Hori.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break

		case 'allmenu': {
			let Allmenu = lang.AllMenu()
			anu = `${Allmenu}`
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						hydratedContentText: anu,
						locationMessage: {
							jpegThumbnail: fs.readFileSync('./Bot Pic/Hori-Beta.jpg')
						},
						hydratedFooterText: `${global.footer}`,
						hydratedButtons: [{
							urlButton: {
								displayText: '❣ Bot Web 🌏',
								url: `${myweb}`
							}
						}, {
							quickReplyButton: {
								displayText: '🙋‍♂️ Owner 🐱‍💻',
								id: `${prefix}owner`
							}
						}]
					}
				}
			}), {
				userJid: m.chat
			})
			Hori.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'mainmenu':
			var unicorn = await getBuffer(picak + 'Main Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.MainMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "YouTube 📍",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break

		case 'grupmenu':
		case 'groupmenu':
			var unicorn = await getBuffer(picak + 'Group Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.GroupMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break

		case 'rpgmenu':
			var unicorn = await getBuffer(picak + 'Rpg Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.RpgMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break

		case 'funmenu':
			var unicorn = await getBuffer(picak + 'Fun Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.FunMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break

		case 'ownermenu':
			var unicorn = await getBuffer(picak + 'Owner Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.OwnerMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'downloadmenu':
			var unicorn = await getBuffer(picak + 'Downloader Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.DownloaderMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'searchmenu':
			var unicorn = await getBuffer(picak + 'Search Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.SearchMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'randommenu':
			var unicorn = await getBuffer(picak + 'Random Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.RandomMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'randomanimemenu':
			var unicorn = await getBuffer(picak + 'Random Anime Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.AnimeMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'textpromenu':
			var unicorn = await getBuffer(picak + 'Text Pro Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.TextProMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'convertmenu':
			var unicorn = await getBuffer(picak + 'Converter Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.ConvertMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'databasemenu':
			var unicorn = await getBuffer(picak + 'Database Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.DataMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'amogusmenu':
			var unicorn = await getBuffer(picak + 'Anonymous Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.AmogusMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
		break
		case 'voicechangermenu':
			var unicorn = await getBuffer(picak + 'Voice Changer Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.VoiceMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'horoscopemenu':
			var unicorn = await getBuffer(picak + 'Horoscope Menu')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.HoroScopeMenu(pushname)}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
			break
		case 'thanksto':
		case 'tqto':
		case 'tqtt':
			var unicorn = await getBuffer(picak + 'Developer')
			await Hori.send5ButImg(from, `` + '' + ' ', `${lang.ThanksTo()}`, unicorn, [{
				"urlButton": {
					"displayText": "❣ Bot Web 🌏",
					"url": `${myweb}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${sc}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "🍜Donate🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "🙋‍♂️ Owner 🐱‍💻",
					"id": 'owner'
				}
			}])
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
					reply(bang)
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
					if (err) return reply(err)
					if (stdout) return reply(stdout)
				})
			}

			if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
				this.anonymous = this.anonymous ? this.anonymous : {}
				let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
				if (room) {
					if (/^.*(next|leave|start)/.test(m.text)) return
					if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'lanjut', 'Stop'].includes(m.text)) return
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
				let msgs = global.db.data.database
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