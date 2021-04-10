class random_stars
{
  constructor(num1, num2, maxX, maxY)
  {
    this.meteorNum=num1;
    this.starsNum=num2;
    this.starsp=new Array(this.starsNum);
    this.position=new Array(this.meteorNum);
    this.velocity=new Array(this.meteorNum);

    this.init(maxX, maxY);
  }
  init(maxX, maxY)
  {
    let x=0, y=0;
    let xoff=0.0, yoff=10500.0;
    for (let i=0; i<this.starsNum; i++)
    {    
      x=int(map(noise(xoff), 0, 1, 0, maxX+0));
      y=int(map(noise(yoff), 0, 1, 0, maxY+0));
      point(x, y);
      this.starsp[i]= createVector(x, y);
      yoff+=30;
      xoff+=0.5;
    }
    for (let i=0; i<this.meteorNum; i++)
    {
      x=int(random(maxX));
      y=int(random(maxY));
      this.position[i]=createVector(x, y);

      x=int(random(1.0, 3.0));
      y=int(random(1.0, 3.0));
      this.velocity[i]= createVector(x, x);
    }
  }
  update()
  {
    for (let i=0; i<this.meteorNum; i++)
    {
      this.position[i].add(this.velocity[i]);
    }
  }
  checkEdges()
  {  //检查边界
    for (let i=0; i<this.meteorNum; i++)
    {
      if (this.position[i].x > width) 
      {
        this.position[i].x = 0;
      } else if (this.position[i].x < 0)
      {
        this.position[i].x = width;
      }

      if (this.position[i].y > height)
      {
        this.position[i].y = 0;
      } else if (this.position[i].y < 0) 
      {
        this.position[i].y = height;
      }
    }
  }
  display()
  {
    this.update();
    this.checkEdges();
    //画流星display meteor 
    stroke('#edccf7');
    //stroke(random(1, 255), random(1, 255), random(100, 255));
    for (let i=0; i<this.meteorNum; i++)
    {

      /*if (i>this.meteorNum/5)
       {
       point(this.position[i].x, this.position[i].y);
       } else
       {
       let size=random(2);
       ellipse(this.position[i].x, this.position[i].y, size, size);
       }   */
      if (this.velocity[i].x==2)
      {
        point(this.position[i].x, this.position[i].y);
      } else
      {
        let size=random(2);
        ellipse(this.position[i].x, this.position[i].y, size, size);
      }
    }
    //画普通星星 display stars
    for (let i=0; i<this.starsNum; i++)
    {

      if (i%20==0)//每隔20颗，画一个大小随机的星星
      {
        stroke('#edccf7');
        //stroke(random(1, 255), random(1, 255), random(100, 255));

        let flag=int(random(50));
        let size=random(1);
        if (flag>48)
        {
          stroke(random(1, 255), random(1, 255), random(100, 255));

          //stroke('#edccf7');
        }
        ellipse(this.starsp[i].x, this.starsp[i].y, size, size);
      }
       else//画大小为一个点的星星
      {
        //随机闪烁
        stroke('#888deb');
        let flag=int(random(50));
        if (flag>48)
        {
          stroke('#edccf7');
        }
        point(this.starsp[i].x, this.starsp[i].y);
      }
    }
  }
}
