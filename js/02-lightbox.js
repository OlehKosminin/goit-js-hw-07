import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createGaleryImg(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    })
    .join("");
}

function blockStandartAction(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    console.log("this not IMG");
    return;
  }
}

function onShowPicture(evt) {
  blockStandartAction(evt);
  // open
  var lightbox = new SimpleLightbox(".gallery a", {});
}

// show event
const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onShowPicture);

// markup
const imgMarkup = createGaleryImg(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imgMarkup);
