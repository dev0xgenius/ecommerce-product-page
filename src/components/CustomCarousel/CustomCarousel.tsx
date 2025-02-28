import React from 'react'

export default function CustomCarousel() {
  return ( 
    <>
    <Col xs>
      <Carousel fade slide={false} activeIndex={index}
        onSelect={selectedIndex => setIndex(selectedIndex)}
        prevIcon={prevIcon} nextIcon={nextIcon} indicators={false}
        onClick={() => setModalOpen(m => !m)}
        className="rounded-end-md-4 rounded-start-lg-4 overflow-hidden w-100"
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
            className="d-block w-100 mw-100" alt="Sneaker image 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="src/assets/images/image-product-4.jpg"
            className="d-block w-100" alt="Sneaker image 4"
          />
        </Carousel.Item>
      </Carousel>
    </Col>
    <div className={`d-none d-md-flex col-2 col-lg-12 flex-column flex-lg-row gap-2 p-4 
      ${styles.indicators} p-lg-0 gap-lg-4`}>
      <Button variant="none" onClick={() => setIndex(0)} style={addStyle(index == 0)}>
        <img src="src/assets/images/image-product-1-thumbnail.jpg" />
      </Button>
      <Button variant="none" onClick={() => setIndex(1)} style={addStyle(index == 1)}>
        <img src="src/assets/images/image-product-2-thumbnail.jpg" />
      </Button>
      <Button variant="none" onClick={() => setIndex(2)} style={addStyle(index == 2)}>
        <img src="src/assets/images/image-product-3-thumbnail.jpg" />
      </Button>
      <Button variant="none" onClick={() => setIndex(3)} style={addStyle(index == 3)}>
        <img src="src/assets/images/image-product-4-thumbnail.jpg" />
      </Button>
    </div>
      </>
    )
}