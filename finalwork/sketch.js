// 最終課題を制作しよう
let balls;
let x, y, vx, vy;
let grabbed;
const limit = 20;
let starttime;
let state;


function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count = 0;
  x = width / 2;
  y = height / 3;
  vx = 0;
  vy = 0;
  grabbed = false;
  textAlign(CENTER,CENTER);
  textSize(32);
  state = 0;
}

function draw(){
  count++;
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    if(i % 5 == 0){
      fill(255);
    }
    else{
      fill(100);
    }
    b.x += b.vx;
    b.y += b.vy;
  }
 if(count % 20 == 0){
  const b = { x: 0, y: height/2, size:random(10,40), vx:4, vy: random(-2,2) };
  balls.push(b);
}
ellipse(x, y, 30);
if(!grabbed){ // つかんでいないときだけアニメーションさせる
  x += vx;
  y += vy;
  if(x < 0 || x > width){ vx = -0.8 * vx; }
  if(y < 0 || y > height){ vy = -0.8 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

if (state == 0) {
    text("Click to start", width / 2, height / 2);
  } else if (state == 1) {
    let ellapsedTime = (millis() - startTime) / 1000;
    if (ellapsedTime > limit) {
      state = 2;
    } else {
      let remainingTime = limit - ellapsedTime;
      text(floor(remainingTime), width / 2, height / 2);
      text("※あなたはこのゲームをどのように遊びますか。それはあなたの自由です。", width/2, height*0.9);
    }
  } else if (state == 2) {
    text("Game Over", width / 2, height / 2);
  }
}



function keyPressed(){
  if(key == " "){　// スペースキーを押したらリセット
    x = width / 2;
    y = height / 2;
    vx = 0;
    vy = 0;
    grabbed = false;
  }
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30; // distは２点の距離を求める関数
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}
function mouseClicked() {
  if (state == 0) {
    startTime = millis();
    state = 1;
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
