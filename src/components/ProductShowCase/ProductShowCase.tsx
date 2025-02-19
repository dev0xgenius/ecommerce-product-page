import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
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
    <Carousel fade slide={true} activeIndex={index} 
      onSelect={selectedIndex => setIndex(selectedIndex)}
      prevIcon={prevIcon} nextIcon={nextIcon}
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
  )
}