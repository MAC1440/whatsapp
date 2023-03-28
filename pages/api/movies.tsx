import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  const movies = [
    { id: 1, name: "Movie 1", director: "Director 1" },
    { id: 11, name: "Movie 2", director: "Director 2" },
    { id: 111, name: "Movie 3", director: "Director 3" },
  ];
  res.status(200).json(movies);

  res.status(400).json({ message: "Invalid content parameter" });
}
