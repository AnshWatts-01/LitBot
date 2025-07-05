
import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Favorites from "./Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (text) => {
    setFavorites((prev) => [...prev, text]);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>📚 LitBot – AI Book Recommender</h1>
      <ChatWindow addToFavorites={addToFavorites} />
      <Favorites favorites={favorites} />
    </div>
  );
}

export default App;
