const ms = require("ms");

module.exports = {
  name: "mute",
  description: "mutea a un usuario",
  options: [
    {
      name: "usuario",
      description: "usuario a banear",
      type: "USER",
      required: "true",
    },
    {
      name: "razon",
      description: "razon del baneo",
      type: "STRING",
      required: "true",
    },
    {
      name: "tiempo",
      description: "tiempo del muteo",
      type: "STRING",
      required: "false",
    },
  ],
  permissions: ["MUTE_MEMBERS"],
  run: async (client, interaction) => {
    //ID ROL MUTE 904461091982168085
    //ID DE LOGS 904461227172962354

    let channel = interaction.guild.channels.cache.find(
      (c) => c.id == "904461227172962354"
    );

    let objetivo = interaction.options.getMember("usuario");
    let razon = interaction.options.getString("razon");
    let tiempo = interaction.options.getString("tiempo");
    let fecha = parseInt(interaction.createdTimestamp / 1000);

    //Embed como objeto
    let emb = {
      author: {
        name: "MUTEOS EXPRESS",
        icon_url: "https://www.computerhope.com/jargon/m/mute.jpg",
      },
      title: `${objetivo.user.username}`,
      description: `Muteado por: ${interaction.user.username}\n Razon de muteo: ${razon}\n<t:${fecha}:F>\nId: ||${objetivo.user.id}||`,
      timestamp: interaction.createdTimestamp,
      color: 16711680,
    };
    console.log(tiempo);
    if (tiempo != null) console.log(ms(tiempo));

    try {
      objetivo.roles.add("904461091982168085");

      if (tiempo != null) {
        setTimeout(() => {
          objetivo.roles.remove("904461091982168085");
        }, ms(tiempo));
      }

      interaction.reply({
        content: `Usuario muteado con exito checar los logs`,
        ephemeral: true,
      }); // Mensaje de aprobacion

      channel.send({ embeds: [emb] }); // Embed al canal de logs

      if (objetivo.user.bot) return; //Checar si es bot
      objetivo.send({ embeds: [emb] }); // Embed al usuario muteado
    } catch (e) {
      interaction.reply({
        content: `Error al mutear al usuario: ${objetivo.user.username} con el id: ||${objetivo.user.id}||`,
        ephemeral: true,
      }); //Emsaje de erro
      console.log("Error mueto: " + e);
    }
  },
};
