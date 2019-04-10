const Discord = module.require("discord.js");
const fs = require('fs');
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
        
    function send (msg){
       message.channel.send(msg);
    }

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Отказываю, У вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
    
    if(!args[0]) return send(":x: Вы не указали пользователя");
    if(!rUser) return send("Пользователь не найден");
    let embed = new Discord.RichEmbed()
    .setDescription("Бан")
    .addField("Администратор",message.author.username)
    .addField("Забанил", `${rUser.user.username}`);
    
    message.guild.member(rUser).ban("Бан");
    message.channel.send(embed);
    }catch(err){
        if(err.name === "ReferenceError")
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: 'ban'
};