import express, { Request, Response, Application } from "express";
import { shortenUrl } from "./utils";

const app: Application = express();

app.use(express.json());

const urlDB = new Map<string, string>();

interface URLRequestBody {
  originalURL: string;
}

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.post("/shorten", (req: any, res: any) => {
  const originalURL = req.body.originalURL;

  if (!originalURL) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  const shortURL = shortenUrl(originalURL);
  urlDB.set(shortURL, originalURL);

  res.status(200).json({
    message: `Received URL: ${originalURL}. New shortedURL is: http://localhost:3000/${shortURL}`,
  });
});

app.get("/:shortURL", (req, res) => {
  const shortURL = req.params.shortURL;

  const originalURL = urlDB.get(shortURL);

  if (!originalURL) {
    res.status(400).json({ message: "There was no value for the short url" });
  } else {
    res.redirect(originalURL);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
