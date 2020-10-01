const divide = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
      return "Please Provide Numbers";
    }
    if(b===0){
        return "Denominator can't be Zero"
    }
    return a / b;
  };
  module.exports = divide;