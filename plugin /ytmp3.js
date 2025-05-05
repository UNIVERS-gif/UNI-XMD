const { ytDownload } = require('../lib/functions');
module.exports = {
  command: ['ytmp3'],
  async handler(sock, msg, text, from) {
    if (!text) return sock.sendMessage(from, { text: "Please provide a YouTube link!" });

    const res = await ytDownload(text);
    await sock.sendMessage(from, { text: `Downloading: ${res.title}` });
    await sock.sendMessage(from, {
      audio: { url: res.link },
      mimetype: 'audio/mp4',
      ptt: true
    });
  }
};
