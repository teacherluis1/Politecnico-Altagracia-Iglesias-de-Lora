// js/institucion.js
window.initInstitucion = function() {
  // Forzar la inicialización de los tabs de Bootstrap
  if (window.bootstrap && window.bootstrap.Tab) {
    var tabElList = [].slice.call(document.querySelectorAll('#institucionTabs button[data-bs-toggle="tab"]'));
    tabElList.forEach(function(tabEl) {
      tabEl.addEventListener('click', function (event) {
        event.preventDefault();
        var tabTrigger = new window.bootstrap.Tab(tabEl);
        tabTrigger.show();
      });
    });
  }
}; 