import { useContext } from "react";
import { CalculatorContext } from "../CalculatorContext";
interface InputProps {
  title: string;
  symbol: string;
  error:boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Input({ title, symbol,error,setError }: InputProps) {
  const {setYearsAmount,setInterestAmount} = useContext(CalculatorContext);
  // const [errorColor,setErrorColor] = useState('bg-[#E4F4FD]');
  return (
    <div className="lg:w-[45%] w-[235px]">
      <h2 className="text-[#4E6E7E]">{title}</h2>
      <div className="flex border border-[#6B94A8] rounded-[5px] lg:h-[48px] h-[24px]">
        <input type="number" className=" lg:w-[90%]  rounded-tl-[5px] rounded-bl-[5px] outline-none px-[10px] text-[#000] font-bold" onChange={(e)=>{
          if(title === "Mortgage term"){
            setYearsAmount(Number(e.target.value));
          }else{
            setInterestAmount(Number(e.target.value))
          }
          setError(false)
        }}/>
        <div className={`w-[64px] lg:h-[45px] p-[10px] flex justify-center items-center ${error ? 'bg-[#D73328]' : 'bg-[#E4F4FD]'}  rounded-tr-[5px] rounded-br-[5px] font-bold text-[#4E6E7E]`}>
          {symbol}
        </div>
      </div>
      {error && <div className="text-[#D73328]">This field is required</div>}
    </div>
  );
}
