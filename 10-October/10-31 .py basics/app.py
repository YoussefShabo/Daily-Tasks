# Ternary Operator
age = 12
message = "Eligible" if age >= 18 else "Not Eligible"
print(message)

# Logical Operators
# and or not

high_income = True
good_credit = True
student = False

if high_income and good_credit:
    print("Eligible")
else:
    print("Not Eligible")

if (high_income or good_credit) and not student:
    print("Eligible")
else:
    print("Not Eligible")

# Chaning comparison
age = 22

# if age >= 18 and age < 65:

if 18 <= age < 65:
    print("Eligible")
