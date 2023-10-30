

first_name = "Youssef"
last_name = "Shabo"
address = "Austin,TX"

print(first_name)

first_name = "Rony"
print(first_name)

# Data Types in Python
# Strings
# Numbers = Ints and Floats
# Lists = arrays ["Youssef", "Rony", "Laila", "Tima"]
# Tuples = ("Youssef", "Rony", "Laila", "Tima")
# Dictionaries = {
fave_pizza = {
    "John": "Peppperoni",
    "Bob": "Chesse"
    "Tina" "Supreme"
}
print(fave_pizza["John"])

yelling = "my mom yelled \n\"CLEAN YOUR ROOM\""
print(yelling)

my_string = "My name is Youssef Shabo"

print(my_string.upper())
print(my_string.lower())
print(my_string.capitalize())
print(my_string.title())
print(my_string.swapcase())
print(len(my_string))
print(my_string[3:9])
print(my_string[3:len(my_string)])
print(my_string.split(' '))
print(my_string.split(' ')[3])
print(my_string.split(' ')[3].upper())


# MATH IN PYTHON

print(10 - 3)
print(10 + 3)
print(10 * 3)
print(10 / 3)
print(10 ** 3)
print(10 % 3)

num_1 = 10
num_2 = 3
print(num_1 / num_2)
print(int(num_1 / num_2))
print(round((num_1 / num_2), 4))

# Assignment Operators

num = 41
num += 1


print(num)


nums = [1, 2, 3, 4, 5]
first_names = ["John", "Bob", "Mary", nums]

del first_names[0]
first_names.append("Tina")

print(first_names)
print(first_names[len(first_names) - 1])


# Tuples

tuple_1 = ("John", "Bob", "Mary")
tuple_2 = ("Tina",)
tuple_3 = tuple_1 + tuple_2
tuple_4 = tuple_1[0:2] + tuple_2

print(tuple_4)

# Dictionaries

fave_pizzas = {
    "John": "Pepperoni",
    "Bob": "Mushroom",
    "Tina": "Supreme"
}
del fave_pizzas["John"]
fave_pizzas["Bob"] = "Ham"
fave_pizzas.update({"Tim": "Green Peppers"})
print(fave_pizzas)

# Comparison operators

# ==
print(10 == 10)
print(10 == 9)

# ! > < >= <=

# Considtionals


num = 3

if (num > 10):
    print("your number is greater than 10!")
elif (num == 3):
    print("Your number is equal to 3")
else:
    print("Your number is not greater than 10!")

# multiple conditional statements

num = 30
if (num > 10) and (num < 100):
    print("your number is greater than 10 and less than 100!")

# While loops

# counter

counter = 0

while (counter < 10):
    print("The count is: %s" % counter)
    counter += 1

# For loop

name = ["John", "Bob", "Mary", nums]

for x in name:
    print(x)

fave_pizzas = {
    "John": "Pepperoni",
    "Bob": "Mushroom",
    "Tina": "Supreme"
}
for key, value in fave_pizzas.items():
    print(value)
