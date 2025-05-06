let fs = require('fs');
let path = require('path');

let autoVoiceMap = {
  'hi': './voice/hi.mp3',
  'mk': './voice/mk.mp3',
  'bye': './voice/bye.mp3',
  'gm': './voice/gm.mp3',
  'gn': './voice/gn.mp3',
  'bs': './voice/bs.mp3',
  'mm': './voice/mm.mp3',
};

module.exports = {
  name: 'auto-voice',
  type: 'event',
  async execute(m, { conn }) {
    if (!m.text || !global.autoVoiceReply) return;

    let text = m.text.toLowerCase();
    for (let keyword in autoVoiceMap) {
      if (text.includes(keyword)) {
        let filePath = autoVoiceMap[keyword];
        if (fs.existsSync(filePath)) {
          await conn.sendMessage(m.chat, {
            audio: fs.readFileSync(filePath),
            mimetype: 'audio/mp4',
            ptt: true
          }, { quoted: m });
        }
        break;
      }
    }
  }
};
