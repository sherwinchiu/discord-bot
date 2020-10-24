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
    if (message.content.toLowerCase() === "hi"){  
        message.channel.send("george is small");
    } 
    if (message.content.toLowerCase() === "bye"){  
        message.channel.send("george is still small");
    }
    var msg = message.content.split(" ");
    var user = msg[1]; 
    if (msg[0] === "spam"){ 
        for(var i = 0; i < 100; i++){
            setTimeout(function(){
                if (message.content.toLowerCase() === "stop") return;
                message.channel.send("later goon " + user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user
                + user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user
                + user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user
                + user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user+ user + " " + user+ " "+ user);
            }, 2000);
        }
    } 
    
    for(var i = 0; i < 1000; i++){
        for(var j = 0; j < 1000; j++){
            if(message.content.toLowerCase()=== i+" + "+j || message.content.toLowerCase()=== i+"+"+j ){
                message.channel.send(i+j);
            }
        }
    }
});


