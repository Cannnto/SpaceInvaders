class Projectile extends Entity
{   constructor(x, y, width, height)
    {   super(x,y,width,height)
    }
    draw()
    {   context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update()
    {   this.y+=10;
        if(this.y > canvas.height)
        {   return true;
        }
    }
}