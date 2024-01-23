function miniMaxSum(arr) {
    // Write your code here
    let arrAux = []
    for (let i = 0; i < arr.length; i++) {
        let accum = 0
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                accum += arr[j]
            }
        }
        arrAux.push(accum)
    }
    
    //console.log(arrAux)
    console.log(Math.min.apply(Math,arrAux)+" "+Math.max.apply(Math,arrAux))
    
}