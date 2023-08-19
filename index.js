const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 1999; 

const commonResponse = function (data, error) {
    if (error) {
        return {
            success: false,
            error: error
        }
    }
    return {
        success: true,
        data: data
    }
};


const mysqlCon = mysql.createConnection({
    host: process.env.MYSQL_HOST_PRODUCTION,
    port: process.env.MYSQL_PORT_PRODUCTION,
    user: process.env.MYSQL_USER_PRODUCTION,
    password: process.env.MYSQL_PASS_PRODUCTION,
    database: process.env.MYSQL_DATABASE_PRODUCTION
});


mysqlCon.connect((err) => {
    if (err) { 
        return console.log(err)
    }
    console.log("Database connected railway")
});

app.use(bodyParser.json())


app.get('/', (request, response) => {
    response.status(200).send("Hello world !")
}); 


app.get('/user', (request, response) => {
    console.log("masuk")
    mysqlCon.query("select * from user", (err, result, fields) => {
        if (err) {
            console.error(err)
            response.status(500).json({err: "server error"})
            response.end()
            return
        }
        response.status(200).json({success: "succes", data: result})
        response.end()
    })
}); 

 
app.get('/user/:id', async (request, response) => {
    const id = request.params.id;
    mysqlCon.query(
        `SELECT
        u.id,
        u.name,
        u.address,
        SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE 0 END) AS balance,
        SUM(CASE WHEN t.type = 'expense' THEN t.amount ELSE 0 END) AS expense
        FROM user u
        LEFT JOIN transaction t ON u.id = t.user_id
        WHERE u.id = ?
        GROUP BY u.id;`, [id], (err, result, fields) => {
            if (err) {
                console.error(err)
                response.status(500).json(commonResponse(null, "response error"))
                response.end()
                return
            }
            if(result.affectedRows !==0) {
                console.log("transaction connected", result);
                response.status(200).json(commonResponse(result))
                response.end()
            } else{
                response.status(404).send("user id not found")
            }
        }
    )
});

app.get('/transaction', (request, response) => {
    console.log("masuk")
    mysqlCon.query("select * from transaction", (err, result, fields) => {
        if (err) {
            console.error(err)
            response.status(500).json({err: "server error"})
            response.end()
            return
        }
        response.status(200).json({success: "succes", data: result})
        response.end()
    })
}); 

app.post('/transaction', async (request, response) => {
    const {type, amount, user_id} = request.body
    console.log(request.body);
    mysqlCon.query(
        `INSERT INTO transaction 
        (user_id, type, amount)
        VALUES(${user_id}, "${type}", ${amount})`,
        (err, result, fields) => {
            if(err) {
                console.error(err)
                response.status(500).json(commonResponse(null, "response error"))
                response.end()
                return
            }
            console.log("transaction connected", result);
            response.status(200).json(commonResponse(result .insertId, null))
            response.end()
        }
    )
})

app.put('/transaction/:id', async (request, response) => {
    const id = request.params.id;
    const {type, amount, user_id} = request.body
    console.log(request.body)
    mysqlCon.query(
        `UPDATE transaction 
        SET user_id=?, type=?, amount=?
        WHERE id=?`,[user_id, type, amount, id],
        (err, result, fields) => {
            if (err) {
                console.error(err)
                response.status(500).json((null, "response error"))
                response.end()
                return
            }
                console.log("transaction connected", result);
                response.status(200).json({id: id})
                response.end()
        }
    )
});
 
app.delete('/transaction/:id', async (request, response) => {
    const id = request.params.id;
    mysqlCon.query(
    `DELETE FROM transaction
    WHERE id = ?`, [id],
        (err, result, fields) => {
            if (err) {
                console.error(err)
                response.status(500).json(commonResponse (null, "response error"))
                response.end()
                return
            }
            if(result.affectedRows !==0){
                console.log("transaction connected", result);
                response.status(200).json({id: id})
                response.end()
            } else {
                response.status(404).send("transaction id not found")
            }
        }
)});


app.listen(port, () => {
    console.log(`Server is running at  http://localhost:${port}`);
});