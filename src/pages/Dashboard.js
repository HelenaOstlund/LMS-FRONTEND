import { Link } from "react-router-dom";

export default function Dashboard() {

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/Library">to Library</Link>

            <button
                onClick={logout}
            >
                Logout
            </button>

        </div>
    )
}