const router = require('express').Router();
const mainPage = require('../../components/Page/MainPage');

const { Route, Rating, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // [raiting, length]
    // const { sort } = req.query;
    // let order = ['title', 'DESC'];
    // if (sort === 'rating') {
    // { order }
    //   order = ['rating', 'DESC'];
    // }
    // const raiting = await Rating.findAll({
    //   include: {
    //     model: Route,
    //   },
    //   attributes: ['rating'],
    //   raw: true,
    // });

    const routes = await Route.findAll({ include: [User, Rating] });
    res.send(res.renderComponent(mainPage, { routes }));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
module.exports = router;

/* 
const router = require('express').Router();
const mainPage = require('../../components/Page/MainPage');


const { Route } = require('../../db/models');
const { Rating } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // [raiting, length]
    // const { sort } = req.query;
    // let order = ['title', 'DESC'];
    // if (sort === 'rating') {
    // { order }
    //   order = ['rating', 'DESC'];
    // }
    const raiting = await Rating.findAll({
      attributes: ['rating'],
      raw: true,
    });

    const middlerating =
      (await raiting.reduce((a, b) => a + b.rating, 0)) / raiting.length;
    const routes = await Route.findAll();

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
 */
