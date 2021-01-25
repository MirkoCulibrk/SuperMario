//making spritesheet class
export default class Spritesheet{
    constructor(image,width,height){
        this.image=image;
        this.width=width;
        this.height=height;
        this.tiles=new Map();
    }
    define(name,x,y){
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
        this.tiles.set(name, buffer);
    }
    draw(name,context,x,y){
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }
}