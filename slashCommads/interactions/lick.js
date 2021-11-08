const star = require("star-labs");

module.exports = {
  name: "lamer",
  description: "lame a un usuario",
  options: [
    {
      name: "usuario",
      description: "usuario a lamer",
      type: "MENTIONABLE",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    try {
      const usuario = interaction.options._hoistedOptions[0].user;

      const embed = {
        description: `${usuario} ha sido lamido por ${interaction.user.username}`,
        color: "RED",
        image: { url: star.lick() },
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
