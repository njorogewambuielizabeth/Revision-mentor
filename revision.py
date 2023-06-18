# 2 Create a function called filterArray that takes an array
#  of numbers and a callback function as parameters. The 
# filterArray function should iterate through the array and 
# apply the callback function to each element. The callback 
# function should determine whether the element  should be 
# included in the filtered array or not. The filtered array 
# should then be returned as the result
def filter_array(array, callback):
    filtered_array = []
    for element in array:
        if callback(element):
            filtered_array.append(element)
    return filtered_array

# 3. Write a function that does the following:
#  Console logs the numbers from 1 to n where n is the integer the function takes as its parameter      
# Logs fizz instead of the number for multiples of 3 
# Logs buzz instead of the number for multiples of 5
# Logs fizzbuzz for numbers that are multiples of both 3 and 
# Example: fizzBuzz(5)
def fizz_buzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print('fizzbuzz')
        elif i % 3 == 0:
            print('fizz')
        elif i % 5 == 0:
            print('buzz')
        else:
            print(i)
            
#  4. Given a string (“welcome to javascript class”), reverse each word in the sentence.  
def reverse_words(sentence):
    return ' '.join(word[::-1] for word in sentence.split())

sentence = "welcome to javascript class"
reversed_sentence = reverse_words(sentence)
print(reversed_sentence) 







       