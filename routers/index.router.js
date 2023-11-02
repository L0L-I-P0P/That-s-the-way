const router = require('express').Router();

const mainRouter = require('./view/main.router');
const authRouter = require('./view/auth.router');

router.use('/', mainRouter);
router.use('/auth', authRouter);

module.exports = router;
