import mongoose from 'mongoose'

import { mongo_uri } from '../../config/config';

(async () => {

    const connection = await mongoose.connect(`${mongo_uri}`)

    if(connection) {
        console.log("MongoDB is running");
    }

})()