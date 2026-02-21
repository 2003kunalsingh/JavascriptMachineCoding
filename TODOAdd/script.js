let inp=document.getElementById("inp")
let ull=document.getElementById("ul")

function add(){
    if(inp.value===""){
        alert("please fill the fields")
    }
    else{
        let li=document.createElement("li")
        let btn=document.createElement("button")
        let lli=ull.appendChild(li)
        let value =inp.value
        lli.innerText=value
        btn.innerText="delete"
        lli.appendChild(btn)
        inp.value=""

        btn.addEventListener('click',function(){
            lli.slice(0,-1)
        })

    }
}