noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 500);
  canvas.position(560,150);

  console.log("function setup is working");

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw()
{
  background('#C4CA00');
  fill('#F90093');
  stroke('#F90093');
  square( noseX, noseY, difference);
}

function modelLoaded()
{
  console.log("poseNet is Intialized!");
}

function gotPoses(results)
{
  console.log(results);
  if (results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX =" + noseX +"noseY =" + noseY);

    rightwristX = results[0].pose.rightWrist.x;
    leftwristX = results[0].pose.leftWrist.x;
    difference = leftWristX - rightWristX;

    console.log("rightWristX" + rightWristX ,"leftWristX" + leftWristX ,"difference" + difference);

  }
}



