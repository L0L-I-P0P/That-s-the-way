const router = require('express').Router();
const { Route } = require('../../db/models');
const { Rating } = require('../../db/models');

const { Route, User } = require('../../db/models');


const RouteCard = require('../../components/RouteCard');
const True = require('../../components/True');

router.post('/', async (req, res) => {
  try {
    // 1. посмотреть что пришло с клиента - что лежит в req.body
    const { title, description, place, route_from, route_to } = req.body;

    // 2. сохранить данные с клиента в бд
    const route = await Route.create({
      title,
      description,
      route_from,
      route_to,
      place,
      user_ID: res.locals.user.id, // привязываю факт к юзеру
    });

    const html = res.renderComponent(RouteCard, { route }, { doctype: false });

    // если на этот роут отправляется фетч, то тут не может быть редиректа, только res.json
    res.json({ cardHtml: html });
  } catch (error) {
    // если что-то пошло не так, позвращаем 500 статус
    res.status(500).json({ error: error.message });
  }
});

// роуты на апдейт должны быть параметризированными
// PUT /facts/:id (по REST API)
router.put('/:routeId', async (req, res) => {
  const { routeId } = req.params;

  const { title, description, route_from, route_to, place } = req.body;

  try {
    const route = await Route.findOne({
      where: { id: routeId, user_ID: res.locals.user.id },
      include: [User],
    });
    if (!route) {
      return res.status(400).json({ message: 'Нет доступа' });
    }

    route.title = title;
    route.description = description;
    route.route_from = route_from;
    route.route_to = route_to;
    route.place = place;

    await route.save();
    res.json({ success: true, updatedRoute: route });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// delete роуты должны быть параметризированными
// DELETE /routes/:id (по REST API)
router.delete('/:routeId', async (req, res) => {
  const { routeId } = req.params;
  try {
    // отправить запрос к бд
    const routesDeleted = await Route.destroy({
      where: { id: routeId, user_ID: res.locals.user.id }, // проверка на idor
    });
    // если было удалено 0 фактов
    if (!routesDeleted) {
      return res.status(400).json({ message: 'Ошибка в запросе' });
    }

    // просто вернуть статус в ответе без каких-либо данных
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/:routeId/rating', async (req, res) => {
  const { routeId } = req.params;
  const { rating } = req.body;
  try {
    // отправить запрос к бд
    const oldrating = await Rating.findOne({
      where: {
        user_ID: res.locals.user.id,
        route_ID: routeId,
      },
    });
    console.log(oldrating);
    if (oldrating) {
      const oldRating = await Rating.findOne({
        where: { user_ID: res.locals.user.id },
        raw: true,
      });
      console.log(oldRating.rating);
      const html = res.renderComponent(True, {
        message: 'Вы уже оценили данный маршрут',
        ratingRoute: `${oldRating.rating}`,
      });
      return res.status(404).json({ success: false, trueHtml: html });
    }
    const newRating = await Rating.create({
      user_ID: res.locals.user.id,
      route_ID: routeId,
      rating: rating,
    });
    const html = res.renderComponent(True, {
      message: 'Ваша оценка:',
      ratingRoute: rating,
    });
    return res.json({ success: true, trueHtml: html });
  } catch (error) {
    res.status(500).json({ error: error.message });
router.put('/:routeId/length', async (req, res) => {
  const { routeId } = req.params;
  const { route_length } = req.body;

  try {
    const route = await Route.findOne({
      where: { id: routeId },
      include: [User],
    });
    if (!route) {
      return res.status(400).json({ message: 'Нет доступа' });
    }

    route.route_length = route_length;

    await route.save();
    res.json({ success: true, updatedRoute: route });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
