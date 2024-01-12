const moviesModel = require ('../models/movieModel');

const getAll = async (req, res) => {
    const movieModel = await moviesModel.getAll();

    return res.status(200).json(movieModel);
};

module.exports = {
    getAll
};