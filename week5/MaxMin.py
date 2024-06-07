def maxMin(k, arr):
    # Write your code here
  arr.sort()
  return min([arr[i+k-1] - arr[i] for i in range(0, len(arr) - k + 1)])