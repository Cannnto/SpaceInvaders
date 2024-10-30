class Projectile extends Entity
{   constructor(x, y, width, height)
    {   super(x,y,width,height)
    }
    draw()
    {   context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    collide(entity)
    {   if (entity.x + entity.width >= this.x &&     
            entity.x <= this.x + this.width &&       
            this.y + this.height >= entity.y &&       
            this.y <= entity.y + entity.height) {
              return true;
          }
          return false;
    }
    update()
    {   this.y+=10;
        if(this.y > canvas.height)
        {   return true;
        }
    }
}