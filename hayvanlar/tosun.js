function cizTosun(x, y) {
  // Gövde
  fill('#a0522d'); 
  ellipse(x, y, 40, 30); // gövde
  ellipse(x, y - 15, 25, 25); // kafa

  // Gözler
  fill(0);
  ellipse(x - 6, y - 18, 4, 4);
  ellipse(x + 6, y - 18, 4, 4);

  // Burun
  fill(0);
  ellipse(x, y - 12, 4, 4);

  // Kulaklar
  fill('#8b4513');
  ellipse(x - 12, y - 22, 8, 8);
  ellipse(x + 12, y - 22, 8, 8);

  // Kuyruk
  fill('#a0522d');
  ellipse(x + 20, y, 8, 8);
}
