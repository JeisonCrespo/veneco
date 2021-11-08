module.exports = {
  name: "avatar",
  description: "Ver el avatar de un usuario",
  options: [
    {
      name: "menciona",
      type: "USER",
      description: "Selecciona a un usuario",
      required: true,
    },
  ],
  run: async (client, interaction, options) => {
    const user = interaction.options.getUser("menciona");

    const embed = {
      title: `${user.username} Avatar`,
      color: "BLUE",
      image: user.displayAvatarURL({
        dynamic: true,
        size: 1024,
      }),
      description: `[Png](${user.avatarURL({
        format: "png",
      })}) | [Webp](${user.avatarURL({
        dynamic: true,
      })}) | [Jpg](${user.avatarURL({ format: "jpg" })})`,
      Footer: `Requested by: ${interaction.user.username}, interaction.user.displayAvatarURL({ dynamic: true })`,
    };

    await interaction.followUp({
      embeds: [embed],
    }); //lets try it now
  },
};
