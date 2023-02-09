import React from "react";

export default function Library() {

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    function getBooks() {
        document.getElementById('output').innerHTML = "";
        fetch("http://openlibrary.org/search.json?q="
            + document.getElementById("input").value)
            .then(a => a.json())
            .then(response => {
                for (var i = 0; i < response.docs.length; i++) {
                    document.getElementById("output").innerHTML += "<h2>"
                        + response.docs[i].title + "</h2>"
                        + response.docs[i].author_name[0]
                        + "<br><img src='http://covers.openlibrary.org/b/isbn/"
                        + response.docs[i].isbn[0]
                        + "-M.jpg'><br>";
                }
            });
    }

    return (
        <div>
            <div>
                <h1>Library</h1>
                <input id="input" type="text"></input>
                <button onClick={getBooks}>Get Books</button>
                <div id="output"></div>
            </div>

            <button
                onClick={logout}
            >
                Logout
            </button>

        </div>
    );
}