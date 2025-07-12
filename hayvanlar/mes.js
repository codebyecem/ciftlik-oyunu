function cizMes(x, y) {
  // Gövde
  stroke(50);
  strokeWeight(2);
  fill('#3b444b'); 
  ellipse(x, y + 10, 30, 20); // gövde
  ellipse(x, y - 5, 25, 25); // baş

  fill('#ffffff');
  rect(x - 4, y - 12, 8, 30, 4);

  // Kulaklar 
  fill('#cfd8dc');
  triangle(x - 8, y - 12, x - 5, y - 18, x - 2, y - 12);
  triangle(x + 8, y - 12, x + 5, y - 18, x + 2, y - 12);

  // Gözler
  fill(0);
  ellipse(x - 4, y - 7, 3, 3);
  ellipse(x + 4, y - 7, 3, 3);

  // Burun
  fill('#FFCBDB')
  ellipse(x, y - 2, 2, 2);

  // Patiler
  fill('#ffffff');
  ellipse(x - 10, y + 15, 4, 4);
  ellipse(x + 10, y + 15, 4, 4);

  // Kuyruk
  fill('#cfd8dc');
  ellipse(x + 15, y + 10, 5, 5);
}
