const star = require("star-labs");

module.exports = {
  name: "dormir",
  description: "Te vas a dormir",
  run: async (client, interaction) => {
    try {
      const embed = {
        description: `${interaction.user.username} se ha quedado dormido!`,
        color: "RED",
        image: { url: star.sleep() },
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
