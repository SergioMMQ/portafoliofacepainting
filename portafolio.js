// Cargar imágenes en la galería
const images = [
    "Diseño 0.jpg",
    "Diseño 1.jpg",
    "Diseño 2.jpg",
    "Diseño 3.jpg",
    "Diseño 4.jpg",
    "Diseño 5.jpg",
    "Diseño 6.jpg",
    "Diseño 7.jpg",
    "Diseño 8.jpg",
    "Diseño 9.jpg",
    "Diseño 10.jpg",
    "Diseño 11.jpg",
    "Diseño 12.jpg",
    "Diseño 13.jpg",
    "Diseño 14.jpg",
    "Diseño 15.jpg",
    "Diseño 16.jpg",
    "Diseño 17.jpg",
    "Diseño 18.jpg",
    "Diseño 19.jpg",
    "Diseño 20.jpg",
    "Diseño 21.jpg",
    "Diseño 22.jpg",
    "Diseño 23.jpg",
    "Diseño 24.jpg",
    "Diseño 25.jpg",
    "Diseño 26.jpg",
    "Diseño 27.jpg",
    "Diseño 28.jpg",
    "Diseño 29.jpg",
    "Diseño 30.jpg",
    "Diseño 31.jpg",
    "Diseño 32.jpg",
    "Diseño 33.jpg",
    "Diseño 34.jpg",
    "Diseño 35.jpg",
    "Diseño 36.jpg",
    "Diseño 37.jpg",
    "Diseño 38.jpg",
    "Diseño 39.jpg",
    "Diseño 40.jpg",
    "Diseño 41.jpg",
    "Diseño 42.jpg",
    "Diseño 43.jpg",
    "Diseño 44.jpg",
    "Diseño 45.jpg",
    "Diseño 46.jpg",
    "Diseño 47.jpg",
    "Diseño 48.jpg",
    "Diseño 49.jpg",
    "Diseño 50.jpg",
    "Diseño 51.jpg",
    "Diseño 52.jpg",
    "Diseño 53.jpg",
    "Diseño 54.jpg",
    "Diseño 55.jpg",
    "Diseño 56.jpg",
    "Diseño 57.jpg",
    "Diseño 58.jpg",
    "Diseño 59.jpg",
    "Diseño 60.jpg",
    "Diseño 61.jpg",
    "Diseño 62.jpg",
];


const galeria = document.getElementById('galeria');

images.forEach(image => {
    const item = document.createElement('div');
    item.classList.add('item');
    
    // Asigna la imagen de fondo al div
    item.style.minWidth = '260px'; // Ancho mínimo de 200px
    item.style.height = '350px'; // Altura del div
    item.style.backgroundImage = `url('img/${image}')`;
    item.style.backgroundSize = 'cover';
    item.style.backgroundPosition = 'center';
    item.style.paddingTop = '0'; // Espacio en blanco en la parte superior
    item.style.boxSizing = 'border-box'; // Asegura que el padding no afecte la altura total
    
    // Maneja el evento de clic para abrir el lightbox
    item.onclick = function() {
        openLightbox(`img/${image}`, image.split('.')[0].replace('-', ' '));
    };
    
    // Crear un párrafo con la descripción de la imagen
    const p = document.createElement('p');
    p.textContent = image.split('.')[0].replace('-', ' ');
    p.style.backgroundColor = '#ffffff61';
    
    // Agrega el párrafo al div item
    item.appendChild(p);
    
    // Agrega el item al contenedor de la galería
    galeria.appendChild(item);
});

// const galeria = document.getElementById('galeria');

// images.forEach(image => {
//     const item = document.createElement('div');
//     item.classList.add('item');
    
//     const img = document.createElement('img');
//     img.src = `imgeventos/${image}`;
//     img.alt = image.split('.')[0].replace('-', ' ');
    
//     img.onclick = function() {
//         openLightbox(this.src, this.alt);
//     };
    
//     const p = document.createElement('p');
//     p.textContent = img.alt;

//     item.appendChild(img);
//     item.appendChild(p);
//     galeria.appendChild(item);
// });

// Función para abrir el lightbox
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightbox.style.display = "block";
    lightboxImg.src = src;
    lightboxImg.alt = alt;
}

// Cerrar el lightbox
document.querySelector('.close').onclick = function() {
    document.getElementById('lightbox').style.display = "none";
};

// Cerrar el lightbox al hacer clic fuera de la imagen
document.getElementById('lightbox').onclick = function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
};

function closeAd() {
    document.getElementById("sidebarAd").style.display = "none";
}

