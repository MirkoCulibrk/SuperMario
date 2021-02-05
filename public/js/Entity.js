import {Vector} from './math.js';
//property of spawn items
export default class Entity{
    constructor(){
        //initial value of mario possition
        this.position=new Vector(0,0);
        this.valocity=new Vector(0,0);
    }
}