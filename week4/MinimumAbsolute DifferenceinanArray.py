def minimumAbsoluteDifference(arr):
    # Write your code here
    result = math.inf
    arr.sort()
    for i in range(len(arr) - 1):
        result = min(result, abs(arr[i] - arr[i + 1]))
            
    return result
        