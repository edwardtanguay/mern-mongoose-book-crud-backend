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

const decorateAndSanitizeBook = (rawBook: any) => {
	const book: IBook = {
		...rawBook.toObject({versionKey: false}),
		languageText: rawBook.language.charAt(0).toUpperCase() + rawBook.language.slice(1)
	};
	return book
}

export const getBooks = async () => {
	const rawBooks = await Book.find();
	const books: IBook[] = [];
	rawBooks.forEach(rawBook => {
		books.push(decorateAndSanitizeBook(rawBook));
	})
	return books;
}

export const getBook = async (_id: string) => {
	const rawBook = await Book.findOne({ _id});
	const book = decorateAndSanitizeBook(rawBook);
	return book;
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