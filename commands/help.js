const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'help',
	description: 'Sends the help embed.',
	execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Imposter's Help Menu")
        .addFields(
            {name: "connect", value: "Makes Imposter connects to your current channel."},
            {name: "disconnect", value: "Makes Imposter disconnect from your current channel, unmute everyone and clear game data."},
            {name: "start", value: "Starts the round and mutes everyone"},
            {name: "meet", value: "Unmutes all alive people."},
            {name: "kill [user]", value: "Registers the pinged user as killed."},
            {name: "reset", value: "Reset all values for next game."}
        );
        msg.channel.send(embed);
	},
}
                