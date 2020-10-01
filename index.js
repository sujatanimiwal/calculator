const hello = () => {
    return;
};

const multiply = (a, b) => {
    return a * b;
};

const add = (a, b) => {
    return a + b;
};

const divide = (a, b) => {
    if (b === 0)
        return undefined
    return a / b;
};

hello();

module.exports = {
    add,
    multiply,
    divide
};
