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
    <div className="w-[100%] lg:h-[48px] h-[24px] border border-[#6B94A8] flex items-center gap-[30px] p-[10px] rounded-[5px] hover:bg-[#D8DB2F26]">
      <div className={`border border-[#4E6E7E] w-[24px] h-[24px] rounded-[50%] flex justify-center items-center ${checked && "border-[#D8DB2F]"}`} onClick={()=>{
        setMortgageType(title);
        mortgageTypes.map((element)=>{
          if(element.id !== id){
            return element.checked = false;
          }
          return element.checked = true;
        })
      }}>
        {checked && <div className="bg-[#D8DB2F] w-[14px] h-[14px] rounded-[50%]"></div>}
      </div>
      <h1 className="text-[#133041] font-bold">{title}</h1>
    </div>
  );
}
