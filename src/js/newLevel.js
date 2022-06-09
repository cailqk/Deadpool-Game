import { scene } from "./score.js";

let newLevelScreen = document.querySelector(".new-level");
let screen = document.querySelector(".play-screen");

function newLevel() {
  scene.activeGame = false;
  newLevelScreen.classList.remove("hidden");
  screen.classList.add("blur");
}

export { newLevel };
