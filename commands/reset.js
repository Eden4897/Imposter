const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'reset',
	description: 'Clears everything!',
	execute(msg, args) {
        //clear gamefile
        fs.writeFileSync("./game.json", JSON.stringify({"dead" : []}, null, 4));
        msg.channel.send("Game data cleared.");
	},
}