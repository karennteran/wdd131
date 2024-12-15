// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;


// Select the container for temples
const container = document.getElementById("templesContainer");

// Generate HTML for each temple
temples.forEach((temple) => {
  // Create a figure element
  const figure = document.createElement("figure");

  // Add an image element
  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;

  // Add a figcaption element
  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p>Location: ${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Area: ${temple.area.toLocaleString()} sq. ft.</p>
  `;

  // Append elements to the figure
  figure.appendChild(img);
  figure.appendChild(caption);

  // Append figure to the container
  container.appendChild(figure);
});