import mongoose from 'mongoose';
import { Book } from './models/Book.js';
import * as config from './config.js';
import { IBook, INewBook } from './interfaces.js';

mongoose.set('strictQuery', false);
mongoose.connect(config.mongoDbConnection);

const decorateAndSanitizeBook = (docBook: any) => {
	const book: IBook = {
		...docBook.toObject({ versionKey: false }),
		languageText: docBook.language.charAt(0).toUpperCase() + docBook.language.slice(1)
	};
	return book;
}

export const getBooks = async () => {
	const docBooks = await Book.find();
	const books: IBook[] = [];
	docBooks.forEach(docBook => {
		books.push(decorateAndSanitizeBook(docBook));
	})
	return books;
}

export const getBook = async (_id: string) => {
	const rawBook = await Book.findOne({ _id });
	const book = decorateAndSanitizeBook(rawBook);
	return book;
}

export const addBook = async (book: INewBook) => {
	return new Promise(async (resolve, reject) => {
		const docBook = new Book(book);
		const addedDocBook = await docBook.save();
		resolve(addedDocBook.toObject({ versionKey: false }));
	});
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