const router = require('express').Router();
const bcrypt = require('bcrypt');

const ErrorDiv = require('../../components/ErrorReg');
const { User } = require('../../db/models');

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
    const user = User.create({ name, email, password: hash });
    const html = res.renderComponent(ErrorDiv, {
      message: `Пользователь ${user.name} успешно зарегистрирован`,
    });
    res.json({
      success: true,
      errorHtml: html,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Ошибка на серваке' });
  }
});

module.exports = router;
