const router = require('express').Router();
const ProfilePage = require('../../components/Page/ProfilePage');

const { Route, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;

    const routes = await Route.findAll({
      where: { user_ID: user.id },
      include: [User],
    });

    res.send(res.renderComponent(ProfilePage, { routes }));
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
