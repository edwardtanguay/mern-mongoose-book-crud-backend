import mongoose from 'mongoose';
import { Book } from './models/Book.js';
import * as config from './config.js';

mongoose.set('strictQuery', false);
mongoose.connect(config.mongoDbConnection);

export const getBooks = async () => {
    const rawBooks = await Book.find();
	const books = [];
	rawBooks.forEach(rawBook => {
		const book = {
			title: rawBook.title,
			description: rawBook.description,
			imageUrl: rawBook.imageUrl,
			languageText: rawBook.language.charAt(0).toUpperCase() + rawBook.language.slice(1)
		}
		books.push(book);
	})
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