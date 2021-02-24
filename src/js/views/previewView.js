import View from './view.js';
import icons from '../../img/icons.svg'; // parcel@v2

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `<li class="preview">
        <a class="preview__link ${
          this._data.id === id ? 'preview__link--active' : ''
        }" href="#${this._data.id.id}">
          <figure class="preview__fig">
            <img src="${this._data.id.image}" alt="Test" />
          </figure>
          <div class="preview__data">
          <h4 class="preview__title">${this._data.id.title}</h4>
            <p class="preview__publisher">${this._data.id.publisher}</p>
            <div class="preview__user-generated">
          </div>
          <div class="preview__user-generated ${
            this._data.key ? '' : 'hidden'
          }">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
        </div>
      </a>
    </li>`;
  }
}

export default new PreviewView();
