export function loadImage(url){
    //getting Promise when image is loaded
    return new Promise(resolve=>{
        //make image instance
        const image=new Image();
        //when image is downloaded
        image.addEventListener("load",()=>{
            //return promise object with image value
            resolve(image);
        });
        console.log(image)
        //after promise is resolved put src to url argument
        image.src=url;
    });

};

//making loader for levels
export function loadLevel(levelName){
    return fetch(`/levels/${levelName}.json`)
                .then(response=>response.json());
}