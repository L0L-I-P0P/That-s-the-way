const router = require('express').Router();
const regPage = require('../../components/Page/RegPage');
const LoginPage = require('../../components/Page/LogPage');

router.get('/register', (req, res) => {
  try {
    res.send(res.renderComponent(regPage));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/login', (req, res) => {
  try {
    res.send(res.renderComponent(LoginPage));
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
