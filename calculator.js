window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const { amount, years, rate } = getCurrentUIValues();
  return { amount, years, rate };
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = setupInitialValues();

  let monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principleAmount = values.amount;
  let periodicInterestRate = values.rate / 12;
  let totalNumberOfPayments = values.years * 12;

  let monthlyPayment = (
    (principleAmount * periodicInterestRate) /
    (1 - (1 + periodicInterestRate) ** -totalNumberOfPayments)
  ).toFixed(2);

  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentElement = document.querySelector("#monthly-payment");

  monthlyPaymentElement.textContent = monthly;
}
