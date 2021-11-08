const star = require("star-labs");

module.exports = {
  name: "fuckyou",
  description: "sacale el dedo a un usuario",
  options: [
    {
      name: "usuario",
      description: "usuario a sacar el dedo",
      type: "MENTIONABLE",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    try {
      const usuario = interaction.options._hoistedOptions[0].user;

      const embed = {
        description: `${usuario} te ha sacado el dedo medio ${interaction.user.username}`,
        color: "RED",
        image: { url: star.fuckyou() },
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
