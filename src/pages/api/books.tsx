import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  console.log(
    req.method,
    "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
  );

  const client = await MongoClient.connect(
    "mongodb+srv://ahmadafzal1440:4blWBoGW275mJxSd@cluster0.isagwgc.mongodb.net/theMongoDBCollectionByMac?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collection = db.collection("books");
  if (req.method === "POST") {
    const data = req.body;
    const result = await collection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "success from BE" });
  }
  //GET method
  else if (req.method === "GET") {
    const result = await collection.find().toArray();
    res.status(201).json({ ...result });
    client.close();
  } else if (req.method === "DELETE") {
    console.log("DELETEE");

    const result = await collection.deleteOne({ query });
    if (result.deletedCount === 1) {
      console.log("Document deleted successfully.");
    } else {
      console.log("Document not found.");
    }
    res.status(204).json({ message: "DELETTTTTed" });
    client.close();
  }

  // Return error if content parameter is missing or invalid
  res.status(400).json({ message: "Invalid content parameter" });
}
