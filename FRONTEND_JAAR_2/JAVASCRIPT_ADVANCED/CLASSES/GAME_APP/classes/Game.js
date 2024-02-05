import Player from "./Player.js";
import InputHandler from "./InputHandler.js";
import UI from "./UI.js";

export default class Game {
  constructor(context, width, height) {
    this.ctx = context;
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.input = new InputHandler(this); //this, spel meegeven aan de inputhandler
    this.keys = []; //lege array nodig om alle ingedrukte keys te bewaren
    this.ammo = 20;
    this.maxAmmo = 60;
    this.ammoTimer = 0;
    this.ammoInterval = 500;
    this.ammoDraw = new UI(this);
  }

  update(deltaTime) {
    this.player.update();
    if (this.ammoTimer > this.ammoInterval) {
      if (this.ammo < this.maxAmmo) {
        this.ammo++;
        this.ammoTimer = 0;
      }
    } else {
      this.ammoTimer += deltaTime;
    }

    console.log(this.ammo);
  }

  draw() {
    this.player.draw();
    this.ammoDraw.draw();
  }
}
