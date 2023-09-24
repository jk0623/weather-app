class SearchContainer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
      }

    get value() {
        return this.querySelector('#searchInput').value;
    }

    render() {
        this.innerHTML = `
        <div class="search">
        <input type="text" placeholder="Masukan nama kota " id="searchInput"  type="search">
        <button id="searchSubmit" type="submit" > <img src="asset/images/search.png" ></button>
        </div>`;

        this.querySelector('#searchSubmit').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-container', SearchContainer);


