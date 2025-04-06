import { CalculatorContext } from "../CalculatorContext";
import { useContext } from "react";
interface MortgageType {
  title: string;
}
export default function MortgageType({ title }: MortgageType) {
   const {setMortgageType} = useContext(CalculatorContext)
  return (
    <div className="w-[100%] lg:h-[48px] h-[24px] border border-[#6B94A8] flex items-center gap-[30px] p-[10px] rounded-[5px]">
      <input type="radio" onChange={() => setMortgageType(title)} />
      <h1 className="text-[#133041] font-bold">{title}</h1>
    </div>
  );
}
