
import Compositor from './Compositor.js';
import {loadLevel} from './loader.js';
import {createMario} from './entities.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer,createSpriteLayer} from './layers.js';
const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');
const hjj=createMario();
console
.log(hjj);
//Promises wchich need to be loaded pararelly
Promise.all([
    createMario(),
    loadBackgroundSprites(),
    loadLevel('1-1')])
    //making array of returned image from promise
            .then(([mario,backgroundSprites,level])=>{
                //making comp to colect all the layer=(all of the sprites
                const comp=new Compositor();
                //making background layer
                const backgroundLayer=createBackgroundLayer(level,backgroundSprites);
                // comp.layers.push(backgroundLayer);
                //gravity
                const gravity=30;
                //postion for mario on screen
                mario.position.set(64,180);
                mario.valocity.set(200,-600);
                console.log(mario);
                const spriteLayer=createSpriteLayer(mario);
                comp.layers.push(spriteLayer);
                const deltatime=1/60;
                let accumulatedTime=0;
                let lastTime=0;
                function update(time){
                    accumulatedTime+=(time-lastTime)/1000;
                    while(accumulatedTime>deltatime){
                         //updating background on canvas
                        comp.draw(ctx);
                        //call mario update function
                        mario.update(deltatime);
                        mario.valocity.y+=gravity;
                        accumulatedTime-=deltatime;
                    }
                   
                    //updating animation for every frame
                    // requestAnimationFrame(update);
                    setTimeout(update,1000/600,performance.now())
                    lastTime=time;
                }
                update(0);
});      

