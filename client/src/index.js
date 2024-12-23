import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root and render the App component
const root = createRoot(rootElement);
root.render(<App />);
