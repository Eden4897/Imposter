const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'connect',
	description: 'Joins the voice channel!',
	execute(msg, args) {
        if (msg.member.voice.channel) {
            if(!msg.member.voice.channel){
                msg.channel.send("Error: user not in voice channel.");
                return;
            }
            msg.member.voice.channel.join();
            msg.channel.send(`Imposter has joined **${msg.member.voice.channel.name}**!`);
        }
	},
}