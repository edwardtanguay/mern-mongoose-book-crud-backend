import mongoose from 'mongoose';
import { Book } from './models/Book.js';
import * as config from './config.js';

mongoose.set('strictQuery', false);
mongoose.connect(config.mongoDbConnection);

export const getBooks = async () => {
    const books = await Book.find();
	return books;
}

export const getApiInstructions = () => {
	return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	code {
		background-color: #333;
	}
</style>
<h1>Book Site API</h1>
<ul>
	<li>nnn</li>
</ul>
	`;
}