var x, y, vx, vy, width;
var dots = [];
var xspeed = 1;
var yspeed = 3.3;

x = 50;
y = 50;
c = 50;

var direction = true;

function setup() {
    var myCanvas = createCanvas(windowWidth,windowHeight);
    for (var i=0; i<150; i++) {
        dots.push(new Dots());
    }
}

function draw() {
    colorMode(HSB, 100);
    background(255, 80);

    textSize(60);
    textFont("Courier New");
    fill(95,70,100);
    text("Hello 2017", windowWidth/2.8, windowHeight/2);

    if (direction) {
        c += .1;
        if (c > 100) {
            direction = !direction;
        }
    } else {
        c -= .1;
        if (c === 50) {
            direction = !direction;
        }
    }

    d = color(c, 50, 100);
    fill(d);
    noStroke();

    for (var i=0; i<dots.length; i++) {
        dots[i].move();
        dots[i].check();
        dots[i].display();
  }
}

function Dots() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.width = random(10,55);

    // this.xspeed = (random(1,2) + this.width)/10;
    // this.yspeed = (random(1,3.3) + this.width)/10;

    this.xspeed = random(1,2);
    this.yspeed = random(1,3.3);

    this.move = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.check = function() {
        if ((this.x >= windowWidth) || (this.x <= -5)) {
            this.xspeed = this.xspeed * -1;
        }

        if ((this.y >= windowHeight) || (this.y <= -5)) {
            this.yspeed = this.yspeed * -1;
        }
    }

    this.display = function() {
        ellipse(this.x, this.y, this.width, this.width);
    }
}
