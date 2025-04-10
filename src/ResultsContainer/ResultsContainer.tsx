import { useContext } from "react";
import { CalculatorContext } from "../CalculatorContext";
import ResultsEmpty from "./ResultsEmpty";
import Results from "./Results";
export default function ResultsContainer() {
  const {payment} = useContext(CalculatorContext);
  return (
    <div className="lg:w-[50%] lg:h-[100%] min-h-[60%] w-[100%] bg-[#133041] lg:rounded-bl-[50px] lg:rounded-tr-[30px] p-[30px]">
       {
          payment.monthlyPayment === 0 ? <ResultsEmpty /> : <Results /> 
       }
    </div>
  );
}
