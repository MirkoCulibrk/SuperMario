
import Compositor from './Compositor.js';
import {loadLevel} from './loader.js';
import {loadBackgroundSprites,loadMarioSprites} from './sprites.js';
import {createBackgroundLayer,createSpriteLayer} from './layers.js';
const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');
//making vector class for calculating position of all sprites
class Vector{
    constructor(x,y){
        this.set(x,y);
    }
    //adding new
    set(x,y){
        this.x=x;
        this.y=y
    }
}
//mario property
class Entity{
    constructor(){
        //initial value of mario possition
        this.position=new Vector(0,0);
        this.valocity=new Vector(0,0);
    }
}
//Promises wchich need to be loaded pararelly
Promise.all([
    loadBackgroundSprites(),
    loadMarioSprites(),
    loadLevel('1-1')])
    //making array of returned image from promise
            .then(([backgroundSprites,marioSprite,level])=>{
                //making comp to colect all the layer=(all of the sprites)
                const comp=new Compositor();
                //making background layer
                const backgroundLayer=createBackgroundLayer(level,backgroundSprites);
                comp.layers.push(backgroundLayer);
                //gravity
                const gravity=0.6;
                const mario=new Entity();
                //postion for mario on screen
                mario.position.set(64,180);
                mario.valocity.set(2,-10);
                mario.update=function updateMario(){
                    //increse position of marion on screen
                    this.position.x+= this.valocity.x;
                    this.position.y+= this.valocity.y;
                }
                const spriteLayer=createSpriteLayer(marioSprite,mario.position);
                comp.layers.push(spriteLayer);
                function update(){
                    //updating background on canvas
                    comp.draw(ctx);
                    //call mario update function
                    mario.update();
                    mario.valocity.y+=gravity;
                    //updating animation for every frame
                    requestAnimationFrame(update);
                }
                update();
});      

