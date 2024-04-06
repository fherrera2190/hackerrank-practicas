let str1 = s1.split('')
let str2 = s2.split('')
let result = []
for (i in str1) {
    if (str1[i] != str2[i]) {
        result.push('1')
    } else {
        result.push('0')
    }
}
return result