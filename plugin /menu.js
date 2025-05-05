module.exports = {
  command: ['menu', 'help'],
  description: 'Shows bot command list.',
  async handler(sock, msg, text, from) {
    const menu = `
Hi! I'm ${require('../config').botName}

🛠 Main Commands:
- .ping
- .alive
- .ytmp3 <url>
- .tiktok <url>
- .ai <text>

Powered by NETHUM OFC
    `;
    await sock.sendMessage(from, { text: menu });
  },
};
