def is_smart_number(num):
    val = int(math.sqrt(num))
    if num == int(math.pow(val , 2)):
        return True
    return False