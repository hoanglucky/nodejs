import exp from 'constants';
import mysql from 'mysql2/promise';


const getConnection = async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        password: '123456',
        user: 'root',
        database: 'nodejspro'
    });
    return connection;
}
export default getConnection