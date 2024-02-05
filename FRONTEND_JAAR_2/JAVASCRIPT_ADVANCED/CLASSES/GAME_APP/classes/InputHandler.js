export default class InputHandler {
  //   constructor() {
  //     const input = document.getElementById("canvas");
  //     window.addEventListener("keydown", logKey);
  //     function logKey(e) {
  //       console.log((input.textContent += ` ${e.code}`));
  //       input.textContent += ` ${e.code}`;
  //     }
  //   }

  constructor(game) {
    this.game = game;
    this.shootKey = " "; //key kiezen om te shooten
    window.addEventListener("keydown", (e) => {
      const key = e.key;
      const index = this.game.keys.indexOf(key);
      if (index === -1 && (key === "ArrowUp" || key === "ArrowDown"))
        this.game.keys.push(key);
      else if (key === this.shootKey) this.game.player.shootTop();
    });

    window.addEventListener("keyup", (e) => {
      const index = this.game.keys.indexOf(e.key);
      if (index > -1) this.game.keys.splice(index, 1);
    });
  }
}
