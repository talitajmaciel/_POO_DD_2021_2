class Bubble {
  x; 
  y;
  letter; 
  speed;

  static radius = 20; 
  alive = true;
  constructor(x, y, letter, speed){
      this.x = x;
      this.y = y;
      this.letter = letter;
      this.speed = speed;
  }
  update() {
      this.y += this.speed;
  }
  
  draw() {
      fill(255);
      stroke(255);
      circle(this.x, this.y, 2 * Bubble.radius);
      fill(0);
      stroke(0);
      textSize(15);
      text(this.letter, this.x - 5, this.y + 5); 
  }
}

class Board {
timeout = 30;
timer = 0;
hits = 0;
mistakes = 0;
constructor() {
  this.bubbles = [new Bubble(100, 100, "a", 1)];
  this.bubbles.push(new Bubble(200, 100, "b", 2));
  this.bubbles.push(new Bubble(300, 100, "c", 3));
}

update() {
  this.checkBubbleTime();
  this.markOutsideBubbles();
  //this.addBubble();
  for(let bubble of this.bubbles){
    bubble.update();
  }
  this.removeDeadBubbles();
}

removeDeadBubbles() {
  this.bubbles = this.bubbles.filter(b => b.alive);
}

removeByHit(code) {
  for(let bubble of this.bubbles){
    if(bubble.letter[0].toUpperCase().charCodeAt(0) == code){
      bubble.alive = false;
      this.hits++;
      break;
    }
  }
}

checkBubbleTime() {
  this.timer -= 1;
  if(this.timer <= 0){
     this.addBubble();
     this.timer = this.timeout;
  }
}

markOutsideBubbles() {
  for(let bubble of this.bubbles){
    if(bubble.y + 2 * Bubble.radius >= height){
      bubble.alive = false;
      this.mistakes++;
    }
  }
}

addBubble() {
  let x = random(10, width - 2 * Bubble.radius);
  let y = -2 * Bubble.radius;
  let letter = random(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  let speed = random(1, 7);
  let bubble = new Bubble(x, y, letter, speed);
  this.bubbles.push(bubble);
}  

draw() {
  stroke("white");
  fill("white");
  textSize(30);
  text("hits: " + this.hits + " mistakes: " + this.mistakes, 30, 30);
  for(let bubble of this.bubbles){
    bubble.draw();
  }
}
}

class Game {
constructor(){
  this.board = new Board();
  this.activeState = this.gamePlay;
}

gamePlay() {
  this.board.update();
  background(50, 50, 50);
  this.board.draw();
  if(this.board.mistakes > 5){
    this.activeState = this.gameOver;
  }
}

gameOver() {
  background(255, 20, 20);
  fill(255);
  textSize(100);
  text("Game Over", 140, 250);
  if(random(50) < 1){
    this.activeState = this.gamePlay;
  }
}
}

let game;

function setup() {
  createCanvas(800, 450);
  frameRate(30);
  game = new Game();
}

function keyPressed() {
game.board.removeByHit(keyCode);
let estouro = new Audio("./estouro.mp3");
estouro.play();
}

function draw() {
  game.activeState();
}

