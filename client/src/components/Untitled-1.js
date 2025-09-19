const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to read JSON body
app.use(express.json());

// GET route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API server!" });
});

// POST route
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




import React, { useEffect, useState } from "react";

function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{msg}</p>
    </div>
  );
}

export default Home;

