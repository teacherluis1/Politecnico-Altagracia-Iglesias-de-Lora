// js/main.js

// Aquí puedes poner lógica global, como scroll top, etc.
window.sectionInit = function(route) {
  // Cargar el script de la sección si no está cargado
  const sectionScripts = {
    '#portada': 'js/portada.js',
    '#institucion': 'js/institucion.js',
    '#vida-estudiantil': 'js/vida-estudiantil.js',
    '#titulos': 'js/titulos.js',
    '#contactos': 'js/contacto.js',
    '#aula-virtual': 'js/aula-virtual.js',
  };
  const scriptUrl = sectionScripts[route] || sectionScripts['#portada'];
  if (!document.querySelector('script[src="' + scriptUrl + '"]')) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = function() {
      if (route === '#portada' && window.initPortada) window.initPortada();
      else if (route === '#institucion' && window.initInstitucion) window.initInstitucion();
      else if (route === '#vida-estudiantil' && window.initVidaEstudiantil) window.initVidaEstudiantil();
      else if (route === '#titulos' && window.initTitulos) window.initTitulos();
      else if (route === '#contactos' && window.initContacto) window.initContacto();
      else if (route === '#aula-virtual' && window.initAulaVirtual) window.initAulaVirtual();
    };
    document.body.appendChild(script);
  } else {
    if (route === '#portada' && window.initPortada) window.initPortada();
    else if (route === '#institucion' && window.initInstitucion) window.initInstitucion();
    else if (route === '#vida-estudiantil' && window.initVidaEstudiantil) window.initVidaEstudiantil();
    else if (route === '#titulos' && window.initTitulos) window.initTitulos();
    else if (route === '#contactos' && window.initContacto) window.initContacto();
    else if (route === '#aula-virtual' && window.initAulaVirtual) window.initAulaVirtual();
  }

  // Botón scroll top
  let btnScrollTop = document.getElementById('btnScrollTop');
  if (!btnScrollTop) {
    btnScrollTop = document.createElement('button');
    btnScrollTop.id = 'btnScrollTop';
    btnScrollTop.title = 'Volver arriba';
    btnScrollTop.style.display = 'none';
    btnScrollTop.style.position = 'fixed';
    btnScrollTop.style.bottom = '32px';
    btnScrollTop.style.right = '32px';
    btnScrollTop.style.zIndex = '9999';
    btnScrollTop.style.background = '#2196f3';
    btnScrollTop.style.color = '#fff';
    btnScrollTop.style.border = 'none';
    btnScrollTop.style.borderRadius = '50%';
    btnScrollTop.style.width = '54px';
    btnScrollTop.style.height = '54px';
    btnScrollTop.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
    btnScrollTop.style.fontSize = '2rem';
    btnScrollTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(btnScrollTop);
  }
  btnScrollTop.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'portada';
  };
  window.onscroll = function() {
    if (window.scrollY > 300) {
      btnScrollTop.style.display = 'block';
    } else {
      btnScrollTop.style.display = 'none';
    }
  };
}; 