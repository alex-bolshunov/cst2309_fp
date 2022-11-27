const headerPicturesR = {
    6: 'Boxing',
    7:  'CroosFit',
    8: 'Yoga',
    9: 'GYM'
};

let lengthPictures = Object.keys(headerPicturesR).length;
let headerElements = "";
const scroller2 = new Scroller("pictures", "to-left", "to-right", lengthPictures);
const keys = Object.keys(headerPicturesR);
const values = Object.values(headerPicturesR);

for(let i = 0; i < lengthPictures; i ++) {
    headerElements += "<div class='picture'><img src='pictures/" +  keys[i] + 
    ".jpg' alt=''><h3>" + values[i] +  "</h3></div>";
}

let picturesContainer = document.getElementById("pictures");
picturesContainer.innerHTML = headerElements;