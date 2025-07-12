function cizTahin(x, y) {
  fill('#808080'); 
  ellipse(x, y + 10, 30, 20); // gövde
  ellipse(x, y - 5, 25, 25); // kafa

  // Beyaz göğüs ve yüz altı
  fill('#fffaf0');
  rect(x - 4, y - 12, 8, 30, 4);

  // Kulaklar
  fill('#5c4033');
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
  fill('#fffaf0');
  ellipse(x - 10, y + 15, 4, 4);
  ellipse(x + 10, y + 15, 4, 4);

  // Kuyruk
  fill('#5c4033');
  ellipse(x + 15, y + 10, 5, 5);
}
