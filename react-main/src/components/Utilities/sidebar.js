import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faImages,
  faInfoCircle,
  faQuestionCircle,
  faHouse,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SidebarB = () => {
  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </div>
      <nav
        id="sidebar"
        className="border-end d-none d-sm-block"
        style={{ position: "fixed", height: "100%" }}
      >
        <div className="p-2">
          <div className="text-center">
            <img
              src="../logo.png"
              width="50px"
              height="50px"
              className="mb-3"
            />
            <a href="../home" className="logo text-decoration-none ms-3">
              {" "}
            </a>
          </div>
          <div
            className="card mt-4 mb-4 shadow-sm border-0 p-2"
            style={{ backgroundColor: "#f8fafd" }}
          >
            <div className="card-body">
              <h3 className="h6 text-dark ms-1 mt-1 mb-2">
                <strong>
                  <small>CREDITS</small>
                </strong>
              </h3>
              <div className="progress" style={{ height: "5px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "15%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="card-text mt-2" style={{ color: "#1442eb" }}>
                15% monthly credit used
              </p>
            </div>
          </div>

          <div id="google_translate_element" />
          <ul className="list-unstyled components mb-1 ms-1">
            <NavLink
              to="/chat"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img className="mt-3 mb-3" src="chat.png" width="20px" />{" "}
                <span className="ms-2"> AI Chat</span>
              </li>
            </NavLink>
            <NavLink
              to="/text"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img
                  className="mt-3 mb-3"
                  src="dashboard-dark.png"
                  width="20px"
                />{" "}
                <span className="ms-2"> Tools Dashboard</span>
              </li>
            </NavLink>
            <NavLink
              to="/image"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img
                  className="mt-3 mb-3"
                  src="gallery-dark.png"
                  width="20px"
                />{" "}
                <span className="ms-1">Generate Images </span>
              </li>
            </NavLink>
            <NavLink
              to="/profile"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img className="mt-3 mb-3" src="user-dark.png" width="20px" />{" "}
                <span className="ms-1"> Profile Settings</span>
              </li>
            </NavLink>
          </ul>
          {/* <h3 className="h6 text-dark ms-1 mt-1 mb-2 text-center mt-3 mb-3"><strong><small>Imp Tools</small></strong></h3> */}
          <ul className="list-unstyled components mb-5">
            <NavLink
              to="/amazonproductdescription"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img
                  className="mt-3 mb-3"
                  src="https://img.icons8.com/color/144/null/amazon.png"
                  width="20px"
                />{" "}
                <span className="ms-2"> Amazon Product</span>
              </li>
            </NavLink>
            <NavLink
              to="/facebookadheadline"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img
                  className="mt-3 mb-3"
                  src="https://img.icons8.com/fluency/48/null/facebook-new.png"
                  width="20px"
                />{" "}
                <span className="ms-1">Facebook Adding</span>
              </li>
            </NavLink>
            <NavLink
              to="/emailsubjectlines"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img
                  className="mt-3 mb-3"
                  src="https://img.icons8.com/fluency/48/null/gmail.png"
                  width="20px"
                />{" "}
                <span className="ms-1"> Email Subject</span>
              </li>
            </NavLink>
            <NavLink
              to="/productname"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img
                  className="mt-3 mb-3"
                  src="https://img.icons8.com/fluency/96/null/new-product.png"
                  width="20px"
                />{" "}
                <span className="ms-1"> Product Name</span>
              </li>
            </NavLink>
            <NavLink
              to="/faqgenerator"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img
                  className="mt-3 mb-3"
                  src="https://img.icons8.com/fluency/96/null/faq.png"
                  width="20px"
                />{" "}
                <span className="ms-1"> FAQ Generator</span>
              </li>
            </NavLink>
            <NavLink
              to="/introparagraph"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li className="active ms">
                <img
                  className="mt-3 mb-3"
                  src="https://img.icons8.com/fluency/48/null/go.png"
                  width="20px"
                />{" "}
                <span className="ms-1"> Intro Paragraph</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarB;
