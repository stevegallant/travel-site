import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ClientArea from './modules/ClientArea';

// React related code here
// import React from 'react';
// import ReactDOM from 'react-dom';
// import MyReactComponent from './modules/MyReactComponent';

// ReactDOM.render(<MyReactComponent />, document.querySelector('#react-example-div'));

new MobileMenu();
new StickyHeader();
new ClientArea();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let modal;

document.querySelectorAll(".open-modal").forEach(element => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default();
        setTimeout(() => modal.openTheModal(), 20);
      }).catch(() => console.warning("There was a problem."));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
