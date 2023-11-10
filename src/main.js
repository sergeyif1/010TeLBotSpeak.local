import { Telegraf } from 'telegraf';
import config from 'config';

const bot = new Telegraf(config.get('TELEGRAM_TOKEN'));  //создаем бот, и в скобках передаем токен полученный у самого телеграмма

bot.launch();  //запускаем бота

process.once('SIGINT', () => bot. stop('SIGINT'));     // если вдруг нода завершается самовольно то тогда мы будем останавливать бота
process.once('SIGTERM', () => bot. stop('SIGTERM'));   // сигналом завершения процесса (termination signal) в Unix-подобных операционных системах. Этот сигнал отправляется процессу, чтобы попросить его корректно завершить выполнение. 

