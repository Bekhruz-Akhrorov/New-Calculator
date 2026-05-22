const display = document.getElementById('display');

function showInDisplay(value) {
    if(display.innerText === '0') {
        display.innerText = value
    }
    else {
        display.innerText = display.innerText + value
    }
}

function clearDisplay() {
    display.innerText = "0"
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || 0
}

function calculate() {
    try {
        let result = eval(display.innerText.replace('%', '/100'))
        display.innerText = parseFloat(result.toFixed(10))
    } catch (error) {
        display.innerText = error
    }
}

function square() {
    let value = display.innerText
    display.innerText = value * value
}

function squareRoot() {
    let value = display.innerText
    display.innerText = Math.sqrt(value)
}

function cube() {
    let value = display.innerText
    display.innerText = value * value * value
}

function cubeRoot() {
    let value = display.innerText
    display.innerText = Math.cbrt(value)
}

function factorial() {
  let n = parseFloat(display.innerText);
  if (n < 0) {
    display.innerText = "Enter Positive Number"
    return;
  }
  
  let result = 1

  for(let i = 1; i <= n; i = i+1) {
    result = result * i
  }
  display.innerText = result
}

function changeMode() {
    document.body.classList.toggle("light")
}

function changeSign() {
    let value = display.innerText
    if(isNaN(value)) return;
    display.innerText = value * -1
}