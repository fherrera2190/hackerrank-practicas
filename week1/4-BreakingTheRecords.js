function breakingRecords(scores) {
    // Write your code here
    let scoreMin=scores[0]
    let scoreMax=scores[0]
    let countMin=0
    let countMax=0
    
    for(let i=1;i<scores.length;i++){
        if(scores[i]>scoreMax){
            ++countMax;
            scoreMax=scores[i]
        }
        if(scores[i]<scoreMin){
            ++countMin;
            scoreMin=scores[i]
        }
    }
    
    return [countMax,countMin]

}