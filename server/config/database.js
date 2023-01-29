const mongoose= require('mongoose');

const connectDatabase= ()=>{
    mongoose.connect(process.env.LOCAL_DB_URI,{

    }).then(con=>{
        console.log(`mongoDB database is connected with HOST: ${con.connection.host}`)
    })

}
module.exports= connectDatabase;