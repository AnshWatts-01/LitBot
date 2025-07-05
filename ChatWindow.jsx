
import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function ChatWindow({ addToFavorites }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) {
      setError("⚠️ Please enter a message.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await axios.post("http://localhost:5000/api/recommend", { message });

      if (res.data?.reply) {
        setResponse(res.data.reply);
      } else {
        setError("⚠️ LitBot did not return a valid response.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <textarea
        rows="3"
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          resize: "none",
        }}
        placeholder="Ask LitBot about books..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        onClick={sendMessage}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#1a73e8",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {loading ? "⏳ Thinking..." : "Send"}
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {response && (
        <div style={{ marginTop: "20px" }}>
          <BookCard text={response} addToFavorites={addToFavorites} />
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
