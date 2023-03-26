import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  if (query.content === "books") {
    // Return array of book objects
    const books = [
      { id: 1, name: "Book 1", author: "Author 1" },
      { id: 11, name: "Book 2", author: "Author 2" },
      { id: 111, name: "Book 3", author: "Author 3" },
    ];
    res.status(200).json(books);
  } else if (query.content === "movies") {
    // Return array of movie objects
    const movies = [
      { id: 1, name: "Movie 1", director: "Director 1" },
      { id: 11, name: "Movie 2", director: "Director 2" },
      { id: 111, name: "Movie 3", director: "Director 3" },
    ];
    res.status(200).json(movies);
  } else {
    // Return error if content parameter is missing or invalid
    res.status(400).json({ message: "Invalid content parameter" });
  }
}
