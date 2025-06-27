/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09Ic201ZVJWSlA1S1Q2S1RYUFFFVzJEajRBL2RhMFJiQzFhT2x0Rysxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFVJelN4MmtwQ3Z2eFAxcHNRaEZrVGJuOExjNU5MT0xMQ2xXYTJGYlVDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ2gzNm9xbXJlK3N5bWRVb0crL1VneTRydVd6VFZDTStyNzJ1S2ZGS0ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0OHNOOGVja20wcHlFb2N4cTNsN25rejNaY29uc2F2OEJaeUY0Znk0K0Q4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNIWDhoVTFYSm90ZEo4TVRxK2EwYzVpM1E2QzFrOXluWUEvc1ZvbnZSa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpMeUV6R24wUTlUV3BIZlNHUlFWVjljUURhWHV6MktHNGZtT0xDczFTRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUV1MlhmZENTT081VFprYXZvOXIySWpVd1F1eUNwWDlTd1RkWUVzK0ZGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXB2WlE3c1o2Tlhmc3J6UkxNUjBsdUNLS3ZYT1JSNXE3L2IyY3BOK2V6az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRkQ2V2MWhWQm1pUVhhU1FVZ1dCSzlvZFEzd0lNM3BIS3pzUTJzMDE0Q2VGS0k1RG1MVFNJbkZBdU05a3QxbERpMVVxUWxhcUxSQmJRbVJDZHFWdmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6InRFdkYybGk4Qk9EbHNrMlBob1l0UzN4TTNvWVV4aSsyeW53NnNIZVk5M0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzM4NjMzMTYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5RUIyRjY4QTI0OTZGQjZBQkZCNzcwQjhBNkQ2ODQ1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEwNjAxNjh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczODYzMzE2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNDhFQkQ4MkExRTg3MkExNjkwNDE1NTBCQjI4OEUxNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxMDYwMTY5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3Mzg2MzMxNjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzQyRURBRjZDMjVFQzczQjZGQ0Q2RDY5QkMwODBBOTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTA2MDE3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNkVBVktZS1QiLCJtZSI6eyJpZCI6IjI1NDczODYzMzE2MzoyOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3MjgyMTI3MTk2NTg3MDoyOUBsaWQiLCJuYW1lIjoiUk4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01udW80NERFTG1kL01JR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVHeWRPWWZQM1Vlc2dxYlllVEhnM09HRkxiaG5jSW5ySnMyRkk4bnVaek09IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9kSlVVYzFEUDZPdnNlcVoxRkxzUFNYdUtMVHNSTnNlYllEcW5jbE45OXY5c3lyR1FRYm5FZE1lWDhmWDltcFo5bGZaQTJqSTRSeldTK0V4MDdTSkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzdGNMYk16b29iWHhIVzU1OWZ3ejlvOVowaWkvZjdMRWVLR3J6Y0NWOXlCVjUyRU1WbUIyZTkrQUsxYjBFWUdsN1BZSnpYVTE2RHc3Y3JEWGQwbzRndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDczODYzMzE2MzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUnNuVG1IejkxSHJJS20ySGt4NE56aGhTMjRaM0NKNnliTmhTUEo3bWN6In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEwNjAxNjYsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3ltIn0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
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
const dev = process.env.DEV || '254114660061';
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
