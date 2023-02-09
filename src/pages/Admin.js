import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function AdminPage() {

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };


    return (



        <div><button onClick={logout}>Logout</button></div>

    );
}