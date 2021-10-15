import React, { Component } from "react";

const PetNav = () => {
  return (
    // this is my comment
    <div className="PetNav">
      <nav class="Navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Furbook
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-
          controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Post
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pet
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Find friends..."
            />
            <button
              class="btn btn-outline-secondary my-2 my-sm-0"
              type="submit"
            >
              Sniff
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default PetNav;
