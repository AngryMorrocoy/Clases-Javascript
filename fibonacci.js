
function getFibo(n){

    let fibonacci = [0, 1]

    for (let i = 2; i < n; i++){
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    
    return fibonacci[n - 1];

}

console.log(getFibo(10))
