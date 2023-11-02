const router = require('express').Router();
const mainPage = require('../../components/Page/MainPage');

router.get('/', (req, res) => {
  try {
    res.send(res.renderComponent(mainPage));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
