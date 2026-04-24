// AI Explanation System
// This file handles AI-generated explanations for coding concepts

// OpenAI API configuration (user needs to add their API key)
const OPENAI_API_KEY = ''; // Add your OpenAI API key here

// Pre-written explanations as fallback (used when no API key is provided)
const fallbackExplanations = {
    basics: {
        'Introduction to Coding': 'Coding, also known as programming, is the process of creating instructions for computers to follow. Just like we use human languages to communicate with each other, programmers use programming languages to communicate with computers. These instructions can tell computers to do anything from simple calculations to complex tasks like running video games or powering websites.',
        'Why Learn to Code?': 'Learning to code opens up countless opportunities. It teaches you problem-solving skills, logical thinking, and how to break down complex problems into smaller, manageable pieces. Coding is used in almost every industry today - from healthcare to entertainment, finance to transportation. It\'s a skill that empowers you to create tools, automate tasks, and bring your ideas to life.',
        'Binary Code': 'Binary is the fundamental language of computers, consisting of only two digits: 0 and 1. These represent off and on states, like a light switch. All digital information - text, images, videos, and programs - is ultimately stored as binary. While programmers write code in human-readable languages, the computer translates everything into binary to process it.',
        'Computer Memory': 'Computers use different types of memory to store information. RAM (Random Access Memory) is temporary storage for data currently in use - like a workspace. Hard drives provide permanent storage for files and programs - like a filing cabinet. When you run a program, it loads from the hard drive into RAM where the processor can access it quickly.',
        'What is an Algorithm?': 'An algorithm is a step-by-step procedure for solving a problem. Think of it as a recipe - it tells you exactly what steps to take in what order to achieve a specific result. In programming, algorithms are the core logic behind every program. Good algorithms are efficient, clear, and handle all possible cases correctly.',
        'Writing Algorithms': 'Writing good algorithms requires thinking carefully about every step. Computers follow instructions literally and precisely - they don\'t make assumptions or fill in gaps. This means algorithms must be complete and unambiguous. Breaking down complex problems into clear, sequential steps is a fundamental programming skill.',
        'Types of Languages': 'Programming languages vary in their design and purpose. Some like Python prioritize readability and ease of use. Others like C++ prioritize performance and control. JavaScript specializes in web browsers, while Java is used for enterprise applications. Each language has strengths that make it suitable for different types of projects.',
        'Choosing a Language': 'The best programming language to learn first depends on your goals and interests. Python is excellent for beginners due to its simple syntax. JavaScript is essential for web development. Java and C# are great for building applications. The key insight is that programming concepts transfer between languages - once you learn one, picking up others becomes much easier.',
        'Hello World': '"Hello World" is the traditional first program for programmers learning a new language. It simply displays the text "Hello, World!" on the screen. While simple, it represents an important milestone - proving you can write code that the computer understands and executes. It\'s been a programming tradition since the 1970s.',
        'Breaking Down the Code': 'Understanding code structure is fundamental. In "print("Hello, World!")", "print" is a function name - a command to do something. The parentheses contain the arguments - what the function should work with. Quotes mark strings - text data. Learning to read and understand this syntax is the first step in becoming a programmer.'
    },
    python: {
        'Introduction to Python': 'Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability with its notable use of significant indentation.',
        'Understanding print()': 'The print() function in Python is used to output data to the standard output device (screen). It can print strings, numbers, or any other data type. You can print multiple items by separating them with commas.',
        'Printing Numbers': 'When you print numbers in Python, you don\'t need quotes. Python automatically converts numbers to strings for output. You can also perform mathematical operations directly in the print statement.',
        'What are Variables?': 'Variables are named locations used to store data in memory. Think of them as labeled boxes where you can put information. In Python, you don\'t need to declare variable types - the interpreter figures it out automatically.',
        'Variable Naming Rules': 'Python variable names must start with a letter or underscore, followed by letters, numbers, or underscores. They cannot contain spaces or special characters. Variable names are case-sensitive, meaning "name" and "Name" are different variables.',
        'Updating Variables': 'Variables in Python are dynamic - you can reassign them to different values or even different data types. When you assign a new value, the old value is discarded and replaced with the new one.',
        'Strings': 'Strings in Python are sequences of characters enclosed in quotes. You can use single quotes (\') or double quotes ("). Strings are immutable, meaning once created, they cannot be changed.',
        'Numbers': 'Python has two main numeric types: integers (whole numbers) and floats (decimal numbers). Python automatically handles conversions between these types when needed.',
        'Booleans': 'Booleans represent truth values in Python. There are only two boolean values: True and False. They are used in conditional statements and comparisons.',
        'If Statements': 'If statements allow you to execute code conditionally. Python uses indentation (whitespace) to define which code belongs inside the if block. This is different from many other languages that use braces.',
        'If-Else Statements': 'The else statement provides code to execute when the if condition is false. This allows you to handle both outcomes of a condition. The else block is optional.',
        'If-Elif-Else': 'The elif (else if) statement allows you to check multiple conditions in sequence. Python evaluates each condition in order and executes the first one that is true. This is useful for handling multiple cases.',
        'For Loops': 'For loops in Python iterate over sequences like lists, strings, or ranges. The range() function generates a sequence of numbers, which is commonly used with for loops to repeat code a specific number of times.',
        'While Loops': 'While loops repeat code as long as a condition is true. They are useful when you don\'t know in advance how many iterations you need. Always ensure the condition will eventually become false to avoid infinite loops.'
    },
    java: {
        'Introduction to Java': 'Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was developed by James Gosling at Sun Microsystems in 1995. Java code runs on a Java Virtual Machine (JVM), making it platform-independent.',
        'System.out.println()': 'System.out.println() is the standard way to output text in Java. System is a class, out is a static field representing standard output, and println() is a method that prints text followed by a new line.',
        'Variable Declaration': 'Java is statically typed, meaning you must declare the type of each variable. Common types include int for whole numbers, double for decimals, boolean for true/false, and String for text.',
        'Type Safety': 'Java\'s strong type system prevents many errors by catching type mismatches at compile time. You cannot assign a value of the wrong type to a variable without explicit conversion.',
        'Primitive Types': 'Java has 8 primitive types: byte, short, int, long, float, double, boolean, and char. These store simple values directly in memory and are not objects.',
        'String Type': 'String is a reference type in Java, not a primitive. It represents a sequence of characters and is one of the most commonly used types. Strings are immutable, meaning they cannot be changed after creation.',
        'If Statements': 'Java if statements evaluate a boolean expression and execute code if true. Code blocks are defined with curly braces {}. Unlike Python, Java doesn\'t use indentation for block structure.',
        'If-Else': 'The else block executes when the if condition is false. Java uses "else if" (two words) to check additional conditions, unlike Python\'s "elif".',
        'For Loops': 'Java for loops have three parts separated by semicolons: initialization (runs once), condition (checked before each iteration), and update (runs after each iteration). This structure is similar to C and C++.',
        'While Loops': 'While loops in Java repeat code while a condition is true. The condition is checked before each iteration. If the condition is false initially, the loop never executes.'
    },
    javascript: {
        'Introduction to JavaScript': 'JavaScript is a dynamic, interpreted programming language originally designed for web browsers. It was created by Brendan Eich in 1995. Today, JavaScript is also used on servers (Node.js) and in many other environments.',
        'Alerts': 'The alert() function in JavaScript displays a modal dialog box with a message and an OK button. It\'s useful for simple notifications and debugging, but should be used sparingly in production as it blocks user interaction.',
        'let and const': 'let and const were introduced in ES6 (2015) as improvements over var. let is for variables that can be reassigned, while const is for constants that cannot be reassigned. Both have block scope, unlike var\'s function scope.',
        'var': 'var is the traditional way to declare variables in JavaScript. It has function scope (not block scope) and can be redeclared, which can lead to bugs. Modern JavaScript recommends using let and const instead.',
        'Strings': 'JavaScript strings can be enclosed in single quotes, double quotes, or backticks (template literals). Template literals allow embedded expressions using ${} syntax and can span multiple lines.',
        'Numbers': 'JavaScript has only one numeric type: Number. It represents both integers and floating-point numbers. JavaScript also has special numeric values: Infinity, -Infinity, and NaN (Not a Number).',
        'If Statements': 'JavaScript if statements work like other C-style languages. The condition is evaluated, and if truthy, the code block executes. JavaScript uses curly braces to define blocks.',
        'Ternary Operator': 'The ternary operator (?:) is a concise way to write simple if-else statements. It has the form: condition ? valueIfTrue : valueIfFalse. It\'s often used for simple conditional assignments.',
        'For Loops': 'JavaScript for loops follow the C-style syntax with initialization, condition, and update. JavaScript also has for...in loops (for object properties) and for...of loops (for iterable values like arrays).',
        'While Loops': 'While loops in JavaScript repeat code while a condition is true. The condition is evaluated before each iteration. If the condition is false initially, the loop body never executes.'
    },
    cpp: {
        'Introduction to C++': 'C++ is a powerful, high-performance programming language developed by Bjarne Stroustrup. It\'s an extension of C with object-oriented features. C++ is used in game development, systems programming, and high-performance applications.',
        'Understanding cout': 'cout is the standard output stream in C++. It stands for "console output" and is used with the << operator to send data to the console. endl adds a new line and flushes the buffer.',
        'Variable Declaration': 'C++ is statically typed, meaning you must declare variable types. Common types include int, double, string, and bool. This helps catch errors at compile time and enables better optimization.',
        'Type Safety': 'C++\'s strong type system prevents many errors by catching type mismatches at compile time. You cannot assign a value of the wrong type without explicit conversion using type casting.',
        'If Statements': 'C++ if statements evaluate conditions and execute code blocks if true. Conditions must be in parentheses, and code blocks are defined with curly braces. This structure is similar to C and Java.',
        'If-Else': 'The else block executes when the if condition is false. C++ uses "else if" to check additional conditions. This allows handling multiple cases in a controlled manner.',
        'For Loops': 'C++ for loops have three parts: initialization, condition, and update. This structure is similar to C and Java. It\'s commonly used for iterating a specific number of times.',
        'While Loops': 'While loops repeat code while a condition is true. The condition is checked before each iteration. If false initially, the loop never executes.',
        'Function Declaration': 'Functions in C++ must have a return type, name, and parameters. The return type specifies what kind of value the function returns. Use void if the function returns nothing.'
    },
    csharp: {
        'Introduction to C#': 'C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft. It\'s widely used for Windows applications, web development with ASP.NET, and game development with Unity.',
        'Console.WriteLine': 'Console.WriteLine() is used to output text to the console in C#. It automatically adds a new line after the output. Use Console.Write() if you don\'t want a new line.',
        'Variable Declaration': 'C# is strongly typed like Java. You declare variables with their type. Common types include int, double, string, and bool. You can also use var for type inference.',
        'String Interpolation': 'C# supports string interpolation with the $ symbol. You can embed variables directly in strings using {variable} syntax, making code more readable than concatenation.',
        'If Statements': 'C# if statements work like other C-style languages. The condition must be a boolean expression. Code blocks are defined with curly braces.',
        'Switch Statements': 'C# has powerful switch statements for handling multiple cases. Modern C# also supports pattern matching in switch expressions for more concise and readable code.',
        'For Loops': 'C# for loops follow the standard C-style syntax. C# also has foreach loops specifically for iterating over collections like arrays and lists, which is more idiomatic.',
        'While Loops': 'While loops in C# repeat code while a condition is true. They\'re useful when you don\'t know the number of iterations in advance.',
        'Array Declaration': 'Arrays in C# are fixed-size collections of the same type. You declare them with the type followed by square brackets. Arrays are zero-indexed, meaning the first element is at index 0.'
    },
    ruby: {
        'Introduction to Ruby': 'Ruby is a dynamic, object-oriented programming language known for its elegant syntax and focus on programmer happiness. It was created by Yukihiro Matsumoto (Matz) in 1995. Ruby is popular for web development with Rails.',
        'puts vs print': 'Ruby has two main output methods: puts (adds a new line) and print (doesn\'t add a new line). Both are commonly used for different purposes depending on your formatting needs.',
        'Variable Naming': 'Ruby variables are dynamically typed - you don\'t need to declare types. Local variables start with lowercase letters or underscores. Ruby conventions use snake_case for multi-word variable names.',
        'String Interpolation': 'Ruby uses #{} for string interpolation. You can embed variables and expressions directly in double-quoted strings. Single-quoted strings don\'t support interpolation.',
        'If Statements': 'Ruby if statements can be written with or without parentheses. Ruby also allows you to put the if at the end of a line for concise conditional execution, which is very idiomatic.',
        'Unless': 'Ruby has an "unless" keyword which is the opposite of "if". It executes code when the condition is false. This can make code more readable when expressing negative conditions.',
        'Times Loop': 'Ruby has a simple times method for repeating code a specific number of times. It\'s more readable and idiomatic than traditional for loops with counters.',
        'Each Loop': 'The each method is Ruby\'s preferred way to iterate over collections. It\'s more readable and idiomatic than traditional for loops. Rubyists prefer each over for loops.',
        'Defining Methods': 'Methods in Ruby are defined with the def keyword and end with end. They don\'t require explicit return statements - the last evaluated expression is returned automatically.',
        'Default Arguments': 'Ruby methods can have default argument values. If no argument is provided, the default value is used. This makes methods more flexible and reduces the need for method overloading.'
    },
    go: {
        'Introduction to Go': 'Go (Golang) is a statically typed, compiled programming language designed at Google. It was created to address criticisms of other languages while keeping their useful characteristics. Go is known for simplicity, fast compilation, and built-in concurrency support through goroutines.',
        'Understanding fmt.Println': 'fmt.Println() is Go\'s standard output function. It belongs to the fmt package which implements formatted I/O. Println prints to standard output with a newline. Go requires explicit imports of packages before use, which keeps programs lightweight and explicit.',
        'Variable Declaration': 'Go offers flexible variable declaration. You can use var with explicit types, var with type inference, or the short declaration := inside functions. The := operator is unique to Go and combines declaration with assignment, making code concise.',
        'Multiple Variables': 'Go supports declaring multiple variables simultaneously. You can use var() for block declarations or multiple assignment with :=. This feature reduces boilerplate and makes code more readable when working with related variables.',
        'Function Declaration': 'Go functions are declared with func followed by the name, parameters, and return type. Unlike most languages, the return type comes after parameters. This unique syntax makes function signatures easy to read from left to right.',
        'Multiple Return Values': 'One of Go\'s distinctive features is multiple return values. Functions can return any number of values, commonly used to return both a result and an error. This eliminates the need for special error objects or exceptions.',
        'For Loops': 'Go simplifies iteration by having only one loop construct: for. It can function as a traditional for loop, a while loop, or an infinite loop depending on which components you include. This simplicity reduces cognitive load when reading code.',
        'While-style Loops': 'Go achieves while loop behavior by using for with only a condition. By omitting initialization and update clauses, for behaves exactly like a while loop. This unified approach means you only need to remember one loop syntax.',
        'Struct Declaration': 'Structs in Go are user-defined types that group named fields. They\'re similar to classes in other languages but without inheritance. Structs are the primary way to create complex data types in Go\'s type system.',
        'Struct Methods': 'While structs themselves don\'t contain methods, Go allows you to attach functions to types. These are called methods and can be called using dot notation. This provides object-oriented behavior without traditional class-based inheritance.'
    }
};

// Generate AI explanation using OpenAI API
async function generateAIExplanation(language, topic, callback) {
    // Check if API key is provided
    if (!OPENAI_API_KEY) {
        // Use fallback explanation
        const fallback = getFallbackExplanation(language, topic);
        callback(fallback);
        return;
    }
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: `You are a friendly coding tutor specializing in ${language}. Explain concepts in simple terms suitable for beginners. Keep explanations concise (2-3 sentences) and easy to understand.`
                    },
                    {
                        role: 'user',
                        content: `Explain the concept of "${topic}" in ${language} for a beginner programmer.`
                    }
                ],
                max_tokens: 150,
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        
        if (data.choices && data.choices[0]) {
            callback(data.choices[0].message.content);
        } else {
            // Fallback if API fails
            const fallback = getFallbackExplanation(language, topic);
            callback(fallback);
        }
    } catch (error) {
        console.error('AI API Error:', error);
        // Use fallback on error
        const fallback = getFallbackExplanation(language, topic);
        callback(fallback);
    }
}

// Get fallback explanation
function getFallbackExplanation(language, topic) {
    if (fallbackExplanations[language] && fallbackExplanations[language][topic]) {
        return fallbackExplanations[language][topic];
    }
    
    // Generic fallback if specific topic not found
    return `This is a ${language} programming concept. ${topic} is an important topic that helps you understand how to write better code. Practice with the examples provided to master this concept.`;
}

// Function to set API key (call this from the UI or console)
function setApiKey(key) {
    localStorage.setItem('openai-api-key', key);
    window.location.reload();
}

// Load API key from localStorage on startup
function loadApiKey() {
    const savedKey = localStorage.getItem('openai-api-key');
    if (savedKey) {
        // In a real app, you would set this globally
        console.log('API key loaded from storage');
    }
}

// Initialize
loadApiKey();
