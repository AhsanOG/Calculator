let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.querySelector('.screen');

document.querySelector('.calc-button').addEventListener("click", function(event){
    buttonClick(event.target.innerText);
});

function buttonClick(value){
    console.log(value);
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        
        handleNumber(value);
    }
}

function handleNumber(value) {
    if(buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender();
}

function handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
    }
}

function rerender() {
    screen.innerText = buffer;
}