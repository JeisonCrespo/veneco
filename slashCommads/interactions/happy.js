const star = require("star-labs");

module.exports = {
  name: "feliz",
  description: "Demuestra que estas feliz",
  run: async (client, interaction) => {
    try {
      const embed = {
        description: `${interaction.user.username} se encuentra muy feliz!`,
        color: "RED",
        image: { url: star.happy() },
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
