const TelegramBot = require('node-telegram-bot-api');

const token =  '6666473299:AAGsU2tgxBS1d4S9D-FNz2_tPpzaVH8neus'
const webAppUrl = 'https://keen-sunburst-dfdd00.netlify.app'

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Welcome to your new todo list bot', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Show all tasks list'}, {web_app: {url: 'https://keen-sunburst-dfdd00.netlify.app/'}}]
            ]
        }
    })
  }
});