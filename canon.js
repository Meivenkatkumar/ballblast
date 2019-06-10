var canvas=document.querySelector('canvas');
canvas.width=1000;
canvas.height=800;
var c = canvas.getContext('2d');
var roc=new Image();
roc.src="4.jpg";
var i,count=0,mode=3;
var highscore=0;
if (localStorage.hasOwnProperty("bbhs")) {
    highscore=parseInt(localStorage.getItem("bbhs"));
}
else
    localStorage.setItem("bbhs",highscore);
class canon{
	constructor(){
	this.x=500;
	this.y=760;
	this.dx=15;
  this.score=0;
    }
    initialise(){
    this.x=500;
    this.y=760;
    this.dx=15;
    this.score=0;
    }
    build(){
    c.fillRect(this.x+10,this.y,40,40);
    c.beginPath();
    c.fillStyle='rgb(0,255,0)';
    c.arc(this.x+10,this.y+30,10,0,Math.PI*2);
    c.fill();
    c.stroke();
    c.beginPath();
    c.arc(this.x+50,this.y+30,10,0,Math.PI*2);
    c.fill();
    c.stroke();
    c.fillStyle='rgb(255,0,0)';
    }
    right(){
    if(this.x<940)
     {
        this.x=this.x+this.dx;
     }
    }
    left(){
    if(this.x>0)
     {
        this.x=this.x-this.dx;
     }
    }
}
class bullet{
    constructor(i){
        this.x=can.x+30;
        this.y=800+(i*25);
        this.r=10;
        this.dy=15;
        this.display=1;
        this.d1=0;
        this.d2=0;
    }
    initialise(){
        this.x=can.x+30;
        this.y=can.y;
        this.display=1;
    }
    restart(i){
        this.x=can.x+30;
        this.y=800+(i*25);
        this.r=10;
        this.dy=15;
        this.display=1;
        this.d1=0;
        this.d2=0;
    }
    build(){
        if(this.y<0)
            this.initialise();
        this.moveup();
        if(this.display)
        {
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,Math.PI*2);
        c.fillStyle='rgb(255,0,0)';
        c.fill();
        c.stroke();
        }
    }
    moveup(){
        this.y=this.y-this.dy;
    }
    coldet(rockc){
        this.d1=0;
        this.d2=0;
        if((this.display)&&(rockc.y>=55))
        { 
        if(rockc.strength>100)
          {
            this.d1=this.x-rockc.x;
            this.d2=this.y-rockc.y;
            this.d1=Math.sqrt((this.d1*this.d1)+(this.d2*this.d2));
            if(this.d1<(this.r+rockc.r))
            {
                rockc.strength-=1;
                can.score++;
                this.display=0;
            }
          }
        if(rockc.strength<=100)
          if(this.display)
          {
            if(rockc.strength1>0)
            {
              this.d1=this.x-rockc.x1;
              this.d2=this.y-rockc.y;
              this.d1=Math.sqrt((this.d1*this.d1)+(this.d2*this.d2));
              if(this.d1<(this.r+rockc.r1))
              {
                rockc.strength1-=1;
                can.score++;
                this.display=0;
              }
            }
            if(this.display)
            {
              if(rockc.strength2>0)
              {
               this.d1=this.x-rockc.x2;
               this.d2=this.y-rockc.y;
               this.d1=Math.sqrt((this.d1*this.d1)+(this.d2*this.d2));
               if(this.d1<(this.r+rockc.r1))
                {
                  rockc.strength2-=1;
                  can.score++;
                  this.display=0;
                }
              }
            }
          }
        }
    }
}
class rock{
    constructor(){
    this.y=50;
    this.x= 1000*Math.floor(Math.random()+0.5);   //random left or right
    this.x1=this.x+5;
    this.x2=this.x-5;
    this.r=40;
    this.r1=20;
    this.dy=0;
    this.dx=2*Math.random()+1;
    this.dx1=this.dx+0.7;
    this.dx2=this.dx-0.7;
    this.g=0.5;
    this.strength=100+Math.floor(Math.random()*500);
    this.strength1=100;
    this.strength2=100;
    this.timer=150;
    this.disx1=0;
    this.disy1=0;
    this.rad1=0;
    }
    initialise(){                                 //restarting thherocks after destruction
    this.y=50;
    this.x= 1000*Math.floor(Math.random()+0.5);   //random left or right
    this.x1=this.x+5;
    this.x2=this.x-5;
    this.r=40;
    this.r1=20;
    this.dy=0;
    this.dx=2*Math.random()+1;
    this.dx1=this.dx+0.7;
    this.dx2=this.dx-0.7;
    this.g=0.5;
    this.strength=100+Math.floor(Math.random()*500);
    this.strength1=100;
    this.strength2=100;
    this.timer=0;
    }initial(){
    this.y=50;
    this.x= 1000*Math.floor(Math.random()+0.5);   //random left or right
    this.x1=this.x+5;
    this.x2=this.x-5;
    this.r=40;
    this.r1=20;
    this.dy=0;
    this.dx=2*Math.random()+1;
    this.dx1=this.dx+0.7;
    this.dx2=this.dx-0.7;
    this.g=0.5;
    this.strength=100+Math.floor(Math.random()*500);
    this.strength1=100;
    this.strength2=100;
    this.timer=150;
    this.disx1=0;
    this.disy1=0;
    this.rad1=0;  
    }
    move(){
        if(this.strength>100)                                    //single rock
        {
            if(this.y<=50)
            {
               if(this.x<=100)
               {
                  this.x=this.x+5;
               }
               else if(this.x<=110)
               {
                  this.y=55;
               }
               if(this.x>=900)
               {
                  this.x=this.x-5;
               }
               else if(this.x>=890)
               {
                   this.y=55;
               }
            }
            else
            {
               if((this.y+this.r)>canvas.height)
                    this.dy=-this.dy;
               else
                    this.dy+=this.g;
               this.y+=this.dy;
            }
            if((this.x+this.r>canvas.width)||(this.x<this.r))
               this.dx=-this.dx;            
            this.x+=this.dx;
        }
        else if(this.strength<=100 && this.x>0)
        {
            this.x1=this.x+5;
            this.x2=this.x-5;
            this.dx1=this.dx+0.7;
            this.dx2=this.dx-0.7;
            this.x=0;
        }
        if(this.strength<=100)                               //double rock
        {
               if((this.y+this.r1)>canvas.height)
                    this.dy=-this.dy;
               else
                    this.dy+=this.g;
               this.y+=this.dy;
               if((this.x1+this.r1>canvas.width)||(this.x1<this.r1))
                      this.dx1=-this.dx1;            
               this.x1+=this.dx1;
               if((this.x2+this.r1>canvas.width)||(this.x2<this.r1))
                      this.dx2=-this.dx2;            
               this.x2+=this.dx2;
        }
    }
    build(){
        if((this.strength1 <= 0) && (this.strength2 <= 0))
        {
          this.initialise();
        }
        if(this.timer>=150)
        {  
           if(this.strength>100)
           {
              // c.save();
              // c.rotate(Math.PI);
              // c.drawImage(roc,0,0,300,300,this.x-this.r,this.y-this.r,2*this.r,2*this.r);
              // c.restore();
              c.beginPath();
              c.arc(this.x,this.y,this.r,0,Math.PI*2);
              c.fillStyle='rgb(255,255,0)';
              c.fill();
              c.stroke();
              this.coldet();
              this.score();
              this.move();
            }
        
           else if(this.strength<=100)
           {
              if(this.strength1>0)
              {
                c.beginPath();
                c.arc(this.x1,this.y,this.r1,0,Math.PI*2);
                c.fillStyle='rgb(200,255,0)';
                c.fill();
                c.stroke();
              }
              if(this.strength2>0)
              {
                c.beginPath();
                c.arc(this.x2,this.y,this.r1,0,Math.PI*2);
                c.fillStyle='rgb(200,255,0)';
                c.fill();
                c.stroke();
              }
            this.coldet();
            this.score();
            this.move();
            }
        }
        if(this.timer<150)
        {
          this.timer++;
        }
    }
    coldet(){
    if(this.strength>100)
      {
       if(this.x<can.x)
            {
            this.disx1=can.x-this.x;
            }
        else if(this.x>can.x+60)
            {
            this.disx1=this.x-60-can.x;
            }
        else
            {
            this.disx1=0;
            }
        if (this.y<can.y)
            {
            this.disy1=can.y-this.y;
            }
        else if(this.y>can.y+40)
            {
            this.disy1=this.y-can.y-40;   
            }
        else 
            {
             this.disy1=0;
            }
        this.rad1=Math.sqrt((this.disx1*this.disx1)+(this.disy1*this.disy1));
        if(this.rad1<=this.r)
        {
          allrestart();
        }
      }
      if(this.strength<=100)
      {
      if(this.strength1>0)
      {
       if(this.x1<can.x)
            {
            this.disx1=can.x-this.x1;
            }
        else if(this.x1>can.x+60)
            {
            this.disx1=this.x1-60-can.x;
            }
        else
            {
            this.disx1=0;
            }
        if (this.y<can.y)
            {
            this.disy1=can.y-this.y;
            }
        else if(this.y>can.y+40)
            {
            this.disy1=this.y-can.y-40;   
            }
        else 
            {
             this.disy1=0;
            }
        this.rad1=Math.sqrt((this.disx1*this.disx1)+(this.disy1*this.disy1));
        if(this.rad1<this.r1)
        {
          allrestart();
        }
      }
      if(this.strength2>0)
      {
        if(this.x2<can.x)
            {
            this.disx1=can.x-this.x2;
            }
        else if(this.x2>can.x+60)
            {
            this.disx1=this.x2-60-can.x;
            }
        else
            {
            this.disx1=0;
            }
        if (this.y<can.y)
            {
            this.disy1=can.y-this.y;
            }
        else if(this.y>can.y+40)
            {
            this.disy1=this.y-can.y-40;   
            }
        else 
            {
             this.disy1=0;
            }
        this.rad1=Math.sqrt((this.disx1*this.disx1)+(this.disy1*this.disy1));
        if(this.rad1<this.r1)
        {
          allrestart();
        }
      }
      }
    }
    score(){
        if(this.strength>100)
        {
            c.fillStyle='rgb(255,0,0)';
            c.fillText(this.strength,this.x,this.y);
        }
        else if(this.strength<=100)
        {
            c.fillStyle='rgb(255,0,0)';
            if(this.strength1>0)
              c.fillText(this.strength1,this.x1,this.y);
            if(this.strength2>0)
              c.fillText(this.strength2,this.x2,this.y);
        }
    }
}
function allrestart(){
  can.initialise();
          count=0;
          for(i=0;i<=mode;i++)
          {
            rocks[i].initial();
            rocks[i].timer=0;
          }
          for(i=0;i<=31;i++)
          {
          bulls[i].restart();
          }
}
function move(event){
    if(event.keyCode==37)
    {
        can.left();
    }
    else if(event.keyCode==39)
    {
        can.right();
    }
}
var can =new canon();
var bulls=[];
var rocks=[];
for(i=0;i<mode;i++)
  rocks.push(new rock());
for(i=0;i<=31;i++)
  bulls.push(new bullet(i));
window.addEventListener("keydown",move,true);
function animate(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight); 
  c.fillStyle='rgb(255,0,0)';
  c.fillStyle='rgb(255,0,0)';
  c.fillText(can.score,500,40);
  c.fillText(highscore,600,40);
  can.build();
  for(i=0;i<mode;i++)
    {
      if(count >= i*400)             //8 seconds once new rock initially
      {
        rocks[i].build();
      }
    }
  for(i=0;i<=31;i++)
    {
      bulls[i].build();
      for(j=0;j<mode;++j)
        {
          bulls[i].coldet(rocks[j]);   
        }
    }
  if(can.score>highscore)
  {
    highscore=can.score;
    localStorage.setItem("bbhs",highscore);
  }
  count++;
} 
setInterval(animate,20);