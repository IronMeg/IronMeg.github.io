var TopBound = 170;
var LeftBound = 100;
var ButBound2 = 240;
var ButBound3 = 380;
var RightBound = 500;
var ButHeight = 55;
var ButWidth = 120;
var BottomBound = TopBound + ButHeight;
var WordLength = 200;
var TypeLength = 50;
var SentWidth = 400;
var SentHeight = 250;
var tbWidth = 275;
var newR = 60;
var newL = 300-30;
var newTop = 275;
var newBott = 15;
var saveL = 300-30;
var saveR = 60;
var saveTop = 250;
var saveBott = 15;


var counter = 1;
var cnv, canvasImage;

var fontReg, fontBig, fontItal

var rg,rn,rv,ra, w0rd, n0un, v3rb, ad7;
var toggleN = false;
var toggleV = false;
var toggleA = false;
var toggle = false;

var saveRequest = false;

function preload(){
  fontReg = loadFont("fonts/StagLight.otf");
  fontBig = loadFont("fonts/LemonMilk.otf");
  fontItal = loadFont("fonts/StagIta2.otf");
}

function setup() {
  cnv = createCanvas(600,300)
  reset();
}

function draw() {
  background(112,166,255);
  if(toggle == false){
    fill(186,212,255);
    if(mouseX > LeftBound && mouseX < LeftBound+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
      stroke(186,212,255);
      strokeWeight(5);
      rect(LeftBound,TopBound,ButWidth,ButHeight);
    }else{
    noStroke();
    rect(LeftBound,TopBound,ButWidth,ButHeight);
    }
    if(mouseX > ButBound2 && mouseX < ButBound2+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
      stroke(186,212,255);
      strokeWeight(5);
      rect(ButBound2,TopBound,ButWidth,ButHeight);
    }else{
    noStroke();
    rect(ButBound2,TopBound,ButWidth,ButHeight);
    }
    if(mouseX > ButBound3 && mouseX < ButBound3+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
      stroke(186,212,255);
      strokeWeight(5);
      rect(ButBound3,TopBound,ButWidth,ButHeight);
    }else{
    noStroke();
    rect(ButBound3,TopBound,ButWidth,ButHeight);
    }
    if(mouseX > newL && mouseX < newL+newR && mouseY > newTop && mouseY < newTop+newBott){
      noStroke();
      fill(138,182,252);
      rect(newL,newTop,newR,newBott);
    }else{
      noStroke();
      fill(106,158,242);
      rect(newL,newTop,newR,newBott);
    }
    noStroke();
    fill('black');
    textAlign(CENTER);
    textSize(12);
    text("new word", newL+1,newTop+2,newR,newBott);
    
    textSize(60);
    textFont(fontBig);
    text(w0rd, width/2,90);
    textSize(30);
    textFont(fontReg);
    text("This word is a...",width/2,150);
    textSize(20);
    text("Noun",LeftBound+1,TopBound+19,ButWidth,ButHeight);
    text("Verb",ButBound2+2,TopBound+19,ButWidth,ButHeight);
    text("Adjective",ButBound3+2,TopBound+19,ButWidth,ButHeight);
  }else if(toggleN == true){
    textFont(fontReg);
    // text("Noun loading...", width/2,height/3);
    textAlign(RIGHT);
    textAlign(BOTTOM);
    textFont(fontBig);
    textSize(30);
    text(w0rd, 0, (height/2), WordLength);
    textAlign(LEFT);
    textFont(fontItal);
    textSize(20);
    text("noun:", WordLength-5, height/2, TypeLength);
    textFont(fontReg);
    text(n0un,WordLength+TypeLength-5, height/2, tbWidth);
    
    if(mouseX > newL && mouseX < newL+newR && mouseY > newTop && mouseY < newTop+newBott){
      fill(138,182,252);
      rect(newL,newTop,newR,newBott);
    }else{
      fill(106,158,242);
      rect(newL,newTop,newR,newBott);
    }
    fill('black');
    textAlign(CENTER);
    textSize(12);
    text("new word", newL+1,newTop+2,newR,newBott);
    
    if(mouseX > saveL && mouseX < saveL+saveR && mouseY > saveTop && mouseY < saveTop+saveBott){
      noStroke();
      fill(138,182,252);
      rect(saveL,saveTop,saveR,saveBott);
    }else{
      noStroke();
      fill(106,158,242);
      rect(saveL,saveTop,saveR,saveBott);
    }
    noStroke();
    fill('black');
    textAlign(CENTER);
    textSize(12);
    text("save word", saveL+1,saveTop+2,saveR,saveBott);
  }else if(toggleV == true){
    textFont(fontReg);
    // text("Verb loading...", width/2,height/3);
    textAlign(RIGHT);
    textFont(fontBig);
    textSize(30);
    text(w0rd, 0, (height/2), WordLength);
    textAlign(LEFT);
    textFont(fontItal);
    textSize(20);
    text("verb:", WordLength-5, height/2, TypeLength);
    textFont(fontReg);
    text(v3rb,WordLength+TypeLength-5, height/2, tbWidth);
    
    if(mouseX > newL && mouseX < newL+newR && mouseY > newTop && mouseY < newTop+newBott){
      fill(138,182,252);
      rect(newL,newTop,newR,newBott);
    }else{
      fill(106,158,242);
      rect(newL,newTop,newR,newBott);
    }
    fill('black');
    textAlign(CENTER);
    textSize(12);
    text("new word", newL+1,newTop+2,newR,newBott);
    
    if(mouseX > saveL && mouseX < saveL+saveR && mouseY > saveTop && mouseY < saveTop+saveBott){
      noStroke();
      fill(138,182,252);
      rect(saveL,saveTop,saveR,saveBott);
    }else{
      noStroke();
      fill(106,158,242);
      rect(saveL,saveTop,saveR,saveBott);
    }
    noStroke();
    fill('black');
    textAlign(CENTER);
    textSize(12);
    text("save word", saveL+1,saveTop+2,saveR,saveBott);
  }else if(toggleA == true){
    textFont(fontReg);
    // text("Adjective loading...", width/2,height/3);
    textAlign(RIGHT);
    textFont(fontBig);
    textSize(30);
    text(w0rd, 0, (height/2), WordLength);
    textAlign(LEFT);
    textFont(fontItal);
    textSize(20);
    text("adjective:", WordLength-5, height/2, TypeLength);
    textFont(fontReg);
    text(ad7,WordLength+TypeLength+30, height/2, tbWidth-30);
    
    if(mouseX > newL && mouseX < newL+newR && mouseY > newTop && mouseY < newTop+newBott){
      fill(138,182,252);
      rect(newL,newTop,newR,newBott);
    }else{
      fill(106,158,242);
      rect(newL,newTop,newR,newBott);
    }
    fill('black');
    textAlign(CENTER);
    textSize(12);
    text("new word", newL+1,newTop+2,newR,newBott);
    
    if(mouseX > saveL && mouseX < saveL+saveR && mouseY > saveTop && mouseY < saveTop+saveBott){
      noStroke();
      fill(138,182,252);
      rect(saveL,saveTop,saveR,saveBott);
    }else{
      noStroke();
      fill(106,158,242);
      rect(saveL,saveTop,saveR,saveBott);
    }
    noStroke();
    fill('black');
    textAlign(CENTER);
    textSize(12);
    text("save word", saveL+1,saveTop+2,saveR,saveBott);
  }else{
    fill('black');
    textSize(12);
    textFont(fontReg);
    text("Generating...",width/2,height/2);
  }
  
  var h = hour();
  var m = minute();
  var s = second();
  
  if (saveRequest == true){
    fill('black');
    textAlign(RIGHT);
    textSize(12);
    text("Lit Dictionary \n by Megan Vanderah",600,280);
    fill(112,166,255);
    rect(260,240,70,70);
      canvasImage = "exports/"+w0rd+h+m+s+".png";
      save(cnv,canvasImage);
      console.log("image saved");
      saveRequest = false;
  }
}

function mousePressed(){
  if(mouseX > LeftBound && mouseX < LeftBound+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
    toggle = true;
    console.log("clicked noun");
    toggleN = true;
    TopBound = 500;
  }else if(mouseX > ButBound2 && mouseX < ButBound2+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
    toggle = true;
    console.log("clicked verb");
    toggleV =true;
    TopBound = 500;
  }else if(mouseX > ButBound3 && mouseX < ButBound3+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
    toggle = true;
    console.log("clicked adj");
    toggleA =true;
    TopBound = 500;
  }
  
  if(mouseX > saveL && mouseX < saveL+saveR && mouseY > saveTop && mouseY < saveTop+saveBott){
      saveRequest = true;
      console.log("save clicked");
    }
    
  
  if(mouseX > newL && mouseX < newL+newR && mouseY > newTop && mouseY < newTop+newBott){
    reset();
  }
}

function reset(){
  toggle = false;
  toggleN = false;
  toggleV = false;
  toggleA = false;
  TopBound = 170;

  
  rg = new RiGrammar();
  rg.addRule('<start>', 'hella | same | lit | selfie | on fleek | bae | yolo | fomo | sharknado | salty | meme | Netflix & chill | swag | finsta',2);
  rg.addRule('<start>', 'LitDict');
  
  rn = new RiGrammar();
  rn.addRule('<start>', "a <1><I>. | the <A><I>.", 2);
  rn.addRule('<start>', "everyone's favorite <1><I>.")
  rn.addRule('<1>', "<adj1><2>");
  rn.addRule('<adj1>',"<adj> ")
  rn.addRule('<adj>', "fake|secret|famous|very cool|modern day")
  rn.addRule('<2>', "<3> | period of <Time> | time <Time2> | mobile app | movie | dictionary | social media <3> | version of <you>");
  rn.addRule('<3>', "picture | profile | person");
  rn.addRule('<you>', "yourself | your favorite character | your best friend | your pet");
  rn.addRule('<Time>', "two weeks | five years | mourning | many sharks | romantic relations");
  rn.addRule('<Time2>', "of the day | for watching television");
  rn.addRule('<A>', "fear of <fear> | best <2>");
  rn.addRule('<fear>', "dying young | missing out");
  rn.addRule('<I>', " on the internet");
  rn.addRule('<I>','',3);
  
  rv = new RiGrammar();
  rv.addRule('<start>', "to <1><I>. | the act of <2><I>.");
  rv.addRule('<1>', "trust <T> | decorate <D> | live <L> | live, but just barely | be <B> | laugh | engage in sexual activity very loudly");
  rv.addRule('<T>', "someone completely | no one | a little too much");
  rv.addRule('<D>', "one's <object> | for <Holi> | excessively");
  rv.addRule('<object>',"self | pet | home | dead-end-job office cubicle");
  rv.addRule('<Holi>',"a holiday no one likes | Christmas | Halloween");
  rv.addRule('<L>', "alone | with your parents. Five years after graudating college. To be sad | happily ever after | the life you want | on the edge");
  rv.addRule('<2>', "dying | going <G> | doing <d0>");
  rv.addRule('<G>', "home | to bed | away");
  rv.addRule('<d0>', "nothing | too much | something meaningful");
  rv.addRule('<I>',"",3);
  rv.addRule('<I>'," on the internet");
  
  ra = new RiGrammar();
  ra.addRule('<start>', "very <a> | a state of being <b> | <a> | <b> | loved with deep affection");
  ra.addRule('<a>', "cool | good | fun | boring | popular | problematic | sexy | kind | well-considered");
  ra.addRule('<b>', "similar to another | intoxicated | incredibly happy | unclean | unprepared | fearful | perfect");
  
  w0rd = rg.expand();
  n0un = rn.expand();
  v3rb = rv.expand();
  ad7 =  ra.expand();
  
  
  console.log(counter+"-"+w0rd +": "+n0un+" OR "+v3rb+" OR "+ad7);
  counter++
}