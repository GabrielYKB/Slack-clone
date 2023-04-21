import React, { useState, useEffect } from "react";
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
                            element={
                                <div className="chat-section">chat section</div>
                            }
                        />
                        <Route
                            path="/:id"
                            element={<Channel username={name} />}
                        />
                    </Routes>
                </>
            ) : (
                <div className="welcome">
                    <h1>Välkommen till min Slack-clon</h1>
                    <button onClick={() => setName("Guest")}>
                        Login as Guest
                    </button>
                </div>
            )}
        </div>
    );
}
