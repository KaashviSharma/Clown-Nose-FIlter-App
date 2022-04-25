nosex = 0;
nosey = 0;

function preload()
{
 clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup()
{
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet = ml5.poseNet(video,modelLoadeded);
   poseNet.on('pose',gotPoses);
}

function modelLoadeded()
{
   console.log("posenet is initilized");
}

function gotPoses(results)
{
   if(results.length > 0)
   {
      console.log(results);
      nosex = results[0].pose.nose.x-15;
      nosey = results[0].pose.nose.y-12;
      console.log("nose x = "+results[0].pose.nose.x);
      console.log("nose y = "+results[0].pose.nose.y);
   }
}

function draw()
{
  image(video,0,0,300,300);
  image(clown_nose,nosex,nosey,30,30);
//   fill(196, 30, 58);
//   stroke(196, 30, 58);
//   circle(nosex,nosey,20); the above 3 lines of code are for drawing the circle on the nosex & nosey position
}

function take_snapshot()
{
   save("myfilterimage.png"); 
}

