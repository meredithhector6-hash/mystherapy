document.addEventListener('DOMContentLoaded', () => {

  // ===== HAMBURGER =====
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    
  // ===== BOUTON CHAT =====
  const btnChat = document.getElementById('btn-chat-bubble');
  if (btnChat) {
    btnChat.addEventListener('click', function () {
      if (typeof Tawk_API !== 'undefined') {
        if (typeof Tawk_API.toggle === 'function') {
          Tawk_API.toggle();
        } else if (typeof Tawk_API.maximize === 'function') {
          Tawk_API.maximize();
        }
      }
    });
  }

});
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // ===== SUJETS VERROUILLÉS =====
  // Pour débloquer un sujet, ajoute son numéro ici
  const sujetsDebloques = [1,2];

  const liens = document.querySelectorAll('.sujet-lien');
  liens.forEach((lien) => {
    const numero = parseInt(lien.getAttribute('data-sujet'));
    if (!sujetsDebloques.includes(numero)) {
      lien.classList.add('sujet-bloque');
      lien.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Ce sujet n\'est pas encore disponible.');
      });
    }
  });

});
