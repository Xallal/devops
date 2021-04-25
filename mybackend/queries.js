const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password:"12345678A!",
    database:"postgres",
    host:"mypostgres",
    port:"5432"
})

const redis = require('redis');

const redisClient = redis.createClient({
host: "myredis",
port:6379,
retry_startegy: () => 1000



}); 



const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}






const getUserById = (request,response) => {


    const id = parseInt(request.params.id)

         pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
              throw error
            }

            var rows = JSON.stringify(results.rows);
            console.log(`${id}`)
            console.log(rows)
            redisClient.setex(id,600,`${rows}`)
            response.status(200).json(results.rows)
          })


    }

const cache = (request,response,next) => {
    const id = parseInt(request.params.id)
    
    redisClient.get(`${id}`,(error,results) =>{
     if(error) throw error;
     if(results == null) {
        console.log("Pusty wynik")
        next()
     }
     else{
        console.log(id)
        console.log(results)
        response.json(results)
}

   })}
 








const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id ', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    var rows = JSON.stringify(results.rows);
    redisClient.SET(`${results.rows[0].id}`,600, rows)
    response.status(201).send(`User added with ID: ${results.rows[0].id}}`)
  })



}






const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}





const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}






module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  cache,
}



