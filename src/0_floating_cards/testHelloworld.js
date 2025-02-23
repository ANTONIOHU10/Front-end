function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}

const n = 10; 
const fibSequence = fibonacci(n);
console.log(`Fibonacci sequence of ${n} terms:`);
console.log(fibSequence);
