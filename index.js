const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client({
    intents :[
Discord.Intents.FLAGS.GUILDS,
Discord.Intents.FLAGS.GUILD_MESSAGES,
Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});


const prefix = "!";


Client.login(process.env.TOKEN);


Client.on("ready", () => {
    console.log("SG bot en marche !");
    });
    


    
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
        
        if (message.content === prefix + "listgay"){

            const Embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Liste des commandes')
            .setAuthor({ name: 'bleurpy le gay', iconURL: 'https://i.imgur.com/jePVsxl.png' })
            .setDescription('Toutes les commandes du SG bot')
            .setThumbnail('https://i.imgur.com/Max1NE5.png')
            .addField('!kelann :', '__affiche une image aléatoire de Kelann__', true)
            .addField('!siloa :', '__affiche une image aléatoire de Siloa__', true)
            .addField('!raphael :', '__affiche une image aléatoire de Raphael__', true)
            .addField('!leo :', '__affiche une image aléatoire de Léo__', true)
            .addField('!nicolas :', '__affiche une image aléatoire de Nicolas__', true)
            .setImage('https://i.imgur.com/hDbBJHn.png')
            .setTimestamp()
            .setFooter({ text: 'KS corp commandes', iconURL: 'https://i.imgur.com/hDbBJHn.png' });
        
        message.channel.send({ embeds: [Embed] });
        }
        });

//zizi
    
Client.on("guildMemberAdd", member => {
    console.log("Un membre a rejoint le serveur!");

    Client.channels.cache.get("786234292292419625").send("<@" + member.id + ">, aime les zizi")
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre a quitté le serveur!");
    Client.channels.cache.get("786234292292419625").send("**" + member.displayName + "**" + " n'aime pas les zizi :(")
});





Client.on("messageCreate", message => {

const args = message.content.slice(prefix.length).trim().split(/ +/);
    
    switch(args[0]) {
        case 'kelann':
            kelannmessage(message);

            function kelannmessage(message) {
                var messages = ['https://imgur.com/bcckH6B', 'https://imgur.com/rgdwJxO','https://imgur.com/wkAcR9H','https://imgur.com/sRFelpL','https://imgur.com/jaEVDLb','https://imgur.com/PsIBwW1','https://imgur.com/05H0eGP','https://imgur.com/LuQ67sj','https://imgur.com/XS5Hkn6','https://imgur.com/R71OXKc','https://imgur.com/FtmiiPt','https://imgur.com/9NqpEc3','https://imgur.com/U4Leyku','https://imgur.com/LIwa2kf','https://imgur.com/ZBPf1Hw','https://imgur.com/DicWAH8','https://imgur.com/uEzzVtK','https://imgur.com/qoFAkN9','https://imgur.com/BxSbldN','https://imgur.com/2gI85O7','https://imgur.com/lbdsdpe','https://imgur.com/Se4WVnh','https://i.imgur.com/t2qkaJk.jpg','https://i.imgur.com/Z2QZhyn.jpg','https://i.imgur.com/8Sus8lt.jpg'];
                var kelann = Math.floor(Math.random() * messages.length);

                message.channel.send(messages[kelann]);
            }
        break;
    }

});







Client.on("messageCreate", message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);
        
        switch(args[0]) {
            case 'siloa':
                siloamessage(message);
    
                function siloamessage(message) {
                    var messages = ['https://i.imgur.com/4W859ti.jpg','https://i.imgur.com/NdDhmmz.jpg','https://i.imgur.com/JKM1oyN.jpg','https://i.imgur.com/rXCrLPp.jpg','https://i.imgur.com/7NsOOuJ.jpg','https://i.imgur.com/YvzULh5.jpg','https://i.imgur.com/HU9syXl.jpg','https://i.imgur.com/iMVp31f.jpg','https://i.imgur.com/DSBewJd.jpg','https://i.imgur.com/KKU2XWq.jpg','https://i.imgur.com/2fHeAds.jpg','https://i.imgur.com/bY7BZXH.jpg','https://i.imgur.com/XK8l3c5.jpg','https://i.imgur.com/15LLN3M.jpg','https://i.imgur.com/viO5fQv.jpg','https://i.imgur.com/R3OzhGx.jpg','https://i.imgur.com/El5Bjbm.jpg','https://i.imgur.com/MscCLY6.jpg'];
                    var siloa = Math.floor(Math.random() * messages.length);
    
                    message.channel.send(messages[siloa]);
                }
            break;
        }
    
    });



    Client.on("messageCreate", message => {

        const args = message.content.slice(prefix.length).trim().split(/ +/);
            
            switch(args[0]) {
                case 'raphael':
                    raphaelmessage(message);
        
                    function raphaelmessage(message) {
                        var messages = ['https://i.imgur.com/FZCGtux.jpg','https://i.imgur.com/TcjkCf5.jpg','https://i.imgur.com/UtK78p0.png','https://i.imgur.com/7Lzx3E4.jpg','https://i.imgur.com/ElhaTV2.jpg','https://i.imgur.com/OKiPtLd.jpg','https://i.imgur.com/wEmnugV.jpg','https://i.imgur.com/9YVFe0X.jpg','https://i.imgur.com/N30lttk.jpg','https://i.imgur.com/q433fJw.jpg','https://i.imgur.com/nL6ORAR.jpg','https://i.imgur.com/EVumDZ6.jpg','https://i.imgur.com/giHgVTW.jpg','https://i.imgur.com/tDOIEHu.jpg','https://i.imgur.com/8q0YEDO.png'];
                        var raphael = Math.floor(Math.random() * messages.length);
        
                        message.channel.send(messages[raphael]);
                    }
                break;
            }
        
        });


        Client.on("messageCreate", message => {

            const args = message.content.slice(prefix.length).trim().split(/ +/);
                
                switch(args[0]) {
                    case 'leo':
                        leomessage(message);
            
                        function leomessage(message) {
                            var messages = ['https://i.imgur.com/4fhURd1.jpg','https://i.imgur.com/6iarsYH.jpg','https://i.imgur.com/aSgTxg6.jpg','https://i.imgur.com/QAX3GkF.png','https://i.imgur.com/Zo5nBq8.jpg','https://i.imgur.com/mcqsvdi.jpg','https://i.imgur.com/de8qBhK.jpg','https://i.imgur.com/iSPFOoD.jpg','https://i.imgur.com/fXUCYrD.jpg'];
                            var leo = Math.floor(Math.random() * messages.length);
            
                            message.channel.send(messages[leo]);
                        }
                    break;
                }
            
            });


            Client.on("messageCreate", message => {

                const args = message.content.slice(prefix.length).trim().split(/ +/);
                    
                    switch(args[0]) {
                        case 'nicolas':
                            nicolasmessage(message);
                
                            function nicolasmessage(message) {
                                var messages = ['https://i.imgur.com/oL7Nr30.jpg','https://i.imgur.com/GBosMcK.jpg','https://i.imgur.com/slmuMpp.jpg','https://i.imgur.com/N3o2Z5s.jpg'];
                                var nicolas = Math.floor(Math.random() * messages.length);
                
                                message.channel.send(messages[nicolas]);
                            }
                        break;
                    }
                
                });


//clear
/*
                Client.on("messageCreate", message => {
                    if (message.author.bot) return;
                    
                    if (message.content === prefix + "clear"){
            
                        var number = messages.getInteger 

                    
                    message.channel.send({ embeds: [Embed] });
                    }
                    });*/