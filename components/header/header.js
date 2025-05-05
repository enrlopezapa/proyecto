export class CustomHeader extends HTMLElement {
  constructor() {
    super();
    // Obtener atributos
    this.bootstrapCss = this.getAttribute('bootstrap-css');
    this.customCss = this.getAttribute('custom-css');
    this.rutaHtml = this.getAttribute('ruta-html');
    this.bootstrapJs = this.getAttribute('bootstrap-js');
    this.indexLink = this.getAttribute('index-link');
    this.searchLink = this.getAttribute('search-link');
    this.logoLink = this.getAttribute('logo-link');
    this.cartLink = this.getAttribute('cart-link');
    this.loginLink = this.getAttribute('login-link');
    this.productFrutaLink = this.getAttribute('productFruta-link');
    this.productVerduraLink = this.getAttribute('productVerdura-link');
    this.productOfertaLink = this.getAttribute('productOferta-link');
    this.productLocalLink = this.getAttribute('productLocal-link');
    this.productoLink = this.getAttribute('producto-link');
    this.nosotrosLink = this.getAttribute('nosotros-link');
    this.contactoLink = this.getAttribute('contacto-link');
    this.rutaCategoriasphp = this.getAttribute('ruta-categoriasphp');
  }

  connectedCallback() {
    this.loadTemplate();
  }

  loadTemplate() {
    fetch(this.rutaHtml)
      .then(response => response.text())
      .then(data => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        const template = tempDiv.querySelector('#header-template');
        if (!template) {
          console.error('No se encontró el template con id "header-template"');
          return;
        }

        const templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Cargar CSS
        const bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.href = this.bootstrapCss;
        shadowRoot.appendChild(bootstrapLink);

        const customStylesLink = document.createElement('link');
        customStylesLink.rel = 'stylesheet';
        customStylesLink.href = this.customCss;
        shadowRoot.appendChild(customStylesLink);

        // Insertar contenido
        shadowRoot.appendChild(templateContent.cloneNode(true));

        // Modificar rutas dinámicamente
        this.updateLinks(shadowRoot);
        
        // Activar funcionalidad
        this.setupDropdown(shadowRoot);
        this.setupNavbarToggler(shadowRoot);
        this.updateSessionButtons(shadowRoot);
        this.loadCategorias(shadowRoot);

        // (Opcional) Incluir Bootstrap JS si quieres usarlo también
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = this.bootstrapJs;
        shadowRoot.appendChild(bootstrapScript);

      })
      .catch(error => {
        console.error('Error al cargar el template:', error);
      });
  }

  updateLinks(shadowRoot) {
    shadowRoot.querySelector('#index-link')?.setAttribute('href', this.indexLink);
    shadowRoot.querySelector('#logo-link')?.setAttribute('src', this.logoLink);
    shadowRoot.querySelector('#search-link')?.setAttribute('action', this.searchLink);
    shadowRoot.querySelector('#cart-link')?.setAttribute('href', this.cartLink);
    shadowRoot.querySelector('#login-link')?.setAttribute('href', this.loginLink);
    shadowRoot.querySelector('#productFruta-link')?.setAttribute('href', this.productFrutaLink);
    shadowRoot.querySelector('#productVerdura-link')?.setAttribute('href', this.productVerduraLink);
    shadowRoot.querySelector('#productOferta-link')?.setAttribute('href', this.productOfertaLink);
    shadowRoot.querySelector('#productLocal-link')?.setAttribute('href', this.productLocalLink);
    shadowRoot.querySelector('#producto-link')?.setAttribute('href', this.productoLink);
    shadowRoot.querySelector('#nosotros-link')?.setAttribute('href', this.nosotrosLink);
    shadowRoot.querySelector('#contacto-link')?.setAttribute('href', this.contactoLink);
  }

  setupDropdown(shadowRoot) {
    const dropdownToggle = shadowRoot.querySelector('.dropdown-toggle');
    const dropdownMenu = shadowRoot.querySelector('.dropdown-menu');
  
    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el evento se propague
        dropdownMenu.classList.toggle('show');
      });
  
      // Escucha los clics dentro del shadowRoot
      shadowRoot.addEventListener('click', (e) => {
        if (!dropdownToggle.contains(e.target)) {
          dropdownMenu.classList.remove('show');
        }
      });
  
      // Escucha los clics fuera del shadowRoot
      document.addEventListener('click', (e) => {
        const path = e.composedPath();
        if (!path.includes(shadowRoot.host)) {
          dropdownMenu.classList.remove('show');
        }
      });
    }
  }

  updateSessionButtons(shadowRoot) {
    const loginBtn = shadowRoot.querySelector('#login-link');
    const perfilDropdown = shadowRoot.querySelector('#perfil-dropdown');
    const cartBtn = shadowRoot.querySelector('#cart-link');
    if(window.usuarioLogueado === true || window.usuarioLogueado === 'true' || window.usuarioLogueado === 1){
      perfilDropdown?.classList.remove('d-none');
      cartBtn?.classList.remove('d-none');
      loginBtn?.classList.add('d-none');
    } else{
      loginBtn?.classList.remove('d-none');
      perfilDropdown?.classList.add('d-none');
      cartBtn?.classList.add('d-none');
    }
  }

  loadCategorias(shadowRoot) {
    const categoriasContainer = shadowRoot.querySelector('#categorias-dropdown');
  
    if (!categoriasContainer || !this.rutaCategoriasphp) return;
  
    fetch(this.rutaCategoriasphp, {
      credentials: 'include' // Esto es CLAVE para que se envíe la cookie de sesión
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudieron obtener las categorías');
        }
        return response.json();
      })
      .then(categorias => {
        // Crear el menú <ul> dinámicamente
        const ul = document.createElement('ul');
        ul.classList.add('dropdown-menu');
  
        categorias.forEach(nombre => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.classList.add('dropdown-item');
          a.href = `html/productos.html?category=${encodeURIComponent(nombre.toLowerCase())}`;
          a.textContent = nombre;
          li.appendChild(a);
          ul.appendChild(li);
        });
  
        // Agregar el <ul> dentro del contenedor
        categoriasContainer.appendChild(ul);
      })
      .catch(error => {
        console.error('Error cargando categorías:', error);
      });
  }
  

  setupNavbarToggler(shadowRoot) {
    const toggler = shadowRoot.querySelector('.navbar-toggler');
    const navbarCollapse = shadowRoot.querySelector('.navbar-collapse');

    if (toggler && navbarCollapse) {
      toggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
      });
    }
  }
}

