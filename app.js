class Calculator{
    constructor(prevDisplay,currentDisplay){
        this.prevDisplay = prevDisplay
        this.currentDisplay = currentDisplay
        this.clear()
    }

    clear(){
        this.currentOperation =''
        this.prevOperation = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        if(number === '.' && this.currentOperation.includes('.')) return
        this.currentDisplay = this.currentOperation.toString() + number.toString()
    }

    chooseOperation(operation){
        this.operation =  operation
        this.prevOperation = this.currentOperation
        this.currentOperation = ''
    }

    compute(){

    }
    
    updateDisplay(){
        this.currentDisplay.textContent = this.currentOperation
        this.prevDisplay.textContent = this.prevOperation
    }
}



const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn= document.querySelectorAll('[data-operation]');
const resultBtn = document.querySelector('[data-result]');
const delBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const prevDisplay = document.querySelector('[data-prev]');
const currentDisplay = document.querySelector('[data-current]');

const calculator = new Calculator(prevDisplay,currentDisplay);

//Input number
numberBtn.forEach(button => {
    button.addEventListener('click',()=>{
       calculator.appendNumber(button.textContent)
       calculator.updateDisplay() 
    })
})

// Operations
operationBtn.forEach(button => {
    button.addEventListener('click',()=>{
       calculator.chooseOperation(button.textContent)
       calculator.updateDisplay() 
    })
})