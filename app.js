require('@babel/register');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 4000;

app.locals.title = '';
//подключение middleware
serverConfig(app);
// проверка кто сидит на сайте через проверку токена(cookie)
app.use(checkUser);
//маршрутизация
app.use();

app.listen(PORT, () => {
  console.log('Сервак летит');
});
