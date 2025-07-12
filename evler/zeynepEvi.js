function zeynepEvi() {
  ev(); 
  cizPortreZeynep(karakterX, karakterY);
  cizHera(100, 300);
  cizMes(200, 300);
  
  //Hayvanların isimleri
fill(0);            
textAlign(CENTER);  
textSize(12);       
text("Hera", 100, 275);  

fill(0);            
textAlign(CENTER);  
textSize(12);       
text("Mes", 200, 275);  

// Kitap köşesi 
  
stroke(50);
strokeWeight(1.5);
fill('#d7ccc8'); // gövde
rect(440, 240, 90, 90, 8);

// Raf Çizgileri
line(440, 265, 530, 265);
line(440, 290, 530, 290);
line(440, 315, 530, 315);

//  1. RAF 
stroke(50); strokeWeight(2.0);
fill('#ffccbc'); rect(444, 245, 8, 15);
fill('#f8bbd0'); rect(454, 243, 6, 18);
fill('#c5e1a5'); rect(462, 244, 10, 17);
fill('#b3e5fc'); rect(474, 245, 6, 16);
fill('#a5d6a7'); rect(482, 244, 8, 18);

//  2. RAF 
fill('#d1c4e9'); rect(448, 270, 6, 20);
fill('#ffab91'); rect(456, 272, 8, 18);
fill('#fff59d'); rect(466, 270, 10, 20);
fill('#80deea'); rect(478, 272, 6, 18);
fill('#ce93d8'); rect(486, 270, 8, 20);

//  3. RAF 
fill('#ffcc80'); rect(450, 296, 10, 18);
fill('#c5cae9'); rect(462, 296, 6, 16);
fill('#f48fb1'); rect(470, 296, 8, 18);
fill('#b2dfdb'); rect(480, 296, 6, 17);
fill('#e6ee9c'); rect(488, 296, 8, 18);


//armut koltuk 
stroke(50);
fill('#e1bee7');
ellipse(550, 340, 35, 30); // alt
ellipse(550, 325, 30, 25); // üst


}


