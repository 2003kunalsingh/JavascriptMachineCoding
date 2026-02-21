

let message=document.getElementById("message")

function Guess(){


    let random=Math.floor(Math.random() * 10) + 1
        console.log(random)
let inp=Number( document.getElementById("inp").value)
    // agar humne aise inp.value likhenga to ye string return karega aur hum string ko number se compare kar rha hai
    //  ye galat hai aise nahi ho sakta isliy ahume phela inp.value ko number me convert karna hpga
    if(inp===""){
        message.innerText="please enter a number"
        message.style.color="red"        
    }
    if(inp===random){
        message.innerText="😀you guess right number"
        message.style.color="green"  
    }
    else if(inp>random){
            message.innerText="😀number is so high"
            message.style.color="red"  
    }
    else {
            message.innerText="😀number is so low"
            message.style.color="red"  
    }
    


    


}