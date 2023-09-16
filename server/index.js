require('dotenv').config();
const morgan = require('morgan');
const { PORT } = process.env;

const server = require('./src/server');
server.use(morgan('dev'));

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
})
