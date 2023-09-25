# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


# Expected output: '7 is odd'
# Expected output: '42 is even'
# Expected output: '221 is odd'

# Pseudo code:
# Name: even_or_odd
# Input: Interger
# Output: string
#  create a method that checks if interger is even or odd using .even
# i changed up a bit. i use conditional statements and modulo operator to check if variable was even or odd

# def even_or_odd
#     reposts1 = 7
#     reposts2 = 42
#     reposts3 = 221
    
#     if reposts1 % 2 == 0
#       p " #{reposts1} is even" 
#     else 
#         p "#{reposts1} is odd"
     
#     end
#     if reposts2 % 2 == 0
#       p " #{reposts2} is even" 
#     else 
#         p "#{reposts2} is odd"
     
#     end
#     if reposts3 % 2 == 0
#       p " #{reposts3} is even" 
#     else 
#         p "#{reposts3} is odd"
     
#     end
# end

# # p even_or_odd

# # Ouput "7 is odd"
# # " 42 is even"
# # "221 is odd"
# # "221 is odd"

# # I know "DRY" but i couldn't think of another way to do it

# # -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# # HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete


# # Pseudo code:
# # Name: no_noun
# # Input: string
# # Output:  string
# # Process: using .delete() to take out all the vowels in the string
# # p 'start'

# # def no_noun

# #     beatles_album1 = 'Rubber Soul'
# # # Expected output: 'Rbbr Sl'
# # beatles_album2 = 'Sgt Pepper'
# # # Expected output: 'Sgt Pppr'
# # beatles_album3 = 'Abbey Road'
# # # Expected output: 'bby Rd'

 
  
# #     p beatles_album1.delete "aeiou" 
# #     p beatles_album2.delete "aeiou" 
# #     p beatles_album3.delete "aeiou"  
# # end #  
   
# # no_noun

# # Output: "Rbbr Sl" "Sgt Pppr" "Abby Rd"


# # -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.



# # Pseudo code:
# # Name:
# # Input: string
# # Output: string
# # Process: create a method that takes a string and check if string is a plaindrome using .downcase and.reverse as a conditional statement and to call value with string interpolation 

# palindrome_test_case1 = 'Racecar'
# # Expected output: 'Racecar is a palindrome'
# palindrome_test_case2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
# palindrome_test_case3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'

# def is_palindrome value
#     p value
#     p value.reverse
#     if value.downcase.reverse == value.downcase
#         p   "#{value} is a palindrome"
#     else 
#         p "#{value} is not a palindrome"

#     end
# end
# is_palindrome palindrome_test_case1
# is_palindrome palindrome_test_case2
# is_palindrome palindrome_test_case3

# "Racecar is a palindrome"
# "LEARN"
# "NRAEL"
# "LEARN is not a palindrome"
# "Rotator"
# "rotatoR"
# "Rotator is a palindrome"