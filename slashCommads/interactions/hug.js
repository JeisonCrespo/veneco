const star = require("star-labs");

module.exports = {
  name: "abrazo",
  description: "abrazo a un usuario",
  options: [
    {
      name: "usuario",
      description: "usuario a mencionar",
      type: "MENTIONABLE",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    try {
      const usuario = interaction.options._hoistedOptions[0].user;

      const embed = {
        description: `${usuario} ha sido abrazado por ${interaction.user.username} :heart:`,
        color: "RED",
        image: { url: star.hug() },
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
