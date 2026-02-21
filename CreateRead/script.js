const users=[]
function validateForm(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    if(name===""||email===""|| !gender){
        alert("please fill all the fields")
        return
    }
    const user={
        name,
        email,
        gender:gender.value
    }
    users.push(user)
    e.target.reset()
    displayUser()

}

function displayUser(){
    const table=document.getElementById("usertable")
    table.innerHTML=""
    users.forEach((user)=>{
        const row=document.createElement("tr")
        row.innerHTML=`
       <td>${user.name}</td>
       <td>${user.email}</td>
       <td>${user.gender}</td>
        
        `
          table.appendChild(row)
    }) 
  

}