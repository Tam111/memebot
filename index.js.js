const botconfig =  require("./botconfig.json");
const Discord = require("discord.js");
var express = require ("express");
var app = express();
var port = process.env.PORT || 3000
const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
console.log('MythBot is online!');
bot.user.setActivity("Use m!help");
});

bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
	
let prefix = botconfig.prefix;
let messageArray = message.content.split("  ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
	
let fortunes = ["“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney", "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill", "Solitude has its own very strange beauty to it. Liv Tyler", "Biologically speaking, if something bites you, it is more likely to be female. Desmond Morris","If everyone is thinking alike, then somebody isn’t thinking. George S. Patton"];
	
let replies = ["Hello", "Hi", "Hey"];
	
let trainerTips = ["If you're in an area you know you can't beat, you can always follow Snake's moves and stealth through the area", "Remember to always save before you fight a legendary Pokemon!", "Always carry a few Pokeballs around, you never know if you might find a shiny!","Pokemon will gain less experience when battling an enemy of a lower level", "Carry Heavy Balls to legendary fights, most legendaries are heavy so it's the best chance at catching them without a Master Ball!","Ice is a very frail type, never try to stall with one unless it has absurd defenses or a certain useful ability","Be aware of your Pokemon's strengths and weaknesses to make the best strategy you can", "You moves with a STAB bonus when you can", "Give all your Pokemon items. Even if it's only a berry","Always keep check of your team's type composition, make sure no one type can wipe your whole team out!", "Try not to double up on type coverage in your team"]	
let helloResponse = Math.floor((Math.random() * replies.length));
let yourFortune = Math.floor((Math.random() * fortunes.length));	
let trainerTip = Math.floor((Math.random() * trainerTips.length));	
	
if(cmd === `${prefix}hello`){	
return message.channel.send(replies[helloResponse]);
	
}

if(cmd === `${prefix}lady`){
return message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHSiZdIHrbwqUgQ_DKtUgK-Yzxc7hv9Doknm0UnjI7dAkQInh");
	
}

if(cmd === `${prefix}amma mia`){
return message.channel.send("https://media.discordapp.net/attachments/446173059418685452/460761477142282240/rsz_super-mario-odyssey-shocked-mario.png?width=400&height=230");
	
}	

if(cmd === `${prefix}daily`){
return message.channel.send("You received your 200 dai... wait wrong bot");
	
}
	
if(cmd === `${prefix}axmoefoe`){
return message.channel.send("finally caught up with maxmoefoe. He spent 15 months promising us a main channel video but then just started opening pokemon cards and dating his dog. Great entertainer he is");
	
}

if(cmd === `${prefix}bunny`){
return message.channel.send("https://media.discordapp.net/attachments/446173059418685452/461053193460252672/skibunne2.gif");
	
}	
	
if(cmd === `${prefix}picture`){
return message.channel.send("My profile picture was created by Sheebit!");
	
}
	
if(cmd === `${prefix}complain`){
return message.channel.send("https://media.discordapp.net/attachments/461054056438431744/461103052447940624/spite.png?width=379&height=301");
	
}
	
if(cmd === `${prefix}om`){
return message.channel.send("https://youtu.be/WfYyBp4Ln2s");
	
}
	
if(cmd === `${prefix}ban`){
return message.channel.send("You are now banned");
	
}
	
if(cmd === `${prefix}oof`){
return message.channel.send("https://www.youtube.com/watch?v=dc37mCFyqUg");
	
}
	
if(cmd === `${prefix}bait`){
return message.channel.send("https://media.discordapp.net/attachments/461055594351296512/464749225045917696/800.png?width=300&height=300");
	
}
	
if(cmd === `${prefix}thisissosad`){
return message.channel.send("https://youtu.be/-tsBp26NXz0");
	
}
	
if(cmd === `${prefix}doc`){
return message.channel.send("https://docs.google.com/spreadsheets/d/1-BGQySOKMUKAmTjSTVEUp0LpHElaLYSdSw46ids3O_0/edit");
	
}	
	
if(cmd === `${prefix}unk`){
return message.channel.send("https://media.discordapp.net/attachments/461054056438431744/466880028848685056/triggered.gif?width=226&height=301");
	
}
	
if(cmd === `${prefix}lifeisfun`){
return message.channel.send("https://youtu.be/CAb_bCtKuXg");
	
}	
	
if(cmd === `${prefix}r rogers`){
return message.channel.send("https://cdn.discordapp.com/attachments/461055594351296512/474518642508169226/d71.png");
	
}
	
if(cmd === `${prefix}feed sally`){
return message.channel.send("You feed Sally some food.");
	
}
	
if(cmd === `${prefix}fortune`){
return message.channel.send(fortunes[yourFortune]);
	
}	
	
if(cmd === `${prefix}trainertip`){
return message.channel.send(trainerTips[trainerTip]);
	
}	
	
if(cmd === `${prefix}help`){	
	
let botembed = new Discord.RichEmbed()
.setDescription("MythBot help menu page 1")
.setColor("0000FF")
.addField("m!help","The first page of commands")
.addField("m!help 2","The second page of commands")
.addField ("m!help 3","The third page of commands")
.addField ("m!hello","To say hello")
.addField ("m!lady","Self explanitory")
.addField ("m!daily","To recieve your daily tokens?")
.addField ("m!amma mia","For a spicy meat-a ball")
.addField ("m!axmoefoe","For a spicy meme")
.addField ("m!bunny","For a cool bunny")
.addField ("m!picture","For information on the profile picture")

return message.channel.send(botembed);
}
	
if(cmd === `${prefix}help 2`){	
	
let botembed = new Discord.RichEmbed()
.setDescription("MythBot help menu page 2")
.setColor("0000FF")
.addField("m!help","The first page of commands")
.addField("m!help 2","The second page of commands")
.addField ("m!help 3","The third page of commands")
.addField ("m!complain","For hardcore complainers")
.addField ("m!om","More memes by Dirtface")
.addField ("m!daily","To recieve your daily tokens?")
.addField ("m!ban","To totally legit ban someone")
.addField ("m!oof","Oof")
.addField ("m!bait","To deal with trolls")
.addField ("m!thisissosad","More like this is so sad this bot has come to this")

return message.channel.send(botembed);
}	
	
if(cmd === `${prefix}help 3`){	
	
let botembed = new Discord.RichEmbed()
.setDescription("MythBot help menu page 3")
.setColor("0000FF")
.addField("m!help","The first page of commands")
.addField("m!help 2","The second page of commands")
.addField ("m!help 3","The third page of commands")
.addField ("m!doc","For Pokemon Myths Development List")
.addField ("m!unk","Munk")
.addField ("m!lifeisfun","More expresso, less depresso")
.addField ("m!r rogers","I should make a seperate bot")
.addField ("m!feed sally","Only used on Myths server")
.addField ("m!fortune","For a quote that makes you think")
.addField ("m!trainertip","To get advice in being a good trainer!")

return message.channel.send(botembed);
}	
	
});

bot.login(botconfig.token);	
app.listen(port);