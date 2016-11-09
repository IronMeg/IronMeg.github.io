var rg, ra, fear, result;
var toggle = false;
var TopBound = 20;
var BotBound = 50;
var LeftBound = 100;
var RightBound = 200;
var currentArea = "";
var font1;

function preload(){
  font1 = loadFont("fonts/Dragon.otf")
}

function setup(){
  createCanvas(300,130);
  rg = new RiGrammar();
  rg.addRule('<start>', '<N> | <M> | <P>', 2);
  rg.addRule('<start>','I <V> you.');
  rg.addRule('<V>','care about | love | am here for')
  rg.addRule('<N>', 'Stay <S>.');
  rg.addRule('<M>', 'Take a breath.');
  rg.addRule('<P>', 'You are strong.');
  rg.addRule('<S>', 'calm | safe | brave');
  
  ra = new RiGrammar();
  ra.addRule('<start>', '<f>.');
  ra.addRule('<f>', 'you are <e> | there is <d>');
  ra.addRule('<e>','afraid | worried | not Trump');
  ra.addRule('<d>','general panic | bad news | fear');
  
  result = rg.expand();
  fear = ra.expand();
}

function draw(){
  background(100,100,170);
  fill('white');
  noStroke();
  rect(100,20,100,30);
  
  
  if(toggle == true){
    textAlign(CENTER);
    textFont(font1);
    fill('white');
    textSize(100);
    text(result, 150,90);
    fill(200);
    textSize(12);
    textFont("Helvetica");
    text("and refresh", 100,29,100,30);
  }else{
  fill('black');
  textAlign(CENTER);
  textSize(12);
  textFont("Helvetica");
  text("Click if " + fear, 100,22,100,30);
  }
}

function mousePressed(){
    if(mouseY > TopBound && mouseY < BotBound){
    if(mouseX > LeftBound && mouseX < RightBound){
      toggle = true
    }else{
      toggle = false;
    }
  }else{
    toggle = false;
  }
}