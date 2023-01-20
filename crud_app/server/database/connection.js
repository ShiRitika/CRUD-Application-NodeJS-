const mongoose = require("mongoose");

// MONGO_URl="mongodb+srv://admin:admin123@cluster0.mwiw1m0.mongodb.net/users?retryWrites=true&w=majority"

mongoose.set("strictQuery",false);
const connectDB = async() => {
    try{
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URl,{
            // useNewUralParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        });

        console.log(`MongoDB connected:${con.connection.host}`);
    }catch(error){
        console.log(error);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
};

module.exports = connectDB;