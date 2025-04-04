import { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";
export default function ResultsContainer() {
  const { mortgageAmount, yearsAmount, interestAmount } = useContext(CalculatorContext);
  return (
    <div className="lg:w-[50%] lg:h-[100%] h-[50%] w-[100%] bg-[#133041] lg:rounded-bl-[50px] lg:rounded-tr-[30px] rounded">
    </div>
  );
}
