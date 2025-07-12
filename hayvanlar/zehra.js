function cizZehra(x, y) {
  let yukari = 0;
  fill('#a0522d'); // saç
  ellipse(x, y + yukari, 45, 60); 
  fill('#ffe0e0'); // yüz
  ellipse(x, y + yukari, 26, 26);
  fill(0); // gözler
  ellipse(x - 4, y - 3 + yukari, 3, 3);
  ellipse(x + 4, y - 3 + yukari, 3, 3);
  fill('#d18aff'); // gövde
  rect(x - 12, y + 13 + yukari, 24, 32, 8);
}
