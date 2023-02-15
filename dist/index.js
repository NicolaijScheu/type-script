"use strict";
let sales = 131001;
let tutorialName = "Typescript";
let isLearning = true;
let lvl;
lvl = 1;
lvl = "super";
let numbers = [1, 2, 3];
for (const n of numbers) {
    const exponent = n.toString();
    console.log(exponent);
}
let user = [1, "Martin Router King"];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(price) {
    return price * 0.19;
}
console.log(calculateTax(10));
let employee = {
    id: 1,
    name: "Bodo",
    retire: (date) => {
        console.log(date);
    },
};
let gronkowski = {
    id: 69,
    name: "Robert",
    retire: (date) => console.log(date, "never"),
};
function kgToLbs(weight) {
    const conversionRate = 2.2046;
    if (typeof weight === "number") {
        return weight * conversionRate;
    }
    else {
        return parseInt(weight) * conversionRate;
    }
}
console.log(kgToLbs(1));
console.log(kgToLbs("1"));
//# sourceMappingURL=index.js.map