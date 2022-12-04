import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryREF = document.querySelector('.gallery');
const gallery = addCard(galleryItems);
galleryREF.innerHTML = gallery;

galleryREF.addEventListener('click', onImageClick);

function addCard(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join('');
}

function onImageClick(evt) {
  evt.preventDefault();

  const imgHref = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imgHref}" width="800" height="600">`,
    galleryREF.addEventListener('keydown', onCloseModalWindow)
  );
  instance.show();

  function onCloseModalWindow(evt) {
    if (evt.code === 'Escape') {
      instance.close(), galleryREF.removeEventListener('keydown', onCloseModalWindow);
    }
    console.log(evt.code);
  }
}
