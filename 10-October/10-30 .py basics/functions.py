
def namer(name):
    return ("Hello %s" % name)


my_namer = namer("Khalil")

print(my_namer)
print(my_namer.upper())
for letter in my_namer:
    print(letter)
