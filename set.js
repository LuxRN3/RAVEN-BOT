/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0I4ZlU5U0tBeWFmemY4aVBFakowVUtDTWZtMG9qNUlLR3ZOOTMwb2lsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDFhdmR0YmRwUmZzWExoZGd4MTk4d2Q1MEdHNFJ2b3d6dFNBb0V5VjdSMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TVJHR0RpTUZsdG85NkMrOENHMHVOWW1JZWZoRG9GR1Y3RmVRMldHU1g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVEJRSnFlWmRraW1RS0JYUjdKbWE4cVpWZ3ZlRG1mZGZvdllWcng1WGxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1EaUY1YVhpQ0dMZjZTbDl1UXdDblQvTEUxMmFDK01NS2dSZXJqbHFRbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY4Z1VLYURKcXBTaUNnSG1wVk5IUGNwcjB1ei9xc0pYNUErd1RYSzY2Qzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NpbnlDQnM3RFZ3QlFzTnYvbWNHbzQ2bGhva3NZK3VuTnBrbjQwYmNtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREVXb0ZOQ3VVWTA5UzNRVjd6WjFLSVM1RUlBbldwZlgvUTJXaFgvSkVVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZwazV5eHZ2MThlL3BJNUJtaDZCMC9qMHdGVGljUU5hTVcwakF0enJld3RibCt2TmYxa25yemRZUU1vNWtGN1BXelE5Zk9qWTFKYVM4L1FoTi8raUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJGK2sxb2hEeVZHMmt2YUgwOGFZcG9tRmV6dkEyVXErQVhUS293YmN4YlBNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2OTkwMjU0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMzREQ0U4RjUxNDg5MDhENzdCNEQzQTY4RERBMkU0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxMTQ1NzUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3Njk5MDI1NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTQ4MDM3REQ0MTYzQjgyMDNBMTMzMTYxN0IzRkEzREUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTE0NTc1NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWFBCV0E2WVkiLCJtZSI6eyJpZCI6IjI1NDc2OTkwMjU0MzoyM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc3ODM4MjEyNDE5NzgwOjIzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT255Njc0RUVORzVnY01HR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibnFGWlhjcGRSMVVGaHJJNXFTb2gxbnhFNU4xN0NCa2Zrb3hrUGY4aWYxTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU25TSUIzbkhjWXJKMkhJSVpJVkJoWno3QUt2VTRaeTVCK2lSeStvUmJWMThjbTd6OXZMbmV5Tm1tVjBOT1N2RGNrUzRLMHR1aTBudlMvZlU5SnBzQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlBrbFZiVGxVUGZzS3JIbmFRcGJXTlBCdW5RYWhuMnhOaSt3YmlPemNvQ2x4Q24zejcwSTIxSUZqdUNCbXlHam9iN3hpcTdOdEJzRS9YMEljYXVMaEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY5OTAyNTQzOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo2aFdWM0tYVWRWQllheU9ha3FJZFo4Uk9UZGV3Z1pINUtNWkQzL0luOVQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTE0NTkzNSwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFISU0ifQ==';
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
const dev = process.env.DEV || '254769902543';
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
