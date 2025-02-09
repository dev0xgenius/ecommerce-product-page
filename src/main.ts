import Collapse from "bootstrap/js/dist/collapse.js";
import Offcanvas from "bootstrap/js/dist/offcanvas.js";

const collapseElementList = document.querySelectorAll('.collapse');
const collapseList = [...collapseElementList].map(collapseEl => new Collapse(collapseEl, {
  toggle: false,
}));

const offcanvasElementList = document.querySelectorAll('.offcanvas');
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new Offcanvas(offcanvasEl));