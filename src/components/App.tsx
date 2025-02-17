import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './Header/Header.tsx'
import ProductShowCase from './ProductShowCase/ProductShowCase.tsx'
import ProductInfo from './ProductInfo/ProductInfo.tsx'

export default function App() {
  return (
    <Container fluid="sm" className="position-relative">
      <Header />
      <main>
        <Container fluid="sm" className="d-lg-flex align-items-center justify-content-between">
          <ProductShowCase />
          <ProductInfo />
        </Container>
      </main>
      <footer className="attribution small text-center p-4">
        <div className="wrapper">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </Container>
  )
};