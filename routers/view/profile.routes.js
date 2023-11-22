const router = require('express').Router();
const ProfilePage = require('../../components/Page/ProfilePage');

const { Route, User, Rating } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    console.log(user.id);

    const routes = await Route.findAll({
      where: { user_ID: user.id },
      include: [User, Rating],
    });
    console.log(routes);

    res.send(res.renderComponent(ProfilePage, { routes }));
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

module.exports = router;
