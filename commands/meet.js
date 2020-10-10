const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'meet',
	description: 'Starts the meeting!',
	execute(msg, args) {
        const channel = msg.guild.me.voice.channel;
        const game = JSON.parse(fs.readFileSync("./game.json"));
        //unmute alive people
        for (let member of channel.members) {
            if(!game["dead"].includes(member[0])){
                member[1].voice.setMute(false);
            }else{
                member[1].voice.setMute(true);
            }
        }
        msg.channel.send("All alive people had been unmuted. Game has been paused.");
	},
}