import 'dotenv/config';
import sql from './db';

async function createTable() {
    try {
        await sql`CREATE TABLE books (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL
        );
    `;
    console.log("The tables was created");
    } catch(error)
    {
        console.error("Unable to create table. Error: ", error);
    } finally {
        await sql.end();
    }
}

createTable();