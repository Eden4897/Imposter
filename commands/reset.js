const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'reset',
	description: 'Clears everything!',
	async execute(msg, args) {
        const channel = msg.member.voice.channel;
        if(channel == null){
            msg.channel.send("Error: user not currently in a voice channel.");
            return;
        }
        //unmute everyone
        for (let member of channel.members) {
            await member[1].voice.setMute(false);
        }
        //clear gamefile
        fs.writeFileSync("./game.json", JSON.stringify({"dead" : []}, null, 4));
        msg.channel.send("Game data cleared.");
	},
}