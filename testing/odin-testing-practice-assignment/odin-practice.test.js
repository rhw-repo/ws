import { capitalise } from "./odin-practice";
import { reverseString } from "./odin-practice";
import { calculator } from "./odin-practice";
import { caesarCipher } from "./odin-practice";

test("Capitalises the first word of a string", () => {
    expect(capitalise("hello")).toMatch(/Hello/);
});

test("Checks a string is returned reversed", () => {
    expect(reverseString("hello")).toMatch(/olleh/);
})

test("Checks. takes 2 numbers and returns correct calculation", () => 
    expect(calculator(2, "+", 4)).toBe(6)
) 

test("Shifts each character in a string by 3 places", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})

test("Preserves case for shifted letters", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

test("Punctuation, spaces and non-aplhabetical characters remain unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})