
import React from "react";
import ReactDOM from "react-dom";
import ScratchToRevealDemo from "./ScratchToRevealDemo";

// Render the ScratchToRevealDemo component
ReactDOM.render(<ScratchToRevealDemo />, document.getElementById("scratch-to-reveal-demo"));

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

