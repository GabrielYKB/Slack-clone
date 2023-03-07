import React from "react";
import "./Message.css";
export default function Message({ message }) {
  return (
    <div className="message-container">
      <img
        src={message.user.image}
        alt=""
        style={{ height: "50px", width: "50px", borderRadius: "46%" }}
      />
      <div>
        <div className="message-header">
          <h3>{message.user.name}</h3>
          <p>
            {new Date(message.createdAt).getHours()}:
            {new Date(message.createdAt).getMinutes()}
          </p>
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  );
}
