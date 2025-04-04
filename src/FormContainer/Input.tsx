import { useContext } from "react";
import { CalculatorContext } from "../CalculatorContext";
interface InputProps {
  title: string;
  symbol: string;
}
export default function Input({ title, symbol }: InputProps) {
  const {setYearsAmount,setInterestAmount} = useContext(CalculatorContext)
  return (
    <div className="lg:w-[45%] w-[235px]">
      <h2 className="text-[#4E6E7E]">{title}</h2>
      <div className="flex border border-[#6B94A8] rounded-[5px]">
        <input type="number" className=" lg:w-[90%] h-[48px] rounded-tl-[5px] rounded-bl-[5px]" onChange={(e)=>{
          if(title === "Mortgage term"){
            setYearsAmount(Number(e.target.value));
          }else{
            setInterestAmount(Number(e.target.value))
          }
        }}/>
        <div className="w-[64px] h-[48px] p-[20px] flex justify-center items-center bg-[#E4F4FD] rounded-tr-[5px] rounded-br-[5px] font-bold text-[#4E6E7E]">
          {symbol}
        </div>
      </div>
    </div>
  );
}
