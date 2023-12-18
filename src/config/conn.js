const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'mysql-maxiderecho.alwaysdata.net',
    user: '339478_grupo15',
    password: 'grupo15cac',
    port: 3306,
    database: 'maxiderecho_cac_grupo15',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if (err) {
        console.log('Hubo un error en la conexión: ' + err);
    } else {
        console.log('Conexión exitosa');
        conn.release();
    }
})

module.exports = {
    conn: pool.promise()
};
