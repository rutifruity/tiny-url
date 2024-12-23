import React, { useState } from "react";

const App = () => {
  const [longUrl, setLongUrl] = useState(""); // For the input URL
  const [shortUrl, setShortUrl] = useState(""); // For the shortened URL

  const handleShorten = async () => {
    try {
      // Sending the long URL to the backend for shortening
      const response = await fetch("http://localhost:3000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl }), // Send the long URL
      });

      const data = await response.json(); // Receive response from the backend
      setShortUrl(data.shortUrl); // Update the short URL
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "10px",
        }}
      />
      <br />
      <button
        onClick={handleShorten}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        Shorten
      </button>

      {shortUrl && (
        <div>
          <h2>Shortened URL:</h2>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
