const express = require("express");
require("dotenv").config();
var cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://shiekabsolin:@Sdali63207@cluster0.crjr6ok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const signInRouter = require("./views/auth/signinRouter");
const rgisterRouter = require("./views/auth/rgisterRouter");

// console.log(http);

const app = express();
const port = process.env.PORT;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(signInRouter);
app.use(rgisterRouter);

app.use("*", (req, res) => {
  res.status(404).json({ meassage: "Page Not Found" });
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, function () {
  console.log(`server is run ${port}`);
});
