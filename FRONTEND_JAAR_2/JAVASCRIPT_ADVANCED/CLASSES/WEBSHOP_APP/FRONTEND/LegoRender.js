import LegoActions from "./LegoActions.js";
import LegoClient from "./LegoClient.js";
import { html, render } from "https://unpkg.com/lit-html";

/*The constructor method is a 
special method of a class for creating and 
initializing an object instance of that class.*/

export default class LegoRender {
  constructor(legos) {
    this.legos = legos.map((lego) => new LegoActions(lego));
  }

  renderLegos() {
    const legoTemplate = html`${this.legos.map((lego) => lego.template())}`;
    render(legoTemplate, document.querySelector(".container"));
  }

  static display() {
    LegoClient.get().then((legoObjects) => {
      //console toont alle data die aangepast is naar id en attributes op 1 lijn
      console.log("legoobjects", legoObjects);
      const legos = new LegoRender(legoObjects);
      legos.renderLegos();
    });
  }
}

/* 
Static properties cannot be directly accessed 
on instances of the class. 
Instead, they're accessed on the class itself.

Static methods are often utility functions, 
such as functions to create or clone objects, 
whereas static properties are useful for caches, 
fixed-configuration, or any other data you don't need 
to be replicated across instances.*/
