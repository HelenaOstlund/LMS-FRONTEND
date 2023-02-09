
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ProtectetRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Register from './pages/Register';
import "./style.css"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectetRoute><Dashboard /></ProtectetRoute>} />
        <Route path="/library" element={<ProtectetRoute><Library /></ProtectetRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
