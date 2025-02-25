import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import styles from './productShowCase.module.scss'

export default function ProductShowCase (){
  const [index, setIndex] = useState(0);
  
  const prevIcon = ( 
    <Button className={styles.carouselIcon}>
      <img src="src/assets/images/icon-previous.svg" />
    </Button>
  );
  
  const nextIcon = (
    <Button className={styles.carouselIcon}>
      <img src="src/assets/images/icon-next.svg" />
    </Button>
  );
  
  return (
    <Row className="py-md-4 gap-2 align-items-center">
      <Col xs>
        <Carousel fade slide={true} activeIndex={index} 
          onSelect={selectedIndex => setIndex(selectedIndex)}
          prevIcon={prevIcon} nextIcon={nextIcon} indicators={false}
          className="rounded-end-md-4 overflow-hidden border-danger"
        >
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
            <img src="src/assets/images/image-product-4.jpg"
              className="d-block w-100" alt="Sneaker image 4"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <div className={`d-none d-md-flex col-2 flex-column gap-2 p-4 ${styles.indicators}`}>
        <Button variant="none">
          <img src="src/assets/images/image-product-1-thumbnail.jpg" />
        </Button>
        <Button variant="none">
          <img src="src/assets/images/image-product-2-thumbnail.jpg" />
        </Button>
        <Button variant="none">
          <img src="src/assets/images/image-product-3-thumbnail.jpg" />
        </Button>
        <Button variant="none">
          <img src="src/assets/images/image-product-4-thumbnail.jpg" />
        </Button>
      </div>
    </Row>
  )
}