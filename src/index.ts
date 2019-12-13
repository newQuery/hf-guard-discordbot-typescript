import {Config} from "./app/config";
import Discord from "discord.js";

let config: Config = require('../config.json');

const client = new Discord.Client();
const PREFIX = config.discord.prefix;

client.once('ready', () => {
    console.log('Ready to guard !');
});

client.on("guildMemberAdd", (member) => {
    // Set permission 'onPending'
    // Send private message to user asking him his HF UID
    // Checks if the uid is in the sociopaths group
    // Set permission user
});

client.on('message', async message => {
    if (message.content.startsWith(PREFIX)) {
        const input = message.content.slice(PREFIX.length).split(' ');
        const command = input.shift();
        const commandArgs = input.join(' ');

        if (command === 'memberCheck') {
            // Loop through every user
            // Checks if uid in group
            // kick from server the one that are not part of the group
        } else if (command === 'leaders') {
            // list the group leaders using the roles
        }
    }
});

client.login(config.discord.token);
