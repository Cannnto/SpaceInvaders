class Projectile extends Entity
{   constructor(x, y, width, height)
    {   super(x-width/2,y,width,height,"");
        sounds.playFireSound();
    }
    draw()
    {   context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    collideWall()
    {
        for(var i = 0; i < walls.length; i++)
        {
            if(super.collide(walls[i]))
            {
                sounds.playHitSound();
                walls[i].life -= 25;
                if(walls[i].life <= 0)
                {
                    walls.splice(i,1);
                }
                return true;
            }
        }
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
            sounds.playHitSound();
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

    collide()
    {   for(var i = 0; i < enemies.list.length; i++)
        {   if(super.collide(enemies.list[i]))
            {   nave.score += 50;
                enemies.list.splice(i,1);
                sounds.playHitSound();
                return true;
            }
        }
    }

    update()
    {   this.y -= 10;
    }
}