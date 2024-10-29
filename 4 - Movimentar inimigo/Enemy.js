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
    update()
    {   this.x += this.velocity;
        if(this.x+this.width > canvas.width || this.reverse)
        {   this.x -= this.velocity*2;
            this.reverse = true;
        }
        if(this.x<0) 
        {   this.reverse = false;
        }
    }
}