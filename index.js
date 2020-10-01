const hello = () => {
    return;
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
    multiply,
    subtract,
    divide
};
