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
        "description": "1 single session class <br> Swimming pool <br> Locker room with showers",
        "price": 25
    }, 
    {
        "name": "Plan 2",
        "description": "10 Classes a Month <br> Fitness assessment <br> Swimming pool <br> Cafeteria <br> Locker room with showers",
        "price": 35
    }, 
    {
        "name": "Plan 3",
        "description": "Unlimited classes <br> Personal trainer <br>  Fitness assessment <br>  Personalized Macros Diet Plan <br> Swimming pool <br> Cafeteria <br> Locker room with showers",
        "price": 50
    }, 
];

const mission = {
    "header": "Our mission",
    "text": "The quality of your health determines the quality of your life and nothing is more important than that. \
    Our vision is to create a community of like-minded people who share in the mission of health and wellness for all. \
    We owe it to ourselves and our families to be healthy in mind, body, and spirit. \
    Lean Wolves Gym is run by a group of trainers who own and share in this vision. \
    They are leaders in their communities and the best at their craft. Come join us for a class and join in the movement."
};

const desc = {
    "header": "Our plans",
    "text" : "Lean Wolves Gym is a fitness facility that provides a mix of instructor-led classes for improved strength, endurance, flexibility, \
    and wellness. Mix and match weight training, cardio, boot camp, hot yoga, HIIT, functional fitness, boxing and more. Unlock your potential! \
    Start your journey with the membership tier that fits your needs."
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
    plansElements  += "<a href='registration.html' class='plan'><h5>" + plans[i].name + "</h5><p>" + plans[i].description +  "</p><p class='price'>Price: $"+ plans[i].price  +"</p> <img class='pic' src='pictures/"+ (10 + i) + ".jpg' alt=''></a>"
}

picturesContainer.innerHTML = headerElements;
plansContainer.innerHTML = plansElements; 
document.getElementById("mission").innerHTML = "<h4>" + mission.header + "</h4><p>"+ mission.text +"</p>";
document.getElementById("desc").innerHTML = "<h4>" + desc.header + "</h4><p>"+ desc.text +"</p>";

