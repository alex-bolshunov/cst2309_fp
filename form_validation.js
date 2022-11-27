let t;

let showMessage = (message) => {
    if(t) clearTimeout(t);

    document.getElementById("warning").innerHTML= message;
    document.getElementById("warning").style.display = "block";
    
    return setTimeout(() => document.getElementById("warning").style.display = "none", 10000);
}

let reset = () => {
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("female").checked = true;
    document.getElementById("male").checked = false;
    document.getElementById("other").checked  = false;
    document.getElementById("plan1").checked = true;
    document.getElementById("plan2").checked = false;
    document.getElementById("plan3").checked  = false;

}

let getValues = () =>{
    let message = "Please enter all fields. You are missing: "
    let show = false;
    const elements = [
        document.getElementById("fname"),
        document.getElementById("lname"),
        document.getElementById("email"),
        document.getElementById("phone")
    ];

    const fieldNames = ["first name", "last name", "email", "phone"];

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].value == ''){
            show = true;
            message += fieldNames[i] + ", ";
        }
    }
    

    if(show) {
        message = message.slice(0, message.length - 2) + ".";
    } else {
        reset();
        message = "Your registration form has been submitted";
    } 

    t = showMessage(message);
}

