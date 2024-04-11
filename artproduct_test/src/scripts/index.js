const buttonMeasure = document.getElementById("button-param");
const buttonDescription = document.getElementById("button-description");
const arrowMeasure = buttonMeasure.querySelector(".product__slide-button-arrow");
const arrowDescription = buttonDescription.querySelector(".product__slide-button-arrow");
const description = document.getElementById("description");
const measure = document.getElementById("param");

const dropDown = (element, arrow) => {
  element.classList.toggle("product__description_hide");
  arrow.classList.toggle("product__slide-button-arrow_flipped");
};

buttonDescription.addEventListener("click", () => dropDown(description, arrowDescription));
buttonMeasure.addEventListener("click", () => dropDown(measure, arrowMeasure));
