const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://srpp-user-igti:01201073@grades.vi901.mongodb.net/grades?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(async (err) => {
  const collection = client.db("grades").collection("students");
  const documents_1 = await collection.find().toArray();

  const documents_2 = await collection.find({subject: "Matematica"}).toArray();

  console.log(documents_1);
  console.log(documents_2);

  const databaseList = await client.db().admin().listDatabases();
  console.log("Databases : ");
  databaseList.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });
  // perform actions on the collection object
  client.close();
});
