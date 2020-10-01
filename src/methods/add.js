const add = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
      return "TypeError: Please Provide Numbers";
    }
    return a + b;
  };

module.exports = add;
