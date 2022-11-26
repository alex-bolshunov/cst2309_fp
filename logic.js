const p = [1,2,3,4,5];

const scroller = new Scroller("pictures", "to-left", "to-right", p.length);

let picturesContainer = document.getElementById("pictures");
let elements = "";

for(let i = 0; i < p.length; i ++) {
    elements += "<div class='picture'>" + p[i] + "</div>";
}

picturesContainer.innerHTML = elements; 

