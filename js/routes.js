const routes = {
  '#portada': 'components/portada.html',
  '#institucion': 'components/institucion.html',
  '#vida-estudiantil': 'components/vida-estudiantil.html',
  '#titulos': 'components/titulos.html',
  '#contactos': 'components/contacto.html',
  '#aula-virtual': 'components/aula-virtual.html',
};

function loadComponent(route) {
  const app = document.getElementById('app');
  // Cargar navbar siempre
  fetch('components/navbar.html')
    .then(res => res.text())
    .then(navbarHtml => {
      // Cargar el componente de la ruta
      const componentPath = routes[route] || routes['#portada'];
      fetch(componentPath)
        .then(res => res.text())
        .then(componentHtml => {
          // Cargar footer siempre
          fetch('components/footer.html')
            .then(res => res.text())
            .then(footerHtml => {
              app.innerHTML = navbarHtml + componentHtml + footerHtml;
              // Inicializar lógica de la sección si existe
              if (window.sectionInit) window.sectionInit(route);
            });
        });
    });
}

function handleRouteChange() {
  loadComponent(window.location.hash || '#portada');
}

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('DOMContentLoaded', handleRouteChange); 