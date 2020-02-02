const fizzBuzz = function (n) {
    let result = "";
    if (n % 3 === 0) result += "Fizz";
    if (n % 5 === 0) result += "Buzz";
    if (n % 3 && n % 5) result += n;
    return result;
}


/*function fizzBuzz(i) {
    if (i % 15 === 0) {
        return 'FizzBuzz';
    }
    else if (i % 3 === 0) {
        return 'Fizz';
    }
    else if (i % 5 === 0) {
        return 'Buzz';
    }
    else {
        return i;
    }
}
*/
/*function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 == 0) {
            console.log('Fizz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz();*/

/*
function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            document.getElementById('output').innerHTML += "FizzBuzz<br>";
        } else if (i % 3 === 0) {
            document.getElementById('output').innerHTML += "Fizz<br>";
        } else if (i % 5 === 0) {
            document.getElementById('output').innerHTML += "Buzz<br>";
        } else {
            document.getElementById('output').innerHTML += i + "<br>";
        }
    }
}
*/