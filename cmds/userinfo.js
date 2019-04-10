const Discord = module.require("discord.js");
const fs = require('fs');
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о пользователе")
    .setColor("#177ed3")
    .addField("Имя",a.username)
    .addField("Номер (Тег)",a.tag)
    .addField("Дискриминатор (4-цифры)",a.discriminator)
    .addField("Создание аккаунта",a.createdAt)
    .addField("ID",a.id)
    .addField("Вы бот?",a.bot)
    .setThumbnail(a.avatarURL)

    bot.send(embed);

};
module.exports.help = {
    name: 'userinfo'
};