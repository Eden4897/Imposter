const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'start',
	description: 'Resumes the game, mutes everyone.',
	execute(msg, args) {
		//mute everyone
        const channel = msg.guild.me.voice.channel;
        if(!channel){
            msg.channel.send("Error.");
        }
        for (let member of channel.members) {
            member[1].voice.setMute(true)
        }
        msg.channel.send("Everyone had been muted. Game has started.");
	},
}