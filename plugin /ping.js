module.exports = {
  command: ['ping'],
  async handler(sock, msg, text, from) {
    await sock.sendMessage(from, { text: "Pong!" });
  }
};
