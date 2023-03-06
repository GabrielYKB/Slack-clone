import React, { useEffect, useState } from "react";
import { Hash } from "react-feather";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function sidebar() {
    const { data: channels } = useQuery({
        queryKey: ["channels"],
        queryFn: () =>
            fetch("http://localhost:3000/channels").then((data) => data.json()),
    });

    return (
        <div className="main-container">
            <div className="sidebar">
                <h1 className="sidebar-header">Victor Andersson</h1>
                {channels
                    ? channels.map((channel) => (
                          <Link to={`/${channel._id}`} className="sidebar-row">
                              <Hash />
                              {channel.name}
                          </Link>
                      ))
                    : "Loading..."}
            </div>
        </div>
    );
}
