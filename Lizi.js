class LiZi
{
  constructor()
  {
    let mts=PI/24;
    this.r=100;
    this.rdtr=5;
    this.rdu=1;
    this.num=2000;
    this.mv = true;
    this.mo = true;
    this.v=new Array(this.num);
    this.c=new Array(this.num);
    this.theta=new Array(this.num);
    this.mtheta=new Array(this.num);
    this.dtheta=new Array(this.num);
    this.easing=new Array(this.num);
    this.rdt=new Array(this.num);
    for (let i =0; i<this.num-1; i++) 
    {
      // this.c[i] = color(random(100,200),random(100,200),random(100,200));
      this.c[i] = color(random(1, 255), random(1, 255), random(100, 255));
      this.v[i] = createVector(random(width), random(height));
      this.theta[i] = round(random(360));
      this.dtheta[i] = random(mts);
      this.mtheta[i] = this.theta[i]/180*PI;
      this.rdt[i] = round(random(-this.rdtr, this.rdtr));
      this.easing[i] = random(0.02, 0.3);
    }
  }
  display(_x, _y)
  {
    push();
    noStroke();
    /*for (let i = 0; i<this.num-1; i++) 
     {
     this.mtheta[i] += this.dtheta[i];
     this.v[i].lerp(_x+cos(this.mtheta[i])*(this.rdt[i]+this.r), _y+sin(this.mtheta[i])*(this.rdt[i]+this.r), 0, this.easing[i]);
     fill(this.c[i]);
     ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
     }*/
    for (let i = 0; i<this.num-1; i++) 
    {
      this.v[i].lerp(_x+cos(this.mtheta[i])*(this.rdt[i]+this.r), _y+sin(this.mtheta[i])*(this.rdt[i]+this.r), 0, this.easing[i]);
      fill(this.c[i]);
      ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
    }
    /*if (this.mv) 
     {
     if (this.mo) {
     for (let i = 0; i<this.num-1; i++) {
     this.mtheta[i] += this.dtheta[i];
     this.v[i].lerp(_x+cos(this.mtheta[i])*(this.rdt[i]+this.r), _y+sin(this.mtheta[i])*(this.rdt[i]+this.r), 0, this.easing[i]);
     fill(this.c[i]);
     ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
     }
     }
     if (!this.mo) {
     for (let i = 0; i<this.num-1; i++) {
     this.v[i].lerp(mouseX+cos(this.mtheta[i])*(this.rdt[i]+this.r), mouseY+sin(this.mtheta[i])*(this.rdt[i]+this.r), 0, this.easing[i]);
     fill(this.c[i]);
     ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
     }
     }
     }
     if (!this.mv) {
     if (this.mo) {
     for (let i = 0; i<this.num-1; i++) {
     this.mtheta[i] += this.dtheta[i];
     this.v[i].lerp(mouseX+cos(this.mtheta[i])*this.rdt[i], mouseY+sin(this.mtheta[i])*this.rdt[i], 0, this.easing[i]);
     fill(this.c[i]);
     ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
     }
     }
     if (!this.mo) {
     for (let i = 0; i<this.num-1; i++) {
     this.v[i].lerp(mouseX+cos(this.mtheta[i])*this.rdt[i], mouseY+sin(this.mtheta[i])*this.rdt[i], 0, this.easing[i]);
     fill(this.c[i]);
     ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
     }
     }
     }*/
    pop();
  }
  display2(_x, _y)
  {
    push();
    noStroke();
    for (let i = 0; i<this.num-1; i++) 
    {
      this.mtheta[i] += this.dtheta[i];
      this.v[i].lerp(_x+cos(this.mtheta[i])*(this.rdt[i]+this.r), _y+sin(this.mtheta[i])*(this.rdt[i]+this.r), 0, this.easing[i]);
      fill(this.c[i]);
      ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
    }

    pop();
  }
  display3(_x, _y)
  {
    push();
    noStroke();
    for (let i = 0; i<this.num-1; i++) 
    {
      this.mtheta[i] += this.dtheta[i];
      this.v[i].lerp(_x+cos(this.mtheta[i])*(this.rdt[i]+10), _y+sin(this.mtheta[i])*(this.rdt[i]+10), 0, this.easing[i]);
      fill(this.c[i]);
      ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
    }

    pop();
  }
    display4(_x, _y)
  {
    push();
    noStroke();
    for (let i = 0; i<this.num-1; i++) 
    {
      this.mtheta[i] += this.dtheta[i];
      this.v[i].lerp(_x+cos(this.mtheta[i])*(this.rdt[i]), _y+sin(this.mtheta[i])*(this.rdt[i]), 0, this.easing[i]);
      fill(this.c[i]);
      ellipse(this.v[i].x, this.v[i].y, this.rdu, this.rdu);
    }

    pop();
  }
}
