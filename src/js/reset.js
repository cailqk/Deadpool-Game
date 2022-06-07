import { scene } from "./score.js";
import { player } from "./character.js";

export function reset() {
  scene.score = 0;
  scene.enemySpawn = 0;
  scene.activeGame = true;
  scene.health = 100;
  scene.kills = 0;

  let scoreEl = document.querySelector(".game-score");
  let healthEl = scoreEl.querySelector(".health");
  let points = scoreEl.querySelector(".points");
  let kills = scoreEl.querySelector(".kills");

  points.textContent = scene.score;
  healthEl.textContent = scene.health;
  kills.textContent = scene.kills;
  player.x = 100;
  player.y = 150;


  let gameOver = document.querySelector(".game-over");
  let screen = document.querySelector(".play-screen");

  gameOver.classList.add("hidden");
  screen.classList.remove("blur");
}
