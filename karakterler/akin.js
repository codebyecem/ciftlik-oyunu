function cizPortreAkin(x, y) {
  let yukari = 0;

  // Saç 
  fill('#8b5e3c');
  ellipse(x, y - 5 + yukari, 40, 40);

  // Yüz
  fill('#ffe0e0');
  ellipse(x, y + yukari, 26, 26);

  // Gözler
  fill(0);
  ellipse(x - 4, y - 3 + yukari, 3, 3);
  ellipse(x + 4, y - 3 + yukari, 3, 3);

  // Gövde 
  fill(0);
  rect(x - 12, y + 13 + yukari, 24, 30, 5);
}


