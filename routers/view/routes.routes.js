const router = require('express').Router();

const { Route } = require('../../db/models');
const { Rating } = require('../../db/models');

const { Route, User } = require('../../db/models');


const RoutePage = require('../../components/Page/RoutePage');
const UpdateRoutePage = require('../../components/Page/UpdateRoutePage');

router.get('/update/:routeId', async (req, res) => {
  const { routeId } = req.params;

  const route = await Route.findOne({ where: { id: routeId } });

  res.send(res.renderComponent(UpdateRoutePage, { route }));
});

// параметризированный запрос - это тот, где есть динамические данные (то, что после двоеточия)
// его лучше ставить в конец
router.get('/:routeId', async (req, res) => {
  try {
    const { routeId } = req.params;

    // 1. запрос к бд
    const route = await Route.findOne({
      where: { id: Number(routeId) },
      include: [User],
    });
    const ratingRoute = await Rating.findOne({ where: { id: routeId } });

    // 2. отправить верстку
    const raiting = await Rating.findAll({
      attributes: ['rating'],
      raw: true,
    });

    const middlerating =
      (await raiting.reduce((a, b) => a + b.rating, 0)) / raiting.length;
    const html = res.renderComponent(RoutePage, { route, middlerating });
    res.send(html);
  } catch (error) {
    // если что-то пошло не так, позвращаем 500 статус
    res.status(500).send(error);
  }
});

module.exports = router;
