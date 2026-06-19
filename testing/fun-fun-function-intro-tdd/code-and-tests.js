/* TDD = Write test before write code */
/* Unit testing: 
1) your unit can be a function that has more than one responsibility 
but your tests should just test one thing at a time to keep complexity simple to understand 
2) Unit Tests can function as a great communication channel to yourself and colleagues in future 
as the tests double as very specific documentation */

// 3 approaches: 
/* TRIANGULATION APPROACH: write the test then figure out what code you would need to 
write in order to pass that test and then loop again through a cycle of red - green - red - green 
Designed to eliminate mistakes from the outset rather than write the code then go on an archaeology 
dig to figure out what to test! */

/* Example of using vanilla JS to write tests */
function orderTotal (){
return orderTotal. items.reduce((prev, current) => current.price * (current.quantity || 1) + prev, 0)
} 

if (orderTotal ({
items: [
    {
        "name": "Dragon Candy", price: 2, quantity: 3
    }
]
}) !== 6) {
    throw new Error("Check fail: Quantity")
}

if (orderTotal ({
items: [
    {
        "name": "Dragon Candy", price: 3, 
    }
]
}) !== 3) {
    throw new Error("Check fail: No quantity specified")
}

if (orderTotal ({
    items: [
        { name: "Dragon food", price: 8, quantity: 1 },
        { name: "Dragon cage (small)", price: 800, quantity: 1},
    ]
}) !==808) {
    throw new Error("Check fail: Happy path (example 1");
}

if (orderTotal ({
    items: [
        { name: "Dragon collar", price: 20, quantity: 1 },
        { name: "Dragon chew toy", price: 40, quantity: 1},
    ]
}) !==60) {
    throw new Error("Check fail: Happy path (example 1");
}

/* OBVIOUS IMPLEMENTION: implement the simplest possible solution - this is less clear 
get to a green test as soon as possible, even if the implementation doesnâ€™t satisfy you. 
Once you get the expected behaviour, with tests to help you, it will be easier to reason 
about the design and take advantage of the refactoring phase of the TDD cycle to improve 
it on an ongoing basis.*/ 

/* FAKE IT TILL YOU MAKE IT */
/* Start by going straight to green by writing the hard coded correct answer in, for example, 
if expected is 800, write return 808 into your function and voila, you're at green:
function orderTotal (){
return 808
} 
Then replace it with the real function you would have implemented. So you checked the test runs then write the function */

/* TRIANGULATION might work best for beginners for a while because its simplest, and gives you 
a feel for test first */