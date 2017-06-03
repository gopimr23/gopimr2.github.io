"use strict";

function init() {
  var menu_elements = [];
  menu_elements.push(document.getElementById("header_about"));
  menu_elements.push(document.getElementById("header_portfolio"));
  menu_elements.push(document.getElementById("header_contact"));

  G_Helper.addClass(menu_elements[0], "selected");

  Menu.activeMenuWhenScroll(menu_elements);

  document.addEventListener("scroll", function () {
    Menu.setFixedHeader();
    Menu.activeMenuWhenScroll(menu_elements);
  });
}

window.addEventListener('load', init, false);
