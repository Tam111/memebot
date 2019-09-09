const botconfig =  require("./botconfig.json");
const Discord = require("discord.js");
var express = require ("express");
var app = express();
var port = process.env.PORT || 3000
const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
console.log('MemeBot is online!');
bot.user.setActivity("Use r!help");
});

bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
	
let prefix = botconfig.prefix;
let messageArray = message.content.split("  ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
	
let flip = ["Heads", "Tails"];	
let replies = ["Hello!", "Hi!", "Hey!"]

let doggoPictures = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5AcefHo-BDNJiijvDZqEKqpNoebFWBkpH9YTkubbXxgqcC-L", "https://pbs.twimg.com/profile_images/828073361397932032/eKTigt-2_400x400.jpg", "https://data.whicdn.com/images/293182173/superthumb.jpg?t=1501286905", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdD-L8LX_brly3nAYnH_ZPw4g7ALxuQcb9injwk2AEHdlXpNxw-g", "https://i.ytimg.com/vi/2Bm4H33xC9s/maxresdefault.jpg", "https://i.ytimg.com/vi/alJHDHo9nMA/hqdefault.jpg", "https://pbs.twimg.com/profile_images/972443397741932544/ZYjQQfmR.jpg","https://i.imgur.com/mUIQRVy.jpg","https://i.redd.it/9y1tprwmbnb01.png","https://i.redd.it/kruwv92y42911.jpg","https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/08/3200x1600/landscape-1519236394-rudy-barclay.jpg?resize=480:*"]

let rwbyPictures = ["https://media.discordapp.net/attachments/438528753581162518/620528214590226432/image1.jpg?width=473&height=473", "https://cdn.discordapp.com/attachments/438528753581162518/620528214590226433/image3.jpg", "https://cdn.discordapp.com/attachments/438528753581162518/620528215269572608/image0.jpg", "https://cdn.discordapp.com/attachments/438528753581162518/620528215269572609/image2.jpg","https://cdn.discordapp.com/attachments/438528753581162518/620531641713950730/image1.jpg","https://cdn.discordapp.com/attachments/438528753581162518/620531641713950732/image0.jpg"]

let doggoPicture = Math.floor((Math.random() * doggoPictures.length));
let rwbyPicture = Math.floor((Math.random() * rwbyPictures.length));
let helloResponse = Math.floor((Math.random() * replies.length));	
let flipACoin = Math.floor((Math.random() * flip.length));	
	
if(cmd === `${prefix}hello`){	
return message.channel.send(replies[helloResponse]);
	
}


	
if(cmd === `${prefix}coin`){	
return message.channel.send(flip[flipACoin]);	

}

if(cmd === `${prefix}rwby`){	
return message.channel.send(rwbyPictures[rwbyPicture]);	

}

if(cmd === `${prefix}doggo`){
return message.channel.send(doggoPictures[doggoPicture]);
	
}

	
if(cmd === `${prefix}help`){	
	
let botembed = new Discord.RichEmbed()
.setDescription("MemeBot help menu page 1")
.setColor("0000FF")

.addField ("r!hello","To say hello")
.addField ("r!rwby", "For a rwby meme")
.addField ("r!coin","Flip a coin")
.addField ("r!doggo", "For cute doggo")

return message.channel.send(botembed);
}
	

	
});

bot.login(botconfig.token);	
app.listen(port);