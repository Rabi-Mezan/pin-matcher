function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }

    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-field').value = pin;
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const digit = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C')
            digit.value = '';
    }
    else {

        const previousDigit = digit.value;
        const newNumber = previousDigit + number;
        digit.value = newNumber;
    }
})

function verifyPin() {
    const generatedPin = document.getElementById('pin-field').value;
    const typedPin = document.getElementById('typed-number').value;

    if (generatedPin == typedPin) {
        document.getElementById('success').style.display = 'block'
        document.getElementById('fail').style.display = 'none'
    }

    else {
        document.getElementById('success').style.display = 'none'
        document.getElementById('fail').style.display = 'block'
    }

}