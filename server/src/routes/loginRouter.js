const { Router } = require('express');
const loginController = require('../controllers/loginController');

const loginRouter = Router();

loginRouter.get('/', async (req, res) => {
    const { email, password } = req.query;

    if ( !email || !password ) return res.status(400).json({error: 'Faltan datos'});

    try {
        const user = await loginController.attempt({email, password});
        if ( !user ) return res.status(200).json({access: false})

        res.status(200).json({access: true})
    } catch (error) {
        res.status(200).json({error: error.message})
    }
})

module.exports = loginRouter;