require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.at6fufe.mongodb.net/?retryWrites=true&w=majority`;

const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }

const client = new MongoClient(uri, options);

module.exports = {
    connect: ()=> client.connect() 
}



