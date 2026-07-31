a,b,c = map(int, input().split())

sum = a + b + c
avg = sum / 3
rest = sum - avg

print(sum)
print(int(avg))
print(int(rest))