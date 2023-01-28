import { getElement } from "./utils.js";

const toggleNav = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeCartBtn = getElement(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});
