function countingValleys(steps, path) {
    // Write your code here
    let level = 0, valleys = 0;
    path.split('').forEach(step =>{
        if(level == 0 && step == 'D'){
            valleys++;
        }
        level = step == 'D' ? level - 1: level + 1;
    })
    return valleys;
}

const path ="UDDDUDUU"


console.log(countingValleys(path.length,path))