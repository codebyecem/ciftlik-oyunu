function cizPortreAleyna(x, y) {
  let yukari = 0;
  fill(0);
  ellipse(x, y + yukari, 45, 60);
  fill('#ffe0e0');
  ellipse(x, y + yukari, 26, 26);
  fill(0);
  ellipse(x - 4, y - 3 + yukari, 3, 3);
  ellipse(x + 4, y - 3 + yukari, 3, 3);
  fill('#d18aff');
  rect(x - 12, y + 13 + yukari, 24, 32, 8);
}