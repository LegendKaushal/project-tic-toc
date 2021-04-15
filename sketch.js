var hr,min,sec
var hrAng,minAng,secAng

function setup() {
  createCanvas(800,400);

   angleMode(DEGREES)



}

function draw() {
  background(0,0,0);  
  translate(200,200)
  rotate(-90)

  hr = hour()
  min = minute()
  sec = second()

  hrAng = map(hr % 12,0,12,0,360)
  minAng = map(min,0,60,0,360)
  secAng = map(sec,0,60,0,360)

  push()
  rotate(secAng)
  stroke("blue")
  strokeWeight(5)

  line(0,0,100,0)
  pop()

  push()
  rotate(minAng)
  stroke("red")
  strokeWeight(5)

  line(0,0,75,0)
  pop()

  push()
  rotate(hrAng)
  stroke("green")
  strokeWeight(5)

  line(0,0,50,0)
  pop()
  
  point(0,0)

  strokeWeight(7.5)
  noFill()
  stroke("blue")
  arc(0,0,350,350,0,secAng)
  stroke("red")
  arc(0,0,300 ,300,0,minAng)
  stroke("green")
  arc(0,0,250,250,0,hrAng)


  drawSprites();
}