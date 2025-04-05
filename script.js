const paseos = [
  {
    titulo: 'Pasadia playa tranquila + acuario',
    descripcionCorta: 'Descubre playas paradisíacas y relájate con el sonido del mar.',
    descripcionLarga: 'Disfruta de un día completo en la playa con transporte, alimentación y guía incluido.',
    imagen: 'tour1.jpg',
    precio: '$100.000'
  },
  {
    titulo: 'Chiva Rumbera',
    descripcionCorta: 'Vive la experiencia de la rumba Cartagenera.',
    descripcionLarga: 'Incluye guía profesional, hidratación y seguro de viaje.',
    imagen: 'tour2.jpg',
    precio: '$120.000'
  }
];

function renderPaseos() {
  const container = document.querySelector('.paseos-container');
  container.innerHTML = '';

  paseos.forEach(paseo => {
    const section = document.createElement('section');
    section.className = 'paseo';
    section.innerHTML = `
      <img src="${paseo.imagen}" alt="${paseo.titulo}">
      <h2>${paseo.titulo}</h2>
      <p>${paseo.descripcionCorta}</p>
      <button onclick="abrirModal('${paseo.titulo}', '${paseo.descripcionLarga}', '${paseo.imagen}', '${paseo.precio}')">Ver más</button>
    `;
    container.appendChild(section);
  });
}

function abrirModal(titulo, descripcion, imagen, precio) {
  document.getElementById('modal-title').innerText = titulo;
  document.getElementById('modal-description').innerText = descripcion;
  document.getElementById('modal-image').src = imagen;
  document.getElementById('modal-price').innerText = precio;
  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    cerrarModal();
  }
};

document.addEventListener('DOMContentLoaded', renderPaseos);
