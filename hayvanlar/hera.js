function cizHera(x, y) {
  // Gövde ve baş
  stroke(50);
  strokeWeight(2);
  fill('#fff176'); 
  ellipse(x, y + 10, 30, 20); // gövde
  ellipse(x, y - 5, 25, 25); // baş

  // Kulaklar 
  triangle(x - 8, y - 12, x - 5, y - 18, x - 2, y - 12);
  triangle(x + 8, y - 12, x + 5, y - 18, x + 2, y - 12);

  // Gözler 
  fill(0);
  ellipse(x - 4, y - 7, 3, 3);
  ellipse(x + 4, y - 7, 3, 3);

  // Burun (
  fill('#ff4081'); 
  ellipse(x, y - 2, 2, 2);

  // Patiler
  fill('#fffde7'); 
  ellipse(x - 10, y + 15, 4, 4);
  ellipse(x + 10, y + 15, 4, 4);

  // Kuyruk
  fill('#fff176');
  ellipse(x + 15, y + 10, 5, 5);
}
