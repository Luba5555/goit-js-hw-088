// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';


const boxImages = document.querySelector('.gallery');
const cardsMarkup = createImgcardsMarkup(galleryItems);
boxImages.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgcardsMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </li>`;
    }) .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
