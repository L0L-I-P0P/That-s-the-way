require('@babel/register');
require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 4000;

const serverConfig = require('./config/serverConfig');

const checkUser = require('./middleware/verifyJWT');

const indexRouter = require('./routers/index.routes');

app.locals.title = 'Таков Путь 🚲';
// подключение middleware
serverConfig(app);
// проверка кто сидит на сайте через проверку токена(cookie)
app.use(checkUser);
// маршрутизация
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('Сервак летит');
});
// COMMENT