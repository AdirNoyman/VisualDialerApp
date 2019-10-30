import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';


export default class NavBar extends Component {

    render() {

        // const navMenu = document.querySelector(".navbar-toggler-icon");
        // if (navMenu) { console.log("is here") };

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
                            <a className="nav-link" href="/dogs" data-toggle="collapse" data-target=".navbar-collapse.show">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services" data-toggle="collapse" data-target=".navbar-collapse.show">שירותים נוספים</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#passwords" data-toggle="collapse" data-target=".navbar-collapse.show">סיסמאות</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#citrix" data-toggle="collapse" data-target=".navbar-collapse.show">Citrix  סביבת</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#as400" data-toggle="collapse" data-target=".navbar-collapse.show">AS400 כוכב</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goodHead" data-toggle="collapse" data-target=".navbar-collapse.show">"חברת "ראש טוב</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#doctors" data-toggle="collapse" data-target=".navbar-collapse.show">רופאים עצמאיים</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#docLine" data-toggle="collapse" data-target=".navbar-collapse.show">קו לרופא</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pay" data-toggle="collapse" data-target=".navbar-collapse.show">זכאות</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#teleRadio" data-toggle="collapse" data-target=".navbar-collapse.show">טלרדיולוגיה</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sap" data-toggle="collapse" data-target=".navbar-collapse.show">SAP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#equipment" data-toggle="collapse" data-target=".navbar-collapse.show">ציוד קצה</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#telephone" data-toggle="collapse" data-target=".navbar-collapse.show">תקשורת וטלפוניה</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#stations" data-toggle="collapse" data-target=".navbar-collapse.show">עמדות שירות</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#suppliers" data-toggle="collapse" data-target=".navbar-collapse.show">ספקים</a>
                        </li>

                    </ul>
                </div>
            </nav>
        );

    }
}
