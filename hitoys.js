// Selika Anjani Putri Satiti
// 2602138920

function RegisterForm(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let tnc = document.getElementById("tnc").checked

    var err = document.getElementById("err")

    // validation name
    if(name.length == 0){
        err.style.display = "block"
        err.innerHTML = "name must be filled"
    }

    // validation email
    else if(!email.includes("@") && !email.includes(".com")){
        err.style.display = "block"
        err.innerHTML = "email must be contains '@' and '.com'"
    }

    // validation password
    else if(password.length == 0){
        err.style.display = "block"
        err.innerHTML = "password must be filled"
    }

    else if(dob == null){
        err.style.display = "block"
        err.innerHTML = "please fill your date of birth"
    }

    //tnc is not checked
    else if(tnc == false){
        err.style.display = "block"
        err.innerHTML = "plese checked this box if you want to proceed."
    }

}