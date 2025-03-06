class Meteors {
    constructor(type)
    {
        this.type = type
        this.objects = [];
        for(var y = canvas.height, n = 0; y > 0;)
        {   
            var distance = (Math.random()*canvas.height/10);
            this.objects.push(new this.type(y-distance, 50+distance));

            if(n != 0)
            {
                if(this.objects[n].y <= this.objects[n].y)
                {
                    y = this.objects[n].y;
                    
                }else{
                    y = this.objects[n-1].y;
                }
            }

            n++
        }
    }

    update(actor)
    {   var y = this.objects[this.objects.length - 1].y
        for(var i = 0; i<this.objects.length; i++)
        {
            this.objects[i].update();
            this.objects[i].draw();
            this.objects[i].test(actor)
            
            if(this.objects[i].y >= canvas.height)
            {
                this.objects.splice(i,1)
                i--
            }
        }
        console.log(this.objects)
        if(y >= -50)
        {   var distance = (Math.random()*canvas.height/5)
            this.objects.push(new this.type(y-distance, 50+distance))
        }
    }
}

class meteor extends Entity{
    constructor(y,height)
    {
        super(0, y, 20+Math.random()*canvas.width/20, height);
        this.img.src = "meteorito.png"
        this.speed = 1;
        this.mag = 20;
        this.color = 55+Math.random()*200;
        this.drawRandow = 30+Math.random()*90;
    }

    draw()
    {   // context.fillStyle = 'green';
        // context.fillRect(this.x, this.y,this.width,this.height);
        
        context.fillStyle = `rgb(${this.color},${this.color},${this.color})`;
        context.beginPath();
        context.moveTo((this.x+this.width/2)+Math.cos(0)*this.width/2, (this.y+this.height/2)+Math.sin(0)*this.height/2);
        for(let i=1*Math.PI/180; i<Math.PI*2; i+=this.drawRandow*Math.PI/180)
            context.lineTo((this.x+this.width/2)+Math.cos(i)*this.width/2, (this.y+this.height/2)+Math.sin(i)*this.height/2);
        context.closePath();
        context.fill();
    }

    update()
    {
        this.y += this.speed;
    }
}

class leftMeteor extends meteor{
    constructor(y,height)
    {
        super(y,height);
        this.x = Math.random()*canvas.width/10;
    }

    test(actor)
    {
        if(this.collide(actor))
        {
            actor.x = this.x+this.width+1;
        }
    }
}

class rightMeteor extends meteor{
    constructor(y,height)
    {
        super(y,height);
        this.x = canvas.width-this.width-Math.random()*canvas.width/10;
    }

    test(actor)
    {
        if(this.collide(actor))
        {
            actor.x = this.x-actor.width-1;
        }
    }
}