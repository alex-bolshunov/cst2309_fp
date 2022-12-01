let t;
const regexEmail = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
const regexPhone = '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$';

const email = new RegExp(regexEmail);
const phone = new RegExp(regexPhone);

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

let checkEmail = (value) => {
    return email.test(value);
}

let checkPhone = (value) => {
    return phone.test(value);
}

let getValues = () =>{
    let message = "Missing fields: ";
    let message2 = "Incorrect values: ";
    let show = false, secondMessage = false;
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
        } else if (i == 2 && !checkEmail(elements[i].value) || i == 3 && !checkPhone(elements[i].value)) {
            message2 += fieldNames[i] + ", ";
            secondMessage = true
        }
    }

    if(show) {
        message = message.slice(0, message.length - 2) + ".";
        if(secondMessage) {
            message2 = message2.slice(0, message2.length - 2) + ".";
            message += " " + message2;
        }
    } else if(secondMessage){
        message = message2.slice(0, message2.length - 2) + ".";
    } else {
        reset();
        message = "Your registration form has been submitted";
    } 

    t = showMessage(message);
}

