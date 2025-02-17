import React from 'react'

export default function App() {
  return (
    <div classNameName="container-sm position-relative">
      <main>
        <div className="container-sm d-lg-flex align-items-center justify-content-between">
          <div className="carousel carousel-fade row flex-md-row-reverse flex-lg-column-reverse p-lg-5 gap-4" id="productDisplay">
            <div className="carousel-indicators d-md-flex flex-md-column flex-lg-row col justify-content-md-center 
              justify-content-lg-between col-md-2 col-lg-12 py-md-5 p-lg-0 gap-0 gap-lg-1">
              <button className="active" type="button" data-bs-target="#productDisplay" 
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
            <div className="carousel-inner p-0 col">
              <div className="carousel-item active">
                <img src="src/assets/images/image-product-1.jpg" className="d-block w-100" alt="Sneaker image 1" />
              </div>
              <div className="carousel-item">
                <img src="src/assets/images/image-product-2.jpg" className="d-block w-100" alt="Sneaker image 2" />
              </div>
              <div className="carousel-item">
                <img src="src/assets/images/image-product-3.jpg" className="d-block w-100" alt="Sneaker image 3" />
              </div>
              <div className="carousel-item">
                <img src="src/assets/images/image-product-4.jpg" className="d-block w-100" alt="Sneaker image 4" />
              </div>
            </div>
            <button className="carousel-control-prev ps-4 d-md-none" type="button" 
              data-bs-target="#productDisplay" data-bs-slide="prev"
            >
              <div className="wrapper">
                <span aria-hidden="true">
                  <img src="src/assets/images/icon-previous.svg" width="12px" alt="previous" />
                </span>
                <span className="visually-hidden">Previous</span>
              </div>
            </button>
            <button className="carousel-control-next pe-4 d-md-none" type="button" 
              data-bs-target="#productDisplay" data-bs-slide="next"
            >
              <div className="wrapper">
                <span aria-hidden="true">
                  <img src="src/assets/images/icon-next.svg" width="12px" alt="next" />
                </span>
                <span className="visually-hidden">Previous</span>
              </div>
            </button>
          </div>
          <div className="content p-4 container-sm">
            <div className="text row flex-column gap-2">
              <span className="pretext">Sneaker Company</span>
              <h1 className="fw-bolder">Fall Limited Edition Sneakers</h1>
              <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
              </p>
            </div>
            <div className="pricing container-fluid row gap-4 mt-2">
              <div className="price row justify-content-between align-items-center flex-lg-column align-items-lg-start">
                <div className="col-5 d-flex align-items-center gap-2">
                  <span className="h1 fw-bolder">$125.00</span>
                  <span className="badge bg-black h-auto">50%</span>
                </div>
                <span className="col-5 text-decoration-line-through text-secondary fw-bolder text-end text-lg-start">$250.00</span>
              </div>
              <form className="cart-form row gap-2" action="#">
                <div className="counter col-12 col-sm-4">
                  <div className="container-fluid">
                    <button type="button" data-bs-action="minus">
                      <img src="src/assets/images/icon-minus.svg" alt="minus symbol" />
                    </button>
                    <input type="number" min="0" value="0" />
                    <button type="button" data-bs-action="add">
                      <img src="src/assets/images/icon-plus.svg" alt="plus symbol" />
                    </button>   
                  </div>
                </div>
                <button type="submit" className="col border-0 bg-primary text-black text-center fw-bolder p-3 rounded-3 shadow-lg">
                  <div className="container-fluid">
                    <span className="align-top">
                      <img src="src/assets/images/icon-cart.svg" width="16px" alt="cart image" />
                    </span>
                    <span className="ms-2">Add to cart</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="attribution small text-center p-4">
        <div className="wrapper">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </div>
  )
};