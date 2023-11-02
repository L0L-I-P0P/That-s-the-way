const router = require('express').Router();

const mainRouter = require('./view/main.routes');
const authRouter = require('./view/auth.routes');
const apiAuth = require('./api/api.auth.routes');
const routesRoute = require('./view/routes.routes');
const profileRoute = require('./view/profile.routes');

router.use('/', mainRouter);
router.use('/routes', routesRoute);
router.use('/auth', authRouter);
router.use('/api/auth', apiAuth);
router.use('/profile', profileRoute);

module.exports = router;
