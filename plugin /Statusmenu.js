const { cmd } = require('../lib/command');
const fs = require('fs');

cmd({
    pattern: 'menu',
    desc: 'Send bot menu',
    type: 'main'
}, async (message) => {
    await message.send({ image: fs.readFileSync('./media/menu.jpg') }, { caption: 'Bot Main Menu' });
});

cmd({
    pattern: 'ping',
    desc: 'Bot ping',
    type: 'info'
}, async (message) => {
    await message.send({ image: fs.readFileSync('./media/ping.jpg') }, { caption: 'PONG!! Bot is alive' });
});

cmd({
    pattern: 'alive',
    desc: 'Alive check',
    type: 'info'
}, async (message) => {
    await message.send({ image: fs.readFileSync('./media/alive.jpg') }, { caption: 'Yes, I am alive' });
});

cmd({
    pattern: 'connected',
    desc: 'Bot connection status',
    type: 'info'
}, async (message) => {
    await message.send({ image: fs.readFileSync('./media/connected.jpg') }, { caption: 'Bot is Connected Successfully' });
});
