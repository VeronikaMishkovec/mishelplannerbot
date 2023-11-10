const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const TelegramBot = require('node-telegram-bot-api');

const token =  '6666473299:AAGsU2tgxBS1d4S9D-FNz2_tPpzaVH8neus'
const webAppUrl = 'https://keen-sunburst-dfdd00.netlify.app'
const DB_URL = 'mongodb+srv://veronikamishkovec:HDF1p4zd9Gvzy9yT@cluster0.9sogv8q.mongodb.net/?retryWrites=true&w=majority'

const bot = new TelegramBot(token, {polling: true});
const app = express()

app.use(express)
app.use(cors)

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Welcome to your new todo list bot', {
        reply_markup: {
            keyboard: [
                [{text: 'Show all tasks list', web_app: {url: 'https://keen-sunburst-dfdd00.netlify.app/'}}]
            ]
        }
    })
  }
});

const PORT = 8000
// app.listen(PORT, () => console.log('Server start on PORT' + PORT))

async function startApp() {
  try {
      await mongoose.connect(DB_URL)
      app.listen(PORT, () => console.log('Server started on PORT ' + PORT))
  } catch (error) {
      console.log(error)
  }
}

startApp() 