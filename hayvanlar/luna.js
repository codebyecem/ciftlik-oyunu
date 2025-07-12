function cizLuna(x, y) {
  // Gövde (beyaz)
  fill('#fffaf0');
  ellipse(x, y + 10, 30, 20); // gövde

  // Yüz
  fill('#ffb347');
  arc(x, y - 5, 25, 25, PI, 0, OPEN);

  // Alt kısım beyaz 
  fill('#fffaf0');
  arc(x, y - 5, 25, 25, 0, PI, OPEN);

  // Kulaklar 
  fill(0);
  triangle(x - 8, y - 12, x - 5, y - 18, x - 2, y - 12);
  triangle(x + 8, y - 12, x + 5, y - 18, x + 2, y - 12);

  // Siyah leke 
  
  fill(0);
  ellipse(x - 2, y - 7, 6, 6);

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
  ellipse(x + 15, y + 10, 5, 5);

  // İsim
  fill(0);
  textSize(10);
  textAlign(CENTER);
  text("Luna", x, y - 20);
}
