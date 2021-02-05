import Entity from './Entity.js';
import {loadMarioSprites} from './sprites.js';
export function createMario(){      
   return loadMarioSprites()
    .then(marioSprite=>{
        const mario=new Entity();
                
                //drawing mario
                mario.draw=function drawMario(context){
                    marioSprite.draw('idle',context,this.position.x,this.position.y);
                }
                mario.update=function updateMario(deltatime){
                    //increse position of marion on screen
                    this.position.x+= this.valocity.x*deltatime;
                    this.position.y+= this.valocity.y*deltatime;
                }
                return mario;
    })          
                
}