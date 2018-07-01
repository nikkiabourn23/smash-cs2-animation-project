// Global Variables
var p5Canvas;
var myName;
var ballX;
var ballY;
var ballRadius;
var ballXVelocity;
var ballGrowth;
var xspeed = 3; // Speed of the shape
var yspeed = 5; // Speed of the shape
var xdirection = 2; // Left or Right
var ydirection = 2; // Top to Bottom
var rad = 60; // Width of the shape

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Nikkia");
  ballX = width / 2;
  ballY = height / 2;
  ballRadius = 50;
  ballXVelocity = 5;
  ballGrowth = 5;
}


function draw() {
  //background(0, 0, 255);
  ballX = ballX + xspeed * xdirection;
  ballY = ballY + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (ballX > width - rad || ballX < rad) {
    xdirection *= -1;
  }
  if (ballY > height - rad || ballY < rad) {
    ydirection *= -1;
  }
  drawSquares(random(10,10)); // Uncomment this line for some fun!
  drawBall();
}
function drawBall() {
  if(ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXVelocity *= -1;
     
}
  var circumference = getCircumference(); // local variable
  if(circumference >= 600 || circumference <= 160) {
    ballGrowth *= -1;
  }
  ballX += ballXVelocity;
  //ballRadius += ballGrowth; // Uncomment this line for a "pulsing" effect!
  var ballDiameter = ballRadius * 2; // local variable
  fill("white");
  ellipse(ballX, ballY, ballDiameter, ballDiameter);
}

function getCircumference() {
  return 2 * PI * ballRadius;
}

function drawSquares(num) {
  // a while loop
  while(num > 0) {
    var randomX = random(width); // generate random float (decimal) between 0 and width - 1
    var randomY = random(height); // generate random float (decimal) between 0 and height - 1
    var randomLength = random(20, 80); // generate random float (decimal) between 20 (inclusive) and 80 (exclusive)
    var randomRed = random(255); // amount of red is between 0 (none) and 255 (most)
    var randomGreen = random(255);
    var randomBlue = random(255);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
    num--;
  }
}

// another way of drawing squares, but with a for loop (same exact result)
// can you spot the (very few) differences?
function drawSquaresAlt(num) {
  // a for loop
  for(var i = 0; i < num; i++) {
    var randomX = random(width); // generate random float (decimal) between 0 and width - 1
    var randomY = random(height); // generate random float (decimal) between 0 and height - 1
    var randomLength = random(20, 80); // generate random float (decimal) between 20 (inclusive) and 80 (exclusive)
    var randomRed = random(255); // amount of red is between 0 (none) and 255 (most)
    var randomGreen = random(255);
    var randomBlue = random(255);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
  }
}