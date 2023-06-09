const logIn = document.querySelectorAll(".data");
console.log(logIn)
const button = document.getElementById("button");
console.log(button)
const notification=document.getElementById("notification");
const message = document.getElementById("message");
button.addEventListener("click", function(e) {
e.preventDefault();
// alert("hello")

logIn.forEach(function (element) {
    if(element.value ==="") {
        element.classList.add("error");
        notification.textContent = "please fill all empty fields! ";
        notification.classList.add("error-message");
        return;

    }
    else{
        element.classList.remove("error");
        const email = logIn[0].value;
        const password = logIn[1].value;
const allUsers = JSON.parse(localStorage.getItem("user"));

// For Loop

// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i].email === email && allUsers[i].password === password){
//         message.textContent = "Successfully Logged In";
//         message.classList.remove("error-message");
//         message.classList.add("success-message");
    
//         console.log("success")
        


        
        
//     } else{
//         message.textContent = "Invalid Credentials";
//         message.classList.add("error-message");
//         message.classList.remove("success-message");
    
//         console.log("invalid")
        
    
    
    
        
//     }

    
//     console.log(allUsers[i].email)
// }




allUsers.filter(user=>{
    if(user.email === email && user.password === password){
        message.textContent = "Successfully Logged In";
        message.classList.remove("error-message");
        message.classList.add("success-message");
    
        console.log("success")
        


        
        
    } else{
        message.textContent = "Invalid Credentials";
        message.classList.add("error-message");
        message.classList.remove("success-message");
    
        console.log("invalid")
        
    
    
    
        
    }
})


    }




    
    
});
location.pathname= "https://phertnerh55.github.io/Asaas-Hotel/index.html"



   
});



