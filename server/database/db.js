import mongoose from 'mongoose';


mongoose.set('strictQuery', false);



const Connection = async (username, password) => {
    const URL=`mongodb://${username}:${password}@ac-ywdbizx-shard-00-00.dmpz9m6.mongodb.net:27017,ac-ywdbizx-shard-00-01.dmpz9m6.mongodb.net:27017,ac-ywdbizx-shard-00-02.dmpz9m6.mongodb.net:27017/?ssl=true&replicaSet=atlas-tw84vr-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting databases', error);
    }
}

export default Connection;