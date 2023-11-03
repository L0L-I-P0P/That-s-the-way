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
    res.send(res.renderComponent(mainPage, { routes, middlerating }));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
module.exports = router;
