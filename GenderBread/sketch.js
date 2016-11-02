var img, RHeart,BHeart, bioF, bioM, bioBase, bioI, RomR,RomB;
var input, button, buttonS, greeting;
var multiBubblesR = [];
var multiBubblesB = [];
var prevSexR, prevSexB, prevRomR, prevRomB;
var multiBubblesR2 = [];
var multiBubblesB2 = [];

//location variables
var IdentX = 370;
var IdentY = 80;
var ExpressX = 370;
var ExpressY = 170;
var RomanticX= 370;
var RomanticY= 260;
var SexualX = 370;
var SexualY = 350;
var BioX = 370;
var BioY = 440;

//Slider Variables
var SlideIdentR, SlideIdentB;
var SlideExpressR, SlideExpressB;
var SlideBioF, SlideBioM;
var SlideSexR, SlideSexB;
var SlideRomR, SlideRomB;
var sliderMax = 50;
var bubSize = 35;
var bubXMin = 10;
var bubXMax = 300;
var bubYMin = 190;
var bubYMax = 310;
var hOpac = 200;

//line locations
var p1 = 185;
var p2 = 55;
var p3 = 360;
var p4 = 495;

function setup() {
  createCanvas(520,520);
  img = loadImage("assets/GBPmask.png");
  RHeart = loadImage("assets/RHeart.png");
  BHeart = loadImage("assets/BHeart.png");
  bioBase = loadImage("assets/BioBase.png");
  bioF = loadImage("assets/BioFemale.png");
  bioM = loadImage("assets/BioMale.png");
  bioI = loadImage("assets/BioIntersex.png");
  RomR = loadImage("assets/RHeart2.png");
  RomB = loadImage("assets/BHeart2.png");
  
  //name
  input = createInput();
  input.position(377,28);
  button = createButton('Load Name');
  button.position(385,48);
  button.mousePressed(name);
  buttonS = createButton('Save');
  buttonS.position(457,48);
  greeting = createElement('h2','Who are you?');
  greeting.position(115,0);
  //---end of name code
  
  //Identity Sliders
  SlideIdentR = createSlider(0,255,0);
  SlideIdentB = createSlider(0,255,0);
  SlideIdentR.position(IdentX+10,IdentY+20);
  SlideIdentB.position(IdentX+10,IdentY+50);
  //---end of IdentSlider code
  
  //Expression Sliders
  SlideExpressR = createSlider(0,255,0);
  SlideExpressB = createSlider(0,255,0);
  SlideExpressR.position(ExpressX+10,ExpressY+20);
  SlideExpressB.position(ExpressX+10,ExpressY+50);
  //---end of ExpressSlider code
  
  //Sexual Attraction Sliders
  for (var i = 0; i < 0; i++){
    var newBubbleR = new bubblesR(random(bubXMin,bubXMax),random(bubYMin,bubYMax),bubSize,bubSize);
    multiBubblesR.push(newBubbleR)
  }
  for (var i = 0; i < 0; i++){
    var newBubbleB = new bubblesB(random(bubXMin,bubXMax),random(bubYMin,bubYMax),bubSize,bubSize);
    multiBubblesB.push(newBubbleB)
  }

  SlideSexR = createSlider(0,sliderMax,0);
  SlideSexB = createSlider(0,sliderMax,0);
  SlideSexR.position(SexualX+10,SexualY+20);
  SlideSexB.position(SexualX+10,SexualY+50);
  //---end of SexSlider code

  //Romantic Attraction Sliders
  for (var i = 0; i < 0; i++){
    var newBubbleR2 = new bubblesR2(random(bubXMin,bubXMax),random(bubYMin,bubYMax),bubSize,bubSize);
    multiBubblesR2.push(newBubbleR2)
  }
  for (var i = 0; i < 0; i++){
    var newBubbleB2 = new bubblesB2(random(bubXMin,bubXMax),random(bubYMin,bubYMax),bubSize,bubSize);
    multiBubblesB2.push(newBubbleB2)
  }
  SlideRomR = createSlider(0,sliderMax,0);
  SlideRomB = createSlider(0,sliderMax,0);
  SlideRomR.position(RomanticX+10,RomanticY+20);
  SlideRomB.position(RomanticX+10,RomanticY+50);
  //---end of RomSlider Code
  
  //Bio Sliders
  SlideBioF = createSlider(0,255,0);
  SlideBioM = createSlider(0,255,0);
  SlideBioF.position(BioX+10,BioY+20);
  SlideBioM.position(BioX+10,BioY+50);
  //---end of BioSlider code
}

function draw() {
  background('white');
  
  
  //IdentFill
  var IdentR, IdentG, IdentB;
  IdentR = SlideIdentR.value();
  IdentB = SlideIdentB.value();
  IdentG = 0;
  fill(IdentR,IdentG,IdentB);
  rect(0,50,400,500);
  //---end of Ident fill
  
  //ExpressFill
  var ExpressR,ExpressG,ExpressB;
  ExpressR = SlideExpressR.value();
  ExpressB = SlideExpressB.value();
  ExpressG = 0;
  //--end of Express Fill
  
  //Sexual Attraction
  //--Red
  var curSexR = SlideSexR.value();
  if (curSexR != prevSexR){
    
    var change = curSexR - prevSexR;
    if(change > 0 ) {
      for(var i =0; i < curSexR - prevSexR; i++){
        var newBubbleR = new bubblesR(random(bubXMin,bubXMax),random(bubYMin,bubYMax),bubSize,bubSize);
        multiBubblesR.push(newBubbleR);
      }
    }else{
      for (var i=0; i<abs(change); i++){
        multiBubblesR.pop();
      }
    }
    prevSexR = curSexR;
  }
  for (var i =0; i <multiBubblesR.length; i++){
    multiBubblesR[i].display();
  }
  //--Blue
  var curSexB = SlideSexB.value();
  console.log(curSexB);
  if (curSexB != prevSexB){
    
    var change = curSexB - prevSexB;
    if(change > 0 ) {
      for(var i =0; i < curSexB - prevSexB; i++){
        var newBubbleB = new bubblesB(random(bubXMin,bubXMax),random(bubYMin,bubYMax),bubSize,bubSize);
        multiBubblesB.push(newBubbleB);
      }
    }else{
      for (var i=0; i<abs(change); i++){
        multiBubblesB.pop();
      }
    }
    prevSexB = curSexB;
  }
  for (var i =0; i <multiBubblesB.length; i++){
    multiBubblesB[i].display();
  }
  tint(255,255);
  //---end of Sexual Attraction
  
  //Romantic Attraction
  //--Red
  var curRomR = SlideRomR.value();
  if (curRomR != prevRomR){
    
    var change = curRomR - prevRomR;
    if(change > 0 ) {
      for(var i =0; i < curRomR - prevRomR; i++){
        var newBubbleR2 = new bubblesR2(random(bubXMin,bubXMax),random(bubYMin,bubYMax),bubSize,bubSize);
        multiBubblesR2.push(newBubbleR2);
      }
    }else{
      for (var i=0; i<abs(change); i++){
        multiBubblesR2.pop();
      }
    }
    prevRomR = curRomR;
  }
  for (var i =0; i <multiBubblesR2.length; i++){
    multiBubblesR2[i].display();
  }
  //--Blue
  var curRomB = SlideRomB.value();
  if (curRomB != prevRomB){
    
    var change = curRomB - prevRomB;
    if(change > 0 ) {
      for(var i =0; i < curRomB - prevRomB; i++){
        var newBubbleB2 = new bubblesB2(random(bubXMin,bubXMax),random(bubYMin,bubYMax),bubSize,bubSize);
        multiBubblesB2.push(newBubbleB2);
      }
    }else{
      for (var i=0; i<abs(change); i++){
        multiBubblesB2.pop();
      }
    }
    prevRomB = curRomB;
  }
  for (var i =0; i <multiBubblesB2.length; i++){
    multiBubblesB2[i].display();
  }
  tint(255,255);
  //---end of Romantic Attraction
  
  image(img,-75,20);
  
  //Bio Opacity
  var BioFopac, BioMopac;
  BioFopac = SlideBioF.value();
  BioMopac = SlideBioM.value();
  image(bioBase,-75,10);
  tint(255,BioFopac);
  image(bioF,-75,10);
  tint(255,BioMopac);
  image(bioM,-75,10);
  if(BioMopac >0 && BioFopac >0) {
    tint(255,(BioMopac+BioFopac)/2);
    image(bioI,-75,10);
  }
  tint(255,255);
  //--- end of Bio Opacity
  
  //text
  fill('black');
  textSize(12);
  text("Woman-ness", IdentX,IdentY+20);
  text("Man-ness", IdentX,IdentY+50);
  text("Women/female/feminine",SexualX, SexualY+20);
  text("Men/male/masculine",SexualX,SexualY+50);
  text("Feminine",ExpressX,ExpressY+20);
  text("Masculine",ExpressX,ExpressY+50);
  text("Female-ness",BioX,BioY+20);
  text("Male-ness",BioX,BioY+50);
  text("Women/female/feminine",RomanticX,RomanticY+20);
  text("Men/male/masculine",RomanticX,RomanticY+50);
  textSize(15);
  text("Gender Identity",IdentX,IdentY);
  text("Sexual Attraction",SexualX,SexualY);
  text("Gender Expression",ExpressX,ExpressY);
  text("Biological Sex",BioX,BioY);
  text("Romantic Attraction",RomanticX,RomanticY)
  //---end of text code
  
  
  //lines
  stroke(ExpressR,ExpressG,ExpressB);
  //first lines
  strokeWeight(3);
  line(p1,p2,p3,p2);
  line(p3,p2,p3,p4);
  line(p3,p4,p1,p4);
  noStroke();
  //---end of line code

}

function bubblesR(tempX,tempY,tempDiam,tempDiam){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiam;
  
  this.display = function(){
    tint(255,hOpac);
    image(RHeart,this.x,this.y,tempDiam,tempDiam);
  }
}

function bubblesB(tempX,tempY,tempDiam,tempDiam){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiam;
  
  this.display = function(){
    tint(255,hOpac);
    image(BHeart,this.x,this.y,tempDiam,tempDiam);
  }
}

function bubblesR2(tempX,tempY,tempDiam,tempDiam){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiam;
  
  this.display = function(){
    tint(255,hOpac);
    image(RomR,this.x,this.y,tempDiam,tempDiam);
  }
}

function bubblesB2(tempX,tempY,tempDiam,tempDiam){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiam;
  
  this.display = function(){
    tint(255,hOpac);
    image(RomB,this.x,this.y,tempDiam,tempDiam);
  }
}

function name(){
  var name = input.value();
  greeting.html('This is '+name+'.');
  input.value('');
}