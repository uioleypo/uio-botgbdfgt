const Discord = module.require("discord.js");
const fs = require ("fs");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Отказываю, У вас нет прав");
    if(args[0]>100) return bot.send("Укажите значение меньше 100 :wink:");
    if(args[0]<1) return bot.send("Укажите значение больше 1 :wink:");
    message.channel.bulkDelete(args[0]).then(() =>{
        bot.send(`Удалено ${args[0]} сообщений`).then(msg => msg.delete(15*1000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};