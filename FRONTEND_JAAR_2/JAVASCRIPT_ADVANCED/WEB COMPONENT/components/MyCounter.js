import { html, render } from "https://esm.run/lit-html";

export class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
  }

  connectedCallback() {
    this.render();
    //geen arrowfunction gebruiken
  }

  increment = () => {
    this.count++;
    this.render();
  };

  decrement = () => {
    this.count--;
    this.render();
  };

  render = () => {
    render(
      html` <p>The current count is: ${this.count}</p>
        <button @click=${this.increment}>Increment +</button>
        <button @click=${this.decrement}>Decrement -</button>`,
      this
      // Render the template to the document
    );
  };
}
