// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
function findAreaClicked() {
  const baseInput = parseInt(document.getElementById("base-entered").value)
  const heightInput = parseInt(document.getElementById("height-entered").value)
  document.getElementById("answer").innerHTML = "The area is: " + (baseInput * heightInput) / 2 + " cm<sup>2"
}
