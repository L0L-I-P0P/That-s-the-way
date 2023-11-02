const router = require('express').Router();
const { Route } = require('../../db/models');

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
    });

    // 2. отправить верстку
    const html = res.renderComponent(RoutePage, { route });
    res.send(html);
  } catch (error) {
    // если что-то пошло не так, позвращаем 500 статус
    res.status(500).send(error);
  }
});

module.exports = router;
