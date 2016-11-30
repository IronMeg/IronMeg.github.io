var TopBound = 340;
var LeftBound = 200;
var ButBound2 = 480;
var ButBound3 = 760;
var RightBound = 1000;
var ButHeight = 110;
var ButWidth = 240;
var BottomBound = TopBound + ButHeight;
var WordLength = 400;
var TypeLength = 100;
var SentWidth = 800;
var SentHeight = 500;
var tbWidth = 550;
var newR = 120;
var newL = 600-60;
var newTop = 550;
var newBott = 30;
var saveL = 600-60;
var saveR = 120;
var saveTop = 500;
var saveBott = 30;
var aboutL = 100-60;
var aboutR = 120;
var aboutR2 = 120;
var aboutTop = 550;
var aboutTop2 = 550;
var aboutBott = 30;
var aboutBott2 = 30;

var intr0 = "This is a Lit Dictionary to define* commonly confusing millenial words. Try different word types for hiliarious results! \n \n*most defintions not accuarte"
var textR = 112;
var textG = 166;
var textB = 255;
var t1me = 90;


var counter = 1;
var counter2 = 1;
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
  cnv = createCanvas(1200,600)
  reset();
}

function draw() {
  background(112,166,255);
  if(toggle == false){
    fill(186,212,255);
    if(mouseX > LeftBound && mouseX < LeftBound+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
      stroke(186,212,255);
      strokeWeight(10);
      rect(LeftBound,TopBound,ButWidth,ButHeight);
    }else{
    noStroke();
    rect(LeftBound,TopBound,ButWidth,ButHeight);
    }
    if(mouseX > ButBound2 && mouseX < ButBound2+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
      stroke(186,212,255);
      strokeWeight(10);
      rect(ButBound2,TopBound,ButWidth,ButHeight);
    }else{
    noStroke();
    rect(ButBound2,TopBound,ButWidth,ButHeight);
    }
    if(mouseX > ButBound3 && mouseX < ButBound3+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
      stroke(186,212,255);
      strokeWeight(10);
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
    textSize(20);
    text("new word", newL+2,newTop+4,newR,newBott);
    
    if(mouseX > aboutL && mouseX < aboutL+aboutR && mouseY > aboutTop && mouseY < aboutTop+aboutBott){
      fill(138,182,252);
      rect(aboutL,aboutTop2-90,210,aboutBott2+90);
      fill(textR-t1me,textG-t1me,textB-t1me);
      textFont(fontReg);
      textSize(15);
      textAlign(LEFT);
      text(intr0,aboutL+3,aboutTop2-85,207,110);
      textAlign(CENTER);
    }else{
      aboutTop2 = aboutTop;
      aboutR2 = aboutR;
      aboutBott2 = aboutBott;
      textR = 112;
      textG = 166;
      textB = 255;
      fill(106,158,242);
      rect(aboutL,aboutTop,aboutR,aboutBott);
      fill('black');
      textAlign(CENTER);
      textSize(20);
      text("wut dis?", aboutL+2,aboutTop+4,aboutR,aboutBott);
    }
    
    fill('black');
    textSize(120);
    textFont(fontBig);
    text(w0rd, width/2,180);
    textSize(60);
    textFont(fontReg);
    text("This word is a...",width/2,300);
    textSize(40);
    text("Noun",LeftBound+2,TopBound+38,ButWidth,ButHeight);
    text("Verb",ButBound2+4,TopBound+38,ButWidth,ButHeight);
    text("Adjective",ButBound3+4,TopBound+38,ButWidth,ButHeight);
  }else if(toggleN == true){
    textFont(fontReg);
    // text("Noun loading...", width/2,height/3);
    textAlign(RIGHT);
    textAlign(BOTTOM);
    textFont(fontBig);
    textSize(60);
    text(w0rd, 0, (height/2), WordLength);
    textAlign(LEFT);
    textFont(fontItal);
    textSize(40);
    text("noun:", WordLength-10, height/2, TypeLength);
    textFont(fontReg);
    text(n0un,WordLength+TypeLength-10, height/2, tbWidth);
    
    if(mouseX > newL && mouseX < newL+newR && mouseY > newTop && mouseY < newTop+newBott){
      fill(138,182,252);
      rect(newL,newTop,newR,newBott);
    }else{
      fill(106,158,242);
      rect(newL,newTop,newR,newBott);
    }
    fill('black');
    textAlign(CENTER);
    textSize(20);
    text("new word", newL+2,newTop+4,newR,newBott);
    
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
    textSize(20);
    text("save word", saveL+2,saveTop+4,saveR,saveBott);
  }else if(toggleV == true){
    textFont(fontReg);
    // text("Verb loading...", width/2,height/3);
    textAlign(RIGHT);
    textFont(fontBig);
    textSize(60);
    text(w0rd, 0, (height/2), WordLength);
    textAlign(LEFT);
    textFont(fontItal);
    textSize(40);
    text("verb:", WordLength-10, height/2, TypeLength);
    textFont(fontReg);
    text(v3rb,WordLength+TypeLength-10, height/2, tbWidth);
    
    if(mouseX > newL && mouseX < newL+newR && mouseY > newTop && mouseY < newTop+newBott){
      fill(138,182,252);
      rect(newL,newTop,newR,newBott);
    }else{
      fill(106,158,242);
      rect(newL,newTop,newR,newBott);
    }
    fill('black');
    textAlign(CENTER);
    textSize(20);
    text("new word", newL+2,newTop+4,newR,newBott);
    
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
    textSize(20);
    text("save word", saveL+2,saveTop+4,saveR,saveBott);
  }else if(toggleA == true){
    textFont(fontReg);
    // text("Adjective loading...", width/2,height/3);
    textAlign(RIGHT);
    textFont(fontBig);
    textSize(60);
    text(w0rd, 0, (height/2), WordLength);
    textAlign(LEFT);
    textFont(fontItal);
    textSize(40);
    text("adjective:", WordLength-10, height/2, TypeLength);
    textFont(fontReg);
    text(ad7,WordLength+TypeLength+60, height/2, tbWidth-60);
    
    if(mouseX > newL && mouseX < newL+newR && mouseY > newTop && mouseY < newTop+newBott){
      fill(138,182,252);
      rect(newL,newTop,newR,newBott);
    }else{
      fill(106,158,242);
      rect(newL,newTop,newR,newBott);
    }
    fill('black');
    textAlign(CENTER);
    textSize(20);
    text("new word", newL+2,newTop+4,newR,newBott);
    
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
    textSize(20);
    text("save word", saveL+2,saveTop+4,saveR,saveBott);
  }else{
    fill('black');
    textSize(20);
    textFont(fontReg);
    text("Generating...",width/2,height/2);
  }
  
  var h = hour();
  var m = minute();
  var s = second();
  
  if (saveRequest == true){
    fill(112,166,255);
    rect(520,480,140,140);
    fill('black');
    textAlign(RIGHT);
    textSize(20);
    text("Lit Dictionary \n by Megan Vanderah",1195,568);
    console.log("save requested");
    counter2++;
    if(counter2 == 3){
      canvasImage = w0rd+counter+s+".png";
      save(cnv,canvasImage);
      console.log("image saved");
      counter2 = 1;
      saveRequest = false;
    }
  }
}

function mousePressed(){
  if(mouseX > LeftBound && mouseX < LeftBound+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
    toggle = true;
    console.log("clicked noun");
    toggleN = true;
    TopBound = 1000;
  }else if(mouseX > ButBound2 && mouseX < ButBound2+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
    toggle = true;
    console.log("clicked verb");
    toggleV =true;
    TopBound = 1000;
  }else if(mouseX > ButBound3 && mouseX < ButBound3+ButWidth && mouseY > TopBound && mouseY <TopBound+ButHeight){
    toggle = true;
    console.log("clicked adj");
    toggleA =true;
    TopBound = 1000;
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
  TopBound = 340;

  
  rg = new RiGrammar();
  rg.addRule('<start>', 'hella | same | lit | selfie | on fleek | bae | yolo | fomo | sharknado | salty | meme | Netflix & chill | swag | finsta',2);
  rg.addRule('<start>', 'LitDict');
  
  rn = new RiGrammar();
  rn.addRule('<start>', "a <1><I>. | the <A><I>.", 2);
  rn.addRule('<start>', "everyone's favorite <1><I>.")
  rn.addRule('<1>', "<adj1><2>");
  rn.addRule('<adj1>',"<adj> ")
  rn.addRule('<adj>', "fake|secret|famous|very cool|modern day|")
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
  rv.addRule('<B>', "alive | in the moment | free | under social pressure | alone");
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