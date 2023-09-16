const axios = require('axios');

const { URL_BASE } = process.env;

const getCharById = async (id) => {
    const resp = await axios.get(`${URL_BASE}/character/${id}`);
    return resp.data;
}

module.exports = {
    getCharById,
}