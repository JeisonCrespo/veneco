const star = require("star-labs");

module.exports = {
  name: "cachetada",
  description: "cachetea a un usuario",
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
        description: `${usuario} ha sido abofeteado por ${interaction.user.username}`,
        color: "RED",
        image: { url: star.slap() },
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
