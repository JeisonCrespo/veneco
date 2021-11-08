const star = require("star-labs");

module.exports = {
  name: "suicidio",
  description: "Haz un suicidio",
  run: async (client, interaction) => {
    try {
      const embed = {
        description: `${interaction.user.username} se ha suicidado... :(`,
        color: "RED",
        image: { url: star.suicide() },
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
