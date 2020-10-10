const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'kill',
	description: 'Kills the user!',
	execute(msg, args) {
        let game = JSON.parse(fs.readFileSync("./game.json"));

		if(msg.mentions.members.first()){
            game["dead"].push(msg.mentions.members.first().id);
            msg.mentions.members.first().voice.setMute(true);
            msg.channel.send(`${msg.mentions.members.first().displayName} had died. RIP.`);
        }
        else{
            game["dead"].push(msg.author.id);
            msg.author.voice.setMute(true);
            msg.channel.send(`${msg.author.displayName} had died. RIP.`);
        }

        fs.writeFileSync("./game.json", JSON.stringify(game, null, 4));
	},
}