# 8086 Processor Simulator
The 8086 Processor Simulator is a JavaScript application that allows you to simulate the execution of assembly instructions for the Intel 8086 processor. It provides support for mov, xchg, push, and pop operations, allowing you to manipulate registers and memory.

## Features
- Simulates the execution of assembly instructions for the Intel 8086 processor.
- Supports mov, xchg, push, and pop operations.
- Provides options to perform operations between registers or between registers and memory.
- Uses localStorage to emulate memory for storing values.

## Getting Started
1. Clone the repository or download the source code as a ZIP file and open `index.html` on your local browser.
2. Use github pages (link in the description)

## Usage
There are four registers on the left: AX, BX, CX and DX. You can enter 4-bit values ​​in hexadecimal format. Under each register there is a button to reset the current content of the register.

A. MOV operation
1. Select registers.
2. Enter a value into the source register.
3. Click the `Apply` button.

B. XCHG operation
1. Select registers.
2. Enter values ​​into selected registers.
3. Click the `Apply` button.

C. POP operation
1. Select the appropriate source register.
2. Click the `Apply` button.
3. The value of the selected register will be shown on the SP screen.

D. POP operation
1. Select the appropriate target registry.
2. Click the `Apply` button.
3. The value from the SP stack will be transferred to the target register.

E. Memory operations
1. From the options mode, select the form of data transfer: from register to memory or from memory to register.
2. You can also choose the way of saving this data: index, base or index-base.
3. Select the appropriate registers.
4. Enter values ​​into the source registers.
5. Click the `Apply` button.

## Memory Management
The 8086 Processor Simulator utilizes localStorage to emulate memory for storing values. Each memory location corresponds to a specific address, and you can perform memory operations using the provided assembly instructions.
