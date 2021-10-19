// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
//let count;
//let cycle;

//function setup(){

  // count = 0;
  // cycle = 100;
// }

// function draw(){
  // background(160,192,255);
  // count = (count + 1) % cycle;
  // BLANK[1]
let x,y,z,vz;

  function setup(){
    createCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height / 2;
    z = 50;
    vz = 1;
  }

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }


  function draw(){
    background(160, 192, 255);

ellipse(x, y, z);
 z += vz;
 if(z < 50  || z > 100){ vz = -1 * vz; }
}

function keyPressed(){
  if(key == " "){ vz = 2* vz; }
}
  function keyReleased(){
    if(key == " "){ vz = 0.5*vz;}
  }
