// 1 creare un ciclo for per aumentare l'iteratore
// 2 dichiarare all'interno del ciclo for la vaiabile "fizzbuzz"
// 3 creare un if all'interno del ciclo for per determinare se l'iteratore è divisibile per 3, per 5, per entrambi o per nessuno.
// 4 assegnare il valore "Fizz" alla variabile fizzbuzz se l'iteratore è divisibile per 3.
// 5 assegnare il valore "Buzz" alla variabile fizzbuzz se l'iteratore è divisibile per 5.
// 6 assegnare il valore "FizzBuzz" alla variabile fizzbuzz se l'iteratore è divisibile per 3 e per 5.
// 7 altrimenti assegnare l'iteratore come valore della variabile fizzbuzz.
// 8 mandare in console la variabile fizzbuzz.

for (i = 1; i <= 100; i++) {
    let fizzbuzz;
    if (i % 3 === 0 && i % 5 === 0) {
        fizzbuzz = "FizzBuzz";
    } else if (i % 3 === 0) {
        fizzbuzz = "Fizz";
    } else if (i % 5 === 0) {
        fizzbuzz = "Buzz";
    } else {
        fizzbuzz = i
    }
    console.log(fizzbuzz);    
}