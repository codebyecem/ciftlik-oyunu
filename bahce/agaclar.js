function cizElmaAgaci(x, y) {
  // Gövde
  fill(139, 69, 19); 
  rect(x, y, 20, 60);

  // Yapraklar
  fill(34, 139, 34); 
  ellipse(x + 10, y - 20, 60, 60);
  ellipse(x - 10, y, 60, 60);
  ellipse(x + 30, y, 60, 60);

  // Elmalar
  fill(255, 0, 0); 
  ellipse(x, y - 30, 10, 10);
  ellipse(x + 20, y - 40, 10, 10);
  ellipse(x + 5, y - 10, 10, 10);
}
