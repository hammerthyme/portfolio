// import React from "react";

const techImages = [
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  "https://cdn.worldvectorlogo.com/logos/sequelize.svg",
  "https://d1eq8vvyuam4eq.cloudfront.net/assets/images/hacknlearn/react-logo.svg",
  "https://cdn.worldvectorlogo.com/logos/redux.svg",
  "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  "http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg",
  "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
];

const techContainer = document.getElementsByClassName("tech-container")[0];

techImages.forEach(imgURL => {
  const img = document.createElement("IMG");
  img.src = imgURL;
  techContainer.appendChild(img);
});

window.onload = function() {
  // const body = document.getElementsByName("body");
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";
};

// var prevScrollpos = window.pageYOffset;
let timer;
const navBar = document.getElementById("fixed-nav");
window.onscroll = function() {
  clearTimeout(timer);
  navBar.style.top = "-100px";
  timer = setTimeout(() => (navBar.style.top = "0"), 750);
};
