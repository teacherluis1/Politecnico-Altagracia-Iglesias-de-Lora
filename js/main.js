/* ============================================================
   js/main.js  •  IPAIL – lógica global + autocierre de navbar
   ============================================================ */

document.documentElement.style.scrollBehavior = 'smooth';

// ---------- 1) Inicializadores por sección ----------
window.sectionInit = function () {
  window.initPortada?.();
  window.initInstitucion?.();
  window.initVidaEstudiantil?.();
  window.initTitulos?.();
  window.initContacto?.();
  window.initAulaVirtual?.();

  // Botón «Volver arriba» (una sola vez)
  let btn = document.getElementById('btnScrollTop');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'btnScrollTop';
    btn.title = 'Volver arriba';
    btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    btn.style.cssText = `
      display:none;position:fixed;bottom:32px;right:32px;z-index:9999;
      background:#2196f3;color:#fff;border:none;border-radius:50%;
      width:54px;height:54px;font-size:2rem;box-shadow:0 2px 8px rgba(0,0,0,.18);`;
    document.body.appendChild(btn);
  }
  btn.onclick  = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  window.onscroll = () => (btn.style.display = window.scrollY > 300 ? 'block' : 'none');
};

// ---------- 2) Autocerrar el menú en móviles (< 992 px) ----------
function initAutoCloseNavbar () {
  const navCollapse = document.getElementById('navbarNav');
  if (!navCollapse) return;

  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
        const bsCollapse =
          bootstrap.Collapse.getInstance(navCollapse) ??
          new bootstrap.Collapse(navCollapse, { toggle: false });
        bsCollapse.hide();           // cierra el off-canvas
        /* ✔️  NO se hace preventDefault, así que el
               ancla #seccion desplaza la página normalmente */
      }
    });
  });
}

// ---------- 3) Carga dinámica de componentes ----------
const sectionComponents = [
  'components/portada.html',
  'components/institucion.html',
  'components/vida-estudiantil.html',
  'components/titulos.html',
  'components/contacto.html'
];

function loadAllSections () {
  const app = document.getElementById('app');

  fetch('components/navbar.html').then(r => r.text()).then(navbar =>
    Promise.all(sectionComponents.map(p => fetch(p).then(r => r.text())))
      .then(sections =>
        fetch('components/footer.html').then(r => r.text()).then(footer => {
          app.innerHTML = navbar + sections.join('\n') + footer;
          window.sectionInit();
          initAutoCloseNavbar();
        })));
}

window.addEventListener('DOMContentLoaded', loadAllSections);

// ---------- 4) Stubs vacíos por si faltan ----------
window.initPortada         ??= () => {};
window.initInstitucion     ??= () => {};
window.initVidaEstudiantil ??= () => {};
window.initTitulos         ??= () => {};
window.initContacto        ??= () => {};
window.initAulaVirtual     ??= () => {};
/* ============================================================ */
