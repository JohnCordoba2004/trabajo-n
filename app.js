let slideIndex = 0;
const slides = document.querySelectorAll(".products__card");
const indicadores = document.querySelectorAll(".products__dot");

function showSlide(n) {
  // oculta todas las slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // remueve la clase active de todos los indicadores
  indicadores.forEach((indicador) => {
    indicador.classList.remove("active");
  });

  // Nos muestra la slide verdadera
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides[slideIndex].classList.add("active");
  indicadores[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  // Nos muestra la primera slide
  showSlide(0);

  //Los botones para cambiar de slide
  document.querySelector(".products__button--next").onclick = nextSlide;
  document.querySelector(".products__button--prev").onclick = prevSlide;

  // Indicadores de navegación
  indicadores.forEach((indicador, index) => {
    indicador.onclick = function () {
      slideIndex = index;
      showSlide(slideIndex);
    };
  });

  // Tiene un auto play de 3 segundos
  setInterval(nextSlide, 3000);
});
