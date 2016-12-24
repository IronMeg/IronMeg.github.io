var img, colorSlide;
var c1x1 = 40;
var c1x2 = c1x1+58;
var cytop = 275;
var cybottom = cytop+82;
var cyTop = cytop+82-45;
var toggle1 = false;
var toggle2 = false;
var toggle3 = false;
var toggle4 = false;
var toggle5 = false;
var toggle6 = false;
var toggle7 = false;
var toggle8 = false;

function setup() {
  createCanvas(720,820);
  img = loadImage("assets/outline2.png");
  
  colorSlide = createSlider(0,400,230);
  colorSlide.position(295,170);
}

function draw() {
  colorMode(HSB,400,400,400);
  fill(colorSlide.value(),400,400);
  noStroke();
  rect(0,360,720,820-360);
  rect(320,310,80,820-310);
  colorMode(RGB, 255);
  
  //candle 1
  if(toggle1 == true){
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    for(var start = 0; start < 1500; start++){
      fill(255,random(0,255),random(0,102));
      noStroke();
      ellipse(random(c1x1,c1x2),cybottom,random(10));
      cybottom--;
      if(cybottom < 0){
      cybottom = cytop+82;
      }
    }
  }
  
  //candle 2
  push();
  translate(70,0);
    if(toggle2 == true){
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    for(var start = 0; start < 1500; start++){
      fill(255,random(0,255),random(0,102));
      noStroke();
      ellipse(random(c1x1,c1x2),cybottom,random(10));
      cybottom--;
      if(cybottom < 0){
      cybottom = cytop+82;
      }
    }
  }
  pop();
  
  //candle 3
  push();
  translate(142,0);
    if(toggle3 == true){
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    for(var start = 0; start < 1500; start++){
      fill(255,random(0,255),random(0,102));
      noStroke();
      ellipse(random(c1x1,c1x2),cybottom,random(10));
      cybottom--;
      if(cybottom < 0){
      cybottom = cytop+82;
      }
    }
  }
  pop();
  
  //candle 4
  push();
  translate(216,0);
  if(toggle4 == true){
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    for(var start = 0; start < 1500; start++){
      fill(255,random(0,255),random(0,102));
      noStroke();
      ellipse(random(c1x1,c1x2),cybottom,random(10));
      cybottom--;
      if(cybottom < 0){
      cybottom = cytop+82;
      }
    }
  }
  pop();
  
  //shamash??
    push();
    translate(272,-150);
    scale(1.3);
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    pop();
    frameRate(5);
    for(var start = 0; start < 1500; start++){
    fill(255,random(0,255),random(0,102));
    noStroke();
    ellipse(random(c1x1+290,c1x2+296),cyTop,random(10));
    cyTop--;
    if(cyTop < 0){
      cyTop = cytop+82-45;
    }
  }
  
  //candle 5
  push();
  translate(367,0);
  if(toggle5 == true){
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    for(var start = 0; start < 1500; start++){
      fill(255,random(0,255),random(0,102));
      noStroke();
      ellipse(random(c1x1,c1x2),cybottom,random(10));
      cybottom--;
      if(cybottom < 0){
      cybottom = cytop+82;
      }
    }
  }
  pop();
  
  //candle 6
  push();
  translate(441,0);
  if(toggle6 == true){
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    for(var start = 0; start < 1500; start++){
      fill(255,random(0,255),random(0,102));
      noStroke();
      ellipse(random(c1x1,c1x2),cybottom,random(10));
      cybottom--;
      if(cybottom < 0){
      cybottom = cytop+82;
      }
    }
  }
  pop();
  
  //candle 7
  push();
  translate(513,0);
  if(toggle7 == true){
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    for(var start = 0; start < 1500; start++){
      fill(255,random(0,255),random(0,102));
      noStroke();
      ellipse(random(c1x1,c1x2),cybottom,random(10));
      cybottom--;
      if(cybottom < 0){
      cybottom = cytop+82;
      }
    }
  }
  pop();
  
  //candle 8
  push();
  translate(587,0);
  if(toggle8 == true){
    fill('white');
    quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
    for(var start = 0; start < 1500; start++){
      fill(255,random(0,255),random(0,102));
      noStroke();
      ellipse(random(c1x1,c1x2),cybottom,random(10));
      cybottom--;
      if(cybottom < 0){
      cybottom = cytop+82;
      }
    }
  }
  pop();
  
  image(img,0,0);

}

function filler(){
  fill('rgba(0,0,0,.5)');
  quad(c1x1,cytop,c1x2,cytop,c1x2,cybottom,c1x1,cybottom);
}

function mousePressed(){
  if(mouseX>c1x1 && mouseX <c1x2 && mouseY > cytop && mouseY < cytop+82){
    toggle1 = true;
  }
  if(mouseX>c1x1+70 && mouseX <c1x2+70 && mouseY > cytop && mouseY < cytop+82){
    toggle2 = true;
  }
  if(mouseX>c1x1+142 && mouseX <c1x2+142 && mouseY > cytop && mouseY < cytop+82){
    toggle3 = true;
  }  
  if(mouseX>c1x1+216 && mouseX <c1x2+216 && mouseY > cytop && mouseY < cytop+82){
    toggle4 = true;
  }
  if(mouseX>c1x1+367 && mouseX <c1x2+367 && mouseY > cytop && mouseY < cytop+82){
    toggle5 = true;
  }
  if(mouseX>c1x1+441 && mouseX <c1x2+441 && mouseY > cytop && mouseY < cytop+82){
    toggle6 = true;
  }
  if(mouseX>c1x1+513 && mouseX <c1x2+513 && mouseY > cytop && mouseY < cytop+82){
    toggle7 = true;
  }
  if(mouseX>c1x1+587 && mouseX <c1x2+587 && mouseY > cytop && mouseY < cytop+82){
    toggle8 = true;
  }
}
