import Player from "./Player.js";
import InputHandler from "./InputHandler.js";
import UI from "./UI.js";
import { Angler1 } from "./Enemy.js";
import { Background } from "./Background.js";

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
    this.ammoInterval = 500; //elke halve sec ammo aan toegevoegd
    this.ui = new UI(this);
    this.background = new Background(this);

    this.enemies = [];
    this.enemyTimer = 0;
    this.enemyInterval = 1000; //elke seconde

    this.gameOver = false;
    this.score = 0;
    this.winningScore = 10;
    this.gameTime = 0;
    this.timeLimit = 5000;
    this.speed = 1;
  }

  update(deltaTime) {
    if (!this.gameOver) this.gameTime += deltaTime;
    if (this.gameOver > this.timeLimit) this.gameOver = true;

    this.background.update();
    this.background.layer4.update();
    this.player.update();

    this.player.update();
    if (this.ammoTimer > this.ammoInterval) {
      if (this.ammo < this.maxAmmo) {
        this.ammo++;
        this.ammoTimer = 0;
      }
    } else {
      this.ammoTimer += deltaTime;
    }
    //console.log(this.ammo);

    this.enemies.forEach((enemy) => {
      enemy.update();
      if (this.checkCollision(this.player, enemy)) {
        enemy.markedForDeletion = true;
      }
      this.player.projectiles.forEach((projectile) => {
        if (this.checkCollision(projectile, enemy)) {
          enemy.lives--;
          //console.log(enemy.lives);
          projectile.markedForDeletion = true;
          if (enemy.lives <= 0) {
            enemy.markedForDeletion = true;
            this.score += enemy.score;
          }
        }
      });
    });
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy();
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.ui.draw();
    this.enemies.forEach((enemy) => enemy.draw());
    this.background.layer4.draw();
  }

  addEnemy() {
    this.enemies.push(new Angler1(this));
  }
  checkCollision(rect1, rect2) {
    //gelijk welk object in het spel:speler,kogel,enemy
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.height + rect1.y > rect2.y
    );
  }
}
