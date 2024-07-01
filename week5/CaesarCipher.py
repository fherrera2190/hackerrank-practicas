def caesarCipher(s, k):
    # Write your code here
    if " " in s:
        raise ValueError("Space detected")
    if k not in range(0, 101):
        raise ValueError("Space detected")
    if len(s) not in range(1, 101):
        raise ValueError("Space detected")
    newS = ""
    for i in range(0, len(s)):
        if ord(s[i]) in range(65, 91):
            letter = ord(s[i]) + k
            if letter > 90:
                letter = 64 + letter - 90
                newS += chr(letter)
            else:
                newS += chr(letter)

        elif ord(s[i]) in range(97, 123):
            letter = ord(s[i]) + k
            if letter > 122:
                letter = 96 + letter - 122
                newS += chr(letter)
            else:
                newS += chr(letter)
        else:
            newS += s[i]

    return newS


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
