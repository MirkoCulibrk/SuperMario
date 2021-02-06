
import Compositor from './Compositor.js';
import Timer from './Timer.js';
import {loadLevel} from './loader.js';
import {createMario} from './entities.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer,createSpriteLayer} from './layers.js';
const canvas=document.getElementById('screen');
const ctx=canvas.getContext('2d');
import KeyboardState from './KeyBoardState.js';
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
                comp.layers.push(backgroundLayer);
                //gravity
                const gravity=2000;
                //postion for mario on screen
                mario.position.set(64,180);
                mario.valocity.set(200,-600);

                //conrol mario
                const SPACE=32;
                const input=new KeyboardState();
                input.addMapping(SPACE,keyState=>{
                    //if key is presed
                    if(keyState){
                        mario.jump.start();
                    }else{
                        mario.jump.cancel();
                    }
                });
                input.listenTo(window);
                const spriteLayer=createSpriteLayer(mario);
                comp.layers.push(spriteLayer);
                const timer=new Timer(1/60);
                timer.update=function update(deltatime){
                        //call mario update function
                        mario.update(deltatime);
                         //updating background on canvas
                         comp.draw(ctx);
                        mario.valocity.y+=gravity*deltatime;
                }
                timer.start();
});      

