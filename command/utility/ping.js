const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Ping')
        .setDescription('Reply with pong (Test Command)'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
}