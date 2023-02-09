import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError("username and password required!");
        } else if (password.length < 4) {
            setError("Password too short")
        } else { }

        const data = { username, password };
        axios
            .post("http://localhost:8080/api/v1/auth/register", data)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                setIsSignedIn(true)
            })
            .catch((err) =>
                console.log(err));
    }
    if (isSignedIn) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div class="content">
            <div>
                <h1>Register at HERO Library</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div>
                            <label
                                htmlFor="username"
                            >
                                Username
                            </label>
                        </div>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>
                            <label
                                htmlFor="password"
                            >
                                Password
                            </label>
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <div>
                        <button
                            type="submit"
                        >register
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}