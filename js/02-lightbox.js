import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>;

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

