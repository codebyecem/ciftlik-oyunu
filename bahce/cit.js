function cizCit() {
  
  fill(255, 235, 205);  
  stroke(0);
  strokeWeight(1);

  let cizgiY = height / 2 - 40;  

  // Dikey direkler 
  for (let i = 0; i < width; i += 30) {
    rect(i, cizgiY, 5, 40);  
  }

  // Üst yatay tahta
  rect(0, cizgiY, width, 5);

  // Alt yatay tahta
  rect(0, cizgiY + 35, width, 5);
}

