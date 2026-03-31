(function () {
  const topbar = document.getElementById('topbar');

  function updateSticky() {
    topbar.classList.toggle('is-compact', window.scrollY > 24);
  }

  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  window.addEventListener('scroll', updateSticky);
  updateSticky();
})();
