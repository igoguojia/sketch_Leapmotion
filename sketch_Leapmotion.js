//var y_array;
let shadows;
let stars;
let lizi;

function preload() {
  player=loadSound('bgmSika.mp3');
}
function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(1200, 600);
  fill(0);
  stroke(0);

  /*y_array = new Array(width / 15);
   for (var i = 0; i < y_array.length; i++) {
   y_array[i] = height;
   }*/
  Leap.loop(drawHand);
  shadows=new random_shadows();
  stars=new random_stars(12, 2000, width, height);
  lizi=new LiZi();


  player.play(); //播放文件
}

function draw() {
}
function drawHand(frame)
{
  fill(2, 2, 2, 30);
  rect(-1, -1, width+2, height+2);
  let y=0, x=0;

  print(frame.pointables.length);
  if (frame.pointables.length ==5)
  {
    var pointable = frame.pointables[1]; // Index Finger
    y = map(pointable.tipPosition[1], 100, 400, height, 0);
    x = map(pointable.tipPosition[0], -150, 150, 0, width);
    shadows.display(x, y);
    lizi.display3(x, y);
    stars.display();
  } else if (frame.pointables.length ==10)
  {
    //var pointable = frame.pointables[1]; // Index Finger
    //y = map(pointable.tipPosition[1], 100, 400, height, 0);
    //x = map(pointable.tipPosition[0], -150, 150, 0, width);
    lizi.display(width/2, height/2);
  } else if (frame.pointables.length ==0)
  {
    //var pointable = frame.pointables[1]; // Index Finger
    //y = map(pointable.tipPosition[1], 100, 400, height, 0);
    //x = map(pointable.tipPosition[0], -150, 150, 0, width);
    lizi.display2(width/2, height/2);
  }

}
