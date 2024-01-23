function timeConversion(s) {
    // Write your code here
    const fecha = new Date("2000-01-01 " + s.slice(0, s.length - 2) + " " + s.slice(s.length - 2, s.length))
    return fecha.toString().slice(16,24)
}