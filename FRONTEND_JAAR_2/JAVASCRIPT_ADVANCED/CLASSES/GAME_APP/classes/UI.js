export default class UI {
  constructor(game) {
    this.game = game;
    this.color = "white";
    this.fontFamily = "Arial";
    this.fontSize = 25;
  }

  draw() {
    const context = this.game.ctx;
    context.save();
    context.fillStyle = this.color;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "black";
    context.font = this.fontSize + "px " + this.fontFamily;
    context.fillText("Score: " + this.game.score, 20, 40);
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(20 + 5 * i, 50, 3, 20);
    }
    // timer
    const formattedTime = (this.game.gameTime * 0.001).toFixed(1);
    context.fillText("Timer: " + formattedTime, 20, 100);
    // game over messages
    if (this.game.gameOver) {
      context.textAlign = "center";
      let message1;
      let message2;
      if (this.game.score >= this.game.winningScore) {
        message1 = "You win!";
        message2 = "Well done.";
      } else {
        message1 = "You lost.";
        message2 = " Try again next time.";
      }
      context.font = "50px " + this.fontFamily;
      context.fillText(
        message1,
        this.game.width * 0.5,
        this.game.height * 0.5 - 40
      );
      context.font = "25px " + this.fontFamily;
      context.fillText(
        message2,
        this.game.widh * 0.5,
        this.game.height * 0.5 + 40
      );
    }
    context.restore();
  }
}
