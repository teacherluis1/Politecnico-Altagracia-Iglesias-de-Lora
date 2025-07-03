// js/main.js

// Lógica global para scroll top y cualquier inicialización general
window.sectionInit = function() {
  // Inicializar lógica de cada sección si existe
  if (window.initPortada) window.initPortada();
  if (window.initInstitucion) window.initInstitucion();
  if (window.initVidaEstudiantil) window.initVidaEstudiantil();
  if (window.initTitulos) window.initTitulos();
  if (window.initContacto) window.initContacto();
  if (window.initAulaVirtual) window.initAulaVirtual();

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
  };
  window.onscroll = function() {
    if (window.scrollY > 300) {
      btnScrollTop.style.display = 'block';
    } else {
      btnScrollTop.style.display = 'none';
    }
  };
};

// Scroll suave por CSS (opcional, pero recomendado)
document.documentElement.style.scrollBehavior = 'smooth'; 