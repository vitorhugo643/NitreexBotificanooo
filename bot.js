const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('Logado');
});
client.on('message', message => {
    if (message.content === 'Oi') {
    	message.reply('Olá, tudo bem ?');
    }
    if (message.content === 'piga'){
        message.reply('pong');
  	}
    if (message.content.startsWith('/canal')){
        message.channel.send('Aqui está: https://www.youtube.com/channel/UCKKAEwJ6ArmYaV214-qZ5_g/featured');
    } 
    if (message.content.startsWith('/twitter')){
        message.channel.send('Twitter:  https://twitter.com/Reckzinnn1');
    } 
    if (message.content.startsWith('/comandos')){
        message.channel.send('Meus comandos são: /twitter - /canal - /donos - /inscrito')
    }
    if (message.content.startsWith('/donos')){
        message.channel.send('É o Recky e o !👑Slopy👑!');
    }
    if (message.content.startsWith('/inscrito')){
        message.channel.send('Inscritos são aqueles quevão nos videos e deixa seu like, também são aqueles que ativa i sininho pra chegar as notificações, obrigado por está nos acompanhando até hoje, um salve pra você e tchau!!');
    }
});

client.on("ready", async () => {

    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
