import { useState, useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import Badge from 'react-bootstrap/Badge'
import CartTracker from '../CartTracker/CartTracker.tsx'
import { CartState } from '../App.tsx'

import cartIcon from '../../assets/images/icon-cart.svg';
import userAvatar from '../../assets/images/image-avatar.png';
import styles from './profile.module.scss'

export default function Profile() {
  const { numberOfProducts } = useContext(CartState);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  return (
    <Row className="align-items-center gap-3 m-auto me-1 position-sm-relative"
      onClick={toggleCart} onMouseLeave={() => setIsCartOpen(false)}
    >
      <Button className="bg-transparent border-0 col p-0 position-relative" 
        aria-controls="cartCard" aria-expanded={isCartOpen}
      >
        <img src={cartIcon} width="24px" alt="cart icon" />
        <Badge className="rounded-pill text-center px-2" style={{
            display: numberOfProducts > 0 ? "inline-block" : "none",
            position: "absolute", top: "-50%", left: "25%",
            fontSize: "0.618rem",
          }}
        >
          { numberOfProducts }
        </Badge>
      </Button>
      <Button className={`col p-0 bg-transparent rounded-circle ${styles.avatar}`}
        aria-controls="cartCard" aria-expanded={isCartOpen}
      >
        <img src={userAvatar} width="100%" alt="user avatar" />
      </Button>
      <Collapse className={`position-absolute w-100 z-3 ${styles.cart}`} in={isCartOpen}>
        <div id="cartCard">
          <CartTracker />
        </div>
      </Collapse>
    </Row>
  )
}