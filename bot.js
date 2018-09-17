console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message' , (message) =>{
	var txt = message.content;
	if(txt == '!shootToAndromeda' || txt == '!shoottoandromeda')
		message.channel.sendMessage('I will kill you France');
	if((txt.includes("ANDROMEDA") || txt.includes("andromeda") || txt.includes("Andromeda")) && !txt.includes("shoot"))
		message.channel.sendMessage('war				is				coming');	
	if(txt.includes("jaja") || txt.includes("JAJA") || txt.includes("haha") || txt.includes("HAHA"))
		message.channel.sendMessage('lol');
	if(txt.includes("xd") || txt.includes("xD") || txt.includes("XD"))
		message.channel.sendMessage(':v')
	if(txt.includes("hunter") || txt.includes("HUNTER") || txt.includes("Hunter"))
		message.channel.sendMessage('https://i.imgur.com/w1ilPoZ.jpg');
	if(txt.includes("ALV") || txt.includes("alv"))
		message.channel.sendMessage(':O');
	if(txt.includes("joto"))
		message.channel.sendMessage('<@490677017012994063>');
	if((txt.includes("<@490677017012994063>") || txt.includes("timez") || txt.includes("Timez") || txt.includes("TIMEZ")) && message.member.id != 489934090125049887)
		message.channel.sendMessage('j o t o');
	

	
});
bot.login(process.env.BOT_TOKEN);
