console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message' , (message) =>{
	var txt = message.content;
	boolean quote = false;
	if(txt == '!shootToAndromeda' || txt == '!shoottoandromeda' || txt.includes("France") || txt.includes("france") || txt.includes("FRANCE"))
		message.channel.sendMessage('I  will  kill  you  France');
	if((txt.includes("ANDROMEDA") || txt.includes("andromeda") || txt.includes("Andromeda")) && !txt.includes("shoot"))
		if(quote)
			message.channel.sendMessage('war				is				coming');	
		else
			message.channel.sendMessage('I   will   find   you   and    I   will   kill    you');	
	if(txt.includes("jaja") || txt.includes("JAJA") || txt.includes("haha") || txt.includes("HAHA"))
		message.channel.sendMessage('lol');
	if(txt.includes("xd") || txt.includes("xD") || txt.includes("XD"))
		message.channel.sendMessage(':v')
	if(txt.includes("hunter") || txt.includes("HUNTER") || txt.includes("Hunter"))
		message.channel.sendMessage('https://i.imgur.com/w1ilPoZ.jpg');
	if(txt.includes("ALV") || txt.includes("alv"))
		message.channel.sendMessage(':O');
	if(txt.includes("joto") || txt.includes("Joto") || txt.includes("JOTO"))
		message.channel.sendMessage('<@490677017012994063>');
	if((txt.includes("<@490677017012994063>") || txt.includes("timez") || txt.includes("Timez") || txt.includes("TIMEZ")) && message.member.id != 489934090125049887 && message.member.id != 172002275412279296)
		message.channel.sendMessage('j o t o');
	
	

	
});
bot.login('NDg5OTM0MDkwMTI1MDQ5ODg3.DnyA-A.KalAjHoVDn6tR6lab5qA22WsTt4');