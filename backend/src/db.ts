const { Pool } = require('pg')

function connectDB() {
    const pool = new Pool({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE_NAME,
        password: process.env.POSTGRES_DATABASE_PASSWORD,
        port: process.env.POSTGRES_PORT,
    })

    pool.connect()
        .then((client: import('pg').PoolClient) => {
            console.log(`Connected to PostgreSQL database!`)
            client.release()
        })
        .catch((err: Error) => { console.log(`got error while connecting to db: ${err}`) })

        return pool
}

export default connectDB