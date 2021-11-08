const star = require("star-labs");

module.exports = {
  name: "sonrojado",
  description: "Te pones rojo de la pena",
  run: async (client, interaction) => {
    try {
      const embed = {
        description: `${interaction.user.username} se ha sonrojado`,
        color: "RED",
        image: { url: star.blush() },
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
