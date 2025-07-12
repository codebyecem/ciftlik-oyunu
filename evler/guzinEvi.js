function guzinevi() {
  ev(); 
  cizPortreGuzin(karakterX, karakterY);  

  // Tahin
  cizTahin(370, 205);
  
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

// Klavye
fill(120);
rect(0, 32, 50, 8, 3);

// Fare
fill(90);
ellipse(60, 35, 8, 12);

pop();

}