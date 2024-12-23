"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const urlDB = new Map();
app.get("/", (req, res) => {
    res.json({ message: "hello" });
});
app.post("/shorten", (req, res) => {
    const originalURL = req.body.originalURL;
    if (!originalURL) {
        return res.status(400).json({ error: "Original URL is required" });
    }
    const shortURL = (0, utils_1.shortenUrl)(originalURL);
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
    }
    else {
        res.redirect(originalURL);
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map