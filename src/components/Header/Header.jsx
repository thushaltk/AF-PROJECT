import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  let history = useHistory();

  const sendAdminLoginTrigger = () => {
    history.push("/admin-login");
  };
  const sendReviewerLoginTrigger = () => {
    history.push("/reviewer-login");
  };

  const userRegistrationNavigator = () => {
    history.push("/new-user");
  };

  const userLoginNavigator = () => {
    history.push("/user-login");
  };
  const sendEditorLoginTrigger = () => {
    history.push("/editor-login");
  };

  return (
    <nav
      style={{ padding: "20px 10px", width: "100%" }}
      className="navbar navbar-light navbar-expand-md custom-header"
    >
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand" to="/">
            ICAF2021
          </Link>
        </div>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="navbar-nav links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Keynotes{" "}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="dropdown-toggle nav-link"
                aria-expanded="false"
                data-toggle="dropdown"
                href="#"
              >
                For Authors
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" to="/papers">
                  Papers{" "}
                </Link>
                <a className="dropdown-item" href="#">
                  Call for Papers
                </a>
                <a className="dropdown-item" href="#">
                  Conference Tracks
                </a>
                <a className="dropdown-item" href="#">
                  Submission Guidelines
                </a>
                <a className="dropdown-item" href="#">
                  Important Dates
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="dropdown-toggle nav-link"
                aria-expanded="false"
                data-toggle="dropdown"
                href="#"
              >
                Workshops
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">
                  Workshops
                </a>
                <a className="dropdown-item" href="#">
                  Call for Workshops
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Special Sessions
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new-user">
                Registrations
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                Committee
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                Past Proceedings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                Programs
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="dropdown-toggle nav-link"
                aria-expanded="false"
                data-toggle="dropdown"
                href="#"
              >
                <i
                  style={{ fontSize: "30px" }}
                  className="icon ion-android-contacts"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <button
                  className="dropdown-item"
                  onClick={sendAdminLoginTrigger}
                >
                  Admin Login
                </button>
                <button
                  className="dropdown-item"
                  onClick={sendEditorLoginTrigger}
                >
                  Editor Login
                </button>
                <button
                  className="dropdown-item"
                  onClick={sendReviewerLoginTrigger}
                >
                  Reviewer Login
                </button>
                <button
                  className="dropdown-item"
                  onClick={userRegistrationNavigator}
                >
                  User Registration
                </button>
                <button className="dropdown-item" onClick={userLoginNavigator}>
                  User Login
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
