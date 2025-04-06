import { useContext } from "react"
import { CalculatorContext } from "../CalculatorContext"
export default function MortgageAmountInput(){
    const {setMortgageAmount} = useContext(CalculatorContext);
    return (
        <div className="w-[100%]">
          <h2 className="text-[#4E6E7E]">Mortgage Amount</h2> 
          <div className="flex  border border-[#6B94A8] rounded-[5px]">
            <div className="w-[44px] lg:h-[48px] h-[24px] flex justify-center items-center bg-[rgb(228,244,253)] rounded-tl-[5px] rounded-bl-[5px]">£</div>
            <input type="number" className="w-[90%]  rounded-tr-[5px] rounded-br-[5px]" onChange={
              (e)=>{
                setMortgageAmount(Number(e.target.value));
              }
            } />
          </div>
        </div>
    )
}