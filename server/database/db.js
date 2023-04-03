import mongoose from 'mongoose';


mongoose.set('strictQuery', false);



const Connection = async (username, password) => {
    const URL=`mongodb+srv://${username}:${password}@test0.774lyte.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting databases', error);
    }
}

export default Connection;