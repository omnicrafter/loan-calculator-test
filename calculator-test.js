describe("Calculate Monthly Payment", () => {
  afterEach(() => {
    values = {
      amount: null,
      years: null,
      rate: null,
    };
  });

  it("should calculate the monthly rate correctly", () => {
    const values = {
      amount: 1000,
      years: 5,
      rate: 5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("416.67");
  });

  it("should return a result with 2 decimal places", () => {
    const values = {
      amount: 5000,
      years: 3343,
      rate: 25,
    };
    let numberAfterDecimal =
      calculateMonthlyPayment(values).split(".")[1].length;
    expect(numberAfterDecimal).toBe(2);
  });

  it("should return a result even if all values are zero", () => {
    const values = {
      amount: 0,
      years: 0,
      rate: 0,
    };

    expect(calculateMonthlyPayment(values)).toBeDefined();
  });

  it("should return NaN if any values are letters", () => {
    const values = {
      amount: 234,
      years: "jjk",
      rate: 12,
    };

    expect(calculateMonthlyPayment(values)).toBe("NaN");
  });
});
