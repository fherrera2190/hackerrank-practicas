def minimumNumber(n, password):
    # Return the minimum number of characters to make the password strong
    numbers = "0123456789"
    lower_case = "abcdefghijklmnopqrstuvwxyz"
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    special_characters = "!@#$%^&*()-+"

    validators = [numbers, lower_case, upper_case, special_characters]

    for letter in str(password):
        for key, letters_as_string in enumerate(validators):
            if letter in letters_as_string:
                del validators[key]
                break

    failed_validators = len(validators)

    password_length = len(str(password))

    if password_length > 6:
        return failed_validators
    else:
        remainder = 6 - password_length
        return remainder if remainder > failed_validators else failed_validators
