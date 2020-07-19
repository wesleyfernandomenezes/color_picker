let slider = document.querySelector ('input#red')
let value = document.querySelector ('span#rangeValue1')
let slider2 = document.querySelector ('input#green');
let value2 = document.querySelector ('span#rangeValue2');
let slider3 = document.querySelector ('input#blue');
let value3 = document.querySelector ('span#rangeValue3');

slider.oninput = function() {
    value.textContent = this.value;
}

slider2.oninput = function() {
    value2.textContent = this.value;
}

slider3.oninput = function() {
    value3.textContent = this.value;
}

function changeColor () {
    let red = document.querySelector ('input.red').value;
    let green = document.querySelector ('input.green').value;
    let blue = document.querySelector ('input.blue').value;
    let box = document.querySelector ('.box_color')
    let color = 'rgb(' + red + ',' + green + ',' + blue +') ';
  
    box.style.background = color;
}

red.addEventListener('input', changeColor);
green.addEventListener('input', changeColor);
blue.addEventListener('input', changeColor);
