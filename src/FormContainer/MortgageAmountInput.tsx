import { useContext} from "react";
import { CalculatorContext } from "../CalculatorContext";
interface MortgageAmountInputProps {
  error:boolean,
  setError: React.Dispatch<React.SetStateAction<boolean>>
}
export default function MortgageAmountInput({error,setError}:MortgageAmountInputProps) {
  const { setMortgageAmount } = useContext(CalculatorContext);
  return (
    <div className="w-[100%] group">
      <h2 className="text-[#4E6E7E]">Mortgage Amount</h2>
      <div className="flex  border border-[#6B94A8]   rounded-[5px]">
        <div className={` group-hover:bg-[rgb(216,219,47)] w-[44px] lg:h-[48px] h-[24px] flex justify-center items-center ${error ? 'bg-[#D73328]':'bg-[rgb(228,244,253)]' } rounded-tl-[5px] rounded-bl-[5px]`}>
          £
        </div>
        <input
          type="number"
          className="w-[90%]  rounded-tr-[5px] rounded-br-[5px] outline-none px-[10px] font-bold text-[#000] cursor-pointer border group-hover:border-[rgb(216,219,47)]"
          onChange={(e) => {
            setMortgageAmount(Number(e.target.value));
            setError(false)
          }}
        />
      </div>
      {error && <div className="text-[#D73328]">This field is required</div>}
    </div>
  );
}
