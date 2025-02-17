import React from 'react'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

const ProductInfo = () => {
  return (
    <Container fluid="sm" className="content p-4">
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
            <Container fluid>
              <button type="button" data-bs-action="minus">
                <img src="src/assets/images/icon-minus.svg" alt="minus symbol" />
              </button>
              <input type="number" min="0" value="0" />
              <button type="button" data-bs-action="add">
                <img src="src/assets/images/icon-plus.svg" alt="plus symbol" />
              </button>   
            </Container>
          </div>
          <button type="submit" className="col border-0 bg-primary text-black text-center fw-bolder p-3 rounded-3 shadow-lg">
            <Container fluid>
              <span className="align-top">
                <img src="src/assets/images/icon-cart.svg" width="16px" alt="cart image" />
              </span>
              <span className="ms-2">Add to cart</span>
            </Container>
          </button>
        </form>
      </div>
    </Container>
  )
}

export default ProductInfo