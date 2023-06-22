const Discord = require("discord.js")
const REST = require("")
const client = new Discord.Client()
// const require({ REST, Routes }) from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("OTk2NzAxNDE1Mjg2MjQzMzM4.GJf_HX.BQcJbq33L6mJeKLn9XMUqkZHrxlrbRsQ-fPduA");

 try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands(996701415286243338), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

// const token = process.env.TOKEN


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("interactionCreate", async interaction=>{
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
})

client.login("OTk2NzAxNDE1Mjg2MjQzMzM4.GJf_HX.BQcJbq33L6mJeKLn9XMUqkZHrxlrbRsQ-fPduA")