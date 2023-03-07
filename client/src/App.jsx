import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Channel from "./views/Channel";
export default function App() {
  const [name, setName] = useState("");

  return (
    <div className="main-container">
      {name ? (
        <>
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<div className="chat-section">chat section</div>}
            />
            <Route path="/:id" element={<Channel />} />
          </Routes>
        </>
      ) : (
        <div>
          <h1>Välkommen till min Slack-clon</h1>
          <button onClick={() => setName("Gabriel")}>Login as {name}</button>
        </div>
      )}
    </div>
  );
}
