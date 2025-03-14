import React from 'react'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import prevIconSvg from '../../assets/images/icon-previous.svg';
import nextIconSvg from '../../assets/images/icon-next.svg';

import img1 from '/product/image-product-1.jpg';
import img2 from '/product/image-product-2.jpg';
import img3 from '/product/image-product-3.jpg';
import img4 from '/product/image-product-4.jpg';

import styles from './productShowCase.module.scss'

interface Props {
  modal: boolean
}

export default function ProductShowCase(props: Props) {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const productImages = [img1, img2, img3, img4];

  const handleCarouselClick = () => {
    if (window.innerWidth > 991)
      setModalOpen(m => !m);
  }
  
  const prevIcon = (
    <Button className={`${styles.carouselIcon} ${props.modal ? "" : styles.modal}`}
    style={{left: props.modal ? "" : "-50%"}}
    >
      <img src={prevIconSvg} />
    </Button>
  );

  const nextIcon = (
    <Button className={`${styles.carouselIcon} ${props.modal ? "" : styles.modal}`}
      style={{right: props.modal ? "" : "-50%"}}
    >
      <img src={nextIconSvg} />
    </Button>
  );

  const addStyle = (condition: boolean) => {
    let style: React.CSSProperties = { opacity: ".5" };
    return (condition) ? style : undefined;
  };

  return (
    <Row className="py-md-4 px-lg-4 gap-2 gap-lg-4 flex-lg-column align-items-center">
      <Col xs>
        <Carousel fade slide={false} activeIndex={index}
          onSelect={selectedIndex => setIndex(selectedIndex)}
          prevIcon={prevIcon} nextIcon={nextIcon} indicators={false}
          onClick={handleCarouselClick}
          className="rounded-end-md-4 rounded-start-lg-4 w-100"
          style={{overflow: props.modal ? "hidden" : "visible"}}
        >
          {
            productImages.map((productImage, index) => {
              return <Carousel.Item key={index}>
                <img src={productImage} className="d-block w-100 mw-100" alt="Sneaker image 3" />
              </Carousel.Item>
            })
          }
        </Carousel>
      </Col>
      <div className={`d-none d-md-flex col-2 col-lg-12 flex-column flex-lg-row gap-2 p-4 
        ${styles.indicators} p-lg-0 gap-lg-4`}>
        <Button variant="none" onClick={() => setIndex(0)} style={addStyle(index == 0)}>
          <img src="/product/image-product-1-thumbnail.jpg" />
        </Button>
        <Button variant="none" onClick={() => setIndex(1)} style={addStyle(index == 1)}>
          <img src="/product/image-product-2-thumbnail.jpg" />
        </Button>
        <Button variant="none" onClick={() => setIndex(2)} style={addStyle(index == 2)}>
          <img src="/product/image-product-3-thumbnail.jpg" />
        </Button>
        <Button variant="none" onClick={() => setIndex(3)} style={addStyle(index == 3)}>
          <img src="/product/image-product-4-thumbnail.jpg" />
        </Button>
      </div>
      <div className={styles.modal}>
        <Modal show={props.modal && modalOpen} onHide={() => setModalOpen(false)} 
          className="p-3 p-md-2 p-lg-0" centered>
          <Modal.Header>
            <Button
              onClick={() => setModalOpen(false)}
              className="border-0 position-absolute end-0"
            ><img src="src/assets/images/icon-close.svg" /></Button>
          </Modal.Header>
          <Modal.Body>
            <ProductShowCase modal={false}/>
          </Modal.Body>
        </Modal>
      </div>
    </Row>
  )
}