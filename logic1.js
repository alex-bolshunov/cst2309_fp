const headerPicturesLP = {
    1: 'CrossFit',
    2:  'Yoga',
    3: 'Fitness',
    4: 'GYM',
    5: 'Cardio'
};

const plans = [
    {
        "name": "Plan 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "price": 25
    }, 
    {
        "name": "Plan 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "price": 25
    }, 
    {
        "name": "Plan 3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "price": 25
    }, 
];

const mission = {
    "header": "Mission",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const desc = {
    "header": "Description header",
    "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

let lengthPictures = Object.keys(headerPicturesLP).length;
let lengthPlans = plans.length;

const scroller = new Scroller("pictures", "to-left", "to-right", lengthPictures);
const keys = Object.keys(headerPicturesLP);
const values = Object.values(headerPicturesLP);

let picturesContainer = document.getElementById("pictures");
let plansContainer = document.getElementById("plans-list");
let headerElements = "";
let plansElements = "";

for(let i = 0; i < lengthPictures; i ++) {
    headerElements += "<div class='picture'><img src='pictures/" +  keys[i] + 
    ".jpg' alt=''><h3>" + values[i] +  "</h3></div>";
}

for(let i = 0; i < lengthPlans; i++){
    plansElements  += "<a href='registration.html' class='plan'><h5>" + plans[i].name + "</h5><p>" + plans[i].description + "</p><p class='price'>Price: $"+ plans[i].price  +"</p></a>"
}

picturesContainer.innerHTML = headerElements;
plansContainer.innerHTML = plansElements; 
document.getElementById("mission").innerHTML = "<h4>" + mission.header + "</h4><p>"+ mission.text +"</p>";
document.getElementById("desc").innerHTML = "<h4>" + desc.header + "</h4><p>"+ desc.text +"</p>";

