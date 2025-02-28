import React from 'react'
import Container from 'react-bootstrap/Container'
import ProductShowCase from './ProductShowCase/ProductShowCase.tsx'
import ProductInfo from './ProductInfo/ProductInfo.tsx'
import Header from './Header/Header.tsx'

import { useState, createContext } from 'react'

export const CartState = createContext({
  numberOfProducts: 0,
  handleCartUpdate: (updatedCartNumber: number):void => {}
});

export default function App() {
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const handleCartUpdate = (updatedCartNumber: number, reset: boolean=false) => {
    setNumberOfProducts(currentNumber => {
      if (!reset) updatedCartNumber = updatedCartNumber + currentNumber;
      return updatedCartNumber;
    });
  }
  
  return (
    <CartState.Provider value={{numberOfProducts, handleCartUpdate}}>
      <Container fluid="xl" className="position-relative">
        <Header />
        <main>
          <Container fluid className="d-lg-flex align-items-center justify-content-between 
            py-lg-2 p-xl-5 gap-xl-5">
            <ProductShowCase modal={true}/>
            <ProductInfo />
          </Container>
        </main>
        <footer className="attribution small text-center p-4">
          <Container fluid>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> 
            Frontend Mentor</a>. Coded by <a href="#">Your Name Here</a>.
          </Container>
        </footer>
      </Container>
     </CartState.Provider>
  )
};