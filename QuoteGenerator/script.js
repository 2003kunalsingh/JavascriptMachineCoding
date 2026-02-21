const quote=[
    'all is well',
    'honesty is the best policy',
    'click is here',
    'slow in highway',
    "here is there"
]
let quotess=document.getElementById("quote")
function randomquote(){
    let randomquotes=Math.floor(Math.random()*quote.length)
    let quotes=quote[randomquotes]
    quotess.innerText=quotes
}