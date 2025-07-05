
import React from "react";

function Favorites({ favorites }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>❤️ Favorite Recommendations</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
