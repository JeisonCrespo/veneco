const star = require("star-labs");

module.exports = {
  name: "llorar",
  description: "Empieza a llorar",
  run: async (client, interaction) => {
    try {
      const embed = {
        description: `${interaction.user.username} ha empezado a llorar! :(`,
        color: "RED",
        image: { url: star.cry() },
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
