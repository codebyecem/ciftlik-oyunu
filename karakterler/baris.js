
function cizPortreBaris(x, y) {
  let yukari = 0;

  
  fill(0);
  ellipse(x, y - 5 + yukari, 40, 40);

  // Yüz
  fill('#FFE0D0');
  ellipse(x, y + yukari, 26, 26);

  // Gözler
  fill(0);
  ellipse(x - 4, y - 3 + yukari, 3, 3);
  ellipse(x + 4, y - 3 + yukari, 3, 3);

  // Gövde
  fill('#8B5E3C');
  rect(x - 12, y + 13 + yukari, 24, 30, 5);
}





