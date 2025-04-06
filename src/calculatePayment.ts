
export function calculateMonthlyPayment(mortgageAmount: number, annualInterestRate: number, years: number): number {
    const monthlyInterestRate = annualInterestRate / 12 / 100; // Divide by 100 to convert percentage to decimal
    const numberOfPayments = years * 12;
    const monthlyPayment =
      (mortgageAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  
    return Number(monthlyPayment.toFixed(2));
}
export function calculateInterestOnly(mortgageAmount: number, interestAmount: number) {
    return Number(mortgageAmount * (interestAmount / 12)).toFixed(2);
}