function counterGame(n) {
    // Write your code here
    let player = true;
    while (n > 1) {
        player = ! player;
        if ((n & (n - 1)) == 0) {
            n /= 2;
        }
        else {
            n -= 2 ** Math.floor(Math.log2(n));
        }
    }
    return player ? "Richard" : "Louise";
}