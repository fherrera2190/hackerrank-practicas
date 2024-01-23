function plusMinus(arr) {
    // Write your code here
    let arrPositive=[], arrNegative=[], arrZero = [];
    arr.forEach(value => {
        if (value>0) {
            arrPositive.push(value)
        }
        
        if (value===0) {
            arrZero.push(value)
        }

        if (value<0) {
            arrNegative.push(value)
        }
    })
    
    console.log((arrPositive.length/arr.length).toFixed(6))
    console.log((arrNegative.length/arr.length).toFixed(6))
    console.log((arrZero.length/arr.length).toFixed(6))

}

return function find(minRange,maxRange,value){
    
    let subData=data.slice(minRange,maxRange+1);
        console.log(subData)

    let band = false;
    for(let i=0;i<subData.length;i++){
        if(subData[i]===value){
            band=true;
        }
    }
    return band
}