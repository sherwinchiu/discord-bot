const Discord = require('discord.js')
const client = new Discord.Client()

client.login("NzY5MjE4NDQ2NTM2OTk4OTIy.X5L0gQ.VY2CeHbYeWy3GL7V0H7myMzK4x0");
client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
     // List servers the bot is connected to
     console.log("Servers:");
     client.guilds.forEach((guild) => {
         console.log(" - " + guild.name);
         // List all channels
         console.log("Channels:");
         guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
    
        })
     })
})
client.on('message', message => {
    if (message.author.bot) return;
        for(var i = 0; i < 200; i++){
            for(var j = 0; j < 200; j++){
                if (message.content.toLowerCase() === i +" + " +j || message.content.toLowerCase() ===i+"+"+j){
                    var res = message.content.split(" ");
                    console.log(res, i, j);
                    message.channel.send(i+j);
            }
        }
    }

});


