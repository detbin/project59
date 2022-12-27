function fibonacci(number){
    const Serie = new Array(number)
    Serie[0]=1
    Serie[1]=1
    for (let i=2; i<number;i++){
        Serie[i]=(Serie[i-2]+Serie[i-1])
    }
    Serie.forEach(element => {
        console.log(element)
    })
}
fibonacci(7)