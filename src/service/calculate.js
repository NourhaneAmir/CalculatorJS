class CalculateService {
  static add(val1, val2) {
    return val1 + val2;
  }
  static sub(val1, val2) {
    return val1 - val2;
  }
  static multiply(val1, val2) {
    return val1 * val2;
  }
  static divide(val1, val2) {
    return val1 / val2;
  }

  static calculate(val1, val2, operator) {
    let result;

    switch (operator) {
      case "+":
        result = this.add(val1, val2);
        break;
      case "-":
        result = this.sub(val1, val2);
        break;
      case "*":
        result = this.multiply(val1, val2);
        break;
      case "/":
        result = this.divide(val1, val2);
        break;
    }

    return result;
  }
}

export default CalculateService;
