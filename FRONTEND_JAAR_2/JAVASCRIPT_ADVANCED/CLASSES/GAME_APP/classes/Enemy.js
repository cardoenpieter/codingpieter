export class Enemy {
  constructor(game) {
    this.game = game;
    this.x = this.game.width; //width van enemy, x is voor alle enemies hetzelfde
    this.speedX = Math.random() * -1.5 - 0.5;
    this.markedForDeletion = false;
    this.lives = 5;
    //console.log(this.lives);
    this.score = this.lives;
  }

  update() {
    this.x += this.speedX;
    if (this.x + this.width < 0) this.markedForDeletion = true;
  }

  draw() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Angler1 extends Enemy {
  //inheritance
  //angler1 is een uitbreiding van de enemy
  constructor(game) {
    super(game); //call de constructor van enemy
    this.width = 228 * 0.2;
    this.height = 169 * 0.2;
    this.y = Math.random() * (this.game.height * 0.9 - this.height);
  }
}
