const star = require("star-labs");

module.exports = {
  name: "confundido",
  description: "Estas confundido",
  run: async (client, interaction) => {
    try {
      const embed = {
        description: `${interaction.user.username} se encuentra confundido`,
        color: "RED",
        image: { url: star.confused() },
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
