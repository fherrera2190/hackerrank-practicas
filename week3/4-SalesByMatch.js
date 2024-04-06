function sockMerchant(n, ar) {
    // Write your code here
    return ar.sort().reduce((acc, el) =>
        el === acc.lastColor
            ? { lastColor: '', pairCnt: acc.pairCnt + 1 }
            : { lastColor: el, pairCnt: acc.pairCnt }
        , { lastColor: '', pairCnt: 0 }).pairCnt;
}