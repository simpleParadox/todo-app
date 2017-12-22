// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Using object destructuring feature of ES6.

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/',(err,db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server.");

    const database = db.db('test');
    // database.collection('Todos').find({_id:ObjectID("5a3b664a65290d3aa4a26bd7")}).toArray().then((docs)=>{ // toArray()  return an ES6 promise.
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     // This executes if something fails.
    //     console.log("Unable to fetch todos.",err);
    // });   // find() returns the cursor to the collection.

    // database.collection('Users').find({name:'Rohan'}).count().then((count)=>{ // toArray()  return an ES6 promise.
    //     console.log(`Count: ${count}`);
    // }, (err) =>{
    //     // This executes if something fails.
    //     console.log("Unable to fetch todos.",err);
    // });   // find() returns the cursor to the collection.
    database.collection('Users').find({name:'Hannah'}).count().then((count) =>{
        console.log(`Count: ${count}`);
    }, (err) =>{
        console.log('Unable to fetch count.');
    });
     //db.close();
 });  // The first arg is the url to connect to. (In real life, it's gonna be a web server).
