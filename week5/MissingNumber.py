def missingNumbers(arr, brr):
    # Write your code here
    for a in arr:
        brr.remove(a)

    return sorted(set(brr))


print(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]))

print(
    missingNumbers(
        [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
        [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204],
    )
)
