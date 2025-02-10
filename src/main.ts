import Collapse from "bootstrap/js/dist/collapse.js";
import Offcanvas from "bootstrap/js/dist/offcanvas.js";
import Carousel from "bootstrap/js/dist/carousel.js";

const collapseElementList = document.querySelectorAll('.collapse');
const collapseList = [...collapseElementList].map(collapseEl => new Collapse(collapseEl, {
  toggle: false,
}));

const offcanvasElementList = document.querySelectorAll('.offcanvas');
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new Offcanvas(offcanvasEl));
const carousel = new Carousel("#productDisplay");

const handleCounter = (evt) => {
  const counterInput = document.querySelector(".counter input");
  const clickedButton = evt.target;
  const action = clickedButton.getAttribute("data-bs-action");
  
  let counterValue = Number(counterInput.value);
  if (action == "add") counterValue += 1;
  else if (action == "minus") counterValue = (counterValue < 1) ? 0 : counterValue - 1;
  
  counterInput.value = counterValue;
};

[...document.querySelectorAll(".counter button")]
  .forEach(element => element.addEventListener("click", handleCounter));
  