import {Vector} from './math.js';
//property of spawn items
export default class Entity{
    constructor(){
        //initial value of mario possition
        this.position=new Vector(0,0);
        this.valocity=new Vector(0,0);
        this.traits=[];
    }
    //adding trait to entity for example mario can jump, run etc
    addTrait(trait){
        this.traits.push(trait);
        this[trait.NAME]=trait
    }
    update(deltaTime){
        this.traits.forEach((trait)=>{
            trait.update(this,deltaTime);
        });
    }
}