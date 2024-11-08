class Projectile extends Entity
{   constructor(x, y, width, height)
    {   super(x-width/2,y,width,height);
        this.fireSound = new Audio('fireSound.wav');
        this.fireSound.play();
        this.hitSound = new Audio('hurt.wav');
    }
    draw()
    {   context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class ProjectileEnemy extends Projectile{
    constructor(x,y,width,height)
    {   super(x,y,width,height);
        this.color = "red";
    }

    collide()
    {   if(super.collide(nave))
        {   nave.life -= 1;
            if (nave.life == 0) nave.deathSound.play();
            this.hitSound.play();
            return true;
        }
    }

    update()
    {   this.y += 10;
    }
}

class ProjectileNave extends Projectile{
    constructor(x,y,width,height)
    {   super(x,y,width,height);
        this.color = "green";
    }

    collide(entities)
    {   for(var i = 0; i < entities.length; i++)
        {   if(super.collide(entities[i]))
            {   nave.score += 50;
                entities.splice(i,1);
                this.hitSound.play();
                return true;
            }
        }
    }

    update()
    {   this.y -= 10;
    }
}