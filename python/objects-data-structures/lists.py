# Ordered sequences that can hold a variety of data types, also lists are MUTABLE

my_list = [1,2,3]
my_list = ['string', 100, 23.2]
len(my_list) # Returns length of list

# We can use indexing/slicing much like strings

my_list[0] # Returns 'string'
my_list[1:] # Returns [ 100, 23.2 ]

# List concatenation through addition
another_list = ['four', 'five']
my_list + another_list # Returns ['string', 100, 23.2, 'four', 'five']

my_list[0] = 'something else' # Changes the first element

my_list.append('six') # Appends to the end of a list

my_list.pop() # Removes an item from the end of a list, also takes an index position to remove a specific position (default is -1)

my_list.sort() # Sorts list from a - z and 1 - 10

my_list.reverse() # Reverses order of the list