function preload()
{

}

function setup()
{
    canvas=createCanvas(600, 600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    fill("#990000");
    stroke("#ffffff");
    circle(100, 100, 90);
    circle(500, 100, 90);
    circle(100, 500, 90);
    circle(500, 500, 90);
    fill("#00A300");
    stroke("#ffffff");
    rect(143, 80, 315, 40);
    rect(143, 480, 315, 40);
    rect(80, 143, 40, 315);
    rect(480, 143, 40, 315);
    image(video, 180, 180, 250, 250);
}

function take_snapshot()
{
    save("ARNAV.png");
}