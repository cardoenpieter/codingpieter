import Projectile from "./Projectile.js";

export default class Player {
  constructor(game) {
    this.game = game;
    this.width = 120; //is gebaseerd op de .png file (sprite)
    this.height = 190; //is gebaseerd op de .png file (sprite)
    this.x = 20;
    this.y = 100;
    this.speedY = 0;
    this.maxSpeed = 3;
    this.projectiles = []; //speler wil weten op elk moment hoeveel projectiles we hebben
  }
  update() {
    if (this.game.keys.includes("ArrowUp"))
      this.speedY = -this.maxSpeed; //0-punt begint altijd in linkerbovenhoek
    else if (this.game.keys.includes("ArrowDown")) this.speedY = this.maxSpeed;
    else this.speedY = 0;
    this.y += this.speedY; //verticale as
    this.projectiles.forEach((projectile) => {
      projectile.update();
    });
    this.projectiles = this.projectiles.filter(
      (projectile) => !projectile.markedForDeletion //projectiles die niet markedfordeletion zijn worden er uit gefilterd
    );
  }
  draw() {
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height); //vierkant
    this.projectiles.forEach((projectile) => {
      projectile.draw();
    });
  }

  shootTop() {
    if (this.game.ammo > 0) {
      this.projectiles.push(new Projectile(this.game, this.x, this.y));
      this.game.ammo--; //ammo leegmaken
    }
  }
}
