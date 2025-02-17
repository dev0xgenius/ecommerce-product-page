import React from 'react'

const Header = () => {
  return (
    <header class="border-bottom border-secondary">
        <div class="container-xl">
          <nav class="navbar navbar-expand-md">
            <div class="container-fluid justify-content-start gap-3 p-4 py-2">
              <button class="menu-icon navbar-toggler border-0 shadow-none p-0" 
                type="button" data-bs-target="#menuNavbar" data-bs-toggle="offcanvas"
                aria-label="Toggle Navigation" aria-controls="menuNavbar"
              >
                <img src="src/assets/images/icon-menu.svg" width="20px" alt="menu icon" />
              </button>
              <div class="row align-items-md-start flex-md-row-reverse gap-md-4">
                <div class="offcanvas offcanvas-start p-4 w-75 col p-md-0" id="menuNavbar">
                  <button type="button" class="navbar-toggler border-0 mb-3" data-bs-target="#menuNavbar" 
                    data-bs-toggle="offcanvas" aria-label="close" aria-controls="menuNavbar"
                  >
                    <img src="src/assets/images/icon-close.svg" width="20px" alt="close icon" />
                  </button>
                  <div class="offcanvas-body">
                    <ul class="nav navbar-nav">
                      <li class="nav-item"><a href="#" class="nav-link">Collections</a></li>
                      <li class="nav-item"><a href="#" class="nav-link">Men</a></li>
                      <li class="nav-item"><a href="#" class="nav-link">Women</a></li>
                      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                      <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <h1 class="fw-bolder navbar-brand col-md-auto m-0">sneakers</h1>
              </div>
              <div class="profile-section row align-items-center gap-3 m-auto me-1">
                <button type="button" class="bg-transparent border-0 col" data-bs-target="#cartCard"
                  data-bs-toggle="collapse" aria-label="Toggle Cart Info" aria-controls="cartCard" 
                  aria-expanded="false"
                >
                  <img src="src/assets/images/icon-cart.svg" width="24px" alt="cart icon" />
                </button>
                <a class="avatar col" href="#" role="button" data-bs-target="#cartCard" data-bs-toggle="collapse"
                  aria-label="Toggle cart info" aria-controls="cartCard" aria-expanded="false"
                >
                  <div class="container-fluid">
                    <img src="src/assets/images/image-avatar.png" width="100%" alt="user avatar" />
                  </div>
                </a>
                <div class="collapse position-absolute w-100 z-3" id="cartCard">
                    <div class="container-fluid p-2 h-100">
                      <div class="card shadow-lg rounded-4 border-0">
                        <h6 class="card-header bg-transparent p-4">Cart</h6>
                        <div class="card-body d-flex justify-content-center text-center">
                          <p class="card-text fw-bolder align-self-center text-secondary">Your cart is empty.</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Header