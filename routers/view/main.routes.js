const router = require('express').Router();
const mainPage = require('../../components/Page/MainPage');

const { Route, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const routes = await Route.findAll({ include: [User] });
    res.send(res.renderComponent(mainPage, { routes }));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
