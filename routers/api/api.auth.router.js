const router = require('express').Router();
const bcrypt = require('bcrypt');

const ErrorDiv = require('../../components/ErrorReg');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (name === '' || email === '' || password === '') {
    const html = res.renderComponent(ErrorDiv, {
      message: 'Заполните все поля',
    });
    return res.status(404).json({ success: false, errorHtml: html });
  }
  try {
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      const html = res.renderComponent(ErrorDiv, {
        message: 'Такой пользователь уже существует',
      });
      return res.status(404).json({
        success: false,
        errorHtml: html,
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    res.json({
      success: true,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка на серваке' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (email === '' || password === '') {
      const html = res.renderComponent(ErrorDiv, {
        message: 'Заполните все поля',
      });
      return res.status(404).json({ success: false, errorHtml: html });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!user || !check) {
      const html = res.renderComponent(ErrorDiv, {
        message: 'Неверный пароль или email',
      });
      return res.status(404).json({ success: false, errorHtml: html });
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, email: user.email },
    });
    res.cookie('access', accessToken, {
      maxAge: 1000 * 12 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 12 * 5,
      httpOnly: true,
    });
    res.json({
      success: true,
      message: `Аутентификация ${user.name} прошла успешно`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
