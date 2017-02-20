var x, y, shapes = [], called = 0, drawCalls = 0, params,
num = 10;

window.setInterval(function () {
    var frames = called,
        draws = drawCalls;
    called = 0;
    drawCalls = 0;
    console.log("fps %s %s", frames, draws);
}, 1000);

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('drawing');
    params = {
        //shapewidth : 55,
        //shapeheight : 55,
        shapedim: width / (num-.91),
        xvalue : -55,
        yvalue : 100,
        accel : 5
    };
    for (var i=0; i<num; i++) {
        shapes.push(new Shape(params.xvalue += params.shapedim, params.yvalue));
    }
}

function draw() {
    drawCalls++;
    background(255);
    fill(80);
    for (var i=0; i<shapes.length; i++) {
        shapes[i].turn();
        shapes[i].draw();
    }
}

function Shape(x, y) {
    this.x = x;
    this.y = y;
    this.width = params.shapedim;
    this.height = params.shapedim;
    this.accel = params.accel;

    this.turn = function() {
        this.x += 1;
        called++;
        if(this.x >= (windowWidth + (this.width / 2))) {
            this.x = -35;
        }
    }

    this.draw = function() {
        ellipse (this.x, this.y, this.width, this.height);
    }
}
