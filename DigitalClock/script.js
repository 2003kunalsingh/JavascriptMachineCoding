let time=document.getElementById("time")

setInterval(()=>{
    let date=new Date()
    let times=date.toLocaleTimeString()
    time.innerText=times
},1000)