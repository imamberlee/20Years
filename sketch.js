
var canvasDiv;  

// Color variables
  let BackColor;
  let circLayer1;
  let circPink;
  let circOrange;
  let circAvacado;
  let circJuniper;

  // Size variables
  let cSize = 45; //Circle size
  let cStroke = 10; //Stroke size of the white, background circles
  let cOvLp = 13.5; //How much the circles overlap
  let topMargin = cSize*7 -cOvLp*6;
  let leftMargin = cSize*4 -cOvLp*4;
  let captionSize = cSize*2.5 -cOvLp*2.5; //Space allowed for captions
  let captionPoint = 11; //Point size of caption font
  let canvasSizeX = cSize*34 - cOvLp*33; // Canvas size x
  let canvasSizeY = cSize*44 - cOvLp*43; // Canvas size y

  //font
  let fontTitle;

function preload(){
  fontTitle = loadFont("Canela-Bold.otf");
}


function setup() {
  frameRate(60);
  canvasDiv = document.getElementById("20Years");


  // Define variables for color
  BackColor = color(71,122,116); // juniper-teal. #477a74
  circLayer1 = color(255,255,255); // white
  circOrange = color(252,168,58); // orange. #fca83a
  circPink = color(226,122,154); // pink. #e27a9a
  circJuniper = color(71,122,116); // juniper-teal. #477a74
  circAvacado = color(182,193,116); // avacado. #b6c174

  // Create canvas, adding a variable for html and css file
  let canvas = createCanvas(canvasDiv.offsetWidth, canvasSizeY);
  canvas.parent("20Years");
  background(BackColor); // juniper-teal
  
  // Create a p5.Graphics object with the same size as the canvas
  bgGraphics = createGraphics(canvasDiv.offsetWidth, canvasSizeY);
  
  // Draw on the p5.Graphics object. First the background
  bgGraphics.background(BackColor);
  
  bgGraphics.push();
  // Add Title of the sketch
  bgGraphics.textSize(30);
  bgGraphics.fill("white");
  bgGraphics.textAlign(CENTER);
  bgGraphics.textFont(fontTitle);
  bgGraphics.text("20 Years of Visits to Great Grandma’s House", canvasSizeX/2, leftMargin);
  bgGraphics.pop();

  bgGraphics.textAlign(CENTER); //keep all captions center-aligned
  
//LINE A starts here

// Placemat of circles 1A: BREAKFAST
  bgGraphics.push(); 
  
  //Move placemat over for left and top margins
  bgGraphics.translate(leftMargin,topMargin); 
  
  // Placemat 1A white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 1A draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the orange circles with alpha on the p5.Graphics object
  // Placemat 1A orange circles, attributes
  bgGraphics.noStroke();
  // Placemat 1A, draw orange circles
  circOrange.setAlpha(58); // circle 1 line 1, 2003
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, 0, cSize);
  circOrange.setAlpha(58); // circle 2 line 1, 2004
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circOrange.setAlpha(20); // circle 3 line 1, 2005
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circOrange.setAlpha(58); // circle 4 line 1, 2006
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circOrange.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circOrange.setAlpha(20); // circle 1 line 2, 2008
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(58); // circle 3 line 2, 2010
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circOrange.setAlpha(76); // circle 4 line 2, 2011
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(128); // circle 5 line 2, 2012
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circOrange.setAlpha(170); // circle 1 line 3, 2013
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(170); // circle 2 line 3, 2014
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(20); // circle 3 line 3, 2015
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circOrange.setAlpha(128); // circle 4 line 3, 2016
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circOrange.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circOrange.setAlpha(76); // circle 4 line 4, 2021
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(58); // circle 5 line 4, 2022
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 1A
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('BREAKFAST: Cinnamon rolls, pancakes, fresh-cut canteloupe and strawberries, eggs and bacon', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
    
  bgGraphics.pop();
  
// Placemat of circles 2A: SINGING, DANCING & MUSIC
  bgGraphics.push();

  //Move Placemat 2A to the right of Placemat 1A and down for the top margin
  bgGraphics.translate(cSize*6.5 - cOvLp*4 + leftMargin, topMargin); 
  
  // Placemat 2A white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 2A draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022

  
  // Draw the pink circles with alpha on the p5.Graphics object
  // Placemat 2A pink circles, attributes
  bgGraphics.noStroke();
  // Placemat 2A, draw pink circles
  circPink.setAlpha(128); // circle 1 line 1, 2003
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(0, 0, cSize);
  circPink.setAlpha(20); // circle 2 line 1, 2004
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circPink.setAlpha(76); // circle 3 line 1, 2005
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circPink.setAlpha(58); // circle 4 line 1, 2006
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circPink.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circPink.setAlpha(20); // circle 1 line 2, 2008
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circPink.setAlpha(58); // circle 2 line 2, 2009
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circPink.setAlpha(58); // circle 3 line 2, 2010
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circPink.setAlpha(20); // circle 4 line 2, 2011
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circPink.setAlpha(20); // circle 5 line 2, 2012
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circPink.setAlpha(20); // circle 1 line 3, 2013
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circPink.setAlpha(76); // circle 2 line 3, 2014
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circPink.setAlpha(20); // circle 3 line 3, 2015
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circPink.setAlpha(20); // circle 4 line 3, 2016
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circPink.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circPink.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circPink.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circPink.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circPink.setAlpha(76); // circle 4 line 4, 2021
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circPink.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 2A
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('SINGING, DANCING & MUSIC: Soft-shoeing with grandma, dancing to Don Ho, kids singing', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
  
  bgGraphics.pop();
  
// Placemat of circles 3A: YARD & NEIGHBORHOOD
  bgGraphics.push();
  
  //Move Placemat 3A to the right of Placemat 2A and down for the top margin
  bgGraphics.translate(cSize*(6.5*2) - cOvLp*(4*2) + leftMargin, topMargin); 
  
  // Placemat 3A white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 3A draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the avacado circles with alpha on the p5.Graphics object
  // Placemat 3A avacado circles, attributes
  bgGraphics.noStroke();
  // Placemat 3A, draw avacado circles
  circAvacado.setAlpha(58); // circle 1 line 1, 2003
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(0, 0, cSize);
  circAvacado.setAlpha(20); // circle 2 line 1, 2004
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circAvacado.setAlpha(94); // circle 3 line 1, 2005
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circAvacado.setAlpha(170); // circle 4 line 1, 2006
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circAvacado.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circAvacado.setAlpha(94); // circle 1 line 2, 2008
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circAvacado.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circAvacado.setAlpha(75); // circle 3 line 2, 2010
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circAvacado.setAlpha(58); // circle 4 line 2, 2011
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circAvacado.setAlpha(76); // circle 5 line 2, 2012
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circAvacado.setAlpha(128); // circle 1 line 3, 2013
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circAvacado.setAlpha(170); // circle 2 line 3, 2014
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circAvacado.setAlpha(58); // circle 3 line 3, 2015
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circAvacado.setAlpha(20); // circle 4 line 3, 2016
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circAvacado.setAlpha(58); // circle 5 line 3, 2017
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circAvacado.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circAvacado.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circAvacado.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circAvacado.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circAvacado.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
    
  // Write caption, Placemat 3A
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('YARD & NEIGHBORHOOD: Grandma’s flower garden, rides in the golf cart, watching deer', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
  
  bgGraphics.pop();
  
// Placemat of circles 4A: TENDING TO BABIES
  bgGraphics.push();
  
  //Move Placemat 4A to the right of Placemat 3A and down for the top margin
  bgGraphics.translate(cSize*(6.5*3) - cOvLp*(4*3) + leftMargin, topMargin); 
  
  // Placemat 4A white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 4A draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the juniper circles with alpha on the p5.Graphics object
  // Placemat 4A juniper circles, attributes
  bgGraphics.noStroke();
  // Placemat 4A, draw juniper circles
  circJuniper.setAlpha(150); // circle 1 line 1, 2003
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, 0, cSize);
  circJuniper.setAlpha(20); // circle 2 line 1, 2004
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circJuniper.setAlpha(76); // circle 3 line 1, 2005
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circJuniper.setAlpha(76); // circle 4 line 1, 2006
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circJuniper.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circJuniper.setAlpha(20); // circle 1 line 2, 2008
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 3 line 2, 2010
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circJuniper.setAlpha(58); // circle 4 line 2, 2011
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 5 line 2, 2012
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circJuniper.setAlpha(58); // circle 1 line 3, 2013
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(128); // circle 2 line 3, 2014
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(58); // circle 3 line 3, 2015
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 3, 2016
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circJuniper.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 4A
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('TENDING BABIES: Baby smiles and babies crawling, holding babies, free babysitting', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
  
  bgGraphics.pop();
  
//LINE B starts here
  
// Placemat of circles 1B: DECOR
  bgGraphics.push(); 
  
  //Move Placemat 1B over for the left margin and below Placemaat 1A
  bgGraphics.translate(leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize); 
  
  // Placemat 1B white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 2B draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022

  
  // Draw the avacado circles with alpha on the p5.Graphics object
  // Placemat 1B avacado circles, attributes
  bgGraphics.noStroke();
  // Placemat 1B, draw avacado circles
  circAvacado.setAlpha(20); // circle 1 line 1, 2003
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(0, 0, cSize);
  circAvacado.setAlpha(20); // circle 2 line 1, 2004
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circAvacado.setAlpha(20); // circle 3 line 1, 2005
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circAvacado.setAlpha(76); // circle 4 line 1, 2006
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circAvacado.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circAvacado.setAlpha(76); // circle 1 line 2, 2008
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circAvacado.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circAvacado.setAlpha(20); // circle 3 line 2, 2010
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circAvacado.setAlpha(76); // circle 4 line 2, 2011
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circAvacado.setAlpha(76); // circle 5 line 2, 2012
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circAvacado.setAlpha(20); // circle 1 line 3, 2013
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circAvacado.setAlpha(76); // circle 2 line 3, 2014
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circAvacado.setAlpha(20); // circle 3 line 3, 2015
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circAvacado.setAlpha(20); // circle 4 line 3, 2016
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circAvacado.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circAvacado.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circAvacado.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circAvacado.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circAvacado.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circAvacado.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circAvacado); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 1B
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('DECOR: Souvenir fridge magnets, statuettes, swan centerpiece, and bird decor', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
  
  bgGraphics.pop();
  
// Placemat of circles 2B: SNACKS
  bgGraphics.push(); 
  
  //Move Placemat 2B to the right of Placemat 1B and below Placemat 2A
  bgGraphics.translate(cSize*6.5 - cOvLp*4 + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize); 
  
  // Placemat 2B white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 2B draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the orange circles with alpha on the p5.Graphics object
  // Placemat 2B orange circles, attributes
  bgGraphics.noStroke();
  // Placemat 2B, draw orange circles
circOrange.setAlpha(58); // circle 1 line 1, 2003
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, 0, cSize);
  circOrange.setAlpha(20); // circle 2 line 1, 2004
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circOrange.setAlpha(58); // circle 3 line 1, 2005
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circOrange.setAlpha(94); // circle 4 line 1, 2006
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circOrange.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circOrange.setAlpha(20); // circle 1 line 2, 2008
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(20); // circle 3 line 2, 2010
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circOrange.setAlpha(20); // circle 4 line 2, 2011
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(142); // circle 5 line 2, 2012
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circOrange.setAlpha(58); // circle 1 line 3, 2013
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(128); // circle 2 line 3, 2014
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(20); // circle 3 line 3, 2015
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circOrange.setAlpha(58); // circle 4 line 3, 2016
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circOrange.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(58); // circle 2 line 4, 2019
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circOrange.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 2B
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('SNACKS: Popcorn, cheeseball and crackers, ice cream in the afternoon, candy dish ', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
    
  bgGraphics.pop();
  
// Placemat of circles 3B: TV PROGRAMS
  bgGraphics.push(); 
  
  //Move Placemat 3B to the right of Placemat 2B and below Placemat 3A 
  bgGraphics.translate(cSize*(6.5*2) - cOvLp*(4*2) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize); 
  
  // Placemat 3B white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 3B draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the pink circles with alpha on the p5.Graphics object
  // Placemat 3B pink circles, attributes
  bgGraphics.noStroke();
  // Placemat 3B, draw pink circles
  circPink.setAlpha(20); // circle 1 line 1, 2003
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(0, 0, cSize);
  circPink.setAlpha(20); // circle 2 line 1, 2004
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circPink.setAlpha(20); // circle 3 line 1, 2005
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circPink.setAlpha(20); // circle 4 line 1, 2006
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circPink.setAlpha(58); // circle 5 line 1, 2007
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circPink.setAlpha(20); // circle 1 line 2, 2008
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circPink.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circPink.setAlpha(20); // circle 3 line 2, 2010
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circPink.setAlpha(20); // circle 4 line 2, 2011
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circPink.setAlpha(76); // circle 5 line 2, 2012
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circPink.setAlpha(58); // circle 1 line 3, 2013
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circPink.setAlpha(128); // circle 2 line 3, 2014
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circPink.setAlpha(20); // circle 3 line 3, 2015
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circPink.setAlpha(20); // circle 4 line 3, 2016
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circPink.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circPink.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circPink.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circPink.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circPink.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circPink.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circPink); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 3B
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('TV PROGRAMS: Football games, Wheel of Fortune, Jepordy, and Lawrence Welk', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
    
  bgGraphics.pop();
  
// Placemat of circles 4B: DRESSING UP SILLY
  bgGraphics.push(); 
  
  //Move Placemat 4B to the right of Placemat 3B and below Placemat 4A
  bgGraphics.translate(cSize*(6.5*3) - cOvLp*(4*3) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize); 
  
  // Placemat 4B white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 4B draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the juniper circles with alpha on the p5.Graphics object
  // Placemat 4B juniper circles, attributes
  bgGraphics.noStroke();
  // Placemat 4B, draw juniper circles
  circJuniper.setAlpha(20); // circle 1 line 1, 2003
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, 0, cSize);
  circJuniper.setAlpha(20); // circle 2 line 1, 2004
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circJuniper.setAlpha(58); // circle 3 line 1, 2005
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 1, 2006
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circJuniper.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circJuniper.setAlpha(20); // circle 1 line 2, 2008
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(58); // circle 3 line 2, 2010
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 2, 2011
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 5 line 2, 2012
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circJuniper.setAlpha(58); // circle 1 line 3, 2013
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(94); // circle 2 line 3, 2014
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(94); // circle 3 line 3, 2015
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 3, 2016
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circJuniper.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 4B
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('DRESSING UP SILLY: Halloween sweatshirts, disguise glassees, happy birthday headbands', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
    
  bgGraphics.pop();
  
//LINE C starts here
  
// Placemat of circles 1C: 
  bgGraphics.push(); 
  
  //Move Placemat 1C over for the left margin and below Placemaat 1B
  bgGraphics.translate(leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2); 

  // Placemat 1C white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 1C draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the juniper circles with alpha on the p5.Graphics object
  // Placemat 1C juniper circles, attributes
  bgGraphics.noStroke();
  // Placemat 4A, draw juniper circles
  circJuniper.setAlpha(20); // circle 1 line 1, 2003
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, 0, cSize);
  circJuniper.setAlpha(58); // circle 2 line 1, 2004
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circJuniper.setAlpha(20); // circle 3 line 1, 2005
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circJuniper.setAlpha(76); // circle 4 line 1, 2006
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circJuniper.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circJuniper.setAlpha(58); // circle 1 line 2, 2008
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 3 line 2, 2010
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 2, 2011
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(76); // circle 5 line 2, 2012
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circJuniper.setAlpha(20); // circle 1 line 3, 2013
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(128); // circle 2 line 3, 2014
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(20); // circle 3 line 3, 2015
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circJuniper.setAlpha(58); // circle 4 line 3, 2016
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circJuniper.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 1C
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('TOYS & GAMES: Cooties, checkers, Life, toy pinball machine and grocery cart', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
    
  bgGraphics.pop();
  
// Placemat of circles 2C: HELLOS AND GOODBYES
  bgGraphics.push(); 
  
  //Move Placemat 2C to the right of Placemat 1C and below Placemat 2B
  bgGraphics.translate(cSize*6.5 - cOvLp*4 + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2); 
  
  // Placemat 2C white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 2C draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the juniper circles with alpha on the p5.Graphics object
  // Placemat 2C juniper circles, attributes
  bgGraphics.noStroke();
  // Placemat 4A, draw juniper circles
  circJuniper.setAlpha(58); // circle 1 line 1, 2003
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, 0, cSize);
  circJuniper.setAlpha(58); // circle 2 line 1, 2004
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circJuniper.setAlpha(76); // circle 3 line 1, 2005
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circJuniper.setAlpha(58); // circle 4 line 1, 2006
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circJuniper.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circJuniper.setAlpha(58); // circle 1 line 2, 2008
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(20); // circle 3 line 2, 2010
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circJuniper.setAlpha(20); // circle 4 line 2, 2011
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circJuniper.setAlpha(58); // circle 5 line 2, 2012
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circJuniper.setAlpha(76); // circle 1 line 3, 2013
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(94); // circle 2 line 3, 2014
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(128); // circle 3 line 3, 2015
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circJuniper.setAlpha(76); // circle 4 line 3, 2016
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circJuniper.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circJuniper.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circJuniper.setAlpha(58); // circle 4 line 4, 2021
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circJuniper.setAlpha(76); // circle 5 line 4, 2022
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
    // Write caption, Placemat 2C
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('HELLOS & GOODBYES: Welcome hugs, singing doorbell, sandwiches for the road, wave until we’re out of sight', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
    
  bgGraphics.pop();

// Placemat of circles 3C: DINNER
  bgGraphics.push(); 
  
  //Move Placemat 3C to the right of Placemat 2C and below Placemat 3B
  bgGraphics.translate(cSize*(6.5*2) - cOvLp*(4*2) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2); 
  
  // Placemat 3C white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 3C draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the orange circles with alpha on the p5.Graphics object
  // Placemat 3C orange circles, attributes
  bgGraphics.noStroke();
  // Placemat 2C, draw orange circles
circOrange.setAlpha(76); // circle 1 line 1, 2003
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, 0, cSize);
  circOrange.setAlpha(76); // circle 2 line 1, 2004
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circOrange.setAlpha(58); // circle 3 line 1, 2005
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circOrange.setAlpha(142); // circle 4 line 1, 2006
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circOrange.setAlpha(20); // circle 5 line 1, 2007
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circOrange.setAlpha(20); // circle 1 line 2, 2008
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(20); // circle 3 line 2, 2010
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circOrange.setAlpha(20); // circle 4 line 2, 2011
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(20); // circle 5 line 2, 2012
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circOrange.setAlpha(58); // circle 1 line 3, 2013
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(128); // circle 2 line 3, 2014
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(76); // circle 3 line 3, 2015
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circOrange.setAlpha(58); // circle 4 line 3, 2016
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circOrange.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(20); // circle 2 line 4, 2019
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circOrange.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(58); // circle 5 line 4, 2022
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 3C
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('DINNER: Red Jell-O served on lettuce, crescent rolls, mashed potatoes,  side dishes galore, grandma offering seconds', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
    
  bgGraphics.pop();
  
// Placemat of circles 4C: DESSERT
  bgGraphics.push(); 
  
  //Move Placemat 4C to the right of Placemat 3C and below Placemat 4B
  bgGraphics.translate(cSize*(6.5*3) - cOvLp*(4*3) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2); 
  
  // Placemat 4C white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // Placemat 4C draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1 line 1, 2003
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2  line 1, 2004
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3 line 1, 2005
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4 line 1, 2006
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5 line 1, 2007
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize); // circle 1 line 2, 2008
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize); // circle 2  line 2, 2009
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); // circle 3 line 2, 2010
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize); // circle 4 line 2, 2011
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize); // circle 5 line 2, 2012
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize); // circle 1 line 3, 2013
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize); // circle 2  line 3, 2014
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); // circle 3 line 3, 2015
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize); // circle 4 line 3, 2016
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize); // circle 5 line 3, 2017
    bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize); // circle 1 line 4, 2018
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize); // circle 2  line 4, 2019
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); // circle 3 line 4, 2020
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize); // circle 4 line 4, 2021
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize); // circle 5 line 4, 2022


  // Draw the orange circles with alpha on the p5.Graphics object
  // Placemat 4C orange circles, attributes
  bgGraphics.noStroke();
  // Placemat 2C, draw orange circles
circOrange.setAlpha(94); // circle 1 line 1, 2003
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, 0, cSize);
  circOrange.setAlpha(76); // circle 2 line 1, 2004
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circOrange.setAlpha(20); // circle 3 line 1, 2005
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circOrange.setAlpha(20); // circle 4 line 1, 2006
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circOrange.setAlpha(58); // circle 5 line 1, 2007
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
  
  circOrange.setAlpha(58); // circle 1 line 2, 2008
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(20); // circle 2 line 2, 2009
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(20); // circle 3 line 2, 2010
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*1-cOvLp*1, cSize); 
  circOrange.setAlpha(20); // circle 4 line 2, 2011
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*1-cOvLp*1, cSize);
  circOrange.setAlpha(58); // circle 5 line 2, 2012
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*1-cOvLp*1, cSize);
     
  circOrange.setAlpha(76); // circle 1 line 3, 2013
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(156); // circle 2 line 3, 2014
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(58); // circle 3 line 3, 2015
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*2-cOvLp*2, cSize); 
  circOrange.setAlpha(58); // circle 4 line 3, 2016
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*2-cOvLp*2, cSize);
  circOrange.setAlpha(20); // circle 5 line 3, 2017
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*2-cOvLp*2, cSize);
      
  circOrange.setAlpha(20); // circle 1 line 4, 2018
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(0, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(58); // circle 2 line 4, 2019
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(20); // circle 3 line 4, 2020
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, cSize*3-cOvLp*3, cSize); 
  circOrange.setAlpha(20); // circle 4 line 4, 2021
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, cSize*3-cOvLp*3, cSize);
  circOrange.setAlpha(20); // circle 5 line 4, 2022
  bgGraphics.fill(circOrange); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, cSize*3-cOvLp*3, cSize);
  
  // Write caption, Placemat 4C
  bgGraphics.textSize(captionPoint);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('DESSERT: Pie, afternoon cookies, ice cream sandwiches, pudding served in pedestal bowls', -cSize*0.5, cSize*3.875-cOvLp*3, cSize*5-cOvLp*4, cSize*4.5-cOvLp*3+captionSize); // I'm super confused about why alignment was half a circle size too large for x and y
    
  bgGraphics.pop();
  
//Chart footer begins here
  
   bgGraphics.push();
  // Add title of chart footer
  bgGraphics.textSize(30);
  bgGraphics.fill("white");
  bgGraphics.textAlign(LEFT);
  bgGraphics.textFont(fontTitle);
  bgGraphics.text("About This Chart", leftMargin -cSize*0.5, topMargin+cSize*12.875-cOvLp*9+captionSize*3, cSize*11.5-cOvLp*8, cSize*20-cOvLp*9+captionSize*3);
  bgGraphics.pop();

  
  bgGraphics.textSize(captionPoint*1.5);
  bgGraphics.textAlign(LEFT);
  bgGraphics.fill(255, 255, 255);
  bgGraphics.text('The chart above tracks 20 years of taking my children to visit my grandmother. The chart begins the year I had our first baby and ends the year my grandmother turned 100. My grandmother is now 101. To this day, when we visit, my grandmother serves us lunch on a table that always has a tablecloth and placemats. As your mouse hovers over the placemats above, you can highlight each year and see what kinds of things were happening in grandma’s house that year. ', leftMargin -cSize*0.5, topMargin+cSize*13.22-cOvLp*9+captionSize*3, cSize*11.5-cOvLp*8, cSize*20-cOvLp*9+captionSize*3); // Still super confused about why alignment was half a circle size too large for x and y
  
  // String of circles for chart key in the chart footer
  bgGraphics.push(); 
  
  //Move string over for margins
  bgGraphics.translate(leftMargin +cSize*13-cOvLp*8, topMargin+cSize*13.375-cOvLp*9+captionSize*3); //The circles line up as expected!! So why in the world was all the text alignment was half a circle size too large for x and y??
  
  // Draw the white circles for the chart footer
  // String 1 white circles, attributes
  bgGraphics.strokeWeight(cStroke);
  bgGraphics.stroke(circLayer1); // white
  bgGraphics.fill(circLayer1); 
  // String 1 draw white circles
  bgGraphics.ellipse(0, 0, cSize); // circle 1
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize); // circle 2
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); // circle 3
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize); // circle 4
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize); // circle 5

  // Draw the juniper circles with alpha for the chart footer
  // String 1 juniper circles, attributes
  bgGraphics.noStroke();
  // String 1 draw juniper circles
  circJuniper.setAlpha(20); // circle 1, 2003
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(0, 0, cSize);
  circJuniper.setAlpha(60); // circle 2, 2004
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*1-cOvLp*1, 0, cSize);
  circJuniper.setAlpha(60); // circle 3, 2005
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*2-cOvLp*2, 0, cSize); 
  circJuniper.setAlpha(80); // circle 4, 2006
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*3-cOvLp*3, 0, cSize);
  circJuniper.setAlpha(80); // circle 5, 2007
  bgGraphics.fill(circJuniper); 
  bgGraphics.ellipse(cSize*4-cOvLp*4, 0, cSize);
    
  bgGraphics.pop();
  
    bgGraphics.text('Each circle represents a year. Circles are grouped together in placemats that represnt one type of activity or object that was part of our vistis to grandma’s house. (All data was colllected from my journal entries and my photos.) Darker circles represent more records of that activity or object. Lighter circles represent fewer. ', leftMargin +cSize*12.5-cOvLp*8, topMargin+cSize*14.175-cOvLp*9+captionSize*3, cSize*11.75-cOvLp*8, cSize*20-cOvLp*9+captionSize*3); // Still super confused about why alignment was half a circle size too large for x and y
  
}


function draw() {
  // Draw the p5.Graphics object onto the canvas
  image(bgGraphics, 0, 0);

  // Font attributes for the font that appears when mouse hovers over one of the circles
  textSize(15);
  fill("black");

  push(); //2003
// Check if the mouse is hovering over the 2003 circle of any of the placemats
  let hoverDistances03 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, topMargin),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2)
  ];
  
  let isHovering03 = hoverDistances03.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering03) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions03 = [
    {x: 0 + leftMargin, y: topMargin},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: topMargin},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: topMargin},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: topMargin},
    
    {x: 0 + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize},
    
    {x: 0 + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2}
    
  ];

  for (let pos03 of positions03) {
    text("03", pos03.x, pos03.y);
  }
  
  text("2003: Our first child is born & we live in the same city as my grandparents.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2004
// Check if the mouse is hovering over the 2004 circle of any of the placemats
  let hoverDistances04 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), topMargin),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2)
  ];
  
  let isHovering04 = hoverDistances04.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering04) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions04 = [
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: topMargin},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: topMargin},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: topMargin},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: topMargin},
    
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2}
    
  ];

  for (let pos04 of positions04) {
    text("04", pos04.x, pos04.y);
  }
  
  text("2004: We continue to live in the same city as my grandparents. ", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2005
// Check if the mouse is hovering over the 2005 circle of any of the placemats
  let hoverDistances05 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), topMargin),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2)
  ];
  
  let isHovering05 = hoverDistances05.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering05) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions05 = [
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: topMargin},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: topMargin},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: topMargin},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: topMargin},
    
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2}
    
  ];

  for (let pos05 of positions05) {
    text("05", pos05.x, pos05.y);
  }
  
  text("2005: Our second child is born & we move one hour's drive from my grandparents.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();

  push(); //2006
// Check if the mouse is hovering over the 2006 circle of any of the placemats
  let hoverDistances06 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), topMargin),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2)
  ];
  
  let isHovering06 = hoverDistances06.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering06) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions06 = [
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: topMargin},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: topMargin},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: topMargin},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: topMargin},
    
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2}
    
  ];

  for (let pos06 of positions06) {
    text("06", pos06.x, pos06.y);
  }
  
  text("2006: We continue to live one hour's drive from my grandparents.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2007
// Check if the mouse is hovering over the 2007 circle of any of the placemats
  let hoverDistances07 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), topMargin),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), topMargin),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2)
  ];
  
  let isHovering07 = hoverDistances07.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering07) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions07 = [
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: topMargin},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: topMargin},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: topMargin},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: topMargin},
    
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize},
    
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2}
    
  ];

  for (let pos07 of positions07) {
    text("07", pos07.x, pos07.y);
  }
  
  text("2007: We move two, then three hour's drive from my grandparents.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2008
// Check if the mouse is hovering over the 2008 circle of any of the placemats
  let hoverDistances08 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, topMargin + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1))
  ];
  
  let isHovering08 = hoverDistances08.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering08) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions08 = [
    {x: 0 + leftMargin, y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: topMargin + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)}
    
  ];

  for (let pos08 of positions08) {
    text("08", pos08.x, pos08.y);
  }
  
  text("2008: We live in a country house that we fixed up.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2009
// Check if the mouse is hovering over the 2009 circle of any of the placemats
  let hoverDistances09 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1))
  ];
  
  let isHovering09 = hoverDistances09.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering09) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions09 = [
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)}
    
  ];

  for (let pos09 of positions09) {
    text("09", pos09.x, pos09.y);
  }
  
  text("2009: Our third child is born.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2010
// Check if the mouse is hovering over the 2010 circle of any of the placemats
  let hoverDistances10 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1))
  ];
  
  let isHovering10 = hoverDistances10.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering10) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions10 = [
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)}
    
  ];

  for (let pos10 of positions10) {
    text("10", pos10.x, pos10.y);
  }
  
  text("2010: We continue taking turns with my grandparents—us driving to see them and them driving to see us.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2011
// Check if the mouse is hovering over the 2011 circle of any of the placemats
  let hoverDistances11 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1))
  ];
  
  let isHovering11 = hoverDistances11.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering11) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions11 = [
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)}
    
  ];

  for (let pos11 of positions11) {
    text("11", pos11.x, pos11.y);
  }
  
  text("2011: I start a chocolate business.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2012
// Check if the mouse is hovering over the 2012 circle of any of the placemats
  let hoverDistances12 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1))
  ];
  
  let isHovering12 = hoverDistances12.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering12) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions12 = [
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*1-cOvLp*1)},
    
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*1-cOvLp*1)}
    
  ];

  for (let pos12 of positions12) {
    text("12", pos12.x, pos12.y);
  }
  
  text("2012: We begin a ritual of making one-day visits, always on a Sunday, to visit my grandparents.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2013
// Check if the mouse is hovering over the 2013 circle of any of the placemats
  let hoverDistances13 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, topMargin + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2))
  ];
  
  let isHovering13 = hoverDistances13.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering13) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions13 = [
    {x: 0 + leftMargin, y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: topMargin + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)}
    
  ];

  for (let pos13 of positions13) {
    text("13", pos13.x, pos13.y);
  }
  
  text("2013: Our last child is born.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2014
// Check if the mouse is hovering over the 2014 circle of any of the placemats
  let hoverDistances14 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2))
  ];
  
  let isHovering14 = hoverDistances14.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering14) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions14 = [
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)}
    
  ];

  for (let pos14 of positions14) {
    text("14", pos14.x, pos14.y);
  }
  
  text("2014: We visit my grandparents many Sundays before we move far away, to a different state.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2015
// Check if the mouse is hovering over the 2015 circle of any of the placemats
  let hoverDistances15 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2))
  ];
  
  let isHovering15 = hoverDistances15.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering15) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions15 = [
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)}
    
  ];

  for (let pos15 of positions15) {
    text("15", pos15.x, pos15.y);
  }
  
  text("2015: My grandparents also move—to a state that neighbors ours and is five hours' drive away.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2016
// Check if the mouse is hovering over the 2016 circle of any of the placemats
  let hoverDistances16 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2))
  ];
  
  let isHovering16 = hoverDistances16.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering16) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions16 = [
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)}
    
  ];

  for (let pos16 of positions16) {
    text("16", pos16.x, pos16.y);
  }
  
  text("2016: My grandfather passes away.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2017
// Check if the mouse is hovering over the 2017 circle of any of the placemats
  let hoverDistances17 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*1)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2))
  ];
  
  let isHovering17 = hoverDistances17.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering17) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions17 = [
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*2-cOvLp*2)},
    
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*2-cOvLp*2)}
    
  ];

  for (let pos17 of positions17) {
    text("17", pos17.x, pos17.y);
  }
  
  text("2017: My husband and I begin another new company.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  
  push(); //2018
// Check if the mouse is hovering over the 2018 circle of any of the placemats
  let hoverDistances18 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, topMargin + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3))
  ];
  
  let isHovering18 = hoverDistances18.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering18) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions18 = [
    {x: 0 + leftMargin, y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: topMargin + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin, y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)}
    
  ];

  for (let pos18 of positions18) {
    text("18", pos18.x, pos18.y);
  }
  
  text("2018: I journal infrequently during 2018 and 2019.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2019
// Check if the mouse is hovering over the 2019 circle of any of the placemats
  let hoverDistances19 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), topMargin + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3))
  ];
  
  let isHovering19 = hoverDistances19.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering19) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions19 = [
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: topMargin + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*1-cOvLp*1), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)}
    
  ];

  for (let pos19 of positions19) {
    text("19", pos19.x, pos19.y);
  }
  
  text("2019: I journal infrequently during 2018 and 2019.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2020
// Check if the mouse is hovering over the 2020 circle of any of the placemats
  let hoverDistances20 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), topMargin + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3))
  ];
  
  let isHovering20 = hoverDistances20.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering20) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions20 = [
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: topMargin + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*2-cOvLp*2), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)}
    
  ];

  for (let pos20 of positions20) {
    text("20", pos20.x, pos20.y);
  }
  
  text("2020: Lockdown begins for COVID-19.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2021
// Check if the mouse is hovering over the 2021 circle of any of the placemats
  let hoverDistances21 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), topMargin + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3))
  ];
  
  let isHovering21 = hoverDistances21.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering21) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions21 = [
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: topMargin + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*3-cOvLp*3), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)}
    
  ];

  for (let pos21 of positions21) {
    text("21", pos21.x, pos21.y);
  }
  
  text("2021: Lockdown eases, and we are able to make more trips to visit.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();
  
  push(); //2022
// Check if the mouse is hovering over the 2022 circle of any of the placemats
  let hoverDistances22 = [
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), topMargin + (cSize*3-cOvLp*3)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*2)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*2)),
    
    dist(mouseX, mouseY, cSize * (6.5 * 0) - cOvLp * (4 * 0) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 1) - cOvLp * (4 * 1) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)),
    dist(mouseX, mouseY, cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3))
  ];
  
  let isHovering22 = hoverDistances22.some(d => d < cSize/3);

  // Adjust text appearance based on the hover state
  textSize(18);
  textAlign(CENTER, CENTER);
  if (isHovering22) {
    fill(0);  // Black color
  } else {
    noFill();  // No fill for the text
  }

  let positions22 = [
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: topMargin + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: cSize*4-cOvLp*3 + topMargin + captionSize + (cSize*3-cOvLp*3)},
    
    {x: 0 + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * 6.5 - cOvLp * 4 + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 2) - cOvLp * (4 * 2) + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)},
    {x: cSize * (6.5 * 3) - cOvLp * (4 * 3) + leftMargin + (cSize*4-cOvLp*4), y: cSize*8-cOvLp*6 + topMargin + captionSize*2 + (cSize*3-cOvLp*3)}
    
  ];

  for (let pos22 of positions22) {
    text("22", pos22.x, pos22.y);
  }
  
  text("2022: Grandma turns 100.", canvasSizeX/2, leftMargin + cSize * 0.75);
  pop();

}


function windowResized() {
  resizeCanvas (canvasDiv.offsetWidth, canvasSizeY);
}



