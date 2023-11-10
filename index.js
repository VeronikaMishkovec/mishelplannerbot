const TelegramBot = require('node-telegram-bot-api');

const token =  '6666473299:AAGsU2tgxBS1d4S9D-FNz2_tPpzaVH8neus'
const webAppUrl = 'https://keen-sunburst-dfdd00.netlify.app'

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text

  if(text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            keyboard: [
                [{text: 'Заполнить форму', web_app: {url: webAppUrl + '/form'}}]
            ]
        }
    })

    await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
            ]
        }
    })
}
});