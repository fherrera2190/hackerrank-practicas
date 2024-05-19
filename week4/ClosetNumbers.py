def closestNumbers(arr):
    # Write your code here
    arr.sort()
    
    n = len(arr)

    diff_pairs = dict()
    for i in range(n-1):
        diff = abs(arr[i] - arr[i+1])
        try:
            diff_pairs[diff] += [arr[i], arr[i+1]]
        except:
            diff_pairs[diff] = [arr[i], arr[i+1]]
    
    return diff_pairs[sorted(diff_pairs)[0]]    
    