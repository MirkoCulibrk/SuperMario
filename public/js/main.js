
import Compositor from './Compositor.js';
import {loadLevel} from './loader.js';
import {loadBackgroundSprites,loadMarioSprites} from './sprites.js';
import {createBackgroundLayer,createSpriteLayer} from './layers.js';
const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');
//Promises wchich need to be loaded pararelly
Promise.all([
    loadBackgroundSprites(),
    loadMarioSprites(),
    loadLevel('1-1')])
    //making array of returned image from promise
            .then(([backgroundSprites,mario,level])=>{
                //making comp to colect all the layer=(all of the sprites)
                const comp=new Compositor();
                //making background layer
                const backgroundLayer=createBackgroundLayer(level,backgroundSprites);
                comp.layers.push(backgroundLayer);
                //postion for mario on screen
                const position={
                    x:64,
                    y:64
                }
                const spriteLayer=createSpriteLayer(mario,position);
                comp.layers.push(spriteLayer);
                function update(){
                    //updating background on canvas
                    comp.draw(ctx);
                    //increse position of marion on screen
                    position.x+=2;
                    position.y+=2;
                    //updating animation for every frame
                    requestAnimationFrame(update);
                }
                update();
});      

