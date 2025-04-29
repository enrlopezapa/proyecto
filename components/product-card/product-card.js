export class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.bootstrapCss = this.getAttribute('bootstrap-css')
        this.customCss = this.getAttribute('custom-css')
        this.customJs = this.getAttribute('custom-js')
        this.rutaHtml = this.getAttribute('ruta-html');
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch(this.rutaHtml)
      .then(response => response.text())
      .then(data => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        const template = tempDiv.querySelector('#product-card-template');
        if (!template) {
          console.error('No se encontró el template con id "product-card-template"');
          return;
        }

        const templateContent = template.content;

        // Cargar CSS
        const bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.href = this.bootstrapCss;
        this.shadowRoot.appendChild(bootstrapLink);

        const customStylesLink = document.createElement('link');
        customStylesLink.rel = 'stylesheet';
        customStylesLink.href = this.customCss;
        this.shadowRoot.appendChild(customStylesLink);

        // Insertar contenido
        this.shadowRoot.appendChild(templateContent.cloneNode(true));
        
        const customScript = document.createElement('script');
        customScript.src = this.customJs;
        this.shadowRoot.appendChild(customScript);

        this.setContent();

      })
      .catch(error => {
        console.error('Error al cargar el template:', error);
      });
  }
  setContent() {
    const image = this.getAttribute('image');
    const alt = this.getAttribute('alt');
    const oldPrice = this.getAttribute('old-price');
    const currentPrice = this.getAttribute('price');
    const title = this.getAttribute('title');
    const stars = parseInt(this.getAttribute('stars'));
    const clase = this.getAttribute('class');

    const article = this.shadowRoot.querySelector('article');
    if (clase && article) {
        article.classList.add(...clase.split(' '));
    }
    this.shadowRoot.querySelector('.card-img-top').src = image;
    this.shadowRoot.querySelector('.card-img-top').alt = alt;
    this.shadowRoot.querySelector('.old-price').textContent = oldPrice;
    this.shadowRoot.querySelector('.current-price').textContent = currentPrice;
    this.shadowRoot.querySelector('.text-muted').textContent = title;

    const ratingEl = this.shadowRoot.querySelector('.rating');
    ratingEl.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('img');
        star.className = 'star';
        star.src = i < stars ? 'img/star-fill.svg' : 'img/star.svg';
        star.alt = i < stars ? 'estrella llena' : 'estrella vacía';
        ratingEl.appendChild(star);
    }
}
}