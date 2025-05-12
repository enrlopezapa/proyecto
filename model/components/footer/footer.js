export class CustomFooter extends HTMLElement {
    constructor() {
      super();
      this.bootstrapCss = this.getAttribute('bootstrap-css');
      this.customCss = this.getAttribute('custom-css');
      this.rutaHtml = this.getAttribute('ruta-html');
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      // Cargar e insertar el CSS
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', this.bootstrapCss);

      const linkCustom = document.createElement('link');
      linkCustom.setAttribute('rel', 'stylesheet');
      linkCustom.setAttribute('href', this.customCss);
  
      // Cargar el template externo
      const templateHTML = await fetch(this.rutaHtml).then(res => res.text());
      const templateContainer = document.createElement('div');
      templateContainer.innerHTML = templateHTML;
      const template = templateContainer.querySelector('template');
  
      const clone = template.content.cloneNode(true);
  
      this.shadowRoot.appendChild(link);
      this.shadowRoot.appendChild(linkCustom);
      this.shadowRoot.appendChild(clone);
    }
  }