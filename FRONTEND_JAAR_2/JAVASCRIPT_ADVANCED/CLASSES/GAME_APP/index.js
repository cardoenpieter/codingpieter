import Game from "./classes/Game.js";

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  const game = new Game(ctx, canvas.width, canvas.height);
  let lastTime = 0;

  function animate(timestamp) {
    const deltaTime = timestamp - lastTime; //tijd weergeven in het spel om iets te laten gebeuren
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update(deltaTime); //update state
    game.draw(); // update draw zijn pixels updaten
    requestAnimationFrame(animate); //gameloop: is een ifinite loop, animate geeft een timestamp mee
  }
  animate(0); //moet op 0 staan om de deltatime
});
