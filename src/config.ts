import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT;

export const appName = 'Book Site API';

export const mongoDbConnection = process.env.MONGODB_CONNECTION ?? 'mongodb://localhost/bookapi';