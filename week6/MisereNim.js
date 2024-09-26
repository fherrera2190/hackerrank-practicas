function misereNim(s) {
    // Write your code here
    let sum = s.reduce((a,b) => a + b);
    if(sum == s.length) {
        return s.length % 2 == 0 ? 'First' : 'Second'
    }
 
     let nimSum = s.reduce((a,b) => a ^ b);
     return nimSum == 0 ? 'Second' : 'First'
 
 }