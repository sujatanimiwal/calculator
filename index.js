const hello = () => {
    return;
};

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};
const divide = (a, b) => {
    if (b === 0)
        return undefined
    return a / b;
};

hello();

module.exports = {
    add,
    subtract,
    divide
};
