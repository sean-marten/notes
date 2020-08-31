# Can use single or double quotes
# Ordered sequences, we can use indexing or slicing to get substrings
# Indexing grabs a single character of a string. Also can use reverse indexing
# h e l l o
# 0 -4 -3 -2 -1
# Slicing [start:stop:step]
# Escape sequences \n (always use a backslash)

greeting = 'hello world'
interiorQuotes = "I don't know"
len(greeting) # Returns length of string
greeting[1] # Returns "e"
greeting[-3] # Returns "r"
greeting[2:] # Returns "llo world"
greeting[:3] # Returns "hel" stop index is up to but not including
greeting[3:6] # Returns "lo "
greeting[3:7:2] # Returns "l "
greeting[::-1] # Reverses string

# Immutability - unchangeable
name = "Sam"
# name[0] = 'P' - Can't do this, does not support item assignment
last_letters = name[1:]
'P' + last_letters # Returns Pam (string concatenation)
letter = 'z'
letter * 10 # Returns zzzzzzzzz

# String properties
greeting.upper() # Capitalizes the string (need to reassign)
greeting.lower() # Lower cases the string (need to reassign)
greeting.split() # Splits the string based on white space or letter you pass in greeting.split('o')


# String formatting
'This is a string {}'.format(name) # Returns 'This is a string Sam' (ORDER MATTERS)... unless you call indices
'This is a string {n} {u}'.format(u="Used", n=name) # Returns 'This is a string Same Used'

# Float formatting follows {value:width.precision f} width is how much whitespace, precision is number of decimals
result = 100/777 # Returns 0.12870012.....
'The result is {r:1.3f}'.format(r=result) # Returns 'The result is 0.129'

# Formatted string literals (string interpolation)
name = "Jose"
f'His name is {name}' # Returns 'His name is Jose'

# Might want to go over the notebook....
