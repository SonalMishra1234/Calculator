
function appendToResult(value) {
            document.getElementById('result').value += value;
        }

        function clearResult() {
            document.getElementById('result').value = '';
        }

        function calculateResult() {
            const expression = document.getElementById('result').value;
            const operators = ['+', '-', '*', '/'];

            for (let operator of operators) 
            {
                if (expression.includes(operator))
                 {
                    const operands = expression.split(operator);
                    const num1 = parseFloat(operands[0]);
                    const num2 = parseFloat(operands[1]);

                    if (operator === '+') {
                        document.getElementById('result').value = num1 + num2;
                    } else if (operator === '-') {
                        document.getElementById('result').value = num1 - num2;
                    } else if (operator === '*') {
                        document.getElementById('result').value = num1 * num2;
                    } else if (operator === '/') {
                        if (num2 === 0) {
                            document.getElementById('result').value = 'Infinity';
                        } else {
                            document.getElementById('result').value = num1 / num2;
                        }
                    }
                    return;
                }
            }
}