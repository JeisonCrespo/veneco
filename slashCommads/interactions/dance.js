const star = require("star-labs");

module.exports = {
  name: "bailar",
  description: "ponte a bailar",
  run: async (client, interaction) => {
    try {
      const embed = {
        description: `${interaction.user.username} se ha puesto a bailar`,
        color: "RED",
        image: { url: star.dance() },
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
