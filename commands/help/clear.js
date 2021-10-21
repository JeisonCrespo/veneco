const { execute } = require("./ping");

module.exports = {
  name: "clear",
  aliases: ["del", "borrar", "limpiar"],
  description: "Borra una cierta cantidad de mensajes",
  async execute(client, message, args, discords) {
    if (!args[0]) return message.reply("Cantidad de mensajes a borrar");
    if (isNaN(args[0])) return message.reply("Ingresa un numero");
    if (args[0] > 100) return message.reply("Deber ser menor a 100");
    if (args[0] < 1) return message.reply("Deber ser mayor a 1");

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};
