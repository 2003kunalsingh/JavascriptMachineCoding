function validateForm(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let terms = document.getElementById("terms").checked;
    let errorMsg=document.getElementById("err") 
    let successMsg=document.getElementById("success")

    const errors=[]
    if(name===""){
        errors.push("please fill the name field")
    }
    if(email===""){
        errors.push("please fill the email field")
    }
    if(pass===""){
        errors.push("please fill the pass field")
    }else if(pass.length<6){
        errors.push("password length must be greater than 6 ")
    }
    if(!gender){
        errors.push("please select the gender")
    }
    
    if(!terms){
        errors.push("agree the terms and condition")
    }
    if(errors.length>0){
        errorMsg.innerHTML=errors.join("<br>")
        successMsg.innerText=""
    }
    else{
        errorMsg.innerHTML=""
        successMsg.innerText="😀 form submission successfully"
    }


}
