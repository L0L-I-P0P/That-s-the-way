const router = require('express').Router();
const ProfilePage = require('../../components/Page/ProfilePage');

const { Route } = require('../../db/models');

router.get('/', async (req, res) => {
  //
  const { user } = res.locals;

  const routes = await Route.findAll({ where: { user_ID: user.id } });

  res.send(res.renderComponent(ProfilePage, { routes }));
});

module.exports = router;
