const Discord = module.require("discord.js");
const fs = require('fs');
module.exports.run = async (bot,message,args) => {
    message.channel.send('-ban - Забанить, -kick - кикнуть, -warn - предупреждение, -clear от 10 до 100 - очистить сообщения, -ping - pong!, ');
};
module.exports.help = {
    name: 'help'
};