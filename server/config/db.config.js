const mongoose = require('mongoose')
const DB_URI = "mongodb+srv://ariz:amazon123@projectxcluster.1tlld.mongodb.net/test?authSource=admin&replicaSet=atlas-12ib4m-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
// const DB_URI = "mongodb+srv:ariz:amazon123@projectxcluster.1tlld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



//Database connection
mongoose.connect( DB_URI,
{   useNewUrlParser: true,
    useUnifiedTopology: true});
const connection = mongoose.connection



module.exports = connection