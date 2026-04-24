// Lesson content for different languages
const lessonsData = {
    basics: [
        {
            id: 'basics-1',
            title: 'What is Coding?',
            description: 'Introduction to programming',
            xp: 5,
            steps: [
                {
                    topic: 'Introduction to Coding',
                    explanation: 'Coding, also called programming, is how we communicate with computers. Just like we use languages like English or Spanish to talk to people, we use programming languages to give instructions to computers. These instructions tell the computer what to do, like showing a website, calculating numbers, or playing a game.',
                    code: '// This is a comment - it explains code\n// Computers read code line by line\nprint("Hello, Computer!");',
                    codeBreakdown: [
                        { line: '// This is a comment - it explains code', explanation: '//: Comment marker. Text after is ignored by computer.' },
                        { line: '// Computers read code line by line', explanation: 'Comment explaining execution order.' },
                        { line: 'print("Hello, Computer!");', explanation: 'print: Function to display output. "Hello, Computer!": Text to print.' }
                    ],
                    quiz: {
                        question: 'What is another name for coding?',
                        options: ['Typing', 'Programming', 'Writing', 'Speaking'],
                        correct: 1
                    }
                },
                {
                    topic: 'Why Learn to Code?',
                    explanation: 'Coding is everywhere! It powers websites, mobile apps, video games, robots, and even your microwave. Learning to code teaches you problem-solving, logical thinking, and how to create things. It\'s like having a superpower - you can build almost anything you can imagine!',
                    code: '// Coding lets you create:\n// - Websites\n// - Apps\n// - Games\n// - And much more!',
                    codeBreakdown: [
                        { line: '// Coding lets you create:', explanation: 'Comment describing what coding enables.' },
                        { line: '// - Websites', explanation: 'Comment listing one thing you can create.' },
                        { line: '// - Apps', explanation: 'Comment listing another thing you can create.' },
                        { line: '// - Games', explanation: 'Comment listing another thing you can create.' }
                    ],
                    quiz: {
                        question: 'What does coding teach you?',
                        options: ['Only math', 'Problem-solving and logical thinking', 'Only typing', 'Nothing useful'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'basics-2',
            title: 'How Computers Think',
            description: 'Understanding binary and logic',
            xp: 5,
            steps: [
                {
                    topic: 'Binary Code',
                    explanation: 'Computers don\'t understand words like we do. They use binary code, which is made of only two numbers: 0 and 1. Think of it like a light switch - 0 means off, 1 means on. Everything you see on a computer is ultimately made of these 0s and 1s!',
                    code: '// Binary: 0 and 1\n// 0 = Off / False\n// 1 = On / True\n\n// Decimal: Binary\n// 0: 0\n// 1: 1\n// 2: 10\n// 3: 11\n// 4: 100',
                    codeBreakdown: [
                        { line: '// Binary: 0 and 1', explanation: 'Binary uses only 0 and 1.' },
                        { line: '// 0 = Off / False', explanation: '0 represents off or false state.' },
                        { line: '// 1 = On / True', explanation: '1 represents on or true state.' },
                        { line: '// 2: 10', explanation: 'Decimal 2 equals binary 10 (1*2 + 0).' },
                        { line: '// 4: 100', explanation: 'Decimal 4 equals binary 100 (1*4 + 0*2 + 0).' }
                    ],
                    quiz: {
                        question: 'What two numbers make up binary code?',
                        options: ['1 and 2', '0 and 1', '0 and 9', '1 and 10'],
                        correct: 1
                    }
                },
                {
                    topic: 'Computer Memory',
                    explanation: 'Computers have memory to store information. RAM (Random Access Memory) is like a desk - it holds things you\'re working on right now. Hard drives are like file cabinets - they store things for later. When you write code, the computer stores it in memory while running it.',
                    code: '// Computer Memory:\n// RAM = Temporary (desk)\n// Hard Drive = Permanent (cabinet)\n\n// Code runs in RAM\n// Files saved on Hard Drive',
                    codeBreakdown: [
                        { line: '// RAM = Temporary (desk)', explanation: 'RAM: Temporary memory for current work (like a desk).' },
                        { line: '// Hard Drive = Permanent (cabinet)', explanation: 'Hard Drive: Permanent storage (like a file cabinet).' },
                        { line: '// Code runs in RAM', explanation: 'Code executes in RAM while running.' },
                        { line: '// Files saved on Hard Drive', explanation: 'Files persist on hard drive when not in use.' }
                    ],
                    quiz: {
                        question: 'What is RAM like?',
                        options: ['A file cabinet', 'A desk for current work', 'A bookshelf', 'A trash can'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'basics-3',
            title: 'Algorithms',
            description: 'Step-by-step instructions',
            xp: 5,
            steps: [
                {
                    topic: 'What is an Algorithm?',
                    explanation: 'An algorithm is just a step-by-step set of instructions to solve a problem. You use algorithms every day! A recipe for cooking is an algorithm. Directions to your house are an algorithm. In coding, we write algorithms to tell computers how to solve problems.',
                    code: '// Algorithm Example: Making Tea\n// 1. Boil water\n// 2. Put tea bag in cup\n// 3. Pour hot water\n// 4. Wait 3 minutes\n// 5. Remove tea bag\n// 6. Add sugar if desired',
                    codeBreakdown: [
                        { line: '// Algorithm Example: Making Tea', explanation: 'Comment: Real-world algorithm example.' },
                        { line: '// 1. Boil water', explanation: 'Step 1: First instruction.' },
                        { line: '// 2. Put tea bag in cup', explanation: 'Step 2: Second instruction.' },
                        { line: '// 3. Pour hot water', explanation: 'Step 3: Third instruction.' },
                        { line: '// 4. Wait 3 minutes', explanation: 'Step 4: Fourth instruction (timing).' }
                    ],
                    quiz: {
                        question: 'What is an algorithm?',
                        options: ['A type of computer', 'Step-by-step instructions', 'A programming language', 'A computer part'],
                        correct: 1
                    }
                },
                {
                    topic: 'Writing Algorithms',
                    explanation: 'When writing algorithms, you need to be very specific. Computers do exactly what you tell them - nothing more, nothing less. If you forget a step, the algorithm won\'t work. This is why coding requires careful thinking and planning.',
                    code: '// Bad Algorithm (vague):\n// "Make a sandwich"\n\n// Good Algorithm (specific):\n// 1. Get two bread slices\n// 2. Add peanut butter to one\n// 3. Add jelly to the other\n// 4. Put slices together',
                    codeBreakdown: [
                        { line: '// Bad Algorithm (vague):', explanation: 'Example of unclear instruction.' },
                        { line: '// "Make a sandwich"', explanation: 'Too vague - computer wouldn\'t know how.' },
                        { line: '// Good Algorithm (specific):', explanation: 'Example of clear, specific instructions.' },
                        { line: '// 1. Get two bread slices', explanation: 'Specific first step.' },
                        { line: '// 2. Add peanut butter to one', explanation: 'Specific second step.' }
                    ],
                    quiz: {
                        question: 'Why must algorithms be specific?',
                        options: ['Computers are smart', 'Computers do exactly what you tell them', 'It\'s a rule', 'No reason'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'basics-4',
            title: 'Programming Languages',
            description: 'Different languages for different purposes',
            xp: 5,
            steps: [
                {
                    topic: 'Types of Languages',
                    explanation: 'There are hundreds of programming languages! Some are easy for beginners (like Python), some are fast (like C++), some are for websites (like JavaScript), and some are for apps (like Java or Swift). Each language has strengths for different tasks.',
                    code: '// Popular Languages:\n// Python - Easy, versatile\n// JavaScript - Websites\n// Java - Apps, Android\n// C++ - Fast, games\n// C# - Windows, Unity',
                    codeBreakdown: [
                        { line: '// Python - Easy, versatile', explanation: 'Python: Beginner-friendly, used for many things.' },
                        { line: '// JavaScript - Websites', explanation: 'JavaScript: Used for web development.' },
                        { line: '// Java - Apps, Android', explanation: 'Java: Used for mobile apps and Android.' },
                        { line: '// C++ - Fast, games', explanation: 'C++: Fast, used for games and systems.' }
                    ],
                    quiz: {
                        question: 'Which language is known for being easy for beginners?',
                        options: ['C++', 'Assembly', 'Python', 'Binary'],
                        correct: 2
                    }
                },
                {
                    topic: 'Choosing a Language',
                    explanation: 'Don\'t worry about choosing the "perfect" language first. Start with one that interests you! Python is great for beginners. JavaScript is perfect if you want to make websites. The important thing is learning programming concepts - these transfer between all languages.',
                    code: '// Tips for choosing:\n// 1. What do you want to build?\n// 2. What interests you?\n// 3. Start simple!\n// 4. Concepts transfer between languages',
                    codeBreakdown: [
                        { line: '// 1. What do you want to build?', explanation: 'Consider your goal (websites, apps, games).' },
                        { line: '// 2. What interests you?', explanation: 'Choose something that excites you.' },
                        { line: '// 3. Start simple!', explanation: 'Begin with beginner-friendly language.' },
                        { line: '// 4. Concepts transfer between languages', explanation: 'Programming concepts apply to all languages.' }
                    ],
                    quiz: {
                        question: 'What\'s most important when starting?',
                        options: ['Choosing the perfect language', 'Learning programming concepts', 'Learning all languages at once', 'Buying expensive tools'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'basics-5',
            title: 'Your First Program',
            description: 'Writing your first code',
            xp: 10,
            steps: [
                {
                    topic: 'Hello World',
                    explanation: 'The traditional first program in any language is "Hello World!" It simply displays that text on the screen. It might seem simple, but it\'s your first step into programming! It proves you can make the computer do what you want.',
                    code: 'print("Hello, World!")',
                    codeBreakdown: [
                        { line: 'print("Hello, World!")', explanation: 'print: Command to display output. "Hello, World!": Text to display.' }
                    ],
                    quiz: {
                        question: 'What is the traditional first program called?',
                        options: ['Goodbye World', 'Hello World', 'First Program', 'Start Here'],
                        correct: 1
                    }
                },
                {
                    topic: 'Breaking Down the Code',
                    explanation: 'Let\'s understand "print("Hello, World!")": "print" is a command that tells the computer to display something. The parentheses () contain what we want to print. The quotes "" tell the computer this is text (a string), not a command. Together, they mean: display the text "Hello, World!"',
                    code: 'print("Hello, World!")\n// print = command\n// () = contains the message\n// "" = marks text\n// Hello, World! = the message',
                    codeBreakdown: [
                        { line: 'print("Hello, World!")', explanation: 'print: Function name. (): Arguments. "": String delimiter.' },
                        { line: '// print = command', explanation: 'Comment explaining print function.' },
                        { line: '// () = contains the message', explanation: 'Comment explaining parentheses.' },
                        { line: '// "" = marks text', explanation: 'Comment explaining quotes mark strings.' }
                    ],
                    quiz: {
                        question: 'What do quotes do in code?',
                        options: ['Mark a comment', 'Mark text/string', 'Mark a number', 'Nothing'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    python: [
        {
            id: 'python-1',
            title: 'Hello World',
            description: 'Your first Python program',
            xp: 10,
            steps: [
                {
                    topic: 'Introduction to Python',
                    explanation: 'Welcome to Python! Python is a beginner-friendly programming language known for its simple syntax. Let\'s start with the classic "Hello World" program. In Python, we use the print() function to display text on the screen.',
                    code: 'print("Hello, World!")',
                    codeBreakdown: [
                        { line: 'print("Hello, World!")', explanation: 'print: Built-in function to display output. "Hello, World!": The text to print. (): Function call parentheses.' }
                    ],
                    quiz: {
                        question: 'What function displays text in Python?',
                        options: ['display()', 'print()', 'show()', 'output()'],
                        correct: 1
                    }
                },
                {
                    topic: 'Understanding print()',
                    explanation: 'The print() function in Python is used to output data to the standard output device (screen). It can print strings, numbers, or any other data type. You can print multiple items by separating them with commas.',
                    code: 'print("Hello")\nprint("World")\nprint("Hello", "World")',
                    codeBreakdown: [
                        { line: 'print("Hello")', explanation: 'print: Displays "Hello" on its own line.' },
                        { line: 'print("World")', explanation: 'print: Displays "World" on next line.' },
                        { line: 'print("Hello", "World")', explanation: 'print: Displays both with space between: "Hello World".' }
                    ],
                    quiz: {
                        question: 'How do you print multiple items with print()?',
                        options: ['Using semicolons', 'Using commas', 'Using plus signs', 'Using spaces'],
                        correct: 1
                    }
                },
                {
                    topic: 'Printing Numbers',
                    explanation: 'You can also print numbers directly without quotes. Python automatically knows the difference between text (strings) and numbers.',
                    code: 'print(42)\nprint(3.14)\nprint(2 + 2)',
                    codeBreakdown: [
                        { line: 'print(42)', explanation: 'print: Displays integer 42. No quotes needed for numbers.' },
                        { line: 'print(3.14)', explanation: 'print: Displays decimal 3.14. Python recognizes as float.' },
                        { line: 'print(2 + 2)', explanation: 'print: Calculates 2+2 first, then prints result (4).' }
                    ],
                    quiz: {
                        question: 'What will print(2 + 2) output?',
                        options: ['2 + 2', '4', '22', 'Error'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-2',
            title: 'Variables',
            description: 'Storing data in variables',
            xp: 15,
            steps: [
                {
                    topic: 'What are Variables?',
                    explanation: 'Variables are named locations used to store data in memory. Think of them as labeled boxes where you can put information. In Python, you don\'t need to declare variable types - the interpreter figures it out automatically.',
                    code: 'name = "Alice"\nage = 25\nis_student = True\nprint(name)',
                    codeBreakdown: [
                        { line: 'name = "Alice"', explanation: 'name: Variable name. =: Assignment. "Alice": String value.' },
                        { line: 'age = 25', explanation: 'age: Variable name. =: Assignment. 25: Integer value.' },
                        { line: 'is_student = True', explanation: 'is_student: Variable name. True: Boolean value.' },
                        { line: 'print(name)', explanation: 'print: Displays value of name ("Alice").' }
                    ],
                    quiz: {
                        question: 'What does Python do with variable types?',
                        options: ['You must declare them', 'It figures them out automatically', 'Variables have no types', 'It asks the user'],
                        correct: 1
                    }
                },
                {
                    topic: 'Variable Naming Rules',
                    explanation: 'Python variable names must start with a letter or underscore, followed by letters, numbers, or underscores. They cannot contain spaces or special characters. Variable names are case-sensitive, meaning "name" and "Name" are different variables.',
                    code: 'my_name = "Alice"\n_name = "Hidden"\nName = "Different"\nprint(my_name)',
                    codeBreakdown: [
                        { line: 'my_name = "Alice"', explanation: 'my_name: Snake_case naming (Python convention).' },
                        { line: '_name = "Hidden"', explanation: '_name: Starts with underscore (valid).' },
                        { line: 'Name = "Different"', explanation: 'Name: Different from "name" (case-sensitive).' }
                    ],
                    quiz: {
                        question: 'Which is a valid variable name?',
                        options: ['2name', 'my-name', 'my_name', 'my name'],
                        correct: 2
                    }
                },
                {
                    topic: 'Updating Variables',
                    explanation: 'You can change the value of a variable by assigning a new value to it. The old value is replaced with the new one.',
                    code: 'score = 10\nprint(score)\nscore = 20\nprint(score)',
                    codeBreakdown: [
                        { line: 'score = 10', explanation: 'score: Variable. =: Assigns 10 as initial value.' },
                        { line: 'print(score)', explanation: 'print: Displays current value (10).' },
                        { line: 'score = 20', explanation: 'score: Reassigns with new value (20). Old value (10) is lost.' },
                        { line: 'print(score)', explanation: 'print: Displays new value (20).' }
                    ],
                    quiz: {
                        question: 'What happens when you assign a new value to a variable?',
                        options: ['Both values are kept', 'Old value is replaced', 'Error occurs', 'Nothing changes'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-3',
            title: 'Data Types',
            description: 'Understanding different data types',
            xp: 20,
            steps: [
                {
                    topic: 'Strings',
                    explanation: 'Strings are sequences of characters enclosed in quotes. They can be single or double quotes. You can join strings using the + operator.',
                    code: 'greeting = "Hello"\nname = "World"\nmessage = greeting + " " + name\nprint(message)',
                    codeBreakdown: [
                        { line: 'greeting = "Hello"', explanation: 'greeting: String variable with "Hello".' },
                        { line: 'name = "World"', explanation: 'name: String variable with "World".' },
                        { line: 'message = greeting + " " + name', explanation: '+: Concatenates strings. Result: "Hello World".' },
                        { line: 'print(message)', explanation: 'print: Displays "Hello World".' }
                    ],
                    quiz: {
                        question: 'What data type is "Hello World"?',
                        options: ['Integer', 'Float', 'String', 'Boolean'],
                        correct: 2
                    }
                },
                {
                    topic: 'Numbers',
                    explanation: 'Python has two main types of numbers: integers (whole numbers) and floats (decimal numbers). You can perform mathematical operations on them.',
                    code: 'integer_num = 42\nfloat_num = 3.14\nprint(integer_num + float_num)',
                    codeBreakdown: [
                        { line: 'integer_num = 42', explanation: 'integer_num: Integer (whole number).' },
                        { line: 'float_num = 3.14', explanation: 'float_num: Float (decimal number).' },
                        { line: 'print(integer_num + float_num)', explanation: '+: Adds numbers. Prints 45.14.' }
                    ],
                    quiz: {
                        question: 'What is 3.14 in Python?',
                        options: ['Integer', 'Float', 'String', 'Boolean'],
                        correct: 1
                    }
                },
                {
                    topic: 'Booleans',
                    explanation: 'Booleans represent truth values - True or False. They are used in conditional statements and comparisons.',
                    code: 'is_student = True\nis_teacher = False\nprint(is_student)\nprint(is_teacher)',
                    codeBreakdown: [
                        { line: 'is_student = True', explanation: 'is_student: Boolean variable. True: Represents yes/active.' },
                        { line: 'is_teacher = False', explanation: 'is_teacher: Boolean variable. False: Represents no/inactive.' },
                        { line: 'print(is_student)', explanation: 'print: Displays True.' },
                        { line: 'print(is_teacher)', explanation: 'print: Displays False.' }
                    ],
                    quiz: {
                        question: 'What are the two Boolean values in Python?',
                        options: ['Yes/No', 'True/False', '1/0', 'On/Off'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-4',
            title: 'Conditionals',
            description: 'Making decisions with if statements',
            xp: 25,
            steps: [
                {
                    topic: 'If Statements',
                    explanation: 'If statements allow you to execute code only when a condition is true. Python uses indentation (whitespace) to define blocks of code.',
                    code: 'age = 18\nif age >= 18:\n    print("You are an adult")',
                    codeBreakdown: [
                        { line: 'age = 18', explanation: 'age: Variable with value 18.' },
                        { line: 'if age >= 18:', explanation: 'if: Checks condition. age >= 18: Is age 18 or more? : ends condition.' },
                        { line: '    print("You are an adult")', explanation: 'Indented: Runs only if condition is true. 4 spaces = 1 indent level.' }
                    ],
                    quiz: {
                        question: 'What does Python use to define code blocks?',
                        options: ['Braces {}', 'Indentation', 'Semicolons ;', 'Parentheses ()'],
                        correct: 1
                    }
                },
                {
                    topic: 'If-Else Statements',
                    explanation: 'The else statement executes code when the if condition is false. This allows you to handle both cases.',
                    code: 'age = 15\nif age >= 18:\n    print("You can vote")\nelse:\n    print("You cannot vote yet")',
                    codeBreakdown: [
                        { line: 'if age >= 18:', explanation: 'if: Checks if age is 18 or more.' },
                        { line: '    print("You can vote")', explanation: 'Runs if condition is true.' },
                        { line: 'else:', explanation: 'else: Runs if condition is false.' },
                        { line: '    print("You cannot vote yet")', explanation: 'Runs because age (15) is less than 18.' }
                    ],
                    quiz: {
                        question: 'When does the else block execute?',
                        options: ['Always', 'When if is true', 'When if is false', 'Never'],
                        correct: 2
                    }
                },
                {
                    topic: 'If-Elif-Else',
                    explanation: 'The elif (else if) statement allows you to check multiple conditions. Python checks each condition in order and executes the first one that is true.',
                    code: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")',
                    codeBreakdown: [
                        { line: 'if score >= 90:', explanation: 'First condition: Is score 90+? (85 is not)' },
                        { line: 'elif score >= 80:', explanation: 'Second condition: Is score 80+? (85 is! This runs)' },
                        { line: '    print("B")', explanation: 'Prints "B" because score is 85.' },
                        { line: 'else:', explanation: 'else: Runs if no conditions matched.' }
                    ],
                    quiz: {
                        question: 'What does elif stand for?',
                        options: ['Else if', 'Else loop', 'End if', 'Exit if'],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: 'python-5',
            title: 'Loops',
            description: 'Repeating code with loops',
            xp: 30,
            steps: [
                {
                    topic: 'For Loops',
                    explanation: 'For loops are used to iterate over sequences like lists, strings, or ranges. The range() function generates a sequence of numbers.',
                    code: 'for i in range(5):\n    print(i)',
                    codeBreakdown: [
                        { line: 'for i in range(5):', explanation: 'for: Loop keyword. i: Loop variable. range(5): Generates 0,1,2,3,4.' },
                        { line: '    print(i)', explanation: 'Indented: Prints current value of i each iteration.' }
                    ],
                    quiz: {
                        question: 'What does range(5) generate?',
                        options: ['1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '0, 1, 2, 3, 4, 5', '5, 5, 5, 5, 5'],
                        correct: 1
                    }
                },
                {
                    topic: 'While Loops',
                    explanation: 'While loops repeat code as long as a condition is true. Be careful to make sure the condition eventually becomes false, or you\'ll create an infinite loop!',
                    code: 'count = 0\nwhile count < 5:\n    print(count)\n    count = count + 1',
                    codeBreakdown: [
                        { line: 'count = 0', explanation: 'count: Initialize counter at 0.' },
                        { line: 'while count < 5:', explanation: 'while: Loop while condition is true. count < 5: Check before each iteration.' },
                        { line: '    print(count)', explanation: 'Prints current count value.' },
                        { line: '    count = count + 1', explanation: 'Increments count by 1. Eventually count becomes 5, loop stops.' }
                    ],
                    quiz: {
                        question: 'When does a while loop stop?',
                        options: ['After 5 iterations', 'When condition becomes false', 'When you press stop', 'Never'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-6',
            title: 'Lists',
            description: 'Working with lists',
            xp: 35,
            steps: [
                {
                    topic: 'Introduction to Lists',
                    explanation: 'Lists are ordered collections of items in Python. They can contain any type of data and are mutable (can be changed). Lists are created using square brackets [].',
                    code: 'fruits = ["apple", "banana", "cherry"]\nnumbers = [1, 2, 3, 4, 5]\nprint(fruits[0])  # First element',
                    codeBreakdown: [
                        { line: 'fruits = ["apple", "banana", "cherry"]', explanation: '[]: Creates list. fruits: Variable name. Items separated by commas.' },
                        { line: 'numbers = [1, 2, 3, 4, 5]', explanation: 'numbers: List of integers. Same syntax, different data type.' },
                        { line: 'print(fruits[0])', explanation: 'fruits[0]: Access first element (index 0). Prints "apple".' }
                    ],
                    quiz: {
                        question: 'How do you create a list in Python?',
                        options: ['Using parentheses ()', 'Using square brackets []', 'Using curly braces {}', 'Using angle brackets <>'],
                        correct: 1
                    }
                },
                {
                    topic: 'List Methods',
                    explanation: 'Lists have useful methods like append() to add items, remove() to remove items, and len() to get the length. You can also use sort() to sort the list.',
                    code: 'fruits = ["apple", "banana"]\nfruits.append("cherry")\nfruits.remove("apple")\nprint(len(fruits))',
                    codeBreakdown: [
                        { line: 'fruits = ["apple", "banana"]', explanation: 'Initial list with 2 items.' },
                        { line: 'fruits.append("cherry")', explanation: 'append(): Adds "cherry" to end of list.' },
                        { line: 'fruits.remove("apple")', explanation: 'remove(): Removes "apple" from list.' },
                        { line: 'print(len(fruits))', explanation: 'len(): Returns list length (now 1: only "banana").' }
                    ],
                    quiz: {
                        question: 'What method adds an item to a list?',
                        options: ['add()', 'append()', 'insert()', 'push()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-7',
            title: 'Functions',
            description: 'Creating reusable code',
            xp: 35,
            steps: [
                {
                    topic: 'Defining Functions',
                    explanation: 'Functions are reusable blocks of code that perform specific tasks. You define functions using the def keyword followed by the function name and parentheses. Functions help organize code and avoid repetition.',
                    code: 'def greet():\n    print("Hello!")\n\ngreet()\ngreet()  # Call it twice',
                    codeBreakdown: [
                        { line: 'def greet():', explanation: 'def: Defines function. greet: Function name. (): No parameters.' },
                        { line: '    print("Hello!")', explanation: 'Indented: Code that runs when function is called.' },
                        { line: 'greet()', explanation: 'Calls the greet function. First call.' },
                        { line: 'greet()', explanation: 'Calls the greet function again. Second call.' }
                    ],
                    quiz: {
                        question: 'What keyword defines a function in Python?',
                        options: ['function', 'def', 'func', 'define'],
                        correct: 1
                    }
                },
                {
                    topic: 'Functions with Parameters',
                    explanation: 'Functions can accept parameters (input values) that make them more flexible. Parameters are variables that receive values when the function is called.',
                    code: 'def greet(name):\n    print("Hello, " + name)\n\ngreet("Alice")\ngreet("Bob")',
                    codeBreakdown: [
                        { line: 'def greet(name):', explanation: 'name: Parameter that accepts input when called.' },
                        { line: '    print("Hello, " + name)', explanation: 'Uses name parameter in output.' },
                        { line: 'greet("Alice")', explanation: 'Calls function with "Alice" as the name.' },
                        { line: 'greet("Bob")', explanation: 'Calls function with "Bob" as the name.' }
                    ],
                    quiz: {
                        question: 'What are parameters in a function?',
                        options: ['Return values', 'Input values passed to the function', 'Function names', 'Variables outside the function'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-8',
            title: 'Dictionaries',
            description: 'Key-value pairs',
            xp: 40,
            steps: [
                {
                    topic: 'Introduction to Dictionaries',
                    explanation: 'Dictionaries store data in key-value pairs. Each key is unique and maps to a value. Dictionaries are created using curly braces {} with colons separating keys and values.',
                    code: 'person = {\n    "name": "Alice",\n    "age": 25,\n    "city": "NYC"\n}\nprint(person["name"])',
                    codeBreakdown: [
                        { line: 'person = {', explanation: '{}: Creates dictionary. person: Variable name.' },
                        { line: '    "name": "Alice",', explanation: '"name": Key. "Alice": Value. : separates them.' },
                        { line: '    "age": 25,', explanation: '"age": Key. 25: Value (integer).' },
                        { line: '    "city": "NYC"', explanation: '"city": Key. "NYC": Value (string).' },
                        { line: '}', explanation: 'Closes dictionary definition.' },
                        { line: 'print(person["name"])', explanation: 'person["name"]: Access value using key. Prints "Alice".' }
                    ],
                    quiz: {
                        question: 'What symbol separates keys and values in dictionaries?',
                        options: ['=', ':', '-', '->'],
                        correct: 1
                    }
                },
                {
                    topic: 'Accessing Dictionary Values',
                    explanation: 'You can access dictionary values using their keys in square brackets. You can also use the get() method which returns None if the key doesn\'t exist (instead of an error).',
                    code: 'person = {"name": "Alice", "age": 25}\nprint(person["name"])\nprint(person.get("age"))\nprint(person.get("city", "Unknown"))',
                    codeBreakdown: [
                        { line: 'person["name"]', explanation: '[]: Access with key. Returns "Alice".' },
                        { line: 'person.get("age")', explanation: 'get(): Safer access. Returns 25.' },
                        { line: 'person.get("city", "Unknown")', explanation: 'get(): With default. "city" doesn\'t exist, returns "Unknown".' }
                    ],
                    quiz: {
                        question: 'What happens if you access a non-existent key with []?',
                        options: ['Returns None', 'Returns empty string', 'Raises an error', 'Returns 0'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'python-9',
            title: 'File Operations',
            description: 'Reading and writing files',
            xp: 45,
            steps: [
                {
                    topic: 'Reading Files',
                    explanation: 'You can read files in Python using the open() function with "r" mode. It\'s best practice to use a with statement to automatically close the file when done.',
                    code: 'with open("file.txt", "r") as file:\n    content = file.read()\n    print(content)',
                    codeBreakdown: [
                        { line: 'with open("file.txt", "r") as file:', explanation: 'open(): Opens file. "r": Read mode. as file: Assigns to variable.' },
                        { line: '    content = file.read()', explanation: 'read(): Reads entire file content. Stores in content.' },
                        { line: '    print(content)', explanation: 'print: Displays file content.' },
                        { line: 'with statement automatically closes file when done.' }
                    ],
                    quiz: {
                        question: 'What mode is used for reading files?',
                        options: ['"w"', '"r"', '"a"', '"x"'],
                        correct: 1
                    }
                },
                {
                    topic: 'Writing Files',
                    explanation: 'To write to files, use "w" mode (overwrite) or "a" mode (append). The write() method adds text to the file. Remember to use with to handle file closing automatically.',
                    code: 'with open("file.txt", "w") as file:\n    file.write("Hello, World!")\n\nwith open("file.txt", "a") as file:\n    file.write("\\nNew line")',
                    codeBreakdown: [
                        { line: 'open("file.txt", "w")', explanation: '"w": Write mode (overwrites existing file).' },
                        { line: 'file.write("Hello, World!")', explanation: 'write(): Writes text to file.' },
                        { line: 'open("file.txt", "a")', explanation: '"a": Append mode (adds to end).' },
                        { line: 'file.write("\\nNew line")', explanation: '\\n: Newline character. Adds line at end.' }
                    ],
                    quiz: {
                        question: 'What does "a" mode do when opening a file?',
                        options: ['Overwrites the file', 'Appends to the file', 'Reads only', 'Creates a new file only'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-10',
            title: 'Error Handling',
            description: 'Try and except blocks',
            xp: 45,
            steps: [
                {
                    topic: 'Try-Except Blocks',
                    explanation: 'Error handling in Python uses try-except blocks. Code that might raise an error goes in the try block, and error handling goes in the except block. This prevents your program from crashing.',
                    code: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")',
                    codeBreakdown: [
                        { line: 'try:', explanation: 'try: Block containing code that might fail.' },
                        { line: '    result = 10 / 0', explanation: 'This will raise ZeroDivisionError (can\'t divide by zero).' },
                        { line: 'except ZeroDivisionError:', explanation: 'except: Catches specific error type. Runs if error occurs.' },
                        { line: '    print("Cannot divide by zero!")', explanation: 'Prints error message instead of crashing.' }
                    ],
                    quiz: {
                        question: 'What block contains code that might raise an error?',
                        options: ['except', 'try', 'finally', 'catch'],
                        correct: 1
                    }
                },
                {
                    topic: 'Multiple Exceptions',
                    explanation: 'You can handle multiple types of errors by having multiple except blocks. You can also use a generic except to catch any error, though it\'s better to be specific.',
                    code: 'try:\n    number = int(input("Enter a number: "))\nexcept ValueError:\n    print("That\'s not a number!")\nexcept:\n    print("Something went wrong!")',
                    codeBreakdown: [
                        { line: 'number = int(input("Enter a number: "))', explanation: 'input(): Gets user input. int(): Converts to number. Fails if not numeric.' },
                        { line: 'except ValueError:', explanation: 'Catches ValueError when int() fails on non-numeric input.' },
                        { line: 'except:', explanation: 'Generic except: Catches any other error type.' }
                    ],
                    quiz: {
                        question: 'What error does int() raise if given non-numeric text?',
                        options: ['TypeError', 'ValueError', 'NameError', 'IndexError'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-11',
            title: 'Classes & OOP',
            description: 'Object-oriented programming',
            xp: 50,
            steps: [
                {
                    topic: 'Creating Classes',
                    explanation: 'Classes are blueprints for creating objects. They define properties (attributes) and behaviors (methods). The __init__ method is a constructor that runs when creating an object.',
                    code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    \n    def bark(self):\n        print(f"{self.name} says Woof!")',
                    codeBreakdown: [
                        { line: 'class Dog:', explanation: 'class: Defines class. Dog: Class name.' },
                        { line: 'def __init__(self, name):', explanation: '__init__: Constructor. Runs on object creation.' },
                        { line: 'self.name = name', explanation: 'self.name: Instance attribute. Stores name.' },
                        { line: 'def bark(self):', explanation: 'bark: Method. self: Reference to instance.' }
                    ],
                    quiz: {
                        question: 'What is __init__ used for?',
                        options: ['Deleting objects', 'Initializing objects', 'Copying objects', 'Comparing objects'],
                        correct: 1
                    }
                },
                {
                    topic: 'Creating Objects',
                    explanation: 'To create an object from a class, call the class name like a function. This creates a new instance and runs __init__. You can then call methods on the object.',
                    code: 'my_dog = Dog("Buddy")\nmy_dog.bark()\n\nanother_dog = Dog("Max")\nanother_dog.bark()',
                    codeBreakdown: [
                        { line: 'my_dog = Dog("Buddy")', explanation: 'Dog("Buddy"): Creates object. __init__ runs with "Buddy".' },
                        { line: 'my_dog.bark()', explanation: 'bark(): Calls method on my_dog object.' },
                        { line: 'another_dog = Dog("Max")', explanation: 'Creates another Dog object with different name.' }
                    ],
                    quiz: {
                        question: 'How do you create an object from a class?',
                        options: ['new Dog()', 'Dog()', 'create Dog()', 'Dog.new()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-12',
            title: 'List Comprehensions',
            description: 'Concise list creation',
            xp: 40,
            steps: [
                {
                    topic: 'Basic List Comprehension',
                    explanation: 'List comprehensions provide a concise way to create lists. They combine a for loop and optional condition in a single line. Syntax: [expression for item in iterable if condition]',
                    code: 'numbers = [1, 2, 3, 4, 5]\nsquared = [x**2 for x in numbers]\nprint(squared)',
                    codeBreakdown: [
                        { line: 'numbers = [1, 2, 3, 4, 5]', explanation: 'Original list of numbers.' },
                        { line: 'squared = [x**2 for x in numbers]', explanation: 'x**2: Expression. for x in numbers: Loop. Creates [1, 4, 9, 16, 25].' },
                        { line: 'print(squared)', explanation: 'Prints squared list.' }
                    ],
                    quiz: {
                        question: 'What does [x**2 for x in numbers] do?',
                        options: ['Creates a dictionary', 'Creates a squared list', 'Filters numbers', 'Raises an error'],
                        correct: 1
                    }
                },
                {
                    topic: 'List Comprehension with Condition',
                    explanation: 'You can add a condition to filter items. Only items that meet the condition are included in the result.',
                    code: 'numbers = [1, 2, 3, 4, 5, 6]\nevens = [x for x in numbers if x % 2 == 0]\nprint(evens)',
                    codeBreakdown: [
                        { line: 'numbers = [1, 2, 3, 4, 5, 6]', explanation: 'Original list.' },
                        { line: 'evens = [x for x in numbers if x % 2 == 0]', explanation: 'if x % 2 == 0: Only even numbers. Creates [2, 4, 6].' }
                    ],
                    quiz: {
                        question: 'What does the if clause do in list comprehension?',
                        options: ['Always includes items', 'Filters items based on condition', 'Sorts the list', 'Duplicates items'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'python-13',
            title: 'Lambda Functions',
            description: 'Anonymous functions',
            xp: 35,
            steps: [
                {
                    topic: 'Introduction to Lambda',
                    explanation: 'Lambda functions are small anonymous functions defined with the lambda keyword. They can have any number of arguments but only one expression. Useful for short, throwaway functions.',
                    code: 'square = lambda x: x ** 2\nprint(square(5))\n\nadd = lambda x, y: x + y\nprint(add(3, 4))',
                    codeBreakdown: [
                        { line: 'square = lambda x: x ** 2', explanation: 'lambda: Keyword. x: Parameter. x ** 2: Expression (return value).' },
                        { line: 'print(square(5))', explanation: 'Calls lambda with 5. Returns 25.' },
                        { line: 'add = lambda x, y: x + y', explanation: 'Lambda with two parameters. Returns sum.' }
                    ],
                    quiz: {
                        question: 'How many expressions can a lambda have?',
                        options: ['None', 'One', 'Two', 'Unlimited'],
                        correct: 1
                    }
                },
                {
                    topic: 'Lambda with Built-in Functions',
                    explanation: 'Lambdas are often used with built-in functions like map(), filter(), and sorted() for concise data transformations.',
                    code: 'numbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)',
                    codeBreakdown: [
                        { line: 'numbers = [1, 2, 3, 4, 5]', explanation: 'Original list.' },
                        { line: 'map(lambda x: x**2, numbers)', explanation: 'map(): Applies lambda to each item. Returns iterator.' },
                        { line: 'list(...)', explanation: 'list(): Converts iterator to list. Creates [1, 4, 9, 16, 25].' }
                    ],
                    quiz: {
                        question: 'What function applies a function to each item?',
                        options: ['filter()', 'map()', 'reduce()', 'apply()'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    java: [
        {
            id: 'java-1',
            title: 'Hello World',
            description: 'Your first Java program',
            xp: 10,
            steps: [
                {
                    topic: 'Introduction to Java',
                    explanation: 'Java is a popular, object-oriented programming language. Every Java program must have a class and a main method. The main method is where your program starts executing.',
                    code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class HelloWorld {', explanation: 'public: Access modifier - can be accessed from anywhere. class: Keyword to define a class. HelloWorld: The name of our class.' },
                        { line: '    public static void main(String[] args) {', explanation: 'public: Can be called from anywhere. static: Belongs to the class, not an object. void: Returns nothing. main: The method name where program starts. String[] args: Command line arguments.' },
                        { line: '        System.out.println("Hello, World!");', explanation: 'System: A built-in Java class. out: Output stream. println: Method to print text with new line. "Hello, World!": The text to display.' },
                        { line: '    }', explanation: 'Closing brace for the main method.' },
                        { line: '}', explanation: 'Closing brace for the HelloWorld class.' }
                    ],
                    quiz: {
                        question: 'What is the entry point of a Java program?',
                        options: ['start()', 'main()', 'init()', 'run()'],
                        correct: 1
                    }
                },
                {
                    topic: 'System.out.println()',
                    explanation: 'System.out.println() is used to print text to the console. It adds a new line after the output. Use System.out.print() if you don\'t want a new line.',
                    code: 'public class PrintExample {\n    public static void main(String[] args) {\n        System.out.println("Hello");\n        System.out.print("World");\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class PrintExample {', explanation: 'public: Accessible from anywhere. class: Defines a class. PrintExample: Class name.' },
                        { line: '    public static void main(String[] args) {', explanation: 'main: Entry point method. static: No object needed. void: No return value.' },
                        { line: '        System.out.println("Hello");', explanation: 'println: Prints "Hello" and moves to next line.' },
                        { line: '        System.out.print("World");', explanation: 'print: Prints "World" without moving to next line.' },
                        { line: '    }', explanation: 'Closes main method.' },
                        { line: '}', explanation: 'Closes PrintExample class.' }
                    ],
                    quiz: {
                        question: 'What does println add after the output?',
                        options: ['Space', 'Tab', 'New line', 'Nothing'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'java-2',
            title: 'Variables',
            description: 'Declaring and using variables',
            xp: 15,
            steps: [
                {
                    topic: 'Variable Declaration',
                    explanation: 'In Java, you must declare the type of variable before using it. Common types include int (whole numbers), double (decimals), and String (text).',
                    code: 'public class Variables {\n    public static void main(String[] args) {\n        int age = 25;\n        double price = 19.99;\n        String name = "Alice";\n        System.out.println(name);\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class Variables {', explanation: 'class: Defines a class named Variables to hold our code.' },
                        { line: '    public static void main(String[] args) {', explanation: 'main: The entry point where execution begins.' },
                        { line: '        int age = 25;', explanation: 'int: Integer type (whole numbers). age: Variable name. = 25: Assigns value 25.' },
                        { line: '        double price = 19.99;', explanation: 'double: Decimal number type. price: Variable name. = 19.99: Assigns decimal value.' },
                        { line: '        String name = "Alice";', explanation: 'String: Text type. name: Variable name. = "Alice": Assigns text value.' },
                        { line: '        System.out.println(name);', explanation: 'println: Prints the value of name variable to console.' }
                    ],
                    quiz: {
                        question: 'Which type is used for whole numbers in Java?',
                        options: ['float', 'double', 'int', 'number'],
                        correct: 2
                    }
                },
                {
                    topic: 'Type Safety',
                    explanation: 'Java is strongly typed, meaning you cannot assign a value of the wrong type to a variable. This helps prevent errors in your code.',
                    code: 'int number = 42;\n// number = "hello"; // This would cause an error\nSystem.out.println(number);',
                    codeBreakdown: [
                        { line: 'int number = 42;', explanation: 'int: Declares number as integer. = 42: Initial value.' },
                        { line: '// number = "hello";', explanation: '//: Comment (ignored). This line would cause error because "hello" is a string, not int.' },
                        { line: 'System.out.println(number);', explanation: 'println: Prints the integer value 42.' }
                    ],
                    quiz: {
                        question: 'What happens if you assign a string to an int variable?',
                        options: ['It works fine', 'The string is converted', 'Compile error', 'Runtime error'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'java-3',
            title: 'Data Types',
            description: 'Primitive and reference types',
            xp: 20,
            steps: [
                {
                    topic: 'Primitive Types',
                    explanation: 'Java has 8 primitive types: byte, short, int, long, float, double, boolean, and char. These store simple values directly.',
                    code: 'int wholeNumber = 100;\ndouble decimal = 3.14;\nboolean isTrue = true;\nchar letter = \'A\';',
                    quiz: {
                        question: 'How many primitive types does Java have?',
                        options: ['4', '6', '8', '10'],
                        correct: 2
                    }
                },
                {
                    topic: 'String Type',
                    explanation: 'String is a reference type, not a primitive. It represents sequences of characters and is one of the most commonly used types in Java.',
                    code: 'String message = "Hello, Java!";\nString empty = "";\nSystem.out.println(message);',
                    quiz: {
                        question: 'Is String a primitive type in Java?',
                        options: ['Yes', 'No', 'Sometimes', 'It depends'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-4',
            title: 'Conditionals',
            description: 'If-else statements',
            xp: 25,
            steps: [
                {
                    topic: 'If Statements',
                    explanation: 'Java uses if statements to make decisions. The condition must be a boolean expression (true or false). Code blocks are defined with curly braces.',
                    code: 'int age = 18;\nif (age >= 18) {\n    System.out.println("Adult");\n}',
                    quiz: {
                        question: 'What defines a code block in Java?',
                        options: ['Indentation', 'Curly braces {}', 'Parentheses ()', 'Square brackets []'],
                        correct: 1
                    }
                },
                {
                    topic: 'If-Else',
                    explanation: 'The else block executes when the if condition is false. You can also use else if to check multiple conditions.',
                    code: 'int score = 85;\nif (score >= 90) {\n    System.out.println("A");\n} else if (score >= 80) {\n    System.out.println("B");\n} else {\n    System.out.println("C");\n}',
                    quiz: {
                        question: 'What keyword checks additional conditions in Java?',
                        options: ['elif', 'else if', 'elseif', 'elsif'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-5',
            title: 'Loops',
            description: 'For and while loops',
            xp: 30,
            steps: [
                {
                    topic: 'For Loops',
                    explanation: 'For loops in Java have three parts: initialization, condition, and update. They are commonly used for iterating a specific number of times.',
                    code: 'for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}',
                    quiz: {
                        question: 'What does i++ do in a for loop?',
                        options: ['Decrements i', 'Increments i by 1', 'Checks if i is equal', 'None of the above'],
                        correct: 1
                    }
                },
                {
                    topic: 'While Loops',
                    explanation: 'While loops repeat code while a condition is true. They are useful when you don\'t know in advance how many iterations you need.',
                    code: 'int count = 0;\nwhile (count < 5) {\n    System.out.println(count);\n    count++;\n}',
                    quiz: {
                        question: 'When does a while loop check its condition?',
                        options: ['After each iteration', 'Before each iteration', 'Only once at start', 'Never'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-6',
            title: 'What is a Class?',
            description: 'Understanding classes in Java',
            xp: 25,
            steps: [
                {
                    topic: 'Introduction to Classes',
                    explanation: 'A class in Java is a blueprint or template for creating objects. It defines the properties (variables) and behaviors (methods) that objects of that class will have. Every Java program must have at least one class.',
                    code: 'public class Car {\n    // Properties\n    String color;\n    int speed;\n    \n    // Behavior\n    void drive() {\n        System.out.println("Driving...");\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class Car {', explanation: 'public: Accessible from anywhere. class: Defines a class. Car: Name of our class (blueprint).' },
                        { line: '    // Properties', explanation: '//: Comment explaining what follows.' },
                        { line: '    String color;', explanation: 'String: Text type. color: Property (field) name. Stores car color.' },
                        { line: '    int speed;', explanation: 'int: Integer type. speed: Property name. Stores car speed.' },
                        { line: '    // Behavior', explanation: '//: Comment for methods section.' },
                        { line: '    void drive() {', explanation: 'void: Returns nothing. drive(): Method name. (): No parameters.' },
                        { line: '        System.out.println("Driving...");', explanation: 'println: Prints "Driving..." when drive() is called.' },
                        { line: '    }', explanation: 'Closes drive() method.' },
                        { line: '}', explanation: 'Closes Car class.' }
                    ],
                    quiz: {
                        question: 'What is a class in Java?',
                        options: ['A variable', 'A blueprint for objects', 'A method', 'A loop'],
                        correct: 1
                    }
                },
                {
                    topic: 'Creating Objects',
                    explanation: 'Objects are instances of classes. You create objects using the "new" keyword followed by the class name and parentheses. Each object has its own copy of the class\'s properties.',
                    code: 'public class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.color = "Red";\n        myCar.speed = 100;\n        myCar.drive();\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class Main {', explanation: 'class: Main class containing our program.' },
                        { line: '    public static void main(String[] args) {', explanation: 'main: Entry point where program starts.' },
                        { line: '        Car myCar = new Car();', explanation: 'Car: Type of object. myCar: Variable name. new: Creates new object. Car(): Calls constructor.' },
                        { line: '        myCar.color = "Red";', explanation: 'myCar.color: Access color property. = "Red": Sets color to Red.' },
                        { line: '        myCar.speed = 100;', explanation: 'myCar.speed: Access speed property. = 100: Sets speed to 100.' },
                        { line: '        myCar.drive();', explanation: 'myCar.drive(): Calls the drive() method on myCar object.' }
                    ],
                    quiz: {
                        question: 'What keyword creates a new object?',
                        options: ['create', 'new', 'make', 'object'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-7',
            title: 'User Input',
            description: 'Getting input from users',
            xp: 30,
            steps: [
                {
                    topic: 'Introduction to Scanner',
                    explanation: 'The Scanner class in Java is used to get user input from the console. It\'s part of the java.util package. You need to import it before using it. Scanner can read different types of input like integers, strings, and decimals.',
                    code: 'import java.util.Scanner;\n\npublic class InputExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter your name: ");\n        String name = scanner.nextLine();\n        System.out.println("Hello, " + name);\n    }\n}',
                    codeBreakdown: [
                        { line: 'import java.util.Scanner;', explanation: 'import: Brings in external class. java.util: Package name. Scanner: Class to import for input.' },
                        { line: 'public class InputExample {', explanation: 'class: Defines our main class.' },
                        { line: '    public static void main(String[] args) {', explanation: 'main: Program entry point.' },
                        { line: '        Scanner scanner = new Scanner(System.in);', explanation: 'Scanner: Type. scanner: Variable name. new: Creates object. System.in: Input source (keyboard).' },
                        { line: '        System.out.print("Enter your name: ");', explanation: 'print: Displays prompt without new line.' },
                        { line: '        String name = scanner.nextLine();', explanation: 'nextLine(): Reads entire line of text. Stores in name variable.' },
                        { line: '        System.out.println("Hello, " + name);', explanation: 'println: Prints greeting with user\'s name.' }
                    ],
                    quiz: {
                        question: 'What package is Scanner in?',
                        options: ['java.io', 'java.util', 'java.lang', 'java.input'],
                        correct: 1
                    }
                },
                {
                    topic: 'Reading Different Types',
                    explanation: 'Scanner has different methods for reading different types: nextInt() for integers, nextDouble() for decimals, next() for single words, and nextLine() for entire lines of text.',
                    code: 'import java.util.Scanner;\n\npublic class TypesExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int age = scanner.nextInt();\n        double price = scanner.nextDouble();\n        String name = scanner.nextLine();\n    }\n}',
                    codeBreakdown: [
                        { line: 'import java.util.Scanner;', explanation: 'import: Imports Scanner class for input.' },
                        { line: 'Scanner scanner = new Scanner(System.in);', explanation: 'Creates Scanner object connected to keyboard.' },
                        { line: 'int age = scanner.nextInt();', explanation: 'nextInt(): Reads an integer from input. Stores in age.' },
                        { line: 'double price = scanner.nextDouble();', explanation: 'nextDouble(): Reads a decimal number. Stores in price.' },
                        { line: 'String name = scanner.nextLine();', explanation: 'nextLine(): Reads a line of text. Stores in name.' }
                    ],
                    quiz: {
                        question: 'Which method reads an integer with Scanner?',
                        options: ['nextInteger()', 'nextInt()', 'readInt()', 'getInt()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-8',
            title: 'Arrays',
            description: 'Working with arrays',
            xp: 35,
            steps: [
                {
                    topic: 'Introduction to Arrays',
                    explanation: 'An array is a container that holds a fixed number of values of the same type. Arrays in Java are zero-indexed, meaning the first element is at index 0. You must specify the size when creating an array.',
                    code: 'public class ArrayExample {\n    public static void main(String[] args) {\n        int[] numbers = new int[5];\n        numbers[0] = 10;\n        numbers[1] = 20;\n        System.out.println(numbers[0]);\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class ArrayExample {', explanation: 'class: Defines ArrayExample class.' },
                        { line: '    public static void main(String[] args) {', explanation: 'main: Entry point of program.' },
                        { line: '        int[] numbers = new int[5];', explanation: 'int[]: Array of integers. numbers: Array name. new int[5]: Creates array with 5 slots.' },
                        { line: '        numbers[0] = 10;', explanation: '[0]: First position (index 0). = 10: Sets value to 10.' },
                        { line: '        numbers[1] = 20;', explanation: '[1]: Second position (index 1). = 20: Sets value to 20.' },
                        { line: '        System.out.println(numbers[0]);', explanation: 'numbers[0]: Accesses first element. println: Prints 10.' }
                    ],
                    quiz: {
                        question: 'What is the index of the first element in an array?',
                        options: ['1', '0', '-1', 'It depends'],
                        correct: 1
                    }
                },
                {
                    topic: 'Array Initialization',
                    explanation: 'You can also initialize arrays with values directly using curly braces. This is a shorthand way to create and populate an array in one line.',
                    code: 'public class InitExample {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30, 40, 50};\n        String[] names = {"Alice", "Bob", "Charlie"};\n        System.out.println(names[0]);\n    }\n}',
                    codeBreakdown: [
                        { line: 'int[] numbers = {10, 20, 30, 40, 50};', explanation: '{}: Initializes array with values. Size is automatically 5.' },
                        { line: 'String[] names = {"Alice", "Bob", "Charlie"};', explanation: 'String[]: Array of text. {}: Initial values. Size is 3.' },
                        { line: 'System.out.println(names[0]);', explanation: 'names[0]: First element ("Alice"). println: Prints it.' }
                    ],
                    quiz: {
                        question: 'How do you initialize an array with values?',
                        options: ['Using parentheses ()', 'Using curly braces {}', 'Using square brackets []', 'Using angle brackets <>'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-9',
            title: 'Methods',
            description: 'Creating and using methods',
            xp: 35,
            steps: [
                {
                    topic: 'Introduction to Methods',
                    explanation: 'A method is a block of code that performs a specific task. Methods help organize code and make it reusable. A method has a return type, name, and optional parameters. Methods that don\'t return anything use "void" as the return type.',
                    code: 'public class MethodExample {\n    public static void sayHello() {\n        System.out.println("Hello!");\n    }\n    \n    public static void main(String[] args) {\n        sayHello();\n        sayHello();\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class MethodExample {', explanation: 'class: Container for our methods.' },
                        { line: '    public static void sayHello() {', explanation: 'void: Returns nothing. sayHello(): Method name. (): No parameters.' },
                        { line: '        System.out.println("Hello!");', explanation: 'println: Prints "Hello!" when method is called.' },
                        { line: '    }', explanation: 'Closes sayHello() method.' },
                        { line: '    public static void main(String[] args) {', explanation: 'main: Entry point where execution starts.' },
                        { line: '        sayHello();', explanation: 'sayHello(): Calls our custom method. First call.' },
                        { line: '        sayHello();', explanation: 'sayHello(): Calls our custom method again. Second call.' }
                    ],
                    quiz: {
                        question: 'What return type do methods use if they return nothing?',
                        options: ['null', 'void', 'empty', 'none'],
                        correct: 1
                    }
                },
                {
                    topic: 'Methods with Parameters',
                    explanation: 'Methods can accept parameters (input values) that you pass when calling the method. Parameters are like variables that exist only within the method. They make methods more flexible and reusable.',
                    code: 'public class ParameterExample {\n    public static void greet(String name) {\n        System.out.println("Hello, " + name);\n    }\n    \n    public static void main(String[] args) {\n        greet("Alice");\n        greet("Bob");\n    }\n}',
                    codeBreakdown: [
                        { line: 'public static void greet(String name) {', explanation: 'String name: Parameter (input). Accepts text when called.' },
                        { line: '    System.out.println("Hello, " + name);', explanation: '+: Concatenates "Hello, " with name parameter.' },
                        { line: 'greet("Alice");', explanation: 'greet(): Calls method with "Alice" as the name parameter.' },
                        { line: 'greet("Bob");', explanation: 'greet(): Calls method with "Bob" as the name parameter.' }
                    ],
                    quiz: {
                        question: 'What are parameters in a method?',
                        options: ['Return values', 'Input values passed to the method', 'Method names', 'Class names'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-10',
            title: 'String Operations',
            description: 'Working with strings',
            xp: 40,
            steps: [
                {
                    topic: 'String Concatenation',
                    explanation: 'String concatenation is joining two or more strings together. In Java, you can use the + operator to concatenate strings. This is commonly used for building messages or combining text.',
                    code: 'public class ConcatExample {\n    public static void main(String[] args) {\n        String firstName = "John";\n        String lastName = "Doe";\n        String fullName = firstName + " " + lastName;\n        System.out.println(fullName);\n    }\n}',
                    codeBreakdown: [
                        { line: 'String firstName = "John";', explanation: 'String: Text type. firstName: Variable. "John": Value.' },
                        { line: 'String lastName = "Doe";', explanation: 'lastName: Second variable. "Doe": Value.' },
                        { line: 'String fullName = firstName + " " + lastName;', explanation: '+: Joins strings. " ": Adds space. Result: "John Doe".' },
                        { line: 'System.out.println(fullName);', explanation: 'println: Prints the concatenated string.' }
                    ],
                    quiz: {
                        question: 'What operator is used for string concatenation?',
                        options: ['&', '+', '*', '-'],
                        correct: 1
                    }
                },
                {
                    topic: 'String Methods',
                    explanation: 'The String class has many useful methods like length() to get the length, toUpperCase() to convert to uppercase, toLowerCase() to convert to lowercase, and equals() to compare strings.',
                    code: 'public class StringMethods {\n    public static void main(String[] args) {\n        String text = "Hello";\n        System.out.println(text.length());\n        System.out.println(text.toUpperCase());\n        System.out.println(text.toLowerCase());\n    }\n}',
                    codeBreakdown: [
                        { line: 'String text = "Hello";', explanation: 'text: String variable with value "Hello".' },
                        { line: 'text.length()', explanation: 'length(): Returns number of characters (5).' },
                        { line: 'text.toUpperCase()', explanation: 'toUpperCase(): Converts to "HELLO".' },
                        { line: 'text.toLowerCase()', explanation: 'toLowerCase(): Converts to "hello".' }
                    ],
                    quiz: {
                        question: 'What method returns the length of a string?',
                        options: ['size()', 'length()', 'count()', 'len()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-11',
            title: 'Inheritance',
            description: 'Extending classes',
            xp: 45,
            steps: [
                {
                    topic: 'Extending Classes',
                    explanation: 'Inheritance allows a class to inherit properties and methods from another class. The "extends" keyword is used. The class being inherited from is called the parent/superclass, and the inheriting class is the child/subclass.',
                    code: 'class Animal {\n    void eat() {\n        System.out.println("This animal eats food");\n    }\n}\n\nclass Dog extends Animal {\n    void bark() {\n        System.out.println("The dog barks");\n    }\n}',
                    codeBreakdown: [
                        { line: 'class Animal {', explanation: 'Animal: Parent class (superclass). Contains common behavior.' },
                        { line: '    void eat() {', explanation: 'eat(): Method that will be inherited by child classes.' },
                        { line: 'class Dog extends Animal {', explanation: 'Dog: Child class. extends: Inherits from Animal.' },
                        { line: '    void bark() {', explanation: 'bark(): Dog-specific method (not in Animal).' }
                    ],
                    quiz: {
                        question: 'What keyword is used for inheritance in Java?',
                        options: ['inherits', 'extends', 'super', 'parent'],
                        correct: 1
                    }
                },
                {
                    topic: 'Using Inherited Methods',
                    explanation: 'Child classes can use methods from the parent class as if they were their own. This promotes code reuse and establishes an "is-a" relationship between classes.',
                    code: 'public class Main {\n    public static void main(String[] args) {\n        Dog myDog = new Dog();\n        myDog.eat();  // Inherited from Animal\n        myDog.bark(); // Defined in Dog\n    }\n}',
                    codeBreakdown: [
                        { line: 'Dog myDog = new Dog();', explanation: 'Creates Dog object.' },
                        { line: 'myDog.eat();', explanation: 'eat(): Inherited from Animal class. Dog can use it.' },
                        { line: 'myDog.bark();', explanation: 'bark(): Defined in Dog class itself.' }
                    ],
                    quiz: {
                        question: 'Can a child class use parent class methods?',
                        options: ['No', 'Yes', 'Only if overridden', 'Only with super keyword'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'java-12',
            title: 'Interfaces',
            description: 'Defining contracts',
            xp: 45,
            steps: [
                {
                    topic: 'Creating Interfaces',
                    explanation: 'An interface is a contract that defines what a class must do, but not how. It contains abstract methods (methods without implementation). Classes implement interfaces using the "implements" keyword.',
                    code: 'interface Animal {\n    void makeSound();\n    void eat();\n}\n\nclass Dog implements Animal {\n    public void makeSound() {\n        System.out.println("Woof!");\n    }\n    \n    public void eat() {\n        System.out.println("Dog eats");\n    }\n}',
                    codeBreakdown: [
                        { line: 'interface Animal {', explanation: 'interface: Defines contract. Animal: Interface name.' },
                        { line: '    void makeSound();', explanation: 'makeSound(): Abstract method (no body, just ;).' },
                        { line: 'class Dog implements Animal {', explanation: 'Dog: Class. implements: Must fulfill Animal contract.' },
                        { line: '    public void makeSound() {', explanation: 'makeSound(): Implementation of interface method.' }
                    ],
                    quiz: {
                        question: 'What keyword implements an interface?',
                        options: ['extends', 'implements', 'uses', 'inherits'],
                        correct: 1
                    }
                },
                {
                    topic: 'Multiple Interfaces',
                    explanation: 'A class can implement multiple interfaces, unlike inheritance where a class can only extend one parent. This allows for flexible design patterns.',
                    code: 'interface Flyable {\n    void fly();\n}\n\ninterface Swimmable {\n    void swim();\n}\n\nclass Duck implements Flyable, Swimmable {\n    public void fly() { System.out.println("Flying"); }\n    public void swim() { System.out.println("Swimming"); }\n}',
                    codeBreakdown: [
                        { line: 'class Duck implements Flyable, Swimmable {', explanation: 'Duck: Implements two interfaces (comma-separated).' },
                        { line: '    public void fly() {', explanation: 'fly(): Implements Flyable interface method.' },
                        { line: '    public void swim() {', explanation: 'swim(): Implements Swimmable interface method.' }
                    ],
                    quiz: {
                        question: 'How many interfaces can a class implement?',
                        options: ['Only one', 'Two', 'Unlimited', 'None'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'java-13',
            title: 'Exception Handling',
            description: 'Try-catch blocks',
            xp: 40,
            steps: [
                {
                    topic: 'Try-Catch Blocks',
                    explanation: 'Exception handling in Java uses try-catch blocks. Code that might throw an exception goes in the try block. The catch block handles the exception. This prevents program crashes.',
                    code: 'public class ExceptionExample {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println("Cannot divide by zero!");\n        }\n    }\n}',
                    codeBreakdown: [
                        { line: 'try {', explanation: 'try: Block containing code that might throw exception.' },
                        { line: '    int result = 10 / 0;', explanation: 'This throws ArithmeticException (division by zero).' },
                        { line: '} catch (ArithmeticException e) {', explanation: 'catch: Handles specific exception type. e: Exception object.' },
                        { line: '    System.out.println("Cannot divide by zero!");', explanation: 'Prints error message instead of crashing.' }
                    ],
                    quiz: {
                        question: 'What block contains code that might throw an exception?',
                        options: ['catch', 'try', 'finally', 'throw'],
                        correct: 1
                    }
                },
                {
                    topic: 'Finally Block',
                    explanation: 'The finally block always executes, whether an exception occurred or not. It\'s used for cleanup operations like closing files or database connections.',
                    code: 'try {\n    // Code that might throw exception\n} catch (Exception e) {\n    // Handle exception\n} finally {\n    System.out.println("This always runs");\n}',
                    codeBreakdown: [
                        { line: 'try {', explanation: 'try: Attempt code that might fail.' },
                        { line: '} catch (Exception e) {', explanation: 'catch: Handle any exception.' },
                        { line: '} finally {', explanation: 'finally: Always runs, regardless of exception.' },
                        { line: '    System.out.println("This always runs");', explanation: 'This executes in all cases (success or failure).' }
                    ],
                    quiz: {
                        question: 'When does the finally block execute?',
                        options: ['Only on exception', 'Only on success', 'Always', 'Never'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'java-14',
            title: 'ArrayList',
            description: 'Dynamic arrays',
            xp: 40,
            steps: [
                {
                    topic: 'Introduction to ArrayList',
                    explanation: 'ArrayList is a resizable array implementation in Java. Unlike regular arrays, ArrayList can grow dynamically. It\'s part of the java.util package and stores objects, not primitives.',
                    code: 'import java.util.ArrayList;\n\npublic class ArrayListExample {\n    public static void main(String[] args) {\n        ArrayList<String> names = new ArrayList<>();\n        names.add("Alice");\n        names.add("Bob");\n        System.out.println(names.get(0));\n    }\n}',
                    codeBreakdown: [
                        { line: 'import java.util.ArrayList;', explanation: 'Import: Brings ArrayList class into scope.' },
                        { line: 'ArrayList<String> names = new ArrayList<>();', explanation: 'ArrayList<String>: Type. names: Variable. new: Creates instance.' },
                        { line: 'names.add("Alice");', explanation: 'add(): Adds element to end of list.' },
                        { line: 'names.get(0);', explanation: 'get(0): Retrieves element at index 0 ("Alice").' }
                    ],
                    quiz: {
                        question: 'What package contains ArrayList?',
                        options: ['java.lang', 'java.util', 'java.io', 'java.array'],
                        correct: 1
                    }
                },
                {
                    topic: 'ArrayList Methods',
                    explanation: 'ArrayList has many useful methods like size() for length, remove() to delete elements, contains() to check if element exists, and clear() to remove all elements.',
                    code: 'ArrayList<Integer> numbers = new ArrayList<>();\nnumbers.add(10);\nnumbers.add(20);\nSystem.out.println(numbers.size());\nnumbers.remove(0);\nnumbers.clear();',
                    codeBreakdown: [
                        { line: 'ArrayList<Integer> numbers = new ArrayList<>();', explanation: 'Integer: Wrapper class (ArrayList can\'t hold primitives).' },
                        { line: 'numbers.size()', explanation: 'size(): Returns number of elements (like array.length).' },
                        { line: 'numbers.remove(0)', explanation: 'remove(0): Removes element at index 0.' },
                        { line: 'numbers.clear()', explanation: 'clear(): Removes all elements from list.' }
                    ],
                    quiz: {
                        question: 'What method returns the size of an ArrayList?',
                        options: ['length()', 'size()', 'count()', 'getLength()'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    javascript: [
        {
            id: 'javascript-1',
            title: 'Hello World',
        },
        {
            id: 'javascript-2',
            title: 'Variables',
            description: 'let, const, and var',
            xp: 15,
            steps: [
                {
                    topic: 'let and const',
                    explanation: 'Modern JavaScript uses let and const to declare variables. let is for variables that can change, while const is for constants that cannot be reassigned.',
                    code: 'let name = "Alice";\nconst pi = 3.14;\nname = "Bob"; // This works\n// pi = 3.15; // This would cause an error',
                    codeBreakdown: [
                        { line: 'let name = "Alice";', explanation: 'let: Variable that can change. name: Variable name. "Alice": Initial value.' },
                        { line: 'const pi = 3.14;', explanation: 'const: Constant (cannot change). pi: Variable name. 3.14: Value.' },
                        { line: 'name = "Bob";', explanation: 'name: Can be reassigned. Now holds "Bob".' },
                        { line: '// pi = 3.15;', explanation: '//: Comment. This would error because const cannot be reassigned.' }
                    ],
                    quiz: {
                        question: 'Which keyword declares a constant?',
                        options: ['let', 'var', 'const', 'final'],
                        correct: 2
                    }
                },
                {
                    topic: 'var',
                    explanation: 'var is the old way to declare variables. It has function scope and can be redeclared, which can lead to bugs. It\'s recommended to use let and const instead.',
                    code: 'var oldWay = "Using var";\nlet newWay = "Using let";\nconsole.log(oldWay);\nconsole.log(newWay);',
                    codeBreakdown: [
                        { line: 'var oldWay = "Using var";', explanation: 'var: Old keyword (function scope). Not recommended anymore.' },
                        { line: 'let newWay = "Using let";', explanation: 'let: Modern keyword (block scope). Recommended.' },
                        { line: 'console.log(oldWay);', explanation: 'console.log: Outputs "Using var".' },
                        { line: 'console.log(newWay);', explanation: 'console.log: Outputs "Using let".' }
                    ],
                    quiz: {
                        question: 'What is the recommended way to declare variables in modern JavaScript?',
                        options: ['var', 'let and const', 'Only let', 'Only const'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-3',
            title: 'Data Types',
            description: 'Numbers, strings, and more',
            xp: 20,
            steps: [
                {
                    topic: 'Strings',
                    explanation: 'Strings are text enclosed in quotes. JavaScript supports single quotes, double quotes, and template literals (backticks) for strings.',
                    code: 'let single = \'Hello\';\nlet double = "World";\nlet template = `Hello ${double}`;\nconsole.log(template);',
                    codeBreakdown: [
                        { line: 'let single = \'Hello\';', explanation: 'Single quotes: One way to create strings.' },
                        { line: 'let double = "World";', explanation: 'Double quotes: Another way to create strings.' },
                        { line: 'let template = `Hello ${double}`;', explanation: 'Backticks: Template literals. ${double}: Inserts variable value.' },
                        { line: 'console.log(template);', explanation: 'Outputs "Hello World" (template interpolates double).' }
                    ],
                    quiz: {
                        question: 'What character is used for template literals?',
                        options: ['Single quote', 'Double quote', 'Backtick', 'Forward slash'],
                        correct: 2
                    }
                },
                {
                    topic: 'Numbers',
                    explanation: 'JavaScript has one number type for both integers and decimals. It also supports special values like Infinity and NaN (Not a Number).',
                    code: 'let integer = 42;\nlet decimal = 3.14;\nlet notANumber = NaN;\nconsole.log(integer + decimal);',
                    codeBreakdown: [
                        { line: 'let integer = 42;', explanation: 'integer: Whole number (42).' },
                        { line: 'let decimal = 3.14;', explanation: 'decimal: Decimal number (3.14). Same type as integer.' },
                        { line: 'let notANumber = NaN;', explanation: 'NaN: Not a Number. Result of invalid math operations.' },
                        { line: 'console.log(integer + decimal);', explanation: '+: Adds numbers. Outputs 45.14.' }
                    ],
                    quiz: {
                        question: 'What does NaN stand for?',
                        options: ['Not a Null', 'Not a Number', 'No and Null', 'None at Null'],
                        correct: 1
                    }
                },
                {
                    topic: 'Booleans',
                    explanation: 'Booleans represent true or false values. They\'re used in conditional statements and comparisons.',
                    code: 'let isTrue = true;\nlet isFalse = false;\nconsole.log(isTrue && isFalse);\nconsole.log(isTrue || isFalse);',
                    codeBreakdown: [
                        { line: 'let isTrue = true;', explanation: 'true: Represents yes/active state.' },
                        { line: 'let isFalse = false;', explanation: 'false: Represents no/inactive state.' },
                        { line: 'console.log(isTrue && isFalse);', explanation: '&&: AND operator. Both must be true. Output: false.' },
                        { line: 'console.log(isTrue || isFalse);', explanation: '||: OR operator. One must be true. Output: true.' }
                    ],
                    quiz: {
                        question: 'What are the two Boolean values?',
                        options: ['yes/no', 'true/false', '1/0', 'on/off'],
                        correct: 1
                    }
                },
                {
                    topic: 'If Statements',
                    explanation: 'JavaScript if statements work similarly to other languages. The condition is evaluated, and if true, the code block executes.',
                    code: 'let age = 18;\nif (age >= 18) {\n    console.log("Adult");\n}',
                    codeBreakdown: [
                        { line: 'let age = 18;', explanation: 'age: Variable with value 18.' },
                        { line: 'if (age >= 18) {', explanation: 'if: Checks condition. age >= 18: Is age 18 or more? {}: Code block.' },
                        { line: '    console.log("Adult");', explanation: 'Indented: Runs only if condition is true.' },
                        { line: '}', explanation: 'Closes if block.' }
                    ],
                    quiz: {
                        question: 'What symbol is used for comparison in JavaScript?',
                        options: ['=', '==', '===', 'All of the above'],
                        correct: 2
                    }
                },
                {
                    topic: 'Ternary Operator',
                    explanation: 'JavaScript has a ternary operator (?) for simple conditional expressions. It\'s a concise way to write if-else statements.',
                    code: 'let age = 20;\nlet status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status);',
                    codeBreakdown: [
                        { line: 'let age = 20;', explanation: 'age: Variable with value 20.' },
                        { line: 'let status = age >= 18 ? "Adult" : "Minor";', explanation: '?: Ternary operator. age >= 18: Condition. "Adult": If true. "Minor": If false.' },
                        { line: 'console.log(status);', explanation: 'Prints "Adult" because age (20) >= 18.' }
                    ],
                    quiz: {
                        question: 'What is the ternary operator?',
                        options: ['?', ':', '?:', 'Both ? and :'],
                        correct: 3
                    }
                }
            ]
        },
        {
            id: 'javascript-5',
            title: 'Loops',
            description: 'For and while loops',
            xp: 30,
            steps: [
                {
                    topic: 'For Loops',
                    explanation: 'JavaScript for loops have the same structure as other C-style languages. You can also use for...of loops to iterate over arrays.',
                    code: 'for (let i = 0; i < 5; i++) {\n    console.log(i);\n}',
                    codeBreakdown: [
                        { line: 'for (let i = 0; i < 5; i++) {', explanation: 'let i = 0: Initialize counter. i < 5: Condition. i++: Increment after each iteration.' },
                        { line: '    console.log(i);', explanation: 'Indented: Prints current value of i (0, 1, 2, 3, 4).' },
                        { line: '}', explanation: 'Closes for loop block.' }
                    ],
                    quiz: {
                        question: 'What loop type is best for iterating over arrays?',
                        options: ['while loop', 'for...of loop', 'do-while loop', 'All are equal'],
                        correct: 1
                    }
                },
                {
                    topic: 'While Loops',
                    explanation: 'While loops continue as long as the condition is true. Be careful to ensure the loop can terminate, or you\'ll create an infinite loop.',
                    code: 'let count = 0;\nwhile (count < 5) {\n    console.log(count);\n    count++;\n}',
                    codeBreakdown: [
                        { line: 'let count = 0;', explanation: 'count: Initialize counter at 0.' },
                        { line: 'while (count < 5) {', explanation: 'while: Loop while condition is true. count < 5: Check before each iteration.' },
                        { line: '    console.log(count);', explanation: 'Prints current count value.' },
                        { line: '    count++;', explanation: 'count++: Increments count by 1. Eventually becomes 5, loop stops.' }
                    ],
                    quiz: {
                        question: 'What is the danger of while loops?',
                        options: ['They are too slow', 'They can create infinite loops', 'They don\'t work', 'None of the above'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-6',
            title: 'Arrays',
            description: 'Working with arrays',
            xp: 35,
            steps: [
                {
                    topic: 'Creating Arrays',
                    explanation: 'Arrays in JavaScript are ordered collections of values. You can create them using square brackets [] or the Array constructor. Arrays can hold any type of data.',
                    code: 'let fruits = ["apple", "banana", "cherry"];\nlet numbers = [1, 2, 3, 4, 5];\nlet mixed = ["text", 42, true];\nconsole.log(fruits[0]);',
                    codeBreakdown: [
                        { line: 'let fruits = ["apple", "banana", "cherry"]', explanation: '[]: Creates array. Items separated by commas.' },
                        { line: 'let numbers = [1, 2, 3, 4, 5]', explanation: 'numbers: Array of integers.' },
                        { line: 'let mixed = ["text", 42, true]', explanation: 'mixed: Array with mixed types (string, number, boolean).' },
                        { line: 'console.log(fruits[0]);', explanation: 'fruits[0]: Access first element (index 0). Prints "apple".' }
                    ],
                    quiz: {
                        question: 'How do you create an array in JavaScript?',
                        options: ['Using parentheses ()', 'Using square brackets []', 'Using curly braces {}', 'Using angle brackets <>'],
                        correct: 1
                    }
                },
                {
                    topic: 'Array Methods',
                    explanation: 'JavaScript arrays have many built-in methods like push() to add items, pop() to remove the last item, and length to get the size. These methods make working with arrays easy.',
                    code: 'let fruits = ["apple", "banana"];\nfruits.push("cherry");\nfruits.pop();\nconsole.log(fruits.length);',
                    codeBreakdown: [
                        { line: 'let fruits = ["apple", "banana"]', explanation: 'Initial array with 2 items.' },
                        { line: 'fruits.push("cherry")', explanation: 'push(): Adds "cherry" to end of array.' },
                        { line: 'fruits.pop()', explanation: 'pop(): Removes last item from array.' },
                        { line: 'console.log(fruits.length)', explanation: 'length: Property returning array size.' }
                    ],
                    quiz: {
                        question: 'What method adds an item to the end of an array?',
                        options: ['add()', 'push()', 'append()', 'insert()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-7',
            title: 'Functions',
            description: 'Creating reusable code',
            xp: 35,
            steps: [
                {
                    topic: 'Function Declaration',
                    explanation: 'Functions in JavaScript are declared using the function keyword followed by a name and parentheses. Functions allow you to reuse code and organize your program into logical pieces.',
                    code: 'function greet() {\n    console.log("Hello!");\n}\n\ngreet();\ngreet();',
                    codeBreakdown: [
                        { line: 'function greet() {', explanation: 'function: Declares function. greet: Function name. (): No parameters.' },
                        { line: '    console.log("Hello!");', explanation: 'Indented: Code that runs when function is called.' },
                        { line: '}', explanation: 'Closes function definition.' },
                        { line: 'greet()', explanation: 'Calls the greet function. First call.' },
                        { line: 'greet()', explanation: 'Calls the greet function again. Second call.' }
                    ],
                    quiz: {
                        question: 'What keyword declares a function in JavaScript?',
                        options: ['def', 'func', 'function', 'fn'],
                        correct: 2
                    }
                },
                {
                    topic: 'Arrow Functions',
                    explanation: 'Arrow functions (=>) are a shorter way to write functions in modern JavaScript. They\'re especially useful for short functions and when passing functions as arguments.',
                    code: 'const greet = () => {\n    console.log("Hello!");\n};\n\nconst add = (a, b) => a + b;\nconsole.log(add(2, 3));',
                    codeBreakdown: [
                        { line: 'const greet = () => {', explanation: 'const: Constant. greet: Function name. =>: Arrow function syntax.' },
                        { line: '    console.log("Hello!");', explanation: 'Function body code.' },
                        { line: 'const add = (a, b) => a + b', explanation: 'a, b: Parameters. =>: Arrow. a + b: Implicit return.' },
                        { line: 'console.log(add(2, 3));', explanation: 'add(2, 3): Calls function with arguments. Prints 5.' }
                    ],
                    quiz: {
                        question: 'What symbol is used for arrow functions?',
                        options: ['->', '=>', '>>', '->'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-8',
            title: 'Objects',
            description: 'Working with objects',
            xp: 40,
            steps: [
                {
                    topic: 'Creating Objects',
                    explanation: 'Objects in JavaScript store data in key-value pairs. They\'re created using curly braces {} with colons separating keys and values. Objects are fundamental to JavaScript.',
                    code: 'const person = {\n    name: "Alice",\n    age: 25,\n    city: "NYC"\n};\nconsole.log(person.name);',
                    codeBreakdown: [
                        { line: 'const person = {', explanation: '{}: Creates object. person: Variable name.' },
                        { line: '    name: "Alice",', explanation: 'name: Key. "Alice": Value. : separates them.' },
                        { line: '    age: 25,', explanation: 'age: Key. 25: Value (number).' },
                        { line: '    city: "NYC"', explanation: 'city: Key. "NYC": Value (string).' },
                        { line: '}', explanation: 'Closes object definition.' },
                        { line: 'console.log(person.name);', explanation: 'person.name: Access value using key. Prints "Alice".' }
                    ],
                    quiz: {
                        question: 'What symbol separates keys and values in objects?',
                        options: ['=', ':', '-', '->'],
                        correct: 1
                    }
                },
                {
                    topic: 'Object Methods',
                    explanation: 'Objects can also contain functions as values. These are called methods. Methods can access and modify the object\'s data using the "this" keyword.',
                    code: 'const person = {\n    name: "Alice",\n    greet: function() {\n        console.log("Hello, I\'m " + this.name);\n    }\n};\nperson.greet();',
                    codeBreakdown: [
                        { line: 'greet: function() {', explanation: 'greet: Key (method name). function(): Value (function).' },
                        { line: '    console.log("Hello, I\'m " + this.name);', explanation: 'this.name: Refers to current object\'s name property.' },
                        { line: 'person.greet()', explanation: 'person.greet(): Calls the greet method on person object.' }
                    ],
                    quiz: {
                        question: 'What keyword refers to the current object?',
                        options: ['self', 'this', 'that', 'object'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-9',
            title: 'DOM Manipulation',
            description: 'Interacting with HTML',
            xp: 45,
            steps: [
                {
                    topic: 'Selecting Elements',
                    explanation: 'The Document Object Model (DOM) allows JavaScript to interact with HTML. You can select elements using methods like getElementById(), querySelector(), and getElementsByClassName().',
                    code: '// Select by ID\nconst title = document.getElementById("title");\n\n// Select by class\nconst items = document.getElementsByClassName("item");\n\n// Select using CSS selector\nconst button = document.querySelector(".btn");',
                    codeBreakdown: [
                        { line: 'document.getElementById("title")', explanation: 'getElementById: Selects element with specific ID. Returns single element.' },
                        { line: 'document.getElementsByClassName("item")', explanation: 'getElementsByClassName: Selects all elements with class. Returns collection.' },
                        { line: 'document.querySelector(".btn")', explanation: 'querySelector: Uses CSS selector. Returns first matching element.' }
                    ],
                    quiz: {
                        question: 'What method selects an element by ID?',
                        options: ['select()', 'getElementById()', 'find()', 'querySelector()'],
                        correct: 1
                    }
                },
                {
                    topic: 'Modifying Elements',
                    explanation: 'Once you\'ve selected an element, you can modify its content with textContent or innerHTML, change its style with the style property, or add event listeners to handle user interactions.',
                    code: 'const element = document.getElementById("demo");\nelement.textContent = "New text";\nelement.style.color = "red";\nelement.style.fontSize = "24px";',
                    codeBreakdown: [
                        { line: 'const element = document.getElementById("demo")', explanation: 'Selects element with ID "demo".' },
                        { line: 'element.textContent = "New text"', explanation: 'textContent: Sets text content (no HTML).' },
                        { line: 'element.style.color = "red"', explanation: 'style.color: Changes text color to red.' },
                        { line: 'element.style.fontSize = "24px"', explanation: 'style.fontSize: Changes font size to 24px.' }
                    ],
                    quiz: {
                        question: 'What property changes an element\'s text content?',
                        options: ['text', 'textContent', 'content', 'innerHTML'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-10',
            title: 'Event Handling',
            description: 'Responding to user actions',
            xp: 45,
            steps: [
                {
                    topic: 'Adding Event Listeners',
                    explanation: 'Event listeners allow your code to respond to user actions like clicks, key presses, and form submissions. The addEventListener() method attaches a function to run when an event occurs.',
                    code: 'const button = document.getElementById("myButton");\nbutton.addEventListener("click", function() {\n    console.log("Button clicked!");\n});',
                    codeBreakdown: [
                        { line: 'const button = document.getElementById("myButton")', explanation: 'Selects button element by ID.' },
                        { line: 'button.addEventListener("click", function() {', explanation: 'addEventListener: Attaches event handler. "click": Event type. function(): Handler.' },
                        { line: '    console.log("Button clicked!");', explanation: 'Runs when button is clicked.' },
                        { line: '});', explanation: 'Closes addEventListener call.' }
                    ],
                    quiz: {
                        question: 'What method adds an event listener?',
                        options: ['onEvent()', 'addEventListener()', 'addEvent()', 'listen()'],
                        correct: 1
                    }
                },
                {
                    topic: 'Common Events',
                    explanation: 'JavaScript supports many event types: click, mouseover, keydown, submit, load, and more. Each event type corresponds to a user action or browser event.',
                    code: 'button.addEventListener("click", handleClick);\ninput.addEventListener("keydown", handleKey);\nform.addEventListener("submit", handleSubmit);\nwindow.addEventListener("load", handleLoad);',
                    codeBreakdown: [
                        { line: '"click"', explanation: 'Fires when element is clicked.' },
                        { line: '"keydown"', explanation: 'Fires when key is pressed down.' },
                        { line: '"submit"', explanation: 'Fires when form is submitted.' },
                        { line: '"load"', explanation: 'Fires when page finishes loading.' }
                    ],
                    quiz: {
                        question: 'What event triggers when a key is pressed?',
                        options: ['keypress', 'keydown', 'key', 'input'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-11',
            title: 'Promises & Async',
            description: 'Asynchronous programming',
            xp: 50,
            steps: [
                {
                    topic: 'Introduction to Promises',
                    explanation: 'Promises represent the eventual completion or failure of an asynchronous operation. A Promise can be in one of three states: pending, fulfilled, or rejected. They\'re essential for handling operations like API calls.',
                    code: 'const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve("Success!");\n    }, 1000);\n});\n\nmyPromise.then(result => {\n    console.log(result);\n});',
                    codeBreakdown: [
                        { line: 'new Promise((resolve, reject) => {', explanation: 'Promise: Constructor. resolve: Success callback. reject: Failure callback.' },
                        { line: '    setTimeout(() => {', explanation: 'setTimeout: Simulates async operation (1 second delay).' },
                        { line: '        resolve("Success!");', explanation: 'resolve(): Marks promise as fulfilled with value.' },
                        { line: 'myPromise.then(result => {', explanation: 'then(): Runs when promise resolves. result: The resolved value.' }
                    ],
                    quiz: {
                        question: 'What are the three states of a Promise?',
                        options: ['Start, middle, end', 'Pending, fulfilled, rejected', 'Begin, continue, finish', 'Ready, set, go'],
                        correct: 1
                    }
                },
                {
                    topic: 'Async/Await',
                    explanation: 'Async/await is syntactic sugar over Promises that makes asynchronous code look and behave more like synchronous code. The async keyword marks a function as asynchronous, and await pauses execution until a Promise resolves.',
                    code: 'async function fetchData() {\n    try {\n        const result = await myPromise;\n        console.log(result);\n    } catch (error) {\n        console.error(error);\n    }\n}',
                    codeBreakdown: [
                        { line: 'async function fetchData() {', explanation: 'async: Marks function as asynchronous (returns Promise).' },
                        { line: '    const result = await myPromise;', explanation: 'await: Pauses until myPromise resolves. result: Resolved value.' },
                        { line: '    } catch (error) {', explanation: 'catch: Handles errors from await operations.' }
                    ],
                    quiz: {
                        question: 'What keyword pauses execution until a Promise resolves?',
                        options: ['wait', 'pause', 'await', 'hold'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'javascript-12',
            title: 'Array Methods',
            description: 'Map, filter, and reduce',
            xp: 45,
            steps: [
                {
                    topic: 'Map Method',
                    explanation: 'The map() method creates a new array by applying a function to each element in the original array. It doesn\'t modify the original array. Useful for transforming data.',
                    code: 'const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]',
                    codeBreakdown: [
                        { line: 'const numbers = [1, 2, 3, 4, 5]', explanation: 'Original array of numbers.' },
                        { line: 'numbers.map(num => num * 2)', explanation: 'map(): Applies function to each element. num * 2: Doubles each number.' },
                        { line: 'const doubled = ...', explanation: 'doubled: New array with transformed values.' }
                    ],
                    quiz: {
                        question: 'Does map() modify the original array?',
                        options: ['Yes', 'No', 'Sometimes', 'Only if specified'],
                        correct: 1
                    }
                },
                {
                    topic: 'Filter Method',
                    explanation: 'The filter() method creates a new array with elements that pass a test (return true from the callback function). It\'s useful for selecting specific items from an array.',
                    code: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(num => num % 2 === 0);\nconsole.log(evens); // [2, 4, 6]',
                    codeBreakdown: [
                        { line: 'const numbers = [1, 2, 3, 4, 5, 6]', explanation: 'Original array.' },
                        { line: 'numbers.filter(num => num % 2 === 0)', explanation: 'filter(): Keeps only elements where condition is true. num % 2 === 0: Even numbers.' },
                        { line: 'const evens = ...', explanation: 'evens: New array with only even numbers.' }
                    ],
                    quiz: {
                        question: 'What does filter() return?',
                        options: ['A single element', 'A new array with filtered elements', 'The original array', 'A boolean'],
                        correct: 1
                    }
                },
                {
                    topic: 'Reduce Method',
                    explanation: 'The reduce() method executes a reducer function on each element and produces a single output value. It\'s powerful for summing, averaging, or any operation that combines array elements.',
                    code: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\nconsole.log(sum); // 15',
                    codeBreakdown: [
                        { line: 'const numbers = [1, 2, 3, 4, 5]', explanation: 'Original array.' },
                        { line: 'numbers.reduce((acc, num) => acc + num, 0)', explanation: 'reduce(): Combines elements. acc: Accumulator. num: Current value. 0: Initial value.' },
                        { line: 'const sum = ...', explanation: 'sum: Single result (total of all numbers).' }
                    ],
                    quiz: {
                        question: 'What does reduce() return?',
                        options: ['An array', 'A single value', 'The original array', 'Nothing'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-13',
            title: 'Classes & OOP',
            description: 'Object-oriented JavaScript',
            xp: 45,
            steps: [
                {
                    topic: 'Creating Classes',
                    explanation: 'Classes in JavaScript are templates for creating objects. They define properties and methods. The constructor method is special - it runs when creating a new instance.',
                    code: 'class Dog {\n    constructor(name) {\n        this.name = name;\n    }\n    \n    bark() {\n        console.log(this.name + " says Woof!");\n    }\n}',
                    codeBreakdown: [
                        { line: 'class Dog {', explanation: 'class: Defines class template. Dog: Class name.' },
                        { line: '    constructor(name) {', explanation: 'constructor: Special method. Runs on object creation. name: Parameter.' },
                        { line: '        this.name = name;', explanation: 'this.name: Instance property. Stores name.' },
                        { line: '    bark() {', explanation: 'bark(): Method (function) of the class.' }
                    ],
                    quiz: {
                        question: 'What method runs when creating a new class instance?',
                        options: ['init', 'constructor', 'create', 'new'],
                        correct: 1
                    }
                },
                {
                    topic: 'Creating Objects',
                    explanation: 'To create an object from a class, use the "new" keyword followed by the class name and any constructor parameters. This creates a new instance with its own properties.',
                    code: 'const myDog = new Dog("Buddy");\nmyDog.bark();\n\nconst anotherDog = new Dog("Max");\nanotherDog.bark();',
                    codeBreakdown: [
                        { line: 'const myDog = new Dog("Buddy")', explanation: 'new: Creates instance. Dog("Buddy"): Calls constructor with "Buddy".' },
                        { line: 'myDog.bark()', explanation: 'bark(): Calls method on myDog instance.' },
                        { line: 'const anotherDog = new Dog("Max")', explanation: 'Creates separate instance with different name.' }
                    ],
                    quiz: {
                        question: 'What keyword creates a new class instance?',
                        options: ['create', 'new', 'make', 'instance'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'javascript-14',
            title: 'Modules',
            description: 'Import and export',
            xp: 40,
            steps: [
                {
                    topic: 'Exporting Functions',
                    explanation: 'Modules allow you to split code into separate files. You can export functions, variables, or classes using the "export" keyword. There are named exports and default exports.',
                    code: '// utils.js\nexport const add = (a, b) => a + b;\nexport const multiply = (a, b) => a * b;\n\nexport default function greet(name) {\n    return `Hello, ${name}`;\n}',
                    codeBreakdown: [
                        { line: 'export const add = (a, b) => a + b;', explanation: 'export: Named export. add: Function name. Can import multiple.' },
                        { line: 'export const multiply = (a, b) => a * b;', explanation: 'export: Another named export. multiply: Function name.' },
                        { line: 'export default function greet(name) {', explanation: 'export default: Default export. One per file. Can import with any name.' }
                    ],
                    quiz: {
                        question: 'How many default exports can a file have?',
                        options: ['None', 'One', 'Two', 'Unlimited'],
                        correct: 1
                    }
                },
                {
                    topic: 'Importing Functions',
                    explanation: 'You can import exported items using the "import" keyword. Named imports use curly braces, while default imports don\'t. You can also import everything with import *.',
                    code: '// main.js\nimport { add, multiply } from "./utils.js";\nimport greet from "./utils.js";\nimport * as utils from "./utils.js";\n\nconsole.log(add(2, 3));\nconsole.log(greet("Alice"));',
                    codeBreakdown: [
                        { line: 'import { add, multiply } from "./utils.js"', explanation: 'Named imports in curly braces. Must match export names.' },
                        { line: 'import greet from "./utils.js"', explanation: 'Default import. No curly braces. Can use any name.' },
                        { line: 'import * as utils from "./utils.js"', explanation: 'Import all as namespace. utils.add(), utils.multiply(), etc.' }
                    ],
                    quiz: {
                        question: 'What syntax is used for named imports?',
                        options: ['Parentheses ()', 'Curly braces {}', 'Square brackets []', 'Angle brackets <>'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    cpp: [
        {
            id: 'cpp-1',
            title: 'Hello World',
            description: 'Your first C++ program',
            xp: 10,
            steps: [
                {
                    topic: 'Introduction to C++',
                    explanation: 'C++ is a powerful, high-performance programming language. It\'s an extension of C with object-oriented features. Every C++ program needs a main() function as the entry point.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}',
                    codeBreakdown: [
                        { line: '#include <iostream>', explanation: '#include: Includes library. <iostream>: Input/output stream library.' },
                        { line: 'using namespace std;', explanation: 'using namespace: Avoids typing std:: before cout/cin.' },
                        { line: 'int main() {', explanation: 'int: Return type. main: Entry point function. (): No parameters.' },
                        { line: '    cout << "Hello, World!" << endl;', explanation: 'cout: Console output. <<: Stream operator. endl: End line.' },
                        { line: '    return 0;', explanation: 'return 0: Returns 0 to indicate success.' },
                        { line: '}', explanation: 'Closes main function.' }
                    ],
                    quiz: {
                        question: 'What is the entry point of a C++ program?',
                        options: ['start()', 'main()', 'init()', 'run()'],
                        correct: 1
                    }
                },
                {
                    topic: 'Understanding cout',
                    explanation: 'cout is used to output text to the console in C++. It stands for "console output". You use the << operator to send data to cout. endl adds a new line.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello" << endl;\n    cout << "World" << endl;\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'cout << "Hello" << endl;', explanation: 'cout: Output stream. "Hello": Text to print. endl: New line.' },
                        { line: 'cout << "World" << endl;', explanation: 'Prints "World" on next line.' }
                    ],
                    quiz: {
                        question: 'What does cout stand for?',
                        options: ['Console Output', 'Character Out', 'Computer Output', 'Count Out'],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: 'cpp-2',
            title: 'Variables',
            description: 'Declaring and using variables',
            xp: 15,
            steps: [
                {
                    topic: 'Variable Declaration',
                    explanation: 'In C++, you must declare the type of variable before using it. Common types include int (integers), double (decimals), string (text), and bool (true/false).',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    double price = 19.99;\n    string name = "Alice";\n    cout << name << endl;\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'int age = 25;', explanation: 'int: Integer type. age: Variable name. = 25: Assigns value.' },
                        { line: 'double price = 19.99;', explanation: 'double: Decimal type. price: Variable name. 19.99: Decimal value.' },
                        { line: 'string name = "Alice";', explanation: 'string: Text type. name: Variable name. "Alice": String value.' },
                        { line: 'cout << name << endl;', explanation: 'cout: Outputs value of name ("Alice").' }
                    ],
                    quiz: {
                        question: 'Which type is used for whole numbers in C++?',
                        options: ['float', 'double', 'int', 'number'],
                        correct: 2
                    }
                },
                {
                    topic: 'Type Safety',
                    explanation: 'C++ is statically typed, meaning you cannot assign a value of the wrong type to a variable without explicit conversion. This helps catch errors at compile time.',
                    code: 'int number = 42;\n// number = "hello"; // This would cause an error\ncout << number << endl;',
                    codeBreakdown: [
                        { line: 'int number = 42;', explanation: 'int: Declares number as integer. = 42: Initial value.' },
                        { line: '// number = "hello";', explanation: '//: Comment. This line would error because "hello" is a string, not int.' },
                        { line: 'cout << number << endl;', explanation: 'cout: Outputs the integer value 42.' }
                    ],
                    quiz: {
                        question: 'What happens if you assign a string to an int variable?',
                        options: ['It works fine', 'The string is converted', 'Compile error', 'Runtime error'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'cpp-3',
            title: 'Conditionals',
            description: 'If-else statements',
            xp: 20,
            steps: [
                {
                    topic: 'If Statements',
                    explanation: 'C++ if statements evaluate a condition and execute code if true. Code blocks are defined with curly braces {}. The condition must be in parentheses.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 18;\n    if (age >= 18) {\n        cout << "Adult" << endl;\n    }\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'int age = 18;', explanation: 'age: Variable with value 18.' },
                        { line: 'if (age >= 18) {', explanation: 'if: Checks condition. age >= 18: Is age 18 or more? (): Parentheses required.' },
                        { line: '    cout << "Adult" << endl;', explanation: 'Indented: Runs only if condition is true.' },
                        { line: '}', explanation: 'Closes if block.' }
                    ],
                    quiz: {
                        question: 'What must enclose the condition in an if statement?',
                        options: ['Braces {}', 'Brackets []', 'Parentheses ()', 'Angle brackets <>'],
                        correct: 2
                    }
                },
                {
                    topic: 'If-Else',
                    explanation: 'The else block executes when the if condition is false. C++ uses "else if" to check additional conditions, similar to Java.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    if (score >= 90) {\n        cout << "A" << endl;\n    } else if (score >= 80) {\n        cout << "B" << endl;\n    } else {\n        cout << "C" << endl;\n    }\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'if (score >= 90) {', explanation: 'First condition: Is score 90+? (85 is not)' },
                        { line: '} else if (score >= 80) {', explanation: 'else if: Second condition. Is score 80+? (85 is! This runs)' },
                        { line: '    cout << "B" << endl;', explanation: 'Prints "B" because score is 85.' },
                        { line: '} else {', explanation: 'else: Runs if no conditions matched.' }
                    ],
                    quiz: {
                        question: 'What keyword checks additional conditions in C++?',
                        options: ['elif', 'else if', 'elseif', 'elsif'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'cpp-4',
            title: 'Loops',
            description: 'For and while loops',
            xp: 25,
            steps: [
                {
                    topic: 'For Loops',
                    explanation: 'C++ for loops have three parts: initialization, condition, and update. This structure is similar to C and Java. It\'s commonly used for iterating a specific number of times.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        cout << i << endl;\n    }\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'for (int i = 0; i < 5; i++) {', explanation: 'int i = 0: Initialize. i < 5: Condition. i++: Increment after each iteration.' },
                        { line: '    cout << i << endl;', explanation: 'Indented: Prints current value of i (0, 1, 2, 3, 4).' },
                        { line: '}', explanation: 'Closes for loop block.' }
                    ],
                    quiz: {
                        question: 'What does i++ do in a for loop?',
                        options: ['Decrements i', 'Increments i by 1', 'Checks if i is equal', 'None of the above'],
                        correct: 1
                    }
                },
                {
                    topic: 'While Loops',
                    explanation: 'While loops repeat code while a condition is true. The condition is checked before each iteration. If false initially, the loop never executes.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0;\n    while (count < 5) {\n        cout << count << endl;\n        count++;\n    }\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'int count = 0;', explanation: 'count: Initialize counter at 0.' },
                        { line: 'while (count < 5) {', explanation: 'while: Loop while condition is true. count < 5: Check before each iteration.' },
                        { line: '    cout << count << endl;', explanation: 'Prints current count value.' },
                        { line: '    count++;', explanation: 'count++: Increments count by 1. Eventually becomes 5, loop stops.' }
                    ],
                    quiz: {
                        question: 'When does a while loop check its condition?',
                        options: ['After each iteration', 'Before each iteration', 'Only once', 'Never'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'cpp-5',
            title: 'Functions',
            description: 'Creating and using functions',
            xp: 30,
            steps: [
                {
                    topic: 'Function Declaration',
                    explanation: 'Functions in C++ must have a return type, name, and parameters. The return type specifies what kind of value the function returns. Use void if it returns nothing.',
                    code: '#include <iostream>\nusing namespace std;\n\nvoid sayHello() {\n    cout << "Hello!" << endl;\n}\n\nint main() {\n    sayHello();\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'void sayHello() {', explanation: 'void: Returns nothing. sayHello: Function name. (): No parameters.' },
                        { line: '    cout << "Hello!" << endl;', explanation: 'Indented: Code that runs when function is called.' },
                        { line: '}', explanation: 'Closes sayHello function.' },
                        { line: 'sayHello()', explanation: 'Calls the sayHello function from main.' }
                    ],
                    quiz: {
                        question: 'What return type do you use for functions that return nothing?',
                        options: ['null', 'void', 'none', 'empty'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'cpp-6',
            title: 'Arrays',
            description: 'Working with arrays',
            xp: 35,
            steps: [
                {
                    topic: 'Array Declaration',
                    explanation: 'Arrays in C++ are fixed-size collections of the same type. You must specify the size when creating an array. Arrays are zero-indexed.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    cout << numbers[0] << endl;\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'int numbers[5] = {10, 20, 30, 40, 50};', explanation: 'int[]: Array of integers. [5]: Size 5. {}: Initial values.' },
                        { line: 'cout << numbers[0] << endl;', explanation: 'numbers[0]: Access first element (index 0). Prints 10.' }
                    ],
                    quiz: {
                        question: 'What is the index of the first element in a C++ array?',
                        options: ['1', '0', '-1', 'It depends'],
                        correct: 1
                    }
                },
                {
                    topic: 'Array Access',
                    explanation: 'You can access array elements using square brackets with an index. Be careful not to access beyond the array bounds, which causes undefined behavior.',
                    code: 'int arr[3] = {1, 2, 3};\narr[0] = 10;  // Modify first element\nint x = arr[2]; // Access third element',
                    codeBreakdown: [
                        { line: 'int arr[3] = {1, 2, 3};', explanation: 'arr: Array name. [3]: Size 3. {}: Initial values.' },
                        { line: 'arr[0] = 10;', explanation: '[0]: First position. = 10: Sets value to 10.' },
                        { line: 'int x = arr[2];', explanation: '[2]: Third position. Stores value in x.' }
                    ],
                    quiz: {
                        question: 'What happens if you access an index beyond the array size?',
                        options: ['Returns 0', 'Returns null', 'Undefined behavior', 'Raises an error'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'cpp-7',
            title: 'Pointers',
            description: 'Understanding pointers',
            xp: 40,
            steps: [
                {
                    topic: 'What are Pointers?',
                    explanation: 'Pointers are variables that store memory addresses. They\'re a powerful feature of C++ that allow direct memory manipulation. You declare a pointer with the * operator and get an address with &.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 42;\n    int* ptr = &num;\n    cout << *ptr << endl;\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'int num = 42;', explanation: 'num: Integer variable with value 42.' },
                        { line: 'int* ptr = &num;', explanation: 'int*: Pointer type. ptr: Pointer variable. &num: Address of num.' },
                        { line: 'cout << *ptr << endl;', explanation: '*ptr: Dereferences pointer (gets value at address). Prints 42.' }
                    ],
                    quiz: {
                        question: 'What operator gets the address of a variable?',
                        options: ['*', '&', '@', '#'],
                        correct: 1
                    }
                },
                {
                    topic: 'Dereferencing',
                    explanation: 'Dereferencing a pointer means accessing the value at the memory address it points to. You use the * operator to dereference. This is the opposite of getting the address.',
                    code: 'int x = 10;\nint* ptr = &x;\n*ptr = 20;  // Modifies x through pointer\ncout << x; // Prints 20',
                    codeBreakdown: [
                        { line: 'int* ptr = &x;', explanation: 'ptr: Points to address of x.' },
                        { line: '*ptr = 20;', explanation: '*ptr: Dereferences to access x. Sets x to 20.' },
                        { line: 'cout << x;', explanation: 'Prints 20 (x was modified through pointer).' }
                    ],
                    quiz: {
                        question: 'What operator dereferences a pointer?',
                        options: ['&', '*', '@', '->'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'cpp-8',
            title: 'References',
            description: 'Working with references',
            xp: 40,
            steps: [
                {
                    topic: 'What are References?',
                    explanation: 'References are aliases for existing variables. Unlike pointers, references must be initialized when declared and cannot be changed to refer to something else. They\'re often used for function parameters.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 42;\n    int& ref = num;\n    ref = 100;\n    cout << num << endl;\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'int num = 42;', explanation: 'num: Integer variable with value 42.' },
                        { line: 'int& ref = num;', explanation: 'int&: Reference type. ref: Reference alias for num.' },
                        { line: 'ref = 100;', explanation: 'ref: Modifies num through reference. num becomes 100.' },
                        { line: 'cout << num << endl;', explanation: 'Prints 100 (num was modified via ref).' }
                    ],
                    quiz: {
                        question: 'What symbol declares a reference?',
                        options: ['*', '&', '@', '#'],
                        correct: 1
                    }
                },
                {
                    topic: 'References vs Pointers',
                    explanation: 'References are safer and easier to use than pointers. They cannot be null and always refer to a valid variable. Use references when you can, pointers when you need to.',
                    code: 'void modify(int& ref) {\n    ref = 20;\n}\n\nint main() {\n    int x = 10;\n    modify(x);\n    cout << x; // Prints 20\n}',
                    codeBreakdown: [
                        { line: 'void modify(int& ref)', explanation: 'int& ref: Reference parameter. Passes x by reference.' },
                        { line: '    ref = 20;', explanation: 'Modifies original x through reference.' },
                        { line: 'modify(x);', explanation: 'Calls function, passing x by reference.' }
                    ],
                    quiz: {
                        question: 'Can a reference be null?',
                        options: ['Yes', 'No', 'Sometimes', 'Only if initialized to null'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'cpp-9',
            title: 'Classes',
            description: 'Object-oriented programming',
            xp: 45,
            steps: [
                {
                    topic: 'Class Definition',
                    explanation: 'Classes in C++ are user-defined types that group data and functions. They have member variables (data) and member functions (methods). Classes support encapsulation, inheritance, and polymorphism.',
                    code: '#include <iostream>\nusing namespace std;\n\nclass Car {\npublic:\n    string color;\n    int speed;\n    \n    void drive() {\n        cout << "Driving..." << endl;\n    }\n};\n\nint main() {\n    Car myCar;\n    myCar.color = "Red";\n    myCar.drive();\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'class Car {', explanation: 'class: Defines class. Car: Class name (blueprint).' },
                        { line: 'public:', explanation: 'public: Access specifier. Members below are accessible outside class.' },
                        { line: '    string color;', explanation: 'color: Member variable (property).' },
                        { line: '    void drive() {', explanation: 'drive: Member function (method).' },
                        { line: 'Car myCar;', explanation: 'myCar: Object of Car class (instance).' },
                        { line: 'myCar.color = "Red";', explanation: 'myCar.color: Access member. Sets color to "Red".' }
                    ],
                    quiz: {
                        question: 'What keyword defines a class in C++?',
                        options: ['struct', 'class', 'object', 'type'],
                        correct: 1
                    }
                },
                {
                    topic: 'Public vs Private',
                    explanation: 'C++ uses access specifiers to control access to class members. public members can be accessed from outside the class, while private members can only be accessed within the class.',
                    code: 'class BankAccount {\nprivate:\n    double balance;\npublic:\n    void deposit(double amount) {\n        balance += amount;\n    }\n};',
                    codeBreakdown: [
                        { line: 'private:', explanation: 'private: Members below only accessible within class.' },
                        { line: '    double balance;', explanation: 'balance: Private member (cannot access directly).' },
                        { line: 'public:', explanation: 'public: Members below accessible from outside.' },
                        { line: '    void deposit(double amount)', explanation: 'deposit: Public method to modify private balance.' }
                    ],
                    quiz: {
                        question: 'Which access specifier allows external access?',
                        options: ['private', 'protected', 'public', 'internal'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'cpp-10',
            title: 'Vectors',
            description: 'Dynamic arrays',
            xp: 45,
            steps: [
                {
                    topic: 'Introduction to Vectors',
                    explanation: 'Vectors are dynamic arrays that can grow and shrink in size. They\'re part of the C++ Standard Template Library (STL). Unlike arrays, vectors don\'t require a fixed size at declaration.',
                    code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {10, 20, 30};\n    numbers.push_back(40);\n    cout << numbers[0] << endl;\n    return 0;\n}',
                    codeBreakdown: [
                        { line: '#include <vector>', explanation: 'Includes vector library from STL.' },
                        { line: 'vector<int> numbers = {10, 20, 30};', explanation: 'vector<int>: Vector of integers. {}: Initial values.' },
                        { line: 'numbers.push_back(40);', explanation: 'push_back(): Adds 40 to end of vector.' },
                        { line: 'cout << numbers[0] << endl;', explanation: 'numbers[0]: Access first element. Prints 10.' }
                    ],
                    quiz: {
                        question: 'What header file is needed for vectors?',
                        options: ['<array>', '<vector>', '<list>', '<dynamic>'],
                        correct: 1
                    }
                },
                {
                    topic: 'Vector Methods',
                    explanation: 'Vectors have many useful methods like push_back() to add elements, pop_back() to remove the last element, size() to get the current size, and empty() to check if it\'s empty.',
                    code: 'vector<int> nums;\nnums.push_back(5);\nnums.push_back(10);\nnums.pop_back();\nint s = nums.size();',
                    codeBreakdown: [
                        { line: 'vector<int> nums;', explanation: 'nums: Empty vector of integers.' },
                        { line: 'nums.push_back(5);', explanation: 'push_back(): Adds 5 to end.' },
                        { line: 'nums.push_back(10);', explanation: 'push_back(): Adds 10 to end.' },
                        { line: 'nums.pop_back();', explanation: 'pop_back(): Removes last element (10).' },
                        { line: 'int s = nums.size();', explanation: 'size(): Returns current size (1).' }
                    ],
                    quiz: {
                        question: 'What method adds an element to a vector?',
                        options: ['add()', 'push()', 'push_back()', 'insert()'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'cpp-11',
            title: 'Inheritance',
            description: 'Extending classes',
            xp: 45,
            steps: [
                {
                    topic: 'Class Inheritance',
                    explanation: 'Inheritance allows a class to inherit members from another class. The derived class inherits all public and protected members of the base class. Use the colon followed by the base class name to inherit.',
                    code: 'class Animal {\npublic:\n    void eat() {\n        cout << "Animal eats" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << "Dog barks" << endl;\n    }\n};',
                    codeBreakdown: [
                        { line: 'class Animal {', explanation: 'Animal: Base class (parent). Contains common members.' },
                        { line: 'class Dog : public Animal {', explanation: 'Dog: Derived class. : public Animal: Inherits from Animal.' },
                        { line: '    void bark() {', explanation: 'bark(): Dog-specific method (not in Animal).' }
                    ],
                    quiz: {
                        question: 'What symbol is used for inheritance in C++?',
                        options: ['extends', ':', 'inherits', '->'],
                        correct: 1
                    }
                },
                {
                    topic: 'Using Inherited Members',
                    explanation: 'Derived classes can use public members from the base class as if they were their own. This promotes code reuse and establishes an "is-a" relationship.',
                    code: 'int main() {\n    Dog myDog;\n    myDog.eat();  // Inherited from Animal\n    myDog.bark(); // Defined in Dog\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'Dog myDog;', explanation: 'Creates Dog object.' },
                        { line: 'myDog.eat();', explanation: 'eat(): Inherited from Animal class.' },
                        { line: 'myDog.bark();', explanation: 'bark(): Defined in Dog class itself.' }
                    ],
                    quiz: {
                        question: 'Can a derived class use base class public members?',
                        options: ['No', 'Yes', 'Only with using declaration', 'Only protected members'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'cpp-12',
            title: 'Templates',
            description: 'Generic programming',
            xp: 45,
            steps: [
                {
                    topic: 'Function Templates',
                    explanation: 'Templates allow you to write generic functions and classes that work with multiple data types. Function templates are defined with the template keyword followed by template parameters.',
                    code: 'template <typename T>\nT maximum(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << maximum(5, 10) << endl;\n    cout << maximum(3.5, 2.1) << endl;\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'template <typename T>', explanation: 'template: Keyword. typename T: Template parameter (type).' },
                        { line: 'T maximum(T a, T b)', explanation: 'T: Generic type. Works with any comparable type.' },
                        { line: 'maximum(5, 10)', explanation: 'T becomes int. Returns 10.' },
                        { line: 'maximum(3.5, 2.1)', explanation: 'T becomes double. Returns 3.5.' }
                    ],
                    quiz: {
                        question: 'What keyword declares a template?',
                        options: ['generic', 'template', 'typename', 'type'],
                        correct: 1
                    }
                },
                {
                    topic: 'Class Templates',
                    explanation: 'Class templates allow you to create generic classes that work with any data type. The STL containers like vector are implemented as class templates.',
                    code: 'template <typename T>\nclass Box {\nprivate:\n    T value;\npublic:\n    Box(T v) : value(v) {}\n    T getValue() { return value; }\n};\n\nBox<int> intBox(42);\nBox<double> doubleBox(3.14);',
                    codeBreakdown: [
                        { line: 'template <typename T>', explanation: 'Template parameter for class.' },
                        { line: 'class Box {', explanation: 'Box: Generic class name.' },
                        { line: 'Box<int> intBox(42)', explanation: 'Box<int>: Instantiates with int type.' },
                        { line: 'Box<double> doubleBox(3.14)', explanation: 'Box<double>: Instantiates with double type.' }
                    ],
                    quiz: {
                        question: 'What does Box<int> create?',
                        options: ['A Box of integers', 'A Box of doubles', 'A Box of strings', 'An error'],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: 'cpp-13',
            title: 'Exception Handling',
            description: 'Try-catch blocks',
            xp: 40,
            steps: [
                {
                    topic: 'Try-Catch Blocks',
                    explanation: 'C++ exception handling uses try-catch blocks. Code that might throw an exception goes in try. The catch block handles the exception. This prevents program crashes from errors.',
                    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    try {\n        int divisor = 0;\n        if (divisor == 0) {\n            throw "Division by zero!";\n        }\n    } catch (const char* msg) {\n        cout << msg << endl;\n    }\n    return 0;\n}',
                    codeBreakdown: [
                        { line: 'try {', explanation: 'try: Block containing code that might throw.' },
                        { line: '    throw "Division by zero!";', explanation: 'throw: Throws exception (string literal).' },
                        { line: '} catch (const char* msg) {', explanation: 'catch: Catches const char* exception. msg: Exception message.' },
                        { line: '    cout << msg << endl;', explanation: 'Prints exception message.' }
                    ],
                    quiz: {
                        question: 'What keyword throws an exception?',
                        options: ['raise', 'throw', 'error', 'except'],
                        correct: 1
                    }
                },
                {
                    topic: 'Standard Exceptions',
                    explanation: 'C++ provides standard exception classes in <stdexcept>. Common ones include std::runtime_error, std::invalid_argument, and std::out_of_range.',
                    code: '#include <stdexcept>\n#include <iostream>\nusing namespace std;\n\nint main() {\n    try {\n        throw runtime_error("Something went wrong");\n    } catch (const runtime_error& e) {\n        cout << e.what() << endl;\n    }\n}',
                    codeBreakdown: [
                        { line: '#include <stdexcept>', explanation: 'Includes standard exception classes.' },
                        { line: 'throw runtime_error("...")', explanation: 'runtime_error: Standard exception class.' },
                        { line: 'catch (const runtime_error& e)', explanation: 'Catches runtime_error by reference.' },
                        { line: 'e.what()', explanation: 'what(): Returns exception message string.' }
                    ],
                    quiz: {
                        question: 'What header contains standard exceptions?',
                        options: ['<exception>', '<stdexcept>', '<error>', '<throw>'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'cpp-14',
            title: 'STL Algorithms',
            description: 'Standard algorithms',
            xp: 40,
            steps: [
                {
                    topic: 'Sort Algorithm',
                    explanation: 'The STL provides powerful algorithms in <algorithm>. sort() sorts elements in a range. It uses efficient sorting algorithms (usually introsort).',
                    code: '#include <algorithm>\n#include <vector>\n#include <iostream>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {5, 2, 8, 1, 9};\n    sort(nums.begin(), nums.end());\n    for (int n : nums) cout << n << " ";\n}',
                    codeBreakdown: [
                        { line: '#include <algorithm>', explanation: 'Includes STL algorithms.' },
                        { line: 'sort(nums.begin(), nums.end())', explanation: 'sort(): Sorts range from begin to end.' },
                        { line: 'nums.begin()', explanation: 'begin(): Iterator to first element.' },
                        { line: 'nums.end()', explanation: 'end(): Iterator past last element.' }
                    ],
                    quiz: {
                        question: 'What header contains STL algorithms?',
                        options: ['<sort>', '<algorithm>', '<stl>', '<iterator>'],
                        correct: 1
                    }
                },
                {
                    topic: 'Find Algorithm',
                    explanation: 'The find() algorithm searches for a value in a range. It returns an iterator to the first matching element, or end() if not found.',
                    code: 'vector<int> nums = {1, 2, 3, 4, 5};\nauto it = find(nums.begin(), nums.end(), 3);\nif (it != nums.end()) {\n    cout << "Found: " << *it << endl;\n}',
                    codeBreakdown: [
                        { line: 'find(nums.begin(), nums.end(), 3)', explanation: 'find(): Searches for 3 in range.' },
                        { line: 'auto it', explanation: 'auto: Type deduction. it: Iterator to result.' },
                        { line: 'if (it != nums.end())', explanation: 'Checks if found (not equal to end).' },
                        { line: '*it', explanation: '*it: Dereferences iterator to get value.' }
                    ],
                    quiz: {
                        question: 'What does find() return if element not found?',
                        options: ['nullptr', 'end()', 'begin()', '-1'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    csharp: [
        {
            id: 'csharp-1',
            title: 'Hello World',
            description: 'Your first C# program',
            xp: 10,
            steps: [
                {
                    topic: 'Introduction to C#',
                    explanation: 'C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft. It\'s widely used for Windows applications and game development with Unity.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        Console.WriteLine("Hello, World!");\n    }\n}',
                    codeBreakdown: [
                        { line: 'using System;', explanation: 'using: Imports namespace. System: Contains Console class.' },
                        { line: 'class Program {', explanation: 'class: Defines class. Program: Class name.' },
                        { line: '    static void Main(string[] args) {', explanation: 'static: Belongs to class. void: No return. Main: Entry point. string[] args: Command line args.' },
                        { line: '        Console.WriteLine("Hello, World!");', explanation: 'Console: System class. WriteLine: Prints with new line.' }
                    ],
                    quiz: {
                        question: 'What company developed C#?',
                        options: ['Google', 'Microsoft', 'Apple', 'Oracle'],
                        correct: 1
                    }
                },
                {
                    topic: 'Console.WriteLine',
                    explanation: 'Console.WriteLine() is used to output text to the console in C#. It automatically adds a new line after the output. Use Console.Write() if you don\'t want a new line.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        Console.WriteLine("Hello");\n        Console.Write("World");\n    }\n}',
                    codeBreakdown: [
                        { line: 'Console.WriteLine("Hello");', explanation: 'WriteLine: Prints "Hello" with new line.' },
                        { line: 'Console.Write("World");', explanation: 'Write: Prints "World" without new line.' }
                    ],
                    quiz: {
                        question: 'What does WriteLine add after the output?',
                        options: ['Space', 'Tab', 'New line', 'Nothing'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'csharp-2',
            title: 'Variables',
            description: 'Declaring and using variables',
            xp: 15,
            steps: [
                {
                    topic: 'Variable Declaration',
                    explanation: 'C# is strongly typed like Java. You declare variables with their type. Common types include int, double, string, and bool. You can also use var for type inference.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int age = 25;\n        double price = 19.99;\n        string name = "Alice";\n        Console.WriteLine(name);\n    }\n}',
                    codeBreakdown: [
                        { line: 'int age = 25;', explanation: 'int: Integer type. age: Variable name. = 25: Assigns value.' },
                        { line: 'double price = 19.99;', explanation: 'double: Decimal type. price: Variable name. 19.99: Decimal value.' },
                        { line: 'string name = "Alice";', explanation: 'string: Text type. name: Variable name. "Alice": String value.' },
                        { line: 'Console.WriteLine(name);', explanation: 'Console.WriteLine: Outputs value of name ("Alice").' }
                    ],
                    quiz: {
                        question: 'What keyword allows type inference in C#?',
                        options: ['let', 'var', 'auto', 'dynamic'],
                        correct: 1
                    }
                },
                {
                    topic: 'String Interpolation',
                    explanation: 'C# supports string interpolation with the $ symbol. You can embed variables directly in strings using {variable} syntax, making code more readable.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        string name = "Alice";\n        int age = 25;\n        Console.WriteLine($"Name: {name}, Age: {age}");\n    }\n}',
                    codeBreakdown: [
                        { line: '$"Name: {name}, Age: {age}"', explanation: '$: Starts interpolation. {}: Embeds variable value.' },
                        { line: '{name}', explanation: 'Inserts value of name ("Alice").' },
                        { line: '{age}', explanation: 'Inserts value of age (25).' }
                    ],
                    quiz: {
                        question: 'What symbol starts a string interpolation in C#?',
                        options: ['#', '$', '@', '%'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-3',
            title: 'Conditionals',
            description: 'If-else statements',
            xp: 20,
            steps: [
                {
                    topic: 'If Statements',
                    explanation: 'C# if statements work like other C-style languages. The condition must be a boolean expression. Code blocks are defined with curly braces.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int age = 18;\n        if (age >= 18) {\n            Console.WriteLine("Adult");\n        }\n    }\n}',
                    codeBreakdown: [
                        { line: 'int age = 18;', explanation: 'age: Variable with value 18.' },
                        { line: 'if (age >= 18) {', explanation: 'if: Checks condition. age >= 18: Is age 18 or more? {}: Code block.' },
                        { line: '    Console.WriteLine("Adult");', explanation: 'Indented: Runs only if condition is true.' },
                        { line: '}', explanation: 'Closes if block.' }
                    ],
                    quiz: {
                        question: 'What must the condition in an if statement evaluate to?',
                        options: ['String', 'Number', 'Boolean', 'Object'],
                        correct: 2
                    }
                },
                {
                    topic: 'Switch Statements',
                    explanation: 'C# has powerful switch statements for handling multiple cases. Modern C# also supports pattern matching in switch expressions for more concise code.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int day = 3;\n        switch (day) {\n            case 1:\n                Console.WriteLine("Monday");\n                break;\n            case 2:\n                Console.WriteLine("Tuesday");\n                break;\n            default:\n                Console.WriteLine("Other day");\n                break;\n        }\n    }\n}',
                    codeBreakdown: [
                        { line: 'switch (day) {', explanation: 'switch: Evaluates day. {}: Contains cases.' },
                        { line: '    case 1:', explanation: 'case: Checks if day equals 1.' },
                        { line: '        Console.WriteLine("Monday");', explanation: 'Runs if case matches.' },
                        { line: '        break;', explanation: 'break: Exits switch (required in C#).' },
                        { line: '    default:', explanation: 'default: Runs if no cases match.' }
                    ],
                    quiz: {
                        question: 'What keyword exits a switch case in C#?',
                        options: ['exit', 'stop', 'break', 'return'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'csharp-4',
            title: 'Loops',
            description: 'For and while loops',
            xp: 25,
            steps: [
                {
                    topic: 'For Loops',
                    explanation: 'C# for loops follow the standard C-style syntax. C# also has foreach loops specifically for iterating over collections like arrays and lists.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        for (int i = 0; i < 5; i++) {\n            Console.WriteLine(i);\n        }\n    }\n}',
                    codeBreakdown: [
                        { line: 'for (int i = 0; i < 5; i++) {', explanation: 'int i = 0: Initialize. i < 5: Condition. i++: Increment after each iteration.' },
                        { line: '    Console.WriteLine(i);', explanation: 'Indented: Prints current value of i (0, 1, 2, 3, 4).' },
                        { line: '}', explanation: 'Closes for loop block.' }
                    ],
                    quiz: {
                        question: 'What loop type is best for collections in C#?',
                        options: ['while loop', 'for loop', 'foreach loop', 'do-while loop'],
                        correct: 2
                    }
                },
                {
                    topic: 'While Loops',
                    explanation: 'While loops in C# repeat code while a condition is true. They\'re useful when you don\'t know the number of iterations in advance.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int count = 0;\n        while (count < 5) {\n            Console.WriteLine(count);\n            count++;\n        }\n    }\n}',
                    codeBreakdown: [
                        { line: 'int count = 0;', explanation: 'count: Initialize counter at 0.' },
                        { line: 'while (count < 5) {', explanation: 'while: Loop while condition is true. count < 5: Check before each iteration.' },
                        { line: '    Console.WriteLine(count);', explanation: 'Prints current count value.' },
                        { line: '    count++;', explanation: 'count++: Increments count by 1. Eventually becomes 5, loop stops.' }
                    ],
                    quiz: {
                        question: 'When does a while loop check its condition?',
                        options: ['After each iteration', 'Before each iteration', 'Only once at start', 'Never'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-5',
            title: 'Arrays',
            description: 'Working with arrays',
            xp: 30,
            steps: [
                {
                    topic: 'Array Declaration',
                    explanation: 'Arrays in C# are fixed-size collections of the same type. You declare them with the type followed by square brackets. Arrays are zero-indexed.',
                    code: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int[] numbers = {1, 2, 3, 4, 5};\n        Console.WriteLine(numbers[0]); // First element\n    }\n}',
                    codeBreakdown: [
                        { line: 'int[] numbers = {1, 2, 3, 4, 5};', explanation: 'int[]: Array of integers. {}: Initial values.' },
                        { line: 'Console.WriteLine(numbers[0]);', explanation: 'numbers[0]: Access first element (index 0). Prints 1.' }
                    ],
                    quiz: {
                        question: 'What is the index of the first element in a C# array?',
                        options: ['1', '0', '-1', 'It depends'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-6',
            title: 'Lists',
            description: 'Dynamic collections',
            xp: 35,
            steps: [
                {
                    topic: 'Introduction to Lists',
                    explanation: 'Lists in C# are dynamic arrays that can grow and shrink. They\'re part of the System.Collections.Generic namespace and are more flexible than arrays.',
                    code: 'using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        List<int> numbers = new List<int>();\n        numbers.Add(1);\n        numbers.Add(2);\n        Console.WriteLine(numbers.Count);\n    }\n}',
                    codeBreakdown: [
                        { line: 'using System.Collections.Generic;', explanation: 'Imports generic collections namespace (contains List).' },
                        { line: 'List<int> numbers = new List<int>();', explanation: 'List<int>: Generic list of integers. new: Creates instance.' },
                        { line: 'numbers.Add(1);', explanation: 'Add(): Adds 1 to the list.' },
                        { line: 'Console.WriteLine(numbers.Count);', explanation: 'Count: Property returning number of elements (2).' }
                    ],
                    quiz: {
                        question: 'What namespace contains List<>?',
                        options: ['System.Collections', 'System.Collections.Generic', 'System.Data', 'System.Linq'],
                        correct: 1
                    }
                },
                {
                    topic: 'List Methods',
                    explanation: 'Lists have methods like Add() to add items, Remove() to remove items, and Count to get the number of elements. You can also access elements by index.',
                    code: 'List<string> names = new List<string>();\nnames.Add("Alice");\nnames.Add("Bob");\nnames.Remove("Alice");\nstring first = names[0];',
                    codeBreakdown: [
                        { line: 'names.Add("Alice");', explanation: 'Add(): Adds "Alice" to list.' },
                        { line: 'names.Add("Bob");', explanation: 'Add(): Adds "Bob" to list.' },
                        { line: 'names.Remove("Alice");', explanation: 'Remove(): Removes "Alice" from list.' },
                        { line: 'string first = names[0];', explanation: '[0]: Access first element ("Bob").' }
                    ],
                    quiz: {
                        question: 'What method adds an item to a List?',
                        options: ['push()', 'add()', 'insert()', 'append()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-7',
            title: 'Methods',
            description: 'Creating reusable code',
            xp: 35,
            steps: [
                {
                    topic: 'Method Declaration',
                    explanation: 'Methods in C# are declared with a return type, name, and parameters. The static keyword means the method belongs to the class, not an instance.',
                    code: 'using System;\n\nclass Program {\n    static void Greet() {\n        Console.WriteLine("Hello!");\n    }\n    \n    static void Main() {\n        Greet();\n    }\n}',
                    codeBreakdown: [
                        { line: 'static void Greet() {', explanation: 'static: Belongs to class. void: No return. Greet: Method name. (): No parameters.' },
                        { line: '    Console.WriteLine("Hello!");', explanation: 'Indented: Code that runs when method is called.' },
                        { line: '}', explanation: 'Closes Greet method.' },
                        { line: 'Greet()', explanation: 'Calls the Greet method from Main.' }
                    ],
                    quiz: {
                        question: 'What does static mean for a method?',
                        options: ['It cannot be changed', 'It belongs to the class', 'It\'s private', 'It returns nothing'],
                        correct: 1
                    }
                },
                {
                    topic: 'Methods with Return Values',
                    explanation: 'Methods can return values using the return statement. The return type must match the type of value being returned. void means no return value.',
                    code: 'static int Add(int a, int b) {\n    return a + b;\n}\n\nstatic void Main() {\n    int result = Add(5, 3);\n    Console.WriteLine(result);\n}',
                    codeBreakdown: [
                        { line: 'static int Add(int a, int b)', explanation: 'int: Returns integer. Add: Method name. a, b: Parameters.' },
                        { line: '    return a + b;', explanation: 'return: Returns sum of a and b.' },
                        { line: 'int result = Add(5, 3);', explanation: 'Add(5, 3): Calls method with arguments. Stores result (8).' }
                    ],
                    quiz: {
                        question: 'What keyword returns a value from a method?',
                        options: ['output', 'return', 'yield', 'exit'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-8',
            title: 'Classes',
            description: 'Object-oriented programming',
            xp: 40,
            steps: [
                {
                    topic: 'Class Declaration',
                    explanation: 'Classes in C# are blueprints for creating objects. They contain fields (variables) and methods (functions). Classes support encapsulation, inheritance, and polymorphism.',
                    code: 'public class Person {\n    public string Name;\n    public int Age;\n    \n    public void Greet() {\n        Console.WriteLine($"Hello, I\'m {Name}");\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class Person {', explanation: 'public: Accessible from anywhere. class: Defines class. Person: Class name.' },
                        { line: '    public string Name;', explanation: 'public: Accessible outside class. string: Text type. Name: Field name.' },
                        { line: '    public int Age;', explanation: 'int: Integer type. Age: Field name.' },
                        { line: '    public void Greet() {', explanation: 'Greet: Method name. void: No return value.' },
                        { line: '        Console.WriteLine($"Hello, I\'m {Name}");', explanation: 'Uses Name field in output.' }
                    ],
                    quiz: {
                        question: 'What is a class in C#?',
                        options: ['A variable', 'A blueprint for objects', 'A function', 'A namespace'],
                        correct: 1
                    }
                },
                {
                    topic: 'Creating Objects',
                    explanation: 'Objects are instances of classes created using the new keyword. You access class members using the dot operator.',
                    code: 'Person person = new Person();\nperson.Name = "Alice";\nperson.Age = 25;\nperson.Greet();',
                    codeBreakdown: [
                        { line: 'Person person = new Person();', explanation: 'Person: Type. person: Variable. new: Creates object. Person(): Constructor.' },
                        { line: 'person.Name = "Alice";', explanation: 'person.Name: Access Name field. = "Alice": Sets value.' },
                        { line: 'person.Age = 25;', explanation: 'person.Age: Access Age field. = 25: Sets value.' },
                        { line: 'person.Greet();', explanation: 'person.Greet(): Calls Greet method on person object.' }
                    ],
                    quiz: {
                        question: 'What keyword creates a new object?',
                        options: ['create', 'new', 'make', 'object'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-9',
            title: 'Properties',
            description: 'Encapsulating data',
            xp: 40,
            steps: [
                {
                    topic: 'Introduction to Properties',
                    explanation: 'Properties in C# provide a way to access and modify class fields while controlling access. They have get and set accessors that can contain logic.',
                    code: 'public class Person {\n    private string name;\n    \n    public string Name {\n        get { return name; }\n        set { name = value; }\n    }\n}',
                    codeBreakdown: [
                        { line: 'private string name;', explanation: 'private: Only accessible within class. name: Backing field.' },
                        { line: 'public string Name {', explanation: 'public: Accessible outside. Name: Property name.' },
                        { line: '    get { return name; }', explanation: 'get: Returns value when reading property.' },
                        { line: '    set { name = value; }', explanation: 'set: Sets value when writing. value: Assigned value.' }
                    ],
                    quiz: {
                        question: 'What do properties provide?',
                        options: ['Only storage', 'Controlled access to fields', 'Only methods', 'Nothing special'],
                        correct: 1
                    }
                },
                {
                    topic: 'Auto-Implemented Properties',
                    explanation: 'C# provides auto-implemented properties as a shorthand when no additional logic is needed in the accessors. The compiler automatically generates the backing field.',
                    code: 'public class Person {\n    public string Name { get; set; }\n    public int Age { get; set; }\n}',
                    codeBreakdown: [
                        { line: 'public string Name { get; set; }', explanation: 'get; set;: Auto-implemented. Compiler generates backing field.' },
                        { line: 'public int Age { get; set; }', explanation: 'Same pattern for Age property.' }
                    ],
                    quiz: {
                        question: 'What does the compiler generate for auto-properties?',
                        options: ['Nothing', 'The backing field', 'Only the getter', 'Only the setter'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-10',
            title: 'LINQ',
            description: 'Language Integrated Query',
            xp: 45,
            steps: [
                {
                    topic: 'Introduction to LINQ',
                    explanation: 'LINQ (Language Integrated Query) provides a consistent way to query data from different sources. It uses a SQL-like syntax to query collections, databases, and more.',
                    code: 'using System;\nusing System.Linq;\nusing System.Collections.Generic;\n\nList<int> numbers = {1, 2, 3, 4, 5};\nvar evenNumbers = numbers.Where(n => n % 2 == 0);\nforeach (var num in evenNumbers) {\n    Console.WriteLine(num);\n}',
                    codeBreakdown: [
                        { line: 'using System.Linq;', explanation: 'Imports LINQ namespace for query methods.' },
                        { line: 'numbers.Where(n => n % 2 == 0)', explanation: 'Where: Filters. n => n % 2 == 0: Lambda (n even?).' },
                        { line: 'foreach (var num in evenNumbers)', explanation: 'foreach: Iterates over filtered results.' }
                    ],
                    quiz: {
                        question: 'What does LINQ stand for?',
                        options: ['List Integrated Query', 'Language Integrated Query', 'Linked Query', 'Linear Query'],
                        correct: 1
                    }
                },
                {
                    topic: 'Common LINQ Methods',
                    explanation: 'Common LINQ methods include Where() for filtering, Select() for projection, OrderBy() for sorting, and FirstOrDefault() for getting a single element.',
                    code: 'var filtered = list.Where(x => x > 5);\nvar ordered = list.OrderBy(x => x);\nvar first = list.FirstOrDefault();\nvar selected = list.Select(x => x * 2);',
                    codeBreakdown: [
                        { line: 'Where(x => x > 5)', explanation: 'Where: Filters items greater than 5.' },
                        { line: 'OrderBy(x => x)', explanation: 'OrderBy: Sorts in ascending order.' },
                        { line: 'FirstOrDefault()', explanation: 'FirstOrDefault: Gets first item or default.' },
                        { line: 'Select(x => x * 2)', explanation: 'Select: Transforms each item (doubles it).' }
                    ],
                    quiz: {
                        question: 'What LINQ method filters data?',
                        options: ['Filter()', 'Where()', 'Select()', 'Find()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-11',
            title: 'Inheritance',
            description: 'Extending classes',
            xp: 45,
            steps: [
                {
                    topic: 'Class Inheritance',
                    explanation: 'Inheritance allows a class to inherit members from another class. The derived class inherits all non-private members. Use the colon followed by the base class name to inherit.',
                    code: 'public class Animal {\n    public void Eat() {\n        Console.WriteLine("Animal eats");\n    }\n}\n\npublic class Dog : Animal {\n    public void Bark() {\n        Console.WriteLine("Dog barks");\n    }\n}',
                    codeBreakdown: [
                        { line: 'public class Animal {', explanation: 'Animal: Base class (parent). Contains common members.' },
                        { line: 'public class Dog : Animal {', explanation: 'Dog: Derived class. : Animal: Inherits from Animal.' },
                        { line: '    public void Bark() {', explanation: 'Bark(): Dog-specific method (not in Animal).' }
                    ],
                    quiz: {
                        question: 'What symbol is used for inheritance in C#?',
                        options: ['extends', ':', 'inherits', '->'],
                        correct: 1
                    }
                },
                {
                    topic: 'Using Inherited Members',
                    explanation: 'Derived classes can use public and protected members from the base class. This promotes code reuse and establishes an "is-a" relationship.',
                    code: 'Dog myDog = new Dog();\nmyDog.Eat();  // Inherited from Animal\nmyDog.Bark(); // Defined in Dog',
                    codeBreakdown: [
                        { line: 'Dog myDog = new Dog();', explanation: 'Creates Dog object.' },
                        { line: 'myDog.Eat();', explanation: 'Eat(): Inherited from Animal class.' },
                        { line: 'myDog.Bark();', explanation: 'Bark(): Defined in Dog class itself.' }
                    ],
                    quiz: {
                        question: 'Can a derived class use base class public members?',
                        options: ['No', 'Yes', 'Only with base keyword', 'Only protected members'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'csharp-12',
            title: 'Interfaces',
            description: 'Defining contracts',
            xp: 45,
            steps: [
                {
                    topic: 'Creating Interfaces',
                    explanation: 'An interface defines a contract that classes must implement. It contains method signatures without implementations. Classes implement interfaces using the same syntax as inheritance.',
                    code: 'public interface IAnimal {\n    void MakeSound();\n    void Eat();\n}\n\npublic class Dog : IAnimal {\n    public void MakeSound() {\n        Console.WriteLine("Woof!");\n    }\n    \n    public void Eat() {\n        Console.WriteLine("Dog eats");\n    }\n}',
                    codeBreakdown: [
                        { line: 'public interface IAnimal {', explanation: 'interface: Defines contract. IAnimal: Interface name (I prefix convention).' },
                        { line: '    void MakeSound();', explanation: 'MakeSound(): Method signature (no body, just ;).' },
                        { line: 'public class Dog : IAnimal {', explanation: 'Dog: Class. : IAnimal: Must implement interface.' },
                        { line: '    public void MakeSound() {', explanation: 'MakeSound(): Implementation of interface method.' }
                    ],
                    quiz: {
                        question: 'What naming convention is common for interfaces?',
                        options: ['No convention', 'Prefix with I', 'Suffix with Interface', 'All caps'],
                        correct: 1
                    }
                },
                {
                    topic: 'Multiple Interfaces',
                    explanation: 'A class can implement multiple interfaces, separating the interface names with commas. This allows for flexible design patterns like multiple inheritance of behavior.',
                    code: 'public interface IFlyable {\n    void Fly();\n}\n\npublic interface ISwimmable {\n    void Swim();\n}\n\npublic class Duck : IFlyable, ISwimmable {\n    public void Fly() { Console.WriteLine("Flying"); }\n    public void Swim() { Console.WriteLine("Swimming"); }\n}',
                    codeBreakdown: [
                        { line: 'public class Duck : IFlyable, ISwimmable {', explanation: 'Duck: Implements two interfaces (comma-separated).' },
                        { line: '    public void Fly() {', explanation: 'Fly(): Implements IFlyable method.' },
                        { line: '    public void Swim() {', explanation: 'Swim(): Implements ISwimmable method.' }
                    ],
                    quiz: {
                        question: 'How many interfaces can a class implement?',
                        options: ['Only one', 'Two', 'Unlimited', 'None'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'csharp-13',
            title: 'Exception Handling',
            description: 'Try-catch blocks',
            xp: 40,
            steps: [
                {
                    topic: 'Try-Catch Blocks',
                    explanation: 'Exception handling in C# uses try-catch blocks. Code that might throw an exception goes in try. The catch block handles the exception. This prevents program crashes.',
                    code: 'try {\n    int result = 10 / 0;\n} catch (DivideByZeroException e) {\n    Console.WriteLine("Cannot divide by zero!");\n}',
                    codeBreakdown: [
                        { line: 'try {', explanation: 'try: Block containing code that might throw.' },
                        { line: '    int result = 10 / 0;', explanation: 'This throws DivideByZeroException.' },
                        { line: '} catch (DivideByZeroException e) {', explanation: 'catch: Handles specific exception. e: Exception object.' },
                        { line: '    Console.WriteLine("...");', explanation: 'Prints error message instead of crashing.' }
                    ],
                    quiz: {
                        question: 'What block contains code that might throw an exception?',
                        options: ['catch', 'try', 'finally', 'throw'],
                        correct: 1
                    }
                },
                {
                    topic: 'Finally Block',
                    explanation: 'The finally block always executes, whether an exception occurred or not. It\'s used for cleanup operations like closing files or database connections.',
                    code: 'try {\n    // Code that might throw\n} catch (Exception e) {\n    // Handle exception\n} finally {\n    Console.WriteLine("This always runs");\n}',
                    codeBreakdown: [
                        { line: 'try {', explanation: 'try: Attempt code that might fail.' },
                        { line: '} catch (Exception e) {', explanation: 'catch: Handle any exception.' },
                        { line: '} finally {', explanation: 'finally: Always runs, regardless of exception.' },
                        { line: '    Console.WriteLine("This always runs");', explanation: 'This executes in all cases.' }
                    ],
                    quiz: {
                        question: 'When does the finally block execute?',
                        options: ['Only on exception', 'Only on success', 'Always', 'Never'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'csharp-14',
            title: 'Async/Await',
            description: 'Asynchronous programming',
            xp: 45,
            steps: [
                {
                    topic: 'Introduction to Async',
                    explanation: 'Async/await is a pattern for asynchronous programming in C#. The async keyword marks a method as asynchronous, and await pauses execution until a Task completes.',
                    code: 'public async Task DownloadDataAsync() {\n    await Task.Delay(1000);\n    Console.WriteLine("Data downloaded!");\n}\n\nawait DownloadDataAsync();',
                    codeBreakdown: [
                        { line: 'public async Task', explanation: 'async: Marks method as async. Task: Return type for async methods.' },
                        { line: '    await Task.Delay(1000);', explanation: 'await: Pauses until Task completes. Delay: Simulates async work.' },
                        { line: 'await DownloadDataAsync();', explanation: 'Calls async method and waits for completion.' }
                    ],
                    quiz: {
                        question: 'What return type do async methods typically use?',
                        options: ['void', 'Task', 'int', 'string'],
                        correct: 1
                    }
                },
                {
                    topic: 'Creating Tasks',
                    explanation: 'Tasks represent asynchronous operations. You can create tasks with Task.Run() to run code on a thread pool thread, or use Task.Delay() for delays.',
                    code: 'Task<int> task = Task.Run(() => {\n    return 42;\n});\n\nint result = await task;\nConsole.WriteLine(result);',
                    codeBreakdown: [
                        { line: 'Task.Run(() => { return 42; })', explanation: 'Task.Run: Runs lambda on thread pool. Returns Task<int>.' },
                        { line: 'int result = await task', explanation: 'await: Waits for task to complete. result: Gets return value.' },
                        { line: 'Console.WriteLine(result)', explanation: 'Prints 42 (the task result).' }
                    ],
                    quiz: {
                        question: 'What does Task.Run() do?',
                        options: ['Runs code synchronously', 'Runs code on thread pool', 'Creates a delay', 'Throws an exception'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    ruby: [
        {
            id: 'ruby-1',
            title: 'Hello World',
            description: 'Your first Ruby program',
            xp: 10,
            steps: [
                {
                    topic: 'Introduction to Ruby',
                    explanation: 'Ruby is a dynamic, object-oriented programming language known for its elegant syntax and focus on programmer happiness. It was created by Yukihiro Matsumoto (Matz) in 1995.',
                    code: 'puts "Hello, World!"',
                    codeBreakdown: [
                        { line: 'puts "Hello, World!"', explanation: 'puts: Output method. "Hello, World!": Text to print. Adds new line automatically.' }
                    ],
                    quiz: {
                        question: 'What function outputs text in Ruby?',
                        options: ['print()', 'puts()', 'console.log()', 'echo()'],
                        correct: 1
                    }
                },
                {
                    topic: 'puts vs print',
                    explanation: 'Ruby has two main output methods: puts (adds a new line) and print (doesn\'t add a new line). Both are commonly used for different purposes.',
                    code: 'puts "Hello"\nprint "World"\nputs "!"',
                    codeBreakdown: [
                        { line: 'puts "Hello"', explanation: 'puts: Prints "Hello" with new line.' },
                        { line: 'print "World"', explanation: 'print: Prints "World" without new line.' },
                        { line: 'puts "!"', explanation: 'puts: Prints "!" on new line.' }
                    ],
                    quiz: {
                        question: 'What does puts do that print doesn\'t?',
                        options: ['Adds indentation', 'Adds a new line', 'Changes color', 'Nothing'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-2',
            title: 'Variables',
            description: 'Working with variables',
            xp: 15,
            steps: [
                {
                    topic: 'Variable Naming',
                    explanation: 'Ruby variables are dynamically typed - you don\'t need to declare types. Local variables start with lowercase letters or underscores. Conventions use snake_case.',
                    code: 'name = "Alice"\nage = 25\nis_student = true\nputs name',
                    codeBreakdown: [
                        { line: 'name = "Alice"', explanation: 'name: Variable (lowercase). "Alice": String value.' },
                        { line: 'age = 25', explanation: 'age: Variable. 25: Integer value (no type declaration needed).' },
                        { line: 'is_student = true', explanation: 'is_student: Variable. true: Boolean value.' },
                        { line: 'puts name', explanation: 'puts: Outputs value of name ("Alice").' }
                    ],
                    quiz: {
                        question: 'How do local variables start in Ruby?',
                        options: ['Uppercase', 'Lowercase', 'With $', 'With @'],
                        correct: 1
                    }
                },
                {
                    topic: 'String Interpolation',
                    explanation: 'Ruby uses #{} for string interpolation. You can embed variables and expressions directly in double-quoted strings.',
                    code: 'name = "Alice"\nage = 25\nputs "Name: #{name}, Age: #{age}"',
                    codeBreakdown: [
                        { line: '"Name: #{name}, Age: #{age}"', explanation: '#{}: Interpolates variable value. Double quotes required.' },
                        { line: '#{name}', explanation: 'Inserts value of name ("Alice").' },
                        { line: '#{age}', explanation: 'Inserts value of age (25).' }
                    ],
                    quiz: {
                        question: 'What symbol is used for string interpolation in Ruby?',
                        options: ['#', '$', '@', '%'],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: 'ruby-3',
            title: 'Conditionals',
            description: 'If-else statements',
            xp: 20,
            steps: [
                {
                    topic: 'If Statements',
                    explanation: 'Ruby if statements can be written with or without parentheses. Ruby also allows you to put the if at the end of a line for concise conditional execution.',
                    code: 'age = 18\nif age >= 18\n  puts "Adult"\nend\n\nputs "Adult" if age >= 18',
                    codeBreakdown: [
                        { line: 'if age >= 18', explanation: 'if: Checks condition. age >= 18: Is age 18 or more?' },
                        { line: '  puts "Adult"', explanation: 'Indented: Runs if condition is true. 2 spaces = 1 indent level.' },
                        { line: 'end', explanation: 'end: Closes if block (Ruby uses end, not braces).' },
                        { line: 'puts "Adult" if age >= 18', explanation: 'Modifier form: if at end. More concise.' }
                    ],
                    quiz: {
                        question: 'Where can you place "if" in Ruby?',
                        options: ['Only at the start', 'Only at the end', 'Both start and end', 'In the middle'],
                        correct: 2
                    }
                },
                {
                    topic: 'Unless',
                    explanation: 'Ruby has an "unless" keyword which is the opposite of "if". It executes code when the condition is false. This can make code more readable.',
                    code: 'age = 15\nunless age >= 18\n  puts "Not an adult"\nend',
                    codeBreakdown: [
                        { line: 'unless age >= 18', explanation: 'unless: Runs if condition is false (age < 18).' },
                        { line: '  puts "Not an adult"', explanation: 'Indented: Runs because age (15) is less than 18.' },
                        { line: 'end', explanation: 'end: Closes unless block.' }
                    ],
                    quiz: {
                        question: 'What does "unless" do in Ruby?',
                        options: ['Same as if', 'Opposite of if', 'Loops forever', 'Checks multiple conditions'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-4',
            title: 'Loops',
            description: 'Iterating with loops',
            xp: 25,
            steps: [
                {
                    topic: 'Times Loop',
                    explanation: 'Ruby has a simple times method for repeating code a specific number of times. It\'s more readable than traditional for loops.',
                    code: '5.times do |i|\n  puts i\nend',
                    codeBreakdown: [
                        { line: '5.times do |i|', explanation: '5.times: Repeat 5 times. do: Starts block. |i|: Loop variable (0,1,2,3,4).' },
                        { line: '  puts i', explanation: 'Indented: Prints current value of i.' },
                        { line: 'end', explanation: 'end: Closes times block.' }
                    ],
                    quiz: {
                        question: 'What method repeats code a specific number of times?',
                        options: ['repeat()', 'loop()', 'times()', 'each()'],
                        correct: 2
                    }
                },
                {
                    topic: 'Each Loop',
                    explanation: 'The each method is Ruby\'s preferred way to iterate over collections. It\'s more readable and idiomatic than traditional for loops.',
                    code: '[1, 2, 3].each do |num|\n  puts num\nend',
                    codeBreakdown: [
                        { line: '[1, 2, 3].each do |num|', explanation: '[1, 2, 3]: Array. each: Iterates. |num|: Loop variable.' },
                        { line: '  puts num', explanation: 'Indented: Prints current element.' },
                        { line: 'end', explanation: 'end: Closes each block.' }
                    ],
                    quiz: {
                        question: 'What method is preferred for iterating in Ruby?',
                        options: ['for', 'while', 'each', 'loop'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'ruby-5',
            title: 'Methods',
            description: 'Creating methods',
            xp: 30,
            steps: [
                {
                    topic: 'Defining Methods',
                    explanation: 'Methods in Ruby are defined with the def keyword and end with end. They don\'t require explicit return statements - the last evaluated expression is returned automatically.',
                    code: 'def greet(name)\n  "Hello, #{name}!"\nend\n\nputs greet("Alice")',
                    codeBreakdown: [
                        { line: 'def greet(name)', explanation: 'def: Defines method. greet: Method name. name: Parameter.' },
                        { line: '  "Hello, #{name}!"', explanation: 'Last expression is automatically returned. Interpolates name.' },
                        { line: 'end', explanation: 'end: Closes method definition.' },
                        { line: 'puts greet("Alice")', explanation: 'greet("Alice"): Calls method with argument. puts: Prints result.' }
                    ],
                    quiz: {
                        question: 'What keyword defines a method in Ruby?',
                        options: ['function', 'method', 'def', 'create'],
                        correct: 2
                    }
                },
                {
                    topic: 'Default Arguments',
                    explanation: 'Ruby methods can have default argument values. If no argument is provided, the default value is used. This makes methods more flexible.',
                    code: 'def greet(name = "World")\n  "Hello, #{name}!"\nend\n\nputs greet\nputs greet("Alice")',
                    codeBreakdown: [
                        { line: 'def greet(name = "World")', explanation: 'name = "World": Default value if no argument provided.' },
                        { line: 'puts greet', explanation: 'greet: Called without argument. Uses default "World".' },
                        { line: 'puts greet("Alice")', explanation: 'greet("Alice"): Called with argument. Uses "Alice".' }
                    ],
                    quiz: {
                        question: 'How do you set a default argument value in Ruby?',
                        options: ['name = default', 'name: default', 'name => default', 'name << default'],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: 'ruby-6',
            title: 'Arrays',
            description: 'Working with arrays',
            xp: 35,
            steps: [
                {
                    topic: 'Creating Arrays',
                    explanation: 'Arrays in Ruby are ordered collections of objects. You can create them using square brackets [] or the Array.new method. Ruby arrays can hold any type of object.',
                    code: 'fruits = ["apple", "banana", "cherry"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = ["text", 42, true]\nputs fruits[0]',
                    codeBreakdown: [
                        { line: 'fruits = ["apple", "banana", "cherry"]', explanation: '[]: Creates array. Items separated by commas.' },
                        { line: 'numbers = [1, 2, 3, 4, 5]', explanation: 'numbers: Array of integers.' },
                        { line: 'mixed = ["text", 42, true]', explanation: 'mixed: Array with mixed types (string, number, boolean).' },
                        { line: 'puts fruits[0]', explanation: 'fruits[0]: Access first element (index 0). Prints "apple".' }
                    ],
                    quiz: {
                        question: 'How do you create an array in Ruby?',
                        options: ['Using parentheses ()', 'Using square brackets []', 'Using curly braces {}', 'Using angle brackets <>'],
                        correct: 1
                    }
                },
                {
                    topic: 'Array Methods',
                    explanation: 'Ruby arrays have many methods: push adds items, pop removes the last, shift removes the first, and length returns the size. Ruby methods are very readable.',
                    code: 'arr = [1, 2, 3]\narr.push(4)\narr.pop\narr.shift\nputs arr.length',
                    codeBreakdown: [
                        { line: 'arr = [1, 2, 3]', explanation: 'Initial array with 3 items.' },
                        { line: 'arr.push(4)', explanation: 'push(): Adds 4 to end of array.' },
                        { line: 'arr.pop', explanation: 'pop(): Removes last element (4).' },
                        { line: 'arr.shift', explanation: 'shift(): Removes first element (1).' },
                        { line: 'puts arr.length', explanation: 'length: Returns array size (now 1).' }
                    ],
                    quiz: {
                        question: 'What method adds an item to the end of an array?',
                        options: ['add()', 'push()', 'append()', 'insert()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-7',
            title: 'Hashes',
            description: 'Key-value pairs',
            xp: 35,
            steps: [
                {
                    topic: 'Creating Hashes',
                    explanation: 'Hashes in Ruby are collections of key-value pairs. They\'re similar to dictionaries in Python. You create them with curly braces {} using the rocket => syntax.',
                    code: 'person = {\n  "name" => "Alice",\n  "age" => 25,\n  "city" => "NYC"\n}\nputs person["name"]',
                    codeBreakdown: [
                        { line: 'person = {', explanation: '{}: Creates hash. person: Variable name.' },
                        { line: '  "name" => "Alice",', explanation: '"name": Key (string). =>: Rocket operator. "Alice": Value.' },
                        { line: '  "age" => 25,', explanation: 'age: Key. 25: Value (integer).' },
                        { line: 'puts person["name"]', explanation: 'person["name"]: Access value by key. Prints "Alice".' }
                    ],
                    quiz: {
                        question: 'What symbol separates keys and values in hashes?',
                        options: ['=', ':', '=>', '->'],
                        correct: 2
                    }
                },
                {
                    topic: 'Modern Hash Syntax',
                    explanation: 'Ruby also supports a modern hash syntax using colons for symbol keys, which is more concise. Symbols are like immutable strings.',
                    code: 'person = {\n  name: "Alice",\n  age: 25,\n  city: "NYC"\n}\nputs person[:name]',
                    codeBreakdown: [
                        { line: 'name: "Alice"', explanation: 'name: Symbol key (shorthand for :name). "Alice": Value.' },
                        { line: 'age: 25', explanation: 'age: Symbol key. 25: Value.' },
                        { line: 'puts person[:name]', explanation: 'person[:name]: Access using symbol key.' }
                    ],
                    quiz: {
                        question: 'What symbol is used for modern hash keys?',
                        options: ['"', ':', '#', '@'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-8',
            title: 'Blocks',
            description: 'Ruby blocks',
            xp: 40,
            steps: [
                {
                    topic: 'Introduction to Blocks',
                    explanation: 'Blocks are anonymous functions in Ruby that can be passed to methods. They\'re defined with do...end or curly braces {}. Blocks are a core Ruby feature.',
                    code: '3.times do |i|\n  puts "Count: #{i}"\nend\n\n[1, 2, 3].each { |n| puts n }',
                    codeBreakdown: [
                        { line: '3.times do |i|', explanation: 'do...end: Multi-line block. |i|: Block parameter.' },
                        { line: '  puts "Count: #{i}"', explanation: 'Indented: Block body code.' },
                        { line: '[1, 2, 3].each { |n| puts n }', explanation: '{}: Single-line block. More concise.' }
                    ],
                    quiz: {
                        question: 'What are blocks in Ruby?',
                        options: ['Named functions', 'Anonymous functions', 'Variables', 'Classes'],
                        correct: 1
                    }
                },
                {
                    topic: 'Block Parameters',
                    explanation: 'Blocks can accept parameters between vertical bars | |. These parameters are like function arguments. The yield keyword calls the block passed to a method.',
                    code: 'def greet\n  yield "Alice"\nend\n\ngreet { |name| puts "Hello, #{name}" }',
                    codeBreakdown: [
                        { line: 'def greet', explanation: 'greet: Method that accepts a block.' },
                        { line: '  yield "Alice"', explanation: 'yield: Calls passed block with argument "Alice".' },
                        { line: 'greet { |name| puts "Hello, #{name}" }', explanation: '{ |name| ... }: Block passed to greet. name receives "Alice".' }
                    ],
                    quiz: {
                        question: 'What keyword calls a block inside a method?',
                        options: ['call', 'yield', 'block', 'invoke'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-9',
            title: 'Classes',
            description: 'Object-oriented Ruby',
            xp: 40,
            steps: [
                {
                    topic: 'Defining Classes',
                    explanation: 'Classes in Ruby are defined with the class keyword. They contain methods and instance variables. Instance variables start with @ and are available throughout the class.',
                    code: 'class Person\n  def initialize(name)\n    @name = name\n  end\n  \n  def greet\n    puts "Hello, #{@name}"\n  end\nend',
                    codeBreakdown: [
                        { line: 'class Person', explanation: 'class: Defines class. Person: Class name.' },
                        { line: '  def initialize(name)', explanation: 'initialize: Constructor method. Runs on new(). name: Parameter.' },
                        { line: '    @name = name', explanation: '@name: Instance variable (accessible throughout class).' },
                        { line: '  def greet', explanation: 'greet: Instance method.' },
                        { line: '    puts "Hello, #{@name}"', explanation: '@name: Accesses instance variable.' },
                        { line: 'end', explanation: 'end: Closes class definition.' }
                    ],
                    quiz: {
                        question: 'What symbol starts instance variables in Ruby?',
                        options: ['$', '@', '@@', ':'],
                        correct: 1
                    }
                },
                {
                    topic: 'Creating Objects',
                    explanation: 'You create objects using the new method. The initialize method is the constructor that runs when you create a new object.',
                    code: 'person = Person.new("Alice")\nperson.greet',
                    codeBreakdown: [
                        { line: 'Person.new("Alice")', explanation: 'Person: Class name. new: Creates object. "Alice": Argument to initialize.' },
                        { line: 'person.greet', explanation: 'person: Object instance. greet: Calls method on object.' }
                    ],
                    quiz: {
                        question: 'What method creates a new object?',
                        options: ['create()', 'new()', 'make()', 'build()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-10',
            title: 'Modules',
            description: 'Mixins and namespaces',
            xp: 45,
            steps: [
                {
                    topic: 'Introduction to Modules',
                    explanation: 'Modules in Ruby are used for namespacing and as mixins. They\'re defined with the module keyword. Modules can\'t be instantiated, but you can include their methods in classes.',
                    code: 'module Greetings\n  def hello\n    puts "Hello!"\n  end\nend\n\nclass Person\n  include Greetings\nend',
                    codeBreakdown: [
                        { line: 'module Greetings', explanation: 'module: Defines module. Greetings: Module name.' },
                        { line: '  def hello', explanation: 'hello: Method defined in module.' },
                        { line: 'class Person', explanation: 'Person: Class that will use module.' },
                        { line: '  include Greetings', explanation: 'include: Mixes in Greetings module methods.' }
                    ],
                    quiz: {
                        question: 'What keyword includes a module in a class?',
                        options: ['import', 'include', 'require', 'use'],
                        correct: 1
                    }
                },
                {
                    topic: 'Mixins',
                    explanation: 'Ruby uses modules as mixins to share behavior between classes without inheritance. This is more flexible than multiple inheritance found in other languages.',
                    code: 'module Loggable\n  def log(message)\n    puts "LOG: #{message}"\n  end\nend\n\nclass User\n  include Loggable\nend',
                    codeBreakdown: [
                        { line: 'module Loggable', explanation: 'Loggable: Module with shared behavior.' },
                        { line: '  def log(message)', explanation: 'log: Method to be shared across classes.' },
                        { line: 'class User', explanation: 'User: Class that needs logging behavior.' },
                        { line: '  include Loggable', explanation: 'include: Mixes in Loggable module (User now has log method).' }
                    ],
                    quiz: {
                        question: 'What are modules used for when included in classes?',
                        options: ['Namespacing only', 'Mixins for sharing behavior', 'Storing constants', 'Nothing'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-11',
            title: 'Inheritance',
            description: 'Class inheritance',
            xp: 45,
            steps: [
                {
                    topic: 'Class Inheritance',
                    explanation: 'Ruby classes can inherit from other classes using the < operator. The child class inherits all methods from the parent class. This promotes code reuse.',
                    code: 'class Animal\n  def speak\n    puts "Some sound"\n  end\nend\n\nclass Dog < Animal\n  def speak\n    puts "Woof!"\n  end\nend',
                    codeBreakdown: [
                        { line: 'class Animal', explanation: 'Animal: Parent class (superclass). Contains common methods.' },
                        { line: 'class Dog < Animal', explanation: 'Dog: Child class. < Animal: Inherits from Animal.' },
                        { line: '  def speak', explanation: 'speak: Overrides parent method with dog-specific behavior.' }
                    ],
                    quiz: {
                        question: 'What symbol is used for inheritance in Ruby?',
                        options: ['extends', '<', ':', 'inherits'],
                        correct: 1
                    }
                },
                {
                    topic: 'Using super',
                    explanation: 'The super keyword calls the parent class\'s method of the same name. This allows you to extend parent behavior instead of completely overriding it.',
                    code: 'class Animal\n  def initialize(name)\n    @name = name\n  end\nend\n\nclass Dog < Animal\n  def initialize(name, breed)\n    super(name)\n    @breed = breed\n  end\nend',
                    codeBreakdown: [
                        { line: 'class Animal', explanation: 'Animal: Parent class with initialize method.' },
                        { line: 'class Dog < Animal', explanation: 'Dog: Child class with additional parameter.' },
                        { line: '    super(name)', explanation: 'super: Calls parent initialize with name parameter.' },
                        { line: '    @breed = breed', explanation: '@breed: Child-specific instance variable.' }
                    ],
                    quiz: {
                        question: 'What keyword calls the parent method?',
                        options: ['parent', 'super', 'base', 'inherit'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-12',
            title: 'Exception Handling',
            description: 'Begin-rescue blocks',
            xp: 40,
            steps: [
                {
                    topic: 'Begin-Rescue Blocks',
                    explanation: 'Ruby uses begin-rescue blocks for exception handling. Code that might raise an exception goes in begin. The rescue block handles the exception.',
                    code: 'begin\n  result = 10 / 0\nrescue ZeroDivisionError => e\n  puts "Cannot divide by zero!"\n  puts e.message\nend',
                    codeBreakdown: [
                        { line: 'begin', explanation: 'begin: Block containing code that might raise exception.' },
                        { line: '  result = 10 / 0', explanation: 'This raises ZeroDivisionError.' },
                        { line: 'rescue ZeroDivisionError => e', explanation: 'rescue: Catches specific exception. e: Exception object.' },
                        { line: '  puts e.message', explanation: 'e.message: Exception error message.' }
                    ],
                    quiz: {
                        question: 'What block contains code that might raise an exception?',
                        options: ['try', 'begin', 'catch', 'rescue'],
                        correct: 1
                    }
                },
                {
                    topic: 'Ensure Block',
                    explanation: 'The ensure block always executes, whether an exception occurred or not. It\'s used for cleanup operations like closing files.',
                    code: 'begin\n  # Code that might raise\nrescue\n  # Handle exception\nensure\n  puts "This always runs"\nend',
                    codeBreakdown: [
                        { line: 'begin', explanation: 'begin: Attempt code that might fail.' },
                        { line: 'rescue', explanation: 'rescue: Handle any exception.' },
                        { line: 'ensure', explanation: 'ensure: Always runs, regardless of exception.' },
                        { line: '  puts "This always runs"', explanation: 'This executes in all cases.' }
                    ],
                    quiz: {
                        question: 'When does the ensure block execute?',
                        options: ['Only on exception', 'Only on success', 'Always', 'Never'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'ruby-13',
            title: 'Procs & Lambdas',
            description: 'Anonymous functions',
            xp: 45,
            steps: [
                {
                    topic: 'Procs',
                    explanation: 'Procs are blocks of code that can be stored in variables and passed around. They\'re created with Proc.new or the proc keyword. Procs check the number of arguments.',
                    code: 'my_proc = Proc.new { |x| x * 2 }\nputs my_proc.call(5)\n\nanother = proc { |a, b| a + b }\nputs another.call(3, 4)',
                    codeBreakdown: [
                        { line: 'Proc.new { |x| x * 2 }', explanation: 'Proc.new: Creates proc. |x|: Parameter. x * 2: Return value.' },
                        { line: 'my_proc.call(5)', explanation: 'call: Executes proc with argument 5. Returns 10.' },
                        { line: 'proc { |a, b| a + b }', explanation: 'proc: Shorthand for Proc.new. Two parameters.' },
                        { line: 'another.call(3, 4)', explanation: 'call: Executes with 3 and 4. Returns 7.' }
                    ],
                    quiz: {
                        question: 'How do you create a Proc?',
                        options: ['Proc.new', 'create proc', 'new Proc', 'make proc'],
                        correct: 0
                    }
                },
                {
                    topic: 'Lambdas',
                    explanation: 'Lambdas are similar to procs but have stricter argument checking and different return behavior. They\'re created with the lambda keyword or -> syntax.',
                    code: 'my_lambda = lambda { |x| x * 2 }\nputs my_lambda.call(5)\n\nshort = ->(x) { x * 2 }\nputs short.call(5)',
                    codeBreakdown: [
                        { line: 'lambda { |x| x * 2 }', explanation: 'lambda: Creates lambda. Stricter argument checking.' },
                        { line: 'my_lambda.call(5)', explanation: 'call: Executes lambda. Returns 10.' },
                        { line: '->(x) { x * 2 }', explanation: '->: Stabby lambda syntax. More concise.' },
                        { line: 'short.call(5)', explanation: 'call: Executes stabby lambda. Returns 10.' }
                    ],
                    quiz: {
                        question: 'What is the stabby lambda syntax?',
                        options: ['=>', '->', '>>', '=>>'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'ruby-14',
            title: 'File I/O',
            description: 'Reading and writing files',
            xp: 40,
            steps: [
                {
                    topic: 'Reading Files',
                    explanation: 'Ruby provides simple ways to read files. File.read reads the entire file at once, while File.foreach reads line by line for large files.',
                    code: 'content = File.read("file.txt")\nputs content\n\nFile.foreach("file.txt") do |line|\n  puts line\nend',
                    codeBreakdown: [
                        { line: 'File.read("file.txt")', explanation: 'File.read: Reads entire file content. Returns string.' },
                        { line: 'File.foreach("file.txt")', explanation: 'File.foreach: Iterates over each line. Memory efficient.' },
                        { line: 'do |line|', explanation: '|line|: Block parameter for each line.' }
                    ],
                    quiz: {
                        question: 'What method reads an entire file at once?',
                        options: ['File.open', 'File.read', 'File.get', 'File.load'],
                        correct: 1
                    }
                },
                {
                    topic: 'Writing Files',
                    explanation: 'You can write to files using File.write for simple cases or File.open with a mode for more control. Modes include "w" for write (overwrite) and "a" for append.',
                    code: 'File.write("file.txt", "Hello, World!")\n\nFile.open("file.txt", "a") do |file|\n  file.puts "New line"\nend',
                    codeBreakdown: [
                        { line: 'File.write("file.txt", "Hello, World!")', explanation: 'File.write: Writes string to file. Overwrites if exists.' },
                        { line: 'File.open("file.txt", "a")', explanation: '"a": Append mode. Adds to end of file.' },
                        { line: '  file.puts "New line"', explanation: 'file.puts: Writes line with newline to file.' },
                        { line: 'end', explanation: 'end: Automatically closes file.' }
                    ],
                    quiz: {
                        question: 'What mode appends to a file?',
                        options: ['"w"', '"a"', '"r"', '"x"'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    go: [
        {
            id: 'go-1',
            title: 'Hello World',
            description: 'Your first Go program',
            xp: 10,
            steps: [
                {
                    topic: 'Introduction to Go',
                    explanation: 'Go (also called Golang) is a modern programming language created by Google. It\'s designed to be simple, efficient, and great for building scalable applications. Go is known for its fast compilation and built-in concurrency support.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
                    codeBreakdown: [
                        { line: 'package main', explanation: 'package: Declares package. main: Entry point package (executable).' },
                        { line: 'import "fmt"', explanation: 'import: Imports package. "fmt": Formatted I/O package.' },
                        { line: 'func main() {', explanation: 'func: Defines function. main: Entry point. (): No parameters.' },
                        { line: '    fmt.Println("Hello, World!")', explanation: 'fmt.Println: Prints with new line. "Hello, World!": Text.' }
                    ],
                    quiz: {
                        question: 'Which company created Go?',
                        options: ['Facebook', 'Google', 'Microsoft', 'Apple'],
                        correct: 1
                    }
                },
                {
                    topic: 'Understanding fmt.Println',
                    explanation: 'fmt.Println() is the standard way to output text in Go. fmt is a package that implements formatted I/O, and Println prints to standard output with a newline. You must import packages before using them.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello")\n    fmt.Println("World")\n}',
                    codeBreakdown: [
                        { line: 'fmt.Println("Hello")', explanation: 'fmt.Println: Prints "Hello" with new line.' },
                        { line: 'fmt.Println("World")', explanation: 'Prints "World" on next line.' }
                    ],
                    quiz: {
                        question: 'What does fmt stand for in Go?',
                        options: ['Format', 'Formatted', 'Function', 'File'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-2',
            title: 'Variables',
            description: 'Declaring and using variables',
            xp: 15,
            steps: [
                {
                    topic: 'Variable Declaration',
                    explanation: 'Go has multiple ways to declare variables. You can use var with explicit type, var with type inference, or the short declaration := inside functions. Go is statically typed but makes type inference easy.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    var name string = "Alice"\n    var age = 25\n    city := "NYC"\n    fmt.Println(name, age, city)\n}',
                    codeBreakdown: [
                        { line: 'var name string = "Alice"', explanation: 'var: Declares variable. string: Type. name: Variable name. "Alice": Value.' },
                        { line: 'var age = 25', explanation: 'var: Declares. Type inferred from value (int).' },
                        { line: 'city := "NYC"', explanation: ':=: Short declaration (only inside functions). Type inferred.' }
                    ],
                    quiz: {
                        question: 'What symbol is used for short variable declaration in Go?',
                        options: ['=', ':=', '==', '->'],
                        correct: 1
                    }
                },
                {
                    topic: 'Multiple Variables',
                    explanation: 'Go allows declaring multiple variables at once using var() or multiple assignment with :=. This makes code more concise when you need several variables.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    var (\n        name  string = "Alice"\n        age   int    = 25\n        city  string = "NYC"\n    )\n    x, y := 10, 20\n    fmt.Println(name, age, city, x, y)\n}',
                    codeBreakdown: [
                        { line: 'var (', explanation: 'var(): Declares multiple variables at once.' },
                        { line: '    name  string = "Alice"', explanation: 'name: Variable. string: Type. "Alice": Value.' },
                        { line: '    age   int    = 25', explanation: 'age: Variable. int: Type. 25: Value.' },
                        { line: 'x, y := 10, 20', explanation: 'x, y := 10, 20: Multiple assignment in one line.' }
                    ],
                    quiz: {
                        question: 'Can you declare multiple variables at once in Go?',
                        options: ['No', 'Yes, with var() or :=', 'Only with var()', 'Only with :='],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-3',
            title: 'Functions',
            description: 'Creating and using functions',
            xp: 20,
            steps: [
                {
                    topic: 'Function Declaration',
                    explanation: 'Functions in Go are declared with the func keyword. Unlike other languages, the return type comes after the parameter list. Go can return multiple values from a single function, which is a powerful feature.',
                    code: 'package main\n\nimport "fmt"\n\nfunc greet(name string) string {\n    return "Hello, " + name\n}\n\nfunc main() {\n    fmt.Println(greet("Alice"))\n}',
                    codeBreakdown: [
                        { line: 'func greet(name string) string {', explanation: 'func: Defines function. name string: Parameter. string: Return type.' },
                        { line: '    return "Hello, " + name', explanation: 'return: Returns concatenated string.' },
                        { line: 'fmt.Println(greet("Alice"))', explanation: 'greet("Alice"): Calls function. fmt.Println: Prints result.' }
                    ],
                    quiz: {
                        question: 'Where does the return type go in Go functions?',
                        options: ['Before func', 'Before parameters', 'After parameters', 'Inside the function'],
                        correct: 2
                    }
                },
                {
                    topic: 'Multiple Return Values',
                    explanation: 'Go functions can return multiple values. This is commonly used for returning both a result and an error. You capture multiple returns with comma-separated variables.',
                    code: 'package main\n\nimport "fmt"\n\nfunc divide(a, b int) (int, error) {\n    if b == 0 {\n        return 0, fmt.Errorf("cannot divide by zero")\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    result, err := divide(10, 2)\n    fmt.Println(result, err)\n}',
                    codeBreakdown: [
                        { line: 'func divide(a, b int) (int, error)', explanation: '(int, error): Multiple return types.' },
                        { line: '    return 0, fmt.Errorf("cannot divide by zero")', explanation: 'return 0, error: Returns two values.' },
                        { line: '    return a / b, nil', explanation: 'return result, nil: Returns result and no error.' },
                        { line: 'result, err := divide(10, 2)', explanation: 'result, err :=: Captures both return values.' }
                    ],
                    quiz: {
                        question: 'Can Go functions return multiple values?',
                        options: ['No', 'Yes', 'Only errors', 'Only strings'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-4',
            title: 'Loops',
            description: 'For loops in Go',
            xp: 25,
            steps: [
                {
                    topic: 'For Loops',
                    explanation: 'Go only has one loop construct: the for loop. It can be used like a traditional for loop, a while loop, or an infinite loop. Go doesn\'t have while or do-while loops - for handles all cases.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    // Traditional for loop\n    for i := 0; i < 5; i++ {\n        fmt.Println(i)\n    }\n}',
                    codeBreakdown: [
                        { line: 'for i := 0; i < 5; i++ {', explanation: 'i := 0: Initialize. i < 5: Condition. i++: Update after each iteration.' },
                        { line: '    fmt.Println(i)', explanation: 'Indented: Prints current value of i (0, 1, 2, 3, 4).' },
                        { line: '}', explanation: 'Closes for loop block.' }
                    ],
                    quiz: {
                        question: 'How many loop types does Go have?',
                        options: ['Three (for, while, do-while)', 'Two (for, while)', 'One (for)', 'None'],
                        correct: 2
                    }
                },
                {
                    topic: 'While-style Loops',
                    explanation: 'Go uses for loops as while loops by omitting the initialization and update sections. Just include the condition, and it behaves like a while loop.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    // While-style loop\n    count := 0\n    for count < 5 {\n        fmt.Println(count)\n        count++\n    }\n}',
                    codeBreakdown: [
                        { line: 'count := 0', explanation: 'count: Initialize counter at 0.' },
                        { line: 'for count < 5 {', explanation: 'for: Loop while condition is true. count < 5: Check before each iteration.' },
                        { line: '    fmt.Println(count)', explanation: 'Prints current count value.' },
                        { line: '    count++', explanation: 'count++: Increments count by 1. Eventually becomes 5, loop stops.' }
                    ],
                    quiz: {
                        question: 'How do you make a while loop in Go?',
                        options: ['Use while keyword', 'Use for with only condition', 'Use do-while', 'Go doesn\'t have while loops'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-5',
            title: 'Structs',
            description: 'Custom data types',
            xp: 30,
            steps: [
                {
                    topic: 'Struct Declaration',
                    explanation: 'Structs in Go are collections of named fields. They\'re like classes without methods (though Go can attach methods to structs). Structs are used to create custom data types that group related data together.',
                    code: 'package main\n\nimport "fmt"\n\ntype Person struct {\n    Name string\n    Age  int\n}\n\nfunc main() {\n    p := Person{Name: "Alice", Age: 25}\n    fmt.Println(p.Name, p.Age)\n}',
                    codeBreakdown: [
                        { line: 'type Person struct {', explanation: 'type: Defines custom type. Person: Type name. struct: Struct type.' },
                        { line: '    Name string', explanation: 'Name: Field name. string: Field type.' },
                        { line: '    Age  int', explanation: 'Age: Field name. int: Field type.' },
                        { line: 'p := Person{Name: "Alice", Age: 25}', explanation: 'Person{...}: Creates struct instance. Name: "Alice": Field initialization.' },
                        { line: 'fmt.Println(p.Name, p.Age)', explanation: 'p.Name: Access field using dot operator.' }
                    ],
                    quiz: {
                        question: 'What are structs used for in Go?',
                        options: ['Only for methods', 'Grouping related data', 'Only for errors', 'Nothing'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-6',
            title: 'Slices',
            description: 'Dynamic arrays',
            xp: 35,
            steps: [
                {
                    topic: 'Introduction to Slices',
                    explanation: 'Slices in Go are dynamic views into arrays. They\'re more flexible than arrays because they can grow and shrink. You create slices using the make() function or by slicing an array.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    numbers := []int{1, 2, 3}\n    numbers = append(numbers, 4)\n    fmt.Println(numbers)\n}',
                    codeBreakdown: [
                        { line: 'numbers := []int{1, 2, 3}', explanation: '[]int: Slice type. {}: Initial values.' },
                        { line: 'numbers = append(numbers, 4)', explanation: 'append(): Adds 4 to end of slice. Returns new slice.' },
                        { line: 'fmt.Println(numbers)', explanation: 'Prints slice [1 2 3 4].' }
                    ],
                    quiz: {
                        question: 'What function adds elements to a slice?',
                        options: ['add()', 'push()', 'append()', 'insert()'],
                        correct: 2
                    }
                },
                {
                    topic: 'Slice Operations',
                    explanation: 'You can create slices from arrays using the slice syntax [start:end]. The len() function returns the length, and cap() returns the capacity of a slice.',
                    code: 'arr := [5]int{1, 2, 3, 4, 5}\nslice := arr[1:4] // [2, 3, 4]\nfmt.Println(len(slice))\nfmt.Println(cap(slice))',
                    codeBreakdown: [
                        { line: 'arr := [5]int{1, 2, 3, 4, 5}', explanation: '[5]int: Fixed-size array of 5 integers.' },
                        { line: 'slice := arr[1:4]', explanation: 'arr[1:4]: Slice from index 1 to 4 (exclusive). Gets [2, 3, 4].' },
                        { line: 'fmt.Println(len(slice))', explanation: 'len(): Returns slice length (3).' },
                        { line: 'fmt.Println(cap(slice))', explanation: 'cap(): Returns slice capacity (4).' }
                    ],
                    quiz: {
                        question: 'What does the slice syntax [1:4] do?',
                        options: ['Gets elements 1 to 4', 'Gets elements 1, 2, 3', 'Gets elements 1 to 3', 'Gets 4 elements'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-7',
            title: 'Maps',
            description: 'Key-value pairs',
            xp: 35,
            steps: [
                {
                    topic: 'Introduction to Maps',
                    explanation: 'Maps in Go are collections of key-value pairs. They\'re like dictionaries in Python or hash tables in other languages. Maps are created using make() or map literals.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    person := map[string]int{\n        "Alice": 25,\n        "Bob":   30,\n    }\n    fmt.Println(person["Alice"])\n}',
                    codeBreakdown: [
                        { line: 'person := map[string]int{', explanation: 'map[string]int: Map with string keys, int values.' },
                        { line: '    "Alice": 25,', explanation: '"Alice": Key. 25: Value.' },
                        { line: '    "Bob":   30,', explanation: '"Bob": Key. 30: Value.' },
                        { line: 'fmt.Println(person["Alice"])', explanation: 'person["Alice"]: Access value by key. Prints 25.' }
                    ],
                    quiz: {
                        question: 'How do you create a map in Go?',
                        options: ['Using []', 'Using {} with map[type]', 'Using ()', 'Using <>'],
                        correct: 1
                    }
                },
                {
                    topic: 'Map Operations',
                    explanation: 'You can add, delete, and check for keys in maps. The delete() function removes a key-value pair. The comma-ok idiom checks if a key exists.',
                    code: 'm := make(map[string]int)\nm["Alice"] = 25\ndelete(m, "Alice")\nval, ok := m["Bob"]\nfmt.Println(val, ok)',
                    codeBreakdown: [
                        { line: 'm := make(map[string]int)', explanation: 'make(): Creates empty map.' },
                        { line: 'm["Alice"] = 25', explanation: 'm["Alice"]: Adds/sets key-value pair.' },
                        { line: 'delete(m, "Alice")', explanation: 'delete(): Removes key "Alice" from map.' },
                        { line: 'val, ok := m["Bob"]', explanation: 'val, ok :=: Comma-ok idiom. val: Value. ok: Key exists (true/false).' }
                    ],
                    quiz: {
                        question: 'What function deletes a key from a map?',
                        options: ['remove()', 'delete()', 'erase()', 'clear()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-8',
            title: 'Goroutines',
            description: 'Concurrent programming',
            xp: 40,
            steps: [
                {
                    topic: 'Introduction to Goroutines',
                    explanation: 'Goroutines are lightweight threads managed by the Go runtime. You start a goroutine by adding the go keyword before a function call. They enable concurrent programming easily.',
                    code: 'package main\n\nimport "fmt"\n\nfunc sayHello() {\n    fmt.Println("Hello!")\n}\n\nfunc main() {\n    go sayHello() // Run concurrently\n}',
                    codeBreakdown: [
                        { line: 'func sayHello() {', explanation: 'sayHello: Function to run concurrently.' },
                        { line: '    fmt.Println("Hello!")', explanation: 'Prints "Hello!" when goroutine runs.' },
                        { line: '    go sayHello()', explanation: 'go: Starts goroutine. sayHello() runs concurrently with main.' }
                    ],
                    quiz: {
                        question: 'What keyword starts a goroutine?',
                        options: ['async', 'go', 'thread', 'spawn'],
                        correct: 1
                    }
                },
                {
                    topic: 'Channels',
                    explanation: 'Channels are the way goroutines communicate with each other. You can send and receive values through channels. They prevent race conditions by synchronizing access.',
                    code: 'ch := make(chan string)\n\nfunc send() {\n    ch <- "Hello"\n}\n\nfunc receive() {\n    msg := <-ch\n    fmt.Println(msg)\n}',
                    codeBreakdown: [
                        { line: 'ch := make(chan string)', explanation: 'make(chan string): Creates channel for strings.' },
                        { line: '    ch <- "Hello"', explanation: 'ch <-: Sends "Hello" to channel (blocks until receiver ready).' },
                        { line: '    msg := <-ch', explanation: '<-ch: Receives from channel (blocks until sender ready).' }
                    ],
                    quiz: {
                        question: 'What do goroutines use to communicate?',
                        options: ['Shared memory', 'Channels', 'Pipes', 'Sockets'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-9',
            title: 'Interfaces',
            description: 'Polymorphism in Go',
            xp: 40,
            steps: [
                {
                    topic: 'Introduction to Interfaces',
                    explanation: 'Interfaces in Go define sets of methods. A type implements an interface by implementing its methods. Go uses implicit interface implementation - no explicit "implements" keyword needed.',
                    code: 'type Writer interface {\n    Write([]byte) (int, error)\n}\n\ntype File struct{}\n\nfunc (f File) Write(data []byte) (int, error) {\n    return len(data), nil\n}',
                    codeBreakdown: [
                        { line: 'type Writer interface {', explanation: 'type: Defines interface. Writer: Interface name.' },
                        { line: '    Write([]byte) (int, error)', explanation: 'Write: Method signature. ([]byte): Parameter. (int, error): Return types.' },
                        { line: 'type File struct{}', explanation: 'File: Struct that will implement Writer.' },
                        { line: 'func (f File) Write(data []byte) (int, error)', explanation: '(f File): Method receiver. File implements Writer by having Write method.' }
                    ],
                    quiz: {
                        question: 'How does Go implement interfaces?',
                        options: ['Explicitly with implements keyword', 'Implicitly by implementing methods', 'Using inheritance', 'With annotations'],
                        correct: 1
                    }
                },
                {
                    topic: 'Empty Interface',
                    explanation: 'The empty interface interface{} can hold values of any type. It\'s similar to "any" or "Object" in other languages. Use it sparingly as it reduces type safety.',
                    code: 'func printAnything(v interface{}) {\n    fmt.Println(v)\n}\n\nprintAnything(42)\nprintAnything("hello")\nprintAnything(true)',
                    codeBreakdown: [
                        { line: 'func printAnything(v interface{})', explanation: 'interface{}: Accepts any type. v: Parameter of any type.' },
                        { line: 'printAnything(42)', explanation: 'Passes integer 42.' },
                        { line: 'printAnything("hello")', explanation: 'Passes string "hello".' },
                        { line: 'printAnything(true)', explanation: 'Passes boolean true.' }
                    ],
                    quiz: {
                        question: 'What does interface{} represent?',
                        options: ['No type', 'Any type', 'Only strings', 'Only numbers'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-10',
            title: 'Error Handling',
            description: 'Go error handling',
            xp: 45,
            steps: [
                {
                    topic: 'Error Values',
                    explanation: 'Go handles errors explicitly as return values. Functions that can fail return an error as the last return value. You check if error is nil to see if the operation succeeded.',
                    code: 'func divide(a, b int) (int, error) {\n    if b == 0 {\n        return 0, errors.New("division by zero")\n    }\n    return a / b, nil\n}',
                    codeBreakdown: [
                        { line: 'func divide(a, b int) (int, error)', explanation: '(int, error): Returns result and error.' },
                        { line: '    if b == 0 {', explanation: 'if: Checks for division by zero.' },
                        { line: '        return 0, errors.New("division by zero")', explanation: 'return 0, error: Returns error when b is 0.' },
                        { line: '    return a / b, nil', explanation: 'return result, nil: Returns result and no error.' }
                    ],
                    quiz: {
                        question: 'How does Go represent errors?',
                        options: ['As exceptions', 'As return values', 'As null', 'As status codes'],
                        correct: 1
                    }
                },
                {
                    topic: 'If Error Pattern',
                    explanation: 'The common Go pattern is to check errors immediately after calling a function. If error is not nil, handle it. This makes error handling explicit and visible.',
                    code: 'result, err := divide(10, 2)\nif err != nil {\n    log.Fatal(err)\n}\nfmt.Println(result)',
                    codeBreakdown: [
                        { line: 'result, err := divide(10, 2)', explanation: 'result, err := Captures both return values.' },
                        { line: 'if err != nil {', explanation: 'if err != nil: Checks if error occurred.' },
                        { line: '    log.Fatal(err)', explanation: 'log.Fatal: Logs error and exits program.' },
                        { line: 'fmt.Println(result)', explanation: 'fmt.Println: Prints result if no error.' }
                    ],
                    quiz: {
                        question: 'What value indicates no error in Go?',
                        options: ['false', 'null', 'nil', '0'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 'go-11',
            title: 'Methods',
            description: 'Methods on structs',
            xp: 40,
            steps: [
                {
                    topic: 'Defining Methods',
                    explanation: 'Methods in Go are functions with a receiver. The receiver appears before the function name in the declaration. Methods allow you to attach behavior to types (usually structs).',
                    code: 'type Rectangle struct {\n    width, height float64\n}\n\nfunc (r Rectangle) Area() float64 {\n    return r.width * r.height\n}',
                    codeBreakdown: [
                        { line: 'type Rectangle struct {', explanation: 'Rectangle: Struct type to attach methods to.' },
                        { line: 'func (r Rectangle) Area() float64 {', explanation: '(r Rectangle): Receiver (value receiver). Area: Method name.' },
                        { line: '    return r.width * r.height', explanation: 'r.width, r.height: Access struct fields. Returns area.' }
                    ],
                    quiz: {
                        question: 'What is the receiver in a Go method?',
                        options: ['The return value', 'The type the method is attached to', 'The function name', 'The parameter'],
                        correct: 1
                    }
                },
                {
                    topic: 'Pointer Receivers',
                    explanation: 'Pointer receivers allow methods to modify the receiver\'s value. Use pointer receivers when you need to mutate the struct or when the struct is large (to avoid copying).',
                    code: 'type Counter struct {\n    count int\n}\n\nfunc (c *Counter) Increment() {\n    c.count++\n}\n\nfunc (c Counter) Value() int {\n    return c.count\n}',
                    codeBreakdown: [
                        { line: 'func (c *Counter) Increment() {', explanation: '(c *Counter): Pointer receiver. Can modify Counter.' },
                        { line: '    c.count++', explanation: 'c.count: Modifies the actual Counter value.' },
                        { line: 'func (c Counter) Value() int {', explanation: '(c Counter): Value receiver. Cannot modify Counter.' },
                        { line: '    return c.count', explanation: 'Returns count without modifying.' }
                    ],
                    quiz: {
                        question: 'When should you use a pointer receiver?',
                        options: ['Always', 'When you need to modify the receiver', 'Never', 'Only for small structs'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-12',
            title: 'Defer',
            description: 'Deferred function calls',
            xp: 35,
            steps: [
                {
                    topic: 'Introduction to Defer',
                    explanation: 'The defer statement schedules a function call to run when the surrounding function returns. Deferred calls are executed in LIFO order (last in, first out). Useful for cleanup.',
                    code: 'func main() {\n    defer fmt.Println("World")\n    fmt.Println("Hello")\n}\n// Output: Hello, World',
                    codeBreakdown: [
                        { line: 'defer fmt.Println("World")', explanation: 'defer: Schedules print to run when main returns.' },
                        { line: '    fmt.Println("Hello")', explanation: 'Prints "Hello" immediately.' },
                        { line: '// Output: Hello, World', explanation: 'Deferred "World" prints after main completes.' }
                    ],
                    quiz: {
                        question: 'When do deferred functions run?',
                        options: ['Immediately', 'Before the function returns', 'After the function returns', 'Never'],
                        correct: 1
                    }
                },
                {
                    topic: 'Defer for Cleanup',
                    explanation: 'Defer is commonly used for cleanup operations like closing files or unlocking mutexes. This ensures cleanup happens even if an error occurs.',
                    code: 'func processFile(filename string) error {\n    file, err := os.Open(filename)\n    if err != nil {\n        return err\n    }\n    defer file.Close()\n    // Process file\n    return nil\n}',
                    codeBreakdown: [
                        { line: 'file, err := os.Open(filename)', explanation: 'Opens file. Might fail.' },
                        { line: '    defer file.Close()', explanation: 'defer: Schedules Close to run when function returns.' },
                        { line: '    // Process file', explanation: 'File processing code here.' },
                        { line: '    return nil', explanation: 'file.Close() runs automatically here.' }
                    ],
                    quiz: {
                        question: 'What is defer commonly used for?',
                        options: ['Performance', 'Cleanup operations', 'Logging', 'Nothing'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-13',
            title: 'Pointers',
            description: 'Memory addresses',
            xp: 40,
            steps: [
                {
                    topic: 'Introduction to Pointers',
                    explanation: 'Pointers store memory addresses. The & operator gets the address of a variable, and * dereferences a pointer to get the value at that address. Pointers are useful for sharing data.',
                    code: 'func main() {\n    x := 42\n    p := &x\n    fmt.Println(*p)\n    *p = 100\n    fmt.Println(x)\n}',
                    codeBreakdown: [
                        { line: 'x := 42', explanation: 'x: Integer variable with value 42.' },
                        { line: 'p := &x', explanation: '&x: Gets address of x. p: Pointer to x.' },
                        { line: 'fmt.Println(*p)', explanation: '*p: Dereferences pointer. Prints 42.' },
                        { line: '*p = 100', explanation: '*p: Modifies value at address. x becomes 100.' }
                    ],
                    quiz: {
                        question: 'What operator gets the address of a variable?',
                        options: ['*', '&', '@', '#'],
                        correct: 1
                    }
                },
                {
                    topic: 'Pointer Parameters',
                    explanation: 'Passing pointers to functions allows the function to modify the original variable. This is more efficient for large structs and enables mutation.',
                    code: 'func modify(x *int) {\n    *x = 100\n}\n\nfunc main() {\n    value := 42\n    modify(&value)\n    fmt.Println(value) // 100\n}',
                    codeBreakdown: [
                        { line: 'func modify(x *int)', explanation: '*int: Pointer parameter. Receives address.' },
                        { line: '    *x = 100', explanation: '*x: Modifies value at address.' },
                        { line: 'modify(&value)', explanation: '&value: Passes address of value.' },
                        { line: 'fmt.Println(value)', explanation: 'Prints 100 (value was modified).' }
                    ],
                    quiz: {
                        question: 'Why pass pointers to functions?',
                        options: ['To copy data', 'To modify original and avoid copying', 'For security', 'No reason'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 'go-14',
            title: 'Packages',
            description: 'Code organization',
            xp: 35,
            steps: [
                {
                    topic: 'Package Declaration',
                    explanation: 'Every Go file starts with a package declaration. Packages organize code and provide encapsulation. The main package is special - it defines an executable program.',
                    code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello")\n}',
                    codeBreakdown: [
                        { line: 'package main', explanation: 'package: Declares package. main: Executable package.' },
                        { line: 'import "fmt"', explanation: 'import: Imports fmt package for I/O.' },
                        { line: 'func main()', explanation: 'main: Entry point of executable.' }
                    ],
                    quiz: {
                        question: 'What package is required for an executable?',
                        options: ['package exec', 'package main', 'package app', 'package run'],
                        correct: 1
                    }
                },
                {
                    topic: 'Importing Packages',
                    explanation: 'You import packages to use their exported functions and types. Only capitalized names are exported (public). Lowercase names are private to the package.',
                    code: 'import (\n    "fmt"\n    "math/rand"\n    "github.com/user/mypackage"\n)\n\nfunc main() {\n    fmt.Println(rand.Intn(100))\n}',
                    codeBreakdown: [
                        { line: 'import (', explanation: 'import: Imports multiple packages.' },
                        { line: '    "fmt"', explanation: 'fmt: Standard library package.' },
                        { line: '    "math/rand"', explanation: 'math/rand: Standard library (nested).' },
                        { line: '    "github.com/user/mypackage"', explanation: 'Third-party package from GitHub.' }
                    ],
                    quiz: {
                        question: 'Which names are exported from a package?',
                        options: ['All names', 'Only lowercase', 'Only capitalized', 'Only private'],
                        correct: 2
                    }
                }
            ]
        }
    ]
};

// Get lessons for a specific language
function getLessonsForLanguage(language) {
    return lessonsData[language] || [];
}
