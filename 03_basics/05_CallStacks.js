/*JavaScript is a single threaded language meaning it executes code in a single thread using a call stack and a single execution context.

JavaScript Execution Context
1. Global Execution Context
2. Function Execution Context
3. Eval() Execution Context

Basically it involves two phases:
a. Memory Creation phase
b. Execution phase

Memory Creation phase:
1. JS scans the code before running and sets up memory space.
2. Functions are hoisted (stored in memory with their code).
3. Variables are hoisted too but initialized with undefined.

Execution phase:
1.Now JS starts executing line by line.
2. Assign values to the variables
3. JS creates a new Function Execution Context (FEC) for a function

Inside Function Execution Context (FEC):
Each function call creates a new variable environment with its own variables which has the same both phases.

Memory Creation Phase 
Execution Phase(returns value to the Global context)


After returning, this FEC is destroyed and removed from the call stack.


CALLSTACK(Lifo):
The call stack keeps track of all active execution contexts.

The Call Stack is a data structure (stack) that the JavaScript engine uses to keep track of function calls — i.e., which function is currently running and which function should run next.

1. When program starts → GEC is created .
2. When Function(same for nested but it follows Lifo) is called   it is pushed into the call stack .
3. And when it returns it is popped off .
4. When program ends → GEC is popped off → stack is empty ✅ .
*/

