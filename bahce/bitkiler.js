function cizTohum(x, y) {
  fill(80, 50, 20);
  stroke(0);
  ellipse(x - 5, y, 4, 4);
  ellipse(x, y, 4, 4);
  ellipse(x + 5, y, 4, 4);
}

function cizBugday(x, y) {
  stroke(0);
  strokeWeight(1);
  fill(218, 165, 32);  

  // Gövde 
  line(x, y, x, y - 20);

  // Taneler 
  for (let i = 0; i < 5; i++) {
    ellipse(x - 4, y - i * 4, 6, 8);  
    ellipse(x + 4, y - i * 4, 6, 8);  
  }
}


function cizHavuc(x, y) {
  stroke(0);
  strokeWeight(1);
  fill(255, 140, 0);
  triangle(x - 7, y, x + 7, y, x, y + 20);

  fill(34, 139, 34);
  ellipse(x - 5, y - 8, 8, 12);  
  ellipse(x + 5, y - 8, 8, 12);  
  ellipse(x, y - 13, 8, 12);     
}

function cizCilek(x, y) {
  fill(255, 0, 0);
  ellipse(x, y, 10, 10);
  fill(0, 128, 0);
  triangle(x - 5, y - 5, x, y - 10, x + 5, y - 5);
}

