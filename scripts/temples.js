// Seleccionamos los elementos necesarios
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navLinks = document.querySelector('.nav-links');

// Añadimos el evento para la hamburguesa (mostrar el menú)
hamburger.addEventListener('click', () => {
  navLinks.classList.add('active'); // Muestra el menú
  hamburger.style.display = 'none'; // Oculta el ícono de la hamburguesa
  close.style.display = 'inline-block'; // Muestra el ícono de la X
});

// Añadimos el evento para la X (cerrar el menú)
close.addEventListener('click', () => {
  navLinks.classList.remove('active'); // Oculta el menú
  hamburger.style.display = 'inline-block'; // Muestra el ícono de la hamburguesa
  close.style.display = 'none'; // Oculta el ícono de la X
});

