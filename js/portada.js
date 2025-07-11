// js/portada.js
window.initPortada = function() {
  // Esperar a que Bootstrap esté disponible y el DOM esté listo
  function tryInitCarousel() {
    var carouselEl = document.getElementById('heroCarousel');
    if (window.bootstrap && window.bootstrap.Carousel && carouselEl) {
      new window.bootstrap.Carousel(carouselEl, { interval: 2000, ride: 'carousel' });
      return true;
    }
    return false;
  }
  if (!tryInitCarousel()) {
    // Si no está listo, reintentar varias veces
    let retries = 0;
    const maxRetries = 10;
    const interval = setInterval(function() {
      if (tryInitCarousel() || ++retries > maxRetries) {
        clearInterval(interval);
      }
    }, 300);
  }
}; 