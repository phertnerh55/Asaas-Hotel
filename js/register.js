const registration = document.querySelectorAll(".registration");
const button = document.getElementById("register");
const meifssage = document.getElementById("message");

console.log(button);
register.addEventListener("click", function (e) {
  e.preventDefault();
  const newUser={};
  registration.forEach(function (element) {
    if (element.value === "") {
      element.classList.add("error");
      message.textContent = "Please fill all empty fields !";
      message.classList.add("error-message");

      return;
    } else {
      element.classList.remove("error");

    //   message.textContent=remove("Please fill all empty fields !");
      
      newUser.fullName=registration[0].value;
      newUser.email=registration[1].value;
      newUser.phoneNumber=registration[2].value;
      newUser.pinCode=registration[3].value;
      newUser.password=registration[4].value;
      newUser.confirmPassword=registration[5].value;


      

    }
  });
  console.log(newUser)

//   Store use in Local Storage
const user=[];
if(localStorage.getItem("user")===null){
    user.push(newUser);
    localStorage.setItem("user", JSON.stringify(user))
}else{
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    localStorageUser.push(newUser);
    localStorage.setItem("user", JSON.stringify(localStorageUser));
  }

  location.pathname= "https://phertnerh55.github.io/Asaas-Hotel/login.html"
  console.log(newUser)

}


);
