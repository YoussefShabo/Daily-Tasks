import os
os.system("clear")

# Classes


class Square:
    def __init__(self, side_length):
        self.side_length = side_length

    def area(self):
        area = self.side_length * self.side_length
        return ("Area: %s" % area)

    def perimeter(self):
        perimeter = self.side_length * 4
        return ("Perimeter: %s" % perimeter)

    def report(self):
        print("Side Length: %s" % self.side_length)
        print("Area: %s" % self.area())
        print("Perimeter: %s" % self.perimeter())


my_square = Square(10)

my_square.report()
