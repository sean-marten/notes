# Very similar to lists, except that they are IMMUTABLE
t = (1,2,3) # A tuple
my_list = [1,2,3] # A list

t = ('one', 2) # Can have different data types

# Can slice and index like lists
t = ('a','a','b')

t.count('a') # Returns the number of occurrences of the argument in the tuple

t.index('a') # Returns the index of the first occurence of the argument in the tuple

# Mainly used for making sure objects don't accidentally get changed (data integrity)