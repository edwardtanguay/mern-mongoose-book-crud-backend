import * as model from './model.js';
import express from 'express';
import cors from 'cors';
import * as config from './config.js';

const app = express();
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
	res.send(model.getApiInstructions());
});

app.get('/books', async (req, res) => {
	const books = await model.getBooks();
    res.status(200).json(books);
});

app.listen(config.port, () => {
	console.log(`${config.appName} is listening on port http://localhost:${config.port}`);
});