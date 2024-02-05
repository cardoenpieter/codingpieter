export default class UI {
  constructor(game) {
    this.game = game;
    this.color = "white";
    this.fontFamily = "Arial";
    this.fontSize = 25;
  }

  draw() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(10, 10, 10, 20);
  }
}
