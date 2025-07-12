function ev() {
  
  noStroke();
  fill('#f3e5f5'); 
  rect(0, 0, 600, 200);
  fill(245, 235, 220); 
  rect(0, 200, 600, 200);
  stroke(200);
  strokeWeight(2);
  line(0, 200, 600, 200);
  stroke(50);
  strokeWeight(2);

  // Halı
  fill(255, 204, 229);
  ellipse(300, 310, 250, 120);

  // Masa
  fill(255, 255, 204);
  ellipse(300, 290, 100, 50);
  line(285, 305, 285, 335);
  line(315, 305, 315, 335);

  // Sandalyeler
  fill(230, 204, 255);
  rect(245, 315, 28, 28, 5);
  rect(245, 298, 28, 14, 5);
  rect(327, 315, 28, 28, 5);
  rect(327, 298, 28, 14, 5);

  //  MASA ÜZERİ OBJELER 
  // Çay bardağı
  fill(255, 192, 203);
  ellipse(300, 275, 16, 16);
  rect(292, 275, 16, 22, 5);
  noFill();
  stroke(0); // siyah kulp
  ellipse(308, 285, 8, 8);
  stroke(50);

  // Cupcake
  fill(255, 222, 173);
  rect(320, 275, 16, 16, 3);
  fill(255, 182, 193);
  ellipse(328, 275, 18, 12);

  // Yatak
  fill(230, 204, 255);
  rect(50, 200, 130, 60, 20);
  fill(255, 240, 245);
  rect(60, 185, 50, 20, 10);
  fill(204, 255, 229);
  arc(115, 225, 130, 60, Math.PI, Math.PI * 2);

  // Mutfak tezgahı
  fill(255, 240, 200);
  rect(310, 180, 120, 30, 5);
  fill(200);
  ellipse(340, 195, 25, 15); // lavabo
  fill(255, 204, 204);
  rect(380, 180, 50, 30, 5); // ocak
  fill(100);
  ellipse(395, 195, 10, 10);
  ellipse(415, 195, 10, 10);

  // Aspiratör
  fill(180);
  rect(380, 135, 50, 12, 3);
  fill(120);
  rect(395, 115, 20, 20);

  // Buzdolabı
  fill(224, 255, 255);
  rect(440, 130, 40, 80, 8);
  line(440, 170, 480, 170);
  ellipse(450, 150, 4, 4);
  ellipse(450, 190, 4, 4);

  // Tablo
  fill(255, 200, 200);
  rect(240, 60, 50, 40, 5);
  fill(173, 216, 230);
  rect(245, 65, 40, 20);
  fill(204, 255, 204);
  rect(245, 85, 40, 10);
  fill(255, 255, 102);
  ellipse(265, 70, 10, 10);

  // Pencere
  fill(204, 229, 255);
  rect(60, 60, 60, 60);
  line(90, 60, 90, 120);
  line(60, 90, 120, 90);

  // Perde 
  fill(255, 192, 203);
  rect(60, 60, 60, 10);
  fill(255, 182, 193);
  triangle(60, 70, 70, 100, 80, 70);
  triangle(80, 70, 90, 100, 100, 70);
  triangle(100, 70, 110, 100, 120, 70);

  // KAKTÜS 
  fill(255, 182, 193);
  ellipse(510, 180, 20, 20);
  fill(34, 139, 34);
  ellipse(505, 190, 10, 20);
  ellipse(515, 190, 10, 20);
  fill(139, 69, 19);
  rect(500, 200, 20, 20, 5);

  // KAPI 
  fill(255, 248, 220);
  rect(560, 100, 40, 100, 5);
  fill(150);
  ellipse(575, 150, 6, 6);
  }