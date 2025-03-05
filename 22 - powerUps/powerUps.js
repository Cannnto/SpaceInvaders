class powerUps {
    static powers = [];

    static update()
    {
        for(var i = 0; i<this.powers.length; i++)
        {
            this.powers[i].update();
            this.powers[i].draw();
            var test = this.powers[i].test(nave);
            if(test){
                this.powers.splice(i,1);
            }
        }

        if(Math.random() <= 0.05)
        {
            this.powers.push(Math.random() <= 0.2 ? new health("health.png") : (Math.random() <= 0.5 ? new moreGuns("gunLevelUp.png") : new speedUp("speed.png")));
        }
    }
}

class power extends Entity{
    constructor(img)
    {
        super(Math.random()*canvas.width, Math.random()*canvas.height/2, 30, 30, img);
    }

    update()
    {
        this.y += 5;
    }

    test(actor)
    {
        if(this.collide(actor))
        {
            this.apply(actor);
            return true;
        };
        return false;
    }
}


class health extends power{
    apply(actor)
    {
        actor.life++;
    }
}

class moreGuns extends power{
    apply(actor)
    {
        actor.bulletsAmount++;
    }
}

class speedUp extends power{
    apply(actor)
    {
        if(actor.speedSettings.counter <= 0)
        {
            actor.speed = actor.speed*2;
        }
        actor.speedSettings.counter = 5*FPS;
    }
}