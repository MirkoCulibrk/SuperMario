//making spritesheet class
export default class Spritesheet{
    constructor(image,width,height){
        this.image=image;
        this.width=width;
        this.height=height;
        //making new object 
        this.tiles=new Map();
    }
    define(name,x,y,width,height){
        //creating new canvas
        const buffer = document.createElement('canvas');
        buffer.height = height;
        buffer.width = width;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                width ,
                height,
                width,
                height,
                0,
                0,
                width,
                height);
                //adding key and value to tiles object
        this.tiles.set(name, buffer);
    }
    defineTile(name,x,y){   
        this.define(name,x*this.width,y*this.height,this.width,this.height);
    }    
    draw(name,context,x,y){
        //getting canvas with image from tiles objext
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }
    drawTiles(name,context,x,y){
        //calling draw for cleaner code
        this.draw(name,context,x*this.width,y*this.height);
    }
}