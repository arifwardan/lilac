require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", async () => {
  console.log(`Login sebagai ${client.user.tag}`);

  const guild = await client.guilds.fetch(process.env.GUILD_ID);

  joinVoiceChannel({
    channelId: process.env.CHANNEL_ID,
    guildId: process.env.GUILD_ID,
    adapterCreator: guild.voiceAdapterCreator,
    selfDeaf: false,
    selfMute: true,
  });

  console.log("Bot masuk voice channel.");
});

client.login(process.env.TOKEN);