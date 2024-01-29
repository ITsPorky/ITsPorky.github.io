import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-dark fixed-top navbar-expand-lg header">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              Style="max-width: 80px"
              src="\assets\images\Wade-Walsh-logo-white-no-bg.png"
              alt="Wade Walsh"
            />
          </a>
          <button
            class="navbar-toggler"
            Style="z-index: 999;"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav navbar-nav-scroll fw-bold">
              <a
                class="nav-link  px-3"
                aria-current="page"
                href="#About"
                >01. About</a>
              <a class="nav-link  px-3" href="#Experience"
                >02. Experience</a>
              <a class="nav-link  px-3" href="#Projects"
                >03. Projects</a>
              <a class="nav-link  px-3" href="#Contact"
                >04. Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
