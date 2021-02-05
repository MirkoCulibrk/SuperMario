import Spritesheet  from "./SpriteSheet.js";
import {loadImage} from './loader.js';
export function loadBackgroundSprites(){
    //return promise
    return loadImage('/images/tiles.png')
    .then(image=>{
        console.log(image)
        //make new spritesheet
        const sprites= new Spritesheet(image,16,16);
        //define type of ground sprite
        sprites.defineTile('ground',0,0);
        //define type of sky sprite
        sprites.defineTile('sky',3,23);
        //return sprites
        return sprites;
    });
}
export function loadMarioSprites(){
    return loadImage('/images/characters.gif')
    .then(image=>{
        //make new spritesheet
        console.log(image)
        const sprites= new Spritesheet(image,16,16);
        //define type of sky sprite
        sprites.define('idle', 276, 44, 16, 16);
        return sprites;
    });
}