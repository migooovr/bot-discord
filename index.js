const Discord = require('discord.js')
const bot = new Discord.Client() 

// Bonjour, je vous conseille de supprimé ce code de votre ordinateur ou nous verrons ceci devant le tribunal pour vol  
bot.on("ready", () => {
    console.log(`[READY] Je suis pret à faire du lourd ! ${bot.user.tag}! (${bot.user.id})`);
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
message.reply(' ``Page de la commande _help ! \n _ban sert à bannir des joueurs \n _mute sert à mute les méchants ! \n _purge suprrimés des messages simplement \n _server affiche le nom du serveur et le nombre de joueur présent dessus !  \n _help : affiche cet commande \n _ping: affiche probablement le ping du bot \n _p / _partenaire Affiche nos partenaires ! (5€) \n _kick : kick l’user mentionné \n _vdm : affiche une vie de merde (une seul seulement) \n _info Affiche des infos sur Migo et moi \n _invite Invitez le bot sur votre serveur !  `` \n ============ \n __Commande sans préfix !__ \n `je suis le meilleur \n il mytho \n FellDey` \n \n  **BOT NON FINIS** \nCréateur : Migo, aidé par Alex, Hébergé par : Heroku.  \n \n  https://discord.gg/Kps4Rs2 \n https://fr.tipeee.com/migovr-donation ')

}
    if (message.content === '_server') {
    let server_name = message.guild.name
    let server_size = message.guild.members.size
    message.channel.send('Serveur : ' + server_name +
     '\n Personnes : ' + server_size)
    
}
  
    if (message.content === '_ping') {

      message.channel.send('pong');
    }
  
    if (message.content === '_info') {

      message.channel.send('__Des infos sur Migo et moi !__ \n \n Je suis créé en 2018 spécialement pour le `raid` puis j’ai arreter car une ami ma ouvert les yeux ! (merci Rima) puis Migo à commençé avec l’aide d’Alex ! \n \n Migo est un Youtuber très inactif sur sa chaine YouTube MigoVR et un homme qui galère pour les VPS comme Heroku');
    }
  
  if (message.content === '_invite') {

    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=544233804353503292&scope=bot&permissions=805825630 Merci du soutiens <3');
  }
  
  if (message.content === '_i') {

    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=544233804353503292&scope=bot&permissions=805825630 Merci du soutiens <3');
  }


    if (message.content === '_vdm') {
   
      message.channel.send('Aujourd’hui, mon petit ami rompt avec moi mais me raccompagne jusqu’à l’arrêt de bus en me consolant. Une fois que je suis montée, le chauffeur me lance joyeusement Il a l’air très amoureux celui-là ! J’ai fondu en larmes. VDM');
  
    }
    let args = message.content.split(' ') 
    if(args[0] ===  '_say'){
    let msg = args.slice(1).join(' ') 
    
    message.channel.send(msg)
    
    } 
   
    j 
      
    
    if (message.content === '_irl') {
          
          message.channel.send('Migo : https://imgur.com/a/bOmhM7W ! ');
        }
      
    
        if (message.content === 'je suis le meilleur') {
        
          message.channel.send('**tout le monde te croit ...** ');
        }
 

        if (message.content === 'il mytho') {
     
          message.channel.send('**JE SAIS** ');
        }

        if(command === "_ban") {
        
          if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
            return message.reply("Vous n'avez pas la permission !");
          
          let member = message.mentions.members.first();
          if(!member)
            return message.reply ("Seléctionné un membre du serveur valide");
          if(!member.bannable) 
            return message.reply("Impossible, avez vous bien les permissions de bannir, si oui, je l'ai ai ?");
      
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "Aucune raison trouvés, abus de pouvoir ?";
          
   bot.on('message', async message =>{
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
          message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
        }
        
        if(command === "_mute"){

          if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
      
          let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
          if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
          let role = message.guild.roles.find(r => r.name === "Utilisateurs mutés");
          if(!role){
            try {
              role = await message.guild.createRole({
                name: "Utilisateurs mutés",
                color:"#000000",
                permissions:[]
              });
      
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                });
              });
            } catch (e) {
              console.log(e.stack)
            }
          }
      
          if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');
      
          await(toMute.addRole(role));
          message.channel.send("Je l'ai muté !");
      
          return;
        }
      


        if(command === "_purge") {
          
          const deleteCount = parseInt(args[0], 10);
          
          // Ooooh nice, combined conditions. <3
          if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Selectionner entre 2 et 100 messages à supprimé");
          
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Impossible de supprimé car : ${error}`));
        }

        if (message.content === '_partenaire') {
     
          message.channel.send('**Nos partenaires !** \n \n Aucun, 5E le partenariat, ou ajouté le bot sur un serveur de plus de 500 membres actfis. \n \n *ou payé un VPS* ');
        }

        if (message.content === '_p') {
       
                 message.channel.send('Nos partenaires ! \n \n Aucun, 5E le partenariat, ou ajouté le bot sur un serveur de plus de 500 membres actfis. \n \n ou payé un VPS ');
               };
        if (message.content === '_pp ') {
        
           message.reply(message.author.avatarURL);
         }
     
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



  bot.login('NTQ0MjMzODA0MzUzNTAzMjky.XKUnKg.jg5lYCbaSmxFM3hdB3Zp-sf_y-M')
