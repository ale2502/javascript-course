let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(operation) {
    if (operation === '') {
        calculation = '';
        console.log('Cleared');
        document.querySelector('.js-result').innerHTML = calculation;
    } else {
        calculation += operation;
        document.querySelector('.js-result').innerHTML = calculation;
    }
    localStorage.setItem('calculation', calculation);
}