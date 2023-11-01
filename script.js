let button = document.querySelector('.buttons')
let input = document.querySelector('.input')
let equal = document.querySelector('.equal')

let displayText = '';

input.focus();

button.addEventListener('click', function(event) {
    console.log(event)
    console.log("clicked")
    if (event.target.innerHTML === '=') {
        console.log("equal clicked")

        input.value = eval(displayText)
        displayText = ''
    }
    else if (event.target.innerHTML === "AC") {
        input.value = '';
        displayText = '';
    }
    else if (event.target.innerHTML === "DE") {
        displayText = displayText.slice(0, -1);
        input.value = displayText;
    }
    else {
        displayText = displayText + event.target.innerHTML;
        input.value = displayText;
    }
})



