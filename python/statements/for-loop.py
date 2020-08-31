# Syntax is as follows

mylist = [1,2,3]

for num in mylist:
    print(num)

# Only print even numbers
for num in mylist:
    if num % 2 == 0:
        print(num)

# If you plan on not using the actual member, use _
for _ in mylist:
    print("Not related")


mylist = [(1,2), (3,4), (5,6), (7,8)] # List of 4 tuples

# Tuple unpacking, where you duplicate the structure of tuples and print the individual numbers
for a,b in mylist:
    print(a)
    print(b)

mylist = [(1,2,3), (4,5,6), (7,8,9)]

for a,b,c in mylist:
    print(b)

d = { 'k1':1, 'k2':2, 'k3':3}

# Only iterates through keys
for item in d:
    print(item)

for key,value in d.items():
    print(key)
    print(value)

# While loops

while x < 5:
    x += 1
else: 
    print("This executes when the while loop finally is not true")

# Break breaks out of closest enclosing loop
# Continue goes to the top of the closes enclosing loop
# Pass does nothing


x = [1,2,3]

for item in x:
    pass # Essentially is a placeholder to avoid a syntax error
    # comment (Will get error without a pass)

mystring = "Sean"

for letter in mystring:
    if letter == 'a':
        continue # Will skip the print if the letter is a, but will continue looping
    print(letter)

for letting in mystring:
    if letter == 'a':
        break # Will completely stop loop
    print(letter)