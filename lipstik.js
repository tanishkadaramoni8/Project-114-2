nosex = 0;
nosey = 0;

function change()
{
    window.location.replace("index.html");
}

function preload()
{

}

function setup()
{
    canvas = creatCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function modelLoaded()
{
    console.log("posenet is inisalized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nosex = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);
    }
}

function take_snapshot()
{
    save('my_filter_image.png');
}