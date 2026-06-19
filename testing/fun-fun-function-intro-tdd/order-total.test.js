const { default: expect } = require("expect");
const orderTotal = require("./order-total");

/* If nothing blows up in the test it will pass - 
so you could write an empty test and it will pass! */

it("Quantity", () => 
    expect(orderTotal ({
        items: [
    { "name": "Dragon Candy", price: 2, quantity: 3 }
]
})).toBe(6))

it("No quantity specified", () =>
expect(orderTotal ({
        items: [
    {
        "name": "Dragon Candy", price: 3, 
    }
]
})).toBe(3)
)

it("Happy path (example 1", () => 
expect(orderTotal ({
 items: [
        { name: "Dragon food", price: 8, quantity: 1 },
        { name: "Dragon cage (small)", price: 800, quantity: 1},
    ]
})).toBe(808)
)

it("Happy path (example 2)", () => 
    expect(orderTotal ({
        items: [
        { name: "Dragon collar", price: 20, quantity: 1 },
        { name: "Dragon chew toy", price: 40, quantity: 1},
    ]
    })).toBe(60)
)
