const Discord = module.require("discord.js");
const fs = require('fs');
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .addField("Название сервера",message.guild.name)
    .addField("Создание сервера",message.guild.createdAt)
    .addField("Вы присоединились на сервер",message.guild.joinedAt)
    .addField("Кол-во участников на сервере",message.guild.memberCount)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: 'serverinfo'
};