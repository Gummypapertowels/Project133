function setup(){
    canvas = createCanvas(800, 800);
    canvas.position(160,250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video, 0, 0, 640, 480);
    
    fill(255,0,0)
    circle(700, 100, 40);

    fill(20, 60, 95)
    circle(80, 50, 100)

    fill(30, 100, 40)
    rect(300, 90, 55, 55, 15);

    fill(30, 0, 40)
    rect(350, 400, 55, 55,);
}

function take_snapshot(){
    save('student_name.png');
}

