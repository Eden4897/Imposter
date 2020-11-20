const Discord = require("discord.js");
const fs = require("fs");
const botConfig = JSON.parse(fs.readFileSync("config.json"));

const bot = new Discord.Client();
const PREFIX = botConfig.prefix;
const TOKEN = botConfig.token;

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
bot.commands = new Discord.Collection();

if (commandFiles.length <= 0) { //exit the bot if no commands found
    console.log("No commands found to load!")
    return;
}

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
    bot.commands.set(command.name.charAt(0), command);
}

bot.on('message', async msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");
    let message = msg.content.substring(0);

    for (var i = 0; i < args.length; i++){
        var a = args[i].split("+");
        if(a.length > 1){
            args[i] = a.join(" ");
        }
    }

    if (message[0]==PREFIX) {
        if (!bot.commands.has(args[0])) return;

        try {
            bot.commands.get(args[0]).execute(msg, args);
        } catch (error) {
            console.error(error);
            message.reply(`There was an error trying to execute the ${args[0]} command!`);
        }

        switch(args[0])
        {
            
        }
    }
});

bot.once("ready", async() => {
    console.log('Ready!');
    bot.user.setActivity("you type !help", { type: "WATCHING" });
    const channel = bot.channels.cache.get("766332531745882142");
    let i = 207;
    setInterval(()=>{
        channel.send(i);
        i++;
    }, 2000);
});

bot.login(TOKEN);