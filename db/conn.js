// const mongoose = require('mongoose');

// const DB = process.env.DATABASE || 'mongodb+srv://Pradeep:admin123@pk.f2lay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// const connection = mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// }).then(() => {
//     console.log(`connnection successful`);
// }).catch((err) => console.log(`no connection`));



const mongoose= require('mongoose');

const connectDB =async()=>{
    try {
        const con = await mongoose.connect('mongodb+srv://venktesh:singh@cluster0.yiawe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useFindAndModify:false,
          useCreateIndex:true  
        })
console.log(`MongoDDB connnected : ${con.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports=connectDB