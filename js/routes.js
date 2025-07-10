const sectionComponents = [
  'components/portada.html',
  'components/institucion.html',
  'components/vida-estudiantil.html',
  'components/titulos.html',
  'components/contacto.html',
  // 'components/aula-virtual.html', // Eliminado para que no se cargue en la portada
];

function loadAllSections() {
  const app = document.getElementById('app');
  // Cargar navbar
  fetch('components/navbar.html')
    .then(res => res.text())
    .then(navbarHtml => {
      // Cargar todas las secciones en orden
      Promise.all(sectionComponents.map(path => fetch(path).then(r => r.text())))
        .then(sectionsHtml => {
          // Cargar footer
          fetch('components/footer.html')
            .then(res => res.text())
            .then(footerHtml => {
              app.innerHTML = navbarHtml + sectionsHtml.join('\n') + footerHtml;
              if (window.sectionInit) window.sectionInit();
            });
        });
    });
}

window.addEventListener('DOMContentLoaded', loadAllSections); 