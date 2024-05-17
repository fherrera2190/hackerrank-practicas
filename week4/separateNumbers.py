def separateNumbers(s):
    # Write your code here
    if len(s) == 1 or s[0] == '0':
        print('NO')
        return
    minSt = None
    for i in range(1,(int)(len(s)/2)+1):
        lsub = s[:i]
        val = int(lsub)
        compare = ""
        while len(compare) <= len(s[i:]):
            val = val + 1
            compare = compare + str(val)
            if (compare == s[i:]) and (minSt is None or int(lsub) > minSt):
                minSt = int(lsub)
    
    if minSt is None:
        print('NO')
        return
    else:
        print(f'YES {minSt}')
        return
