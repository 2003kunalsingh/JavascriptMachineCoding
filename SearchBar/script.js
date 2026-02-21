const users=[
    {name:"kunal singh",email:"kunalsingh@gmail.com"},
    {name:"rohit rana",email:"rrr@gmail.com"},
    {name:"anuj",email:"anuj@gmail.com"},
    {name:"kunal thakur",email:"thakur@gmail.com"},
    {name:"sheetal",email:"sheetu@gmail.com"}
]
 displayUsers(users)

function displayUsers(list){

    let err=document.getElementById("noresult")
    let userlist=document.getElementById("userlist")
    err.innerHTML=""
    userlist.innerHTML=""

    if(list.length===0){
        err.innerHTML="no result found"
        return
    }
    list.forEach(user => {
        let li=document.createElement("li")
        li.innerText=`Name:${user.name} - Email:${user.email}`

        userlist.appendChild(li)
        
    });
}

function serchValue(){
    let Searchvalue=document.getElementById("search").value.toLowerCase()


    let filterd=users.filter((user)=>{
        return(
             user.name.toLowerCase().includes(Searchvalue)||
             user.email.toLowerCase().includes(Searchvalue)
        )
    })
    displayUsers(filterd)
}