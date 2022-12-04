import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryREF = document.querySelector('.gallery');
const gallery = addCard(galleryItems);
galleryREF.innerHTML = gallery;

function addCard(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return ` 
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"           
            alt="${description}"
            />
        </a>
    `;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
