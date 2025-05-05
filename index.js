const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const P = require('pino');
const config = require('./config');

const { state, saveState } = useSingleFileAuthState('./session.json');

async function startBot() {
    const sock = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,
        auth: state,
        browser: ['UNI-XMD', 'Safari', '1.0.0']
    });

    sock.ev.on('creds.update', saveState);

    sock.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message) return;

        const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

        // Auto Voice Reply (Optional Sample)
        if (config.AUTO_VOICE_REPLY && text === 'hi') {
            await sock.sendMessage(msg.key.remoteJid, { audio: { url: './voice.mp3' }, mimetype: 'audio/mp4', ptt: true });
        }

        // Sample Command Handler
        if (text === config.PREFIX + 'alive') {
            await sock.sendMessage(msg.key.remoteJid, { text: `✅ *UNI-XMD is Alive!*\nPowered by ${config.FOOTER}` });
        }
    });

    // Auto Status Seen
    if (config.AUTO_STATUS_SEEN) {
        sock.ev.on('presence.update', async (presence) => {
            try {
                const jid = presence.id;
                await sock.readMessages([{ remoteJid: jid, id: 'status@broadcast', fromMe: true }]);
            } catch (e) {
                console.log('Error marking status seen:', e);
            }
        });
    }
}

startBot();
