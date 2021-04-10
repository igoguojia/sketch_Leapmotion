class random_shadows
{
  constructor()
  {
    this.easing=0.01;
    this. diameterWidth = 32.0; 
    this. diameterHeight = 4.0;
    this.x= 0.5 * width;
    this.y = 0.5 * height;
    this.a=PI/100;
    this.tempx=0;
    this.tempy=0;
    this.bo=false;
    this.arrsize=50;
    this.coarray1=gradientColor('#12c2e9', '#c471ed', this.arrsize);
    this.coarray2=gradientColor('#c471ed', '#FF0080', this.arrsize);
    this.coarray=this.coarray1.concat(this.coarray2);
    this.temp=this.coarray1.concat(this.coarray2);
    this.temp.reverse();
    this.coarray=this.coarray.concat( this.temp);
    this.i=0;
  }
  randcolor()
  {
    this.i++;
    if (this.i==4*this.arrsize)
    {
      this.i=0;
    }
  }
  update(_x,_y)
  {
    let targetX = _x, 
      targetY = _y;
    this.x += (targetX - this.x) * this.easing;
    this.y += (targetY - this.y) * this.easing;
  }
  draw_a_UFO(x, y)
  {

    ellipse(x, y, this.diameterWidth / 3, this.diameterHeight * 2.5);
    ellipse(x, y, this.diameterWidth, this.diameterHeight);

    let cx, cy;
    if (this.bo)
    {
      cx=x+this.diameterWidth*cos(this.a);
      cy=y+this.diameterWidth*sin(this.a);
    } else
    { 
      cx=this.x+this.diameterWidth*cos(this.a);
      cy=this.y+this.diameterWidth*sin(this.a);
    }
    this.a+=PI/100*2;
    //fill(random(1, 255), random(1, 255), random(100, 255));
    fill(this.coarray[this.i]);

    this.randcolor();
    circle(cx, cy, 3);

    // ellipse(x, y, this.diameterWidth, this.diameterHeight*5);
  }    

  display(_x,_y)
  {
    this.tempx=this.x;
    this.tempy=this.y;
    this.update(_x,_y);
    push();
    noStroke();
    fill(255);
    if (abs(this.tempx-this.x)<0.001)
    {
      this.bo=true;
    } else
    {
      this.bo=false;
    }
    this.draw_a_UFO(this.x+noise(_x)*3, this.y+noise(_y)*5);

    pop();
  }
}
