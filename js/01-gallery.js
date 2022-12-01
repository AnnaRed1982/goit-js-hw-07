import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

const galleryREF = document.querySelector('.gallery');
const gallery = addCard(galleryItems);
galleryREF.innerHTML = gallery;
// galleryREF.insertAdjacentHTML('beforeend', gallery);

galleryREF.addEventListener('click', evt => {
  evt.preventDefault();

  const imgHref = evt.target.dataset.source;
  console.log(imgHref);

  const instance = basicLightbox.create(`
    <img src="${imgHref}" width="800" height="600">
`);

  instance.show();
});

// const obj = {
//   name: 'User name',
//   inform: {
//     age: 22,
//     nickName: 'Some',
//     getNickName() {
//       console.log('inform', this);
//     },
//   },
//   getName() {
//     console.log('obj', this);
//   },
// };
// obj.getName();
// obj.inform.getNickName();

//freecodecamp.org/ukrainian
