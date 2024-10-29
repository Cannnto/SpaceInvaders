class Nave
{   constructor(x,y)
    {   this.x = x;
        this.y = y;
    }
    draw()
    {   context.drawImage(img, this.x, this.y, 100,100)
    }
}