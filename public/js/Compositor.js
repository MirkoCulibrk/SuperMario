//function of Compostior is to draw all the layer in order
export default class Compositor{
    constructor(){
        this.layers=[];
    }
    //drawing all the layer on context "canvas"
    draw(context){
        this.layers.forEach((layer)=>{
            //layer is returned drawBackgroundLayer and drawSpritesLayer
            layer(context);
        });
    }
}