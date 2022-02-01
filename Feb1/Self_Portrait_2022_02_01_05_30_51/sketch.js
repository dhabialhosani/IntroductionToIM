function setup() 
{
  createCanvas(600, 600);
  fill (0);
  stroke (0);
  triangle(500,600,250,200,10,600);
  fill (255,182,193);
  stroke (255,182,193);
  beginShape();
  vertex(400, 400);
  vertex(800, 400);
  vertex(650, 750);
  vertex(100, 750);
  endShape(CLOSE);
  fill (255,182,193);
  stroke (255,182,193);
  beginShape();
  vertex(100, 400);
  vertex(-400, 400);
  vertex(100, 750);
  vertex(400, 750);
  endShape(CLOSE);
  fill(0);
  stroke (0);
  ellipse (270,190,350,450);
  fill (238, 202, 179);
  stroke (238, 202, 179);
  ellipse (270,190,250,350);
  noFill();
  stroke(21,19,19);
  arc(220, 130, 55, 20, PI, TWO_PI, OPEN);
  arc(330, 130, 55, 20, PI, TWO_PI, OPEN);
  arc(220, 140, 50, 40, HALF_PI, PI);
  arc(330, 140, 50, 40, 0, HALF_PI);
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(220, 140, 36, 34);
  ellipse(330, 140, 36, 34);
  noStroke()
  fill(255)
  ellipse(227, 142, 8, 8);
  ellipse(336, 142, 8, 8);
  stroke(21, 19, 19);
  strokeWeight(8);
  noFill();
  arc(220, 100, 65, 15, PI, TWO_PI, OPEN);
  arc(330, 100, 65, 15, PI, TWO_PI, OPEN);
  noFill();
  stroke(21,19,19);
  strokeWeight(3);
  arc(220, 130, 90, 35, PI, TWO_PI, OPEN);
  arc(330, 130, 90, 35, PI, TWO_PI, OPEN);
  arc(220, 155, 80, 55, HALF_PI, PI);
  arc(330, 155, 80, 55, 0, HALF_PI);
  fill(232, 190, 172);
  beginShape();
  vertex(275, 170);
  vertex(265, 240);
  vertex(275,250);
  endShape();
  fill(235, 102, 102);
  arc(271, 285, 80, 60, 0, PI);
  line(175,140,150,120);
  line(375,140,400,120);
}
