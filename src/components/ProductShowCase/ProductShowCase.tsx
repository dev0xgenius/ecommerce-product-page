import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ProductShowCase (){
  return (
    <Carousel fade slide={true}>
      <Carousel.Item>
          <img src="src/assets/images/image-product-1.jpg" 
            className="d-block w-100" alt="Sneaker image 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="src/assets/images/image-product-2.jpg" 
            className="d-block w-100" alt="Sneaker image 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="src/assets/images/image-product-3.jpg" 
            className="d-block w-100" alt="Sneaker image 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="src/assets/images/image-product-4.jpg" className="d-block w-100" alt="Sneaker image 4" />
        </Carousel.Item>
    </Carousel>
  )
}