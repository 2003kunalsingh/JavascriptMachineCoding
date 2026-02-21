function toogleTheme(){
    const backgroundColor=document.body.style.backgroundColor
    if(backgroundColor !=="black"){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }
    else{
           document.body.style.backgroundColor="white"
        document.body.style.color="black"
    } 

}