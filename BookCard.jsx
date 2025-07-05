
import React from "react";

function BookCard({ text, addToFavorites }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      backgroundColor: "#f9f9f9"
    }}>
      <p>{text}</p>
      <button onClick={() => addToFavorites(text)} style={{
        marginTop: "10px",
        padding: "5px 15px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        ❤️ Save to Favorites
      </button>
    </div>
  );
}

export default BookCard;
