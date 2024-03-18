import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        const mongoDB_url = process.env.MONGODB_URI;
        if(mongoDB_url !== undefined){
            await mongoose.connect(mongoDB_url.toString(), {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            isConnected = true;
            console.log('MongoDB connected');
        }
    }
    catch (error) {
        console.log(error);
    }
}