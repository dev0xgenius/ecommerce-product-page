import React from 'react'
import { useState } from 'react'
import Container from'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import CartTracker from '../CartTracker/CartTracker.tsx'
import styles from './profile.module.scss'

export default function Profile() {
  const [cartIsOpen, setCartIsOpen] = useState<bool>(false);
  const toggleCart = () => setCartIsOpen(!cartIsOpen);
  
  return (
    <Row className="profile-section align-items-center gap-3 m-auto me-1">
      <Button className="bg-transparent border-0 col p-0" aria-controls="cartCard"
        aria-expanded={cartIsOpen} onClick={toggleCart}
      >
        <img src="src/assets/images/icon-cart.svg" width="24px" alt="cart icon" />
      </Button>
      <Button className="avatar col p-0 bg-transparent border-0" aria-controls="cartCard"
        aria-expanded={cartIsOpen} onClick={toggleCart}
      >
        <img src="src/assets/images/image-avatar.png" width="32px" alt="user avatar" />
      </Button>
      <Collapse className={`position-absolute w-100 z-3 ${styles.cart}`} in={cartIsOpen}>
        <div id="cartCard">
          <CartTracker items={3}/>
        </div>
      </Collapse>
    </Row>
  )
}