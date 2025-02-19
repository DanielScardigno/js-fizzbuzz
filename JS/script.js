// 1 creare un ciclo for per aumentare l'iteratore
// 2 creare un if all'interno del ciclo for per determinare se l'iteratore è divisibile per 3, per 5, per entrambi o per nessuno.
// 3 mandare in console "Fizz" se l'iteratore è divisibile per 3.
// 4 mandare in console "Buzz" se l'iteratore è divisibile per 5.
// 5 mandare in console "FizzBuzz" se l'iteratore è divisibile per 3 e per 5.
// 6 altrimenti mandare in console l'iteratore.

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}