import React, { useState } from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ACN <i className="fa-solid fa-badger-honey"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}
