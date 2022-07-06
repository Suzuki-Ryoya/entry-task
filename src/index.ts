import { isValid } from "./util/isValid";

//Running the test
const test1 = "()";
console.log(isValid(test1));

const test2 = "([]){}";
console.log(isValid(test2));

const test3 = "({)}";
console.log(isValid(test3));

const test4 = "(){}[]";
console.log(isValid(test4));

const test5 = "({[]})";
console.log(isValid(test5));

const test6 = "({{}})";
console.log(isValid(test6));

const test7 = "({}(})";
console.log(isValid(test7));

const test8 = "(})}";
console.log(isValid(test8));

const test9 = "(())";
console.log(isValid(test9));

const test10 = "({[}])";
console.log(isValid(test10));
