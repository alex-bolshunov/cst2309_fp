let position = 0;
const slides = document.getElementsByClassName('carousel_item');
const len = slides.length;

document.getElementById('carousel_button--next').addEventListener("click", () => moveToNextSlide());
document.getElementById('carousel_button--prev').addEventListener("click", () => moveToPrevSlide());

let updateposition = () => {
  for (let slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }

  slides[position].classList.add('carousel_item--visible');
}

let moveToNextSlide = () => {
  if (position === len- 1) position = 0;
  else position++;
  updateposition();

}

let moveToPrevSlide = () => {
  if (position === 0) position = len- 1;
  else position--;

  updateposition();
}