import React from 'react'
import Container from "react-bootstrap/Container"

const Header = () => {
  return (
    <header className="border-bottom border-secondary">
      <Container>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid justify-content-start gap-3 p-4 py-2">
            <button className="menu-icon navbar-toggler border-0 shadow-none p-0" 
              type="button" data-bs-target="#menuNavbar" data-bs-toggle="offcanvas"
              aria-label="Toggle Navigation" aria-controls="menuNavbar"
            >
              <img src="src/assets/images/icon-menu.svg" width="20px" alt="menu icon" />
            </button>
            <div className="row align-items-md-start flex-md-row-reverse gap-md-4">
              <div className="offcanvas offcanvas-start p-4 w-75 col p-md-0" id="menuNavbar">
                <button type="button" className="navbar-toggler border-0 mb-3" data-bs-target="#menuNavbar" 
                  data-bs-toggle="offcanvas" aria-label="close" aria-controls="menuNavbar"
                >
                  <img src="src/assets/images/icon-close.svg" width="20px" alt="close icon" />
                </button>
                <div className="offcanvas-body">
                  <ul className="nav navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">Collections</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Men</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Women</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                  </ul>
                </div>
              </div>
              <h1 className="fw-bolder navbar-brand col-md-auto m-0">sneakers</h1>
            </div>
            <div className="profile-section row align-items-center gap-3 m-auto me-1">
              <button type="button" className="bg-transparent border-0 col" data-bs-target="#cartCard"
                data-bs-toggle="collapse" aria-label="Toggle Cart Info" aria-controls="cartCard" 
                aria-expanded="false"
              >
                <img src="src/assets/images/icon-cart.svg" width="24px" alt="cart icon" />
              </button>
              <a className="avatar col" href="#" role="button" data-bs-target="#cartCard" data-bs-toggle="collapse"
                aria-label="Toggle cart info" aria-controls="cartCard" aria-expanded="false"
              >
                <div className="container-fluid">
                  <img src="src/assets/images/image-avatar.png" width="100%" alt="user avatar" />
                </div>
              </a>
              <div className="collapse position-absolute w-100 z-3" id="cartCard">
                  <div className="container-fluid p-2 h-100">
                    <div className="card shadow-lg rounded-4 border-0">
                      <h6 className="card-header bg-transparent p-4">Cart</h6>
                      <div className="card-body d-flex justify-content-center text-center">
                        <p className="card-text fw-bolder align-self-center text-secondary">Your cart is empty.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header