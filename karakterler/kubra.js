function cizPortreKubra(x, y) {
  let yukari = 0;
  fill('#ff9933');
  ellipse(x, y + yukari, 45, 60);
  fill('#ffd1dc');
  ellipse(x, y + yukari, 26, 26);
  fill('#5c4033');
  ellipse(x - 4, y - 3 + yukari, 3, 3);
  ellipse(x + 4, y - 3 + yukari, 3, 3);
  fill('#a974e8');
  rect(x - 12, y + 13 + yukari, 24, 32, 8);
}