global.owner = ['94740021158']; // Owner number
global.botname = 'UNI-MDX';
global.ownername = 'NETHUM OFC';
global.autoReadGc = true; // Auto read group
global.autoReadAll = true; // Auto read all messages
global.autoTyping = false; // Auto typing indicator
global.autoRecord = false; // Auto voice record indicator
global.autoBio = false; // Auto update bio
global.autoStatusSeen = true; // Auto view WhatsApp statuses
global.autoVoiceReply = true; // Enable auto voice reply (you need to implement it in handler)
global.packname = 'UNI-MDX';
global.author = 'NETHUM OFC';
global.footer = 'POWERED BY NETHUM OFC';
global.sessionName = 'session'; // Name of session file
global.prefix = ['.']; // Command prefix

// Message responses
global.mess = {
  success: '✅ Success!',
  admin: 'This command is only for *admins*!',
  botAdmin: 'Bot must be *admin* first!',
  owner: 'This command is only for *owner*!',
  group: 'This command is only for *groups*!',
  private: 'This command is only for *private chat*!',
  bot: 'This command is only for *bot number*!',
  wait: '⏳ Please wait...',
  error: '❌ An error occurred!',
  endLimit: 'You have reached your daily limit. Try again tomorrow.',
};

module.exports = global;
