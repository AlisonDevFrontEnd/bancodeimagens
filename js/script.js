/*const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.gallery img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
  });
});*/

document.getElementById('imageSearch').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const images = document.querySelectorAll('.gallery img');

  images.forEach(function(image) {
    const altText = image.alt.toLowerCase();
    if (altText.includes(searchTerm)) {
      image.style.display = 'inline-block';
    } else {
      image.style.display = 'none';
    }
  });
});

// Função para trocar a imagem principal ao clicar em uma imagem da galeria 

document.querySelectorAll('.gallery img').forEach(function(image) {
  image.addEventListener('click', function() {
    const mainImage = document.getElementById('main-image');
    mainImage.src = this.src;
    mainImage.alt = this.alt;
  });
});