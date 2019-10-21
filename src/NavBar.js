import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand" to="/dogs">
                    מרכז תמיכה - נתב ויזואלי
                </NavLink>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/dogs">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#as400">AS400</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#clicks">CLICKS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#doctors">רופאים עצמאיים</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );

    }
}
