def kangaroo(x1, v1, x2, v2):
    # Write your code here
    if (x2 > x1 and v2 > v1) or (x1 > x2 and v1 > v1) or (v2 - v1) == 0:
        return "NO"
    t= (x1 - x2)//(v2 - v1)
    
    return "YES" if x1 + v1 *t == x2 + v2 * t else "NO"