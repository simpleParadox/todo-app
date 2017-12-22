// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Using object destructuring feature of ES6.

MongoClient.connect('mongodb://localhost:27017/',(err,db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server.");
    const database = db.db('test');

    // deleteMany.
    // database.collection('Users').deleteMany({name:'Hannah'}).then((result)=>{
    //     console.log(result);
    // });
    // //deleteOne.
    // database.collection('Todos').deleteOne({text: 'Learn to let go.'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete.
    database.collection('Todos').findOneAndDelete({text: 'Use your time wisely.'}).then((result) => {
        console.log(result); // The result is document which is returned after being deleted.
    });
     //db.close();
 });  // The first arg is the url to connect to. (In real life, it's gonna be a web server).
