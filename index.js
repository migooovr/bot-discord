const Discord = require('discord.js')
const bot = new Discord.Client() 

// Bonjour, je vous conseille de supprimé ce code de votre ordinateur ou nous verrons ceci devant le tribunal pour vol  
bot.on("ready", () => {
    console.log(`[READY] Connecté avec ${bot.user.tag}! (${bot.user.id})`);
      bot.setInterval(() => {
          var activities = [
              {

              },
              {
                  "text": "*BOT PAS FINI*",
                  "type": "WATCHING"
              },
              {
        
                  "text": `Serveurs : ${bot.guilds.size} `,
                  "type": "WATCHING"
           
              },
              {
                  "text": "Créateur : MIGO",
                  "type": "WATCHING"
              },
              {
                  "text": "_help pour avoir de l'aide !",
                  "type": "WATCHING"
              }
          ]

          try {
          const activity = activities[Math.floor(Math.random() * activities.length)];
          bot.user.setActivity(activity.text, { type: activity.type });
        } catch (err) {
          return;
        }
      }, 5000);
  });
  




	
bot.on('message', function (message) {
if (message.content === '_help') {
message.reply(' ``Page de la commande _help ! \n _server affiche le nom du serveur et le nombre de joueur présent dessus !  \n _help : affiche cet commande \n _ping: affiche probablement le ping du bot \n _p / _partenaire Affiche nos partenaires ! (5€) \n _kick : kick l’user mentionné \n _vdm : affiche une vie de merde (une seul seulement) \n _info Affiche des infos sur Migo et moi \n _invite Invitez le bot sur votre serveur !  `` \n ============ \n __Commande sans préfix !__ \n `je suis le meilleur \n il mytho \n FellDey` \n \n  **BOT NON FINIS** \nCréateur : Migo, aidé par Alex, Hébergé par : Bot non hébergé.  \n \n  https://discord.gg/Kps4Rs2 ')

}

})

	
bot.on('message', function (message) {
    if (message.content === '_server') {
    let server_name = message.guild.name
    let server_size = message.guild.members.size
    message.channel.send('Serveur : ' + server_name +
     '\n Personnes : ' + server_size)
    
}

})

bot.on('message', message => {
  
    if (message.content === '_ping') {

      message.channel.send('pong');
    }
  });


  bot.on('message', message => {
  
    if (message.content === '_info') {

      message.channel.send('__Des infos sur Migo et moi !__ \n \n Je suis créé en 2018 spécialement pour le `raid` puis j’ai arreter car une ami ma ouvert les yeux ! (merci Rima) puis Migo à commençé avec l’aide d’Alex ! \n \n Migo est un Youtuber très inactif sur sa chaine YouTube MigoVR et un homme qui galère pour les VPS comme Heroku');
    }
  });


  
bot.on('message', message => {
  
  if (message.content === '_invite') {

    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=544233804353503292&scope=bot&permissions=805825630');
  }
});


bot.on('message', message => {
  
  if (message.content === '_i') {

    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=544233804353503292&scope=bot&permissions=805825630');
  }
});



  bot.on('message', message => {

    if (message.content === '_vdm') {
   
      message.channel.send('Aujourd’hui, mon petit ami rompt avec moi mais me raccompagne jusqu’à l’arrêt de bus en me consolant. Une fois que je suis montée, le chauffeur me lance joyeusement Il a l’air très amoureux celui-là ! J’ai fondu en larmes. VDM');
    }
  });


  bot.on('message', message => {
    let args = message.content.split(' ') 
    if(args[0] ===  '_say'){
    let msg = args.slice(1).join(' ') 
    
    message.channel.send(msg)
    
    } 
    })

    bot.on('message', message => {
   
        if (message.content === '_irl') {
          
          message.channel.send('Migo : https://imgur.com/a/bOmhM7W ! ');
        }
      });

      

      bot.on('message', message => {
    
        if (message.content === 'je suis le meilleur') {
        
          message.channel.send('**tout le monde te croit ...** ');
        }
      });

      
      
      bot.on('message', message => {

        if (message.content === 'il mytho') {
     
          message.channel.send('**JE SAIS** ');
        }
      });

 


      bot.on('message', message => {

        if (message.content === '_partenaire') {
     
          message.channel.send('**Nos partenaires !** \n \n Aucun, 5E le partenariat, ou ajouté le bot sur un serveur de plus de 500 membres actfis. \n \n *ou payé un VPS* ');
        }
      });


      bot.on('message', message => {

        if (message.content === '_p') {
     
          message.channel.send('**Nos partenaires !** \n \n Aucun, 5E le partenariat, ou ajouté le bot sur un serveur de plus de 500 membres actfis. \n \n *ou payé un VPS* ');
        }
      });

      bot.on('message', message => {

        if (message.content === 'FellDey') {
        
          message.channel.send('https://cdn.discordapp.com/attachments/544236586519363607/544856862151933963/FellDey.jpg ');
        }
      });

      
      
bot.on('message', message => {

  if (message.content === '_pp') {
 
    message.reply(message.author.avatarURL);
  }
});

require('events').EventEmitter.prototype._maxListeners = 100; 


bot.on('message', message => {
 
  if (!message.guild) return;

 
  if (message.content.startsWith('_kick')) {
    const user = message.mentions.users.first();
  
    if (user) {
      
      const member = message.guild.member(user);
     
      if (member) {
     
        member.kick('Optional reason that will display in the audit logs').then(() => {
          
          message.reply(`Kick réussi ${user.tag}`);
        }).catch(err => {
      
          message.reply('impossible de kick ce membre !');
       
          console.error(err);
        });
      } else {
    
        message.reply('That user isn\'t in this guild!');
      }
 
    } else {
      message.reply('Aucune mention trouvés ! ');
    }
  }
});


  
process.env.TOKEN
