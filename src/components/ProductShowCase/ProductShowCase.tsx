import React from 'react'

const ProductShowCase = () => {
  return (
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
  )
}

export default ProductShowCase