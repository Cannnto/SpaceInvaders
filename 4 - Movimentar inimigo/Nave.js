class Nave extends Entity
{   constructor(x, y,width, height, img)
    {   super(x,y,width,height);
        this.img = new Image;
        this.img.src = img;
    }
    draw()
    {   context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}