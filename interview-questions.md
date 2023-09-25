# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:R.O

1. What is object-oriented programming? How is it different than functional programming?

Your answer: I'm not fully sure on how to explain what object oriented programming is.

Researched answer: OOP uses objects and methods as key coding elements.
And FP uses functions and variables for its elements. OOP is about using entities "objects" which controls the framework. Functional programming uses functions to possibility create more clean and structured code. FP involves knowing the outcome rather that how the one reaches the result.
// Example  OOP
   class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  
  deposit(amount) {
    this._balance += amount;
  }
  
  withdraw(amount) {
    if (this._balance &gt;= amount) {
      this._balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
  
  get balance() {
    return this._balance;
  }
}

const account = new BankAccount(1000);
console.log(account.balance); // 1000
account.deposit(500);
console.log(account.balance); // 1500
account.withdraw(300);
console.log(account.balance); // 1200


// Example FP
// A pure function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// An impure function
let x = 0;
function addImpure(a) {
  x += a;
  return x;
}
console.log(addImpure(2)); // 2
console.log(addImpure(3)); // 5

#### Examples credit: https://fluxtech.me/blog/object-oriented-programming-vs-functional-programming/

Also i copied from the inspect and  not directly from the site (not sure if that matters just trying to be safe)

2. Ruby has an implicit return. What does that mean?

Your answer:Implicit return as I understand it, in it's simplest form, I wouldn't have to actually write "return" because ruby automatically returns for me. How exactly, I do noy know. 

Researched answer: If a return is the last expression in a path of execution, there's not need to write "return" ruby knows to automatically return.

#### Example 
def implicit(user)
    user.map(:id)

end

def explicit(user)
return user.map(:id)

3. What is a block in Ruby?

Your answer: A block in ruby is where you put your logic. A code block {} but in ruby you end with "end" 

Researched answer: Ruby blocks are small anonymous functions that are passed in methods. blocks are enclosed with a do and a end statement or between curly brackets. Blocks can have multiple arguments that are defines between pipes!

#### Example  (maybe???)

def is_even
    do |value|
    value.even? 
    end

end

4. How do you extract a single value from a Ruby hash?

Your answer: I'm not sure on how to extract a single value from a ruby hash.

Researched answer:
You would have to put the key in bracket notation. You would have to put the symbol first [:key]

5. STRETCH: What is a version manager?

Your answer: a version manager is a program that manages the different builds of a package manager.

Researched answer: Version management deals with managing files of any type or size. It archives, logs changes, restores previous file versions and coordinates access. Github would be an example of a version manager.

## Looking Ahead: Terms for Next Week

1. Test-driven development:
Test-driven development (TDD) is a software development practice that focuses on creating unit test cases before writing code.

2. PostgreSQL:
 PostgreSQL or Postgre is a open source object-relational database system.

3. CRUD:
CRUD is a acronym for create, read, update and delete. These are the four essential operations for creating and managing data elements.
