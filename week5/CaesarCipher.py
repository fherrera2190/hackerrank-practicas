def caesarCipher(s, k):
    # Write your code here
    result = ""
    for string in s:
        if string.isalpha():
            ascii = ord(string)
            if string.isupper():
                result += chr(65 + ((ascii + k - 65) % 26))
            else:
                result += chr(97 + ((ascii + k - 97) % 26))
        else:
            result += string
    return result


s = "middle-Outz"
print(s)
print(caesarCipher(s, 2))
print()
s = "Always-Look-on-the-Bright-Side-of-Life"
print(s)
print(caesarCipher(s, 3))
print()
s = "Always-Look-on-the-Bright-Side-of-Life"
print(s)
print(caesarCipher(s, 0))
