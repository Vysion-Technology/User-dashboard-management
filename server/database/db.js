import mongoose from 'mongoose';


mongoose.set('strictQuery', false);



const Connection = async (username, password) => {
    // const URL=`mongodb+srv://${username}:${password}@test0.774lyte.mongodb.net/?retryWrites=true&w=majority`;
    const URL=`mongodb+srv://${username}:${password}@user-dashboard-manageme.dmpz9m6.mongodb.net/test`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting databases', error);
    }
}

export default Connection;