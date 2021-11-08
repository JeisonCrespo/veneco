const star = require("star-labs");

module.exports = {
  name: "patada",
  description: "patea a un usuario",
  options: [
    {
      name: "usuario",
      description: "usuario a patear",
      type: "MENTIONABLE",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    try {
      const usuario = interaction.options._hoistedOptions[0].user;

      const embed = {
        description: `${usuario} ha sido pateado por ${interaction.user.username}`,
        color: "RED",
        image: { url: star.kick() },
        timestamp: interaction.createdTimestamp,
      };

      return interaction.reply({
        embeds: [embed],
      });
    } catch (error) {
      return interaction.reply({ content: "Faltan datos" });
    }
  },
};
