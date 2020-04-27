const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,B14box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45;
var B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16,B17,B18,B19,B20,B21,B22,B23,B24,B25,B26,B27,B28,B29,B30,B31,B32,B33,B34,B35,B36,B37,B38,B39,B40,B41,B42,B43,B44,B45,B46,B47;
var ground;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    
    B1 = new BOX(40,740,80,80);
    B2 = new BOX(40,660,80,80);
    B3 = new BOX(40,580,80,80);
    B4 = new BOX(40,500,80,80);
    B5 = new BOX(1160,740,80,80);
    B6 = new BOX(1160,660,80,80);
    B7 = new BOX(1160,580,80,80);
    B8 = new BOX(1160,500,80,80);
    



    box1 = new BOX(120,740,80,80);

    box2 = new BOX(120,660,80,80);

    box3 = new BOX(120,580,80,80);

    box4 = new BOX(120,500,80,80);

    box6 = new BOX(200,740,80,80);

    box7 = new BOX(200,660,80,80);
    
    box8 = new BOX(200,580,80,80);

    box9 = new BOX(200,500,80,80);

    box10 = new BOX(280,740,80,80);

    box11 = new BOX(280,660,80,80);

    box12 = new BOX(280,580,80,80);
    
    box13 = new BOX(280,500,80,80);

    box14 = new BOX(360,740,80,80);

    box15 = new BOX(360,660,80,80);
    
    box16 = new BOX(360,580,80,80);

    box17 = new BOX(360,500,80,80);

    box18 = new BOX(440,740,80,80);

    box19 = new BOX(440,660,80,80);

    box20 = new BOX(440,580,80,80);
    
    box21 = new BOX(440,500,80,80);



    box22 = new BOX(520,500,80,80);



    box23 = new BOX(600,500,80,80);

    box24 = new BOX(600,660,240,240);

  

    box25 = new BOX(680,500,80,80);



    box26 = new BOX(760,740,80,80);

    box27 = new BOX(760,660,80,80);

    box28 = new BOX(760,580,80,80);

    box29= new BOX(760,500,80,80);

    box30 = new BOX(840,740,80,80);

    box31 = new BOX(840,660,80,80);
    
    box32 = new BOX(840,580,80,80);

    box33 = new BOX(840,500,80,80);

    box34 = new BOX(920,740,80,80);

    box35 = new BOX(920,660,80,80);

    box36 = new BOX(920,580,80,80);
    
    box37 = new BOX(920,500,80,80);

    box38 = new BOX(1000,740,80,80);

    box39 = new BOX(1000,660,80,80);
    
    box40 = new BOX(1000,580,80,80);

    box41 = new BOX(1000,500,80,80);

    box42 = new BOX(1080,740,80,80);

    box43 = new BOX(1080,660,80,80);

    box44 = new BOX(1080,580,80,80);
    
    box45 = new BOX(1080,500,80,80);

    B9 = new BOX(960,180,80,80);

    B10 = new BOX(960,260,80,80);
    
    B11 = new BOX(960,340,80,80);

    B12 = new BOX(960,420,80,80);

    B13 = new BOX(1040,180,80,80);

    B14 = new BOX(1040,260,80,80);

    B15 = new BOX(1040,340,80,80);
    
    B16 = new BOX(1040,420,80,80);    

    B17 = new BOX(1120,180,80,80);

    B18 = new BOX(1120,260,80,80);

    B19 = new BOX(1120,340,80,80);
    
    B20 = new BOX(1120,420,80,80);  

    B21 = new BOX(80,180,80,80);

    B22 = new BOX(80,260,80,80);
    
    B23 = new BOX(80,340,80,80);

    B24 = new BOX(80,420,80,80);

    B25 = new BOX(160,180,80,80);

    B26 = new BOX(160,260,80,80);

    B27 = new BOX(160,340,80,80);
    
    B28 = new BOX(160,420,80,80);    

    B29 = new BOX(240,180,80,80);

    B30 = new BOX(240,260,80,80);

    B31 = new BOX(240,340,80,80);
    
    B32 = new BOX(240,420,80,80); 

    B33 = new BOX(40,100,40,80);

    B34 = new BOX(120,100,40,80);

    B35 = new BOX(200,100,40,80);
    
    B36 = new BOX(280,100,40,80); 

    B37 = new BOX(920,100,40,80);

    B38 = new BOX(1000,100,40,80);

    B39 = new BOX(1080,100,40,80);
    
    B40 = new BOX(1160,100,40,80); 
    
    B41 = new BOX(360,420,40,80);

    B42 = new BOX(440,420,40,80);
    
    B43 = new BOX(520,420,40,80); 

    B44 = new BOX(600,420,40,80);

    B45 = new BOX(680,420,40,80);

    B46 = new BOX(760,420,40,80);
    
    B47 = new BOX(840,420,40,80); 



    ground = new Ground(600,790,1200,20)

}

function draw(){
    background(135,206,235);
    Engine.update(engine);
   box1.display();
   box2.display();
   box3.display();
   box4.display();

   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   box27.display();
   box28.display();
   box29.display();
   box30.display();
   box31.display();
   box32.display();
   box33.display();
   box34.display();
   box35.display();
   box36.display();
   box37.display();
   box38.display();
   box39.display();
   box40.display();
   box41.display();
   box42.display();
   box43.display();
   box44.display();
   box45.display();
   B9.display();
   B10.display();
   B11.display();
   B12.display();
   B13.display();
   B14.display();
   B15.display();
   B16.display();
   B17.display();
   B18.display();
   B19.display();
   B20.display();
   B21.display();
   B22.display();
   B23.display();
   B24.display();
   B25.display();
   B26.display();
   B27.display();
   B28.display();
   B29.display();
   B30.display();
   B31.display();
   B32.display();
   B33.display();
   B34.display();
   B35.display();
   B36.display();
   B37.display();
   B38.display();
   B39.display();
   B40.display();
   B41.display();
   B42.display();
   B43.display();
   B44.display();
   B45.display();
   B46.display();
   B47.display();


   B1.display();
   B2.display();
   B3.display();
   B4.display();
   B5.display();
   B6.display();
   B7.display();
   B8.display();
  
   ground.display();
}