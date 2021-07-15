function setup() 
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoadec);
    poseNet.on('pose', gotPoses);
}

function modelLoadec()
{
    console.log('Model is Loaded!')
}

function draw()
{
    background('#DAD3D3');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}