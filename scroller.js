class Scroller {
    constructor(scrollerId, rightButtonId, leftButtonId, length){
        this.count = 0;
        this.length = length;
        this.scrollerId = scrollerId;
        this.leftButtonId = leftButtonId;
        this.rightButtonId = rightButtonId;
        this.activeButton();
    }

    activeButton(){
        let leftButton = document.getElementById(this.leftButtonId);
        let rightButton = document.getElementById(this.rightButtonId);

        // if(this.count == 0) leftButton.setAttribute('disabled', '');
        // else if(this.count == 1) leftButton.removeAttribute('disabled');
        if(this.count == 0) leftButton.style.display = "none";
        else if(this.count == 1) leftButton.style.display = "block";

        // if(this.count == this.length - 1) rightButton.setAttribute('disabled', '');
        // else if(this.count == this.length - 2) rightButton.removeAttribute('disabled');
        if(this.count == this.length - 1) rightButton.style.display = "none";
        else if(this.count == this.length - 2) rightButton.style.display = "block";
    }

    change(num, element) {
        element.style.left = "-" + num  + "00%";
    }

    move(direction) {
        let element = document.getElementById(this.scrollerId);
        direction == "left" ? this.count += 1 : this.count -= 1;
        this.activeButton();
        this.change(this.count, element);
        
    }

}