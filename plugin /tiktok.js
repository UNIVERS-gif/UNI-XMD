const { getBuffer } = require('../lib/functions');
module.exports = {
  command: ['tiktok'],
  async handler(sock, msg, text, from) {
    if (!text) return sock.sendMessage(from, { text: "Please provide TikTok video URL!" });

    // Dummy video download
    const videoBuffer = await getBuffer("https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4");

    await sock.sendMessage(from, {
      video: videoBuffer,
      caption: "TikTok Video"
    });
  }
};
