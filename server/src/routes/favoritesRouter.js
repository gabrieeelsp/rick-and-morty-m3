const { Router } = require('express');

const favoritesController = require('../controllers/favoritesController');

const favoritesRouter = Router();

favoritesRouter.post('/', async (req, res) => {
    
    const { id, gender, image, name, species, status } = req.body;

    if ( !id || !gender || !image || !name || !species || !status ) return res.status(400).json({error: 'Faltan datos'});

    try {
        const items =  await favoritesController.postFav({id: id, gender: gender, image: image, name: name, species: species, status: status});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

favoritesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const items = await favoritesController.deleteFav(Number(id));
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json(items);
    }
})

module.exports = favoritesRouter;