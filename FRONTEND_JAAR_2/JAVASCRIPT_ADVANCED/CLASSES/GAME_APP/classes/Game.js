import Player from "./Player.js";

export default class Game {
  constructor(context, width, height) {
    this.ctx = context;
    this.width = width;
    this.height = height;
    this.player = new Player(this);
  }
  update() {
    this.player.update();
  }
  draw() {
    this.player.draw();
  }
}
