class Enemies
{   constructor()
    {   this.list = 
            [   
                new Enemy(100, 100, 100, 100, "enemy.png"),
                new Enemy(200, 100, 100, 100, "enemy.png"),
                new Enemy(300, 100, 100, 100, "enemy.png"),
                new Enemy(100, 200, 100, 100, "enemy.png"),
                new Enemy(200, 200, 100, 100, "enemy.png"),
                new Enemy(300, 200, 100, 100, "enemy.png"),
                new Enemy(100, 300, 100, 100, "enemy.png"),
                new Enemy(200, 300, 100, 100, "enemy.png"),
                new Enemy(300, 300, 100, 100, "enemy.png"),
                // new Enemy(400, 300, 100, 100, "enemy.png"),
                // new Enemy(500, 300, 100, 100, "enemy.png"),
                // new Enemy(600, 300, 100, 100, "enemy.png"),
            ];
    }
    draw()
    {   for(var i=0; i<this.list.length; i++)
        {   this.list[i].draw();
        }
    }
    update()
    {   for(var i=0; i<this.list.length; i++)
        {   this.list[i].update();            
        }
       
        i=0;
        var found = false;
        // for(i=0; i < this.list.length; i++)
        while(i < this.list.length && found == false)
        {   if(this.list[i].x<0 || this.list[i].x+this.list[i].width>canvas.width)
            {   found = true;
            }           
            else
            {   i++;
            }
            // i++;
        }
        if(found == true)
        {   for(i=0; i<this.list.length; i++)
            {   this.list[i].reverse();
            }
        }
    }
}