myfile = open('myfile.txt') # Will return nothing if this exists
myfile = open('wrongfile.txt') # Will return an error since it doesn't exist

myfile = open('myfile.txt')
myfile.read() # Returns a giant string of what is in the text file (will include \n for new lines)
myfile.read() # If you do this a second time, it will return blank, it needs to be reset (the cursor)
myfile.seek(0) # Returns the cursos to the beginning of the file
myfile.readlines() # Returns each line as a string in a list

# On windows, file paths are given in \\, and on mac/linux they are given in /
myfile.close() # You'll need to close it once you're done with it

# To avoid this, you can use the with statement

with open('myfile.txt') as my_new_file:
    contents = my_new_file.read()

# To only read
with open('myfile.txt',mode='r') as myfile:
    my_new_file.read()

# Possibilities 'r' (read) 'w' (write - overwrites existing file) 'a' (append) 'r+' (read and write) 'w+' (writing and reading - overwrites existing file or creates a new file)

# To only read
with open('myfile.txt',mode='r') as myfile:
    my_new_file.read()

# To append
with open('myfile.txt',mode='a') as myfile:
    myfile.write('will write on the last line')

# To write
with open('asdfadf.txt',mode='w') as f:
    f.write("since this file doesn't exist, it will write to a new file")