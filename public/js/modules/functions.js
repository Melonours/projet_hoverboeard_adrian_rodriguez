import { myBody, boxes, huh } from "./variables.js";

function hello(){
    console.log(myBody);
}

function colorRandomizer(e){
    let green = "#39FF14"
    let orange = "#FF5C00"
    let purple = "#B026FF"
    let red = "#ff073a"
    let blue = "#1B03A3"

    let colorArray = [green, orange, purple, red, blue]
    // console.log(colorArray);

    function shuffle(colorArray){
        for (let i = colorArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [colorArray[i], colorArray[j]] = [colorArray[j], colorArray[i]];
        }
    }

    shuffle(colorArray)

    let colorChosen = colorArray[0]
    console.log(colorChosen);

    // console.log(e.target);
    e.target.style.backgroundColor = colorChosen
    
    function colorFadeOut(){
        setTimeout(function(){ 
            e.target.style.backgroundColor = "#1B1B1B";
        }, 1000);
    }

    colorFadeOut()
    

}for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("mouseover", (e) => colorRandomizer(e))
}


// function joe(e){
//     console.log("joe");
// }
// for(let i = 0; i < boxes.length; i++){
//     boxes[i].addEventListener("mouseover", (e) => joe(e))
// }

// ! BONUS
function playAudio(){
    let mehSound = document.getElementById("meh_player")
    mehSound.play()
}
huh.addEventListener("mouseover", () => playAudio())





export { hello, colorRandomizer}