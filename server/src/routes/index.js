const { Router } = require('express');
const charactersRouter = require('./charactersRouter');
const loginRouter = require('./loginRouter');
const favoritesRouter = require('./favoritesRouter');

const router = Router();

router.use('/character', charactersRouter);
router.use('/login', loginRouter);
router.use('/fav', favoritesRouter);

module.exports = router;
