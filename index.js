/*add class at the top of the table*/
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}
/*what can it perform?*/
clear() {
    this.currentOperand = '',
    this.previousOperand = '',
    this.operation = undefined
}

delete() {

}

appendNummber(number) {

}

chooseOperation(operation) {

}

compute() {

}

updateDisplay() {

}


/*Constant variables which are all of the buttons */
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton =document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const 

/*now to figure out to know what number is typed where*/

