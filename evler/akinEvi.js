function akinEvi() {
  background(255);

  ev(); // Ortak eşyaları çiz

  // Karakter
  cizPortreAkin(karakterX, karakterY);
  
  //Hayvanlar
  cizBadem(200,300);
  
  
// Beşiktaş Forması 
push();
translate(180, 130);  

// Forma Gövdesi
stroke(0);
strokeWeight(1);
fill(255);
rect(0, 0, 30, 35, 5);

// Siyah Şeritler
noStroke();
fill(0);
rect(4, 0, 4, 35);
rect(12, 0, 4, 35);
rect(20, 0, 4, 35);

// Kollar 
stroke(0);
strokeWeight(1);
fill(255);
rect(-6, 5, 6, 10);  
rect(30, 5, 6, 10);  

// Yaka
noStroke();
fill(0);
rect(8, -3, 14, 3);
  


pop();
  
// Bilgisayar Köşesi
push();
translate(500, 270);  

// Masa
fill(220, 180, 140);
rect(-30, 30, 100, 12);

// Masa ayakları
fill(120, 90, 50);
rect(-30, 42, 10, 20);  
rect(60, 42, 10, 20);   

// Sandalye
fill(200, 150, 100);
rect(20, 55, 30, 8);
rect(25, 63, 5, 15);
rect(40, 63, 5, 15);

// Monitör
fill(50);
rect(0, 0, 50, 30, 5);

// Monitör ekran içi
fill(255, 100, 100);
rect(5, 5, 40, 10);
fill(100, 200, 255);
rect(5, 18, 40, 7);

// Monitör Yazısı 
fill(255);
rect(5, 5, 40, 20);
fill(0);
textSize(8);
textAlign(CENTER, CENTER);
text("Beşiktaş", 25, 15);  

// Klavye
fill(120);
rect(0, 32, 50, 8, 3);

// Fare
fill(90);
ellipse(60, 35, 8, 12);

pop();



}