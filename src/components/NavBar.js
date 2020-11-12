// import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';


export default function NavBar() {
    return (
        <div className="App">
            <nav>
                <div className="container">
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul >
                </div >
            </nav >
        </div >
    );
}
