function cizKedi(x, y) {
  fill('#ffb347'); 
  ellipse(x, y + 8, 25, 15); // gövde
  ellipse(x, y - 5, 22, 22); // kafa

  // Kulaklar
  fill('#ffb347');
  triangle(x - 6, y - 12, x - 3, y - 17, x, y - 12);
  triangle(x + 6, y - 12, x + 3, y - 17, x, y - 12);

  // Gözler
  fill(0);
  ellipse(x - 4, y - 7, 2.5, 2.5);
  ellipse(x + 4, y - 7, 2.5, 2.5);

  // Burun
  fill(0);
  ellipse(x, y - 2, 2, 2);

  // Patiler
  fill('#ffb347');
  ellipse(x - 8, y + 12, 3, 3);
  ellipse(x + 8, y + 12, 3, 3);

  // Kuyruk
  ellipse(x + 12, y + 8, 4, 4);

  // İsim
  fill(0);
  textSize(10);
  textAlign(CENTER);
  text("Kedi", x, y - 18);
}
