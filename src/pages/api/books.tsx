import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

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

    try {
      const result = await collection.deleteOne({
        _id: new ObjectId(query._id as string),
      });
      console.log("res", result);
      res.status(201).json({ message: "DELETTTTTed" });
    } catch {
      (err: any) => console.log(err);
      res.status(400).json({ message: "ni hua" });
    }
    client.close();
  }

  // Return error if content parameter is missing or invalid
  res.status(400).json({ message: "Invalid content parameter" });
}
