import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
if (!process.env.NODE_ENV) {
    dotenv.config();
}
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;
//? If needed we can add db info like userName, password, dbName etc.
export const db = {
    connectionUrl: process.env.DB_URI || process.env.dbUri,
    version: process.env.API_VERSION,
};
export const corsUrl = process.env.CORS_URL;
