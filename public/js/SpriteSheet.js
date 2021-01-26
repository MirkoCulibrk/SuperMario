//making spritesheet class
export default class Spritesheet{
    constructor(image,width,height){
        this.image=image;
        this.width=width;
        this.height=height;
        //making new object 
        this.tiles=new Map();
    }
    define(name,x,y){
        //creating new canvas
        const buffer = document.createElement('canvas');
        buffer.height = this.height;
        buffer.width = this.width;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                this.width * x,
                this.height * y,
                this.width,
                this.height,
                0,
                0,
                this.width,
                this.height);
                //adding key and value to tiles object
        this.tiles.set(name, buffer);
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