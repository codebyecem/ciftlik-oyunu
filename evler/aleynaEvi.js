function aleynaEvi() {
  ev(); 
  cizPortreAleyna(karakterX, karakterY);
  cizTosun(120, 330);
  cizZuzu(370, 230);

  fill(0);
  textAlign(CENTER);
  textSize(12);
  text("Tosun", 120, 295);
  text("Zuzu", 370, 205);

  // Şövale ve tuval
  stroke(50);
  strokeWeight(2);
  fill(139, 69, 19); 
  rect(470, 290, 6, 40); 
  rect(514, 290, 6, 40); 
  rect(470, 290, 50, 6); 
  rect(492, 240, 6, 20); 

  // Tuval
  fill(255);
  rect(475, 260, 40, 30, 5);

  //  Gökkuşağı
  noFill();
  strokeWeight(2);
  stroke('#FFB3BA'); arc(495, 275, 25, 15, PI, TWO_PI);
  stroke('#FFDFBA'); arc(495, 275, 20, 12, PI, TWO_PI);
  stroke('#BAE1FF'); arc(495, 275, 15, 9, PI, TWO_PI);

  // Puff sandalye
  stroke(50);
  fill('#ffd1dc');
  ellipse(495, 335, 30, 20);
  fill('#ffe6f2');
  ellipse(495, 332, 24, 15);

  stroke(0);
  strokeWeight(1);
}
