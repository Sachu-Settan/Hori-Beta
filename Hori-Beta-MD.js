/*
 * You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
 * Licenced Under MIT License
 * Copyright © 2022 Sachu. Hori Mwol-MD
 */

require('./config')
const {
	eng
} = require('./Lang')
let lang = eng
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
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
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
const xfarr = require('xfarr-api')
const cheerio = require("cheerio")
const {
	RosMwolTiktok
} = require('./lib/tiktok')
let {
	msgFilter
} = require('./lib/antispam')
let {
	covid
} = require('./lib/covid.js')
const {
	EmojiAPI
} = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const {
	HoriBetaWiki
} = require('./lib/wiki.js')
const textpro = require('./lib/textpro')
const {
	mediafireDl
} = require('./lib/mediafire.js')
const {
	Gempa
} = require("./lib/gempa.js")
const {
	jadwaltv
} = require('./lib/jadwaltv')
const todapi = require("tod-api")
const {
	pinterest
} = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const {
	hentai
} = require('./lib/scraper2.js')
const igscraper = require('@bochilteam/scraper')
const {
	FajarNews,
	BBCNews,
	metroNews,
	CNNNews,
	iNews,
	KumparanNews,
	TribunNews,
	DailyNews,
	DetikNews,
	OkezoneNews,
	CNBCNews,
	KompasNews,
	SindoNews,
	TempoNews,
	IndozoneNews,
	AntaraNews,
	RepublikaNews,
	VivaNews,
	KontanNews,
	MerdekaNews,
	KomikuSearch,
	AniPlanetSearch,
	KomikFoxSearch,
	KomikStationSearch,
	MangakuSearch,
	KiryuuSearch,
	KissMangaSearch,
	KlikMangaSearch,
	PalingMurah,
	LayarKaca21,
	AminoApps,
	Mangatoon,
	WAModsSearch,
	Emojis,
	CoronaInfo,
	JalanTikusMeme,
	Cerpen,
	Quotes,
	Couples,
	Darkjokes
} = require("dhn-api")
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
const timestampe = speed();
const latensie = speed() - timestampe
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
const durationn = JSON.parse(fs.readFileSync('./Media/ptt/duration.json'));

let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

let sticker = JSON.parse(fs.readFileSync('./Media/sticker/sticker.json'));
let voicenote = JSON.parse(fs.readFileSync('./Media/vn/vn.json'));
let images = JSON.parse(fs.readFileSync('./Media/image/image.json'));
let videoss = JSON.parse(fs.readFileSync('./Media/vid/video.json'));
let efx = JSON.parse(fs.readFileSync('./Media/efx/efx.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))
let emojiss = JSON.parse(fs.readFileSync('./Media/emojis/emoji.json'))

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

module.exports = HoriBeta = async (HoriBeta, m, chatUpdate, store) => {
	try {
		var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		var budy = (typeof m.text == 'string' ? m.text : '')
		var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
		const isCmd = body.startsWith(prefix)
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const botNumber = await HoriBeta.decodeJid(HoriBeta.user.id)
		const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const itsMe = m.sender == botNumber ? true : false
		const text = q = args.join(" ")
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const content = JSON.stringify(mek.message)
		const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

		//group\\
		const groupMetadata = m.isGroup ? await HoriBeta.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
		const AntiLink = m.isGroup ? ntilink.includes(from) : false
		const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
		const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
		const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
		const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
		const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
		const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
		const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
		const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
		const antiWame = m.isGroup ? ntwame.includes(from) : false
		const antiToxic = m.isGroup ? nttoxic.includes(from) : false
		const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
		const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
		const isAutoStick = _autostick.includes(from)
		const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
		const Autoreply = m.isGroup ? autorep.includes(from) : true
		const ChatBot = m.isGroup ? chattbot.includes(from) : false
		const isBan = banUser.includes(m.sender)
		const isBanChat = m.isGroup ? banchat.includes(from) : false
		autoreadsw = true

		//member\\
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
			} else global.db.data.chats[m.chat] = {
				mute: false,
			}

			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
			if (setting) {
				if (!isNumber(setting.status)) setting.status = 0
				if (!('autobio' in setting)) setting.autobio = false
				if (!('templateImage' in setting)) setting.templateImage = false
				if (!('templateVideo' in setting)) setting.templateVideo = false
				if (!('templateGif' in setting)) setting.templateGif = false
				if (!('templateMsg' in setting)) setting.templateMsg = false
				if (!('templateDocument' in setting)) setting.templateDocument = false
				if (!('templateLocation' in setting)) setting.templateLocation = true
			} else global.db.data.settings[botNumber] = {
				status: 0,
				autobio: false,
				templateImage: false,
				templateVideo: false,
				templateGif: false,
				templateMsg: false,
				templateDocument: false,
				templateLocation: true,
			}

		} catch (err) {
			console.error(err)
		}

		// FAKE TEXT IMG
		const textImg = (teks) => {
			HoriBeta.sendMessage(m.chat, {
				text: teks,
			}, {
				quoted: m,
				thumbnail: fs.readFileSync('./Media/image/wpmobile.png')
			})
		}

		//FAKE CONTACT
		const fkontak = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: `919744933034 -1614953337@g.us`
				} : {})
			},
			message: {
				'contactMessage': {
					'displayName': `${pushname}`,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`,
					'jpegThumbnail': thumb,
					thumbnail: thumb,
					sendEphemeral: true
				}
			}
		}
		//FAKEREPLY PRODUCT
		const ftoko = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				"productMessage": {
					"product": {
						"productImage": {
							"mimetype": "image/jpeg",
							"jpegThumbnail": log0 //The picture
						},
						"title": `${global.ownername}`,
						"description": `${global.botname}`,
						"currencyCode": "USD",
						"priceAmount1000": "2000",
						"retailerId": `${global.watermark}`,
						"productImageCount": 1
					},
					"businessOwnerJid": `0@s.whatsapp.net`
				}
			}
		}
		//FAKEREPLY TROLI
		const ftroli = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 1,
					status: 1,
					surface: 1,
					message: `${global.ownername}`, //
					orderTitle: `${global.botname}`,
					thumbnail: log0, //Pic
					sellerJid: '0@s.whatsapp.net'

				}
			}
		}
		//FAKEREPLY LOCATION
		const flokasi = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				locationMessage: {
					name: `${global.location}`,
					jpegThumbnail: log0
				}
			}
		}
		//FAKEREPLY DOCUMENT
		const fdocs = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				documentMessage: {
					title: `${global.botname}`,
					jpegThumbnail: log0
				}
			}
		}
		//FAKEREPLY VIDEO
		const fvideo = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "919744933034-1613049930@g.us"
				} : {})
			},
			message: {
				"videoMessage": {
					"title": `${global.botname}`,
					"h": `${global.ownername}`,
					'seconds': '30',
					'caption': `${global.watermark}`,
					'jpegThumbnail': log0
				}
			}
		}
		//FAKEREPLY GROUPINVITE
		const fgclink = {
			"key": {
				"fromMe": false,
				"participant": "0@s.whatsapp.net",
				"remoteJid": "0@s.whatsapp.net"
			},
			"message": {
				"groupInviteMessage": {
					"groupJid": "919744933034-1616169743@g.us",
					"inviteCode": `${global.ownername}`,
					"groupName": `${global.botname}`,
					"caption": `${global.watermark}`,
					'jpegThumbnail': log0
				}
			}
		}
		//FAKEREPLY GIF
		const fgif = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "919744933034-1613049930@g.us"
				} : {})
			},
			message: {
				"videoMessage": {
					"title": `${global.botname}`,
					"h": `${global.ownername}`,
					'seconds': "30",
					'gifPlayback': 'true',
					'caption': `${global.watermark}`,
					'jpegThumbnail': log0
				}
			}
		}
		//FAKEREPLY TEXT WITH THUMBNAIL
		const ftextt = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "919744933034-1613049930@g.us"
				} : {})
			},
			message: {
				"extendedTextMessage": {
					"text": `${global.ownername}`,
					"title": `${global.botname}`,
					'jpegThumbnail': log0
				}
			}
		}
		//FAKEREPLY VN
		const fvn = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "919744933034-1613049930@g.us"
				} : {})
			},
			message: {
				"audioMessage": {
					"mimetype": "audio/ogg; codecs=opus",
					"seconds": "9999999999999999",
					"ptt": "true"
				}
			}
		}

		const reply = (teks) => {
			HoriBeta.sendMessage(m.chat, {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: `${global.botname}`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: `${global.websitex}`,
						sourceUrl: `${global.websitex}`
					}
				}
			}, {
				quoted: m
			})
		}

		const replay = (teks) => {
			HoriBeta.sendMessage(m.chat, {
				text: teks,
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: `${global.botname}`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: `${global.websitex}`,
						sourceUrl: `${global.websitex}`
					}
				}
			}, {
				quoted: m
			})
		}

		//Public & Self\\
		if (!HoriBeta.public) {
			if (!m.key.fromMe) return
		}

		if (m.message) {
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

		global.hit = {}
		if (isCmd) {
			data = await fetchJson('https://api.countapi.xyz/hit/Hori-Beta-MD/visits')
			global.jumlahcmd = `${data.value}`
			dataa = await fetchJson(`https://api.countapi.xyz/hit/Hori-Beta-MD${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
			global.jumlahharian = `${dataa.value}`
		}

		if (db.data.settings[botNumber].autobio) {
			let setting = global.db.data.settings[botNumber]
			if (new Date() * 1 - setting.status > 1000) {
				let uptime = await runtime(process.uptime())
				await HoriBeta.setStatus(`${HoriBeta.user.name} | Runtime : ${runtime(uptime)}`)
				setting.status = new Date() * 1
			}
		}

		if (autoreadsw) {
			if (from === 'status@broadcast') {
				HoriBeta.chatRead(from)
			}
		}

		if (global.autoreadpmngc) {
			if (command) {
				await HoriBeta.sendPresenceUpdate('composing', m.chat)
				HoriBeta.sendReadReceipt(from, m.sender, [m.key.id])
			}
		}

		if (global.autoReadGc) {
			if (m.isGroup) {
				HoriBeta.sendReadReceipt(m.chat, m.sender, [m.key.id])
			}
		}

		if (global.autoRecord) {
			if (m.chat) {
				HoriBeta.sendPresenceUpdate('recording', m.chat)
			}
		}

		if (global.autoTyping) {
			if (m.chat) {
				HoriBeta.sendPresenceUpdate('composing', m.chat)
			}
		}

		if (global.available) {
			if (m.chat) {
				HoriBeta.sendPresenceUpdate('available', m.chat)
			}
		}

		if (isAutoSticker) {
			if (/image/.test(mime) && !/webp/.test(mime)) {
				let mediac = await quoted.download()
				await HoriBeta.sendImageAsSticker(from, mediac, m, {
					packname: global.packname,
					author: global.author
				})
				console.log(`Auto sticker detected`)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return
				let mediac = await quoted.download()
				await HoriBeta.sendVideoAsSticker(from, mediac, m, {
					packname: global.packname,
					author: global.author
				})
			}
		}

		if (isAutoStick) {
			if (/image/.test(mime) && !/webp/.test(mime)) {
				let mediac = await quoted.download()
				await HoriBeta.sendImageAsSticker(from, mediac, m, {
					packname: global.packname,
					author: global.author
				})
				console.log(`Auto sticker detected`)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return
				let mediac = await quoted.download()
				await HoriBeta.sendVideoAsSticker(from, mediac, m, {
					packname: global.packname,
					author: global.author
				})
			}
		}

		if (AntiLink) {
			linkgce = await HoriBeta.groupInviteCode(from)
			if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
				reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
			} else if (isUrl(m.text)) {
				bvl = `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}
		}

		if (antiWame)
			if (budy.includes(`wa.me`)) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (antiWame)
			if (budy.includes(`http://wa.me`)) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (antiVirtex) {
			if (budy.length > 3500) {
				reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
				reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
				if (!isBotAdmins) return reply(mess.botAdmin)
				HoriBeta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}

		if (antiToxic)
			if (bad.includes(messagesD)) {
				tos = ['Hey, watch your mouth', 'Never been taught how to speak?', 'Stop being toxic my friend🤢', 'Dont be toxic🦄']
				sin = tos[Math.floor(Math.random() * (tos.length))]
				reply(sin)
				if (m.text) {
					bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
					if (isAdmins) return reply(bvl)
					if (m.key.fromMe) return reply(bvl)
					if (isCreator) return reply(bvl)
					kice = m.sender
					await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
					HoriBeta.sendMessage(from, {
						text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`,
						contextInfo: {
							mentionedJid: [kice]
						}
					}, {
						quoted: m
					})
				}
			}

		if (AntiLinkYoutubeVid)
			if (budy.includes("https://youtu.be/")) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (AntiLinkYoutubeChannel)
			if (budy.includes("https://youtube.com/")) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (AntiLinkInstagram)
			if (budy.includes("https://www.instagram.com/")) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (AntiLinkFacebook)
			if (budy.includes("https://facebook.com/")) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (AntiLinkTelegram)
			if (budy.includes("https://t.me/")) {
				if (AntiLinkTelegram)
					if (!isBotAdmins) return
				bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (AntiLinkTiktok)
			if (budy.includes("https://www.tiktok.com/")) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (AntiLinkTwitter)
			if (budy.includes("https://twitter.com/")) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (AntiLinkAll)
			if (budy.includes("https://")) {
				if (!isBotAdmins) return
				bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
				if (isAdmins) return reply(bvl)
				if (m.key.fromMe) return reply(bvl)
				if (isCreator) return reply(bvl)
				kice = m.sender
				await HoriBeta.groupParticipantsUpdate(m.chat, [kice], 'remove')
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`,
					contextInfo: {
						mentionedJid: [kice]
					}
				}, {
					quoted: m
				})
			} else {}

		if (Autoreply) {
			for (let Stickers of sticker) {
				if (budy === Stickers) {
					result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/stickers/${encodeURIComponent(Stickers)}.webp`)
					await HoriBeta.sendMessage(m.chat, {
						sticker: result
					}, {
						quoted: m
					})
				}
			}
			for (let vn of voicenote) {
				if (budy === vn) {
					const pttduration = durationn[Math.floor(Math.random() * durationn.length)]
					result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/vn/${encodeURIComponent(vn)}.mp3`)
					await HoriBeta.sendMessage(m.chat, {
						audio: result,
						mimetype: 'audio/mpeg',
						seconds: `${pttduration}`,
						contextInfo: {
							externalAdReply: {
								title: `${global.botname}`,
								body: `${global.botname}`,
								thumbnail: log0,
								mediaType: 2,
								mediaUrl: `${global.websitex}`,
								sourceUrl: `${global.websitex}`
							}
						},
						ptt: true
					}, {
						quoted: m
					})
				}
			}
			for (let imgs of images) {
				if (budy === imgs) {
					result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/image/${encodeURIComponent(imgs)}.jpg`)
					await HoriBeta.sendMessage(m.chat, {
						image: result
					}, {
						quoted: m
					})
				}
			}
			for (let vid of videoss) {
				if (budy === vid) {
					result = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/vid/${encodeURIComponent(vid)}.mp4`)
					await HoriBeta.sendMessage(m.chat, {
						video: result
					}, {
						quoted: m
					})
				}
			}
		}

		if (ChatBot === true) {
			try {
				let message = budy
				let unique_id = global.db.data.users[m.sender]
				let ChatBotReplay = await fetchJson(`http://api.brainshop.ai/get?bid=167415&key=VQkuW1MYBXsNnlpB&uid=${encodeURIComponent(unique_id)}&msg=${encodeURIComponent(message)}`)
				let textt = ChatBotReplay.cnt
				await HoriBeta.sendMessage(m.chat, {
					text: textt,
					contextInfo: {
						externalAdReply: {
							mediaUrl: '',
							mediaType: 2,
							description: '',
							title: `${global.botname}`,
							thumbnail: fs.readFileSync(`./Bot Pic/Hori-Beta-MD.jpg`),
							sourceUrl: `${global.linkz}`
						}
					}
				}, {
					quoted: m
				})
			} catch (err) {
				reply(`${mess.chatbotmediaerror}`)
			}
		}

		const emote = (satu, dua) => {
			try {
				const {
					EmojiAPI
				} = require("emoji-api");
				const emoji = new EmojiAPI();
				emoji.get(satu)
					.then(emoji => {
						const buttons = [{
							buttonId: "y",
							buttonText: {
								displayText: satu
							},
							type: 1
						}]
						const buttonMessage = {
							image: {
								url: emoji.images[dua].url
							},
							caption: `${mess.caption}`,
							footerText: `${botname}`,
							buttons: buttons,
							headerType: 4
						}
						HoriBeta.sendMessage(from, buttonMessage, {
							quoted: m
						})
					})
			} catch (e) {
				reply("Emoji Error, Please Enter Another Emoji\nNOTE : Just Enter 1 Emoji")
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
				userJid: HoriBeta.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			})
			messages.key.fromMe = areJidsSameUser(m.sender, HoriBeta.user.id)
			messages.key.id = m.key.id
			messages.pushName = m.pushName
			if (m.isGroup) messages.participant = m.sender
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			}
			HoriBeta.ev.emit('messages.upsert', msg)
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
			HoriBeta.sendText(m.chat, caption, m, {
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
				await HoriBeta.sendButtonText(m.chat, [{
					buttonId: 'guess song',
					buttonText: {
						displayText: 'Guess The Song'
					},
					type: 1
				}], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, HoriBeta.user.name, m)
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
				await HoriBeta.sendButtonText(m.chat, [{
					buttonId: 'guess picture',
					buttonText: {
						displayText: 'Guess The Picture'
					},
					type: 1
				}], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, HoriBeta.user.name, m)
				delete tebakgambar[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkata[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await HoriBeta.sendButtonText(m.chat, [{
					buttonId: 'guess word',
					buttonText: {
						displayText: 'Guess The Word'
					},
					type: 1
				}], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, HoriBeta.user.name, m)
				delete tebakkata[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = caklontong[m.sender.split('@')[0]]
			deskripsi = caklontong_desk[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await HoriBeta.sendButtonText(m.chat, [{
					buttonId: 'guess blank',
					buttonText: {
						displayText: 'Guess The Blank'
					},
					type: 1
				}], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, HoriBeta.user.name, m)
				delete caklontong[m.sender.split('@')[0]]
				delete caklontong_desk[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkalimat[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await HoriBeta.sendButtonText(m.chat, [{
					buttonId: 'guess sentence',
					buttonText: {
						displayText: 'Guess The Sentence'
					},
					type: 1
				}], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, HoriBeta.user.name, m)
				delete tebakkalimat[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklirik[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await HoriBeta.sendButtonText(m.chat, [{
					buttonId: 'guess lyrics',
					buttonText: {
						displayText: 'Guess The Lyrics'
					},
					type: 1
				}], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, HoriBeta.user.name, m)
				delete tebaklirik[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaktebakan[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await HoriBeta.sendButtonText(m.chat, [{
					buttonId: 'guess riddle',
					buttonText: {
						displayText: 'Guess The Riddle'
					},
					type: 1
				}], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, HoriBeta.user.name, m)
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
			if (room.x !== room.o) await HoriBeta.sendText(room.x, str, m, {
				mentions: parseMention(str)
			})
			await HoriBeta.sendText(room.o, str, m, {
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
					HoriBeta.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
					delete this.suit[roof.id]
					return !0
				}
				roof.status = 'play'
				roof.asal = m.chat
				clearTimeout(roof.waktu)
				//delete roof[roof.id].waktu
				HoriBeta.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, {
					mentions: [roof.p, roof.p2]
				})
				if (!roof.pilih) HoriBeta.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
				if (!roof.pilih2) HoriBeta.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) HoriBeta.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						HoriBeta.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
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
				if (!roof.pilih2) HoriBeta.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
				if (!roof.pilih) HoriBeta.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
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
				HoriBeta.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

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

		async function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}

		const reactionMessage = {
			react: {
				text: args[0],
				key: {
					remoteJid: m.chat,
					fromMe: true,
					id: quoted.id
				}
			}
		}

		let Reactt = await pickRandom(emojiss)
		const RandomReactionMessage = {
			react: {
				text: await Reactt,
				key: {
					remoteJid: m.chat,
					fromMe: true,
					id: quoted.id,
				}
			}
		}

		let documents = [doc1, doc2, doc3, doc4, doc5, doc6]
		let docs = pickRandom(documents)

		async function cerpen(category) {
			return new Promise((resolve, reject) => {
				let title = category.toLowerCase().replace(/[()*]/g, "")
				let judul = title.replace(/\s/g, "-")
				let page = Math.floor(Math.random() * 5)
				axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page)
					.then((get) => {
						let $ = cheerio.load(get.data)
						let link = []
						$('article.post').each(function(a, b) {
							link.push($(b).find('a').attr('href'))
						})
						let random = link[Math.floor(Math.random() * link.length)]
						axios.get(random)
							.then((res) => {
								let $$ = cheerio.load(res.data)
								let hasil = {
									title: $$('#content > article > h1').text(),
									author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
									kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
									lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
									cerita: $$('#content > article > p').text()
								}
								resolve(hasil)
							})
					})
			})
		}

		switch (command) {

			case 'bug':
		case 'report': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
			HoriBeta.sendMessage(`${owner}@s.whatsapp.net`, {
				text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}`
			})
			reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
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
							jpegThumbnail: fs.readFileSync('./Bot Pic/Hori-Beta-MD.jpg')
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
			HoriBeta.relayMessage(m.chat, template.message, {
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
			HoriBeta.sendMessage(from, {
				react: {
					text: `${global.reactmoji}`,
					key: m.key
				}
			})
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: 'https://telegra.ph/file/6a02cf1b00855ff80febb.jpg'
				},
				caption: `\n*Hi bro ${m.pushName}*\n\n *Bot Rental Price*\n*250 INR Per Group via Gpay For 1 Month*\n\n*For more details, You Can Chat With The Owner\nhttps://wa.me/919744933034 (Owner)*\n\n*Donate Me : \n\nGPay : +919744933034*`
			}, {
				quoted: m
			})
		}
		break
		case 'alive':
		case 'panel':
		case 'list':
		case 'menu':
		case 'help':
		case '?': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			HoriBeta.sendMessage(from, {
				react: {
					text: `${global.reactmoji}`,
					key: m.key
				}
			})
			let footertext = lang.Menu(pushname)
			let btn = [{
				urlButton: {
					displayText: 'YouTube 🍒',
					url: `${websitex}`
				}
			}, {
				callButton: {
					displayText: 'Script 🍜',
					url: `${botscript}`
				}
			}, {
				quickReplyButton: {
					displayText: 'All Menu 🍱',
					id: 'allmenu'
				}
			}, {
				quickReplyButton: {
					displayText: 'List Menu 🍢',
					id: 'command'
				}
			}, {
				quickReplyButton: {
					displayText: 'Owner 🤣',
					id: 'owner'
				}
			}]
			let setbot = db.data.settings[botNumber]
			if (setbot.templateImage) {
				HoriBeta.send5ButImg(m.chat, footertext, global.botname, global.thumb, btn, global.thumb)
			} else if (setbot.templateGif) {
				HoriBeta.send5ButGif(m.chat, footertext, global.botname, global.vidmenu, btn, global.thumb)
			} else if (setbot.templateVid) {
				HoriBeta.send5ButVid(m.chat, footertext, global.botname, global.vidmenu, btn, global.thumb)
			} else if (setbot.templateVideo) {
				HoriBeta.send5ButVid(m.chat, footertext, global.botname, global.vidmenu, btn, global.thumb)
			} else if (setbot.templateDocument) {
				let buttonmenu = [{
						urlButton: {
							displayText: `YouTube 🍒`,
							url: `${websitex}`
						}
					},
					{
						urlButton: {
							displayText: `Script 🍜`,
							url: `${botscript}`
						}
					},
					{
						quickReplyButton: {
							displayText: `All Menu 🍱`,
							id: 'allmenu'
						}
					},
					{
						quickReplyButton: {
							displayText: `List Menu 🍢`,
							id: 'command'
						}
					},
					{
						quickReplyButton: {
							displayText: `Owner 🤣`,
							id: 'owner'
						}
					}
				]
				HoriBeta.sendMessage(m.chat, {
					caption: `${footertext}`,
					document: fs.readFileSync('./Media/file/Hori.xlsx'),
					mimetype: `${docs}`,
					fileName: `${ownername}`,
					templateButtons: buttonmenu,
					footer: `${botname}`,
					mentionedJid: [m.sender]
				})
			} else if (setbot.templateLocation) {
				anu = ``
				let footertext = lang.Menu(pushname)
				const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					templateMessage: {
						hydratedTemplate: {
							hydratedContentText: anu,
							locationMessage: {
								jpegThumbnail: fs.readFileSync('./Bot Pic/Hori-Beta-MD.jpg')
							},
							hydratedFooterText: `${footertext}`,
							hydratedButtons: [{
								urlButton: {
									displayText: '❣ Bot Web 🌏',
									url: `${websitex}`
								}
							}, {
								urlButton: {
									displayText: 'Script 🔖',
									url: `${botscript}`
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
				HoriBeta.relayMessage(m.chat, template.message, {
					messageId: template.key.id
				})
			}
		}
		break
		case 'command': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				listMessage: {
					title: `Hi ${pushname}`,
					description: `Please Choose The Menu\n\n`,
					buttonText: "Menu",
					footerText: `${global.botname}`,
					listType: "SINGLE_SELECT",
					sections: [{
							"title": "Initial Features Of Bot 🦄",
							"rows": [{
								"title": "Other ☕",
								"description": "Displays The List Of Other Features",
								"rowId": `${prefix}othermenu`
							}]
						},
						{
							"title": "Bot Features ❤️",
							"rows": [{
									"title": "All Menu 🥀",
									"description": "Displays The List Of All The Features!",
									"rowId": `${prefix}allmenu`
								},
								{
									"title": "Owner Menu 💠",
									"description": "Displays The List Of Owner Features",
									"rowId": `${prefix}ownermenu`
								},
								{
									"title": "Group Menu ✨",
									"description": "Displays The List Of Main Features",
									"rowId": `${prefix}groupmenu`
								},
								{
									"title": "Maker Menu 🌈",
									"description": "Displays The List Of Logo Making Features",
									"rowId": `${prefix}indomenu`
								},
								{
									"title": "Sound Menu 🎵",
									"description": "Displays The List Of Sound Features",
									"rowId": `${prefix}soundmenu`
								},
								{
									"title": "Download Menu ↘️",
									"description": "Displays The List Of Download Features",
									"rowId": `${prefix}downloadmenu`
								},
								{
									"title": "Sticker Menu 🃏",
									"description": "Displays The List Of Sticker Features",
									"rowId": `${prefix}indomenu`
								},
								{
									"title": "Search Menu 🔎",
									"description": "Displays The List Of Searching Features",
									"rowId": `${prefix}searchmenu`
								},
								{
									"title": "EFX/BGM Menu 🎵",
									"description": "Displays The List Of EFX/BGM Features",
									"rowId": `${prefix}efxmenu`
								},
								{
									"title": "Tool Menu ⚙️",
									"description": "Displays The List Of Tool Features",
									"rowId": `${prefix}toolmenu`
								},
								{
									"title": "Random Image Menu 🌆",
									"description": "Displays The List Of Random Image Features",
									"rowId": `${prefix}randomimagemenu`
								},
								{
									"title": "Image Effect Menu 🖼️",
									"description": "Displays The List Of Image Effect Features",
									"rowId": `${prefix}imageeffectmenu`
								},
								{
									"title": "Anime Menu 😘",
									"description": "Displays The List Of Random Anime Features",
									"rowId": `${prefix}animemenu`
								},
								{
									"title": "Emote Menu 😀",
									"description": "Displays The List Of Emote Features",
									"rowId": `${prefix}emotemenu`
								},
								{
									"title": "Anime Sticker Menu ☺️",
									"description": "Displays The List Of Anime Sticker Features",
									"rowId": `${prefix}animestickermenu`
								},
								{
									"title": "Nsfw Menu 🤓",
									"description": "Displays The List Of Nsfe Features",
									"rowId": `${prefix}nsfwmenu`
								},
								{
									"title": "Fun Menu 🕺",
									"description": "Displays The List Of Fun Features",
									"rowId": `${prefix}funmenu`
								},
								{
									"title": "Game Menu 🎮",
									"description": "Displays The List Of Game Features",
									"rowId": `${prefix}indomenu`
								},
								{
									"title": "Convert Menu ⚒️",
									"description": "Displays The List Of Convert Features",
									"rowId": `${prefix}convertmenu`
								},
								{
									"title": "Database Menu ♻️",
									"description": "Displays The List Of Database Features",
									"rowId": `${prefix}databasemenu`
								},
								{
									"title": "Indo Menu  🦜",
									"description": "Displays The List Of Indo Features",
									"rowId": `${prefix}indomenu`
								},
								{
									"title": "Horoscope Menu 🕊️",
									"description": "Displays The List Of Horoscope Features",
									"rowId": `${prefix}indohoroscopemenu`
								}
							]
						},
						{
							"title": "Chat With Fellow Users 🌝",
							"rows": [{
								"title": "Anonymous Chat Menu 🙎🏻‍♂️",
								"description": "Displays The List Of Anonymous Chat Features",
								"rowId": `${prefix}anonymousmenu`
							}]
						},
						{
							"title": "Credit ©️",
							"rows": [{
								"title": "Thanks To ❤️",
								"description": "Displays The List Of Credit Of The Bot !!",
								"rowId": `${prefix}tqtt`
							}]
						}
					],
					listType: 1
				}
			}), {})
			HoriBeta.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'allmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			let Allmenuu = lang.AllMenu(prefix)
			var unicorn = await getBuffer(picak + 'All Menu')
			await HoriBeta.send5ButImg(from, `${Allmenuu}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'ownermenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Owner Menu')
			await HoriBeta.send5ButImg(from, `${lang.OwnerMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'groupmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Group Menu')
			await HoriBeta.send5ButImg(from, `${lang.GroupMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'rpgmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Rpg Menu')
			await HoriBeta.send5ButImg(from, `${lang.RpgMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'makermenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Maker Menu')
			await HoriBeta.send5ButImg(from, `${lang.MakerMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'downloadmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Download Menu')
			await HoriBeta.send5ButImg(from, `${lang.DownloaderMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'searchmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Search Menu')
			await HoriBeta.send5ButImg(from, `${lang.SearchMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'convertmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Convert Menu')
			await HoriBeta.send5ButImg(from, `${lang.ConvertMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'randomimagemenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Random Image Menu')
			await HoriBeta.send5ButImg(from, `${lang.RandomPicMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break

		case 'emotemenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			var unicorn = await getBuffer(picak + 'Emote Menu')
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			await HoriBeta.send5ButImg(from, `${lang.EmoteMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'imageeffectmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Image Effect Menu')
			await HoriBeta.send5ButImg(from, `${lang.ImgEffectMenu(pushname ,prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'animemenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Anime Menu')
			await HoriBeta.send5ButImg(from, `${lang.AnimeMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'stickermenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Sticker Menu')
			await HoriBeta.send5ButImg(from, `${lang.StickerMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'animestickermenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Anime Sticker Menu')
			await HoriBeta.send5ButImg(from, `${lang.AnimeStickerMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'nsfwmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Nsfw Menu')
			await HoriBeta.send5ButImg(from, `${lang.NSFWMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'funmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Fun Menu')
			await HoriBeta.send5ButImg(from, `${lang.FunMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'soundmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Sound Menu')
			await HoriBeta.send5ButImg(from, `${lang.SoundMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'efxmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'EFX Menu')
			await HoriBeta.send5ButImg(from, `${lang.EFXMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "💝 Bot Web ⚠",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'gamemenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Game Menu')
			await HoriBeta.send5ButImg(from, `${lang.GameMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'anonymousmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Anonymous Menu')
			await HoriBeta.send5ButImg(from, `${lang.AmogusMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'toolmenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Tool Menu')
			await HoriBeta.send5ButImg(from, `${lang.ToolMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'databasemenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Database Menu')
			await HoriBeta.send5ButImg(from, `${lang.DataMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'indomenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Indo Menu')
			await HoriBeta.send5ButImg(from, `${lang.IndoMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'indohoroscopemenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Indo Horoscope Menu')
			await HoriBeta.send5ButImg(from, `${lang.IndoHoroScopeMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'othermenu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			var unicorn = await getBuffer(picak + 'Other Menu')
			await HoriBeta.send5ButImg(from, `${lang.OtherMenu(pushname, prefix)}` + '' + ' ', `${botname}`, unicorn, [{
				"urlButton": {
					"displayText": "🌏 Bot Web 🌏",
					"url": `${websitex}`
				}
			}, {
				"urlButton": {
					"displayText": "Script🔖",
					"url": `${botscript}`
				}
			}, {
				"quickReplyButton": {
					"displayText": "Donate 🍜",
					"id": 'donate'
				}
			}, {
				"quickReplyButton": {
					"displayText": "Owner 👤",
					"id": 'owner'
				}
			}])
			break
		case 'tqtt':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			reply(`${lang.ThanksTo(pushname, prefix)}`)
			break

			case 'banchat': {
				if (isBan) return reply(mess.ban)
				if (!isCreator) return replay(mess.owner)
				if (args[0] === "on") {
					if (isBanChat) return replay('Already Banned')
					banchat.push(from)
					replay('Success in banning the gc')
					var groupe = await HoriBeta.groupMetadata(from)
					var members = groupe['participants']
					var mems = []
					members.map(async adm => {
						mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					HoriBeta.sendMessage(from, {
						text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nThe bot has been disabled in this group, now no one will able to use the bot in this group!`,
						contextInfo: {
							mentionedJid: mems
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "off") {
					if (!isBanChat) return replay('Already Unbanned')
					let off = banchat.indexOf(from)
					banchat.splice(off, 1)
					replay('Success in unbanning the gc')
				} else {
					let buttonsntnsfw = [{
							buttonId: `${command} on`,
							buttonText: {
								displayText: 'Ban'
							},
							type: 1
						},
						{
							buttonId: `${command} off`,
							buttonText: {
								displayText: 'Unban'
							},
							type: 1
						}
					]
					await HoriBeta.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `${global.botname}`, m)
				}
			}
			break

		case 'ban': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(mess.owner)
			if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
			if (args[1]) {
				orgnye = args[1] + "@s.whatsapp.net"
			} else if (m.quoted) {
				orgnye = m.quoted.sender
			}
			const isBane = banUser.includes(orgnye)
			if (args[0] === "add") {
				if (isBane) return ads('User was already banned')
				banUser.push(orgnye)
				replay(`Successfully banned the user`)
			} else if (args[0] === "del") {
				if (!isBane) return ads('User was already unbanned')
				let delbans = banUser.indexOf(orgnye)
				banUser.splice(delbans, 1)
				replay(`Successfully unbanned the user`)
			} else {
				replay("Error")
			}
		}
		break

		case 'inventori':
		case 'inventory':
		case 'profile': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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

			var HoriBeta = await getBuffer(picak + `User's Inventory`)
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
			await HoriBeta.send5ButImg(from, `` + '' + teksehmazeh, `© ${botname}`, HoriBeta, [{
				"urlButton": {
					"displayText": "Bot Web 📍",
					"url": `${websitex}`
				}
			}])
		}
		break
		case 'userlimit':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat) 
			{
				let txt = `「 *ALL LIMIT USER* 」\n\n`
				for (let i of _limit) {
					txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
				}
				reply(txt)
			}
			break
		case 'leaderboard':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat) 
			{
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
				HoriBeta.sendMessage(from, buttonMessage, {
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
		//transaction\\
		case 'beli':
		case 'buy': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
				HoriBeta.sendMessage(from, buttonMessage, {
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
		case 'resetlinkgc':
		case 'resetlinkgroup':
		case 'resetlinkgrup':
		case 'revoke':
		case 'resetlink':
		case 'resetgrouplink':
		case 'resetgclink':
		case 'resetgruplink': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			HoriBeta.groupRevokeInvite(m.chat)
		}
		break
		case 'afk': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let user = global.db.data.users[m.sender]
			user.afkTime = +new Date
			user.afkReason = text
			reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
		}
		break
		case 'ttc':
		case 'ttt':
		case 'tictactoe': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
				if (room.x !== room.o) await HoriBeta.sendText(room.x, str, m, {
					mentions: parseMention(str)
				})
				await HoriBeta.sendText(room.o, str, m, {
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			this.game = this.game ? this.game : {}
			try {
				if (this.game) {
					delete this.game
					HoriBeta.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
				chat: await HoriBeta.sendText(m.chat, caption, m, {
					mentions: parseMention(caption)
				}),
				id: id,
				p: m.sender,
				p2: m.mentionedJid[0],
				status: 'wait',
				waktu: setTimeout(() => {
					if (this.suit[id]) HoriBeta.sendText(m.chat, `_Suit Time Out_`, m)
					delete this.suit[id]
				}, 60000),
				poin,
				poin_lose,
				timeout
			}
		}
		break
		case 'chat': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(`${mess.owner}`)
			if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
			if (args[0] === 'mute') {
				HoriBeta.chatModify({
					mute: 'Infinity'
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unmute') {
				HoriBeta.chatModify({
					mute: null
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'archive') {
				HoriBeta.chatModify({
					archive: true
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unarchive') {
				HoriBeta.chatModify({
					archive: false
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'read') {
				HoriBeta.chatModify({
					markRead: true
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unread') {
				HoriBeta.chatModify({
					markRead: false
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'delete') {
				HoriBeta.chatModify({
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if ('family100' + m.chat in _family100) {
				reply('There Are Still Unfinished Sessions!')
				reply(false)
			}
			let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
			let random = anu[Math.floor(Math.random() * anu.length)]
			let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
			_family100['family100' + m.chat] = {
				id: 'family100' + m.chat,
				pesan: await HoriBeta.sendText(m.chat, hasil, m),
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
			ter = command[1].toLowerCase()
			tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
			reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			break
		case 'guess': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return replay(`Example : ${prefix + command} song\n\nOption : \n1.song\n2. picture\n3. saying\n4. sentence\n5. lyrics\n6.food`)
			if (args[0] === "song") {
				if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
				let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
				let result = anu[Math.floor(Math.random() * anu.length)]
				let msg = await HoriBeta.sendMessage(m.chat, {
					audio: {
						url: result.link_song
					},
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
				HoriBeta.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
					tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					HoriBeta.sendButtonText(m.chat, [{
						buttonId: 'guess song',
						buttonText: {
							displayText: 'Guess the song'
						},
						type: 1
					}], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
					delete tebaklagu[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'picture') {
				if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
				let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
				let result = anu[Math.floor(Math.random() * anu.length)]
				HoriBeta.sendImage(m.chat, result.img, `Please answer the question above\n\nDescription : ${result.deskripsi}\nTime : 60s`, m).then(() => {
					tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					HoriBeta.sendButtonText(m.chat, [{
						buttonId: 'guess picture',
						buttonText: {
							displayText: 'Guess the picture'
						},
						type: 1
					}], `Time has run out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
					delete tebakgambar[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'word') {
				if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
				let anu = await fetchJson('https://raw.githubusercontent.com/Sachu-Settan/Media/main/GuessTheWord.js')
				let result = anu[Math.floor(Math.random() * anu.length)]
				HoriBeta.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
					tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					HoriBeta.sendButtonText(m.chat, [{
						buttonId: 'guess word',
						buttonText: {
							displayText: 'Guess The Word'
						},
						type: 1
					}], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
					delete tebakkata[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'sentence') {
				if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
				let anu = await fetchJson('https://raw.githubusercontent.com/Sachu-Settan/Media/main/GuessTheSentence.js')
				let result = anu[Math.floor(Math.random() * anu.length)]
				HoriBeta.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
					tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					HoriBeta.sendButtonText(m.chat, [{
						buttonId: 'guess sentence',
						buttonText: {
							displayText: 'Guess the Sentence'
						},
						type: 1
					}], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
					delete tebakkalimat[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'lyrics') {
				if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
				let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
				let result = anu[Math.floor(Math.random() * anu.length)]
				HoriBeta.sendText(m.chat, `Fill the missing lyrics below : *${result.soal}*?\nTime : 60s`, m).then(() => {
					tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
				})
				await sleep(60000)
				if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					HoriBeta.sendButtonText(m.chat, [{
						buttonId: 'guess lyrics',
						buttonText: {
							displayText: 'Guess The Lyrics'
						},
						type: 1
					}], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
					delete tebaklirik[m.sender.split('@')[0]]
				}
			} else if (args[0] === 'guess saying') {
				if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
				let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
				let result = anu[Math.floor(Math.random() * anu.length)]
				HoriBeta.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
					caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
				})
				await sleep(60000)
				if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Answer: " + result.jawaban)
					HoriBeta.sendButtonText(m.chat, [{
						buttonId: 'guess saying',
						buttonText: {
							displayText: 'Guess The Saying'
						},
						type: 1
					}], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
					delete caklontong[m.sender.split('@')[0]]
					delete caklontong_desk[m.sender.split('@')[0]]
				}
			}
		}
		break

		case 'randomreact': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
		}
		break

		case 'react': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			HoriBeta.sendMessage(m.chat, reactionMessage)
		}
		break


		case 'kuismath':
		case 'math': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
			let {
				genMath,
				modes
			} = require('./lib/math')
			if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
			let result = await genMath(text.toLowerCase())
			HoriBeta.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			await HoriBeta.sendButtonText(m.chat, buttons, jawab, HoriBeta.user.name, m, {
				mentions: ments
			})
		}
		break
		case 'couple': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			await HoriBeta.sendButtonText(m.chat, buttons, jawab, HoriBeta.user.name, m, {
				mentions: menst
			})
		}
		break
		case 'is':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
			const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
			const kah = apa[Math.floor(Math.random() * apa.length)]
			HoriBeta.sendMessage(from, {
				text: `Question : Is ${q}\nAnswer : ${kah}`
			}, {
				quoted: m
			})

			break
		case 'what':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
			const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
			const kahk = lel[Math.floor(Math.random() * lel.length)]
			HoriBeta.sendMessage(from, {
				text: `Question : What ${q}\nAnswer : ${kahk}`
			}, {
				quoted: m
			})

			break
		case 'can':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
			const bisa = [`Can`, `Can't`, `Cannot`, `Of Course You Can!!!`]
			const ga = bisa[Math.floor(Math.random() * bisa.length)]
			HoriBeta.sendMessage(from, {
				text: `Question : Can ${q}\nAnswer : ${ga}`
			}, {
				quoted: m
			})

			break
		case 'how':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
			const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`, `Holy Cow! Really???`, `Dizzy Ah`, `Ohhh I See:(`, `The Patient, Boss:(`, `How Are You?`]
			const ya = gimana[Math.floor(Math.random() * gimana.length)]
			HoriBeta.sendMessage(from, {
				text: `Question : ${q}\nAnswer : How ${ya}`
			}, {
				quoted: m
			})

			break
		case 'rate':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
			const ra = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
			const te = ra[Math.floor(Math.random() * ra.length)]
			HoriBeta.sendMessage(from, {
				text: `Rate : ${q}\nAnswer : *${te}%*`
			}, {
				quoted: m
			})

			break
		case 'handsomecheck':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Sachu-Settan`)
			const gan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
			const teng = gan[Math.floor(Math.random() * gan.length)]
			HoriBeta.sendMessage(from, {
				text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
			}, {
				quoted: m
			})

			break
		case 'beautifulcheck':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Sachu-Settan`)
			const can = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
			const tik = can[Math.floor(Math.random() * can.length)]
			HoriBeta.sendMessage(from, {
				text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*`
			}, {
				quoted: m
			})
			break
		case 'charactercheck':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Sachu-Settan`)
			const Hori = ['Compassionate', 'Generous', 'Grumpy', 'Forgiving', 'Obedient', 'Good', 'Simp', 'Kind-Hearted', 'patient', 'UwU', 'top, anyway', 'Helpful']
			const taky = Hori[Math.floor(Math.random() * Hori.length)]
			HoriBeta.sendMessage(from, {
				text: `Character Check : ${q}\nAnswer : *${taky}*`
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Sachu-Settan`)
			const sangeh = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
			const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
			HoriBeta.sendMessage(from, {
				text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*`
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
		case 'nerd':
		case 'mc':
		case 'bsdk':
		case 'bhosdk':
		case 'nigger':
		case 'loda':
		case 'laund':
		case 'nigga':
		case 'noobra':
		case 'tharki':
		case 'nibba':
		case 'nibbi':
		case 'mumu':
		case 'rascal':
		case 'scumbag':
		case 'nuts':
		case 'comrade':
		case 'fagot':
		case 'scoundrel':
		case 'ditch':
		case 'dope':
		case 'gucci':
		case 'lit':
		case 'dumbass':
		case 'sexy':
		case 'crackhead':
		case 'mf':
		case 'motherfucker':
		case 'dogla':
		case 'bewda':
		case 'boka':
		case 'khanki':
		case 'bal':
		case 'sucker':
		case 'fuckboy':
		case 'playboy':
		case 'fuckgirl':
		case 'playgirl':
		case 'hot': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			await HoriBeta.sendButtonText(m.chat, buttons, jawab, botname, m, {
				mentions: ments
			})
		}
		break
		case 'dare':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			const dare = JSON.parse(fs.readFileSync('./Media/dare/dare.json'));
			const Horidare = dare[Math.floor(Math.random() * dare.length)]
			buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
			HoriBeta.sendMessage(from, {
				image: buffer,
				caption: '_You choose DARE_\n' + Horidare
			}, {
				quoted: m
			})
			break
		case 'truth':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			const truth = JSON.parse(fs.readFileSync('./Media/truth/truth.json'));
			const Horitruth = truth[Math.floor(Math.random() * truth.length)]
			buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
			HoriBeta.sendMessage(from, {
				image: buffer,
				caption: '_You choose TRUTH_\n' + Horitruth
			}, {
				quoted: m
			})
			break
		case 'when':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
			const kapan = ['5 More Days', '10 More Days', '15 More Days', '20 More Days', '25 More Days', '30 More Days', '35 More Days', '40 More Days', '45 More Days', '50 More Days', '55 More Days', '60 More Days', '65 More Days', '70 More Days', '75 More Days', '80 More Days', '85 More Days', '90 More Days', '100 More Days', '5 Months More', '10 Months More', '15 Months More', '20 Months More', '25 Months More', '30 Months More', '35 Months More', '40 Months More', '45 Months More', '50 Months More', '55 Months More', '60 Months More', '65 Months More', '70 Months More', '75 Months More', '80 Months More', '85 Months More', '90 Months More', '100 Months More', '1 More Year', '2 More Years', '3 More Years', '4 More Years', '5 More Years', 'Tomorrow', 'The Day After Tomorrow', `After This Command, You Too ${q}`]
			const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
			HoriBeta.sendMessage(from, {
				text: `Question : ${q}\nAnswer : *${kapankah}*`
			}, {
				quoted: m
			})
			break
		case 'wangy':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
			qq = q.toUpperCase()
			awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${qq} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
			reply(awikwok)
			break
		case 'checkdeath':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Bot`)
			predea = await axios.get(`https://api.agify.io/?name=${q}`)
			reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
			break
		case 'join': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Enter The Group Link!`)
			if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
			reply(mess.wait)
			let result = args[0].split('https://chat.whatsapp.com/')[1]
			await HoriBeta.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'leavegc':
		case 'leavegroup': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			if (!isCreator) return replay(`${mess.owner}`)
			await HoriBeta.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setexif': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Example : ${prefix + command} packname|author`)
			global.packname = text.split("|")[0]
			global.author = text.split("|")[1]
			reply(`Exif Has Been Successfully Changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
		}
		break
		case 'kick': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await HoriBeta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'add': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await HoriBeta.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'promote': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await HoriBeta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'demote': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await HoriBeta.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'block': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(`${mess.owner}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await HoriBeta.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'unblock': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(`${mess.owner}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await HoriBeta.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setname':
		case 'setgcname':
		case 'setsubject': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) replay(`${mess.admin}`)
			if (!text) replay(`Where Is The Text?`)
			await HoriBeta.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setdesc':
		case 'setdescription': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) replay(`${mess.admin}`)
			if (!text) replay(`Where Is The Text?`)
			await HoriBeta.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setbotpp': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(`${mess.owner}`)
			if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			await HoriBeta.updateProfilePicture(botNumber, {
				url: media
			}).catch((err) => fs.unlinkSync(media))
			reply(mess.success)
		}
		break
		case 'setgrouppp':
		case 'setgruppp':
		case 'setgcpp': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			await HoriBeta.updateProfilePicture(m.chat, {
				url: media
			}).catch((err) => fs.unlinkSync(media))
			reply(mess.success)
		}
		break
		case 'tagall': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let tagtext = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
			if (tagtext === `${prefix}+${command}`) {
				tagtext = "No Message"
			}
			let teks = `┌─❖\n${global.themeeline}「 Tag All 」\n└┬❖ 「 𝗧𝗮𝗴𝗴𝗲𝗱 𝗕𝘆, ${pushname} ! 」\n┌┤✑ Message :\n${global.themeeline}${global.themeeline}✑ ${tagtext}\n${global.themeeline}└───────────────┈ ⳹\n${global.themeeline}\n`
			for (let mem of participants) {
				teks += `${themeline} @${mem.id.split('@')[0]}\n`
			}
			teks += `${themeendline}`
			HoriBeta.sendMessage(m.chat, {
				text: teks,
				mentions: participants.map(a => a.id)
			}, {
				quoted: m
			})
		}
		break
		case 'hidetag':
		case 'tag': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let unicorndoc = {
				key: {
					fromMe: false,
					"participant": "0@s.whatsapp.net",
					"remoteJid": "919744933034@g.us"
				},
				"message": {
					"productMessage": {
						"product": {
							"productImage": {
								"mimetype": "image/jpeg",
								"jpegThumbnail": log0 //The picture
							},
							"title": `${global.botname}`,
							"currencyCode": "USD",
							"priceAmount1000": "999999999999",
							"retailerId": `${global.watermark}`,
							"productImageCount": 1
						},
						"businessOwnerJid": `0@s.whatsapp.net`
					}
				},
				contextInfo: {
					"forwardingScore": 999,
					"isForwarded": true
				},
				sendEphemeral: true
			}
			try {
				if (/image/.test(mime)) {
					let mediac = await quoted.download()
					await HoriBeta.sendMessage(m.chat, {
						image: mediac,
						caption: m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text,
						mentions: participants.map(a => a.id),
					}, {
						quoted: unicorndoc
					})
				} else if (/document/.test(mime)) {
					let mediac = await quoted.download()
					await HoriBeta.sendMessage(m.chat, {
						document: mediac,
						mentions: participants.map(a => a.id)
					}, {
						quoted: unicorndoc
					})
				} else if (/audio/.test(mime)) {
					let mediac = await quoted.download()
					await HoriBeta.sendMessage(m.chat, {
						audio: mediac,
						caption: m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text,
						mentions: participants.map(a => a.id)
					}, {
						quoted: unicorndoc
					})
				} else if (/video/.test(mime)) {
					let mediac = await quoted.download()
					await HoriBeta.sendMessage(m.chat, {
						video: mediac,
						caption: m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text,
						mentions: participants.map(a => a.id)
					}, {
						quoted: unicorndoc
					})
				} else if (/webp/.test(mime)) {
					let mediac = await quoted.download()
					await HoriBeta.sendMessage(m.chat, {
						sticker: mediac,
						mentions: participants.map(a => a.id)
					}, {
						quoted: unicorndoc
					})
				} else {
					await HoriBeta.sendMessage(m.chat, {
						text: m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text,
						mentions: participants.map(a => a.id)
					}, {
						quoted: unicorndoc
					})
				}
			} catch (err) {
				reply(`Failed To Hide Tag \n If This Is A Bug Please Report To ${ownernumber}\n\n` + err)
			}
		}
		break
		case 'style':
		case 'styletext': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit)
			db.data.users[m.sender].limit -= 1 // -1 limit
			let {
				styletext
			} = require('./lib/scraper')
			if (!text) return replay(`Enter Query Text!`)
			let anu = await styletext(text)
			let teks = `Entered Text ${text}\n\n`
			for (let i of anu) {
				teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
			}
			reply(teks)
		}
		break
		case 'vote': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
${global.themeeline} 
${global.themeline} Total: ${vote[m.chat][1].length}
${global.themeeline}
${global.themeendline}

┌〔 DEVOTE 〕
${global.themeeline} 
${global.themeline} Total: ${vote[m.chat][2].length}
${global.themeeline}
${global.themeendline}

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
				footer: HoriBeta.user.name,
				buttons: buttonsVote,
				headerType: 1
			}
			HoriBeta.sendMessage(m.chat, buttonMessageVote)
		}
		break
		case 'upvote': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
${global.themeeline} 
${global.themeline} Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `${global.themeline} ${i + 1}. @${v.split`@`[0]}`).join('\n')}
${global.themeendline}

┌〔 DEVOTE 〕
${global.themeeline} 
${global.themeline} Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `${global.themeline} ${i + 1}. @${v.split`@`[0]}`).join('\n')}
${global.themeendline}

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
				footer: HoriBeta.user.name,
				buttons: buttonsUpvote,
				headerType: 1,
				mentions: menvote
			}
			HoriBeta.sendMessage(m.chat, buttonMessageUpvote)
		}
		break
		case 'devote': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
${global.themeeline} 
${global.themeline} Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `${global.themeline} ${i + 1}. @${v.split`@`[0]}`).join('\n')}
${global.themeendline}

┌〔 DEVOTE 〕
${global.themeeline} 
${global.themeline} Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `${global.themeline} ${i + 1}. @${v.split`@`[0]}`).join('\n')}
${global.themeendline}

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
				footer: HoriBeta.user.name,
				buttons: buttonsDevote,
				headerType: 1,
				mentions: menvote
			}
			HoriBeta.sendMessage(m.chat, buttonMessageDevote)
		}
		break

		case 'checkvote':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
			teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
${global.themeeline} 
${global.themeline} Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `${global.themeline} ${i + 1}. @${v.split`@`[0]}`).join('\n')}
${global.themeendline}

┌〔 DEVOTE 〕
${global.themeeline} 
${global.themeline} Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `${global.themeline} ${i + 1}. @${v.split`@`[0]}`).join('\n')}
${global.themeendline}

*${prefix}delvote* - To Delete Vote Session


©${HoriBeta.user.id}
`
			HoriBeta.sendTextWithMentions(m.chat, teks_vote, m)
			break
		case 'deletevote':
		case 'delvote':
		case 'hapusvote': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
			delete vote[m.chat]
			reply('Successfully Deleted The Vote Session In This Group')
		}
		break
		case 'group':
		case 'grup': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (args[0] === 'close') {
				await HoriBeta.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'open') {
				await HoriBeta.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
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
				await HoriBeta.sendButtonText(m.chat, buttons, `Group Mode`, HoriBeta.user.name, m)

			}
		}
		break
		case 'editinfo': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (args[0] === 'open') {
				await HoriBeta.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'close') {
				await HoriBeta.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
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
				await HoriBeta.sendButtonText(m.chat, buttons, `Mode Edit Info`, HoriBeta.user.name, m)

			}
		}
		break
		case 'autosticker':
		case 'autostiker':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return reply(mess.botAdmin)
			if (!isAdmins && !isCreator) return reply(mess.admin)
			if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
			if (args[0] === 'on') {
				if (isAutoSticker) return reply(`Already activated`)
				autosticker.push(from)
				fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
				reply('autosticker activated')
			} else if (args[0] === 'off') {
				let anu = autosticker.indexOf(from)
				autosticker.splice(anu, 1)
				fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
				reply('auto sticker deactivated')
			}
			break
		case 'autostickerpc':
		case 'autostikerpc':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (args.length < 1) return reply('type autosticker on to activate\ntype autosticker off to disable')
			if (args[0] === 'on') {
				if (isAutoStick) return reply(`Already activated`)
				_autostick.push(from)
				fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
				reply('autosticker pc activated')
			} else if (args[0] === 'off') {
				let anu = autosticker.indexOf(from)
				_autostick.splice(anu, 1)
				fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
				reply('autosticker pc deactivated')
			}
			break
		case 'antilinkgc': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLink) return replay('Already activated')
				ntilink.push(from)
				replay('Success in turning on group chat antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the group link in this group or u will be kicked immediately`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLink) return replay('Already deactivated')
				let off = ntilink.indexOf(from)
				ntilink.splice(off, 1)
				replay('Success in turning off group chat antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antilinkyoutubevideo':
		case 'antilinkyoutubevid':
		case 'antilinkytvid': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLinkYoutubeVid) return replay('Already activated')
				ntilinkytvid.push(from)
				replay('Success in turning on youtube video antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLinkYoutubeVid) return replay('Already deactivated')
				let off = ntilinkytvid.indexOf(from)
				ntilinkytvid.splice(off, 1)
				replay('Success in turning off youtube video antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antilinkyoutubech':
		case 'antilinkyoutubechannel':
		case 'antilinkytch': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLinkYoutubeChannel) return replay('Already activated')
				ntilinkytch.push(from)
				replay('Success in turning on youtube channel antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
				let off = ntilinkytch.indexOf(from)
				ntilinkytch.splice(off, 1)
				replay('Success in turning off youtube channel antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antilinkinstagram':
		case 'antilinkig':
		case 'antilinkinsta': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLinkInstagram) return replay('Already activated')
				ntilinkig.push(from)
				replay('Success in turning on instagram antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLinkInstagram) return replay('Already deactivated')
				let off = ntilinkig.indexOf(from)
				ntilinkig.splice(off, 1)
				replay('Success in turning off instagram antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antilinkfacebook':
		case 'antilinkfb': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLinkFacebook) return replay('Already activated')
				ntilinkfb.push(from)
				replay('Success in turning on facebook antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLinkFacebook) return replay('Already deactivated')
				let off = ntilinkfb.indexOf(from)
				ntilinkfb.splice(off, 1)
				replay('Success in turning off facebook antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antilinktelegram':
		case 'antilinktg': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLinkTelegram) return replay('Already activated')
				ntilinktg.push(from)
				replay('Success in turning on telegram antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLinkTelegram) return replay('Already deactivated')
				let off = ntilinkig.indexOf(from)
				ntilinkig.splice(off, 1)
				replay('Success in turning off telegram antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antilinktiktok':
		case 'antilinktt': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLinkTiktok) return replay('Already activated')
				ntilinktt.push(from)
				replay('Success in turning on tiktok antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLinkTiktok) return replay('Already deactivated')
				let off = ntilinktt.indexOf(from)
				ntilinktt.splice(off, 1)
				replay('Success in turning off tiktok antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antilinktwt':
		case 'antilinktwitter':
		case 'antilinktwit': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLinkTwitter) return replay('Already activated')
				ntilinktwt.push(from)
				replay('Success in turning on twitter antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLinkTwitter) return replay('Already deactivated')
				let off = ntilinktwt.indexOf(from)
				ntilinktwt.splice(off, 1)
				replay('Success in turning off twitter antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antilinkall': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiLinkTwitter) return replay('Already activated')
				ntilinkall.push(from)
				replay('Success in turning on all antilink in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiLinkAll) return replay('Already deactivated')
				let off = ntilinkall.indexOf(from)
				ntilinkall.splice(off, 1)
				replay('Success in turning off all antilink in this group')
			} else {
				let buttonsntilink = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antivirus':
		case 'antivirtex': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (antiVirtex) return replay('Already activated')
				ntvirtex.push(from)
				replay('Success in turning on antivirus in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!antiVirtex) return replay('Already deactivated')
				let off = ntvirtex.indexOf(from)
				ntvirtex.splice(off, 1)
				replay('Success in turning off antivirus this group')
			} else {
				let buttonsntvirtex = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'autoreply': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (Autoreply) return replay('Already activated')
				autorep.push(from)
				replay('Success in turning on the autoreply in this group')
			} else if (args[0] === "off") {
				if (!Autoreply) return replay('Already deactivated')
				let off = autorep.indexOf(from)
				autorep.splice(off, 1)
				replay('Success in turning off autoreply in this group')
			} else {
				let buttonswlcm = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'chatbot': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (args[0] === "on") {
				if (ChatBot) return replay('Already activated')
				chattbot.push(from)
				replay('Success in turning on the Chat Bot in this group')
			} else if (args[0] === "off") {
				if (!ChatBot) return replay('Already deactivated')
				let off = autorep.indexOf(from)
				chattbot.splice(off, 1)
				replay('Success in turning off Chat Bot in this group')
			} else {
				let buttonswlcm = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antitoxic': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (antiToxic) return replay('Already activated')
				nttoxic.push(from)
				replay('Success in turning on antitoxic in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!antiToxic) return replay('Already deactivated')
				let off = nttoxic.indexOf(from)
				nttoxic.splice(off, 1)
				replay('Success in turning off antitoxic in this group')
			} else {
				let buttonsnttoxci = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'antiwame': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (antiWame) return replay('Already activated')
				ntwame.push(from)
				replay('Success in turning on antiwame in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!antiWame) return replay('Already deactivated')
				let off = nttoxic.indexOf(from)
				ntwame.splice(off, 1)
				replay('Success in turning off antiwame in this group')
			} else {
				let buttonsntwame = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'nsfw': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!isBotAdmins) return replay(mess.botAdmin)
			if (!isAdmins && !isCreator) return replay(mess.admin)
			if (args[0] === "on") {
				if (AntiNsfw) return replay('Already activated')
				ntnsfw.push(from)
				replay('Success in turning on nsfw in this group')
				var groupe = await HoriBeta.groupMetadata(from)
				var members = groupe['participants']
				var mems = []
				members.map(async adm => {
					mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				HoriBeta.sendMessage(from, {
					text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`,
					contextInfo: {
						mentionedJid: mems
					}
				}, {
					quoted: m
				})
			} else if (args[0] === "off") {
				if (!AntiNsfw) return replay('Already deactivated')
				let off = ntnsfw.indexOf(from)
				ntnsfw.splice(off, 1)
				replay('Success in turning off nsfw in this group')
			} else {
				let buttonsntnsfw = [{
						buttonId: `${command} on`,
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: `${command} off`,
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await HoriBeta.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
			}
		}
		break
		case 'mute': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (args[0] === "on") {
				if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
				db.data.chats[m.chat].mute = true
				reply(`${HoriBeta.user.name} Has Been Muted In This Group !`)
			} else if (args[0] === "off") {
				if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
				db.data.chats[m.chat].mute = false
				reply(`${HoriBeta.user.name} Has Been Unmuted In This Group!`)
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
				await HoriBeta.sendButtonText(m.chat, buttons, `Mute Bot`, HoriBeta.user.name, m)
			}
		}
		break
		case 'setppbot':
		case 'setbotpp': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(mess.owner)
			if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			await HoriBeta.updateProfilePicture(botNumber, {
				url: media
			}).catch((err) => fs.unlinkSync(media))
			replay(mess.success)
		}
		break
		case 'linkgroup':
		case 'linkgc':
		case 'gclink':
		case 'grouplink': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(`${mess.group}`)
			let response = await HoriBeta.groupInviteCode(m.chat)
			HoriBeta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, {
				detectLink: true
			})
		}
		break
		case 'ephemeral': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (!text) return replay(`Enter The enable/disable Values`)
			if (args[0] === 'enable') {
				await HoriBeta.sendMessage(m.chat, {
					disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL
				}).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'disable') {
				await HoriBeta.sendMessage(m.chat, {
					disappearingMessagesInChat: false
				}).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			}
		}
		break
		case 'grupsetting':
		case 'groupsetting': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let sections = []
			let com = [`group open`, `autosticker on`, `welcome on`, `antilinkgc on`, `antilinktg on`, `antilinktt on`, `antilinkytch on`, `antilinkytvid on`, `antilinkig on`, `antilinkfb on`, `antilinktwit on`, `antilinkall on`, `antiwame on`, `antitoxic on`, `antivirus on`, `autoreply on`, `group open`]
			let comm = [`group close`, `autosticker off`, `welcome off`, `antilinkgc off`, `antilinktg on`, `antilinktt on`, `antilinkytch on`, `antilinkytvid on`, `antilinkig on`, `antilinkfb on`, `antilinktwit on`, `antilinkall on`, `antiwame on`, `antitoxic on`, `antivirus on`, `autoreply on`, `group close`]
			let listnya = [`Group open/close`, `Auto-Sticker on/off`, `Welcome/Left on/off`, `Antilink Group on/off`, `Antilink Telegram on/off`, `Antilink Tiktok on/off`, `Antilink Youtube Channel on/off`, `Antilink Youtube Video on/off`, `Antilink Instagram on/off`, `Antilink Facebook on/off`, `Antilink Twitter on/off`, `Antilink All on/off`, `Anti Wame on/off`, `Anti Toxic on/off`, `Anti Virus on/off`, `Auto Reply on/off`, `Group open/close`]
			let suruh = [`Enable`, `Disable`]
			let fiturname = [`Group`, `Auto Sticker`, `Welcome`, `Antilink Group`, `Antilink Telegram`, `Antilink Tiktok`, `Antilink Youtube Channel`, `Antilink Youtube Video`, `Antilink Instagram`, `Antilink Facebook`, `Antilink Twitter`, `Antilink All`, `Anti Wame`, `Anti Toxic`, `Anti Virus`, `Auto Reply`, `Group`]
			let startnum = 0;
			let startnu = 0;
			let startn = 0;
			let start = 0
			let startnumm = 1
			for (let x of com) {
				const yy = {
					title: `${listnya[startnum++]}`,
					rows: [{
						title: `${suruh[0]}`,
						description: `Activate ${fiturname[startnu++]}`,
						rowId: `${prefix}${x}`
					}, {
						title: `${suruh[1]}`,
						description: `Deactivate ${fiturname[startn++]}`,
						rowId: `${prefix}${comm[start++]}`
					}]
				}
				sections.push(yy)
			}
			const sendm = HoriBeta.sendMessage(
				from, {
					text: "Group Settings",
					footer: botname,
					title: "Set your group settings here......",
					buttonText: "Click Button",
					sections
				}, {
					quoted: m
				}
			)
		}
		break

		case 'delete':
		case 'del': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.quoted) reply(false)
			let {
				chat,
				fromMe,
				id,
				isBaileys
			} = m.quoted
			if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
			HoriBeta.sendMessage(m.chat, {
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(mess.owner)
			if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
			let getGroups = await HoriBeta.groupFetchAllParticipating()
			let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
			let anu = groups.map(v => v.id)
			replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
			for (let i of anu) {
				await sleep(1500)
				let btn = [{
					urlButton: {
						displayText: 'Bot Web 🍓',
						url: `${global.websitex}`
					}
				}, {
					urlButton: {
						displayText: 'Script 🍜',
						url: `${global.botscript}`
					}
				}, {
					quickReplyButton: {
						displayText: 'Bot Status 🚀',
						id: 'ping'
					}
				}, {
					quickReplyButton: {
						displayText: 'Menu 🐰',
						id: 'menu'
					}
				}, {
					quickReplyButton: {
						displayText: 'Owner 😈',
						id: 'owner'
					}
				}]
				let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
				HoriBeta.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
			}
			replay(`Successfully Sent Broadcast To ${anu.length} Group`)
		}
		break
		case 'bc':
		case 'broadcast':
		case 'bcall': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(mess.owner)
			if (!args.join(" ")) return replay(`Where is the text??\n\nExample : ${prefix + command} ${global.ownername}`)
			let anu = await store.chats.all().map(v => v.id)
			replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
			for (let yoi of anu) {
				await sleep(1500)
				let btn = [{
					urlButton: {
						displayText: 'Bot Web 🍓',
						url: `${global.websitex}`
					}
				}, {
					urlButton: {
						displayText: 'Script 🍜',
						url: `${global.botscript}`
					}
				}, {
					quickReplyButton: {
						displayText: 'Bot Status 🚀',
						id: 'ping'
					}
				}, {
					quickReplyButton: {
						displayText: 'Menu 🐰',
						id: 'menu'
					}
				}, {
					quickReplyButton: {
						displayText: 'Owner 😈',
						id: 'owner'
					}
				}]
				let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
				HoriBeta.send5ButImg(yoi, txt, `${global.botname}`, log0, btn, thum)
			}
			replay('Broadcast Success')
		}
		break
		case 'bcimage':
		case 'bcvideo':
		case 'bcaudio': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(mess.owner)
			if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
			let anu = await store.chats.all().map(v => v.id)
			let ftroli = {
				key: {
					fromMe: false,
					"participant": "0@s.whatsapp.net",
					"remoteJid": "919744933034-1604595598@g.us"
				},
				"message": {
					orderMessage: {
						itemCount: 999999999,
						status: 200,
						thumbnail: fs.readFileSync('./Bot Pic/Hori.jpg'),
						surface: 200,
						message: `${ownername}'s Broadcast`,
						orderTitle: `${botname}`,
						sellerJid: '0@s.whatsapp.net'
					}
				},
				contextInfo: {
					"forwardingScore": 999,
					"isForwarded": true
				},
				sendEphemeral: true
			}
			reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} secs*`)
			for (let i of anu) {
				await sleep(1500)
				let butoon = [{
					urlButton: {
						displayText: 'Bot Web 🍓',
						url: `${global.websitex}`
					}
				}, {
					urlButton: {
						displayText: 'Script 🍜',
						url: `${global.botscript}`
					}
				}, {
					quickReplyButton: {
						displayText: 'Bot Status 🚀',
						id: 'ping'
					}
				}, {
					quickReplyButton: {
						displayText: 'Menu 🐰',
						id: 'menu'
					}
				}, {
					quickReplyButton: {
						displayText: 'Owner 😈',
						id: 'owner'
					}
				}]
				let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
				let buffer = fs.readFileSync(media)
				if (/webp/.test(mime)) {
					HoriBeta.sendMessage(i, {
						sticker: {
							url: media
						}
					}, {
						quoted: ftroli
					})
				} else if (/image/.test(mime)) {
					let Sachu = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
					HoriBeta.send5ButImg(i, Sachu, `${global.botname}`, buffer, butoon)
				} else if (/video/.test(mime)) {
					let Sachu = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
					HoriBeta.sendMessage(i, {
						video: buffer,
						caption: `${Sachu}`
					}, {
						quoted: ftroli
					})
				} else if (/audio/.test(mime)) {
					HoriBeta.sendMessage(i, {
						audio: buffer,
						mimetype: 'audio/mpeg'
					}, {
						quoted: ftroli
					})
				} else {
					reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
				}
				await fs.unlinkSync(media)
			}
			reply(` *Send Broadcast To* ${anu.length} *Chats*`)
		}
		break
		case 'bcloc': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(mess.owner)
			if (!text) return reply(`Use ${prefix}bcloc text\n\nExample : ${prefix + command} attention everybody`)
			let anu = await store.chats.all().map(v => v.id)
			let [melo, melo2] = text.split`|`
			reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} sec`)
			for (let yoi of anu) {
				await sleep(1500)
				var button = [{
					buttonId: `${prefix}ho`,
					buttonText: {
						displayText: `${melo2}`
					},
					type: 1
				}]
				HoriBeta.sendMessage(yoi, {
					caption: `${melo}`,
					location: {
						jpegThumbnail: await getBuffer(picak + `${ownername}'s Broadcast`)
					},
					buttons: button,
					footer: `${botname}`,
					mentions: [m.sender]
				})
			}
		}
		break
		case 'chatinfo': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.quoted) replay('Reply Message')
			let msg = await m.getQuotedObj()
			if (!m.quoted.isBaileys) return replay('The message was not sent by a bot!')
			let teks = ''
			for (let i of msg.userReceipt) {
				let read = i.readTimestamp
				let unread = i.receiptTimestamp
				let waktu = read ? read : unread
				teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
				teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
			}
			HoriBeta.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'q':
		case 'quoted': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.quoted) return replay('Reply Message!!')
			let wokwol = await HoriBeta.serializeM(await m.getQuotedObj())
			if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
			await wokwol.quoted.copyNForward(m.chat, true)
		}
		break
		case 'listpc': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
			let teks = `     「 Personal Chat List 」\n\nThere are ${anu.length} users using bot in personal chat`
			for (let i of anu) {
				teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
			}
			HoriBeta.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'listgc': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
			let teks = `     「 Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
			for (let i of anu) {
				let metadata = await HoriBeta.groupMetadata(i)
				if (metadata.owner === "undefined") {
					loldd = false
				} else {
					loldd = metadata.owner
				}
				teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
			}
			HoriBeta.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'listonline':
		case 'listaktif': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
			let online = [...Object.keys(store.presences[id]), botNumber]
			let liston = 1
			HoriBeta.sendText(m.chat, '     「 Online List 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, {
				mentions: online
			})
		}
		break
		case 'patrick':
		case 'patricksticker': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
			var wifegerak = ano.split('\n')
			var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
			encmedia = await HoriBeta.sendImageAsSticker(from, wifegerakx, m, {
				packname: global.packname,
				author: global.author,
			})
			await fs.unlinkSync(encmedia)
		}
		break
		case 'attp2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} text`)
			await HoriBeta.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {
				asSticker: true
			})

		}
		break
		case 'attp': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) reply(`Use ${prefix}attp hello\n*Example : ${prefix + command} ${ownername}*`)
			await HoriBeta.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'Sachu-Settan', 'Op', m, {
				asSticker: true
			}).catch((err) => reply(mess.error))
		}
		break
		case 'ttp': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`*Example : ${prefix + command} hello*`)
			await HoriBeta.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {
				asSticker: true
			})

		}
		break
		case 'soundcloud':
		case 'scdl': {
			if (!text) return reply(mess.linkm)
			if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) return reply(`*Not a soundcloud link*`)
			xfarr.SoundCloud(`${text}`).then(async (data) => {
				let txt = `*SOUNDCLOUD DOWNLOADER*\n\n`
				txt += `*${themeemoji}Title :* ${data.title}\n`
				txt += `*${themeemoji}Quality :* ${data.medias[0].quality}\n`
				txt += `*${themeemoji}Type :* ${data.medias[0].extension}\n`
				txt += `*${themeemoji}Size :* ${data.medias[0].formattedSize}\n`
				txt += `*${themeemoji}Url Source :* ${data.url}\n\n`
				txt += `*${botname}*`
				buf = await getBuffer(data.thumbnail)
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: data.thumbnail
					},
					jpegThumbnail: buf,
					caption: `${txt}`
				}, {
					quoted: m
				}).catch((err) => reply(mess.error))
				HoriBeta.sendMessage(m.chat, {
					audio: {
						url: data.medias[0].url
					},
					mimetype: 'audio/mpeg',
					fileName: data.title + '.m4a',
					contextInfo: {
						externalAdReply: {
							title: `${global.botname}`,
							body: `${global.botname}`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: `${global.websitex}`,
							sourceUrl: `${global.websitex}`
						}
					}
				}, {
					quoted: m
				})
			}).catch((err) => {
				reply(mess.error)
			})
		}
		break
		case 'dogesticker':
		case 'dogestick':
		case 'doge': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
			var wifegerak = ano.split('\n')
			var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
			encmedia = await HoriBeta.sendImageAsSticker(from, wifegerakx, m, {
				packname: global.packname,
				author: global.author,
			})
			await fs.unlinkSync(encmedia)
		}
		break
		case 'lovesticker':
		case 'lovestick': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
			var wifegerak = ano.split('\n')
			var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
			encmedia = await HoriBeta.sendImageAsSticker(from, wifegerakx, m, {
				packname: global.packname,
				author: global.author,
			})
			await fs.unlinkSync(encmedia)
		}
		break
		case 'gura':
		case 'gurastick': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
			var wifegerak = ano.split('\n')
			var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
			encmedia = await HoriBeta.sendImageAsSticker(from, wifegerakx, m, {
				packname: global.packname,
				author: global.author,
			})
			await fs.unlinkSync(encmedia)
		}
		break
		case 'sticker':
		case 's':
		case 'stickergif':
		case 'sgif': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (/image/.test(mime)) {
				let media = await quoted.download()
				let encmedia = await HoriBeta.sendImageAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
				let media = await quoted.download()
				let encmedia = await HoriBeta.sendVideoAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else {
				reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
			}
		}
		break
		case 'swm':
		case 'take':
		case 'stickerwm': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
			const swn = args.join(" ")
			const pcknm = swn.split("|")[0];
			const atnm = swn.split("|")[1];
			if (m.quoted.isAnimated === true) {
				HoriBeta.downloadAndSaveMediaMessage(quoted, "gifee")
				HoriBeta.sendMessage(from, {
					sticker: fs.readFileSync("gifee.webp")
				}, {
					quoted: m
				})
			} else if (/image/.test(mime)) {
				let media = await quoted.download()
				let encmedia = await HoriBeta.sendImageAsSticker(m.chat, media, m, {
					packname: pcknm,
					author: global.atnm
				})
				await fs.unlinkSync(encmedia)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
				let media = await quoted.download()
				let encmedia = await HoriBeta.sendVideoAsSticker(m.chat, media, m, {
					packname: pcknm,
					author: atnm
				})
				await fs.unlinkSync(encmedia)
			} else {
				reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
			}
		}
		break
		case 'smeme':
		case 'stickermeme':
		case 'stickmeme': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let {
				TelegraPh
			} = require('./lib/uploader')
			if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
			if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
			reply(mess.wait)
			mee = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			mem = await TelegraPh(mee)
			meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
			memek = await HoriBeta.sendImageAsSticker(m.chat, meme, m, {
				packname: global.packname,
				author: global.author
			})
			await fs.unlinkSync(memek)
		}
		break
		case 'ebinary': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
			let {
				dBinary
			} = require('./lib/binary')
			let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
			let db = await dBinary(teks)
			reply(db)
		}
		break
		case 'bts':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			teks = `Here you go!`
			buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
			HoriBeta.sendMessage(from, {
				image: {
					url: buffer
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
			break
		case 'wallneon':
		case 'wallrandom':
		case 'wallcode':
		case 'wallpubg':
		case 'wallml':
			try {
				if (isBan) return reply(mess.ban)
				if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
				nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`)
				nyz3 = await getBuffer(nyz2.list.gambar)
				HoriBeta.sendMessage(from, {
					image: nyz3,
					caption: `By ${global.botname}`
				}, {
					quoted: m
				})
			} catch (e) {
				error("Error!")
			}
			break
		case 'woof':
		case '8ball':
		case 'goose':
		case 'gecg':
		case 'feed':
		case 'avatar':
		case 'lizard':
		case 'meow':
		case 'tickle':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'masturbation':
		case 'jahy':
		case 'hentai':
		case 'glasses':
		case 'gangbang':
		case 'foot':
		case 'femdom':
		case 'cum':
		case 'ero':
		case 'cuckold':
		case 'blowjob':
		case 'bdsm':
		case 'ahegao':
		case 'ass':
		case 'orgy':
		case 'panties':
		case 'pussy':
		case 'thighs':
		case 'yuri':
		case 'tentacles':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!AntiNsfw) return reply(mess.nsfw)
			try {
				reply(mess.wait)
				NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
				YesHorny = await getBuffer(NoHorny.result)
				HoriBeta.sendMessage(from, {
					image: YesHorny
				}, {
					quoted: m
				})
			} catch (e) {
				error("Error")
			}
			break
		case 'spank':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!AntiNsfw) return reply(mess.nsfw)
			reply(mess.wait)
			spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)
			let spbuff = await getBuffer(spankd.data.url)
			let spgif = await GIFBufferToVideoBuffer(spbuff)
			await HoriBeta.sendMessage(m.chat, {
				video: spgif,
				gifPlayback: true
			}, {
				quoted: m
			}).catch(err => {
				return reply('Error!')
			})
			break
		case 'blowjobgif':
		case 'bj':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!AntiNsfw) return reply(mess.nsfw)
			reply(mess.wait)
			bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)
			let bjf = await getBuffer(bjd.data.url)
			let bjif = await GIFBufferToVideoBuffer(bjf)
			await HoriBeta.sendMessage(m.chat, {
				video: bjif,
				gifPlayback: true
			}, {
				quoted: m
			}).catch(err => {
				return reply('error..')
			})
			break
		case 'hentaivid':
		case 'hentaivideo': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!AntiNsfw) return reply(mess.nsfw)
			reply(mess.wait)
			anu = await hentai()
			result912 = anu[Math.floor(Math.random(), anu.length)]
			HoriBeta.sendMessage(m.chat, {
				video: {
					url: result912.video_1
				},
				caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`
			}, {
				quoted: m
			})
		}
		break
		case 'trap':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!AntiNsfw) return reply(mess.nsfw)
			reply(mess.wait)
			waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
			let trapbot = [{
				buttonId: `trap`,
				buttonText: {
					displayText: `Next ⚡`
				},
				type: 1
			}, ]
			let button2Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				buttons: trapbot,
				headerType: 1
			}
			await HoriBeta.sendMessage(m.chat, button2Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'hentai-neko':
		case 'hneko':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!AntiNsfw) return reply(mess.nsfw)
			waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
			let hnekobot = [{
				buttonId: `.hneko`,
				buttonText: {
					displayText: `Next ⚡`
				},
				type: 1
			}, ]
			let button3Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				buttons: hnekobot,
				headerType: 1
			}
			await HoriBeta.sendMessage(m.chat, button3Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'hentai-waifu':
		case 'nwaifu':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			if (!AntiNsfw) return reply(mess.nsfw)
			reply(mess.wait)
			waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)
			let nwaifubot = [{
				buttonId: `.hneko`,
				buttonText: {
					displayText: `Next ⚡`
				},
				type: 1
			}, ]
			let button4Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				buttons: nwaifubot,
				headerType: 1
			}
			await HoriBeta.sendMessage(m.chat, button4Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'gasm':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!AntiNsfw) return reply(mess.nsfw)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonsssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonsssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'smug2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let button1ssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, button1ssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'foxgirl':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let button12ssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, button12ssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animenom':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.isGroup) return replay(mess.group)
			waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
			let xxhnekobot = [{
				buttonId: `.nom`,
				buttonText: {
					displayText: `Next ⚡`
				},
				type: 1
			}, ]
			let xx1button3Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				buttons: xxhnekobot,
				headerType: 1
			}
			await HoriBeta.sendMessage(m.chat, xx1button3Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'waifu3':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let button112ssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, button112ssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'neko2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifud = await axios.get('https://waifu.pics/api/sfw/neko')
			var wbutsss = [{
				buttonId: `.neko`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonssMessage = {
				image: {
					url: waifud.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbutsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonssMessage, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animecuddle':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonsosMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonsosMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animeslap':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let btutttonssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, btutttonssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animepat':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let xxbuttonssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, xxbuttonssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animeneko':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonsTsMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonsTsMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animehug':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonussMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonussMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animekiss':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let bxxuttonssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, bxxuttonssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animewlp':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttoxnssMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttoxnssMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animespank':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonssxMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonssxMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animecry':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
			var wbutt1sss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let button1ssxMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbutt1sss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, button1ssxMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animekill':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
			var wbuttszzss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsxMessages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszzss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsxMessages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animelick':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
			var wbuttszz12ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx12Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz12ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx12Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animebite':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
			var wbuttszz123ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx123Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz123ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx123Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animeyeet':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
			var wbuttszz124ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx124Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz124ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx124Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animebully':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
			var wbuttszz125ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx125Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz125ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx125Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animebonk':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
			var wbuttszz126ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx126Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz126ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx126Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animewink':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
			var wbuttszz127ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx127Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz127ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx127Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animepoke':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
			var wbuttszz128ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx128Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz128ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx128Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animesmile':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
			var wbuttszz129ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx129Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz129ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx129Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animewave':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
			var wbuttszz1210ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1210Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1210ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1210Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animeawoo':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
			var wbuttszz1211ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1211Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1211ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1211Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animeblush':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
			var wbuttszz1212ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1212Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1212ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1212Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animesmug':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
			var wbuttszz1213ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1213Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1213ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1213Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animeglomp':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
			var wbuttszz1214ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1214Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1214ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1214Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animehappy':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
			var wbuttszz1215ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1215Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1215ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1215Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animedance':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
			var wbuttszz1216ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1216Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1216ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1216Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animecringe':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
			var wbuttszz1217ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1217Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1217ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1217Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animehighfive':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
			var wbuttszz1218ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1218Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1218ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1218Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animehandhold':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
			var wbuttszz1219ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1219Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1219ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1219Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animemegumin':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
			var wbuttszz1220ss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonszzsx1220Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttszz1220ss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonszzsx1220Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'shinobu2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
			var wbutsss = [{
				buttonId: `.shinobu`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonsesMessage = {
				image: {
					url: ud.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbutsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonsesMessage, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'megumin2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			ud = await axios.get('https://waifu.pics/api/sfw/megumin')
			var wbutsss = [{
				buttonId: `.megumin`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let buttonzMessage = {
				image: {
					url: ud.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbutsss,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, buttonzMessage, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'awoo2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
			var wbuttsss = [{
				buttonId: `.${command}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let button1Messages = {
				image: {
					url: waifudd.data.url
				},
				caption: `Here you go!`,
				footer: `${global.botname}`,
				buttons: wbuttsss,
				headerType: 2
			}
			await HoriBeta.sendMessage(m.chat, button1Messages, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			break
		case 'animewall2':
		case 'animewallpaper2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			const {
				AnimeWallpaper
			} = require("anime-wallpaper")
			if (!q) return reply('What wallpaper do you want?')
			const wall = new AnimeWallpaper();
			const pages = [1, 2, 3, 4];
			const random = pages[Math.floor(Math.random() * pages.length)]
			const wallpaper = await wall
				.getAnimeWall4({
					title: q,
					type: "sfw",
					page: pages
				})
				.catch(() => null);
			const i = Math.floor(Math.random() * wallpaper.length);
			var walb = [{
				buttonId: `.${command} ${q}`,
				buttonText: {
					displayText: `Next ✨`
				},
				type: 1
			}, ]
			let wal = {
				image: {
					url: wallpaper[i].image
				},
				caption: `*Query :* ${q}`,
				footer: `${global.botname}`,
				buttons: walb,
				headerType: 4
			}
			await HoriBeta.sendMessage(m.chat, wal, {
				quoted: m
			}).catch(err => {
				return ('Error!')
			})
			//HoriBeta.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			axios.get(`https://api.waifu.pics/sfw/${command}`)
				.then(({
					data
				}) => {
					HoriBeta.sendImageAsSticker(m.chat, data.url, m, {
						packname: global.packname,
						author: global.author
					})
				})
			break
		case 'waifu':
		case 'loli':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			axios.get(`https://api.waifu.pics/sfw/waifu`)
				.then(({
					data
				}) => {
					HoriBeta.sendImage(m.chat, data.url, mess.success, m)
				})
			break
		case 'naruto':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			var query = ["naruto hd", "naruto boruto", "naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
			var data = await pinterest(pickRandom(query))
			var but = [{
				buttonId: `naruto`,
				buttonText: {
					displayText: "Next➡️"
				},
				type: 1
			}]
			HoriBeta.sendMessage(from, {
				caption: `Here you go!`,
				image: {
					url: pickRandom(data.result)
				},
				buttons: but,
				footer: `${botname}`
			}, {
				quoted: m
			})
			break
		case 'yaoi':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			var query = ["yaoi", "yaoi aesthetic", "yaoi hd", "yaoi ganteng"]
			var data = await pinterest(pickRandom(query))
			var but = [{
				buttonId: `${command}`,
				buttonText: {
					displayText: "Next➡️"
				},
				type: 1
			}]
			HoriBeta.sendMessage(from, {
				caption: `${mess.caption}`,
				image: {
					url: pickRandom(data.result)
				},
				buttons: but,
				footer: `${botname}`
			}, {
				quoted: m
			})
			break
		case 'coffee':
		case 'kopi': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let buttons = [{
				buttonId: `coffe`,
				buttonText: {
					displayText: 'Next Image'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: 'https://coffee.alexflipnote.dev/random'
				},
				caption: `Here you go!`,
				footer: `${botname}`,
				buttons: buttons,
				headerType: 4
			}
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'zippyshare': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(mess.linkm)
			if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
			anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
			m.reply(`*${util.format(anu)}*`)
			linkyke = await getBuffer(anu.result.dlink)
			HoriBeta.sendMessage(m.chat, {
				document: linkyke,
				mimetype: 'application/zip',
				fileName: `${anu.result.filename}`
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
		}
		break
		case 'savefrom': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} url link`)
			if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
			let noh = require('@bochilteam/scraper')
			noh.savefrom(`${text}`).then(async (data) => {
				let sections = []
				for (let i of data.url) {
					const list = {
						title: `${i.type}`,
						rows: [{
							title: `Quality ${i.subname}`,
							rowId: `${prefix}get ${text}`,
							description: `${data.hosting}`
						}, ]
					}
					sections.push(list)
				}
				const sendm = HoriBeta.sendMessage(
					m.chat, {
						text: `${data.meta.title} *Here is the list of videos, click the button below to choose*`,
						footer: `${botname}`,
						title: "*SAVE FROM*",
						buttonText: "CLICK HERE",
						sections
					}, {
						quoted: m
					})
			}).catch((err) => {
				reply(mess.error)
			})
		}
		break
		case 'jail':
		case 'pixelate':
		case 'blur':
		case 'imagesketch':
		case 'triggeredwebp':
		case 'shit':
		case 'burn':
		case 'invert':
		case 'wanted':
		case 'rip': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader2')
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			let anu = await TelegraPh(media)
			let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
			HoriBeta.sendMessage(m.chat, {
				image: buf,
				caption: `Made by ${botname}`
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
		}
		break
		case 'gayeffect': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader2')
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			let anu = await TelegraPh(media)
			let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
			HoriBeta.sendMessage(m.chat, {
				image: buf,
				caption: `Made by ${botname}`
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
		}
		break
		case 'deleteeffect': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader2')
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			let anu = await TelegraPh(media)
			let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
			HoriBeta.sendMessage(m.chat, {
				image: buf,
				caption: `Made by ${botname}`
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
		}
		break
		case 'framed': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader2')
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			let anu = await TelegraPh(media)
			let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
			HoriBeta.sendMessage(m.chat, {
				image: buf,
				caption: `Made by ${botname}`
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
		}
		break
		case 'beautifuleffect': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader2')
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			let anu = await TelegraPh(media)
			let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
			HoriBeta.sendMessage(m.chat, {
				image: buf,
				caption: `Made by ${botname}`
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
		}
		break
		case 'readmore': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} halo gaes`)
			anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
			reply(`${anu.result}`)
		}
		break
		case 'toviewonce':
		case 'toonce': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!quoted) return reply(`Reply image`)
			if (/image/.test(mime)) {
				anu = await HoriBeta.downloadAndSaveMediaMessage(quoted)
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: anu
					},
					viewOnce: true
				}, {
					quoted: m
				})
			} else if (/video/.test(mime)) {
				anu = await HoriBeta.downloadAndSaveMediaMessage(quoted)
				HoriBeta.sendMessage(m.chat, {
					video: {
						url: anu
					},
					viewOnce: true
				}, {
					quoted: m
				})
			}
		}
		break
		case 'tinyurl': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			try {
				anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
				reply(`${anu.data} here you go!`)
			} catch (e) {
				emror = String(e)
				reply(`${e}`)
			}
		}
		break
		case 'fliptext': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${ownername}`)
			quere = args.join(" ")
			flipe = quere.split('').reverse().join('')
			replay(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
		}
		break
		case 'toletter': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
			try {
				quere = args.join(" ")
				convertes = await toHur(quere)
				replay(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
			} catch {
				replay(`Error!`)
			}
		}
		break
		case 'translate':
		case 'trans': {
			if (isBan) return reply(mess.ban)
			if (!args.join(" ")) return replay("The text?")
			tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
			Infoo = tes.info
			Detek = tes.translate
			replay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
		}
		break
		case 'sound1':
		case 'sound2':
		case 'sound3':
		case 'sound4':
		case 'sound5':
		case 'sound6':
		case 'sound7':
		case 'sound8':
		case 'sound9':
		case 'sound10':
		case 'sound11':
		case 'sound12':
		case 'sound13':
		case 'sound14':
		case 'sound15':
		case 'sound16':
		case 'sound17':
		case 'sound18':
		case 'sound19':
		case 'sound20':
		case 'sound21':
		case 'sound22':
		case 'sound23':
		case 'sound24':
		case 'sound25':
		case 'sound26':
		case 'sound27':
		case 'sound28':
		case 'sound29':
		case 'sound30':
		case 'sound31':
		case 'sound32':
		case 'sound33':
		case 'sound34':
		case 'sound35':
		case 'sound36':
		case 'sound37':
		case 'sound38':
		case 'sound39':
		case 'sound40':
		case 'sound41':
		case 'sound42':
		case 'sound43':
		case 'sound44':
		case 'sound45':
		case 'sound46':
		case 'sound47':
		case 'sound48':
		case 'sound49':
		case 'sound50':
		case 'sound51':
		case 'sound52':
		case 'sound53':
		case 'sound54':
		case 'sound55':
		case 'sound56':
		case 'sound57':
		case 'sound58':
		case 'sound59':
		case 'sound60':
		case 'sound61':
		case 'sound62':
		case 'sound63':
		case 'sound64':
		case 'sound65':
		case 'sound66':
		case 'sound67':
		case 'sound68':
		case 'sound69':
		case 'sound70':
		case 'sound71':
		case 'sound72':
		case 'sound73':
		case 'sound74':
		case 'sound75':
		case 'sound76':
		case 'sound77':
		case 'sound78':
		case 'sound79':
		case 'sound80':
		case 'sound81':
		case 'sound82':
		case 'sound83':
		case 'sound84':
		case 'sound85':
		case 'sound86':
		case 'sound87':
		case 'sound88':
		case 'sound89':
		case 'sound90':
		case 'sound91':
		case 'sound92':
		case 'sound93':
		case 'sound94':
		case 'sound95':
		case 'sound96':
		case 'sound97':
		case 'sound98':
		case 'sound99':
		case 'sound100':
		case 'sound101':
		case 'sound102':
		case 'sound103':
		case 'sound104':
		case 'sound105':
		case 'sound106':
		case 'sound107':
		case 'sound108':
		case 'sound109':
		case 'sound110':
		case 'sound111':
		case 'sound112':
		case 'sound113':
		case 'sound114':
		case 'sound115':
		case 'sound116':
		case 'sound117':
		case 'sound118':
		case 'sound119':
		case 'sound120':
		case 'sound121':
		case 'sound122':
		case 'sound123':
		case 'sound124':
		case 'sound125':
		case 'sound126':
		case 'sound127':
		case 'sound128':
		case 'sound129':
		case 'sound130':
		case 'sound131':
		case 'sound132':
		case 'sound133':
		case 'sound134':
		case 'sound135':
		case 'sound136':
		case 'sound137':
		case 'sound138':
		case 'sound139':
		case 'sound140':
		case 'sound141':
		case 'sound142':
		case 'sound143':
		case 'sound144':
		case 'sound145':
		case 'sound146':
		case 'sound147':
		case 'sound148':
		case 'sound149':
		case 'sound150':
		case 'sound151':
		case 'sound152':
		case 'sound153':
		case 'sound154':
		case 'sound155':
		case 'sound156':
		case 'sound157':
		case 'sound158':
		case 'sound159':
		case 'sound160':
		case 'sound161':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			const pttduration = durationn[Math.floor(Math.random() * durationn.length)]
			buffer = await getBuffer(`https://github.com/Sachu-Settan/Media/raw/master/sounds/${command}.mp3`)
			await HoriBeta.sendMessage(m.chat, {
				audio: buffer,
				mimetype: 'audio/mp4',
				seconds: `${pttduration}`,
				ptt: true,
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: `${global.botname}`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: `${global.websitex}`,
						sourceUrl: `${global.websitex}`
					}
				}
			}, {
				quoted: m
			})
			break
		case 'efx':
		case 'bgm':
		case 'bgmidd': {
			const pttduration = durationn[Math.floor(Math.random() * durationn.length)]
			const randomefx = efx[Math.floor(Math.random() * efx.length)]
			results = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/efx/${encodeURIComponent(randomefx)}.mp3`)
			await HoriBeta.sendMessage(m.chat, {
				audio: results,
				mimetype: 'audio/mpeg',
				seconds: `${pttduration}`,
				ptt: true,
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: `${global.botname}`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: `${global.websitex}`,
						sourceUrl: `${global.websitex}`
					}
				}
			}, {
				quoted: m
			})
		}
		break
		case 'efx1':
		case 'efx10':
		case 'efx100':
		case 'efx101':
		case 'efx102':
		case 'efx103':
		case 'efx104':
		case 'efx105':
		case 'efx106':
		case 'efx107':
		case 'efx108':
		case 'efx109':
		case 'efx11':
		case 'efx110':
		case 'efx111':
		case 'efx112':
		case 'efx113':
		case 'efx114':
		case 'efx115':
		case 'efx116':
		case 'efx117':
		case 'efx118':
		case 'efx119':
		case 'efx12':
		case 'efx120':
		case 'efx121':
		case 'efx122':
		case 'efx123':
		case 'efx124':
		case 'efx125':
		case 'efx126':
		case 'efx127':
		case 'efx128':
		case 'efx129':
		case 'efx13':
		case 'efx130':
		case 'efx131':
		case 'efx132':
		case 'efx133':
		case 'efx134':
		case 'efx135':
		case 'efx136':
		case 'efx137':
		case 'efx138':
		case 'efx139':
		case 'efx14':
		case 'efx140':
		case 'efx141':
		case 'efx142':
		case 'efx143':
		case 'efx144':
		case 'efx145':
		case 'efx146':
		case 'efx147':
		case 'efx148':
		case 'efx149':
		case 'efx15':
		case 'efx150':
		case 'efx151':
		case 'efx152':
		case 'efx153':
		case 'efx154':
		case 'efx155':
		case 'efx156':
		case 'efx157':
		case 'efx158':
		case 'efx159':
		case 'efx16':
		case 'efx160':
		case 'efx161':
		case 'efx162':
		case 'efx163':
		case 'efx164':
		case 'efx165':
		case 'efx166':
		case 'efx167':
		case 'efx168':
		case 'efx169':
		case 'efx17':
		case 'efx170':
		case 'efx171':
		case 'efx172':
		case 'efx173':
		case 'efx174':
		case 'efx175':
		case 'efx176':
		case 'efx177':
		case 'efx178':
		case 'efx179':
		case 'efx18':
		case 'efx180':
		case 'efx181':
		case 'efx182':
		case 'efx183':
		case 'efx184':
		case 'efx185':
		case 'efx186':
		case 'efx187':
		case 'efx188':
		case 'efx189':
		case 'efx19':
		case 'efx190':
		case 'efx191':
		case 'efx192':
		case 'efx193':
		case 'efx194':
		case 'efx195':
		case 'efx196':
		case 'efx197':
		case 'efx198':
		case 'efx199':
		case 'efx2':
		case 'efx20':
		case 'efx200':
		case 'efx201':
		case 'efx202':
		case 'efx203':
		case 'efx204':
		case 'efx205':
		case 'efx206':
		case 'efx207':
		case 'efx208':
		case 'efx209':
		case 'efx21':
		case 'efx210':
		case 'efx211':
		case 'efx212':
		case 'efx213':
		case 'efx214':
		case 'efx215':
		case 'efx216':
		case 'efx217':
		case 'efx218':
		case 'efx219':
		case 'efx22':
		case 'efx220':
		case 'efx221':
		case 'efx222':
		case 'efx223':
		case 'efx224':
		case 'efx225':
		case 'efx226':
		case 'efx227':
		case 'efx228':
		case 'efx229':
		case 'efx23':
		case 'efx230':
		case 'efx231':
		case 'efx232':
		case 'efx233':
		case 'efx234':
		case 'efx235':
		case 'efx236':
		case 'efx237':
		case 'efx238':
		case 'efx239':
		case 'efx24':
		case 'efx240':
		case 'efx241':
		case 'efx242':
		case 'efx243':
		case 'efx244':
		case 'efx245':
		case 'efx246':
		case 'efx247':
		case 'efx248':
		case 'efx249':
		case 'efx25':
		case 'efx250':
		case 'efx251':
		case 'efx252':
		case 'efx253':
		case 'efx254':
		case 'efx255':
		case 'efx256':
		case 'efx257':
		case 'efx258':
		case 'efx259':
		case 'efx26':
		case 'efx260':
		case 'efx261':
		case 'efx262':
		case 'efx263':
		case 'efx264':
		case 'efx265':
		case 'efx266':
		case 'efx267':
		case 'efx268':
		case 'efx269':
		case 'efx27':
		case 'efx270':
		case 'efx271':
		case 'efx272':
		case 'efx273':
		case 'efx274':
		case 'efx275':
		case 'efx276':
		case 'efx277':
		case 'efx278':
		case 'efx279':
		case 'efx28':
		case 'efx280':
		case 'efx281':
		case 'efx282':
		case 'efx283':
		case 'efx284':
		case 'efx285':
		case 'efx286':
		case 'efx287':
		case 'efx288':
		case 'efx289':
		case 'efx29':
		case 'efx290':
		case 'efx291':
		case 'efx292':
		case 'efx293':
		case 'efx294':
		case 'efx295':
		case 'efx296':
		case 'efx297':
		case 'efx298':
		case 'efx299':
		case 'efx3':
		case 'efx30':
		case 'efx300':
		case 'efx301':
		case 'efx302':
		case 'efx303':
		case 'efx304':
		case 'efx305':
		case 'efx306':
		case 'efx307':
		case 'efx308':
		case 'efx309':
		case 'efx31':
		case 'efx310':
		case 'efx311':
		case 'efx312':
		case 'efx313':
		case 'efx314':
		case 'efx315':
		case 'efx316':
		case 'efx317':
		case 'efx318':
		case 'efx319':
		case 'efx32':
		case 'efx320':
		case 'efx321':
		case 'efx322':
		case 'efx323':
		case 'efx324':
		case 'efx325':
		case 'efx326':
		case 'efx327':
		case 'efx328':
		case 'efx329':
		case 'efx33':
		case 'efx330':
		case 'efx331':
		case 'efx332':
		case 'efx333':
		case 'efx334':
		case 'efx335':
		case 'efx336':
		case 'efx337':
		case 'efx338':
		case 'efx339':
		case 'efx34':
		case 'efx340':
		case 'efx341':
		case 'efx342':
		case 'efx343':
		case 'efx344':
		case 'efx345':
		case 'efx346':
		case 'efx347':
		case 'efx348':
		case 'efx349':
		case 'efx35':
		case 'efx350':
		case 'efx351':
		case 'efx352':
		case 'efx353':
		case 'efx354':
		case 'efx355':
		case 'efx356':
		case 'efx357':
		case 'efx358':
		case 'efx359':
		case 'efx36':
		case 'efx360':
		case 'efx361':
		case 'efx362':
		case 'efx363':
		case 'efx364':
		case 'efx365':
		case 'efx366':
		case 'efx367':
		case 'efx368':
		case 'efx369':
		case 'efx37':
		case 'efx370':
		case 'efx371':
		case 'efx372':
		case 'efx373':
		case 'efx374':
		case 'efx375':
		case 'efx376':
		case 'efx377':
		case 'efx378':
		case 'efx379':
		case 'efx38':
		case 'efx380':
		case 'efx381':
		case 'efx382':
		case 'efx383':
		case 'efx384':
		case 'efx385':
		case 'efx386':
		case 'efx387':
		case 'efx388':
		case 'efx389':
		case 'efx39':
		case 'efx390':
		case 'efx391':
		case 'efx392':
		case 'efx393':
		case 'efx394':
		case 'efx395':
		case 'efx396':
		case 'efx397':
		case 'efx398':
		case 'efx399':
		case 'efx4':
		case 'efx40':
		case 'efx400':
		case 'efx401':
		case 'efx402':
		case 'efx403':
		case 'efx404':
		case 'efx405':
		case 'efx406':
		case 'efx407':
		case 'efx408':
		case 'efx409':
		case 'efx41':
		case 'efx410':
		case 'efx411':
		case 'efx412':
		case 'efx413':
		case 'efx414':
		case 'efx415':
		case 'efx416':
		case 'efx417':
		case 'efx418':
		case 'efx419':
		case 'efx42':
		case 'efx420':
		case 'efx421':
		case 'efx422':
		case 'efx423':
		case 'efx424':
		case 'efx425':
		case 'efx426':
		case 'efx427':
		case 'efx428':
		case 'efx429':
		case 'efx43':
		case 'efx430':
		case 'efx431':
		case 'efx432':
		case 'efx433':
		case 'efx434':
		case 'efx435':
		case 'efx436':
		case 'efx437':
		case 'efx438':
		case 'efx439':
		case 'efx44':
		case 'efx440':
		case 'efx441':
		case 'efx442':
		case 'efx443':
		case 'efx444':
		case 'efx445':
		case 'efx446':
		case 'efx447':
		case 'efx448':
		case 'efx449':
		case 'efx45':
		case 'efx450':
		case 'efx451':
		case 'efx452':
		case 'efx453':
		case 'efx454':
		case 'efx455':
		case 'efx456':
		case 'efx457':
		case 'efx458':
		case 'efx459':
		case 'efx46':
		case 'efx460':
		case 'efx461':
		case 'efx462':
		case 'efx463':
		case 'efx464':
		case 'efx465':
		case 'efx466':
		case 'efx467':
		case 'efx468':
		case 'efx469':
		case 'efx47':
		case 'efx470':
		case 'efx471':
		case 'efx472':
		case 'efx473':
		case 'efx474':
		case 'efx475':
		case 'efx476':
		case 'efx477':
		case 'efx478':
		case 'efx479':
		case 'efx48':
		case 'efx480':
		case 'efx481':
		case 'efx482':
		case 'efx483':
		case 'efx484':
		case 'efx485':
		case 'efx486':
		case 'efx487':
		case 'efx488':
		case 'efx489':
		case 'efx49':
		case 'efx490':
		case 'efx491':
		case 'efx492':
		case 'efx493':
		case 'efx494':
		case 'efx495':
		case 'efx496':
		case 'efx497':
		case 'efx498':
		case 'efx499':
		case 'efx5':
		case 'efx50':
		case 'efx500':
		case 'efx501':
		case 'efx502':
		case 'efx503':
		case 'efx504':
		case 'efx505':
		case 'efx506':
		case 'efx507':
		case 'efx508':
		case 'efx509':
		case 'efx51':
		case 'efx510':
		case 'efx511':
		case 'efx512':
		case 'efx513':
		case 'efx514':
		case 'efx515':
		case 'efx516':
		case 'efx517':
		case 'efx518':
		case 'efx519':
		case 'efx52':
		case 'efx520':
		case 'efx521':
		case 'efx522':
		case 'efx523':
		case 'efx524':
		case 'efx525':
		case 'efx526':
		case 'efx527':
		case 'efx528':
		case 'efx529':
		case 'efx53':
		case 'efx530':
		case 'efx531':
		case 'efx532':
		case 'efx533':
		case 'efx534':
		case 'efx535':
		case 'efx536':
		case 'efx537':
		case 'efx538':
		case 'efx539':
		case 'efx54':
		case 'efx540':
		case 'efx541':
		case 'efx542':
		case 'efx543':
		case 'efx544':
		case 'efx545':
		case 'efx546':
		case 'efx547':
		case 'efx548':
		case 'efx549':
		case 'efx55':
		case 'efx550':
		case 'efx551':
		case 'efx552':
		case 'efx553':
		case 'efx554':
		case 'efx555':
		case 'efx556':
		case 'efx557':
		case 'efx558':
		case 'efx559':
		case 'efx56':
		case 'efx560':
		case 'efx561':
		case 'efx562':
		case 'efx563':
		case 'efx564':
		case 'efx565':
		case 'efx566':
		case 'efx567':
		case 'efx568':
		case 'efx569':
		case 'efx57':
		case 'efx570':
		case 'efx571':
		case 'efx572':
		case 'efx573':
		case 'efx574':
		case 'efx575':
		case 'efx576':
		case 'efx577':
		case 'efx578':
		case 'efx579':
		case 'efx58':
		case 'efx580':
		case 'efx581':
		case 'efx582':
		case 'efx583':
		case 'efx584':
		case 'efx585':
		case 'efx586':
		case 'efx587':
		case 'efx588':
		case 'efx589':
		case 'efx59':
		case 'efx590':
		case 'efx591':
		case 'efx592':
		case 'efx593':
		case 'efx594':
		case 'efx595':
		case 'efx596':
		case 'efx597':
		case 'efx598':
		case 'efx599':
		case 'efx6':
		case 'efx60':
		case 'efx600':
		case 'efx601':
		case 'efx602':
		case 'efx603':
		case 'efx604':
		case 'efx605':
		case 'efx606':
		case 'efx607':
		case 'efx608':
		case 'efx609':
		case 'efx61':
		case 'efx610':
		case 'efx611':
		case 'efx612':
		case 'efx613':
		case 'efx614':
		case 'efx615':
		case 'efx616':
		case 'efx617':
		case 'efx618':
		case 'efx619':
		case 'efx62':
		case 'efx620':
		case 'efx621':
		case 'efx622':
		case 'efx623':
		case 'efx624':
		case 'efx625':
		case 'efx626':
		case 'efx627':
		case 'efx63':
		case 'efx64':
		case 'efx65':
		case 'efx66':
		case 'efx67':
		case 'efx68':
		case 'efx69':
		case 'efx7':
		case 'efx70':
		case 'efx71':
		case 'efx72':
		case 'efx73':
		case 'efx74':
		case 'efx75':
		case 'efx76':
		case 'efx77':
		case 'efx78':
		case 'efx79':
		case 'efx8':
		case 'efx80':
		case 'efx81':
		case 'efx82':
		case 'efx83':
		case 'efx84':
		case 'efx85':
		case 'efx86':
		case 'efx87':
		case 'efx88':
		case 'efx89':
		case 'efx9':
		case 'efx90':
		case 'efx91':
		case 'efx92':
		case 'efx93':
		case 'efx94':
		case 'efx95':
		case 'efx96':
		case 'efx97':
		case 'efx98':
		case 'efx99': {
			const pttduration = durationn[Math.floor(Math.random() * durationn.length)]
			let results = await getBuffer(`https://raw.githubusercontent.com/Sachu-Settan/Media/main/efx/${encodeURIComponent(command)}.mp3`)
			await HoriBeta.sendMessage(m.chat, {
				audio: results,
				mimetype: 'audio/mpeg',
				seconds: `${pttduration}`,
				ptt: true,
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: `${global.botname}`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: `${global.websitex}`,
						sourceUrl: `${global.websitex}`
					}
				}
			}, {
				quoted: m
			})
		}
		break
		case 'glitch3':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text|text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case '3dbox':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case 'waterdrop':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case 'lion2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case 'papercut':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case 'transformer':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case 'harrypot':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text|text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case 'neondevil':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case '3dstone':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case '3davengers':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case 'thunder':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break


		case 'window':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break
		case 'blackpinkneon':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'graffiti':
		case 'grafiti':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text|text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break



		case 'pornhub2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break



		case 'blackpink2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'glitch':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break



		case 'glitch2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text|text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break



		case 'glitch3':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text|text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break



		case '3dspace':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text|text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break



		case 'lion':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text|text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break



		case '3dneon':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break



		case 'neon':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break
		case 'greenneon':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break
		case 'bokeh':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break
		case 'holographic':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'bear':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'wolf':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			teks1 = q.split("|")[0]
			teks2 = q.split("|")[1]
			maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
					`${teks1}`, `${teks2}`
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'joker':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'dropwater2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'summertime':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'neonlight2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'thewall':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'natural':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'carbon':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'pencil':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Use ${prefix + command} text`)
			reply(mess.wait)
			maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
					`${q}`,
				])
				.then((data) => HoriBeta.sendMessage(m.chat, {
					image: {
						url: data
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				}))
				.catch((err) => console.log(err));
			break

		case 'candy':
		case 'christmas':
		case '3dchristmas':
		case 'sparklechristmas':
		case 'deepsea':
		case 'scifi':
		case 'rainbow2':
		case 'waterpipe':
		case 'spooky':
		case 'pencil':
		case 'circuit':
		case 'discovery':
		case 'metalic':
		case 'fiction':
		case 'demon':
		case 'transformer':
		case 'berry':
		case 'thunder':
		case '.':
		case '3dstone2':
		case 'neonlight':
		case 'glitch':
		case 'harrypotter':
		case 'brokenglass':
		case 'papercut':
		case 'watercolor':
		case 'multicolor':
		case 'neondevil':
		case 'underwater':
		case 'graffitibike':
		case 'snow':
		case 'cloud':
		case 'honey':
		case 'ice':
		case 'fruitjuice':
		case 'biscuit':
		case 'wood':
		case 'chocolate':
		case 'strawberry':
		case 'matrix':
		case 'blood':
		case 'dropwater':
		case 'toxic':
		case 'lava':
		case 'rock':
		case 'bloodglas':
		case 'halloween':
		case 'darkgold':
		case 'joker':
		case 'wicker':
		case 'firework':
		case 'skeleton':
		case 'blackpink':
		case 'sand':
		case 'glue':
		case '1917':
		case 'leaves':
		case 'demon': {
			if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`)
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			let link
			if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
			if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
			if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
			if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
			if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
			if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
			if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
			if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
			if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
			if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
			if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
			if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
			if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
			if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
			if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
			if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
			if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
			if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
			if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
			if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
			if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
			if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
			if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
			if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
			if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
			if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
			if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
			if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
			if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
			if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
			if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
			if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
			if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
			if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
			if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
			if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
			if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
			if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
			if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
			if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
			if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
			if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
			if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
			if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
			if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
			if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
			if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
			if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
			if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
			if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
			if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
			if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
			if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
			if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
			if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
			if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
			if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
			let anu = await maker.textpro(link, q)
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: anu
				},
				caption: `Made by ${global.botname}`
			}, {
				quoted: m
			})
		}
		break

		case 'textmaker': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
			if (args[0] === 'glitch') {
				if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
				let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
				HoriBeta.sendMessage(from, {
					image: {
						url: teds
					},
					caption: "Done!"
				}, {
					quoted: m
				})
			} else if (args[0] === 'glow') {
				if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
				let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
				HoriBeta.sendMessage(from, {
					image: {
						url: teds
					},
					caption: "Done!"
				}, {
					quoted: m
				})
			} else {
				reply(`*Text Maker List :*\n•> glitch\n•> glow`)
			}
		}
		break
		case 'horror': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'whitebear': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'thunder2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'blackpink': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'neon': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/neon-light-text-effect-online-882.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'matrix2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'sky': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break

		case 'magma': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'sand': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'pencil': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'graffiti': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'metallic': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'steel': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/steel-text-effect-online-921.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'harrypotter': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'underwater': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'luxury': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'glue2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'fabric': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/fabric-text-effect-online-964.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'neonlight': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'lava': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/lava-text-effect-online-914.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'toxic': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/toxic-text-effect-online-901.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'ancient': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'christmas2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'sci_fi': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'rainbow': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'classic': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'watercolor2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'halloween2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'halloweenfire': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/halloween-fire-text-effect-940.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'writing': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'foggy': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'marvel': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'skeleton2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'sketch': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'wonderful': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'cool': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'collwall': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'multicolor2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'batman': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'juice': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let link = `https://textpro.me/fruit-juice-text-effect-861.html`
			let anui = await textpro(link, q)
			reply(`${mess.logodownloading}`)
			console.log(anui)
			HoriBeta.sendMessage(from, {
				image: {
					url: anui
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'pornhub': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Example: ${prefix + command} ajg | ea`)
			reply(mess.wait)
			inilogo4 = args.join(" ")
			inilogo9 = args.join(" ")
			var logo4 = inilogo4.split('|')[0]
			var logo9 = inilogo9.split('|')[1]
			let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`, `${logo9}`])
			console.log(anu)
			HoriBeta.sendMessage(from, {
				image: {
					url: anu
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'retro': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Example: ${prefix + command} ajg | ea`)
			reply(mess.wait)
			inilogo4 = args.join(" ")
			inilogo9 = args.join(" ")
			var logo4 = inilogo4.split('|')[0]
			var logo9 = inilogo9.split('|')[1]
			let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`, `${logo9}`])
			console.log(anu)
			HoriBeta.sendMessage(from, {
				image: {
					url: anu
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'horror': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Example: ${prefix + command} ajg | ea`)
			reply(mess.wait)
			inilogo4 = args.join(" ")
			inilogo9 = args.join(" ")
			var logo4 = inilogo4.split('|')[0]
			var logo9 = inilogo9.split('|')[1]
			let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`, `${logo9}`])
			console.log(anu)
			HoriBeta.sendMessage(from, {
				image: {
					url: anu
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case '8bit': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Example: ${prefix + command} ajg | ea`)
			reply(mess.wait)
			inilogo4 = args.join(" ")
			inilogo9 = args.join(" ")
			var logo4 = inilogo4.split('|')[0]
			var logo9 = inilogo9.split('|')[1]
			let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`, `${logo9}`])
			console.log(anu)
			HoriBeta.sendMessage(from, {
				image: {
					url: anu
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'emoji': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return reply('Where is the emoji?')
			emoji.get(args.join(" ")).then(async (emoji) => {
				let mese = await HoriBeta.sendMessage(m.chat, {
					image: {
						url: emoji.images[4].url
					},
					caption: `Made by ${global.botname}`
				}, {
					quoted: m
				})
				await HoriBeta.sendMessage(from, {
					text: "reply #s to this image to make sticker"
				}, {
					quoted: mese
				})
			})
		}
		break

		case 'igemoji':
		case 'instagramemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "11")
			break
		case 'iphoneemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "0")
			break
		case 'googleemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "1")
			break
		case 'samsungemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "2")
			break
		case 'microsoftemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "3")
			break
		case 'whatsappemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "4")
			break
		case 'twitteremoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "5")
			break
		case 'facebookemoji':
		case 'fbemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "6")
			break
		case 'skypeemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "7")
			break
		case 'joyemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "8")
			break
		case 'mojiemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "9")
		case 'pediaemoji':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
			reply(mess.wait)
			emote(q, "10")
			break

		case 'emojimix': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) reply(`*Example :* ${prefix + command} 🦄+🤣`)
			let [emoji1, emoji2] = q.split`+`
			let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
			for (let res of kuntuh.results) {
				let encmedia = await HoriBeta.sendImageAsSticker(from, res.url, m, {
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.quoted) return reply('Reply Image')
			if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
			reply(mess.wait)
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			let ran = await getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) throw err
				let buffer = fs.readFileSync(ran)
				HoriBeta.sendMessage(m.chat, {
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.quoted) return reply('Reply Image')
			if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
			reply(mess.wait)
			let {
				webp2mp4File
			} = require('./lib/uploader')
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await HoriBeta.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Converted From Webp To Video'
				}
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break
		case 'togif': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!m.quoted) return reply('Reply Image')
			if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
			reply(mess.wait)
			let {
				webp2mp4File
			} = require('./lib/uploader')
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await HoriBeta.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Converted From Webp To Gif'
				},
				gifPlayback: true
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break
		case 'tourl': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader')
			let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
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
			localFile = await HoriBeta.downloadAndSaveMediaMessage(quoted, hmm)
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
				HoriBeta.sendMessage(m.chat, {
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
			let google = require('google-it')
			google({
				'query': args.join(" ")
			}).then(res => {
				let teks = `Google Search From : ${text}\n\n`
				for (let g of res) {
					teks += `${global.themeemoji} *Title* : ${g.title}\n`
					teks += `${global.themeemoji} *Description* : ${g.snippet}\n`
					teks += `${global.themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
				}
				reply(teks)
			})
		}
		break
		case 'gimage':
		case 'googleimage': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args[0]) return reply("What picture are you looking for??")
			let gis = require('g-i-s')
			gis(args.join(" "), async (error, result) => {
				n = result
				images = n[Math.floor(Math.random() * n.length)].url
				let buttons = [{
					buttonId: `gimage ${args.join(" ")}`,
					buttonText: {
						displayText: 'Next Image 👀'
					},
					type: 1
				}]
				let buttonMessage = {
					image: {
						url: images
					},
					caption: `*| GOOGLE IMAGE |*

${global.themeemoji} Query : ${text}
${global.themeemoji} Media Url : ${images}`,
					footer: `${global.botname}`,
					buttons: buttons,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: `${global.ownername}`,
							body: `${global.watermark}`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: `${global.websitex}`,
							sourceUrl: `{global.websitex}`
						}
					}
				}
				HoriBeta.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			})
		}
		break
		case 'igstory':
		case 'instagramstory': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args[0]) return reply(`Example :\n${prefix + command} sachu.modder`)
			try {
				hx.igstory(args[0]).then(async (resed) => {
					ini_anu = []
					anu_list = []
					textbv = `*| INSTAGRAM STORY |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
					urut = 1
					for (let i = 0; i < resed.medias.length; i++) {
						ini_anu.push({
							"type": resed.medias[i].fileType,
							"url": resed.medias[i].url
						})
					}
					ilod = 1
					for (let i of ini_anu) {
						anu_list.push({
							buttonId: `ig ${i.type} ${i.url}`,
							buttonText: {
								displayText: `Media ${ilod++}`
							},
							type: 1
						})
					}
					textbv += `\n\n_Select the media below to download_`
					let buttons = anu_list
					let buttonMessage = {
						image: log0,
						jpegThumbnail: thum,
						caption: textbv,
						footer: `${global.botname}`,
						buttons: buttons,
						headerType: 4
					}
					HoriBeta.sendMessage(from, buttonMessage, {
						quoted: m
					})
				})
			} catch (err) {
				reply(String(err))
			}
		}
		break
		case 'igs2':
		case 'igstory2':
		case 'instagramstory2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory sachu.modder`)
			let urlnya = text
			hx.igstory(urlnya)
				.then(async (result) => {
					var halo = 0
					HoriBeta.sendMessage(m.chat, {
						image: {
							url: result.user.profilePicUrl
						},
						jpegThumbnail: await getBuffer(result.user.profilePicUrl),
						caption: `*----「 INSTAGRAM STORY 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Media :* ${result.medias.length}\n*${themeemoji} Bio :* ${result.user.biography}\n\n*${botname}*`
					}, {
						quoted: m
					})
					for (let i of result.medias) {
						if (i.url.includes('mp4')) {
							let link = await getBuffer(i.url)
							HoriBeta.sendMessage(m.chat, {
								video: link,
								jpegThumbnail: await getBuffer(i.preview),
								caption: `*Story ${i.type}*`
							}, {
								quoted: m
							})
						} else {
							let link = await getBuffer(i.url)
							HoriBeta.sendMessage(m.chat, {
								image: link,
								jpegThumbnail: await getBuffer(i.preview),
								caption: `*Story ${i.type}*`
							}, {
								quoted: m
							})
						}
					}
				}).catch((err) => reply(`Sorry username ${text} was not found or maybe he/she has no story uploaded in her id`))
		}
		break
		case 'ig2':
		case 'igdl2':
		case 'instagram2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(mess.linkm)
			if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.notiglink)
			try {
			let {
				medias
			} = await fetchJson(`https://hardianto.xyz/api/download/instadl?url=${encodeURIComponent(args[0])}&apikey=hardianto`)
			reply (`${mess.wait}`)
			for (let i of medias) {
				if (i.fileType.includes('mp4')) {
					let link = await getBuffer(i.url)
					let thumb = await getBuffer(i.preview)
					HoriBeta.sendMessage(m.chat, {
						video: link,
						jpegThumbnail: thumb,
						caption: `*${mess.igdownloaded}*`
					}, {
						quoted: m
					})
				} else {
					let link = await getBuffer(i.url)
					let thumb = await getBuffer(i.preview)
					HoriBeta.sendMessage(m.chat, {
						image: link,
						jpegThumbnail: thumb,
						caption: `*${mess.igdownloaded}*`
					}, {
						quoted: m
					})
				}
			}
		} catch(err) {
			reply(`${err}`)
		}
		}
		break
		case 'ig':
		case 'igdl':
		case 'instagram': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(mess.linkm)
			if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.notiglink)
			let urlnya = text
			hx.igdl(urlnya)
				.then(async (result) => {
					var halo = 0
					reply(`${mess.wait}`)
					for (let i of result.medias) {
						if (i.url.includes('mp4')) {
							let link = await getBuffer(i.url)
							HoriBeta.sendMessage(m.chat, {
								video: link,
								jpegThumbnail: await getBuffer(i.preview),
								caption: `*${mess.igdownloaded}*`
							}, {
								quoted: m
							})
						} else {
							let link = await getBuffer(i.url)
							HoriBeta.sendMessage(m.chat, {
								image: link,
								jpegThumbnail: await getBuffer(i.preview),
								caption: `*${mess.igdownloaded}*`
							}, {
								quoted: m
							})
						}
					}
				}).catch((err) => reply(mess.error))
		}
		break
		case 'igdl':
		case 'instagramreels':
		case 'igreels': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/`)
			try {
				hx.igdl(args[0]).then(async (resed) => {
					ini_anu = []
					anu_list = []
					textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
					urut = 1
					for (let i = 0; i < resed.medias.length; i++) {
						ini_anu.push({
							"type": resed.medias[i].fileType,
							"url": resed.medias[i].url
						})
					}
					ilod = 1
					for (let i of ini_anu) {
						anu_list.push({
							buttonId: `ig ${i.type} ${i.url}`,
							buttonText: {
								displayText: `Media ${ilod++}`
							},
							type: 1
						})
					}
					textbv += `\n\n_Select the media below to download_`
					let buttons = anu_list
					let buttonMessage = {
						image: log0,
						jpegThumbnail: thum,
						caption: textbv,
						footer: `${global.botname}`,
						buttons: buttons,
						headerType: 4
					}
					HoriBeta.sendMessage(from, buttonMessage, {
						quoted: m
					})
				})
			} catch (err) {
				reply(String(err))
			}
		}
		break

		/* Download Raw Images From Direct Link */

		case 'downimg': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} *Raw Download Link*`)
			try {
				let link = text
				reply(mess.wait)
				HoriBeta.sendMessage(m.chat, {
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

		/* Download Raw Videos From Direct Link */

		case 'downmp4': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} *Raw Download Link*`)
			try {
				let link = text
				reply(mess.wait)
				HoriBeta.sendMessage(m.chat, {
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

		/* Download Raw Audios From Direct Link */

		case 'downmp3': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} *Raw Download Link*`)
			try {
				let link = text
				reply(mess.wait)
				HoriBeta.sendMessage(m.chat, {
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

		case 'playmp4':
		case 'songmp4':
		case 'ytplaymp4': {
			if (!args[0]) return reply(`Example : ${prefix + command} *Query Title*`)
			let {
				title,
				views,
				published,
				thumb,
				channel,
				url
			} = await fetchJson(`https://hardianto.xyz/api/yt/playmp4?query=${encodeURIComponent(args[0])}&apikey=hardianto`)
			let buttons = [{
					buttonId: `downmp4 ${url}`,
					buttonText: {
						displayText: '📽️ Video 📽️'
					},
					type: 1
				}
			]
			let buttonMessage = {
				image: {
					url: thumb
				},
				caption: `
${global.themeemoji} Title : ${title}
${global.themeemoji} Ext : Search
${global.themeemoji} Viewes : ${views}
${global.themeemoji} Uploaded On : ${published}
${global.themeemoji} Channel : ${channel}
${global.themeemoji} Download Url : ${url}`,
				footer: HoriBeta.user.name,
				buttons: buttons,
				headerType: 4
			}
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break

		case 'playmp3':
		case 'songmp3':
		case 'ytplaymp3': {
			if (!args[0]) return reply(`Example : ${prefix + command} *Query Title*`)
			let {
				title,
				views,
				published,
				thumb,
				channel,
				url
			} = await fetchJson(`https://hardianto.xyz/api/yt/playmp3?query=${encodeURIComponent(args[0])}&apikey=hardianto`)
			let buttons = [{
					buttonId: `downmp3 ${url}`,
					buttonText: {
						displayText: '🎶 Audio 🎶'
					},
					type: 1
				}
			]
			let buttonMessage = {
				image: {
					url: thumb
				},
				caption: `
${global.themeemoji} Title : ${title}
${global.themeemoji} Ext : Search
${global.themeemoji} Viewes : ${views}
${global.themeemoji} Uploaded On : ${published}
${global.themeemoji} Channel : ${channel}
${global.themeemoji} Download Url : ${url}`,
				footer: HoriBeta.user.name,
				buttons: buttons,
				headerType: 4
			}
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break

		case 'play':
		case 'song':
		case 'ytplay': {
			if (!text) return reply(`Example : ${prefix + command} *Query Title*`)
			let {
				result
			} = await fetchJson(`https://hardianto.xyz/api/yt/search?query=${encodeURIComponent(text)}&apikey=hardianto`)
			let anu = result[Math.floor(Math.random() * result.length)]
			let buttons = [{
					buttonId: `ytmp3 ${anu.url}`,
					buttonText: {
						displayText: '🎶 Audio 🎶'
					},
					type: 1
				},
				{
					buttonId: `ytmp4 ${anu.url}`,
					buttonText: {
						displayText: '📽️ Video 📽️'
					},
					type: 1
				}
			]
			let buttonMessage = {
				image: {
					url: anu.thumbnail
				},
				caption: `
${global.themeemoji} Title : ${anu.title}
${global.themeemoji} Ext : Search
${global.themeemoji} ID : ${anu.videoId}
${global.themeemoji} Duration : ${anu.timestamp}
${global.themeemoji} Viewes : ${anu.views}
${global.themeemoji} Uploaded On : ${anu.ago}
${global.themeemoji} Author : ${anu.author.name}
${global.themeemoji} Channel : ${anu.author.url}
${global.themeemoji} Description : ${anu.description}
${global.themeemoji} Url : ${anu.url}`,
				footer: HoriBeta.user.name,
				buttons: buttons,
				headerType: 4
			}
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break

		case 'play2':
		case 'song2':
		case 'ytplay2': {
			if (!text) return reply(`Example : ${prefix + command} *Query Title*`)
			let {
				information
			} = await fetchJson(`https://hardianto.xyz/api/download/play?query=${encodeURIComponent(text)}&apikey=hardianto`)
			let anu = information
			let buttons = [{
					buttonId: `ytmp3 ${anu.url}`,
					buttonText: {
						displayText: '🎶 Audio 🎶'
					},
					type: 1
				},
				{
					buttonId: `ytmp4 ${anu.url}`,
					buttonText: {
						displayText: '📽️ Video 📽️'
					},
					type: 1
				}
			]
			let buttonMessage = {
				image: {
					url: anu.thumbnail
				},
				caption: `
${global.themeemoji} Title : ${anu.title}
${global.themeemoji} Ext : Search
${global.themeemoji} ID : ${anu.videoId}
${global.themeemoji} Duration : ${anu.timestamp}
${global.themeemoji} Viewes : ${anu.views}
${global.themeemoji} Uploaded On : ${anu.ago}
${global.themeemoji} Author : ${anu.author.name}
${global.themeemoji} Channel : ${anu.author.url}
${global.themeemoji} Description : ${anu.description}
${global.themeemoji} Url : ${anu.url}`,
				footer: `${pushname}`,
				buttons: buttons,
				headerType: 4
			}
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break

		/* 
		 * Fixed .play And .ytplay By Sachu [ Only For Railway Deploys ] 
		 * Not Deploying On Railway ??
		 * Use The One With YT-SEARCH Plugin 
		 * Dont Forget To Add Plugin In Package.json
		 */
		/*
		case 'play': case 'song': case 'ytplay': {
		if (!text) return reply(`Example : ${prefix + command} Stay`)
		let yts = require("yt-search")
		let search = await yts(text)
		let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		let buttons = [
			{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎶Audio🎶'}, type: 1},
			{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
		]
		let buttonMessage = {
			image: { url: anu.thumbnail },
			caption: `
${global.themeemoji} Title : ${anu.title}
${global.themeemoji} Ext : Search
${global.themeemoji} ID : ${anu.videoId}
${global.themeemoji} Duration : ${anu.timestamp}
${global.themeemoji} Viewes : ${anu.views}
${global.themeemoji} Uploaded On : ${anu.ago}
${global.themeemoji} Author : ${anu.author.name}
${global.themeemoji} Channel : ${anu.author.url}
${global.themeemoji} Description : ${anu.description}
${global.themeemoji} Url : ${anu.url}`,
			footer: HoriBeta.user.name,
			buttons: buttons,
			headerType: 4
		}
		HoriBeta.sendMessage(m.chat, buttonMessage, { quoted: m })
		}
		break
		*/

		case 'jpeg': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args[0]) return reply(`Where's the link?`)
			try {
				HoriBeta.sendMessage(from, {
					image: {
						url: args[0]
					},
					caption: "Success",
					contextInfo: {
						externalAdReply: {
							title: `${global.botname}`,
							body: `${global.ownername}`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: `${global.websitex}`,
							sourceUrl: `${global.websitex}`
						}
					}
				}, {
					quoted: m
				})
			} catch {
				reply("Link error")
			}
		}
		break
		case 'igtv': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Where is the link ?`)
			const {
				instagramdl,
				instagramdlv2,
				instagramdlv3
			} = require('@bochilteam/scraper')
			if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*The link you provided is not valid*')
			instagramdlv3(`${text}`).then(async (data) => {
				var buf = await getBuffer(data[0].thumbnail)
				HoriBeta.sendMessage(m.chat, {
					video: {
						url: data[0].url
					},
					jpegThumbnail: buf,
					caption: `${botname}`
				}, {
					quoted: m
				})
			}).catch((err) => {
				reply(mess.error)
			})
		}
		break
		case 'twitter':
		case 'td':
		case 'twitterdl': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Where is the link?`)
			if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`The link you provided is not valid`)
			xfarr.Twitter(`${text}`).then(async (data) => {
				let txt = `*TWITTER DOWNLOADER*\n\n`
				txt += `*${themeemoji}TITLE :* ${data.title}\n`
				txt += `*${themeemoji}QUALITY :* ${data.medias[1].quality}\n`
				txt += `*${themeemoji}TYPE :* ${data.medias[1].extension}\n`
				txt += `*${themeemoji}SIZE :* ${data.medias[1].formattedSize}\n`
				txt += `*${themeemoji}DURATION :* ${data.medias.length}\n`
				txt += `*${themeemoji}URL :* ${data.url}\n\n`
				txt += `*${botname}*`
				buf = await getBuffer(data.thumbnail)
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: data.thumbnail
					},
					jpegThumbnail: buf,
					caption: `${txt}`
				}, {
					quoted: m
				})
				for (let i of data.medias) {
					HoriBeta.sendMessage(m.chat, {
						video: {
							url: i.url
						},
						jpegThumbnail: buf,
						caption: `*${text}*`
					}, {
						quoted: m
					})
				}
			}).catch((err) => {
				reply(mess.error)
			})
		}
		break
		case 'twittermp3':
		case 'twitteraudio': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Where is the link?`)
			if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*The link you provided is not valid*`)
			xfarr.Twitter(`${text}`).then(async (data) => {
				HoriBeta.sendMessage(m.chat, {
					audio: {
						url: data.medias[1].url
					},
					mimetype: 'audio/mp4'
				}, {
					quoted: m
				})
			}).catch((err) => {
				reply(mess.reply)
			})
		}
		break
		case 'twitter':
		case 'twdl':
		case 'twmp4': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
			try {
				let lotwit = await aiovideodl(args[0])
				teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Choose the video quality below by clicking the button_`
				let buttons = [{
						buttonId: `twddl ${lotwit.medias[0].url}`,
						buttonText: {
							displayText: `Quality ${lotwit.medias[0].quality}`
						},
						type: 1
					},
					{
						buttonId: `twddl ${lotwit.medias[2].url}`,
						buttonText: {
							displayText: `Quality ${lotwit.medias[2].quality}`
						},
						type: 1
					}
				]
				let buttonMessage = {
					video: {
						url: lotwit.medias[1].url
					},
					caption: teks,
					footer: `${pushname}`,
					buttons: buttons,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: `${global.botname}`,
							body: lotwit.title ? lotwit.title : "Twitter Downloader",
							thumbnail: log0,
							mediaType: 1,
							mediaUrl: args[0],
							sourceUrl: args[0]
						}
					}
				}
				HoriBeta.sendMessage(from, buttonMessage, {
					quoted: m
				})
			} catch {
				reply("Error link!")
			}
		}
		break
		case 'twddlxx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let buttons = [{
				buttonId: `menu`,
				buttonText: {
					displayText: 'Menu 🐥'
				},
				type: 1
			}]
			let buttonMessage = {
				video: {
					url: args[0]
				},
				caption: "Done!",
				footer: `${pushname}`,
				buttons: buttons,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: "Twitter Downloader",
						thumbnail: log0,
						mediaType: 1,
						mediaUrl: args[0],
						sourceUrl: args[0]
					}
				}
			}
			HoriBeta.sendMessage(from, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'fbdl':
		case 'fb':
		case 'facebook':
		case 'fbmp4': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Where is the link bro?\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
			if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
			let bocil = require('@bochilteam/scraper')
			bocil.facebookdlv2(`${text}`).then(async (data) => {
				let txt = `*FB DOWNLOADER*\n\n`
				txt += `*${themeemoji}TITLE :* ${data.title}\n`
				txt += `*${themeemoji}QUALITY :* ${data.result[0].quality}\n`
				txt += `*${themeemoji}DESCRIPTION :* ${data.description}\n`
				txt += `*${themeemoji}ID :* ${watermark}\n`
				txt += `*${themeemoji}URL :* ${text}\n\n`
				buf = await getBuffer(data.thumbnail)
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: data.thumbnail
					},
					jpegThumbnail: buf,
					caption: `${txt}`
				}, {
					quoted: m
				})
				for (let i of data.result) {
					HoriBeta.sendMessage(m.chat, {
						video: {
							url: i.url
						},
						jpegThumbnail: buf,
						caption: `*${themeemoji} Quality :* ${i.quality}`
					}, {
						quoted: m
					})
				}
			}).catch((err) => {
				reply(mess.error)
			})
		}
		break
		case 'fbmp3':
		case 'facebookmp3':
		case 'facebookaudio': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Where is the link?\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
			if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
			let noh = require('@bochilteam/scraper')
			noh.savefrom(`${text}`).then(async (anu) => {
				HoriBeta.sendMessage(m.chat, {
					audio: {
						url: anu.url[0].url
					},
					mimetype: 'audio/mp4'
				}, {
					quoted: m
				})
			}).catch((err) => {
				reply(mess.error)
			})
		}
		break
		case 'facebookxx':
		case 'fbdlxxx':
		case 'fbmp4xxx':
		case 'fbxxx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
			try {
				let resd = await aiovideodl(args[0])
				teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_For HD quality you can click the button below_`
				let buttons = [{
					buttonId: `fbddl ${resd.medias[1].url}`,
					buttonText: {
						displayText: 'QualityHD'
					},
					type: 1
				}]
				let buttonMessage = {
					video: {
						url: resd.medias[0].url
					},
					caption: teks,
					footer: `${pushname}`,
					buttons: buttons,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: `${global.botname}`,
							body: "Facebook Downloader",
							thumbnail: log0,
							mediaType: 1,
							mediaUrl: args[0],
							sourceUrl: args[0]
						}
					}
				}
				HoriBeta.sendMessage(from, buttonMessage, {
					quoted: m
				})
			} catch {
				reply("Link invalid!")
			}
		}
		break
		case 'fbddlxx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let buttons = [{
				buttonId: `menu`,
				buttonText: {
					displayText: 'Menu 🐥'
				},
				type: 1
			}]
			let buttonMessage = {
				video: {
					url: args[0]
				},
				caption: "Done!",
				footer: `${pushname}`,
				buttons: buttons,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: " Facebook Downloader",
						thumbnail: log0,
						mediaType: 1,
						mediaUrl: args[0],
						sourceUrl: args[0]
					}
				}
			}
			HoriBeta.sendMessage(from, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'pinterest2': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			let {
				pinterest
			} = require('./lib/scraper')
			anu = await pinterest(text)
			result = anu[Math.floor(Math.random() * anu.length)]
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: result
				},
				caption: '${themeemoji} Media Url : ' + result
			}, {
				quoted: m
			})
		}
		break
		case 'webtonsearch':
		case 'webtoon':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply('What Are you Looking For??')
			await reply(mess.wait)
			xfarr.Webtoons(q).then(async data => {
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
		case 'wattpad': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} love`)
			let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
			let {
				judul,
				dibaca,
				divote,
				bab,
				waktu,
				url,
				thumb,
				description
			} = res.result[0]
			let capt = `Wattpad From query\n\n`
			capt += ` Title: ${judul}\n`
			capt += ` Read: ${dibaca}\n`
			capt += ` Vote: ${divote}\n`
			capt += ` Chapter: ${bab}\n`
			capt += ` Url: ${url}\n`
			capt += ` Description: ${description}`
			HoriBeta.sendImage(m.chat, thumb, capt, m)
		}
		break
		case 'apk':
		case 'apkmod':
		case 'apkdl': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Use${prefix + command} whatsapp`)
			let noh = require('./lib/myfunc2')
			noh.rexdl(`${text}`).then(async (data) => {
				let sections = []
				for (let i of data) {
					const list = {
						title: `${i.judul}`,
						rows: [{
							title: `${i.judul}`,
							rowId: `${prefix}donlod ${i.link}`,
							description: `Category: ${i.kategori}\nPublish: ${i.upload_date}\nInfo: ${i.deskripsi}`
						}, ]
					}
					sections.push(list)
				}
				const sendm = HoriBeta.sendMessage(
					m.chat, {
						text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
						footer: `${botname}`,
						title: "*APK DOWNLOADER,*",
						buttonText: "CLICK HERE",
						sections
					}, {
						quoted: m
					})
			}).catch((err) => {
				reply(`*${text} Not found*`)
			})
		}
		break
		case 'donlod': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Use${prefix + command} whatsapp`)
			if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) reply('*The link you provided is invalid*')
			let rex = require('./lib/ApkDown.js')
			rex.ApkDown(`${text}`).then(async (anu) => {
				if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* ' + util.format(anu))
				for (let i of anu) {
					linkye = `*APK DOWNLOAD*\n\n*Title:* ${i.title}\n*Updated:* ${i.up}\n*Version:* ${i.vers}\n*Size:* ${i.size}\n*Url:* \n*Desc:* ${i.desc}`
					HoriBeta.sendMessage(m.chat, {
						image: await getBuffer(i.thumb),
						jpegThumbnail: await getBuffer(i.thumb),
						caption: `${linkye}`
					}, {
						quoted: m
					})
					HoriBeta.sendMessage(m.chat, {
						document: await getBuffer(i.link),
						mimetype: `application/vnd.android.package-archive`,
						fileName: `${i.title}`
					}, {
						quoted: m
					})
				}
			}).catch((err) => {
				reply(mess.error)
			})
		}
		break
		case 'tagme': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			HoriBeta.sendMessage(m.chat, {
				text: `@${m.sender.split("@")[0]}`,
				contextInfo: {
					mentionedJid: [m.sender]
				}
			}, {
				quoted: m
			})
		}
		break
		case 'git':
		case 'gitclone':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
			if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExample: https://github.com/Sachu-Settan/Hori-Beta-MD`)
			if (!regex1.test(args[0])) return reply(mess.linkm)
			let [, user, repo] = args[0].match(regex1) || []
			repo = repo.replace(/.git$/, '')
			let url = `https://api.github.com/repos/${user}/${repo}/zipball`
			let filename = (await fetch(url, {
				method: 'HEAD'
			})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
			HoriBeta.sendMessage(m.chat, {
				document: {
					url: url
				},
				fileName: filename + '.zip',
				mimetype: 'application/zip'
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
			break

		case 'candy':
		case 'christmas':
		case '3dchristmas':
		case 'sparklechristmas':
		case 'deepsea':
		case 'scifi':
		case 'rainbow':
		case 'waterpipe':
		case 'spooky':
		case 'pencil':
		case 'circuit':
		case 'discovery':
		case 'metalic':
		case 'fiction':
		case 'demon':
		case 'transformer':
		case 'berry':
		case 'thunder':
		case 'magma':
		case '3dstone':
		case 'neonlight':
		case 'glitch':
		case 'harrypotter':
		case 'brokenglass':
		case 'papercut':
		case 'watercolor':
		case 'multicolor':
		case 'neondevil':
		case 'underwater':
		case 'graffitibike':
		case 'snow':
		case 'cloud':
		case 'honey':
		case 'ice':
		case 'fruitjuice':
		case 'biscuit':
		case 'wood':
		case 'chocolate':
		case 'strawberry':
		case 'matrix':
		case 'blood':
		case 'dropwater':
		case 'toxic':
		case 'lava':
		case 'rock':
		case 'bloodglas':
		case 'hallowen':
		case 'darkgold':
		case 'joker':
		case 'wicker':
		case 'firework':
		case 'skeleton':
		case 'blackpink':
		case 'sand':
		case 'glue':
		case '1917':
		case 'leaves': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`)
			let link
			if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
			if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
			if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
			if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
			if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
			if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
			if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
			if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
			if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
			if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
			if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
			if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
			if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
			if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
			if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
			if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
			if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
			if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
			if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
			if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
			if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
			if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
			if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
			if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
			if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
			if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
			if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
			if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
			if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
			if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
			if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
			if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
			if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
			if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
			if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
			if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
			if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
			if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
			if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
			if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
			if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
			if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
			if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
			if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
			if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
			if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
			if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
			if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
			if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
			if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
			if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
			if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
			if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
			if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
			if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
			if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
			if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
			let anu = await maker.textpro(link, q)
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: anu
				},
				caption: `Made by ${global.botname},For my Darling `
			}, {
				quoted: m
			})
		}
		break
		case 'drakorxxx':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply('What Are You Looking For??')
			reply(mess.wait)
			xfarr.Drakor(`${text}`).then(async data => {
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
		case 'drakor': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} love`)
			let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
			let capt = `Drakor Search From : ${text}\n\n`
			for (let i of res.result) {
				capt += `${themeemoji} Title: ${i.judul}\n`
				capt += `${themeemoji} Years: ${i.years}\n`
				capt += `${themeemoji} Genre: ${i.genre}\n`
				capt += `${themeemoji} Url: ${i.url}\n`
				capt += `${themeemoji} Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
			}
			HoriBeta.sendImage(m.chat, res.result[0].thumbnail, capt, m)
		}
		break
		case 'animexxx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`What Anime Are You Looking For??`)
			await reply(mess.wait)
			xfarr.Anime(q).then(async data => {
					let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = [{
						"urlButton": {
							"displayText": "Watch🎥",
							"url": `${websitex}`
						}
					}]
					await HoriBeta.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
		}
		break
		case 'characterxxx':
		case 'karakterxxx':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`What Anime Character Are You Looking For??`)
			await reply(mess.wait)
			xfarr.Character(q).then(async data => {
					let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
					for (let i of data) {
						txt += `*📫 Character :* ${i.character}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = [{
						"urlButton": {
							"displayText": "Bot Web 📍",
							"url": `${websitex}`
						}
					}]
					await HoriBeta.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
		case 'manga2':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`What Manga Are You Looking For??`)
			await reply(mess.wait)
			xfarr.Manga(`${text}`).then(async data => {
					let txt = `*------「 MANGA-SEARCH 」------*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = [{
						"urlButton": {
							"displayText": "Bot Web 📍",
							"url": `${websitex}`
						}
					}]
					await HoriBeta.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
		case 'anime':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`Which anime do you want to search?\nExample ${prefix}manga naruto`)
			reply(mess.wait)
			const {
				Anime
			} = require("@shineiichijo/marika")
			const client = new Anime();
			let anime = await client.searchAnime(q)
			let result = anime.data[0];
			console.log(result)
			let details = `🎀 *Title: ${result.title}*\n`;
			details += `🎋 *Format: ${result.type}*\n`;
			details += `📈 *Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
			details += `🍥 *Total episodes: ${result.episodes}*\n`;
			details += `🎈 *Duration: ${result.duration}*\n`;
			details += `🧧 *Genres:*\n`;
			for (let i = 0; i < result.genres.length; i++) {
				details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
			}
			details += `✨ *Based on: ${result.source.toUpperCase()}*\n`;
			details += `📍 *Studios:*\n`;
			for (let i = 0; i < result.studios.length; i++) {
				details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
			}
			details += `🎴 *Producers:*\n`;
			for (let i = 0; i < result.producers.length; i++) {
				details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
			}
			details += `💫 *Premiered on: ${result.aired.from}*\n`;
			details += `?? *Ended on: ${result.aired.to}*\n`;
			details += `🎐 *Popularity: ${result.popularity}*\n`;
			details += `🎏 *Favorites: ${result.favorites}*\n`;
			details += `🎇 *Rating: ${result.rating}*\n`;
			details += `🏅 *Rank: ${result.rank}*\n\n`;
			if (result.trailer.url !== null)
				details += `♦ *Trailer: ${result.trailer.url}*\n\n`;
			details += `🌐 *URL: ${result.url}*\n\n`;
			if (result.background !== null)
				details += `🎆 *Background:* ${result.background}*\n\n`;
			details += `❄ *Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: result.images.jpg.large_image_url
				},
				caption: details
			}, {
				quoted: m
			})
			break
		case 'manga':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			const {
				Manga
			} = require("@shineiichijo/marika")
			const manga = new Manga();
			if (!q) return reply(`Which manga do you want to search?\nExample ${prefix}manga naruto`)
			let srh = await manga.searchManga(q)
			let mang = `🎀 *Title: ${srh.data[0].title}*\n`;
			mang += `📈 *Status: ${srh.data[0].status}*\n`;
			mang += `🌸 *Total Volumes: ${srh.data[0].volumes}*\n`;
			mang += `🎗 *Total Chapters: ${srh.data[0].chapters}*\n`;
			mang += `🧧 *Genres:*\n`;
			for (let i = 0; i < srh.data[0].genres.length; i++) {
				mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
			}
			mang += `✨ *Published on: ${srh.data[0].published.from}*\n`;
			mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
			mang += `🎐 *Popularity: ${srh.data[0].popularity}*\n`;
			mang += `🎏 *Favorites: ${srh.data[0].favorites}*\n`;
			mang += `✍ *Authors:*\n`;
			for (let i = 0; i < srh.data[0].authors.length; i++) {
				mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
			}
			mang += `\n🌐 *URL: ${srh.data[0].url}*\n\n`;
			if (srh.data[0].background !== null)
				mang += `🎆 *Background:* ${srh.data[0].background}`;
			mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: srh.data[0].images.jpg.large_image_url
				},
				caption: mang
			}, {
				quoted: m
			})
			break
			break
		case 'lyrics': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
			reply(mess.wait)
			const {
				lyrics,
				lyricsv2
			} = require('@bochilteam/scraper')
			const result = await lyricsv2(text).catch(async _ => await lyrics(text))
			reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
		}
		break
		case 'earthquake':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			const tres = await Gempa()
			var {
				Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map
			} = tres.result
			console.log(Map)
			const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
			HoriBeta.sendMessage(from, {
				image: {
					url: Map
				},
				caption: captt
			})
			break
		case 'covidindo':
		case 'covid':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			const c = await covid()
			var {
				kasus, kematian, sembuh
			} = c[0]
			HoriBeta.sendMessage(from, {
				text: `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`
			}, m)
			break
		case 'tvschedule':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply('Send orders *#tvschedule [channel]*')
			reply(await jadwaltv(q))
			break
		case 'playstore':
		case 'apk':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply('what are you looking for?')
			let play = await hx.playstore(q)
			let storee = '❉─────────────────────❉\n'
			for (let i of play) {
				storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
			}
			reply(storee)
			break
		case 'film':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
			xfarr.Film(q)
				.then(data => {
					console.log(data)
					let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
					for (let i of data) {
						krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
					}
					HoriBeta.sendMessage(from, {
						image: {
							url: data[0].thumb
						},
						caption: krl
					}, {
						quoted: fdocs
					})
				});
			break
		case 'img':
		case 'image': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			let {
				pinterest
			} = require('./lib/scraperW')
			anu = await pinterest(text)
			result = anu[Math.floor(Math.random() * anu.length)]
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: result
				},
				caption: ` ${themeemoji} Media Url : ` + result
			}, {
				quoted: m
			})
		}
		break
		case 'mcserver':
		case 'mcquery': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return replay(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.Hori.com|19132`)
			const Query = require("minecraft-query");

			const qury = args.join(" ")
			const iphost = qury.split("|")[0];
			const portnya = qury.split("|")[1];

			if (!iphost) return replay(`Where's your ip?`)
			if (!portnya) return replay(`Where's the port??`)

			const q = new Query({
				host: iphost,
				port: portnya,
				timeout: 7500
			});

			q.fullStat()
				.then(success => {
					replay(jsonformat(success));
					return q.basicStat()
				})
				.then(success => {
					replay(jsonformat(success));
					q.close();
				})
		}
		break
		case 'mcpedl': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return replay(`Example : ${prefix + command} shader`)
			todapi.mcpedl(args.join(" ")).then(async (res) => {
				teks = `*| MCPEDL SEARCH |*`
				for (let i of res) {
					teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
				}
				let buttons = [{
					buttonId: `menu`,
					buttonText: {
						displayText: 'Menu🥀'
					},
					type: 1
				}]
				let buttonMessage = {
					image: log0,
					jpegThumbnail: thum,
					caption: teks,
					footer: `${global.botname}`,
					buttons: buttons,
					headerType: 4
				}
				HoriBeta.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			})
		}
		break
		case 'happymod': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return replay(`Example : ${prefix + command} mobile legend`)
			todapi.happymod(args.join(" ")).then(async (res) => {
				teks = '```「 HappyMod Search 」```'
				for (let i of res) {
					teks += `\n\n${i.name}\n`
					teks += `${i.link}`
				}
				let buttons = [{
					buttonId: `menu`,
					buttonText: {
						displayText: 'Menu🥀'
					},
					type: 1
				}]
				let buttonMessage = {
					image: {
						url: res[0].icon
					},
					jpegThumbnail: thum,
					caption: teks,
					footer: `${global.botname}`,
					buttons: buttons,
					headerType: 4
				}
				HoriBeta.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			})
		}
		break
		case 'searchgc': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (args.length < 1) return replay(`Example :\n${prefix}searchgc Classy Editor`)
			nae = args.join(" ")
			hx.linkwa(nae).then(res => {
				teks = '```「 Search Group 」```'
				for (let i of res) {
					teks += `\n\n•> Group Whatsapp :\n`
					teks += `${i.link}\n`
					teks += `${i.nama}`
				}
				let buttons = [{
					buttonId: `menu`,
					buttonText: {
						displayText: 'Menu🥀'
					},
					type: 1
				}]
				let buttonMessage = {
					image: log0,
					jpegThumbnail: thum,
					caption: teks,
					footer: `${global.botname}`,
					buttons: buttons,
					headerType: 4
				}
				HoriBeta.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			})
		}
		break
		case 'servermc': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			todapi.servermc().then(async (res) => {
				let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
				let no = 1
				for (let i of res) {
					teks += `${themeemoji} Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
				}
				let buttons = [{
					buttonId: `menu`,
					buttonText: {
						displayText: 'Menu🥀'
					},
					type: 1
				}]
				let buttonMessage = {
					image: log0,
					jpegThumbnail: thum,
					caption: teks,
					footer: `${global.botname}`,
					buttons: buttons,
					headerType: 4
				}
				HoriBeta.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			})
		}
		break
		case 'fajar-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			FajarNews().then(async (res) => {
				console.log(res)
				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Type: ${i.berita_jenis}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				replay(teks)
			})
			break
		case "quotes":
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			var res = await Quotes()
			teks = "══════════════════"
			teks += `\nAuthor: ${res.author}\n`
			teks += `\nQuotes:\n`
			teks += `${res.quotes}\n`
			teks += "══════════════════"
			replay(teks)
			break
		case "darkjoke":
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			var res = await Darkjokes()
			teks = "\nDarkjokes*"
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: res
				},
				caption: teks
			}, {
				quoted: m
			})
			break
		case 'cnn-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			CNNNews().then(res => {
				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				replay(teks)
			})
			break
		case 'tvsearch':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply('Where is the title?')
			LayarKaca21(q).then(async (res) => {
				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `Film: ${i.film_title}\n`
					teks += `Link: ${i.film_link}\n`
				}
				teks += `══════════════════`
				replay(teks)
			})
			break
		case 'cnbc-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			CNBCNews().then(async (res) => {
				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break
		case 'tribun-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			TribunNews().then(async (res) => {
				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Type: ${i.berita_jenis}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})
			})
			break
		case 'indozone-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			IndozoneNews().then(async (res) => {
				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Type: ${i.berita_jenis}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})
			})
			break
		case 'kompas-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			KompasNews().then(async (res) => {

				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Type: ${i.berita_jenis}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break
		case 'detik-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			DetikNews().then(async (res) => {

				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break
		case 'daily-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			DailyNews().then(async (res) => {

				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break

		case 'inews-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			iNews().then(async (res) => {

				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Type: ${i.berita_jenis}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				replay(teks)
			})
			break
		case 'okezone-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			OkezoneNews().then(async (res) => {

				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break

		case 'sindo-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			SindoNews().then(async (res) => {

				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Type: ${i.berita_jenis}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				replay(teks)
			})
			break
		case 'tempo-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			TempoNews().then(async (res) => {

				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break
		case 'antara-news':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			AntaraNews().then(async (res) => {

				no = 0
				teks = "══════════════════"
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Type: ${i.berita_jenis}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break

		case "kontan-news":
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			KontanNews().then(async (res) => {

				teks = "══════════════════"
				no = 0
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Type: ${i.berita_jenis}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break
		case "merdeka-news":
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			MerdekaNews().then(async (res) => {

				teks = "══════════════════"
				no = 0
				for (let i of res) {
					no += 1
					teks += `\n• ${no.toString()} •\n`
					teks += `News: ${i.berita}\n`
					teks += `Upload: ${i.berita_diupload}\n`
					teks += `Link: ${i.berita_url}\n`
				}
				teks += "══════════════════"
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: res[0].berita_thumb
					},
					caption: teks
				}, {
					quoted: m
				})

			})
			break

		case "jalantikus-meme":
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			var res = await JalanTikusMeme()
			teks = "══════════════════"
			teks += "\nLaughing out loud?🥴\n"
			teks += `\nSource: ${res}\n`
			teks += "══════════════════"
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: res
				},
				caption: teks
			}, {
				quoted: m
			})
			break
		case 'cinemaschedule': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example: ${prefix + command} jakarta`)
			let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=hdiiofficial`)
			let capt = `Jadwal Bioskop From : ${text}\n\n`
			for (let i of res.result) {
				capt += ` Title: ${i.title}\n`
				capt += ` Thumbnail: ${i.thumb}\n`
				capt += ` Url: ${i.url}\n\n──────────────────────\n`
			}
			HoriBeta.sendImage(m.chat, res.result[0].thumb, capt, m)
		}
		break
		case 'shortstoryx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply(`*List*\n${prefix}shortstory Anak\n${prefix}shortstory Bahasa Daerah\n${prefix}shortstory Bahasa Inggris\n${prefix}shortstory Bahasa Jawa\n${prefix}shortstory Bahasa Sunda\n${prefix}shortstory Budaya\n${prefix}shortstory Cinta\n${prefix}shortstory Cinta Islami\n${prefix}shortstory Cinta Pertama\n${prefix}shortstory Cinta Romantis\n${prefix}shortstory Cinta Sedih\n${prefix}shortstory Cinta Segitiga\n${prefix}shortstory Cinta Sejati\n${prefix}shortstory Galau\n${prefix}shortstory Gokil\n${prefix}shortstory Inspiratif\n${prefix}shortstory Jepang\n${prefix}shortstory Kehidupan\n${prefix}shortstory Keluarga\n${prefix}shortstory Kisah Nyata\n${prefix}shortstory Korea\n${prefix}shortstory Kristen\n${prefix}shortstory Liburan\n${prefix}shortstory Lingkungan\n${prefix}shortstory Lucu\n${prefix}shortstory Malaysia\n${prefix}shortstory Mengharukan\n${prefix}shortstory Misteri\n${prefix}shortstory Motivasi\n${prefix}shortstory Nasihat\n${prefix}shortstory Nasionalisme\n${prefix}shortstory Olahraga\n${prefix}shortstory Patah Hati\n${prefix}shortstory Penantian\n${prefix}shortstory Pendidikan\n${prefix}shortstory Pengalaman Pribadi\n${prefix}shortstory Pengorbanan\n${prefix}shortstory Penyesalan\n${prefix}shortstory Perjuangan\n${prefix}shortstory Perpisahan\n${prefix}shortstory Persahabatan\n${prefix}shortstory Petualangan\n${prefix}shortstory Ramadhan\n${prefix}shortstory Remaja\n${prefix}shortstory Renungan\n${prefix}shortstory Rindu\n${prefix}shortstory Rohani\n${prefix}shortstory Romantis\n${prefix}shortstory Sastra\n${prefix}shortstory Sedih\n${prefix}shortstory Sejarah\n${prefix}shortstory Slice Of Life\n${prefix}shortstory Terjemahan\n${prefix}shortstory Thriller`)
			let cerpe = await cerpen(q)
			reply(`${global.themeemoji} _*Title :*_ ${cerpe.title}\n${global.themeemoji} _*Author :*_ ${cerpe.author}\n${global.themeemoji} _*Category :*_ ${cerpe.kategori}\n${global.themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${global.themeemoji} _*Story :*_\n${cerpe.cerita}`)
		}
		break
		case 'loveshortstoryx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let cerpe = await cerpen(`Cinta segitiga`)
			reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
		}
		break
		case 'islamicshortstoryx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let cerpe = await cerpen(`Cinta segitiga`)
			reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
		}
		break
		case 'disturbingshorystoryx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let cerpe = await cerpen(`galau`)
			reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
		}
		break
		case 'friendshipshortstoryx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let cerpe = await cerpen(`persahabatan`)
			reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
		}
		break
		case 'sacrificeshortstoryx': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let cerpe = await cerpen(`Pengorbanan`)
			reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
		}
		break
		case 'couplepp':
		case 'ppcouple': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			reply(mess.wait)
			let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
			let random = anu[Math.floor(Math.random() * anu.length)]
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: random.male
				},
				caption: `Couple Male🙎🏻‍♂️`
			}, {
				quoted: m
			})
			HoriBeta.sendMessage(m.chat, {
				image: {
					url: random.female
				},
				caption: `Couple Female🙎🏻‍♀️`
			}, {
				quoted: m
			})
		}
		break
		case 'animequotes':
		case 'animequote': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let {
				quotesAnime
			} = require('./lib/scraperW')
			let anu = await quotesAnime()
			result = anu[Math.floor(Math.random() * anu.length)]
			let buttons = [{
				buttonId: `quotesanime`,
				buttonText: {
					displayText: 'Next'
				},
				type: 1
			}]
			let buttonMessage = {
				text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 2
			}
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'wallpaper':
		case 'animewallpaper':
		case 'animewall': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return reply("What picture are you looking for??")
			let {
				wallpaper
			} = require('./lib/scraperW')
			anu = await wallpaper(args)
			result = anu[Math.floor(Math.random() * anu.length)]
			let buttons = [{
				buttonId: `.wallpaper ${args.join(" ")}`,
				buttonText: {
					displayText: 'Next Image'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: result.image[0]
				},
				caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
				footer: `${botname}`,
				buttons: buttons,
				headerType: 4
			}
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break

		case 'wiki':
		case 'wikipedia':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (args.length < 1) return reply('What Are You Looking For?? ')
			const res2 = await HoriBetaWiki(q).catch(e => {
				return reply('_[ ! ] Error Result Not Found_')
			})
			const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
			HoriBeta.sendMessage(from, {
				image: {
					url: res2[0].thumb
				},
				caption: result2
			})
			break
		case 'wikimedia': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
				caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
				footer: HoriBeta.user.name,
				buttons: buttons,
				headerType: 4
			}
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'quotesanime':
		case 'animequotes':
		case 'animequote':
		case 'quoteanime': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			HoriBeta.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'nomerhoki':
		case 'nomorhoki': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!Number(text)) return reply(`Example : ${prefix + command} 919744933034`)
			let anu = await primbon.nomer_hoki(Number(text))
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Phone Number :* ${anu.message.nomer_hp}\n${themeemoji} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${themeemoji} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${themeemoji} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
		}
		break
		case 'artimimpi':
		case 'tafsirmimpi': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} belanja`)
			let anu = await primbon.tafsir_mimpi(text)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Dream :* ${anu.message.mimpi}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Solution :* ${anu.message.solusi}`, m)
		}
		break
		case 'ramalanjodoh':
		case 'ramaljodoh': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalanjodohbali':
		case 'ramaljodohbali': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'suamiistri': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Husband's Name :* ${anu.message.suami.nama}\n${themeemoji} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${themeemoji} *Wife's Name :* ${anu.message.istri.nama}\n${themeemoji} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalancinta':
		case 'ramalcinta': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'artinama': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika Ardianta`)
			let anu = await primbon.arti_nama(text)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'kecocokannama':
		case 'cocoknama': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Life Path :* ${anu.message.life_path}\n${themeemoji} *Destiny :* ${anu.message.destiny}\n${themeemoji} *Destiny Desire :* ${anu.message.destiny_desire}\n${themeemoji} *Personality :* ${anu.message.personality}\n${themeemoji} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
		}
		break
		case 'kecocokanpasangan':
		case 'cocokpasangan':
		case 'pasangan': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika|Novia`)
			let [nama1, nama2] = text.split`|`
			let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendImage(m.chat, anu.message.gambar, `${themeemoji} *Your Name :* ${anu.message.nama_anda}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}`, m)
		}
		break
		case 'jadianpernikahan':
		case 'jadiannikah': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Wedding Date :* ${anu.message.tanggal}\n${themeemoji} *Characteristics :* ${anu.message.karakteristik}`, m)
		}
		break
		case 'sifatusaha': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix+ command} 28, 12, 2021`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Business :* ${anu.message.usaha}`, m)
		}
		break
		case 'rejeki':
		case 'rezeki': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Sustenance :* ${anu.message.rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'pekerjaan':
		case 'kerja': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n?? *Profession :* ${anu.message.pekerjaan}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalannasib':
		case 'ramalnasib':
		case 'nasib': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.ramalan_nasib(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Root Number :* ${anu.message.angka_akar}\n${themeemoji} *Nature :* ${anu.message.sifat}\n${themeemoji} *Element :* ${anu.message.elemen}\n${themeemoji} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
		}
		break
		case 'potensipenyakit':
		case 'penyakit': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'artitarot':
		case 'tarot': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendImage(m.chat, anu.message.image, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'fengshui': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
			let [nama, gender, tahun] = text.split`,`
			let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tahun_lahir}\n${themeemoji} *Gender :* ${anu.message.jenis_kelamin}\n${themeemoji} *Kua Number :* ${anu.message.angka_kua}\n${themeemoji} *Group :* ${anu.message.kelompok}\n${themeemoji} *Character :* ${anu.message.karakter}\n${themeemoji} *Good Sector :* ${anu.message.sektor_baik}\n${themeemoji} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
		}
		break
		case 'haribaik': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.petung_hari_baik(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *When Challenged :* ${anu.message.kala_tinantang}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'harisangar':
		case 'taliwangke': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'harinaas':
		case 'harisial': {
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Fateful Day :* ${anu.message.hari_naas}\n${themeemoji} *Info :* ${anu.message.catatan}\n${themeemoji} *Notes :* ${anu.message.info}`, m)
		}
		break
		case 'nagahari':
		case 'harinaga': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'arahrejeki':
		case 'arahrezeki': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'peruntungan': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
			let [nama, tgl, bln, thn, untuk] = text.split`,`
			let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'weton':
		case 'wetonjawa': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return (`Example : ${prefix + command} 7, 7, 2005`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.weton_jawa(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tanggal}\n${themeemoji} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${themeemoji} *Day Character :* ${anu.message.watak_hari}\n${themeemoji} *Dragon Day :* ${anu.message.naga_hari}\n${themeemoji} *Good Hour :* ${anu.message.jam_baik}\n${themeemoji} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
		}
		break
		case 'sifat':
		case 'karakter': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Lifeline :* ${anu.message.garis_hidup}`, m)
		}
		break
		case 'keberuntungan': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}`, m)
		}
		break
		case 'memancing': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tgl_memancing}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'masasubur': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return (`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`)
			let [tgl, bln, thn, siklus] = text.split`,`
			let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'zodiak':
		case 'zodiac': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix+ command} 7 7 2005`)
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
			HoriBeta.sendText(m.chat, `${themeemoji} *Zodiac :* ${anu.message.zodiak}\n${themeemoji} *Number :* ${anu.message.nomor_keberuntungan}\n${themeemoji} *Aroma :* ${anu.message.aroma_keberuntungan}\n${themeemoji} *Planet :* ${anu.message.planet_yang_mengitari}\n${themeemoji} *Flower :* ${anu.message.bunga_keberuntungan}\n${themeemoji} *Color :* ${anu.message.warna_keberuntungan}\n${themeemoji} *Stone :* ${anu.message.batu_keberuntungan}\n${themeemoji} *Element :* ${anu.message.elemen_keberuntungan}\n${themeemoji} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'shio': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
			let anu = await primbon.shio(text)
			if (anu.status == false) return reply(anu.message)
			HoriBeta.sendText(m.chat, `${themeemoji} *Results :* ${anu.message}`, m)
		}
		break
		case 'tiktok': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply('Where is the link?')
			reply(mess.wait)
			if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
			const musim_rambutan = await HoriBetaTiktok(`${q}`).catch(e => {
				reply(mess.error)
			})
			console.log(musim_rambutan)
			const Horitiktokop = musim_rambutan.result.watermark
			texttk = `Wanna download no watermark or audio?
_Please choose the button below_`
			let buttons = [{
					buttonId: `ttnowm ${q}`,
					buttonText: {
						displayText: 'No Watermark ❌'
					},
					type: 1
				},
				{
					buttonId: `ttaud ${q}`,
					buttonText: {
						displayText: 'Audio 🎶'
					},
					type: 1
				}
			]
			let buttonMessage = {
				video: {
					url: Horitiktokop
				},
				caption: texttk,
				footer: `${botname}`,
				buttons: buttons,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: `${ownername}`,
						body: `${pushname}`,
						thumbnail: log0,
						mediaType: 1,
						mediaUrl: q,
						sourceUrl: q
					}
				}
			}
			HoriBeta.sendMessage(from, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'tiktoknowm':
		case 'ttnowm': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply('Where is the link?')
			reply(mess.wait)
			if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
			const musim_rambutan = await HoriBetaTiktok(`${q}`).catch(e => {
				reply(mess.error)
			})
			console.log(musim_rambutan)
			const Horitiktoknowm = musim_rambutan.result.nowatermark
			HoriBeta.sendMessage(from, {
				video: {
					url: Horitiktoknowm
				},
				caption: `${mess.caption}`
			}, {
				quoted: m
			})
		}
		break
		case 'tiktokaudio':
		case 'tiktokmusic':
		case 'ttaud': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply('Where is the audio?')
			if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
			const musim_rambutan = await HoriBetaTiktok(`${q}`).catch(e => {
				reply(mess.error)
			})
			console.log(musim_rambutan)
			const Horitiktokaudio = musim_rambutan.result.nowatermark
			HoriBeta.sendMessage(from, {
				audio: {
					url: Horitiktokaudio
				},
				mimetype: 'audio/mp4'
			}, {
				quoted: m
			})
		}
		break
		case 'getmusic':
		case 'getvideo':
		case 'yt':
		case 'youtube':
		case 'ytvideo':
		case 'ytmp3':
		case 'ytmp4':
		case 'ytmusic': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args[0]) return reply(mess.linkm)
			try {
				hx.youtube(args[0]).then(async (res) => {
					textyt = `*| YOUTUBE DOWNLOADER |*

${global.themeemoji} Title : ${res.title}
${global.themeemoji} Size : ${res.size}
${global.themeemoji} Quality : ${res.quality}

_Select video or audio and wait a while_`
					let buttons = [{
							buttonId: `ytvd ${res.link}`,
							buttonText: {
								displayText: '► Video'
							},
							type: 1
						},
						{
							buttonId: `ytad ${res.mp3}`,
							buttonText: {
								displayText: '♫ Audio'
							},
							type: 1
						}
					]
					let buttonMessage = {
						image: {
							url: res.thumb
						},
						caption: textyt,
						footer: `${botname}`,
						buttons: buttons,
						headerType: 4,
						contextInfo: {
							externalAdReply: {
								title: res.title,
								body: `${global.ownername}`,
								thumbnail: {
									url: res.thumb
								},
								mediaType: 2,
								mediaUrl: args[0],
								sourceUrl: args[0]
							}
						}
					}
					HoriBeta.sendMessage(from, buttonMessage, {
						quoted: m
					})
				}).catch(_ => _)
			} catch {
				reply("Link error!")
			}
		}
		break
		case 'ytvd': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			HoriBeta.sendMessage(from, {
				video: {
					url: args[0]
				},
				mimetype: "video/mp4",
				caption: "Success",
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: `${global.botname}`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: `${global.websitex}`,
						sourceUrl: `${global.websitex}`
					}
				}
			}, {
				quoted: m
			})
		}
		break
		case 'ytad': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			HoriBeta.sendMessage(from, {
				audio: {
					url: args[0]
				},
				mimetype: "audio/mp4",
				ptt: true,
				contextInfo: {
					externalAdReply: {
						title: `${global.botname}`,
						body: `${global.botname}`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: `${global.websitex}`,
						sourceUrl: `${global.websitex}`
					}
				}
			}, {
				quoted: m
			})
		}
		break
		case 'ytdl': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(mess.linkm)
			if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
			anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)
			if (anu.filesize_video >= 999999) return reply('*File Over Limit* ' + util.format(anu))
			tummb = await getBuffer(anu.thumb)
			audio = await getBuffer(anu.audio)
			HoriBeta.sendMessage(m.chat, {
				document: audio,
				mimetype: 'audio/mpeg',
				fileName: `${anu.title}`
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
			HoriBeta.sendMessage(m.chat, {
				video: {
					url: anu.video
				},
				jpegThumbnail: tummb,
				caption: `${util.format(anu)}`
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
		}
		break
		case 'ytshorts':
		case 'shorts': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`*Use ${prefix + command} put yt shorts link*`)
			if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid`)
			xfarr.Youtube(`${text}`).then(async (data) => {
				if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* ' + util.format(data))
				cap = `
*YOUTUBE SHORTS*

*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}\n*${themeemoji}DURATION* ${data.duration}\n*${themeemoji}ID:* ${data.medias[0].cached}\n*${themeemoji}LINK:* ${data.url}\n\n*${botname}*`
				buf = await getBuffer(data.thumbnail)
				HoriBeta.sendMessage(m.chat, {
					image: {
						url: data.thumbnail
					},
					jpegThumbnail: buf,
					caption: `${cap}`
				}, {
					quoted: m
				})
				HoriBeta.sendMessage(m.chat, {
					video: {
						url: data.medias[0].url
					},
					jpegThumbnail: buf,
					caption: `*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}`
				}, {
					quoted: m
				})
			}).catch((err) => {
				reply(mess.reply)
			})
		}
		break
		case 'pinterest':
		case 'pin': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return reply("What picture are you looking for?")
			try {
				hx.pinterest(args.join(" ")).then(async (res) => {
					imgnyee = res[Math.floor(Math.random() * res.length)]
					let buttons = [{
						buttonId: `pinterest ${args.join(" ")}`,
						buttonText: {
							displayText: 'Next Image 👀'
						},
						type: 1
					}]
					let buttonMessage = {
						image: {
							url: imgnyee
						},
						caption: `${global.dogeemoji} Title : ` + args.join(" ") + `\n${global.dogeemoji} Media Url : ` + imgnyee,
						footer: `${global.botname}`,
						buttons: buttons,
						headerType: 4,
						contextInfo: {
							externalAdReply: {
								title: `${global.botname}`,
								body: `${global.ownername}`,
								thumbnail: log0,
								mediaType: 2,
								mediaUrl: `${global.websitex}`,
								sourceUrl: `${global.websitex}`
							}
						}
					}
					HoriBeta.sendMessage(m.chat, buttonMessage, {
						quoted: m
					})
				}).catch(_ => _)
			} catch {
				reply("Error")
			}
		}
		break
		case 'mediafire': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(mess.linkm)
			if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
			const baby1 = await mediafireDl(text)
			if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* ' + util.format(baby1))
			const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}
`
			reply(`${result4}`)
			HoriBeta.sendMessage(m.chat, {
				document: {
					url: baby1[0].link
				},
				fileName: baby1[0].nama,
				mimetype: baby1[0].mime
			}, {
				quoted: m
			}).catch((err) => reply(mess.error))
		}
		break
		case 'umma':
		case 'ummadl': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
${themeemoji} Title : ${anu.title}
${themeemoji} Author : ${anu.author.name}
${themeemoji} Like : ${anu.like}
${themeemoji} Caption : ${anu.caption}
${themeemoji} Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
					footer: HoriBeta.user.name,
					buttons,
					headerType: 4
				}
				HoriBeta.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			} else if (anu.type == 'image') {
				anu.media.map(async (url) => {
					HoriBeta.sendMessage(m.chat, {
						image: {
							url
						},
						caption: `${themeemoji} Title : ${anu.title}\n${themeemoji} Author : ${anu.author.name}\n${themeemoji} Like : ${anu.like}\n${themeemoji} Caption : ${anu.caption}`
					}, {
						quoted: m
					})
				})
			}
		}
		break
		case 'ringtone': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Where is the ringtone name noob?, Example : ${prefix + command} charlie puth`)
			let {
				ringtone
			} = require('./lib/scraper')
			let anu = await ringtone(text)
			let result = anu[Math.floor(Math.random() * anu.length)]
			HoriBeta.sendMessage(m.chat, {
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
		case 'tempo': {
			if (isBan) return reply(mess.ban)
			if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
			var req = args.join(' ')
			media = await HoriBeta.downloadAndSaveMediaMessage(quoted, "tempo")
			if (isQuotedAudio) {
				const pttduration = durationn[Math.floor(Math.random() * durationn.length)]
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					HoriBeta.sendMessage(from, {
						audio: hah,
						mimetype: 'audio/mp4',
						seconds: `${pttduration}`,
						ptt: true
					}, {
						quoted: m
					})
					fs.unlinkSync(ran)
				})
			} else if (isQuotedVideo) {
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					HoriBeta.sendMessage(from, {
						video: hah,
						mimetype: 'video/mp4'
					}, {
						quoted: m
					})
					fs.unlinkSync(ran)
				})
			} else {
				reply("Send video/audio")
			}
		}
		break
		case 'volume': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
			media = await HoriBeta.downloadAndSaveMediaMessage(quoted, "volume")
			if (isQuotedAudio) {
				const pttduration = durationn[Math.floor(Math.random() * durationn.length)]
				rname = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					jadie = fs.readFileSync(rname)
					HoriBeta.sendMessage(from, {
						audio: jadie,
						mimetype: 'audio/mp4',
						seconds: `${pttduration}`,
						ptt: true
					}, {
						quoted: m
					})
					fs.unlinkSync(rname)
				})
			} else if (isQuotedVideo) {
				rname = getRandom('.mp4')
				exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					jadie = fs.readFileSync(rname)
					HoriBeta.sendMessage(from, {
						video: jadie,
						mimetype: 'video/mp4'
					}, {
						quoted: m
					})
					fs.unlinkSync(rname)
				})
			} else {
				reply("Send video/audio")
			}
		}
		break
		case 'mp3':
		case 'tomp3':
		case 'toaud':
		case 'toaudio':
			try {
				let set
				if(/mp3/.test(command)) set = '-vn -ar 44100 -ac 2 -b:a 192k'
				if (/tomp3/.test(command)) set = '-vn -ar 44100 -ac 2 -b:a 192k'
				if (/toaudio/.test(command)) set = '-vn -ar 44100 -ac 2 -b:a 192k'
				if (/audio/.test(mime)) {
					replay(mess.wait)
					let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(err)
						let buff = fs.readFileSync(ran)
						HoriBeta.sendMessage(m.chat, {
							audio: buff,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						fs.unlinkSync(ran)
					})
				} else if (/video/.test(mime)) {
					replay(mess.wait)
					let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(err)
						let buff = fs.readFileSync(ran)
						HoriBeta.sendMessage(m.chat, {
							audio: buff,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						fs.unlinkSync(ran)
					})
				} else if (/document/.test(mime)) {
					replay(mess.wait)
					let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(err)
						let buff = fs.readFileSync(ran)
						HoriBeta.sendMessage(m.chat, {
							audio: buff,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						fs.unlinkSync(ran)
					})
				} else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
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
				if(/tovn/.test(command)) set = '-vn -c:a libopus -b:a 128k -vbr on -compression_level 10'
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
					let media = await HoriBeta.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(err)
						const pttduration = durationn[Math.floor(Math.random() * durationn.length)]
						let buff = fs.readFileSync(ran)
						HoriBeta.sendMessage(m.chat, {
							audio: buff,
							mimetype: 'audio/mpeg',
							seconds: `${pttduration}`,
							ptt: true,
							contextInfo: {
								externalAdReply: {
									title: `${global.botname}`,
									body: `${global.botname}`,
									thumbnail: log0,
									mediaType: 2,
									mediaUrl: `${global.websitex}`,
									sourceUrl: `${global.websitex}`
								}
							}
						}, {
							quoted: m
						})
						fs.unlinkSync(ran)
					})
				} else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
			} catch (e) {
				reply(e)
			}
			break
		case 'setcmd': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let hash = m.quoted.fileSha256.toString('base64')
			if (!hash) return reply(`No Hashes`)
			if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
			delete global.db.data.sticker[hash]
			reply(`Done!`)
		}
		break
		case 'listcmd': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
			HoriBeta.sendText(m.chat, teks, m, {
				mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
			})
		}
		break
		case 'lockcmd': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
			let msgs = global.db.data.database
			if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
			HoriBeta.copyNForward(m.chat, msgs[text.toLowerCase()], true)
		}
		break
		case 'listmsg': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
			let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => {
				return {
					nama,
					...isi
				}
			})
			let teks = '「 DATABASE LIST 」\n\n'
			for (let i of seplit) {
				teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
			}
			reply(teks)
		}
		break
		case 'delmsg':
		case 'deletemsg': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			let msgs = global.db.data.database
			if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
			delete msgs[text.toLowerCase()]
			reply(`Delete Successfully '${text}' From The Message list`)
		}
		break
		case 'anonymous': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
			this.anonymous = this.anonymous ? this.anonymous : {}
			let buttons = [{
				buttonId: 'Start',
				buttonText: {
					displayText: '🚶Start🚶'
				},
				type: 1
			}]
			HoriBeta.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await HoriBeta.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, HoriBeta.user.name, m)
		}
		break
		case 'keluar':
		case 'leave': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
				await HoriBeta.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
				reply(false)
			}
			reply('Ok')
			let other = room.other(m.sender)
			if (other) await HoriBeta.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
			delete this.anonymous[room.id]
			if (command === 'leave') break
		}
		case 'mulai':
		case 'start': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
				await HoriBeta.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, HoriBeta.user.name, m)
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
				await HoriBeta.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, HoriBeta.user.name, m)
				room.b = m.sender
				room.state = 'CHATTING'
				await HoriBeta.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, HoriBeta.user.name, m)
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
				await HoriBeta.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, HoriBeta.user.name, m)
			}
			break
		}
		case 'next':
		case 'lanjut': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
				await HoriBeta.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
				reply(false)
			}
			let other = romeo.other(m.sender)
			if (other) await HoriBeta.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
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
				await HoriBeta.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, HoriBeta.user.name, m)
				room.b = m.sender
				room.state = 'CHATTING'
				await HoriBeta.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, HoriBeta.user.name, m)
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
				await HoriBeta.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, HoriBeta.user.name, m)
			}
			break
		}
		case 'public': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(`${mess.owner}`)
			HoriBeta.public = true
			reply('Successful Change To Public Usage')
		}
		break
		case 'self': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return replay(`${mess.owner}`)
			HoriBeta.public = false
			reply('Successful Change To Self Usage')
		}
		break
		case 'setstatuts':
		case 'setbio':
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!q) return reply('Send orders *#setbio text*')
			HoriBeta.setStatus(`${q}`)
			reply(mess.success)
			break
		case 'antitag': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return
			if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
			if (args[0] === 'on') {
				if (antitags === true) return
				global.antitags = true
				replay(`Successfully activated antitag!`)
			} else if (args[0] === 'off') {
				if (antitags === false) return
				global.antitags = false
				replay(`Successfully deactivated antitag!`)
			} else {
				replay('Choose on or off')
			}
		}
		break
		case 'ping':
		case 'p':
		case 'botstatus':
		case 'statusbot': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
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
			HoriBeta.sendContact(m.chat, global.vcardowner, m)
		}
		break
		case 'setmenu': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!isCreator) return reply(mess.owner)
			await HoriBeta.sendMessage(from, {
				react: {
					text: `${Reactt}`,
					key: m.key
				}
			})
			let setbot = db.data.settings[botNumber]
			if (args[0] === 'templateImage') {
				setbot.templateImage = true
				setbot.templateVideo = false
				setbot.templateGif = false
				setbot.templateMsg = false
				setbot.templateDocument = false
				setbot.templateLocation = false
				reply(mess.success)
			} else if (args[0] === 'templateVideo') {
				setbot.templateImage = false
				setbot.templateVideo = true
				setbot.templateGif = false
				setbot.templateMsg = false
				setbot.templateLocation = false
				setbot.templateLocation = false
				reply(mess.success)
			} else if (args[0] === 'templateGif') {
				setbot.templateImage = false
				setbot.templateVideo = false
				setbot.templateGif = true
				setbot.templateMsg = false
				setbot.templateDocument = false
				setbot.templateLocation = false
				reply(mess.success)
			} else if (args[0] === 'templateDocument') {
				setbot.templateImage = false
				setbot.templateVideo = false
				setbot.templateGif = false
				setbot.templateMsg = false
				setbot.templateDocument = true
				setbot.templateLocation = false
				reply(mess.success)
			} else if (args[0] === 'templateLocation') {
				setbot.templateImage = false
				setbot.templateVideo = false
				setbot.templateGif = false
				setbot.templateMsg = false
				setbot.templateDocument = false
				setbot.templateLocation = true
				reply(mess.success)
			} else {
				let sections = [{
					title: "😛CHANGE BOT MENU😛",
					rows: [{
							title: "Image Menu",
							rowId: `setmenu templateImage`,
							description: `Tap to change bot menu to Image Menu`
						},
						{
							title: "Gif Menu",
							rowId: `setmenu templateGif`,
							description: `Tap to change bot menu to Gif Menu`
						},
						{
							title: "Video Menu",
							rowId: `setmenu templateVideo`,
							description: `Tap to change bot menu to Video Menu`
						},
						{
							title: "Document Menu",
							rowId: `setmenu templateDocument`,
							description: `Tap to change bot menu to Document Menu`
						},
						{
							title: "Location Menu",
							rowId: `setmenu templateLocation`,
							description: `Tap to change bot menu to Location Menu`
						}
					]
				}, ]
				HoriBeta.sendListMsg(m.chat, `Please select the menu you want to change!`, ` `, HoriBeta.user.name, `Click Here`, sections, m)
			}
		}
		break
		case 'request': {
			if (isBan) return reply(mess.ban)
			if (isBanChat) return reply(mess.banChat)
			if (!args.join(" ")) return replay(`Example : ${prefix + command} hello dev please add a downloader feature`)
			teks = `*| REQUEST |*`
			teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
			teks2 = `\n\nSuccessfully sent to owner`
			for (let i of owner) {
				HoriBeta.sendMessage(i + "@s.whatsapp.net", {
					text: teks + teks1,
					mentions: [m.sender]
				}, {
					quoted: m
				})
			}
			HoriBeta.sendMessage(m.chat, {
				text: teks + teks2 + teks1,
				mentions: [m.sender]
			}, {
				quoted: m
			})
		}
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

			const listTag = [`${global.ownertag}@s.whatsapp.net`]
			const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
			if (listTag.includes(partiNum)) {
				if (antitags === false) return
				if (!m.isGroup) return
				if (m.key.fromMe) return
				sendNye = fs.readFileSync('./Media/sticker/tagme.webp')
				HoriBeta.sendReadReceipt(m.chat, m.sender, [m.key.id])
				HoriBeta.sendMessage(from, {
					sticker: sendNye,
					contextInfo: {
						forwardingScore: 800,
						isForwarded: true
					}
				}, {
					quoted: m
				})
			}
			if (budy.includes(`${global.ownertag}`)) {
				if (antitags === false) return
				if (!m.isGroup) return
				if (m.key.fromMe) return
				sendNye = fs.readFileSync('./Media/sticker/tagme.webp')
				HoriBeta.sendReadReceipt(m.chat, m.sender, [m.key.id])
				HoriBeta.sendMessage(from, {
					sticker: sendNye,
					contextInfo: {
						forwardingScore: 800,
						isForwarded: true
					}
				}, {
					quoted: m
				})
			}
			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = global.db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				HoriBeta.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
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