export function createBackgroundLayer(backgrounds,sprites){
    //making layer on background as seperate canvas
    const buffer=document.createElement('canvas');
    //size of sky in height and wdith
    buffer.width=256;
    buffer.height=240;
    //looping through background array
    backgrounds.background.forEach((background)=>{
        //calling function and passing range fom background array
        drawBackground(background,buffer.getContext('2d'),sprites);
    });
    return function drawBackgroundLayer(context){
        context.drawImage(buffer,0,0);
    }
}
export function createSpriteLayer(sprite,position){
    return function drawSpritesLayer(context){
        sprite.draw('idle',context,position.x,position.y);
    }
}
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