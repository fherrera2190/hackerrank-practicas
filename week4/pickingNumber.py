def pickingNumbers(a):
    # Write your code here
    freq = [0] * 100
    for val in a:
        freq[val - 1] = freq[val - 1] + 1
    output = 0
    for i in range(len(freq) - 1):
        output = max(output, freq[i] + freq[i + 1])
    return output
