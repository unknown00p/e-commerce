const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ecommerce',
    password: 'postgre008899',
    port: 5432,
})

pool.connect()
    .then((client: import('pg').PoolClient)=> {
    console.log(`Connected to PostgreSQL database!`)
    client.release()
})
    .catch ((err: Error) => { console.log(`got error while connecting to db: ${err}`) })