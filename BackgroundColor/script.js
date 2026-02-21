function generateColor(){
    let colors=Math.floor(Math.random()*16777215)
    let randomcolor ="#"+ colors.toString(16)
    document.body.style.backgroundColor=randomcolor
}
let btn=document.getElementById("btn")
btn.addEventListener('click',generateColor)
generateColor()