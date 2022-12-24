// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


// звертаюсь до галереї що є масивом об'єктів
const galleryContainer = document.querySelector('.gallery');


// створюю змінну що є строками карток масиву
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

// створюю контейнер і додаю в нього всі картки галереї що є строками
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});

// Створюю розмітку для картки як шаблон
function createGalleryCardsMarkup(galleryItems)  {
    return galleryItems.map(({ preview, original, description }) => {
       return `
       <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `; 
    }).join('');
  }

  



