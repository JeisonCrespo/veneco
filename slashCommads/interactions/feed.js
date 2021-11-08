const star = require("star-labs");

module.exports = {
  name: "comida",
  description: "dale de comer a un usuario",
  options: [
    {
      name: "usuario",
      description: "usuario para dar de comer",
      type: "MENTIONABLE",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    try {
      const usuario = interaction.options._hoistedOptions[0].user;

      const embed = {
        description: `${usuario} ha sido alimentado por ${interaction.user.username}`,
        color: "RED",
        image: { url: star.feed() },
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
