class Enemy extends Entity
{   constructor(x,y,width, height, img)
    {  super(x,y,width,height);
        this.img = new Image;
        this.img.src = img;
        this.reverse
        this.velocity = 10;
    }
    draw()
    {   context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    update(reverse)
    {   this.x += this.velocity;
        if(reverse)
        {   this.x -= this.velocity*2;
        }
        
        if(this.x+this.width > canvas.width)
        {   return true;
        }
        if(this.x<0) 
        {   return true;
        }
    }
}