function cizBitter(x, y) {
  fill('#808080'); 
  ellipse(x, y + 10, 30, 20); // gövde
  ellipse(x, y - 5, 25, 25); // baş

  // Kulaklar
  fill('#808080');
  triangle(x - 8, y - 12, x - 5, y - 18, x - 2, y - 12);
  triangle(x + 8, y - 12, x + 5, y - 18, x + 2, y - 12);

  // Gözler
  fill(0);
  ellipse(x - 4, y - 7, 3, 3);
  ellipse(x + 4, y - 7, 3, 3);

  // Burun
  fill(0);
  ellipse(x, y - 2, 2, 2);

  // Patiler
  fill('#808080');
  ellipse(x - 10, y + 15, 4, 4);
  ellipse(x + 10, y + 15, 4, 4);

  // Kuyruk
  ellipse(x + 15, y + 10, 5, 5);

  // İsim
  fill(0);
  textSize(10);
  textAlign(CENTER);
  text("Bitter", x, y - 20);
}
