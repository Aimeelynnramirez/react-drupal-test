
class HelloWorld extends HTMLElement {
    constructor(name) {
      super();
  
      this.subject = name || 'World';
  
          // create a Shadow DOM
      this.root = this.attachShadow({ mode: 'closed' });
    }
  
      // run some code when the component is ready
    connectedCallback() {
      this.root.innerHTML = this.getTemplate();
    }
  
    // create templates that interpolate variables and HTML!
    getTemplate() {
      return `<h1>Hello ${this.subject}!</h1>`;
    }
  }
  customElements.define('hello-world', HelloWorld);
