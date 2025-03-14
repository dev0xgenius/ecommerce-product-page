import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import deleteIconSvg from '../../assets/images/icon-delete.svg';

interface Props {
  items: number,
  onClearCartItems: (items: number) => void
}

export default function Cart ({ items, onClearCartItems }: Props) {
  return (
    <>
      <Row xs={3} className="align-items-center justify-content-between gap-0">
        <Col xs={2} as="span">
          <img src="/product/image-product-1-thumbnail.jpg" 
            width='100%' className='rounded-2'
          />
        </Col>
        <Col xs={8} className="p-2 d-flex flex-column align-items-start">
          <span className="h6 fw-normal">Fall Limited Edition Sneakers</span>
          <span>$125.00 x {items} <b>${125.00 * items}.00</b></span>
        </Col>
        <Col xs={1} onClick={() => onClearCartItems(0)}>
          <img src={deleteIconSvg} />
        </Col>
      </Row> 
      <Button className="p-3 fw-bold rounded-2">Checkout</Button>
    </>
  );
}