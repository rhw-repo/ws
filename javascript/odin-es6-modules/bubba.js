export default function myFunc(num) {
  return num + 1;
}

function myFunc2(num) {
  return num * 2;
}

function myFunc3(num) {
  return num / 3;
}

// Third export uses an alias so must be imported as that alias, 'x'
//export { myFunc, myFunc2, myFunc3 as x };

// Cannot really genuinely simply wildcard export absolutely everything you only end up having to give it an alias
// on the import AND then hvaing to name the exact thing you want to import anyway
//export * from "./bubba.js";

// Typical export is either deafult (plus other exports) or one by one
// export { myFunc, myFunc2, myFunc3 } etc
