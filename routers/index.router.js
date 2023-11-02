const router = require('express').Router();

const mainRouter = require('./view/main.router');
const authRouter = require('./view/auth.router');
const apiAuth = require('./api/api.auth.router');

router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/api/auth', apiAuth);

module.exports = router;
