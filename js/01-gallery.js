import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGaleryImg(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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

  const instance = basicLightbox.create(`  
   <img src="${evt.target.getAttribute(
     "data-source"
   )}" width="800" height="600">
  `);
  instance.show();
  // close

  galleryEl.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

// show event
const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onShowPicture);

// markup
const imgMarkup = createGaleryImg(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imgMarkup);
