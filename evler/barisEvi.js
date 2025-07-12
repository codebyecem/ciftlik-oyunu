function barisEvi() {
  ev(); 
  cizPortreBaris(karakterX, karakterY);
   cizBitter(120, 330);

  // Gitar
  push();
  translate(500, 300);  

  // Gitar gövdesi
  fill(150, 75, 0);
  ellipse(0, -5, 18, 22);  
  ellipse(0, 10, 28, 32);  

  // Sap 
  fill(120, 60, 0);
  rect(-2, -30, 4, 25);  
  // Teller
  stroke(255);
  strokeWeight(0.5);
  for (let i = -1; i <= 1; i++) {
    line(i, -30, i, -5);  
  }
  noStroke();

  
  fill(0);
  ellipse(0, 5, 5, 5);

  pop();
  


  
}

