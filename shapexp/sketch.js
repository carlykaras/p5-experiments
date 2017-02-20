var X_AXIS = 2;
var x, y, g1, g2, shapes = [], called = 0, drawCalls = 0, params,
num = 10;

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('drawing');
    params = {
        shapedim: width / num,
        xvalue : -30,
        yvalue : 100,
        accel : 5
    };
    g1 = color(251, 150, 150);
    g2 = color(246, 202, 151);
    //shapes = new Shape(params.shapewidth, params.shapeheight, params.xvalue, params.yvalue);
    //shapes = new Shape();
    for (var i=0; i<num; i++) {
        shapes.push(new Shape(params.xvalue += params.shapedim, params.yvalue));
    }
}

function draw() {
    setGradient(0, 0, width, height, g1, g2, X_AXIS);
    //noLoop();
    noStroke();
    fill(255,70);
    for (var i=0; i<shapes.length; i++) {
        shapes[i].turn();
        shapes[i].draw();
    }
}

function Shape(x,y) {

    this.x = x;
    this.y = y;
    this.width = params.shapedim;
    this.height = params.shapedim;
    this.accel = params.accel;

    this.turn = function() {
        this.x+=1;
        if (this.x >= (windowWidth + this.width)) {
            this.x = params.shapedim;
        }
    }

    this.draw = function() {
        ellipse (this.x, this.y, this.width, this.height);
    }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  if (axis == X_AXIS) {
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
