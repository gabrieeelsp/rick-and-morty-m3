const { Router } = require('express');
const charactersController = require('../controllers/charactersController')

const charactersRouter = Router();

charactersRouter.get('/', (req, res) => {
	res.status(200).send('Estoy en la ruta GET /characters');
});


charactersRouter.get('/:id', async (req, res) => {
	//return res.status(200).send('estoy en la ruta ')
	const { id } = req.params;
	try {
		const item = await charactersController.getCharById(Number(id));
		res.status(200).json(item);
	} catch (error) {
		res.status(404).json({error: error.message});
	}
})

module.exports = charactersRouter;
