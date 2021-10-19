// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      //if(i%2==0){
        //fill(255);
      //}
      //else{
        //fill(0);
      //}
      fill((i+j) % 2 == 0 ? 255 : 110);
      //fill(i % 2 == 0 ? 255 : 110); // ここを変えます
      console.log(i, j);
    rect(i*20,j*20,20,20);  // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
  if(j<3){
    fill(255,0,0);
  }
 else if(j<5){
   fill(110);
 }
else{
  fill(0);
}
  if((i+j) % 2 == 1){
      ellipse(i*20+10,j*20+10,18);
    }
  }
  }
}
