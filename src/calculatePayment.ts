
function calculateMonthlyPayment(mortgageAmount: number, annualInterestRate: number, years: number): number {
  const monthlyInterestRate = annualInterestRate / 12 / 100; // Divide by 100 to convert percentage to decimal
  const numberOfPayments = years * 12;
  const monthlyPayment =
    (mortgageAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  return Number(monthlyPayment.toFixed(2));
}
function calculateInterestOnly(mortgageAmount: number, interestAmount: number) {
  return Number((mortgageAmount * (interestAmount / 12)).toFixed(2));
}
export function CalculatePayment(state: { monthlyPayment: number }, action: { type: string, payload?: {
  mortgageAmount: number;
  interestAmount: number; 
  yearsAmount: number;
} }) {
  switch (action.type) {
    case "Repayment":
      if(!action.payload) return state;
      return {
        monthlyPayment: calculateMonthlyPayment(
          action.payload.mortgageAmount,
          action.payload.interestAmount,
          action.payload.yearsAmount
        ),
      };
    case "Interest only":
      if(!action.payload) return state;
      return { monthlyPayment: calculateInterestOnly(action.payload.mortgageAmount, action.payload.interestAmount) }
    default:
      return { monthlyPayment: 0 }
  }
}