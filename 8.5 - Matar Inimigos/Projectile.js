class Projectile extends Entity
{   constructor(x, y, width, height,color)
    {   super(x-width/2,y,width,height);
        this.color = "red";
    }
    draw()
    {   context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    collide(entity)
    {   return (entity.x + entity.width >= this.x &&     
                entity.x <= this.x + this.width &&       
                this.y + this.height >= entity.y &&       
                this.y <= entity.y + entity.height);
    }
}

class ProjectileEnemy extends Projectile{
    constructor(x,y,width,height,color)
    {   super(x,y,width,height);
    }

    update()
    {   this.y += 10;
    }
}

class ProjectileNave extends Projectile{
    constructor(x,y,width,height,color)
    {   super(x,y,width,height)
        this.color = "green";
    }

    collide(entities)
    {
        for(var i = 0; i < entities.length; i++)
        {
            if(entities[i].x + entities[i].width >= this.x &&     
                entities[i].x <= this.x + this.width &&       
                this.y + this.height >= entities[i].y &&       
                this.y <= entities[i].y + entities[i].height)
            {
                entities.splice(i,1)
                return true;
            }
        }
    }

    update()
    {   this.y -= 10;
    }
}