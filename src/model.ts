import mongoose from 'mongoose';
import { Book } from './models/Book.js';
import * as config from './config.js';

mongoose.set('strictQuery', false);
mongoose.connect(config.mongoDbConnection);

export interface IBook {
	_id: string,
	title: string,
	description: string,
	numberOfPages: number,
	language: string,
	languageText: string,
	imageUrl: string,
	buyUrl: string
}

export const getBooks = async () => {
	const rawBooks = await Book.find();
	const books:IBook[] = [];
	rawBooks.forEach(rawBook => {
		const book:IBook = {
			...rawBook.toObject(),
			languageText: rawBook.language.charAt(0).toUpperCase() + rawBook.language.slice(1)
		};
		books.push(book);
	})
	return books;
}

export const getBook = async (id: number) => {
	const book = await Book.find({ _id: id });
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