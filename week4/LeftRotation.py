def rotateLeft(d, arr):
    # Write your code here
    n = len(arr)
    rarr = [0] * n
    for i in range(d, n):
        rarr[i-d] = arr[i]
        for j in range(d):
            rarr[n-d+j] = arr[j]
    print(rarr)
    return rarr