class Entity {
    constructor(x, y, step, image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
        this.alive = true;
        this.timeToRessurect = 0;
    }
      
      update() {
        if(!this.alive){
          this.timeToRessurect--;
          if(this.timeToRessurect <= 0){
             this.alive = true;
             this.timeToRessurect = 0;
          }
        }
      }
    draw() {
      if(!this.alive){
        return;
      }
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    }
    move() {
      const number = Math.floor(Math.random() * 10) + 1;
      
      if (number <= 2) {
        const random = Math.floor(Math.random() * 10) + 1;
          
        if (random % 2 === 0 && this.x < 8)
          this.x++;
        else if (this.x > 0)
          this.x--;
        else 
          this.x++;
        
        if (random % 2 === 0 && this.y < 6)
          this.y++;
        else if (this.y > 0)
          this.y--;
        else 
          this.y++;
      } else if (number <= 4) {
        const random = Math.floor(Math.random() * 10) + 1;
        
        if (random % 2 === 0 && this.x < 8)
          this.x++;
        else if (this.x > 0)
          this.x--;
        else 
          this.x++;
        
        if (random % 2 === 0 && this.y < 6)
          this.y++;
        else if (this.y > 0)
          this.y--;
        else 
          this.y++;
      } else if (number <= 6) {
        const random = Math.floor(Math.random() * 10) + 1;

        if (random % 2 === 0 && this.x < 8)
          this.x++;
        else if (this.x > 0)
          this.x--;
        else 
          this.x++;
        
        if (random % 2 === 0 && this.y < 6)
          this.y++;
        else if (this.y > 0)
          this.y--;
        else 
          this.y++;
      } else if (number <= 8) {
        const random = Math.floor(Math.random() * 10) + 1;
        
        if (random % 2 === 0 && this.x < 8)
          this.x++;
        else if (this.x > 0)
          this.x--;
        else 
          this.x++;
        
        if (random % 2 === 0 && this.y < 6)
          this.y++;
        else if (this.y > 0)
          this.y--;
        else 
          this.y++;
      } else {
        const random = Math.floor(Math.random() * 10) + 1;
        
        if (random % 2 === 0 && this.x < 8)
          this.x++;
        else if (this.x > 0)
          this.x--;
        else 
          this.x++;
        
        if (random % 2 === 0 && this.y < 6)
          this.y++;
        else if (this.y > 0)
          this.y--;
        else 
          this.y++;
      }
    }
}

class Board {
    constructor(nc, nl, step, background) {
        this.nc = nc;
        this.nl = nl;
        this.step = step;
        this.background = background;
    }
    draw() {
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for (let x = 0; x < this.nc; x++) {
            for (let y = 0; y < this.nl; y++) {
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    }
}

const NC = 7;
const NL = 5;
let coyote_img;
let papaleguas_img;
let cenario_img;
let cacto_img;
let coyote;
let papaleguas;
let cenario;
let cacto;

function loadImg(path) {
    return loadImage(path,
                     () => console.log("Loading " + path + " ok"), 
                     () => console.log("Loading " + path + " error")
    );
}

function preload() {
    coyote_img = loadImg('coyote.png');
    papaleguas_img = loadImg('papaléguas.png');
    cenario_img = loadImg('cenário.jpg');
    cacto_img = loadImg('cacto.png');
}

function keyPressed() {
  let coyote_x = coyote.x;
  let coyote_y = coyote.y;
  let papaleguas_x = papaleguas.x;
  let papaleguas_y = papaleguas.y;
  let cacto_x = cacto.x;
  let cacto_y = cacto.y;
  
    if (keyCode === LEFT_ARROW) {
        coyote.x--;
    }
    else if (keyCode === RIGHT_ARROW) {
        coyote.x++;
    }
    else if (keyCode === UP_ARROW) {
        coyote.y--;
    }
    else if (keyCode === DOWN_ARROW) {
        coyote.y++;
    }
    if (keyCode === "A".charCodeAt(0)) {
        papaleguas.x--;
    }
    else if (keyCode === "D".charCodeAt(0)) {
        papaleguas.x++;
    }
    else if (keyCode === "W".charCodeAt(0)) {
        papaleguas.y--;
    }
    else if (keyCode === "S".charCodeAt(0)) {
        papaleguas.y++;
    }
  
    papaleguas.move(); 
  
    if(coyote.x == papaleguas.x && coyote.y == papaleguas.y){
      papaleguas.alive = false;
      papaleguas.timeToRessurect = 30;
    }
   if(coyote.x == cacto.x && coyote.y == cacto.y){
      coyote.alive = false;
      coyote.timeToRessurect = 30;
   }
}

function collision_coyote_papaleguas() {
  if (coyote.x === papaleguas.x && coyote.y === papaleguas.y) {
  console.log("Fim de jogo! Você pegou o Papaléguas!");
  }
}

function collision_coyote_cacto() {
  if(coyote.x === cacto.x && coyote.y === cacto.y){
  console.log("Bateu no cacto. Tente novamente!");
  }
}

function setup() {
    let size = 80;
    frameRate(10);
    coyote = new Entity(0, 4, size, coyote_img);
    papaleguas = new Entity(1, 4, size, papaleguas_img);
    cenario = new Board(NC, NL, size, cenario_img);
    cacto = new Entity(3, 3, size, cacto_img);
    createCanvas(cenario.nc * size, cenario.nl * size);
}

function draw() {
    papaleguas.update();
    coyote.update();
    cenario.draw();
    cacto.draw();
    coyote.draw();
    papaleguas.draw();
    collision_coyote_papaleguas();
    collision_coyote_cacto();
}