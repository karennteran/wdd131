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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      templeName: "Manaus, Brazil",
      location: "ponta negra, Manaus",
      dedicated: "2012, June, 10",
      area: 32032,
      imageUrl: "https://churchofjesuschristtemples.org/manaus-brazil-temple/photographs/#Gallery-12"
    },

    {
      templeName: "Melbourne, Australia",
      location: "Wantirna South, Victoria ",
      dedicated: "2000, June, 16",
      area: 10700,
      imageUrl: "https://churchofjesuschristtemples.org/melbourne-australia-temple/photographs/#Gallery-8"
    },

    {
        templeName: "Madrid, Spain",
        location: "Madrid, Madrid ",
        dedicated: "1999, March, 19-21",
        area: 45800,
        imageUrl: "https://churchofjesuschristtemples.org/madrid-spain-temple/photographs/#Gallery-4"
    }

  ];

  // Function to populate temples
function displayTemples(temples) {
    const container = document.getElementById("templesContainer");
    container.innerHTML = ""; // Clear existing content
    temples.forEach((temple) => {
      const templeCard = document.createElement("figure");
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}">
        <figcaption>
          <h2>${temple.templeName}</h2>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area} sq ft</p>
        </figcaption>
      `;
      container.appendChild(templeCard);
    });
  }
  
  // Call the function after DOM is loaded
  window.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
  });