import React from 'react'

export default function Navbar() {
  return (
    <header className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-light px-5 wrapper">
          <div className="container-fluid">
            <div className="logo">
              <a className="navbar-brand" href="/">
                SoSo
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav gap-lg-4">
                <a className="nav-link" href="/">
                  Daily Health
                </a>
                <a className="nav-link" href="/">
                  Weight Loss
                </a>
                <a className="nav-link" href="/">
                  Skin
                </a>
                <a className="nav-link" href="/">
                  Hair
                </a>
                <a className="nav-link" href="/">
                  Blogs
                </a>
              </div>
              <div className="navbar-nav nav-right gap-lg-2">
                <a className="nav-link" href="/">
                  <span className="material-symbols-sharp">search</span>
                </a>
                <a className="nav-link" href="/">
                  <span className="material-symbols-sharp">account_circle</span>
                </a>
                <a className="nav-link" href="/">
                  <span className="material-symbols-sharp">shopping_bag</span>
                </a>
                <button className="btn btn-dark">Take a quiz</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}
