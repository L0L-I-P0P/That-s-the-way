const router = require('express').Router();
const regPage = require('../../components/Page/RegPage');

router.get('/register', (req, res) => {
  try {
    res.send(res.renderComponent(regPage));
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
