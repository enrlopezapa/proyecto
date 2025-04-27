if (!customElements.get('custom-header')) {
    class CustomHeader extends HTMLElement {
        constructor() {
            super();
            // Obtener las rutas de los CSS desde los atributos del Web Component
            const bootstrapCss = this.getAttribute('bootstrap-css');
            const customCss = this.getAttribute('custom-css');
            const rutaHtml = this.getAttribute('ruta-html');
    
            // Usamos fetch para cargar el archivo HTML con el template
            fetch(rutaHtml)
                .then(response => response.text()) // Leer el contenido del archivo HTML
                .then(data => {
                    // Crear un div temporal para inyectar el HTML del template
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = data;
    
                    // Buscar el template dentro del HTML cargado
                    const template = tempDiv.querySelector('#header-template');
                    if (!template) {
                        console.error('No se encontró el template con id "header-template"');
                        return;
                    }
    
                    const templateContent = template.content;
    
                    // Crear un shadow DOM y añadir el contenido del template al shadow DOM
                    const shadowRoot = this.attachShadow({mode: 'open'});
    
                    // Obtener las rutas de los CSS desde los atributos del Web Component
                    const bootstrapCss = this.getAttribute('bootstrap-css');
                    const customCss = this.getAttribute('custom-css');
    
                    // Incluir Bootstrap desde archivo local
                    const bootstrapLink = document.createElement('link');
                    bootstrapLink.rel = 'stylesheet';
                    bootstrapLink.href = bootstrapCss; // Usar la ruta obtenida desde el atributo
                    shadowRoot.appendChild(bootstrapLink);
    
                    // Incluir tus estilos personalizados
                    const customStylesLink = document.createElement('link');
                    customStylesLink.rel = 'stylesheet';
                    customStylesLink.href = customCss; // Usar la ruta obtenida desde el atributo
                    shadowRoot.appendChild(customStylesLink);
    
                    // Añadir el contenido del template al Shadow DOM
                    shadowRoot.appendChild(templateContent.cloneNode(true));
                })
                .catch(error => {
                    console.error('Error al cargar el template:', error);
                });
        }
    }
    
    // Definir el custom element
    customElements.define('custom-header', CustomHeader);
  } else {
    console.log('El custom element "custom-header" ya ha sido definido.');
  }
  