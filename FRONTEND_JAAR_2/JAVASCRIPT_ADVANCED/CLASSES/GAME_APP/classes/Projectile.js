export default class Projectile {
  constructor(game, x, y) {
    this.game = game; //reference naar de game
    this.x = x + 80;
    this.y = y + 30;
    this.width = 10;
    this.height = 3;
    this.speed = 3;
    this.markedForDeletion = false; //voorkomen dat 1 projectiel verschillende vijanden aanraken
  }
  update() {
    this.x += this.speed;
    if (this.x > this.game.width * 0.8) this.markedForDeletion = true;
  }
  draw() {
    this.game.ctx.fillStyle = "yellow";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
