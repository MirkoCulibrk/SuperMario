import Spritesheet  from "./SpriteSheet.js";
import {loadImage,loadLevel} from './loader.js';
const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');
function drawBackground(background,context,sprites){
    background.ranges.forEach(([x1,x2,y1,y2]) => {
        //loop to draw row
        for(let x=x1;x<x2;++x){
            //loop to move to next row
            for(let y=y1;y<y2;++y){
                sprites.drawTiles(background.tile,context,x,y);
            }
            
        }
    });
}
loadImage('/images/tiles.png')
    .then(image=>{
        //make new spritesheet
        const sprites= new Spritesheet(image,16,16);
        //define type of sky sprite
        sprites.define('ground',0,0);
        sprites.define('sky',3,23);
        console.log(sprites)
        loadLevel('1-1')
        //after json is loaded
                .then(level=>{
                    //looping through background array
                    level.background.forEach((background)=>{
                        //calling function and passing range fom background array
                        drawBackground(background,ctx,sprites)
                    })
                    
        });
});