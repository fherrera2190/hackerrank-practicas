def dynamicArray(n, queries):
    # Write your code here
    arr = [[] for _ in range(n)]
    lastAnswer = 0
    result = []
    
    for t, x, y in queries:
        idx = (x ^ lastAnswer) % n
        if t == 1:
            arr[idx].append(y)
        else:
            lastAnswer = arr[idx][y % len(arr[idx])]
            result.append(lastAnswer)
    
    return result