var bola;

// função configuração 
function setup() {

  // criando tela do jogo
  createCanvas(400,400);
  
  bola = createSprite(47,92,19,29);
}

function draw() 
{ 

  background(30);

  if(keyIsDown(UP_ARROW)){
   bola.y = bola.y -4;
  }
  if(keyIsDown(DOWN_ARROW)){
    bola.y = bola.y +4;
   }
   if(keyIsDown(LEFT_ARROW)){
    bola.x = bola.x -4;
   }
   if(keyIsDown(RIGHT_ARROW)){
    bola.x = bola.x +4;
   }
   
  drawSprites();
}




