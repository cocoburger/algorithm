n = int(input())

if ((n & 1 ) == 0 and n % 5 == 0) or (n & 1) == 1 and n % 3 == 0:
    print("true")
else:
    print("false")