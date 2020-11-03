const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'kill',
	description: 'Kills the user!',
	execute(msg, args) {
        let game = JSON.parse(fs.readFileSync("./game.json"));

		if(msg.mentions.members.first()){
            game["dead"].push(msg.mentions.members.first().id);
            msg.mentions.members.first().voice.setMute(true).catch(err=>{console.log(err);});
            msg.channel.send(`${msg.mentions.members.first().displayName} had died. RIP.`);
        }
        else{
            msg.channel.send("Error: no target to kill.");
        }

        fs.writeFileSync("./game.json", JSON.stringify(game, null, 4));
	},
}