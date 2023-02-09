import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <div class="content">
            <h1>Welcome to HERO Dashboard</h1>
            <div><button><Link to="/Library">to Library</Link></button></div>
            <br></br>
            <div><button onClick={logout}>Logout</button></div>
        </div>
    )
}