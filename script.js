//global variables
let numArr = [];
let firstNum = null;
let secondNum = null;
let numStr = 0;
let operatorType = '';
let total = null;
//calculating functions
const add = (a, b) => {return a + b};
const subtract = (a, b) => {return a - b};
const multiply = (a, b) => {return a * b};
const divide = (a, b) => {return a / b };

const operate = (a, b, type) => {
    console.log(type);
    if(type === 'add'){
        return add(a,b);
    }
    if(type === 'subtract'){
        return subtract(a,b);
    }
    if(type === 'multiply'){
        return multiply(a,b);
    }
    if(type === 'divide'){
        if(b === 0){
            alert("You can't divide by 0");
            clearCalculator();
        } else {
            return divide(a,b);
        } 
    }
}

//display select
const displayScrn = document.querySelector('.display');

//number btns
const numBtns = document.querySelectorAll('.numbers');

// equation btns
const operateBtns = document.querySelectorAll('.operations');

const decimalBtn = document.querySelector('#decimal');

// equal btn
const equalBtn = document.querySelector('#equal');

//clear btn
const clearBtn = document.querySelector('#clear');

//backspace btn
const backBtn = document.querySelector('#backspace');

//number btn clicks
numBtns.forEach((numBtn) => {
    numBtn.addEventListener('click', (e) => {
        addToNumArr(e.target.value);
    })
})

decimalBtn.addEventListener('click', (e) => {
    if((numArr.find(e => e === ".")) === undefined){
        addToNumArr(e.target.value);
    }
    
})

//equation btn clicks
operateBtns.forEach((operateBtn) => {
    operateBtn.addEventListener('click', (e) => {
        if(operatorType != ''){
            setSecondNum();
            resetNumArr();
            total = operate(firstNum, secondNum, operatorType);
            displayScrn.textContent = total;
            firstNum = total;
            updateOperator(e.target.value);
        } else {
            updateOperator(e.target.value);
            setFirstNum();
            resetNumArr();
        }
        
    })
})

// equal btn
equalBtn.addEventListener('click', () => {
    if(firstNum != null){
        setSecondNum();
        console.log(firstNum, secondNum);
        total = operate(firstNum, secondNum, operatorType);
        displayScrn.textContent = total;
    }
    
})

//clear and backspace btns

clearBtn.addEventListener('click', (e) => {
    clearCalculator();
})

backBtn.addEventListener('click', (e) => {
    numArr.pop();
    if(numArr.length == 0){
        displayScrn.textContent = 0;
    } else {
        numStr = numArr.join('');
        displayScrn.textContent = numStr;
        console.log(numStr);
    }
    
})


// basic functions
const addToNumArr = (a) => {
    if(numArr.length < 19){
        numArr.push(a);
        numStr = numArr.join('');
        displayScrn.textContent = numStr;
    }
    
}

const updateOperator = (a) => {
    operatorType = a;
}

const setFirstNum = () => {
    console.log(numArr);
    firstNum = parseFloat(numArr.join(''));
}

const setSecondNum = () => {
    secondNum = parseFloat(numArr.join(''));
}

const resetNumArr = () => {
    numArr = [];
}

//clear btn
const clearCalculator = () => {
    numArr = [];
    firstNum = null;
    secondNum = null;
    numStr = 0;
    operatorType = '';
    total = null;
    displayScrn.textContent = numStr;
}
