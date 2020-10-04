const divide = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return "TypeError: Please Provide Numbers";
    }
    if (b === 0)
        return undefined
    return a / b;
};
module.exports = divide;

