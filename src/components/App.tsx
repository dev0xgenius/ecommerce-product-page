import React from 'react'

export default function App() {
  return (
    <div class="container-sm position-relative">
      <main>
        <div class="container-sm d-lg-flex align-items-center justify-content-between">
          <div class="carousel carousel-fade row flex-md-row-reverse flex-lg-column-reverse p-lg-5 gap-4" id="productDisplay">
            <div class="carousel-indicators d-md-flex flex-md-column flex-lg-row col justify-content-md-center 
              justify-content-lg-between col-md-2 col-lg-12 py-md-5 p-lg-0 gap-0 gap-lg-1">
              <button class="active" type="button" data-bs-target="#productDisplay" 
                data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"
              >
                <img src="src/assets/images/image-product-1-thumbnail.jpg" alt="Product 1"/>
              </button>
              <button type="button" data-bs-target="#productDisplay" data-bs-slide-to="1" aria-label="Slide 2">
                <img src="src/assets/images/image-product-2-thumbnail.jpg" alt="Product 1"/>
              </button>
              <button type="button" data-bs-target="#productDisplay" data-bs-slide-to="2" aria-label="Slide 3">
                <img src="src/assets/images/image-product-3-thumbnail.jpg" alt="Product 1"/>
              </button>
              <button type="button" data-bs-target="#productDisplay" data-bs-slide-to="3" aria-label="Slide 4">
                <img src="src/assets/images/image-product-4-thumbnail.jpg" alt="Product 1"/>
              </button>
            </div>
            <div class="carousel-inner p-0 col">
              <div class="carousel-item active">
                <img src="src/assets/images/image-product-1.jpg" class="d-block w-100" alt="Sneaker image 1" />
              </div>
              <div class="carousel-item">
                <img src="src/assets/images/image-product-2.jpg" class="d-block w-100" alt="Sneaker image 2" />
              </div>
              <div class="carousel-item">
                <img src="src/assets/images/image-product-3.jpg" class="d-block w-100" alt="Sneaker image 3" />
              </div>
              <div class="carousel-item">
                <img src="src/assets/images/image-product-4.jpg" class="d-block w-100" alt="Sneaker image 4" />
              </div>
            </div>
            <button class="carousel-control-prev ps-4 d-md-none" type="button" 
              data-bs-target="#productDisplay" data-bs-slide="prev"
            >
              <div class="wrapper">
                <span aria-hidden="true">
                  <img src="src/assets/images/icon-previous.svg" width="12px" alt="previous" />
                </span>
                <span class="visually-hidden">Previous</span>
              </div>
            </button>
            <button class="carousel-control-next pe-4 d-md-none" type="button" 
              data-bs-target="#productDisplay" data-bs-slide="next"
            >
              <div class="wrapper">
                <span aria-hidden="true">
                  <img src="src/assets/images/icon-next.svg" width="12px" alt="next" />
                </span>
                <span class="visually-hidden">Previous</span>
              </div>
            </button>
          </div>
          <div class="content p-4 container-sm">
            <div class="text row flex-column gap-2">
              <span class="pretext">Sneaker Company</span>
              <h1 class="fw-bolder">Fall Limited Edition Sneakers</h1>
              <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
              </p>
            </div>
            <div class="pricing container-fluid row gap-4 mt-2">
              <div class="price row justify-content-between align-items-center flex-lg-column align-items-lg-start">
                <div class="col-5 d-flex align-items-center gap-2">
                  <span class="h1 fw-bolder">$125.00</span>
                  <span class="badge bg-black h-auto">50%</span>
                </div>
                <span class="col-5 text-decoration-line-through text-secondary fw-bolder text-end text-lg-start">$250.00</span>
              </div>
              <form class="cart-form row gap-2" action="#">
                <div class="counter col-12 col-sm-4">
                  <div class="container-fluid">
                    <button type="button" data-bs-action="minus">
                      <img src="src/assets/images/icon-minus.svg" alt="minus symbol" />
                    </button>
                    <input type="number" min="0" value="0" />
                    <button type="button" data-bs-action="add">
                      <img src="src/assets/images/icon-plus.svg" alt="plus symbol" />
                    </button>   
                  </div>
                </div>
                <button type="submit" class="col border-0 bg-primary text-black text-center fw-bolder p-3 rounded-3 shadow-lg">
                  <div class="container-fluid">
                    <span class="align-top">
                      <img src="src/assets/images/icon-cart.svg" width="16px" alt="cart image" />
                    </span>
                    <span class="ms-2">Add to cart</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer class="attribution small text-center p-4">
        <div class="wrapper">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </div>
  )
};