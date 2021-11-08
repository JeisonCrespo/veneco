const star = require("star-labs");
const db = require("megadb");

module.exports = {
  name: "abrazo",
  aliases: ["hug"],
  description: "",
  async execute(client, message, args, discord) {
    if (!message.mentions.users.first()) {
      const embed = new discord.MessageEmbed(); //definimos embed
      message.channel.send("¡Menciona a alguien!");
    } else {
      //hacemos un else por si menciona a alguien

      let user2 = message.mentions.users.first();

      // MegaDB
      let abrazos = new db.crearDB("Abrazos");
      let abrazostiene = await abrazos.obtener(`${message.guild.id}_${user2}`);

      if (!abrazos.tiene(`${message.guild.id}_${user2}`)) {
        abrazos.establecer(`${message.guild.id}_${user2}`, 0);
      }

      abrazos.sumar(`${message.guild.id}_${user2}`, 1);

      // MegaDB
      const embed = new discord.MessageEmbed()
        .setDescription(
          `${message.author} abrazó a ${user2.username}\n${user2.username} le han dado ${abrazostiene} abrazos :)`
        )

        .setImage(star.hug())

        .setTimestamp()
        .setFooter(`Code by JORGE#4196`);

      message.channel.send({ embeds: [embed] });
    }
  },
};
