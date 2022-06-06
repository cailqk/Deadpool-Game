import { scene } from "./score.js";
import * as hero from "./character.js";
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

  let gameOver = document.querySelector(".game-over");
  let screen = document.querySelector(".play-screen");

  hero.hero();

  gameOver.classList.add("hidden");
  screen.classList.remove("blur");
}
