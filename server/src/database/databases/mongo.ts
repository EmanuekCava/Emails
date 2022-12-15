import mongoose from 'mongoose'

const { HOST, DATABASE } = process.env;

(async () => {

    const connection = await mongoose.connect(`mongodb://${HOST}/${DATABASE}`)

    if(connection) {
        console.log("MongoDB is running");
    }

})()