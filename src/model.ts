import mongoose from 'mongoose';
import { Book } from './models/Book.js';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION ?? 'mongodb://localhost/bookapi';
mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_CONNECTION);

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