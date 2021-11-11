// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",50);
}

function balloon(t,n){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = n;
  fill(0,100,120);
  noStroke();
  ellipse((w+p*2) / 2 , h/1.5 + p , w*1.5 , h * 1.5 );
  fill(255);
  text(t, p, h + p);
  fill(0,100,120);
  noStroke();
  beginShape();
  vertex(w*7/6 + p , h/1.5 + p);
  vertex((w*7/6 + p)*7/8, (h/1.5 + p) + h/3);
  vertex(w*7/6 + p, h/1.5 + p + h+1.5);
  endShape();
}
