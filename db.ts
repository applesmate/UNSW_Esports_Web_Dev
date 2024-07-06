import postgres from 'postgres'

const sql = postgres('postgres://username:password@host:port/database', {
    host    : 'webdev-db.postgres.database.azure.com',
    port    : 5432,
    database: 'projectCepheus',
    username: 'webdev',
    password: 'ef75&q5nDruJH#b6'
}) // will use psql environment variables

/**
 * Host: webdev-db.postgres.database.azure.com
    DB: projectCepheus
    Login: webdev
    Pwd: ef75&q5nDruJH#b6
 */
export default sql