def missingNumbers(arr, brr):
    # Write your code here
    print(arr, brr)
    print(len(arr))
    print(len(brr))
    if len(arr) > len(brr):
        print("a")
        return [i for i in arr if i not in brr]
    else:
        print("b")
        return [i for i in brr if i not in arr]


# print(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]))
print(
    missingNumbers(
        [203, 204, 204, 205, 206, 207, 208, 203, 204, 205, 206],
        [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204],
    )
)


203, 204, 204, 205, 206, 207, 208, 203, 204, 205, 206
