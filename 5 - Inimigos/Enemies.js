class Enemies
{   constructor()
    {   this.enemies = 
            [   
                new Enemy(100, 100, 100, 100, 'enemy.png'),
                new Enemy(200, 100, 100, 100, 'enemy.png'),
                new Enemy(300, 100, 100, 100, 'enemy.png'),
                new Enemy(100, 200, 100, 100, 'enemy.png'),
                new Enemy(200, 200, 100, 100, 'enemy.png'),
                new Enemy(300, 200, 100, 100, 'enemy.png'),
                new Enemy(100, 300, 100, 100, 'enemy.png'),
                new Enemy(200, 300, 100, 100, 'enemy.png'),
                new Enemy(300, 300, 100, 100, 'enemy.png'),
                // new Enemy(400, 300, 100, 100, 'enemy.png'),
                // new Enemy(500, 300, 100, 100, 'enemy.png'),
                // new Enemy(600, 300, 100, 100, 'enemy.png'),
            ];
        this.reverse;
        this.auxReverse;
    }
    update()
    {   for(let i=0; i<this.enemies.length; i++)
        {   this.enemies[i].draw();

            if(this.enemies[i].update(this.reverse))
            {   this.auxReverse=true;
            };
        };
        if(this.auxReverse==true)
        {   this.reverse = !this.reverse;
        }
        this.auxReverse = false;
    }
}