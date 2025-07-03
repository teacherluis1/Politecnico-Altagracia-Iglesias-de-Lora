// js/portada.js
window.initPortada = function() {
  // Inicializar carrusel de Bootstrap si es necesario
  if (window.bootstrap && window.bootstrap.Carousel) {
    var carouselEl = document.getElementById('heroCarousel');
    if (carouselEl) {
      new window.bootstrap.Carousel(carouselEl, { interval: 2000 });
    }
  }
}; 