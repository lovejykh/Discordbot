const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzk3NDcyNDc5ODExNjAwNDE0.X_m-Hw.yTl8DfinH3u-fPNTI6q3O4G3Tr8';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === 'Hello') {
        message.reply('Hello, world!')
    }
});

client.login(token);