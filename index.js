const { Client, RichPresence } = require('discord.js-selfbot-v13');
const moment = require('moment');

moment.locale('en');
const client = new Client({
    checkUpdate: false
});
////////////////////////////////
require("http").createServer((_, res) => res.end("Uptime")).listen(8080); // uptimerobot for 24/7
////////////////////////////////

const base = 0xdd50;
let index = 0;
const clock = `\uD83D${String.fromCharCode(base + index)}`;

async function setActivity(){
    const status = new RichPresence() // Creates RPC
        .setName(`Social Media`) // Name
        .setType(`PLAYING`) // Type
        .setApplicationId(``) // Application ID https://discord.com/developers/applications/{applicationId}/information copy ApplicationId
        .setAssetsLargeImage(``) // Large Image ID https://discord.com/developers/applications/{applicationId}/rich-presence/assets upload image
        .setAssetsSmallImage(``) // Small Image ID https://discord.com/api/v9/oauth2/applications/{applicationId}/assets copy id
        .setAssetsLargeText(`Nadine Abigail`) // Text Large Image
        .setAssetsSmallText(`HEHEHEHEHE`) // Text Small Image
        .setState(`${clock}${moment().utcOffset('+07:00').format('h:mm:ss A')} Indonesia/Java`) // State
        .setDetails(`Russia🤝🏻Ukraine`) // Details
        .addButton(`Github`, `https://github.com/Panggigo/`) // Add Button
        .addButton(`Youtube`, `https://www.youtube.com/channel/UCYY2dC8od7sqJYeNX445c0w/`)
        client.user.setActivity(status) // Activate
}
client.on('ready', async () => {
    setInterval(() => {
        setActivity();
    }, 1 * 1000);
    console.log(`${client.user.username} is ready!`);
})

client.login(process.env['TOKEN']); // how to get token? https://www.npmjs.com/package/discord.js-selfbot-v13
