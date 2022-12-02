import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Header = (props) =>
{
    const [name, setName] = useState("header");

    useEffect(() => {
        setName("Palak");
      }, []);
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {name}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/about">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/signup">
                        Sign up
                    </Link>
                </li>
                </ul>
                <form className="d-flex" role="search">
                    <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                    Search
                    </button>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;