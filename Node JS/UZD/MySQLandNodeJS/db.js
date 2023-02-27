import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const client = process.DATABASE_URL

const pool = new pg.Pool({
  connectionString: client
});

export default pool;