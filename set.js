/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5NdE1rYmFETGZsdzRqbXRZU3JpQnowZVJMU0FrNUtVVnBLWE1VemcxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTZjeEVySTAyNnRWN3cyQzV1aFU1VWo4LzVPZXFMSzRuRzRmQktWNHp3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTFE4bkdqMlNoVW4vL0RSZFYvbnhPMDc1TjBoa204R3B4eUxvMlJLb1VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UWxKaGxObWlHejhlN3BaWHVTMHRiRDdqaGQ4NFBpUzhQUldqYTcxOHpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDcDVaTjhBRHlqSEFJZzJXUzZpREVzVXN1WW93RDFIVmtyaGo0MFFyRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJoSmhoRXBtQ1ZCT3V1N0owaGFGMnNaL1FSYWhqVzdETnBPQUFKcU1zUzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hiVHc5UjJ3Zkc1a2p2YXFEdWg1eUlBVmRlcm4xT243eWhVZ0loQ29tMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV29KeEI3Mk81VytnMUpSb0tUbkFLa1hFbkphd1ArN3gzcHh4Z08zUW1Vcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImduU1FhM1lRMFJhdC9Sb2IyaGlZYm5teDYwdUZoSmo5MzZMNFhWMHhINnNHaHJNNUNHVTgwU0l1WmFMMlJQRGdCUFFoMW9MOWtkdmdLQUtSdER6QkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJ4V1pLdzZ5dS9lMnhSQXVQbFg4Y3RCT0ZEa1hIV05Ic2VRanhmL1Z0djhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczODYzMzE2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMjZDRjFFNDQxMzEzNkRGNEYyQjE1NzVBMzFGMkQwMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxMzE4Mjc1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3Mzg2MzMxNjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUY1RjY2QzE3QUQzRjVGQUY2QjREMjBDMzE2Njg4MUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTMxODI3NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQk0yWUtHNDUiLCJtZSI6eyJpZCI6IjI1NDczODYzMzE2MzozOEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3MjgyMTI3MTk2NTg3MDozOEBsaWQiLCJuYW1lIjoi4qCA4oOdIOKggOKDnSDioIDig50g4qCA4oOdUk7ioIDig50g4qCA4oOdIOKggOKDnSDioIDig53jhaQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01ydW80NERFTzc5aThNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVHeWRPWWZQM1Vlc2dxYlllVEhnM09HRkxiaG5jSW5ySnMyRkk4bnVaek09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFQZFhKWEVqU0tZSDZPM0RVYzBLR1NFTSs4SWRsTHl4eTc1Vlo5MzM5ZVkyaU5lQjhpYmJJS1BVWENjSGxaZXUrbXp0Q29HZWtsQWVkdzZBcW5mU0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyTi9laGUxQmFBdC9yWXZWcDcrZllTelFCaHV1alUwczMveU1qRVFQdHJFb1Y1TTliVGtjMVNBdkZndGtLSkZOTEZRRVZkS0xpZkpwVHdPMEI1Ri9BZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDczODYzMzE2MzozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUnNuVG1IejkxSHJJS20ySGt4NE56aGhTMjRaM0NKNnliTmhTUEo3bWN6In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEzMTgyNjcsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3k3In0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254738633163';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
