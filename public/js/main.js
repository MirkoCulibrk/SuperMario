import Spritesheet  from "./SpriteSheet.js";
import {loadImage} from './loader.js';
const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');
loadImage('/images/tiles.png')
    .then(image=>{
        //make new spritesheet
        const sprites= new Spritesheet(image,16,16);
        //define type of sprite
        sprites.define('ground',0,0);
        //define type of sky sprite
        sprites.define('sky',3,23);
        //loop to draw full row
        for(let x=0;x<25;++x){
            //loop to move to next row
            for(let y=0;y<16;++y){
                sprites.draw('sky',ctx,x*16,y*16);
            }
            
        }
        sprites.draw('sky',ctx,45,65);
        //draw image on canvas
        ctx.drawImage(image,0,0,16,16,0,0,16,16);
    });