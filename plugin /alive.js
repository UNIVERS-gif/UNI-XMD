module.exports = {
  command: ['alive'],
  async handler(sock, msg, text, from) {
    await sock.sendMessage(from, {
      text: "✅ Bot is alive and working!",
    });
  }
};
