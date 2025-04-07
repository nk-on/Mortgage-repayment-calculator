import { CalculatorContext } from "../CalculatorContext";
import { useContext } from "react";
import mortgageTypes from "./MortgageTypes";
interface MortgageType {
  title: string;
  id:number;
  checked:boolean;
}
export default function MortgageType({ title,id,checked}: MortgageType) {
   const {setMortgageType} = useContext(CalculatorContext)
  return (
    <div className="w-[100%] lg:h-[48px] h-[24px] border border-[#6B94A8] flex items-center gap-[30px] p-[10px] rounded-[5px]">
      <input type="radio" checked = {checked} onChange={() => {
        setMortgageType(title);
        mortgageTypes.map((element)=>{
          if(element.id !== id){
            return element.checked = false
          }
          return element.checked = true
        })
      }} />
      <h1 className="text-[#133041] font-bold">{title}</h1>
    </div>
  );
}
